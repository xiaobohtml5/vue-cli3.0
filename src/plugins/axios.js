/**
 * Create by 肖波 on 2018/11/16.
 */
import axios from 'axios'
import { DOMAIN } from './domain'

axios.defaults.baseURL = DOMAIN.api
// 转换成form data格式
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.transformRequest = [function (data) {
//     let sendData = ''
//     for (let item in data) {
//         sendData += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&'
//     }
//     return sendData
// }]


export default {
    // 登录后私有接口使用
    api (data) {
        let userInfo = JSON.parse(window.sessionStorage.getItem('userInfo'))
        userInfo ? data.userToken = userInfo.token : ''
        return new Promise((resolve, reject) => {
            axios.post('/', data).then(
                res => {
                    res.data.error === null ? resolve(res.data.response) : reject(res.data.error)
                }
            ).catch(
                err => {
                    reject({
                        errorCode: err.status,
                        errorInfo: '服务器开小差了~'
                    })
                }
            )
        })
    }
}