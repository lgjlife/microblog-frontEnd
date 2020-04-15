<template>
    <div class="user-info-container">
        <!--页头-->
        <HeaderNav></HeaderNav>

        <!--上部 主显示区域-->
        <div class="main-nav">
            <!--上部-->
            <div class="main-nav-background"
                @mouseover="uploadCoverBtnVisiable=true"
                 @mouseout="uploadCoverMouseout"
            >
                <div class="uploadCoverBtn" v-if="uploadCoverBtnVisiable">上传封面图</div>
                <el-avatar class="main-nav-header-img"　:size="90"  >
                    <img src="/img/test/1.jpg"/>
                </el-avatar>
                <div>
                    <span class="main-nav-header-name" style="text-align:center">川大统领</span>
                </div>
                <div>
                    <span class="main-nav-header-desc" style="text-align:center">美丽的世界</span>
                </div>



            </div>
            <!--选项-->
            <div class="main-nav-option">
                <el-menu :default-active="activeIndex" class="main-nav-menu" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="0">我的主页</el-menu-item>
                    <el-menu-item index="1">我的相册</el-menu-item>
                    <el-menu-item index="2">管理中心</el-menu-item>
                </el-menu>
            </div>
        </div>
        <!--主内容显示区域-->
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import HeaderNav from '@/pages/layout/Header-nav.vue'

    export default {
        data(){
            return{
                activeIndex: '0',
                uploadCoverBtnVisiable: false,

                menuItemPath: ["/user/home","/user/photo","/user/manage"],
            }
        },

        methods:{
            handleSelect(index){
                this.$router.push({path:this.menuItemPath[index]})
            },

            uploadCoverMouseout:{

            }
        },

        created(){

        },

        components:{
            HeaderNav,
        }
    }
</script>

<style scoped src="./assets/index.css">

<style scoped>


</style>