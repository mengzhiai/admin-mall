/*
 * @Date: 2021-02-10 22:49:04
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-02-13 14:20:32
 * @FilePath: \admin-mall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/style/common.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
