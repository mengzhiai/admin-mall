/*
 * @Date: 2021-07-04 01:33:36
 * @Description: 轮播图管理
 * @LastEditors: jun
 * @LastEditTime: 2021-07-07 00:59:56
 * @FilePath: \admin-mall\src\api\carousel.js
 */

import baseUrl from './baseUrl'
import { get, post, put } from '../utils/http.js'


// 获取轮播图列表
export function bannerList(data) {
  return get(baseUrl.api + '/carousel/banner/list', data)
}

// 添加轮播图
export function addBanner(data) {
  return post(baseUrl.api + '/carousel/banner/add', data)
}


// 获取轮播图详情
export function bannerDetail(id) {
  return get(baseUrl.api + `/carousel/banner/${id}`)
}

// 更新轮播图
export function updateBanner(id) {
  return put(baseUrl.api + `/carousel/banner/${id}`)
}
