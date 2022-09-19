const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "development", // process.env.NODE_ENV,
  devtool: "source-map",
  plugins: [
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
});
