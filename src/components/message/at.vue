<template>

    <div style="margin: 0px ;width: 100% ;padding: 0px; margin-left: 0px">
        <titleNav title="@我的微博" ></titleNav>
        <BlogDisplay></BlogDisplay>
    </div>
</template>


<script>

    import titleNav from "./title.vue"
    import Emotion from '@/components/common/Emotion.vue'
    import {TIME_CHANGE} from "@/util/time/time.js"

    import BlogDisplay from '@/components/blog/BlogDisplay.vue'

    export default {
        data(){
            return{

            }
        },

        methods:{
            searchBlog(searchData){

                console.log("搜索：" + searchData);
            }
        },


        components:{
            Emotion,
            titleNav,
            BlogDisplay,
        }


    }

</script>

<style scoped>

    body{
        width: 1200px;
    }

</style>