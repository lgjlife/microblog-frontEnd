
import store from "@/store/store.js"

import ManagerHTTP from "@/apis/modules/manager/manager-api.js"
import Log from "@/assets/js/util/log/Log";

let GRANT_TYPE="password";
let GRANT_TYPE_REFRESH_TOKEN="refresh_token"
let CLIENT_ID="manager-client";
let CLIENT_SECRET="manager-secret";

/**
 * 通过账户名称和密码获取tokken 
 * 请求：　/oauth/token?grant_type=password&&client_id=test-client&&client_secret=test-secret&&username=my-username&&password=my-password1
 * 返回：　{
    "access_token": "",
    "token_type": "bearer",
    "refresh_token": "",
    "expires_in": 39,
    "scope": "default-scope",
    "jti": "236b3359-1f05-4c8c-820a-28416e1063a1"
}
 */
export const getLoginData  =(username,password)=>{

    return {
        grant_type:GRANT_TYPE,
        client_id:CLIENT_ID,
        client_secret:CLIENT_SECRET,
        username:username,
        password:password,
    }
}

/**
 * /oauth/token?grant_type=refresh_token&client_id=test-client&client_secret=test-secret&refresh_token= refresh_token_val
 */
export const getRefreshTokenRequestData  =()=>{

    let refreshToken = store.getters["auth/getRefreshToken"]

    return {
        grant_type: GRANT_TYPE_REFRESH_TOKEN,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        refresh_token: refreshToken
    }
}

export const RefreshToken =()=>{

    Log.debug("src/manager/util/managerAuth.js","RefreshToken........");

    return 
    ManagerHTTP.RefreshToken(getRefreshTokenRequestData()).then(function (response) {
                       
        console.log(JSON.stringify(response));
        var code = response.data.code
        if(typeof(code) != undefined){
            
            var tokenPayload = response.data;   
            
            console.log(store)
             //保存到vuex
            store.commit("auth/authDataSave",tokenPayload);   
             
            var readToken = store.getters["auth/getAccessToken"];
          
            Log.debug("src/manager/util/managerAuth.js","刷新Token成功:expires_in＝[]s　readToken=[]",[tokenPayload.expires_in,readToken]);
            //跳转到管理页面
           // that.$router.push({path: "/manager"})         
        }
        else{
            Log.debug("src/manager/util/managerAuth.js","刷新Token失败[]",[response.data.msg]);
        }       
       
       
    })
    .catch(function (error) {
        Log.debug("src/manager/util/managerAuth.js","刷新Token失败[]",[error.status]);
    })  
}

export default {
    getLoginData,
    RefreshToken
}