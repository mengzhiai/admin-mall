/*
 * @Date: 2021-02-20 23:07:57
 * @Description: 公用api
 * @LastEditors: jun
 * @LastEditTime: 2021-06-01 22:55:13
 * @FilePath: \admin-mall\src\api\common.js
 */
import baseUrl from './baseUrl'
import { get, post } from '../utils/http.js'


export function uploadToken() {
  return get(baseUrl.api + '/public/tokenData')
}

export function qiniuUpload(data) {
  return post('https://up-z1.qiniup.com', data)
}