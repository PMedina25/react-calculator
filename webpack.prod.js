const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'build'), // change this
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './build',
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve('./index.html'),
        }),
      ]
});