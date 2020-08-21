const path = require('path');
const outputPath = path.join(__dirname, 'docs');

module.exports = {
  entry: './docs/index.js',
  mode: 'production',
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      include: [outputPath],
      loader: 'babel-loader'
    }]
  },
  devServer: {
    contentBase: outputPath,
    port: 8800,
    watchContentBase: true
  }
};
