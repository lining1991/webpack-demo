# 记录webpack周边知识点
## [glob插件](https://github.com/isaacs/node-glob)
一般处理入口文件时候会用到path模块+glob插件。
glob插件基于javascript。使用minimatch库来进行匹配
## 配置entry字段
* 使用glob模块进行入口文件路径匹配。glob.glob('./src/js/!(commons)/*.js');
* 使用path模块匹配出entry对象的key。path.relative(a,b); 如果当前路径是a 按照返回的路径再查找 就到达b.[参考链接](http://javascript.ruanyifeng.com/nodejs/path.html#toc3)
