const path = require('path');

module.exports = {
    mode: 'development',
    devtool: "source-map", 
    context: path.resolve('src'),
    entry: ['./index', './scss/styles.scss'],
    output: {
        path: path.resolve(__dirname, '/build/'),
        publicPath: '/dist/',
        filename: "bundle.js"
    },
    devServer: {
        contentBase: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    }
};