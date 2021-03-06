import axios from 'axios'

import Log from "@/assets/js/util/log/Log";

import store from "@/store/store.js"
import managerAuth from "@/manager/util/managerAuth.js"
/*
基础配置
 */
const instance = axios.create({
    //baseURL: '/api',
    timeout: 1000,
    responseType: "json",
    withCredentials: true, // 是否允许带cookie这些
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    },    
});
/*
定义请求拦截器
 */
instance.interceptors.request.use(
    config =>{
        //这些路径不需要添加token
        let patts = [
            /^\/api\/auth\/oauth\/token/,
            /^\/api\/auth\/login\/publickey/
        ];

  
        for(var patt of patts){

            console.log("patt = " + patt)
            var flag =  patt.test(config.url);
            console.log("patt　＝　"+flag)
            if(flag == true){
                Log.info("src/apis/axios/http.js","匹配路径[]，不添加header[Authorization]",[config.url]) 
                return config;  
            }            
        }
        console.log("==============config==============")
        console.log(config)
        console.log(JSON.stringify(config))
        console.log("==============config==============")
        let Authorization = store.getters["auth/getAccessToken"]
        if(Authorization != null){
            Log.info("src/apis/axios/http.js","不匹配路径[]，添加header[Authorization]",[config.url])
            config.headers['Authorization'] = Authorization
            Log.info("src/apis/axios/http.js","axios请求拦截[]",[config.url,Authorization])
            return config;
        }    
        return config;    
        
    },
    error => {

        
        // 对请求错误做些什么，自己定义
        Log.info("src/apis/axios/http.js","请求拦截器错误")
        return Promise.reject(error);
    }
)

/*
定义返回拦截器
 */
instance.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    console.log(error.response)
    Log.info("src/apis/axios/http.js","返回拦截器错误[]-[]",[error.response.status,error.response.statusText])
    if(error.response.status == "401"){
        managerAuth.RefreshToken();
    }
    
    return Promise.reject(error);
});

/**
 * 使用es6的export default导出了一个函数，导出的函数代替axios去帮我们请求数据，
 * 函数的参数及返回值如下：
 * @param {String} method  请求的方法：get、post、delete、put
 * @param {String} url     请求的url:
 * @param {Object} data    请求的参数
 * @returns {Promise}     返回一个promise对象，其实就相当于axios请求数据的返回值
 */
export default function (method, url, data) {
    method = method.toLowerCase();
    if (method == 'post') {
        console.log("post......................")
        return instance.post(url, data)
    } 
    //参数是放在url后面
    else if (method == 'postparams') {
        console.log("postparams......................")
        console.log(data)
        return instance.post(url, null,{ params: data })
    }else if (method == 'get') {
        return instance.get(url, { params: data })
    } else if (method == 'delete') {
        return instance.delete(url, { params: data })
    }else if(method == 'put'){
        return instance.put(url,data)
    }else{
        console.error('未知的method'+method)
        return false
    }
}
