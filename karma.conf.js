/* global module */

module.exports = function (config) {
  config.set({
    basePath: 'tests/',
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      'test*.js'
    ],
    exclude: [],
    webpack: {
      mode: 'development',
      module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react']
            }
          }
        }]
      }
    },
    client: {
      chai: {
        includeStack: true
      }
    },
    preprocessors: {
      '**/*.js': ['webpack', 'sourcemap']
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: false,
    browsers: ['FirefoxHeadless'],
    customLaunchers: {
      'FirefoxHeadless': {
        base: 'Firefox',
        flags: ['-headless']
      }
    },
    reporters: ['mocha'],
    singleRun: true,
    concurrency: Infinity,
    captureTimeout: 180000,
    browserDisconnectTimeout: 180000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 300000
  })
}
