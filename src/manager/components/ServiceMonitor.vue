<template>
    <div class="service-monitor-container">
        <h1>服务监控</h1>
        <div v-if="menuItemIndex === 0">
            <iframe height="1000px" width="100%" src="http://localhost:8001"></iframe>
        </div>

        <div v-else-if="menuItemIndex === 1">
            Ｄruid监控
        </div>

        <div v-else-if="menuItemIndex === 2">
            Admin
        </div>

        <div v-else-if="menuItemIndex === 3">
            <iframe height="1000px" width="100%" src="http://localhost:8182"></iframe>
        </div>

        <div v-else-if="menuItemIndex === 4">
            接口查询
        </div>


        
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
