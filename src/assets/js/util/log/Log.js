/*
日志打印工具

使用:
 import Log from "@/util/log/Log";

 Log.info("BlogComment.vue","userid=[],blogId=[]",[this.userId,this.blogId])

 */

function log(level,tag,text,params) {
 
    var levels = ["debug","info","error"]
    var levelIndex = levels.indexOf(level);

    var style = ['color:#8B4513;font-size:14px','color:black;font-size:14px','color:red;font-size:14px'];


    if((params != null)||(params != undefined)){
        for (var index = 0; index < params.length;index++){
            text =  text.replace('[]',params[index])
        }
    }

    var date = new Date();
    var msg = '%c [' + level + ']' + ' %c ' + date.format("yyyy-MM-dd hh:mm:ss") + " %c " + tag + " %c " + text;

    console.log(msg,style[levelIndex],'color:blue;font-size:10px','color:black;font-size:10px','color:#FF0000;font-size:13px');
}

/**
 * 对外提供的接口
 * @param tag　标签
 * @param text　字符串　dsfd[]dsafdfdf[]
 * @param params 数组　[1111,222]
 *
 * 调用　　Log.info("BlogComment.vue","userid=[],blogId=[]",[this.userId,this.blogId])
 * 输出　 [info]  2020-04-21 18:25:15  BlogComment.vue     userid=1,blogId=123
 */
const info = function(tag,text,params){
    log("info",tag,text,params)
}

const debug = function(tag,text,params){
    log("debug",tag,text,params)
}

const error = function(tag,text,params){
    log("error",tag,text,params)
}

export default {
    info,
    debug,
    error,
}




