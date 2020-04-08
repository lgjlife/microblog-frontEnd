<template>
    <div id="layout">

        <el-container>
            <!--页首-->
            <el-header><headerNav/></el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
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


import footerNav from '@/pages/layout/footer-nav.vue'
import LeftSideNav from '@/pages/layout/LeftSideNav.vue'
import UserInfoNav from '@/pages/layout/UserInfoNav.vue'
import HotTopicNav from '@/pages/layout/HotTopicNav.vue'

import BlogPublish from '@/components/blog/BlogPublish'
import BlogDisplay from '@/components/blog/BlogDisplay.vue'
import Cache from "@/common/cache/Cache.js"
import headerNav from '@/pages/layout/header-nav.vue'

export default {

    data(){
      return{

      }
    },
    methods:{

    },

    mounted(){

    },
    components:{
        //头部菜单组件
        headerNav,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
