# webpack-demo
跟着官网学习webpack4
## 传统引入依赖的问题：
* 业务代码到底依赖哪个库/插件不透明。
* 如果依赖丢失或者引用顺序出现问题，程序会有错误。
* 如果引入的依赖并没有被使用，造成代码冗余。
## 出口文件必须写绝对路径 写相对路径运行会报错
## npx webapck --config webpack.config.js
## 正则匹配，或的关系注意写括号
```
test: /\.(png|svg|jpg|gif)$/,
```
