import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
        type: 'module', // prevent error can't use import outside of module
      },
      injectRegister: 'auto',
      strategies: 'injectManifest',
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      srcDir: 'src',
      filename: 'sw.ts',
      manifest: {
        name: 'BookListPWA',
        short_name: 'Books',
        start_url: '/',
        display: 'standalone',
        icons: [
          {
            src: '/icons/icon-512.png',
            type: 'image/png',
            sizes: '512x512',
          },
          {
            src: '/icons/icon-192.png',
            type: 'image/png',
            sizes: '192x192',
          },
        ],
        theme_color: '#ffffff',
        background_color: '#f8f8ff',
        description: 'get a list of popular Books',
        categories: ['books', 'Productivity'],
      },
    }),
  ],
  build: {
    sourcemap: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
