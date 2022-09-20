const prodConfig = require("./webpack.prod");
const { merge } = require("webpack-merge");
const path = require("path");
const UnusedWebpackPlugin = require("unused-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(prodConfig, {
  plugins: [
    new UnusedWebpackPlugin({
      directories: [path.join(__dirname, "../src")],
      root: path.join(__dirname, "../../"),
    }),
    new BundleAnalyzerPlugin(),
  ],
});
