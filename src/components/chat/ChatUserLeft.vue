
<template>
    <div class="chat-left-block">
        <div class="chat-hearder-img">
            <el-avatar  :size="50" :src=headerImg></el-avatar>
        </div>
        <div class="chat-left">
            <span>{{content}}</span>
        </div>
    </div>
</template>
<script>

    export default {
        props: {
            content: {
              default: "",
            },
            headerImg: {
                default: "",
            },
        }
    }


</script>

<style scoped src="./chat.css"/>

<style scoped>


</style>

