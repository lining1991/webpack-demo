# 记录webpack周边知识点
## [glob插件](https://github.com/isaacs/node-glob)
一般处理入口文件时候会用到path模块+glob插件。
glob插件基于javascript。使用minimatch库来进行匹配
## 配置entry字段
* 使用glob模块进行入口文件路径匹配。glob.glob('./src/js/!(commons)/*.js');
* 使用path模块匹配出entry对象的key。path.relative(a,b); 如果当前路径是a 按照返回的路径再查找 就到达b.[参考链接](http://javascript.ruanyifeng.com/nodejs/path.html#toc3)
## 配置module.rules 处理非js/json类型以外的文件
* 处理字体文件、图片，使用url-loader,相比于file-loader它能够设定将小于limit的文件给转换成base64,或者压缩大于limit的文件。url-loader其实依赖file-loader,如果不转base64的文件会fallback用file-loader来处理。但是安装url-loader并不会自动安装file-loader,所以要手动安装file-loader.
## 强制删除文件 rm -f fileName   强制删除文件夹 rm -r dirName
> -f, --force    忽略不存在的文件，从不给出提示。
> -i, --interactive 进行交互式删除
> -r, -R, --recursive   指示rm将参数中列出的全部目录和子目录均递归地删除。
> -v, --verbose    详细显示进行的步骤
> --help     显示此帮助信息并退出
> --version  输出版本信息并退出
## html-webpack-plugin
* 用来生成HTML文件
* 面对多入口要生成多个html文件的场景，需要用入口对象的key,然后遍历push进webpck.plugin
* fileName参数用来配置生成出来的路径及文件，路径默认是相对于webpack的出口文件所在文件夹 ../pages/sq/index.html 
* chunks参数用来指定哪些分支插入到html文件。默认值为所有chunk分支组成的数组。也就是说默认webpack生成的js都会被插入到生成的HTML文件里边。这个对于多个HTML中有公用逻辑之类的很有用。
* chunksSortMode 用来决定chunks的的插入顺序。具体每个参数的意义参看该插件lib/chunksorter.js
``` javascript
let config = {
    plugins:[
       // for some code
       new CleanWebpackPlugin(),
    ]
}
// entries 为webpack的entry字段 大概是{'pindao/index': ...,'pindao/index2': ...,}
let pages = Object.keys(entries);

pages.forEach((item, index) => {
    devConfig.plugins.push(new htmlWebpackPlugin({
        title: '加油吧少年',
        filename: `${item}.html`,
        template: path.resolve(__dirname, `./src/tpl/${item}.ejs`),
        chunks: ['commons', item]
    }))
});
module.exports = config;
```
* 还可以自定义一些其他的key,然后再ejs模板中使用。可以实现按顺序插入css和js的场景。
```
new htmlWebpackPlugin({
    head: ['commons', item],
    body: ['vendor', 'commons', item]
})
```
## optimization.splitChunks 这个属性很多变，哪个配置稍微一改就会有出乎意外的变化·
* maxSize: 表示抽取出来的文件在压缩前的最大大小，默认为 0，表示不限制最大大小；

* 优先级排序： maxInitialRequest/maxAsyncRequests < maxSize < minSize 
* 你在cacheGroups里配置的分支是否能被打包出来不仅仅取决于当前key,还取决于maxInitialRequest/maxAsyncRequests < maxSize < minSize 这四个配置
* ？maxSize的值竟然影响到了生成js的名字，生成的js名字是分支名~一串hash




