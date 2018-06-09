const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.config.base.js')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
