module.exports = {
    entry: './app/index.jsx',
    output: {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        contentBase: './app',
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    }
}