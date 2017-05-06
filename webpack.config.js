const path = require('path');
const webpack = require('webpack');

// webpack & Typescript https://webpack.js.org/guides/webpack-and-typescript/

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.ts'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      // // source maps, use webpack 2.1.0-beta.6: https://github.com/webpack/webpack/issues/2725
      // {
      //  enforce: 'pre',
      //  test: /\.js$/,
      //  loader: "source-map-loader"
      // },
      // {
      //   enforce: 'pre',
      //   test: /\.tsx?$/,
      //   use: "source-map-loader"
      }
    ]
  },
  // resolve: {
  //   extensions: [".tsx", ".ts", ".js"]
  // },
  // devtool: 'source-map',
  // // Add minification
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     sourceMap: true
  //   })
  // ],
};