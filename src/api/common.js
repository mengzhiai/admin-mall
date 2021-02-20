/*
 * @Date: 2021-02-20 23:07:57
 * @Description: 公用api
 * @LastEditors: jun
 * @LastEditTime: 2021-02-20 23:08:53
 * @FilePath: \admin-mall\src\api\common.js
 */
import baseUrl from './baseUrl'
import { get, post } from '../utils/http.js'


export function upload(data) {
  return post(baseUrl.api + '/public/upload', data)
}