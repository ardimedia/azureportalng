// Modules
var webpack = require('webpack');

module.exports = {
    entry: {
        vendor: "./sample/app/vendor.ts",
        app: "./sample/app/app.bootstrap.ts"
    },
    output: {
        path: "./sample/build",
        filename: "[name].js"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    externals: {
        'angular': 'angular',
        'ng-dialog': 'angular.dialog'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'webpack-typescript?target=es5&module=commonjs'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js")
    ]
};