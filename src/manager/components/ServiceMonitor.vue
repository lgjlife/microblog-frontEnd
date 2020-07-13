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
            <!-- <iframe height="1000px" width="100%" src="http://localhost:8001"></iframe> -->
            <ServiceList ref="serviceListRef"/>
        </div>

        <div v-else-if="menuItemIndex == menuItemConst.DRUID_MONITOR">
            <h1>Druid监控</h1>  
            
            <iframe height="1000px" width="100%" src="/api/auth/druid/index.html"></iframe>
            
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
import ServiceList from "@/manager/components/ServiceList.vue"
import ManagerHttpRequest from "@/apis/modules/manager/manager-api.js"

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

                serviceAppInfoList:  "",

                serviceListClickCount: 0,
            }
        },


        watch:{
            
            menuItemIndex:function(value){

                let that =this

                Log.info("src/manager/components/ServiceMonitor.vue","menuItemIndex=[] ",[this.menuItemIndex])
                if(value == this.menuItemConst.REGISTER_CENTER_MONITOR){
                    this.serviceListClickCount++;

                    console.log("....................")
                    
                }
            }
        },

        components:{
            ServiceList,
        },
        created(){
            this.init()
        },
        methods:{

            chickMenu(type){

                console.log("chickMenu ......" + type)
                if(type == ConstData.menuItem.monitor.REGISTER_CENTER_MONITOR){
                    
                }
            
            }
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
