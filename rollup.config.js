import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from "rollup-plugin-postcss";
import filesize from 'rollup-plugin-filesize';

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            postcss({
                extract: false,
                minimize: true,
                sourceMap: true
            }),
            typescript({
                tsconfig: "./tsconfig.json",
                exclude: ["**/__tests__", "**/*.test.tsx", "**/*.stories.**"],
                noEmitOnError: true,
            }),
            terser({
                format: {
                    comments: false
                },
            }),
            filesize(),
        ],
        external: ['react', 'react-dom']
    }
];
