<template>
    <div id="blog-comment">
        <div>
            <HeaderNav></HeaderNav>
        </div>
        <div class="blog-content">
            <BlogDisplay></BlogDisplay>
        </div>


    </div>
</template>

<script>
    import HeaderNav from '@/pages/layout/HeaderNav.vue'
    import BlogDisplay from '@/components/blog/BlogDisplay.vue'

    import Log from "@/assets/js/util/log/Log";

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

                Log.error("BlogComment.vue","userid=[],blogId=[]",[this.userId,this.blogId])
            },
        },
        created(){
            this.init()


            document.title= "xxxx"
        },

        components:{
            BlogDisplay,
            HeaderNav,
        }


    }
</script>


<style scoped src="./css/blog-details.css">

</style>