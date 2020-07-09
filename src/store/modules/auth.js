
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
        if(state.access_token === ""){
            return localStorage.getItem("access_token");
        }
        return state.access_token;
    },
    getRefreshToken: state=> {

        if(state.refresh_token === ""){
            return localStorage.getItem("refresh_token");
        }
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

        Log.info("src/store/modules/auth.js","保存token参数到store")
        
        state.access_token = 'Bearer ' + tokenPayload.access_token;
        state.token_type = tokenPayload.token_type;
        state.refresh_token = tokenPayload.refresh_token;
        state.expires_in = tokenPayload.expires_in;
        state.scope = tokenPayload.scope;
        state.jti = tokenPayload.jti;

        localStorage.setItem("access_token",state.access_token);
        localStorage.setItem("token_type",state.token_type);
        localStorage.setItem("refresh_token",state.refresh_token);
        localStorage.setItem("expires_in",state.expires_in);
        localStorage.setItem("scope",state.scope);
        localStorage.setItem("jti",state.jti);
        
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