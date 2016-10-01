var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'vendor': './src/vendor.js',
        'app': './src/app.js'
    },
    resolve: {
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.scss$/,
                //exclude: [],
                loader: ExtractTextPlugin.extract('css!sass')
            }
            //,
            // {
            //     test: /\.scss$/,
            //     include: [],
            //     loaders: ['raw-loader', 'sass-loader?sourceMap']
            // }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app','vendor']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};