const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    output: {
        filename: 'js/main.min.js'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader?minimize&sourceMap'
            })
        }]
    },
    plugins: [
        new UglifyJsPlugin({sourceMap: true}),
        new ExtractTextPlugin('css/main.min.css')
    ]
};
