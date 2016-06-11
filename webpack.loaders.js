/* eslint-disable */
var path = require('path')

module.exports = [
  {
    test: /\.jsx?$/,
    include: [ path.join(__dirname, 'src') ],
    loaders: ['babel?cacheDirectory']
  },
  {
    test: /\.json$/,
    exclude: /(node_modules|bower_components)/,
    loaders: ['json']
  },
  {
    test: /\.s(a|c)ss$/,
    loader: 'style/useable!css!sass'
  },
  {
    test: /\.css$/,
    loader: 'style/useable!css'
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file'
  },
  {
    test: /\.(woff|woff2)$/,
    loader: 'url?prefix=font/&limit=10000'
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url?limit=10000&mimetype=image/svg+xml'
  },
  {
    test: /\.gif/,
    loader: 'url-loader?limit=5000&mimetype=image/gif'
  },
  {
    test: /\.jpg/,
    loader: 'url-loader?limit=5000&mimetype=image/jpg'
  },
  {
    test: /\.png/,
    loader: 'url-loader?limit=5000&mimetype=image/png'
  },
  {
    test: /\.svg/,
    loader: 'url-loader?limit=5000&mimetype=image/svg+xml'
  },
  {
    test: /\.ico/,
    loader: 'url-loader?limit=5000&mimetype=image/icon'
  }
]
