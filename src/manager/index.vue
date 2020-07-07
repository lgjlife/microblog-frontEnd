<template>
    <div class="manage-container">

        <div class="left-menu">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">

                <div v-for="(item,index) in menus">
                    <el-submenu v-bind:index="index+''">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.title}}</span>
                        </template>
                       <el-menu-item-group v-for="(menuItem,menuItemIndex) in item.menuItems">            
                            <el-menu-item :index="menuItem.name" 
                                @click="menuItemClick(index,menuItemIndex)">
                                {{menuItem.name}}
                            </el-menu-item>
                        </el-menu-item-group>             
                    </el-submenu>
                </div>
               </el-menu> 
        </div>
        <div class="right-display">
            <div>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">主菜单</el-breadcrumb-item>
                    <el-breadcrumb-item>{{breadcrumbMenu.oneLevel}}</el-breadcrumb-item>
                    <el-breadcrumb-item>{{breadcrumbMenu.twoLevel}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <router-view class="interface" :menuItemIndex='menuItemIndex'></router-view>
           
        </div>

        
    </div>
</template>

<script>

import Log from "@/assets/js/util/log/Log";
    export default {
        data(){
            return{
                menus: [
                    {   title: "服务监控",
                        path: "/manager/monitor",
                        menuItems:[ {name: "注册中心",path: "/manager/"},
                            {name: "Druid监控",path: ""},
                            {name: "Spring Boot Admin",path: "/manager/",},
                            {name: "RocketMQ",path: "/manager/"},
                            {name: "接口查询",path: "/manager/"},
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

                menuItemIndex: "",
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

            menuItemClick(index,menuItemIndex){
         
                Log.info("src/manager/index.vue","menu oneLevel=[] twoLevel=[] path=[],index=[]",
                [index,menuItemIndex]);

                this.$router.push({path: this.menus[index].path})

                this.menuItemIndex = menuItemIndex

                this.breadcrumbMenu.oneLevel = this.menus[index].title;
                this.breadcrumbMenu.twoLevel = this.menus[index].menuItems[menuItemIndex].name;
            }

        }


    }

</script>

<style scoped src="./css/index.css"/>

<style scoped >

</style>