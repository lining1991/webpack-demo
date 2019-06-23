* CleanWebpackPlugin
? 为啥没用配置出口选项，默认打包出来的文件是fileName.js.js 呢
: 因为入口文件entry对象的key是'shequ/detail.js' 然后生成出来的就是shequ/detail.js.js
test: /\.(scss|css|sass)$/,
exclude: /node_modules/,
use: [
    'style-loader',
    'css-loader',
    'sass-loader',
    {
        loader: 'postcss-loader',
        options: {
            plugins: () => require('autoprefixer')({
                'overrideBrowserslist': ['> 1%', 'last 10 versions'],
                'remove': false
            })
        }
    }
]
识别不出来注释行//
需要把postcss-loader放在sass-loader前边 

?如果没有被转化成base64 则css里边引用的图片路径和字体路径是怎样的呢
处理图片和字体的url-loader的options.name和处理抽出css文件的MiniCssExtractPlugin.loader的options的publicPath（或者output.publicPath)共同决定了css文件中图片和字体的引用路径。
不管你原来的css文件中写的引用路径是啥，最后打包出来的路径是上述二者连在一起

out of the box 开箱即用