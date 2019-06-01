const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
        // 出口文件必须写绝对路径，相对路径会报错
        // path: './dist'
    }
}