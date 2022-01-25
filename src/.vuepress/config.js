const CopyPlugin = require("copy-webpack-plugin");
const { description } = require("../../package");

const config = {
  title: "Guests Guide Docs",
  description: description,
  base: "/",
  head: [
    ["meta", { name: "theme-color", content: "#000000" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["meta", { name: "robots", content: "index,follow" }],
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" }],
  ],
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
  },
  themeConfig: {
    // repo: "nerdchandise/ndsf-guide",
    editLinks: false,
    docsDir: "",
    sidebarDepth: 1,
    editLinks: false,
    lastUpdated: false,
    nav: [
      {
        text: "Guests Guide",
        link: "https://guestsguide.com",
      },
    ],
    sidebar: {
      "/en/": [
        {
          title: "Guide",
        },
      ],
      "/de/": [
        {
          title: "Guide",
          children: ["guide/", "guide/guide", "guide/languages", "guide/pages", "guide/appearance"],
        },
        {
          title: "Pakete",
          link: "packages/",
          children: ["packages/basic", "packages/standard", "packages/premium", "packages/free"],
        },
      ],
    },
    locales: {
      "/en/": {
        selectText: "Languages",
        label: "English",
      },
      "/de/": {
        selectText: "Sprachen",
        label: "Deutsch",
      },
    },
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/en/": {
      lang: "en_US",
    },
    "/de/": {
      lang: "de_DE",
    },
  },
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [{ from: "src/.vuepress/static", to: "./" }],
      }),
    ],
    resolve: {
      alias: {
        "@": "../",
      },
    },
  },

  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-task-lists"));
    },
  },
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    [
      "vuepress-plugin-redirect",
      {
        // provide i18n redirection
        // it will automatically redirect `/foo/bar/` to `/:locale/foo/bar/` if exists
        locales: true,
        redirectors: [
          {
            base: "/",
            alternative: ["en", "de"],
          },
        ],
      },
    ],
    [
      "vuepress-plugin-clean-urls",
      {
        normalSuffix: "/",
        indexSuffix: "/",
        notFoundPath: "/404/",
      },
    ],
  ],
};

for (const group of Object.values(config.themeConfig.sidebar)) {
  for (const section of group) {
    if (section.collapsable) continue;
    section.collapsable = false;
  }
}

module.exports = config;
