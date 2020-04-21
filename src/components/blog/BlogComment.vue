<template>
    <div id="blog-comment">
        <div>
            <HeaderNav></HeaderNav>
        </div>
        <div>
            <BlogDisplay></BlogDisplay>
        </div>


    </div>
</template>

<script>
    import HeaderNav from '@/pages/layout/Header-nav.vue'
    import BlogDisplay from '@/components/blog/BlogDisplay.vue'

    import Log from "@/util/log/Log";

    export default {

        data(){
            return{
                userId: "",
                blogId: "",
            }
        },

        methods:{

            init(){
                this.userId = this.$route.params.userId;
                this.blogId = this.$route.params.blogId;

                console.log("this.userId = " + this.userId);


                Log.error("BlogComment.vue","userid=[],blogId=[]",[this.userId,this.blogId])
            },

            log(tag,text,params){

                for (var index = 0; index < params.length;index++){
                    text =  text.replace('[]',params[index])
                }
                var date = new Date();
                var msg = date.format("yyyy-MM-dd hh:mm:ss") + "  " + tag + "  " + text;



            }
        },
        created(){
            this.init()
        },

        components:{
            BlogDisplay,
            HeaderNav,
        }


    }
</script>


<style scoped>

</style>