export default {
  title: "Guests Guide Docs",
  logo: {
    dark: "./src/assets/guests-guide-light.svg",
    light: "./src/assets/guests-guide-dark.svg",
    alt: "Guests Guide Logo",
    replacesTitle: true,
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
      autogenerate: { directory: "guide" },
    },
    {
      label: "Leitfäden",
      translations: {
        en: "Guidelines",
      },
      autogenerate: { directory: "guidelines" },
    },
    {
      label: "Pakete",
      translations: {
        en: "Packages",
      },
      autogenerate: { directory: "packages" },
    },
  ],
};
