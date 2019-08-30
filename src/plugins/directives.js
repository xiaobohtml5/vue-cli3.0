/**
 * Create by 肖波 on 2019/07/05.
 */
import Vue from 'vue'

// 聚焦鼠标
Vue.directive('focus', {
    inserted (el) {
        el.focus()
    }
})