const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: [
    './src/index.js',
    './src/styles/index.scss'
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  }
}
