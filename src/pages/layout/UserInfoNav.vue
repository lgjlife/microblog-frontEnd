<template>
    <div id="user-info-container">

        <div class="up-block">
            <div class="user-header-img">
                <el-avatar :size="60" >
                    <img :src="headerImgSrc"/>
                </el-avatar>
                <div @click="openUserPage"
                     class="user-name-div"
                     :class="{'user-name-div-active':userNameMouseOn}"
                     @mouseover="userNameMouseOn=true"
                     @mouseout="userNameMouseOn=false"
                >{{userName}}</div>
            </div>
            <div class="user-info">

                <ul>
                    <li :class="{'option-active':curOptionIndex == 1}"
                        @mouseover="curOptionIndex = 1"
                        @mouseout="curOptionIndex = -1"
                        @click="optionSelect(1)"
                    >
                        <span>关注:</span><span>{{followCount}}</span>
                    </li>
                    <li :class="{'option-active':curOptionIndex == 2}"
                        @mouseover="curOptionIndex = 2"
                        @mouseout="curOptionIndex = -1"
                        @click="optionSelect(2)"
                    >
                        <span>粉丝:</span><span>{{fansCount}}</span>
                    </li>
                    <li :class="{'option-active':curOptionIndex == 3}"
                        @mouseover="curOptionIndex = 3"
                        @mouseout="curOptionIndex = -1"
                        @click="optionSelect(3)"
                    >
                        <span>微博:</span><span>{{blogsCount}}</span>
                    </li>
                </ul>
            </div>
            <div style="clear:both"></div>



        </div>
    </div>

</template>

<script>

    import  {openUserPage}  from "@/apis/modules/common/pathRouter.js"


    export default {

        data(){
            return{

                userNameMouseOn: false,

                curOptionIndex: "",
                headerImgSrc: "/img/test/1.jpg",
                userName: "皮皮虾",
                userId: "1",
                userLink: "/user/u/123",

                followCount: 123,
                fansCount: 456,
                blogsCount: 789,


            }
        },
        methods:{
            openUserPage(){
                openUserPage(this,this.userId)
            },

            optionSelect(index){

                //关注
                if(index == 1){
                   this.$router.push("/user/u/" + this.userId + "/home/follow")
                }
                //粉丝
                else if(index == 2){
                    this.$router.push("/user/u/" + this.userId + "/home/fans")
                }
                //微博
                else if(index == 3){
                    this.$router.push("/user/u/" + this.userId + "/home/blog")
                }

            }
        },

        created () {
            window.WIDGET = { ID: '自己的ID' };
            (function (d) {
                var cs = d.createElement('link')
                cs.rel = 'stylesheet'
                cs.href = 'https://apip.weatherdt.com/view/static/css/tqw_widget_view.css?v=0101'
                var s = d.createElement('script')
                s.src = 'https://apip.weatherdt.com/view/static/js/tqw_widget_view.js?v=0101'
                var sn = d.getElementsByTagName('script')[0]
                sn.parentNode.insertBefore(cs, sn)
                sn.parentNode.insertBefore(s, sn)
            })(document)
        }



    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    #user-info-container{
        width: 100%;
        height: 120px;
        background-color: #fffdef;
    }

    .user-name-div{
        color: #CD853F;
        cursor: default;
    }
    .user-name-div-active{
        color: red;
        font-weight: 900;
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
