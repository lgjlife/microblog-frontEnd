<template>
    <div >
        <!--左侧-->
        <div class="left-container">

            <!--选项-->
            <div class="left-option-container">
                <ul>
                    <li class="left-option-item" @click="optionSelect(0)">
                        <div>58</div>
                        <div>微博</div>
                    </li>
                    <li class="left-option-item" @click="optionSelect(1)">
                        <div>210</div>
                        <div>关注</div>
                    </li>
                    <li class="left-option-item" @click="optionSelect(2)">
                        <div>13</div>
                        <div>粉丝　</div>
                    </li>

                </ul>
            </div>
            <!--个人资料栏-->
            <div class="left-per-data">
                个人资料栏
            </div>

        </div>
        <!--右侧-->
        <div class="right-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                paths:["/user/home/blog","/user/home/follow","/user/home/fans"]
            }
        },

        methods:{
            optionSelect(index){
                this.$router.push(this.paths[index])
            }
        },

        created(){

        },
        components:{

        }
    }
</script>

<style scoped src="./index.css"/>

<style scoped>


</style>