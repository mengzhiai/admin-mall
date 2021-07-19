/*
 * @Date: 2021-02-13 14:36:34
 * @Description: 产品管理
 * @LastEditors: jun
 * @LastEditTime: 2021-07-18 13:57:01
 * @FilePath: \admin-mall\src\api\product.js
 */
import baseUrl from './baseUrl'
// import { get, post } from '../utils/request.js'
import { deleteFn, get, post, put } from '../utils/http'

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


// 获取分类列表
export function classifyList(data) {
  return get(baseUrl.api + '/classify/list', data)
}

// 添加分类
export function addClassify(data) {
  return post(baseUrl.api + '/classify/add', data)
}

// 分类详情
export function classifyDetail(id) {
  return get(baseUrl.api + `/classify/detail/${id}`)
}

// 更新分类
export function classifyUpdate(data) {
  return put(baseUrl.api + `/classify/update`, data)
}


// 删除分类
export function classifyDelete(id) {
  return deleteFn(baseUrl.api + `/classify/delete/${id}`)
}




// 分类下的商品列表

export function goodsList(id) {
  return get(baseUrl.api + '/classify/goodsList', {id})
}