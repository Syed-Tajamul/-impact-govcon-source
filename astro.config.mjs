/**
 * Impact GovCon Solutions LLC
 * @link https://impactgovconsolutions.com
 */

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://impactgovconsolutions.com",
  integrations: [tailwind(), alpinejs()],
  server: {
    host: true,
  },
});
