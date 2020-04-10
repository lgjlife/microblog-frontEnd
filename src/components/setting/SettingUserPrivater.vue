<template>
    <!--隐私设置-->
    <div >
    </div>
</template>

<script>

    export default {

        data() {
            return{
                userId: "",
            }
        },

        methods:{

        },

        created(){
            this.userId = this.$route.params.userId;

            console.log("userId = " + this.userId)
        }
    }

</script>

<style scoped>


</style>