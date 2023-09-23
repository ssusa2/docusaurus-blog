// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Dulumungsil",
  // tagline: '두루뭉실 - 특별히 모나거나 튀지 않고 골고루 ',
  titleDelimiter: '-', // Defaults to `|`
  favicon: 'img/favicon.ico',
  themes: ['@docusaurus/theme-live-codeblock'],
  // Set the production url of your site here
  url: 'https://dulumungsil.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ssusa2', // Usually your GitHub org/user name.
  projectName: 'Dulumungsil', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        //  {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: {
          blogDescription:"특별히 모나거나 튀지 않고 골고루 하려고 노력합니다.",
          routeBasePath: '/', 
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
          
          // blogSidebarTitle: 'All posts',
          blogSidebarCount: 0,
          postsPerPage: "ALL", // blog 메뉴에 들어왔을때, 페이지 당 보여주는 블로그 수
          blogListComponent: '@theme/BlogListPage', // 블로그 리스트 컴포넌트
          blogPostComponent: '@theme/BlogPostPage', // 블로그 디테일 컴포넌트
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({locale, blogDirPath, blogPath, permalink}) =>
          `https://github.com/ssusa2/docusaurus-blog/blob/master/${blogDirPath}/${blogPath}`,
          editLocalizedFiles: false,
          include: ['**/*.{md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // hideOnScroll:true, 
        title: '두루뭉실',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ssusa2',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Dulumungsil, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
    }),
};

module.exports = config;
