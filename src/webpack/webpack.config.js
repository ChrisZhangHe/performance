const devConfig = require("./config/webpack.dev");
const proConfig = require("./config/webpack.pro");

module.exports = (env, args) => {
  switch (args.mode) {
    case "development":
      return devConfig;
    case "production":
      return proConfig;
    default:
      throw new Error("No matching configuration was found!");
  }
};
