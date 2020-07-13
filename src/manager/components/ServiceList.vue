<!-- 
服务列表组件
 -->
 <template>
    <div class="service-list-container">
        <el-table
        :data="serviceInfos"
        height="1500px"
        border
        style="width: 100%">
            <el-table-column　prop="count" label="序号"　 width="30"></el-table-column>
            <el-table-column　prop="serviceId" label="服务"　 width="180"></el-table-column>
            <el-table-column　prop="host" label="IP"　 width="120"></el-table-column>
            <el-table-column　prop="port" label="端口号"　 width="60"></el-table-column>
            
            <el-table-column　prop="status" label="状态"　 width="60"></el-table-column>
            <el-table-column　prop="registrationTimestamp" label="注册时间"　 width="180"></el-table-column>
            <el-table-column　prop="lastRenewalTimestamp" label="续约时间"　 width="180"></el-table-column>
            <el-table-column　label="操作"　 width="180"></el-table-column>        
    </el-table>
    </div>
</template>

<script>

import ConstData from "@/manager/util/const.js"
import Log from "@/assets/js/util/log/Log";
import ManagerHttpRequest from "@/apis/modules/manager/manager-api.js"

    export default {
        props:{
        },
        data() {
            return {
                //
                logFilePath: "src/manager/components/ServiceList.vue",
                //服务信息
                serviceInfos: [ ],
                //服务计数器
                serviceInstanceCount: 0,
                //更新服务信息的任务
                updateServiceInfoTask: "",
                //任务执行间隔
                updateServiceInfoTaskInterval: 5000,

            }
        },


        watch:{
                   
        },

        components:{

        },
        created(){
            //创建定时任务
            Log.debug(this.logFilePath,"创建定时任务:定时更新服务信息，执行间隔:[]s",[this.updateServiceInfoTaskInterval]);
            this.requestServiceInfo();
            this.updateServiceInfoTask = setInterval(this.requestServiceInfo,this.updateServiceInfoTaskInterval)
        },
        beforeDestroy() {
            //关闭定时任务
            Log.debug(this.logFilePath,"关闭定时任务:定时更新服务信息");
            clearInterval(this.updateServiceInfoTask);
        },
        methods:{
        
            /*构建服务数据
            */
            createServiceInfo(count,serviceInfo){

                var registrationTime = new Date(serviceInfo.instanceInfo.leaseInfo.registrationTimestamp)
                registrationTime = registrationTime.format("yyyy-MM-dd hh:mm:ss");

                var lastRenewalTime = new Date(serviceInfo.instanceInfo.leaseInfo.lastRenewalTimestamp)
                lastRenewalTime = lastRenewalTime.format("yyyy-MM-dd hh:mm:ss");
                return {
                    count:count,
                    serviceId:serviceInfo.serviceId,
                    host:serviceInfo.host,
                    port:serviceInfo.port,
                    status:serviceInfo.instanceInfo.status,
                    registrationTimestamp:registrationTime,
                    lastRenewalTimestamp:lastRenewalTime,
                }
            },
            /*
            更新服务列表数据
            */
            updateServiceInfos(serviceAppInfoList){
                this.serviceInfos = []
                this.serviceInstanceCount = 0;
                for(var i = 0 ; i < serviceAppInfoList.length ; i++){ 
                            for(var j = 0 ; j < serviceAppInfoList[i].length ; j++){
                        var serviceInfo = serviceAppInfoList[i][j];
                        this.serviceInstanceCount++;
                        var infoData  = this.createServiceInfo(this.serviceInstanceCount,serviceInfo)
                        this.serviceInfos.push(infoData)
                    }
                }
            },
            /*
            向后台请求服务列表数据
            */
            requestServiceInfo(){

                let that = this 

                ManagerHttpRequest.GetServiceList().then(function (response) {
                    Log.debug(that.logFilePath,"GetServiceList请求成功");
                    if(response.data == null){
                        return 
                    }
                    that.updateServiceInfos(response.data)
                })
                .catch(function (error) {
                    Log.debug(that.logFilePath,"GetServiceList请求失败");
                    console.log(error)
                    console.log(JSON.stringify(error))
                });
            },


           
        },
       
    }

</script>

<style scoped>

.service-list-container{
    width: 100%;
    height: 100%;
}

</style>
