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


