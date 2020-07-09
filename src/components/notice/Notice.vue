<template>
    <div id="notice">
        <div class="notice-header">
             <span>公告</span>
        </div>
        <div class="notice-content">
            <div>
                <a href="">管理页面</a>
            </div>
            <div>
                <a href="https://github.com/lgjlife/micro-blog">后台项目地址</a>
            </div>
            <div>
                <a href="https://github.com/lgjlife/microblog-frontEnd">前端项目地址</a>
            </div>
            <div>
                <a href="http://home.cnblogs.com/u/lgjlife/">我的博客</a>
            </div>
            <div>
                <a href="http://localhost:8081/manager">后台管理</a>
            </div>


        </div>
    </div>

</template>

<script>

    export default {
        data(){
            return{
                content: "早随郁荣誉主席到慈湖谒陵 纪念先总统蒋介石先生逝世日 这个曾经游客如织的地方 自从蔡当局借口泼漆事件后维安需要 从此被半封闭了起来 加上大陆观光团减少",
            }
        },

        methods:{


        }
    }
</script>

<style scoped>

    #notice{
        background-color: #fffdef;
        position: relative;

    }
    .notice-header{
        text-align: center;
        height: 60px;
        background-color: #b3d4fc;
    }
    .notice-header span{
        font-weight: 800;
        font-size: 30px;

    }
    .notice-content{
        margin: 5px 5px 5px 5px ;
    }


</style>