<!-- 
组件名称: 后台监控组件
* 服务注册中心
* Ｄruid监控
* Admin
* Rocket监控
* 接口查询
 -->
<template>
    <div class="service-monitor-container">
        
        <div v-if="menuItemIndex == menuItemConst.REGISTER_CENTER_MONITOR">
            <h1>服务注册中心</h1>
            <iframe height="1000px" width="100%" src="http://localhost:8001"></iframe>
        </div>

        <div v-else-if="menuItemIndex == menuItemConst.DRUID_MONITOR">
            <h1>Ｄruid监控</h1>           
        </div>

        <div v-else-if="menuItemIndex == menuItemConst.SPRING_BOOT_ADMIN_MONITOR">
            <h1>Admin</h1>           
        </div>

        <div v-else-if="menuItemIndex == menuItemConst.ROCKETMQ_MONITOR_MONITOR">
            <h1>Rocket监控</h1>
            <iframe height="1000px" width="100%" src="http://localhost:8182"></iframe>
        </div>

        <div v-else-if="menuItemIndex == menuItemConst.API_LIST">
            <h1>接口查询</h1>            
        </div>


        
    </div>
</template>

<script>

import ConstData from "@/manager/util/const.js"
import Log from "@/assets/js/util/log/Log";
    export default {
        props:{
            menuItemIndex: "",
        },
        data(){
            return{
                menuItemConst: {
                    REGISTER_CENTER_MONITOR: ConstData.menuItem.monitor.REGISTER_CENTER_MONITOR,
                    DRUID_MONITOR: ConstData.menuItem.monitor.DRUID_MONITOR,
                    SPRING_BOOT_ADMIN_MONITOR: ConstData.menuItem.monitor.SPRING_BOOT_ADMIN_MONITOR,
                    ROCKETMQ_MONITOR_MONITOR: ConstData.menuItem.monitor.ROCKETMQ_MONITOR_MONITOR,
                    API_LIST: ConstData.menuItem.monitor.API_LIST
                },
            }
        },


        watch:{
            menuItemIndex:function(value){
                console.log(value)
                this.curItem = this.menuItemIndex
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

<style scoped>

.service-monitor-container{
    width: 100%;
}

</style>
