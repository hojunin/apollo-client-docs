// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Apollo Client 한국어 문서",
  tagline: "왜 아무도 번역을 안하는거야",
  url: "https://hojunin.github.io",
  baseUrl: "/apollo-client-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "hojunin",
  projectName: "apollo-client-docs",
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/hojunin/apollo-client-docs",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/hojunin/apollo-client-docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig: {
    gtag: {
      trackingID: "G-Q748MW528E",
    },
    navbar: {
      title: "아폴로 클라이언트 번역본",
      logo: {
        alt: "Apollo",
        src: "img/apollo_logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "문서 보기",
        },
        { to: "/blog", label: "블로그", position: "left" },
        {
          href: "https://github.com/hojunin",
          label: "개발자 : HojunIn",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "HOJUN IN",
          items: [
            {
              label: "문의하기",
              to: "https://github.com/hojunin/apollo-client-docs/issues",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HojunIn`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
