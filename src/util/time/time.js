/**
 * 字符串的一些工具

 use:

 1. import 多个方法
 import {trim,ltrim} from "@/util/time/time.js"
 trim(" zxxx ")

 2. import 所有方法
 import * as strtools from "@/util/time/time.js"
 strtools.trim(" zxxx ")

 */

//删除左右两端的空格
Date.prototype.format = function(fmt){
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };

    if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }

    for(var k in o){
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(
                RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }

    return fmt;
}

export  function TIME_CHANGE(time){


    var _1hour = 60*60*1000;
    var _1day = 24*_1hour;

    var now = new Date();
    var diff = now.getTime() - time

    var timeDate = new Date(time);

    if(timeDate.getDate() != now.getDate()){

        //不是同一天
        return timeDate.format("yyyy-MM-dd hh:mm:ss")
    }
    else{


        //是同一天
        if(diff< _1hour){
            //小于60分钟
            return Math.round(diff/(60*1000)) + "分钟之前"

        }
        else  if( (diff > _1hour)
            && (diff < _1day) ){
            //一天之内
            return timeDate.format("hh:mm:ss")
        }
    }


}
