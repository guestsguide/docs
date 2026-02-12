import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLlmsTxt from "starlight-llms-txt";
import navigation from "./src/navigation.js";

export default defineConfig({
  site: "https://docs.guestsguide.com",
  integrations: [starlight({ ...navigation, plugins: [starlightLlmsTxt()] })],
});
