/*
 * @Date: 2021-03-06 21:31:36
 * @Description: 设置
 * @LastEditors: jun
 * @LastEditTime: 2021-03-06 21:36:23
 * @FilePath: \admin-mall\src\api\user.js
 */
import baseUrl from './baseUrl'
import { get, post } from '../utils/http.js'


export function userList(data) {
  return get(baseUrl.api + '/user/list', data)
}