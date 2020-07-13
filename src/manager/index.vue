<!-- 
名称: 后台管理页面
 -->
<template>
    <div class="manage-container">
        <!-- 左侧菜单 -->
        <div class="left-menu">
            
            <div>
                李白　2020-06-15　12：00
            </div>
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <!-- 一级菜单 -->
                <div v-for="(item,index) in menus">
                    <el-submenu v-bind:index="index+''">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.title}}</span>
                        </template>
                        <!-- 二级菜单 -->
                       <el-menu-item-group v-for="(menuItem,menuItemIndex) in item.menuItems">            
                            <el-menu-item :index="menuItem.name" 
                                @click="menuItemClick(index,menuItemIndex,menuItem.type)">
                                {{menuItem.name}}
                            </el-menu-item>
                        </el-menu-item-group>             
                    </el-submenu>
                </div>
            </el-menu> 
        </div>
        <!-- 右侧显示 -->
        <div class="right-display">
            <!-- 标题栏 -->
            <div class="breadcrum-title">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">主菜单</el-breadcrumb-item>
                    <el-breadcrumb-item>{{breadcrumbMenu.oneLevel}}</el-breadcrumb-item>
                    <el-breadcrumb-item>{{breadcrumbMenu.twoLevel}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>        
    　　     <!-- router-view -->
            <router-view class="interface" ref="routerView" :menuItemIndex='menuItemIndex'></router-view>           
        </div>        
    </div>
</template>

<script>

import Log from "@/assets/js/util/log/Log";
import ConstData from "@/manager/util/const.js"

    export default {
        data(){
            return{
                menus: [
                    {   title: "服务监控",
                        path: "/manager/monitor",
                        menuItems:[ {name: "注册中心",path: "/manager/",
                                type: ConstData.menuItem.monitor.REGISTER_CENTER_MONITOR
                            },
                            {name: "Druid监控",path: "",
                                type: ConstData.menuItem.monitor.DRUID_MONITOR
                            },
                            {name: "Spring Boot Admin",path: "/manager/",
                                type: ConstData.menuItem.monitor.SPRING_BOOT_ADMIN_MONITOR
                            },
                            {name: "RocketMQ",path: "/manager/",
                                type: ConstData.menuItem.monitor.ROCKETMQ_MONITOR_MONITOR
                            },
                            {name: "接口查询",path: "/manager/",
                                type: ConstData.menuItem.monitor.API_LIST
                            },
                        ]
                    },
                    {   title: "任务中心",
                        path: "/manager/task",
                        menuItems:[ {name: "任务列表",path: "/manager/"},
                            {name: "添加任务",path: "/manager/"},
                        ]
                    },
                    {   title: "用户中心",
                        path: "/manager/user",
                        menuItems:[ {name: "注册中心",path: ""},
                            {name: "Druid监控",path: ""},
                            {name: "Spring Boot Admin",path: "",},
                            {name: "RocketMQ",path: ""},
                            {name: "接口查询",path: "",},
                        ]
                    },
                    {   title: "权限管理",
                        path: "/manager/permission",
                        menuItems:[ {name: "注册中心",path: ""},
                            {name: "Druid监控",path: ""},
                            {name: "Spring Boot Admin",path: "",},
                            {name: "RocketMQ",path: ""},
                            {name: "接口查询",path: "",},
                        ]
                    },

                ],

                breadcrumbMenu:{
                    oneLevel: "",
                    twoLevel: "",
                },

                menuItemIndex: ConstData.menuItem.monitor.REGISTER_CENTER_MONITOR,
            }
        },
        components:{


        },
        created(){
            this.init()
        },
        methods:{

            init(){

            },

            handleOpen(index) {
                this.$router.push({path: this.menus[index].path,query:  { menuItem: index}})
                this.breadcrumbMenu.oneLevel = this.menus[index].title;
                this.breadcrumbMenu.twoLevel = this.menus[index].menuItems[0].name;

            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            /*
            * 菜单点击事件

            */
            menuItemClick(index,menuItemIndex,type){
         
                Log.info("src/manager/index.vue","index =[] menuItemIndex=[] type=[]",
                [index,menuItemIndex,type]);

                this.$router.push({path: this.menus[index].path})

                this.menuItemIndex = type

                this.breadcrumbMenu.oneLevel = this.menus[index].title;
                this.breadcrumbMenu.twoLevel = this.menus[index].menuItems[menuItemIndex].name;

                this.$refs.routerView.chickMenu(type)
            }

        }


    }

</script>

<style scoped src="./css/index.css"/>

<style scoped >

</style>