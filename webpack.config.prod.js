const merge = require('webpack-merge')

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const base = require('./webpack.config.base.js')

module.exports = merge(base, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  }
})
