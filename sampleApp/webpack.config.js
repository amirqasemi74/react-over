const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

const srcDir = resolve(__dirname, "../src");
const sampeAppDir = resolve(__dirname);

module.exports = {
  devtool: "source-map",
  entry: resolve(sampeAppDir, "index.tsx"),
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@react-store/core": srcDir,
      sampleApp: sampeAppDir,
      src: srcDir,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(sampeAppDir, "index.html"),
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
