const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpackManifestPlugin = require('webpack-manifest-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    mode:'development',
    devServer: {
        // 这个配置是告诉webpack-dev-server 将dist目录下的文件serve到localhost:8080下
        // ps: 感觉contentBase这里咋配置都行啊 以为dist文件夹下并木有任何文件呀
        // 关于ps的这里有解答 https://webpack.docschina.org/configuration/dev-server/#src/components/Sidebar/Sidebar.jsx
        // ps: 貌似
        // contentBase: './areyouok',
        contentBase: path.resolve(__dirname, './dist'),
        hot: true,
        port: 8084,
        after: function(app, server) {
            console.log(`运行在哪个port*******`)
        },
        https: true,
        disableHostCheck: true,  //绕过主机检查不建议这样做,
        index: 'index.html',
        publicPath: '/assets/' // 答案在这里，结合上边的contentBase有些意思
    },
    // devtool: 'inline-source-map',
    entry: {
        main: './src/index.js',
        // another: './src/another-module.js'
        // print: './src/print.js'
    },
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
        splitChunks: {
            chunks: 'all',
            name: 'vendor',// 可以定义提取出来的公共文件的名称
        }
    },
    // optimization:优化
    // optimization: {
    //     runtimeChunk: 'single', // 将其设置为 single 来为所有 chunk 创建一个 runtime bundle：
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //               test: /[\\/]node_modules[\\/]/,
    //               name: 'vendors',
    //               chunks: 'all'
    //             }
    //         }
    //     }
    // },
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
        // ❌ new CleanWebpackPlugin(['dist']), //不传这个参数也OK 默认就是dist其实
        //  在webpack官网上看到上边的写法，实际运行测试了下会报错.去插件官网看了下 参数应该是一个对象
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
