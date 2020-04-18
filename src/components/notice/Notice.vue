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

            <div class="up_add_bg">
                <input type="file" class="up_add" @change="change" id="exampleInputFile">
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
            change(ev){
                console.log(ev.target.files[0]);

                var reader = new FileReader();
                reader.onload = (function (file) {
                    return function (e) {
                        console.info(this);

                        // console.info(this.result); //这个就是base64的数据了
                        // var sss=$("#showImage");
                        // $("#showImage")[0].src=this.result;
                    };
                })(ev.target.files[0]);
                reader.readAsDataURL(ev.target.files[0]);

                },
            dd(ex){

                reader.onload = (function (file) {
                    return function (e) {
                        console.info(this.result); //这个就是base64的数据了
                        // var sss=$("#showImage");
                        // $("#showImage")[0].src=this.result;
                    };
                })(ev.target.files[0]);
                reader.readAsDataURL(ev.target.files[0]);
            }

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

    .up_add {
        width: 100px;
        height: 100px;
        opacity: 0;
    }
    .up_add_bg {
        width: 100px;
        height: 100px;
        background-image: url(/img/test/1.jpg);
    }

</style>