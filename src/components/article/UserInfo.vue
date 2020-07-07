<template>
    <div id="user-info-container">
        <el-avatar :size="60">
            <img :src=""/>
        </el-avatar>
    </div>
</template>

<script>
    export default {

        props:{
            userId: '',
        },

        data(){
            return{
                content: "",
            }
        },
        components:{

        },
        created(){

        },
        methods:{

        }


    }
</script>

<style scoped>

    #article-announcement-container{
        width: 100%;
        min-height: 160px;
        min-height: 160px;

        border-bottom: 1px solid black;
    }
</style>