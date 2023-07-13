import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { optimizeCssModules } from 'vite-plugin-optimize-css-modules';
import sassDts from 'vite-plugin-sass-dts';
import { checker } from 'vite-plugin-checker';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

import TurboConfig from './turbo.json';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "assets/styles" as common;`,
          importer(...args) {
            if (args[0] !== 'assets/styles') {
              return;
            }

            return {
              file: `${path.resolve(__dirname, './src/assets/styles')}`,
            };
          },
        },
      },
    },
    plugins: [
      react(),
      VitePWA({
        manifest: {
          name: 'Turbo React App',
          short_name: 'TRA',
          start_url: '/',
          display: 'standalone',
          background_color: '#ffffff',
          lang: 'en',
          scope: '/',
          icons: [
            {
              src: '/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any maskable',
            },
            {
              src: '/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
          theme_color: '#ffffff',
        },
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true,
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        },
        injectRegister: 'script',
      }),
      ViteMinifyPlugin(),
      svgr(), //https://github.com/aleclarson/vite-tsconfig-paths#readme
      tsconfigPaths({
        root: './',
      }),
      optimizeCssModules(),
      !process.env.VITEST
        ? checker({
            typescript: true,
            eslint: {
              lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
            },
          })
        : undefined,
      sassDts({
        enabledMode: ['development', 'production'],
        global: {
          generate: true,
          outputFilePath: path.resolve(__dirname, './src/style.d.ts') as string,
        },
      }),
    ],
    server: {
      port: Number(env[`${TurboConfig.prefixEnv}_CLIENT_PORT`]),
    },
    mode: TurboConfig.mode,
    envPrefix: TurboConfig.prefixEnv,
  };
});
