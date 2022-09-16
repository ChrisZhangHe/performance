const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { index: "./src/index.js" },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "development", // process.env.NODE_ENV,
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
    new ESLintPlugin({
      lintDirtyModulesOnly: true,
    }),
  ],
  devServer: {
    static: {
      // 静态资源默认路径
      directory: path.join(__dirname, "dist"),
    },
    // compress: true, // 启用gzip压缩
    port: 8080, // 端口
    // open: true, // 自动打开服务
    hot: true, // 热加载
    // devMiddleware: {
    //   // 用于检测文件更改自动打包，并刷新页面
    //   index: true,
    //   mimeTypes: { phtml: "text/html" },
    //   publicPath: "/",
    //   serverSideRender: true,
    //   writeToDisk: true,
    // },
  },
  target: "web", // 目标是浏览器
};
