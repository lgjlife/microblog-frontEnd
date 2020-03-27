<template>
    <div >

        <el-container>
            <el-header>
                <!-- 顶部工具栏-->
                <headerNav/>
            </el-header>
            <el-container>
                <!--左侧边栏-->
                <el-aside width="200px">Aside</el-aside>
                <el-container>
                    <!-- 中间内容-->
                    <el-main>Main</el-main>

                    <!-- 页底-->
                    <el-footer>
                        <footerNav/>
                    </el-footer>
                </el-container>
                <!-- 右侧边-->
                <el-aside width="200px">Aside</el-aside>
            </el-container>
        </el-container>  
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
        headerNav,
        footerNav
    }
}
</script>

<style lang="scss" scoped>

</style>
