import Vue from 'vue'
import Element from 'element-ui'
import '../assets/css/element-variables.scss'
import i18n from './i18n'

Vue.use(Element, {
    i18n: (key, value) => i18n.t(key, value)
})
