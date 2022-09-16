const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { index: "./src/index.js" },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist"),
    // clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    // html打包插件
    new HtmlWebpackPlugin({
      title: "webpack",
      template: "./public/index.html",
    }),
  ],
  target: "web", // 目标是浏览器
};
