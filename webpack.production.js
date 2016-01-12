var path = require('path');
var webpack = require('webpack');

var paths = {
    modules: path.resolve(__dirname, 'node_modules'),
    api: path.resolve(__dirname, 'api'),
    app: path.resolve(__dirname, 'react'),
    build: path.resolve(__dirname, 'public', 'build')
};

module.exports = {
    entry: path.join(paths.app, 'index.js'),
    output: {
        path: paths.build,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [{
            test: /\.js(x)?$/,
            loaders: ['babel'],
            exclude: [paths.modules, paths.api]
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }, {
            test: /\.jpg$/,
            loader: 'file'
        }]
    }
};