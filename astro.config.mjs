import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLlmsTxt from "starlight-llms-txt";
import navigation from "./src/navigation.js";

export default defineConfig({
  site: "https://docs.guestsguide.com",
  devToolbar: {
    enabled: false,
  },
  integrations: [
    starlight({
      ...navigation,
      customCss: ["./src/styles/custom.css"],
      plugins: [starlightLlmsTxt()],
    }),
  ],
});
