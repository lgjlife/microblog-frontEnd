<template>
    <div id="layout">

        <el-container>
            <!--页首-->
            <el-header><headerNav/></el-header>
            <el-container>
                <!--最左侧-->
                <el-aside width="200px">Aside</el-aside>
                <!--中间内容-->
                <el-container>
                    <el-container>
                        <el-aside width="100px" >
                            <LeftSideNav></LeftSideNav>
                        </el-aside>
                        <el-container>
                            <!--微博编辑-->
                            <el-header width="100%" height="200px" >
                                <BlogPublish/>
                            </el-header>
                            <!--微博显示-->
                            <el-main >
                                <BlogDisplay></BlogDisplay>
                            </el-main>
                        </el-container>
                    </el-container>

                </el-container>

                <el-aside width="300px"  style=" margin: 2px; padding: 2px;" >
                    <UserInfoNav></UserInfoNav>
                    <HotTopicNav></HotTopicNav>
                </el-aside>
                <el-aside width="200px">Aside</el-aside>
            </el-container>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>

import HeaderNav from './Header-nav.vue'
import footerNav from './footer-nav.vue'
import LeftSideNav from './LeftSideNav.vue'
import UserInfoNav from './UserInfoNav.vue'
import HotTopicNav from './HotTopicNav.vue'

import BlogPublish from '@/components/blog/BlogPublish'
import BlogDisplay from '@/components/blog/BlogDisplay.vue'
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
        UserInfoNav,
        HotTopicNav,

        //微博发布
        BlogPublish,
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
        background-color: #e7e1cd;
    }

#layout{
    margin:0px;
    width:100%;
    min-width:1500px;
    max-width:100%;
    height:100%;

    background-color:#F0F0F0;
}
.el-aside{
    background-color: bisque;
}
.el-footer{
    background-color: coral;
}
#display-content{
    background-color:cyan;
}
#BlogPublish{
    width: 100%;
    padding: 0px;
    border-style:solid;
    border-color: antiquewhite;
    /*margin: 0px 0px 0px 0px;*/
}
.el-main{

    background-color: #669900;
    margin: 25px 1px 0px 1px;
}
</style>
