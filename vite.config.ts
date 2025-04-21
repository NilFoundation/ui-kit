import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { externalizeDeps } from 'vite-plugin-externalize-deps';
import eslint from 'vite-plugin-eslint';
import replace from '@rollup/plugin-replace';

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

const packagesIncludeInStandalone = [
  /baseui\/*/,
  'lightweight-charts',
  '@uiw/react-codemirror',
  '@uiw/codemirror-themes',
  'styletron-standard',
  'styletron-react',
  'copy-to-clipboard',
  'inline-style-expand-shorthand',
  'react/jsx-runtime',
];

export default defineConfig(({mode}) => {
  const isStandalone = mode === 'standalone';
  const plugins = [
    react(),
    eslint({include: ['./src/**/*.ts', './src/**/*.tsx']}),
    externalizeDeps({except: isStandalone ? packagesIncludeInStandalone : []}),
  ];

  if (!isStandalone) {
    plugins.push(
      dts({ staticImport: true, outputDir: './dist/.temp' }),
    );
  }

  return ({
    plugins: plugins,
    build: {
      sourcemap: true,
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        formats: isStandalone ? ['iife'] : ['es', 'cjs'],
        name: 'NilFoundationUIKit',
      },
      rollupOptions: {
        output: {
          banner: createBanner(),
          globals: isStandalone ? {
            react: 'React',
            'react-dom': 'ReactDOM',
          } : undefined,
        },
        plugins: [
          replace({
            preventAssignment: true,
            values: {
              'process.env.NODE_ENV': JSON.stringify('production')
            }
          })
        ],
      },
      outDir: 'dist',
      emptyOutDir: !isStandalone,
    },
  })
});
