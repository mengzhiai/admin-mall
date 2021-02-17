/*
 * @Date: 2021-02-13 14:36:34
 * @Description: 产品管理
 * @LastEditors: jun
 * @LastEditTime: 2021-02-15 14:47:27
 * @FilePath: \admin-mall\src\api\product.js
 */
import baseUrl from './baseUrl'
// import { get, post } from '../utils/request.js'
import { get, post } from '../utils/http'

import { service } from '@/utils/request'

// 产品列表
export function productList(data) {
  return get(baseUrl.api + '/product/list', data)
}


// 添加产品
export function productAdd(data) {
  return post(baseUrl.api + '/product/add', data)
}


// 详情
export function productDetail(id) {
  return get(baseUrl.api + '/product/detail', {id})
}

// 更新
export function productUpdate(data) {
  return post(baseUrl.api + '/product/update', data)
}


// 删除产品
export function productDelete(data) {
  return post(baseUrl.api + '/product/delete', data)
}
