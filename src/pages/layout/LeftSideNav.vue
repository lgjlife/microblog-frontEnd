<template>
    <div id="left-side-nav">

        <div v-for="item in items">
            <el-link>{{ item.name }}</el-link>
        </div>
    </div>
    
</template>

<script>
export default {

    data(){
        return{
            items:[
                {
                    name: "首页",
                    link: "/"
                },

                {
                    name: "我的评论",
                    link: "/"
                },

                {
                    name: "我的收藏",
                    link: "/"
                },

                {
                    name: "我的点赞",
                    link: "/"
                }
            ],
        }
    },

  props: {
      msg: String,


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
