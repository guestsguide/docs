import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import navigation from "./src/navigation.js";

export default defineConfig({
  site: "https://docs.guestsguide.com",
  integrations: [starlight(navigation)],
});
