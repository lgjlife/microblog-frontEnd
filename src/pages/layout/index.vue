<template>
    <div >

        <el-container>
            <el-header><headerNav/></el-header>
            <el-container>
                    <el-aside width="200px">Aside</el-aside>
                    <el-container>                            
                        <el-container>
                                <el-aside width="200px">Aside</el-aside>
                                <el-container>
                                        <el-header>Header</el-header>
                                        <el-main>Main</el-main>
                                </el-container>                                    
                        </el-container>                            
                        <el-footer>Footer</el-footer>
                    </el-container>
                    <el-aside width="200px">Aside</el-aside>
                    <el-aside width="200px">Aside</el-aside>
            </el-container>            
        </el-container>
        <button>分享</button>         
    </div>
</template>

<script>
    
import headerNav from './header-nav.vue'
import footerNav from './footer-nav.vue'

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
        footerNav
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
