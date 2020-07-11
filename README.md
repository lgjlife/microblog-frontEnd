# microblog-frontEnd

本项目是[microblog项目](https://github.com/lgjlife/micro-blog)的前端项目，使用vue＋element-ui进行开发．

## 启动项目

* 首次启动必须 npm install安装依赖模块
* 分模块安装
```bash

#安装element-ui
npm install element-ui -S

#安装axios;
npm install axios --save

#视频播放
npm install video.js --save
npm install vue-video-player --save
npm install videojs-contrib-hls --save


#　vuex
npm install vuex --save

#富文本编辑器
npm install vue-quill-editor --save

# mockjs
npm install --save-dev mockjs

# base64
npm install --save js-base64

# 

```

## 技术栈
* 基础框架: [vue](https://cn.vuejs.org/index.html)
* 状态管理: [vuex](https://vuex.vuejs.org/zh/)
* 路由管理器: [Vue Router](https://router.vuejs.org/zh/)
* UI框架: [element-ui](https://element.eleme.cn/#/zh-CN/component/installation)
* 网络请求: [axios](http://www.axios-js.com/)
* Mock框架: [mockjs](https://github.com/nuysoft/Mock/wiki)
* 富文本编辑: [wangeditor](http://www.wangeditor.com/)
* 阿里图标: [iconfont](https://www.iconfont.cn/)

## 模块介绍

```
├─/microblog-frontEnd

    ├─── /public 公共资源文件
    ├─── /src 源代码　
        ├─── /apis
            ├─── /axios  
                ├─── http.js  　axios配置文件
                ├─── modules    各个模块的api文件
        ├─── /assets　　　　　　　公共静态文件
            ├─── /icon
                ├─── ali        阿里ico文件
            ├─── /js
                ├─── /util       公共js文件　
                    ├─── /log   日志工具
                    ├─── /str   字符串工具
                    ├─── /time  时间处理
                    
        ├─── /components　　　　　各个模块的组件
            ├─── article
            ├─── blog
            ├─── chat
            ├─── commom
            ├─── edit
            ├─── message
            ├─── notice
            ├─── search
            ├─── setting
            ├─── test
            ├─── user
            ├─── video
        ├─── /pages
            ├─── /layout 首页布局
        ├─── /router 路由文件夹
            ├─── article.js
            ├─── blog.js
            ├─── home.js
            ├─── index.js　　　总路由文件
            ├─── message.js
            ├─── setting.js
            ├─── user.js
        ├─── /store
            ├─── /modules　状态管理的各个模块文件
            ├─── store.js　状态管理总文件            
        ├─── App.vue  主组件，页面入口文件
        ├─── main.js  程序入口文件,初始化vue实例并使用需要的插件,加载各种公共组件.
    ├─── vue.config.js　　vue 项目配置文件
    
```

## 运行打包

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

