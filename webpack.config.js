/* eslint-disable */
var path = require('path')
var webpack = require('webpack')
var loaders = require('./webpack.loaders')

module.exports = {
  devtool: 'eval',
  cache: true,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
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
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: loaders
  }
}
