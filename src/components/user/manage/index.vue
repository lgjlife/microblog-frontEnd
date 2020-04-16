<template>
    <div>
        <div class="left-container">
            <ul>
                <li>数据助手</li>
            </ul>
        </div>

        <div class="right-container">
            <div>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
                    <el-menu-item   v-for="(item,index1) in menu"
                                    :index="index"
                                    @click="handleSelect(index)">{{item}}</el-menu-item>
                </el-menu>
            </div>


        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                activeIndex: '1',

                menu: [
                    "数据概览",
                    "粉丝分析",
                    "博文分析",
                    "互动分析",
                    "相关账号分析",
                    "文章分析",
                    "视频分析",
                    "大数据实验室",
                ]
            }
        },

        methods:{
            handleSelect(index){
                console.log("index = " + index);
            }
        },

        created(){

        },
        components:{

        }
    }
</script>

<style scoped src="./index.css"/>

<style scoped>


</style>