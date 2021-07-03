/*
 * @Date: 2021-02-10 22:49:04
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-07-03 21:36:00
 * @FilePath: \admin-mall\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uploadData: {}
  },
  mutations: {
    setUploadData(state, val) {
      state.uploadData = val;
    }
  },
  actions: {
  },
  modules: {
  }
})
