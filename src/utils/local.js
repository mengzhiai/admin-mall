/*
 * @Date: 2021-07-30 01:09:32
 * @Description: 本地存储
 * @LastEditors: jun
 * @LastEditTime: 2021-07-30 01:24:10
 * @FilePath: \admin-mall\src\utils\local.js
 */
const local = {
  set(name, value) {
     localStorage.setItem(name, JSON.stringify(value));
  },

  get(name) {
    let data = localStorage.getItem(name);
    return JSON.parse(data);
  },

  remove(name) {
    localStorage.removeItem(name)
  }
}
export  default local;