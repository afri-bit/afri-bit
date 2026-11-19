// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Served from the custom domain (public/CNAME), so pages live at the root.
  site: 'https://www.afri-bit.com',
});
