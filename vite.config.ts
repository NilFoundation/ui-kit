import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { externalizeDeps } from 'vite-plugin-externalize-deps';
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

export default defineConfig(({mode}) => {
  const plugins = [react(), eslint({include: ['./src/**/*.ts', './src/**/*.tsx']})];
  const isStandalone = mode === 'standalone';

  if (!isStandalone) {
    plugins.push(
      externalizeDeps(),
      dts({ staticImport: true, outputDir: './dist/.temp' }),
    );
  }

  return ({
    plugins: plugins,
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        formats: isStandalone ? ['iife'] : ['es', 'cjs'],
        name: 'NilFoundationUIKit',
      },
      rollupOptions: {
        output: {
          banner: createBanner(),
          sourcemap: true,
        },
      },
    },
  })
});
