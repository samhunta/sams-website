/* eslint-disable */
var path = require('path')
var webpack = require('webpack')
var loaders = require('./webpack.loaders')

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'application.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: loaders
  }
}
