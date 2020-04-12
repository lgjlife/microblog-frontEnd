<template>
    <div>
        ============================77、动态添加不同组件============================
        <!--
         :is="item.type" 根据当前类型加载不同的组件
        -->
        <component v-for="(item,index) in componentData" :key="index" :is="item.type" :data="item.itemData"></component>
    </div>
</template>

<script>
    import component1 from './component1.vue'
    import component2 from './component2.vue'
    // import store from "@/store/store.js"

    import * as login  from "@/apis/user/login.js"

    export default {
        name: "DynamicAdditionOfDifferentComponents_77",
        data(){
            return {
               // currentView:'component1',
                componentData:[],
            }
        },
        components:{
            component1,
            component2,
        },

        beforeCreate: function () {
            console.log(this.$appName)
        },

        created(){
            for (let i = 0; i <10 ; i++) {
                let type = i === 3?'component1':'component2';
                this.componentData.push({
                    type:type,
                    itemData:i+''
                })
            }


            // store.commit('increment')
            //
            // // console.log(this.$store.userInfo.userId) // -> 1
            // console.log("addCount = " + this.$store.getters.addCount);
            // console.log(this.$store.state.userInfo.userName) // -> 1
            // console.log(this.$store.state.count) // -> 1

            login.UserLogin("123").then((response) =>{          //这里使用了ES6的语法

            })
            .catch((error) =>{

                console.log(error)//请求失败返回的数
                this.warning = "登录失败"
            } )


        }
    }
</script>

<style scoped>

</style>