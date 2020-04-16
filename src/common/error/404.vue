<template>
    <div id="not-foud-page" >
        <img src="/img/err/404.jpg" @click="imgClick" style="width: 100%; height: 100%"/>
    </div>
</template>

<script>

    export default {
        data(){

            return{

            }
        },
        methods:{
            imgClick(){
                this.$router.push("/")
            }

        }

    }
</script>

<style scoped>
    #not-foud-page{

    }
</style>