path = require('path');

module.exports = {
  entry: './demo/index',
  output: {
    filename: './demo/bundle.js'
  },

  devtool: 'source-map',

  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'demo/'),
      ],
      loader: 'babel-loader'
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  }
};
