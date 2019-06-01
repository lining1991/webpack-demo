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
### loader模块是按书写顺序倒着执行，先用css-loader解析.css文件，遇到@import之类的预检就相应的将文件引入，计算出来最终版css。最后会使用style-loader生成最终解析完的css代码，并用style标签插入head.(ps：css代码仍旧是混在js里边的，是用js动态插入style标签到head标签里的。)
### 如果需要使用json文件可以不用loader直接处理 import Data from './a.json'
### file-loader 用来处理图片的解析与引入 
