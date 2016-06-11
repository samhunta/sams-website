/* eslint-disable */
var path = require('path')
var webpack = require('webpack')
var loaders = require('./webpack.loaders')

var pubPath = process.env.NODE_PUB_PATH || "/"

module.exports = {
  entry: [
    './src/index'
  ],
  plugins: [
    new webpack.EnvironmentPlugin([
      "NODE_ENV",
      "NODE_PUB_PATH"
    ])
  ],
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: 'application.js',
    publicPath: pubPath + 'assets/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: loaders
  }
}
