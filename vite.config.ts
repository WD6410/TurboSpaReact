import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { optimizeCssModules } from 'vite-plugin-optimize-css-modules';
import sassDts from 'vite-plugin-sass-dts';
import { checker } from 'vite-plugin-checker';

import TurboConfig from './turbo.json';
import path from 'path';

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
          outFile: path.resolve(__dirname, './src/style.d.ts'),
        },
      }),
    ],
    server: {
      port: Number(env[`${TurboConfig.prefixEnv}_CLIENT_PORT`]),
    },
    mode: TurboConfig.mode,
    envPrefix: TurboConfig.prefixEnv,
    // resolve: {
    //   alias: [
    //     { find: '@', replacement: path.resolve(__dirname, 'src') },
    //     {
    //       find: '@assets',
    //       replacement: path.resolve(__dirname, 'src/assets'),
    //     },
    //     {
    //       find: '@components',
    //       replacement: path.resolve(__dirname, './src/components'),
    //     },
    //   ],
    // },
  };
});
