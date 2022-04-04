const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack-common");
const CopyPlugin = require("copy-webpack-plugin");

const configuration = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    host: "0.0.0.0",
    port: 9090,
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api/**': {
        target: 'http://[::1]:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/api': '' } // This instead of nginx proxy
      }
    }
  }
});

module.exports = configuration;
