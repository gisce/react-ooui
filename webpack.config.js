const path = require("path");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  // devtool: "inline-source-map",
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
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|mjs|jsx|ts|tsx)$/,
      //   enforce: "pre",
      //   use: ["source-map-loader"],
      // },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCSSExtractPlugin()],
  // plugins: [new BundleAnalyzerPlugin()],
};
