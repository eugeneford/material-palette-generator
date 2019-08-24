path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    filename: './dist/palette-generator.js',
    library: 'PaletteGenerator',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src/')
      ],
      loader: 'babel-loader'
    }]
  },

  resolve: {
    extensions: ['.js']
  }
};
