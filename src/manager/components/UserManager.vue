<template>
    <div class="service-monitor-container">
        <h1>用户管理</h1>
       


        
    </div>
</template>

<script>

import Log from "@/assets/js/util/log/Log";
    export default {
        props:{
            menuItemIndex: "",
        },
        data(){
            return{
                
            }
        },

        watch:{
            menuItemIndex:function(value){
                console.log(value)

                Log.info("src/manager/components/ServiceMonitor.vue","menuItemIndex=[] ",[this.menuItemIndex])

            }
        },

        components:{

        },
        created(){
            this.init()
        },
        methods:{

           
        },
        created(){
            this.menuItem = this.$route.query.menuItem;
            Log.info("src/manager/components/ServiceMonitor.vue","menuItem=[]",[this.menuItem])
        }



    }

</script>

<style scoped/>
