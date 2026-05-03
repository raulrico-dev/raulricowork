// @ts-check
import { defineConfig, fontProviders, envField } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  },

  output: 'server',
  adapter: cloudflare(),

  env: {
    schema: {
      DB_NAME: envField.string({ context: 'server', access: 'public' }),
    }
  },
  
  fonts: [
    {
      name: "DM Sans",
      provider: fontProviders.google(), // Or fontProviders.fontsource()
      cssVariable: "--font-dm-sans",
    },
    {
      name: "Elms Sans",
      provider: fontProviders.google(),
      cssVariable: "--font-elms-sans",
    },
  ]
});