/*
 * @Date: 2021-02-20 23:07:57
 * @Description: 公用api
 * @LastEditors: jun
 * @LastEditTime: 2021-07-10 15:24:01
 * @FilePath: \admin-mall\src\api\common.js
 */
import baseUrl from './baseUrl'
import { get, post } from '../utils/http.js'


// 获取七牛云上传token
export function uploadToken() {
  return get(baseUrl.api + '/public/tokenData')
}

export function qiniuUpload(data) {
  return post('https://up-z1.qiniup.com', data)
}

// 获取所有商品列表
export function allProductList() {
  return get(baseUrl.api + '/public/allProductList')
}