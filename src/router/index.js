import Vue from 'vue'
import Router from 'vue-router'
const Layout = () => import(/* webpackChunkName: "about" */ '../components/layout/Layout')
const Login = () => import(/* webpackChunkName: "about" */ '../views/login')

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'layout',
            component: Layout,
            children: []
        },
        {
            path: '/login',
            name: '登录',
            component: Login
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     // let userInfo = window.sessionStorage.getItem('userInfo')
//     // if (userInfo) {
//     //   if (to.path === '/login') {
//     //     window.sessionStorage.clear()
//     //     next()
//     //   } else {
//     //     next()
//     //   }
//     // } else {
//     //     to.path === '/login' ? next() : next('/login')
//     // }
// })

export default router