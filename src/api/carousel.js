/*
 * @Date: 2021-07-04 01:33:36
 * @Description: 轮播图管理
 * @LastEditors: jun
 * @LastEditTime: 2021-07-04 01:41:53
 * @FilePath: \admin-mall\src\api\carousel.js
 */

import baseUrl from './baseUrl'
import { get, post } from '../utils/http.js'


export function bannerList(data) {
  return get(baseUrl.api + '/carousel/banner/list', data)
}
