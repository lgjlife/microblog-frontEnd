<template>
    <div id="layout">

        <!--页首-->
        <div class="header-block">
            <headerNav/>
        </div>


        <!--中间部分-->
        <div class="center-block">
            <!--左侧边栏-->
            <div class="center-left-block">
                <UserInfoNav/>
                <Calendar style="width: 100%"/>
                <BlogPublish/>

                <HotTopicNav/>
            </div>

            <!--内容显示-->
            <div class="center-content-block">
                <BlogSearch></BlogSearch>
                <BlogDisplay></BlogDisplay>
            </div>
            <!--右侧栏-->
            <div class="center-right-block">
                <Notice/>
            </div>
        </div>



        <!--底部-->
        <div class="footer-block">

        </div>

        <div style="clear:both"></div>

    </div>
</template>

<script>

import Calendar from '@/components/calendar/Calendar.vue'

import UserInfoNav from './UserInfoNav.vue'
import HotTopicNav from './HotTopicNav.vue'
import HeaderNav from './HeaderNav.vue'
import footerNav from './FooterNav.vue'

import BlogPublish from '@/components/blog/BlogPublish'
import BlogDisplay from '@/components/blog/BlogDisplay.vue'
import BlogSearch from '@/components/blog/BlogSearch.vue'
import axios from 'axios'


import Notice from '@/components/notice/Notice.vue'
import UserInfo from "@/apis/modules/user/userInfo.js"
import Log from '@/assets/js/util/log/Log'


export default {
    data() {
        return {}
    },

    create(){




    },

    mounted() {
        Log.info("Layout","请求用户信息")

        UserInfo.getUserInfo().then(function (response) {

            Log.info("Layout","请求成功")
            console.log(response);
        }).catch(function (error) {

            Log.error("Layout","请求出错")

            console.log(error);
        });
    },


    components: {
        //头部菜单组件
        HeaderNav,
        //页底组件
        footerNav,
         //微博发布
        BlogPublish,
        //
        BlogSearch,
        //微博显示
        BlogDisplay,

        UserInfoNav,
        HotTopicNav,
        Notice,
        Calendar,


    }
}
</script>

<style>
    html,body{
        margin:0px;
        min-width: 1300px;
        height: 100%;
        /*min-height: 2000px;*/
        background-image: url(/img/background/background.jpeg);
    }

    #layout{
        margin:0px;
        width:100%;
        min-width:1500px;
        max-width:100%;
        height:100%;
    }
    .header-container{

    }
    .center-block{
        margin-top: 30px;
    }
    .center-left-block{
        width: 20%;
        min-width: 310px;
        float: left;
        margin-left: 10px;
    }
    .center-content-block{
        width: 50%;
        float: left;
        margin-left: 20px;
    }
    .center-right-block{
        width: 20%;
        float: left;
        margin-left: 10px;
    }
    .footer-block{

    }

</style>
