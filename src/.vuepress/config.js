const { description } = require("../../package");

const config = {
  title: "Guests Guide Docs",
  description: description,
  base: "/",
  head: [
    ["meta", { name: "theme-color", content: "#000000" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["meta", { name: "robots", content: "index,follow" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap",
      },
    ],
  ],
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
  },
  themeConfig: {
    darkMode: false,
    repo: "guestsguide/docs",
    editLink: true,
    docsBranch: "master",
    docsDir: "src",
    lastUpdated: false,
    contributors: false,
    sidebarDepth: 1,
    navbar: [
      {
        text: "Guests Guide",
        link: "https://guestsguide.com",
      },
    ],
    locales: {
      "/en/": {
        selectLanguageText: "Languages",
        selectLanguageName: "English",
        editLinkText: "Edit this page on GitHub",
      },
      "/de/": {
        selectLanguageText: "Sprachen",
        selectLanguageName: "Deutsch",
        editLinkText: "Diese Seite auf GitHub bearbeiten",
      },
    },
    sidebar: {
      "/en/": require("../en/sidebar.json"),
      "/de/": require("../de/sidebar.json"),
    },
  },
  locales: {
    "/en/": {
      lang: "en_US",
    },
    "/de/": {
      lang: "de_DE",
    },
  },
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/de/": {
            placeholder: "Suche",
          },
          "/en/": {
            placeholder: "Search",
          },
        },
      },
    ],
    [
      "@vuepress/plugin-external-link-icon",
      {
        locales: {
          "/": {
            openInNewWindow: "open in new window",
          },
          "/zh/": {
            openInNewWindow: "在新窗口打开",
          },
        },
      },
    ],
  ],
};

module.exports = config;
