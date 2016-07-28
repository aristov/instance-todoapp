'use strict';

const webpack = require('webpack');

module.exports = {
    entry : './TodoApp',
    output : {
        path: __dirname + '/build',
        filename : 'index.build.js'
    },
    module : {
        loaders : [
            { test : /\.js$/, loader : 'babel?presets[]=es2015' },
            { test : /\.css$/, loader : 'style-loader!css-loader' },
            { test : /\.svg/, loader : 'svg-url-loader' }
        ]
    },
    plugins : [
        new webpack.optimize.UglifyJsPlugin({
            compress : { warnings : false },
            mangle : { keep_fnames : true }
        })
    ],
    resolve: {
        modulesDirectories: ['node_modules']
    },
    watch : false
};
