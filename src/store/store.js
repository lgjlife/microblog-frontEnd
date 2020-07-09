import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//import modules
import user from "./modules/user"
import auth from "./modules/auth"



export default new Vuex.Store({
    modules: {
        user,
        auth
    },
})



