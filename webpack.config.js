path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: './palette-generator.js',
    library: 'PaletteGenerator',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  }
};
