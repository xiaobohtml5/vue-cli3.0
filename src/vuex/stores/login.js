/**
 * Create by 肖波 on 2019/07/03.
 */
import axios from 'plugins/axios'

const state = {

}

const actions = {
    /* 获取图片验证码 */
    'a:login/getVerifyImage' (context, parameters = {}) {
        return axios.api({
            cmd: 'memberCenter/verifyImage/getImage',
            parameters
        })
    },
    /* 登录接口 */
    'a:login/memberLogin' (context, parameters = {}) {
        return axios.api({
            cmd: 'appstat/memberLogin/memberLogin',
            parameters
        })
    },
}

const mutations = {

}

const getters = {

}

export default {
    state,
    actions,
    mutations,
    getters
}
