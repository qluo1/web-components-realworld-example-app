import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import del from "rollup-plugin-delete";
import { terser } from "rollup-plugin-terser";
import sourcemaps from 'rollup-plugin-sourcemaps';

const plugins = [
  del({
   targets: ["public/*", "!public/index.html"],
   watch: true
  }),
  commonjs(),
  resolve({preferBuiltins: false}), // build in failed
  sourcemaps(),
  process.env.NODE_ENV  =="production" && terser()
];

export default {
  input: "app/index.js",
  output: {
    sourcemap: true,
    dir: "public",
    format: "esm"
  },
  preserveEntrySignatures: false,
  plugins
};
