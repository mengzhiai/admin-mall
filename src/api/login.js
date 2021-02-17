/*
 * @Date: 2021-02-10 23:09:00
 * @Description: 登录
 * @LastEditors: jun
 * @LastEditTime: 2021-02-12 22:55:25
 * @FilePath: \admin-mall\src\api\login.js
 */

import baseUrl from './baseUrl'
import { get, post } from '../utils/http.js'


export function login(data) {
  return post(baseUrl.api + '/user/login', data)
}