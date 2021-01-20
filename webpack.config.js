const path = require("path");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  output: {
    globalObject: "this",
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "react-ooui",
    libraryTarget: "umd",
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    antd: "antd",
    "@ant-design/icons": "@ant-design/icons",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // plugins: [new BundleAnalyzerPlugin()],
};
