var path = require('path');

var reporters = ['progress', 'coverage-istanbul'];
var browsers = process.env.TRAVIS ? ['Chrome_travis_ci'] : ['ChromeHeadless'];

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/index.spec.js'
    ],
    preprocessors: {
      'test/index.spec.js': 'webpack'
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
            test: /\.js$/,
            include: [
              path.resolve(__dirname, 'src/'),
              path.resolve(__dirname, 'test/')
            ],
            loader: 'babel-loader'
          },
          {
            test: /\.jsx?$/,
            use: {
              loader: 'istanbul-instrumenter-loader',
              options: { esModules: true }
            },
            enforce: 'post',
            exclude: /node_modules|\.spec\.js$/,
          }
        ]
      },
      resolve: {
        extensions: ['.js']
      }
    },
    reporters: reporters,
    coverageIstanbulReporter: {
      reports: ['html', 'lcov'],
      dir: path.join(__dirname, 'coverage')
    },
    port: 9876,
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    browsers: browsers,
    captureTimeout: 10 * 60 * 1000
  })
};
