/*
 * @Date: 2021-03-13 11:35:11
 * @Description: 公用混入
 * @LastEditors: jun
 * @LastEditTime: 2021-07-09 00:37:26
 * @FilePath: \admin-mall\src\utils\mixin.js
 */
import { MessageBox, Message } from 'element-ui';
export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          disabledBtn: false,
          formLoading: false,
          commonLoading: false,
          dialogTitle: '',
          editDialog: false
        }
      },
      methods: {
        loadingStatus(boolVal) {
          if (boolVal) {
            this.commonLoading = true;
          } else {
            this.commonLoading = false;
          }
        },


        commonMsg(res) {
          if (res.code === 200) {
            Message({
              message: res.msg,
              type: 'success'
            });
          }
        },

        commonEditMsg(res, callback, dialog) {
          if (res.code === 200) {
            this.dialog = false;
            Message({
              message: res.msg,
              type: 'success'
            });
          }
        }
      }
    })
  }
}
