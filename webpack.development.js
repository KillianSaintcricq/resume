var path = require('path');
var webpack = require('webpack');

var paths = {
    modules: path.resolve(__dirname, 'node_modules'),
    app: path.resolve(__dirname, 'app'),
    build: path.resolve(__dirname, 'public', 'build')
};

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    paths.app + '/index.jsx'
  ],
  output: {
    path: paths.build,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js(x)?$/,
      loaders: [ 'babel' ],
      exclude: /node_modules/
    }, {
      test: /\.scss?$/,
      loaders: [ 'style', 'css', 'sass' ]
    }]
  }
};