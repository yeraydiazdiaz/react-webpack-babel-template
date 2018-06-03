/* global module */
const path = require('path')

module.exports = function (config) {
  config.set({
    basePath: 'tests/',
    frameworks: ['mocha', 'sinon-chai', 'pact'],
    // the Pact options will go here, you can start
    // as many providers as you need
    pact: [{
      consumer: 'AnimalApp',
      provider: 'AnimalService',
      port: 2202,
      log: path.resolve(process.cwd(), 'logs', 'pact.log'),
      dir: path.resolve(process.cwd(), 'pacts'),
      logLevel: 'INFO',
      spec: 2,
      cors: true
    }],
    // ensure Pact and default karma plugins are loaded
    plugins: [
      'karma-*',
      '@pact-foundation/karma-pact'
    ],
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
      mocha: {
        opts: 'mocha.opts'
      },
      chai: {
        includeStack: true
      }
    },
    preprocessors: {
      '**/*.js': ['webpack', 'sourcemap']
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
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
