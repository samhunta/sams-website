/* eslint-disable */
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')
const path = require('path')

new WebpackDevServer(webpack(config), {
  contentBase: path.join(__dirname, 'public'),
  publicPath: config.output.publicPath,
  progress: true,
  colors: true,
  profile: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err)
  }
  console.log('Development server listening at http://localhost:3000')
})
