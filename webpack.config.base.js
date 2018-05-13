const path = require('path')

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  }
}
