import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import eslint from 'vite-plugin-eslint';

const packageJson = require('./package.json');

/** Create banner */
const createBanner = () => {
  return `/**!
 * @nilfoundation/ui-kit v${packageJson.version}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */`;
}

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    dts({ staticImport: true, outputDir: './dist/.temp' }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ["react", "react-dom", "baseui", "styletron-react"],
      output: {
        banner: createBanner(),
        sourcemap: true,
      },
    },
  },
  publicDir: "./src/assets/",
});