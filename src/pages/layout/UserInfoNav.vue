<template>
    <div id="user-info-container">

        <div class="up-block">
            <div class="user-header-img">
                <el-avatar :size="60" >
                    <img :src="headerImgSrc"/>
                </el-avatar>

            </div>
            <div class="user-info">
                <el-link :href=userLink target="_blank">{{userName}}</el-link>
                <ul>
                    <li :class="{'option-active':curOptionIndex == 1}"
                        @mouseover="curOptionIndex = 1"
                        @mouseout="curOptionIndex = -1"
                        @click="optionSelect(1)"
                    >
                        <span>关注:</span><span>208</span>
                    </li>
                    <li :class="{'option-active':curOptionIndex == 2}"
                        @mouseover="curOptionIndex = 2"
                        @mouseout="curOptionIndex = -1"
                        @click="optionSelect(1)"
                    >
                        <span>粉丝:</span><span>208</span>
                    </li>
                    <li :class="{'option-active':curOptionIndex == 3}"
                        @mouseover="curOptionIndex = 3"
                        @mouseout="curOptionIndex = -1"
                        @click="optionSelect(1)"
                    >
                        <span>微博:</span><span>208</span>
                    </li>
                </ul>
            </div>
            <div style="clear:both"></div>
        </div>
    </div>

</template>

<script>
    export default {

        data(){
            return{

                curOptionIndex: "",
                headerImgSrc: "/img/test/1.jpg",
                userName: "皮皮虾",
                userLink: "/user/123",


            }
        },

        props: {
            msg: String,


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    #user-info-container{
        width: 100%;
        height: 100px;
        background-color: #fffdef;
    }

    .up-block{
        width: 100%;
    }

    .user-header-img{

        float: left;
        text-align: center;
        margin-top: 15px;

        width: 40%;

    }
    .user-info{
        width: 60%;
        float: left;
        text-align: center;
    }

    .user-info ul {
        margin-top: 0px;
        margin-left: 0px;
        padding-left: 0px;
        list-style: none;
        cursor: default;

    }

    .option-active{
        color: #ee9900;
    }
</style>
