<template>
    <p>我是p标签,数据为：{{data}}</p>
</template>

<script>
    export default {

        data(){
          return{

          }
        },

        props: {
            data: {
                type: String,
                default: ''
            }
        }
    };
</script>

<style scoped>

</style>