import axios from 'axios'



const $axios = axios.create({
    baseURL: '/api',
    timeout: 1000,
    responseType: "json",
    withCredentials: true, // 是否允许带cookie这些
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }

});

$axios.interceptors.request.use(
    config =>{
        config.headers['Auth'] = "token"

        return config;
    },
    error => {
        // 对请求错误做些什么，自己定义
        Message({                  //使用element-ui的message进行信息提示
            showClose: true,
            message: error,
            type: "warning"
        });
        return Promise.reject(error);
    }
)

$axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error

    console.log(error);
    return Promise.reject(error);
});


export default $axios;
