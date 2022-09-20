const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { index: "./src/index.js" },
  output: {
    filename: "[name].[chunkhash:5].js",
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
  optimization: {
    // usedExports:false,
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        // async: {
        //   chunks: "async",
        //   minChunks: 1,
        //   priority: 10,
        //   reuseExistingChunk: true,
        //   name: "async",
        // },
        initial: {
          chunks: "initial",
          minChunks: 1,
          priority: 1,
          reuseExistingChunk: true,
          name: "initial",
        },
        // vendors: {
        //   test: /[\\/]node_modules[\\/]/,
        //   priority: -10,
        //   reuseExistingChunk: true,
        //   name: "vendors",
        // },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true,
          name: "default",
        },
      },
    },
  },
  target: "web", // 目标是浏览器
};
