var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'front/index.jsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
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