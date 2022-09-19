const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "production", // process.env.NODE_ENV,
  output: {
    clean: true,
  },
  // devtool: "source-map",
  plugins: [new ESLintPlugin({})],
  target: "web", // 目标是浏览器
});
