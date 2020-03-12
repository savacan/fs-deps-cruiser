/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const file = (...args) => path.resolve(__dirname, ...args);
const fs = require("fs");

module.exports = {
  module: {
    rules: [
      {
        test: [/\.m?js$/, /\.js$/, /\.ts$/, /\.tsx$/],
        exclude: /node_modules/,
        loader: "babel-loader",
        options: JSON.parse(
          fs.readFileSync(path.resolve(__dirname, "./.babelrc"))
        )
      },
      {
        test: [/\.ts$/, /\.tsx$/],
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: ["node_modules"]
    // alias: {
    //   "@": file("src")
    // }
  }
};
