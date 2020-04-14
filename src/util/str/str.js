/**
 * 字符串的一些工具

 use:

 1. import 多个方法
 import {trim,ltrim} from "@/util/str/str.js"
 trim(" zxxx ")

 2. import 所有方法
 import * as strtools from "@/util/str/str.js"
 strtools.trim(" zxxx ")

 */

//删除左右两端的空格
export  function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
//删除左边的空格
export  function ltrim(str){
    return str.replace(/(^\s*)/g,"");
}
//删除右边的空格
export  function rtrim(str){
    return str.replace(/(\s*$)/g,"");
}