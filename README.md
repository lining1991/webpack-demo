# 跟着官网学习webpack4
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
### 有关缓存
> index.js文件中引入print.js 再次运行构建，然后我们期望的是，只有 main bundle 的 hash 发生变化，
> 我们可以看到这三个文件的 hash 都变化了。这是因为每个 module.id 会默认地基于解析顺序(resolve order)进行增量。也就是说，当解析顺序发生变化，ID 也会随之改变。因此，简要概括
> * main bundle 会随着自身的新增内容的修改，而发生变化。
> * vendor bundle 会随着自身的 module.id 的变化，而发生变化。
> * manifest bundle 会因为现在包含一个新模块的引用，而发生变化。
> 一三符合预期 源自[webpack官网缓存一节](https://webpack.docschina.org/guides/caching)
按照官网说法引入webpack.HashedModuleIdsPlugin()之后vendor 不会变，实际结果vendor和manifest都没变

### npm view webpack version 查看某个包的版本
### [contenthash:7] [chunkhash:7] 不能与热更模块一起使用 使用热更模块的时候要用[hash:7]

