
<template>
    <div class="chat-right-block">

        <div class="chat-right">
            <span>
                <i>
                    <img :src="contentImg" v-if="contentImg != ''" width="100px" height="100px">
                    {{content}}
                </i>
            </span>
        </div>
        <el-avatar class="chat-hearder-img" :size="50" :src="headerImg"></el-avatar>
    </div>
</template>
<script>
    import "./chat.css"
    export default {
        props: {
            content: {
                default: "",
            },
            contentImg: {
                default: "",
            },
            headerImg: {
                default: "",
            },
        }
    }


</script>

