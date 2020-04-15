<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">全部</el-menu-item>
            <el-menu-item index="2">原创</el-menu-item>
            <el-menu-item index="3">图片</el-menu-item>
            <el-menu-item index="4">视频</el-menu-item>
            <el-menu-item index="5">音乐</el-menu-item>
            <el-menu-item index="6">文章</el-menu-item>
            <el-button>更多设置</el-button>
        </el-menu>

        <el-input placeholder="请输入内容" v-model="searchData" class="input-with-select">

            <el-button slot="append" icon="el-icon-search" style="height: 100%"></el-button>
        </el-input>

    </div>
</template>

<script>

    export default {
        data(){
            return{
                searchData: "",
            }
        },

        methods:{
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },

        components:{

        },
    }
</script>

<style scoped>

</style>
