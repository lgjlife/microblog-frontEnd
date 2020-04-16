<template>
    <div id="right-side-nav">
        <UserInfoNav></UserInfoNav>
        <HotTopicNav></HotTopicNav>
    </div>
    
</template>

<script>

    import UserInfoNav from './UserInfoNav.vue'
    import HotTopicNav from './HotTopicNav.vue'

export default {

    data(){
        return{
        }
    },

    components:{
        UserInfoNav,
        HotTopicNav,
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    #right-side-nav{
        height: 100%;
        background-color: #fffdef;
    }
</style>
