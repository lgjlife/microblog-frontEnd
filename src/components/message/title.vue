<template>
    <div class="title-nav">
        <span>{{title}}</span>
        <el-input  placeholder="请输入查找内容"  v-model="searchData" size="mini"
                   class="input-with-select input-search"
        >
            <el-button slot="append" icon="el-icon-search" @click="searchBlog"></el-button>
        </el-input>

    </div>
</template>

<script>
    export default {

        props:{

            title: {
                default: "",
            }
        },
        data(){
           return{
               searchData: "",
           }
        },

        methods:{
            searchBlog(){
                this.$parent.searchBlog(this.searchData)
            }
        }
    }

</script>


<style scoped>
    .title-nav{
        position: relative;
        max-height: 40px;
        height: 30px;
        width: 100%;
        background-color: #cccccc;
    }
    .input-search{
        position: absolute;
        width: 200px;
        right: 0px;
        margin-right: 0px;
        padding-right: 0px;

    }

</style>