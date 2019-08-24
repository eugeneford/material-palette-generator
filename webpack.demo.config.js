path = require('path');

module.exports = {
  entry: './demo/index-src',
  output: {
    filename: './demo/index.js'
  },

  devtool: 'source-map',

  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'src/'),
        path.resolve(__dirname, 'demo/'),
      ],
      loader: 'babel-loader'
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  }
};
