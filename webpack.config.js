// module.exports = {
//     mode: 'development',
//     entry:'./src/app.js',
//     output:{
//         filename:'./dist/app.bundle.js'
//     },

// }

var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
//the place we put the generated files
var BUILD_DIR = path.join(__dirname, 'dist');
//the place we get the original files
var APP_DIR = path.join(__dirname, 'src');
//vendor libraries
const VENDOR_LIBS = [
    'react', 'react-dom','react-router-dom'
]
var config = {
    // mode:'development',
    // entry: APP_DIR + '/index.js',
    entry:{
        bundle: APP_DIR + '/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        // path: BUILD_DIR,
        // filename: '[name].[hash].js'
        path:path.resolve(__dirname,'dist'),
        filename:'[name].[hash].js',
        publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
                options:{
                    babelrc: false,
                    presets:["babel-preset-env", "react", "stage-2"],
                    plugins:['syntax-dynamic-import']
                }
            
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|img|jpg|jpeg|svg)$/,
                use: 'file-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer:{
        contentBase:'BUILD_DIR',
        compress:true,
        port:9000,
        open:true,
        hot:true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names:['vendor','manifest']
        }),
        new webpack.HotModuleReplacementPlugin({}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
}

module.exports = config;