/*
 * @Date: 2021-07-30 01:37:08
 * @Description: 订单
 * @LastEditors: jun
 * @LastEditTime: 2021-07-30 01:37:41
 * @FilePath: \admin-mall\src\api\order.js
 */


import baseUrl from './baseUrl'
import { get, post, put, deleteFn } from '../utils/http.js'


export function orderList(data) {
  return get(baseUrl.api + '/order/list', data)
}
