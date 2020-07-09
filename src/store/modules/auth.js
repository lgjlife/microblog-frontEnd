
import Log from "@/assets/js/util/log/Log";

const state = {

    access_token: "",
    token_type: "",
    refresh_token: "",
    expires_in: "",
    scope: "",
    jti:"",

    counter: 0,
}

// getters
const getters = {
    
    getAccessToken: state=> {
        return state.access_token;
    },
    getRefreshToken: state=> {
        return state.refresh_token;
    },

}

// actions
/**
 *  Action 提交的是 mutation，而不是直接变更状态。
    Action 可以包含任意异步操作
 * 
 */
const actions = {

    authDataSave (context,tokenPayload) {
        console.log("+++++++++++++++++++")
        Log.info("src/store/modules/auth.js","保存认证数据.....[]",[JSON.stringify(tokenPayload)])
        context.commit('authDataSave',tokenPayload)
    },
    //测试
    increment (context) {
        context.commit('increment')
    },
    incrementBy (context,counter) {
        context.commit('incrementBy',counter)
    }


}

// mutations
const mutations = {

    authDataSave(state,tokenPayload){

        Log.info("src/store/modules/auth.js","保存认证数据.....")
        state.access_token = 'Bearer ' + tokenPayload.access_token;
        state.token_type = tokenPayload.token_type;
        state.refresh_token = 'Bearer ' + tokenPayload.refresh_token;
        state.expires_in = tokenPayload.expires_in;
        state.scope = tokenPayload.scope;
        state.jti = tokenPayload.jti;

        localStorage.setItem("state.access_token",state.access_token);
        localStorage.setItem("state.token_type",state.token_type);
        localStorage.setItem("state.refresh_token",state.refresh_token);
        localStorage.setItem("state.expires_in",state.expires_in);
        localStorage.setItem("state.scope",state.scope);
        localStorage.setItem("state.jti",state.jti);

        Log.info("src/store/modules/auth.js","保存认证数据完成")
        
    },
    increment (state) {
        state.counter++
    },

    incrementBy (state,counter) {
        state.counter +=counter
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}