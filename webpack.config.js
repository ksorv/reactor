var path = require("path");
var HTMLWebpackPlugin = require("html-webpack-plugin");
var InterpolateHtmlPlugin = require("react-dev-utils/InterpolateHtmlPlugin");

var publicURL = "/public";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },

  module: {
    rules: [
      { test: /\.(js)$/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      inject: true,
      template: "public/index.html",
    }),
    new InterpolateHtmlPlugin(HTMLWebpackPlugin, { PUBLIC_URL: publicURL }),
  ],

  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
