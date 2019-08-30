import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import 'babel-polyfill'
import './components/modules'
import 'normalize.css'
import './plugins/element.js'
import i18n from './plugins/i18n'
import './plugins/directives'
import './plugins/filters'
import './assets/css/reset.scss'
import './assets/css/common.scss'
import ECharts from 'echarts'

Vue.prototype.$ECahrts = ECharts

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
