var path = require('path');
var webpack = require('webpack');

var paths = {
    modules: path.resolve(__dirname, 'node_modules'),
    app: path.resolve(__dirname, 'app'),
    build: path.resolve(__dirname, 'public', 'build')
};

module.exports = {
    entry: paths.app + '/main.js',
    output: {
        path: paths.build,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
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