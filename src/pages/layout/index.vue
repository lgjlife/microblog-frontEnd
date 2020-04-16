<template>
    <div id="layout">

        <el-container>
            <!--页首-->
            <el-header style="padding: 0px">
                <headerNav/>
            </el-header>

            <el-container>
                <!--最左侧-->
                <el-aside width="200px"></el-aside>
                <!--中间内容-->
                <el-container>
                    <el-container>
                        <el-aside width="100px" >
                            <!--左侧菜单-->
                            <LeftSideNav></LeftSideNav>
                        </el-aside>
                        <el-container>
                            <!--微博编辑-->
                            <el-header width="100%" height="200px" >
                                <BlogPublish/>
                            </el-header>
                            <!--微博显示-->
                            <el-main >
                                <BlogSearch></BlogSearch>
                                <BlogDisplay></BlogDisplay>
                            </el-main>
                        </el-container>
                    </el-container>

                </el-container>

                <!--右侧边-->
                <el-aside >
                    <RightSideNav/>
                </el-aside>
                <el-aside width="200px"></el-aside>
            </el-container>
            <el-footer>Footer</el-footer>


        </el-container>

        <div style="clear:both"></div>

    </div>
</template>

<script>

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
.el-aside{
    /*background-color: #fffdef;*/
}
.el-footer{
    /*background-color: coral;*/
}
#display-content{
    /*background-color:cyan;*/
}
#BlogPublish{
    width: 100%;
    padding: 0px;
    border-style:solid;
    border-color: antiquewhite;
    /*margin: 0px 0px 0px 0px;*/
}
.el-main{
    margin: 0px 1px 0px 1px;
}
</style>
