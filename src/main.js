/*
 * @Date: 2021-02-10 22:49:04
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-02-21 00:07:34
 * @FilePath: \admin-mall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/style/common.css';

import baseUrl from '@/api/baseUrl';

import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css';
Vue.use(Viewer)
Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})

Vue.config.productionTip = false;

Vue.prototype.$uploadUrl = baseUrl.uploadUrl

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
