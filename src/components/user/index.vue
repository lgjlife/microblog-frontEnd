<template>
    <div class="user-info-container">
        <!--页头-->
        <HeaderNav></HeaderNav>

        <!--上部 主显示区域-->
        <div class="main-nav">
            <!--上部-->
            <div class="main-nav-background"
                @mouseover="uploadCoverBtnVisiable=true"
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
            <!--当前登录用户-->
            <div class="main-nav-option" v-if="curPageType == 'u'">
                <el-menu :default-active="activeIndex" class="main-nav-menu" mode="horizontal" @select="handleSelect">
                    <el-menu-item class="itemu-u" index="0">我的主页</el-menu-item>
                    <el-menu-item class="itemu-u" index="1">我的相册</el-menu-item>
                    <el-menu-item class="itemu-u" index="2">管理中心</el-menu-item>
                </el-menu>
            </div>
            <!--其他的用户-->
            <div class="main-nav-option" v-else-if="curPageType == 'o'">
                <el-menu :default-active="activeIndex" class="main-nav-menu" mode="horizontal" @select="handleSelect">
                    <el-menu-item class="itemu-o" index="0">ta的主页</el-menu-item>
                    <el-menu-item class="itemu-o" index="1">ta的相册</el-menu-item>
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
    import HeaderNav from '@/pages/layout/HeaderNav.vue'


    export default {
        data(){
            return{



                uBasePath: "/user/u/",
                oBasePath: "/user/o/",
                //当前用户页面类型 u: 登录用户　,　o:其他用户
                curPageType: "",
                userId: "",

                activeIndex: '0',
                uploadCoverBtnVisiable: false,

                menuItemPath: ["/home","/photo","/manage"],
            }
        },

        methods:{


            handleSelect(index){
                this.$router.push({path: (this.uBasePath+this.userId+this.menuItemPath[index])})
            },

            getDataFromRouter(){
                this.curPageType = this.$route.params.type;
                this.userId = this.$route.params.userId;

                console.log("type  = " + this.$route.params.type);
                console.log("id  = " + this.$route.params.userId);

                if((this.curPageType != 'u') && (this.curPageType != 'o')){
                    this.$router.push("/404")
                }

            }



        },

        created(){
            this.getDataFromRouter()
        },

        components:{
            HeaderNav,
        }
    }
</script>

<style scoped src="./assets/index.css"/>

<style scoped>


</style>