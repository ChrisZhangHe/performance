const devConfig = require("./config/webpack.dev");
const proConfig = require("./config/webpack.prod");
const analysisConfig = require("./config/webpack.analysis");
module.exports = () => {
  switch (process.env.NODE_ENV) {
    case "dev":
      return devConfig;
    case "build":
      return proConfig;
    case "build_analysis":
      return analysisConfig;
    default:
      throw new Error("No matching configuration was found!");
  }
};
