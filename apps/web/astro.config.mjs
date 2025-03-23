// @ts-check
import {defineConfig, envField} from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import mdx from "@astrojs/mdx";

import node from "@astrojs/node";

export default defineConfig({
  env: {
    schema: {
      PUBLIC_API_URL: envField.string({ context: "client", access: "public", optional: true }),
      PORT: envField.number({ context: "server", access: "public", default: 4321 }),
      SECRET_API: envField.string({ context: "server", access: "secret" }),
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), mdx()],

  adapter: node({
    mode: "standalone"
  })
});