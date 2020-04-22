let path = require('path')
let glob = require('glob') // 用于筛选文件

// 工厂函数 - 配置pages实现多页面获取某文件夹下的html与js
function handleEntry(entry) {
 let entries = {}
 let entryBaseName = ''
 let entryPathName = ''
 let entryTemplate = ''
 let applicationName = ''

 glob.sync(entry).forEach(item => {
  console.log('!!!', item)
  entryBaseName = path.basename(item, path.extname(item))
  console.log('entryBaseName:', entryBaseName)
  entryTemplate = item.split('/').splice(-3)
  console.log('entryTemplate:', entryTemplate)
  entryPathName = entryBaseName // 正确输出js和html的路径
  console.log('entryPathName', entryPathName)

  entries[entryPathName] = {
   entry: 'src/' + entryTemplate[0] + '/' + entryTemplate[1] + '/' + entryTemplate[1] + '.js',
   template: 'src/' + entryTemplate[0] + '/' + entryTemplate[1] + '/' + entryTemplate[2],
   title: entryTemplate[2],
   filename: entryTemplate[2],
   chunks: ['chunk-vendors', 'chunk-common', entryPathName]
  }
 })

 return entries
}


let pages = {}
pages = handleEntry('./src/pages/**?/*.html')
//projectname="index"
//pages[projectname] = objectProject[projectname]
console.log(pages)



// 以下开始配置
module.exports = {
    lintOnSave: false, // 关掉eslint
    /**
     * baseUrl 从 3.3起废用，使用pubilcPath代替
     * 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
     * 这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径，也可以用在类似 Cordova hybrid 应用的文件系统中。
     */
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    productionSourceMap: false,
     // 入口设置
     //pages,
     // webpack配置 - 简单配置方式
     configureWebpack: {
      resolve: {
       alias: {
        // 别名
        vue$: "vue/dist/vue.esm.js", //加上这一句
        "@api": path.resolve(__dirname, "./src/api"),
        "@utils": path.resolve(__dirname, "./src/utils")
       }
      }
     },
     runtimeCompiler: true,

     devServer: {
         open: true,
         host: 'localhost',
         port: 8081,
         https: false,
         hotOnly: false,
         proxy: { // 配置跨域
          '/data': {
           //要访问的跨域的api的域名 // http://www.weather.com.cn/data/sk/101010100.html
           target: 'http://www.weather.com.cn',
           ws: true,
           changOrigin: true,
           // pathRewrite: {
           //  '^/data': ''
           //
           // }
          }
         },
         before: app => { }
     }
}

