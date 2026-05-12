export default {
  title: "Guests Guide Docs",
  logo: {
    src: "./src/assets/guests-guide-light.svg",
    alt: "Guests Guide Logo",
    replacesTitle: true,
  },
  customCss: ["./src/styles/custom.css"],
  components: {
    ThemeSelect: "./src/components/ThemeSelect.astro",
    ThemeProvider: "./src/components/ThemeProvider.astro",
  },
  defaultLocale: "root",
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    de: {
      label: "Deutsch",
      lang: "de",
    },
  },
  credits: false,
  sidebar: [
    {
      label: "Guide",
      translations: {
        en: "Guide",
      },
      items: [{ autogenerate: { directory: "guide" } }],
    },
    {
      label: "Leitfäden",
      translations: {
        en: "Guidelines",
      },
      items: [{ autogenerate: { directory: "guidelines" } }],
    },
    {
      label: "Pakete",
      translations: {
        en: "Packages",
      },
      items: [{ autogenerate: { directory: "packages" } }],
    },
  ],
};
