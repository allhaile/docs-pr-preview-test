import React, { useState, useEffect } from "react";


const ApiMethodTester = ({ selectedMethod: initialMethod }) => {
  const [authStatus, setAuthStatus] = useState(null);
  const [response, setResponse] = useState(null);
  const [methods, setMethods] = useState([]); // Stores available API methods
  const [selectedMethod, setSelectedMethod] = useState(initialMethod || ""); // Stores the selected method
  const [formData, setFormData] = useState({}); // Stores argument values
  const [requiredFields, setRequiredFields] = useState([]);


  const proxyUrl = "https://slack-api-tester-proxy-lite-af809da3cc80.herokuapp.com/proxy/slack";

  // Fetch available methods from the server
  useEffect(() => {
    fetch("/methods/all-methods.json")
      .then((res) => res.json())
      .then((data) => {
        if (!data || !Array.isArray(data)) {
          console.error("Invalid data format for all-methods.json", data);
          return;
        }

        const methodNames = data.map((method) => method.name); // Extract names
        setMethods(methodNames);

        if (selectedMethod && methodNames.includes(selectedMethod)) {
          setSelectedMethod(selectedMethod); // Auto-select from markdown
        }
      })
      .catch((err) => console.error("Failed to load methods:", err));
  }, [selectedMethod]);

  useEffect(() => {
    if (!selectedMethod) return;

    fetch(`/methods/${selectedMethod}.json`) // Load JSON file for selected method
      .then((res) => res.json())
      .then((data) => {
        if (!data || !data.args_strict) {
          console.error("Invalid method JSON format:", data);
          return;
        }

        initializeFormData(data); // Initialize form with required & optional arguments
      })
      .catch((err) =>
        console.error(`Failed to load ${selectedMethod}.json`, err)
      );
  }, [selectedMethod]);

  const initializeFormData = (methodData) => {
    const requiredArgs = methodData.args_strict?.required || [];
    const allArgs = methodData.args_strict?.properties || {};
  
    const initialData = {};
    Object.keys(allArgs).forEach((key) => {
      initialData[key] = "";
    });
  
    setFormData(initialData);
    setRequiredFields(requiredArgs);
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle API Request Submission
  const handleApiRequest = async () => {
    if (!selectedMethod) {
      setAuthStatus({ success: false, message: "Please select a method." });
      setResponse(null);
      return;
    }

    const cleanedArguments = Object.fromEntries(
        Object.entries(formData).filter(
          ([_, value]) => value !== "" && value !== null && value !== undefined
        )
      );

    const requestBody = {
      methodName: selectedMethod,
      arguments: cleanedArguments, // Include user arguments
    };
    try {
      const res = await fetch(proxyUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();
      setResponse(data);

      setAuthStatus(
        data.ok
          ? {
              success: true,
              message: `Successful request to ${selectedMethod}`,
            }
          : { success: false, message: data.error || "API request failed" }
      );
    } catch (error) {
      console.error("Network error:", error);
      setAuthStatus({ success: false, message: "Network error" });
      setResponse(null);
    }
  };


  const handleClearForm = () => {
    setFormData((prevData) => {
      const resetData = {};
      Object.keys(prevData).forEach((key) => {
        resetData[key] = ""; // Reset each argument field
      });
      return resetData;
    });

    setResponse(null); // Clear API response
    setAuthStatus(null); // Clear status messages
  };

  return (
    <div className="api-tester-container">
      {/* Left Panel: Arguments */}
      <div className="api-tester-left">

        {/* Dropdown for Available API Methods */}
        {!initialMethod && (
          <div style={{ marginBottom: "10px" }}>
            <label>
              Select API Method:
              <select
                value={selectedMethod}
                onChange={(e) => setSelectedMethod(e.target.value)}
              >
                <option value="">-- Select a Method --</option>
                {methods.map((method) => (
                  <option key={method} value={method}>
                    {method}
                  </option>
                ))}
              </select>
            </label>
          </div>
        )}

{Object.entries(formData).length > 0 && (
  <>
    <div className="argument-header">
      <h3 style={{ margin: 0 }}>Arguments</h3>
      <span
        className="info-icon"
        data-tooltip-id="token-tooltip"
        data-tooltip-html="<a href='https://api.slack.com/apps' target='_blank' rel='noopener noreferrer'>Create</a> + install your <a href='https://api.slack.com/apps' target='_blank' rel='noopener noreferrer'>Slack app</a> to get a token."
        data-tooltip-place="right"
      >
        ℹ️
      </span>
      <Tooltip id="token-tooltip" clickable className="custom-tooltip" />
    </div>

    {Object.entries(formData).map(([argName, argValue]) => {
      const isRequired = Array.isArray(requiredFields) && requiredFields.includes(argName);

      return (
        <div key={argName} style={{ marginBottom: "12px" }}>
          <div className="argument-label">
            <span>{argName}</span>
            {isRequired && <span className="argument-required">(required)</span>}
          </div>

          <input
            type="text"
            name={argName}
            value={argValue}
            onChange={handleInputChange}
            placeholder={`Enter ${argName}`}
            className={`argument-input ${isRequired ? "required" : ""}`}
          />
        </div>
      );
    })}
  </>
)}


        {/* Buttons */}
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button
            onClick={handleApiRequest}
            className="greenButton api-tester-button"
          >
            Test Method
          </button>

          <button
            onClick={handleClearForm}
            className="purpleButton api-tester-button"
          >
            Clear
          </button>
        </div>

        {/* Status Message */}
        {authStatus && (
          <p
            style={{
              color: authStatus.success ? "green" : "red",
              marginTop: "10px",
            }}
          >
            {authStatus.message}
          </p>
        )}
      </div>

      {/* Right Panel: API Response */}
      <div className="api-tester-right">
        <h3>API Response</h3>

        <p>
          <strong>Selected Method:</strong>{" "}
          <code>{selectedMethod || "None Selected"}</code>
        </p>

        {/* Formatted API Response */}
        {response && (
          <pre className="api-tester-response">
            {JSON.stringify(response, null, 5)}
          </pre>
        )}
      </div>
    </div>
  );
};


export default ApiMethodTester;
