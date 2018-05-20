const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const plugins =
  process.env.NODE_ENV === "production"
    ? [
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
        })
      ]
    : [];

module.exports = {
  devtool: process.env.NODE_ENV === "production" ? false : "source-map",
  entry: [
    require.resolve("babel-polyfill"),
    path.resolve(__dirname, "src", "index.js")
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name]-[hash].js",
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/"
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["es2015", "react"],
                cacheDirectory: true
              }
            }
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: "./build",
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/
    },
    hot: false,
    host: "127.0.0.1",
    port: "3000",
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve("src", "index.html")
    }),
    new ExtractTextPlugin({
      filename: "style.[hash].css",
      allChunks: true
    }),

    ...plugins
  ]
};
