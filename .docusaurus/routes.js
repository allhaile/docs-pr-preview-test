import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs-pr-preview-test/__docusaurus/debug',
    component: ComponentCreator('/docs-pr-preview-test/__docusaurus/debug', '464'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/__docusaurus/debug/config',
    component: ComponentCreator('/docs-pr-preview-test/__docusaurus/debug/config', '8e1'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/__docusaurus/debug/content',
    component: ComponentCreator('/docs-pr-preview-test/__docusaurus/debug/content', 'a7e'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/__docusaurus/debug/globalData',
    component: ComponentCreator('/docs-pr-preview-test/__docusaurus/debug/globalData', 'eb7'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/__docusaurus/debug/metadata',
    component: ComponentCreator('/docs-pr-preview-test/__docusaurus/debug/metadata', 'e34'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/__docusaurus/debug/registry',
    component: ComponentCreator('/docs-pr-preview-test/__docusaurus/debug/registry', '0ef'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/__docusaurus/debug/routes',
    component: ComponentCreator('/docs-pr-preview-test/__docusaurus/debug/routes', '625'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/api-tester',
    component: ComponentCreator('/docs-pr-preview-test/api-tester', 'c29'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/blog',
    component: ComponentCreator('/docs-pr-preview-test/blog', '9e6'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/blog/archive',
    component: ComponentCreator('/docs-pr-preview-test/blog/archive', 'a23'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/blog/authors',
    component: ComponentCreator('/docs-pr-preview-test/blog/authors', 'af6'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/docs-pr-preview-test/blog/authors/all-sebastien-lorber-articles', 'f9a'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/blog/authors/yangshun',
    component: ComponentCreator('/docs-pr-preview-test/blog/authors/yangshun', 'e31'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/blog/first-blog-post',
    component: ComponentCreator('/docs-pr-preview-test/blog/first-blog-post', 'ec9'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/blog/long-blog-post',
    component: ComponentCreator('/docs-pr-preview-test/blog/long-blog-post', '458'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/blog/mdx-blog-post',
    component: ComponentCreator('/docs-pr-preview-test/blog/mdx-blog-post', '4f4'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/blog/tags',
    component: ComponentCreator('/docs-pr-preview-test/blog/tags', 'b8f'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/blog/tags/docusaurus',
    component: ComponentCreator('/docs-pr-preview-test/blog/tags/docusaurus', 'ee5'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/blog/tags/facebook',
    component: ComponentCreator('/docs-pr-preview-test/blog/tags/facebook', 'ade'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/blog/tags/hello',
    component: ComponentCreator('/docs-pr-preview-test/blog/tags/hello', '723'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/blog/tags/hola',
    component: ComponentCreator('/docs-pr-preview-test/blog/tags/hola', '640'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/blog/welcome',
    component: ComponentCreator('/docs-pr-preview-test/blog/welcome', '944'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/markdown-page',
    component: ComponentCreator('/docs-pr-preview-test/markdown-page', 'be1'),
    exact: true
  },
  {
    path: '/docs-pr-preview-test/docs',
    component: ComponentCreator('/docs-pr-preview-test/docs', 'ddc'),
    routes: [
      {
        path: '/docs-pr-preview-test/docs',
        component: ComponentCreator('/docs-pr-preview-test/docs', 'd94'),
        routes: [
          {
            path: '/docs-pr-preview-test/docs',
            component: ComponentCreator('/docs-pr-preview-test/docs', 'ac6'),
            routes: [
              {
                path: '/docs-pr-preview-test/docs/category/tutorial---basics',
                component: ComponentCreator('/docs-pr-preview-test/docs/category/tutorial---basics', 'd32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pr-preview-test/docs/category/tutorial---extras',
                component: ComponentCreator('/docs-pr-preview-test/docs/category/tutorial---extras', '567'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pr-preview-test/docs/intro',
                component: ComponentCreator('/docs-pr-preview-test/docs/intro', '3f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pr-preview-test/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs-pr-preview-test/docs/tutorial-basics/congratulations', '421'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pr-preview-test/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs-pr-preview-test/docs/tutorial-basics/create-a-blog-post', 'f2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pr-preview-test/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs-pr-preview-test/docs/tutorial-basics/create-a-document', '85b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pr-preview-test/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs-pr-preview-test/docs/tutorial-basics/create-a-page', '86c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pr-preview-test/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs-pr-preview-test/docs/tutorial-basics/deploy-your-site', '3c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pr-preview-test/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs-pr-preview-test/docs/tutorial-basics/markdown-features', '6bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pr-preview-test/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs-pr-preview-test/docs/tutorial-extras/manage-docs-versions', 'd3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs-pr-preview-test/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs-pr-preview-test/docs/tutorial-extras/translate-your-site', 'c9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs-pr-preview-test/',
    component: ComponentCreator('/docs-pr-preview-test/', '9ab'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
