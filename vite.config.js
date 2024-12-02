import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import Sitemap from 'vite-plugin-sitemap';

const routes = ['shop', 'info', 'disclaimer', 'contact'];
// const dynamicRoutes = routes.map((route) => `/${route}`);
const dynamicRoutes = routes.map((route) => `de/${route}`);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Sitemap({
      readable: true,
      // this doesn't work
      // hostname: 'http://localhost/de',
      dynamicRoutes,
      i18n: {
        languages: ['de', 'en'],
        strategy: 'prefix',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
