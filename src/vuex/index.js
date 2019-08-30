/**
 * Create by 肖波 on 2019/07/03.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import Login from './stores/login'
import Home from './stores/home'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Login,
        Home,
    }
})
