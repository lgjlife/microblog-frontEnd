<template>
    <div id="layout">

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
                                <el-header width="100%" height="200px" >
                                    <BlogPublish/>
                                </el-header>
                                <!--微博显示-->
                                <el-main >Main</el-main>
                            </el-container>
                        </el-container>
                        <el-footer>Footer</el-footer>
                    </el-container>
                <el-aside width="200px"  style="background-color: indianred; margin: 2px; padding: 2px;" >Aside</el-aside>
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
