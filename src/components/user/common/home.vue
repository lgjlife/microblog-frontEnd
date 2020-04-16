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

                paths:["/home/blog","/home/follow","/home/fans"]
            }
        },

        methods:{

            getPath(index){
                return "/user/" + this.curPageType + "/" + this.userId +   this.paths[index];
            },
            optionSelect(index){
                this.$router.push(this.getPath(index))
            },
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
            // console.log("home curPageType = " + this.curPageType);
            // console.log("home userId = " + this.userId);

            this.getDataFromRouter();

        },
        components:{

        }
    }
</script>

<style scoped src="./home.css"/>

<style scoped>


</style>