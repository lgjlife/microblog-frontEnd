import ApiPath from "@/apis/ApiPath.js"

const Mock = require("mockjs")

Mock.mock(ApiPath.user.getUserInfo.path, ApiPath.user.getUserInfo.method, {

    "code": 0,
    "data": {
        "userId": 1000234234001, // 随机生成中文人名
        "userName": "@CNAME",
    },
    "msg": "success"
})
