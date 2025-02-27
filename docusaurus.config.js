module.exports = {
  title: 'Cityflow',
  tagline: 'Workflows for City Sciences',
  url: 'https://cityflow.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'CityFlow',
  projectName: 'cityflow.github.io',
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '中文',
      },
    },
  },

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'CityFlow',
      logo: {
        alt: 'Logo',
        src: 'img/cflogo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'documents',
          position: 'left',
          label: 'Documents',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://cityflow.cn',
          label: 'CityFlow Platform',
          position: 'right',
        },
        {
          href: 'https://github.com/kekehurry/cityflow_platform',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    footer: {
      // logo: {
      //   alt: 'Logo',
      //   src: 'img/cflogo_black_100x100.png',
      //   href: 'https://cityflow.cn',
      // },
      // logo: {
      //   alt: 'Logo',
      //   src: 'img/cflogo_black_100x100.png',
      //   href: 'https://cityflow.cn',
      // },
      // logo: {
      //   alt: 'Logo',
      //   src: 'img/cflogo_black_100x100.png',
      //   href: 'https://cityflow.cn',
      // },
      copyright: `CityFlow, ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
          // editUrl: '/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
};
