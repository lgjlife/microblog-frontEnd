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

                <BlogPublish/>

                <HotTopicNav/>
            </div>

            <!--右侧编栏-->
            <div class="center-right-block">
                <BlogSearch></BlogSearch>
                <BlogDisplay></BlogDisplay>
            </div>
        </div>

        <!--底部-->
        <div class="footer-block">

        </div>



        <div style="clear:both"></div>

    </div>
</template>

<script>

import UserInfoNav from './UserInfoNav.vue'
import HotTopicNav from './HotTopicNav.vue'
import HeaderNav from './Header-nav.vue'
import footerNav from './footer-nav.vue'
import LeftSideNav from './LeftSideNav.vue'
import RightSideNav from './RightSideNav.vue'



import BlogPublish from '@/components/blog/BlogPublish'
import BlogDisplay from '@/components/blog/BlogDisplay.vue'
import BlogSearch from '@/components/blog/BlogSearch.vue'

///import { mapState } from 'vuex'
export default {
    data() {
        return {}
    },
    computed: {
        //...mapState(['isSidebarNavCollapse'])
    },
    components: {
        //头部菜单组件
        HeaderNav,
        //页底组件
        footerNav,
        //左侧
        LeftSideNav,


        //
        RightSideNav,

        //微博发布
        BlogPublish,
        //
        BlogSearch,
        //微博显示
        BlogDisplay,

        UserInfoNav,
        HotTopicNav,

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
        float: left;
        margin-left: 10px;
    }
    .center-right-block{
        width: 70%;
        float: left;
        margin-left: 20px;
    }
    .footer-block{

    }

</style>
