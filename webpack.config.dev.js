const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');

module.exports = merge(base, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  }
});