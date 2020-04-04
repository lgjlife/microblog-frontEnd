<template>
    <div >

        <el-container>
            <!--页首-->
            <el-header><headerNav/></el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                    <el-container>
                        <el-container>
                            <el-aside width="200px" style="background-color: rebeccapurple">Aside</el-aside>
                            <el-container>
                                <!--微博编辑-->
                                <el-header width="100%" height="200px" style="background-color: #9a6e3ared; margin: 0px; padding: 0px;" >
                                    <BlogPublish/>
                                </el-header>
                                <!--微博显示-->
                                <el-main style=" margin: 0px; padding: 0px;" >Main</el-main>
                            </el-container>
                        </el-container>
                        <el-footer>Footer</el-footer>
                    </el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-aside width="200px">Aside</el-aside>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    
import headerNav from './header-nav.vue'
import footerNav from './footer-nav.vue'
import BlogPublish from '@/components/blog/BlogPublish'
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
        headerNav,
        //页底组件
        footerNav,
        BlogPublish
    }
}
</script>

<style>

.el-aside{
    background-color: bisque;
}
.el-footer{
    background-color: coral;
}
#display-content{
    background-color:cyan;
}
</style>
