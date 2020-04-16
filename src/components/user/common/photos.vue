<template>
    <div>

    </div>
</template>

<script>

    export default {

        // props: {
        //     curPageType:{
        //         default: ""
        //     },
        //     userId: {
        //         default: ""
        //     }
        // },

        data(){
            return{
                //当前用户页面类型 u: 登录用户　,　o:其他用户
                curPageType: "",
                userId: "",
            }
        },

        methods:{
            getDataFromRouter(){
                this.curPageType = this.$route.params.type;
                this.userId = this.$route.params.userId;

                console.log("type  = " + this.$route.params.type);
                console.log("id  = " + this.$route.params.userId);

                if((this.curPageType != 'u') && (this.curPageType != 'o')){
                    this.$router.push("/404")
                }

            }
        },

        created(){
            // console.log("photo curPageType = " + this.curPageType);
            // console.log("photo userId = " + this.userId);

            this.getDataFromRouter();
        },
        components:{

        }
    }
</script>

<style scoped>


</style>