const path = require("path");
const typescript = require("@rollup/plugin-typescript");
const { babel } = require("@rollup/plugin-babel");

module.exports = {
  input: path.resolve(__dirname, "src/index.ts"),
  output: {
    file: path.resolve(__dirname, "dist/index.cjs.js"),
    format: "cjs"
  },
  plugins: [babel({ babelHelpers: "bundled" }), typescript()]
};
