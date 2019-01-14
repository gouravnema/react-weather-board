const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cacheBuster = Date.now();

var unlinkNonEmptyDirectory = function(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function(file, index){
            var thisPath = path + "/" + file;
            if (fs.lstatSync(thisPath).isDirectory()) {
                unlinkNonEmptyDirectory(thisPath);
            } else {
                fs.unlinkSync(thisPath);
            }
        });
        fs.rmdirSync(path);
    }
};

unlinkNonEmptyDirectory(__dirname+'/../build/ui');

module.exports = {
    entry: './ui/js/index.js',
    mode:"development",
    output: {
        filename: 'script-'+cacheBuster+'.js',
        path: path.resolve(__dirname, '../build/ui/js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        babelrc: false,
                        presets: ["@babel/preset-react"]
                    }
                }
                ]
            },
            {
                test: /\.pug$/,
                use: [
                    {loader: 'file-loader', options: {name: '../404.html'}},
                    {loader:'pug-html-loader', options:{data:{cacheBuster}}}
                ]
            },
            {
                test: /\.css/,
                use: [
                    {loader: 'file-loader', options: {name: '../css/[name]-'+cacheBuster+'.css'}}
                ]
            },
            {
                test: /\.png/,
                use: [
                    {loader: 'file-loader', options: {name: '../img/[name].png'}}
                ]
            },
            {
                test: /\.woff/,
                use: [
                    {loader: 'file-loader', options: {name: '../fonts/[name].woff'}}
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /manifest\.tmpl/,
                use: [
                    {loader: 'file-loader', options: {name: '../manifest.json'}}
                ]
            },
            {
                test: /sw\.tmpl/,
                use: [
                    {loader: 'file-loader', options: {name: '../sw.js'}}
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "../css/style-"+cacheBuster+".css",
            chunkFilename: "[id]-"+cacheBuster+".css"
        })
    ]
};