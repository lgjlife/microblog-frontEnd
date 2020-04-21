import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import home from "./home"
import message from "./message"
import setting from "./setting"
import user from "./user"
import test from "./test"

const baseRouters =[];
//home,message,setting,user,test
const routers = baseRouters.concat(home,message,setting,user,test);


/*
路由前置过滤器
 */
const router = new VueRouter({
    mode: 'history',
    routes: routers
})

/*
路由前置过滤器
 */
router.beforeEach((to,from,next)=>{

    console.log("from path = " + from.path);
    console.log("即将访问" + to.path);



    if(to.meta.title){
        document.title = to.meta.title;
    }

    //进入首页
    if(to.path =="/"){

    }
    next();
})

export default router;

