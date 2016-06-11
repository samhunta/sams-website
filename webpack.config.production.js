/* eslint-disable */
var path = require('path')
var webpack = require('webpack')
var loaders = require('./webpack.loaders')

module.exports = {
  entry: [
    './src/index'
  ],
  plugins: [
    new webpack.EnvironmentPlugin([
      "NODE_ENV"
    ])
  ],
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: 'application.js',
    publicPath: process.env.PUBLIC_PATH || '/assets/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: loaders
  }
}
