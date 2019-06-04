const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpackManifestPlugin = require('webpack-manifest-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    mode:'development',
    entry: {
        main: './src/index.js',
        print: './src/print.js'
    },
    devServer: {
        contentBase: './dist', // 这个配置是告诉webpack-dev-server 将dist目录下的文件serve到localhost:8080下
        hot: true
    },
    // devtool: 'inline-source-map',
    output: {
        // [id] 内部chunkid 0 1 等等数字
        // [hash] 每次构建过程中，唯一的hash生成。如果没有任何内容修改，则hash不变。但是但凡有一个文件内容有修改，则所有的都会变化。而且所有文件都是一个hash
        // chunkhash 基于每个 chunk 内容的 hash 
        // contenthash 根据生成文件的内容
        // ps: :number 控制打包出来的文件hash的位数
        filename: '[name].[hash:7].js',
        path: path.resolve(__dirname, 'dist')
        // 出口文件必须写绝对路径，相对路径会报错
        // path: './dist'    
        // publicPath: '/'
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
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'server',
        //     analyzerHost: '127.0.0.1',
        //     analyzerPort: 8889,
        //     reportFilename: 'report.html',
        //     defaultSizes: 'parsed',
        //     openAnalyzer: true,
        //     generateStatsFile: false,
        //     statsFilename: 'stats.json',
        //     statsOptions: null,
        //     logLevel: 'info'
        // }),
        new webpack.HotModuleReplacementPlugin(),
        // new CleanWebpackPlugin(['dist']) 不传这个参数也OK 默认就是dist其实
        new CleanWebpackPlugin(),
        new webpackManifestPlugin({
            filter: function (FileDescriptor) {
                return FileDescriptor.isChunk;
                // console.log(FileDescriptor);
                // return FileDescriptor.name !== 'index.html'
            }
        }),
        new webpack.HashedModuleIdsPlugin() // 这个用来控制vendors chunk不受业务代码影响而改变hash 原理是生成vedors.js不是用模块的ID而是用模块的路径
    ]
}
