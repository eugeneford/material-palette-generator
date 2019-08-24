path = require('path');

module.exports = {
  entry: './docs/index',
  output: {
    filename: './docs/bundle.js'
  },

  devtool: 'source-map',

  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'docs/'),
      ],
      loader: 'babel-loader'
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  }
};
