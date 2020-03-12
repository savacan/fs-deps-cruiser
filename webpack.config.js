/* eslint-disable @typescript-eslint/no-var-requires */
const base = require("./webpack.base.config");
const merge = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const file = (...args) => path.resolve(__dirname, ...args);

const config = {
  mode: "development",
  entry: {
    main: file("src", "index.tsx")
  },
  output: {
    path: file("dist"),
    filename: "[name].js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: `vendor`,
          chunks: "initial",
          enforce: true
        }
      }
    }
  },
  devServer: {
    port: 3000,
    host: "localhost",
    historyApiFallback: true,
    disableHostCheck: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: file("src", "index.html"),
      filename: "index.html",
      inject: true
    })
  ]
};

module.exports = merge(base, config);
