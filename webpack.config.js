const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpackManifestPlugin = require('webpack-manifest-plugin');
module.exports = {
    entry: {
        main: './src/index.js',
        // print: './src/print.js'
    },
    output: {
        // [id] 内部chunkid 0 1 等等数字
        // [hash] 每次构建过程中，唯一的hash生成。如果没有任何内容修改，则hash不变。但是但凡有一个文件内容有修改，则所有的都会变化。而且所有文件都是一个hash
        // chunkhash 基于每个 chunk 内容的 hash 
        // contenthash 根据生成文件的内容
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
        // 出口文件必须写绝对路径，相对路径会报错
        // path: './dist'
    },
    optimization: {
        runtimeChunk: 'single', // 将其设置为 single 来为所有 chunk 创建一个 runtime bundle：
        splitChunks: {
            cacheGroups: {
                vendor: {
                  test: /[\\/]node_modules[\\/]/,
                  name: 'vendors',
                  chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Mangement'
        }),
        new CleanWebpackPlugin(),
        new webpackManifestPlugin({
            filter: function (FileDescriptor) {
                return FileDescriptor.isChunk;
                // console.log(FileDescriptor);
                // return FileDescriptor.name !== 'index.html'
            }
        }),
        new webpack.HashedModuleIdsPlugin()
    ]
}
