/*
 * @Date: 2021-02-10 23:07:42
 * @Description: http
 * @LastEditors: jun
 * @LastEditTime: 2021-07-09 00:06:32
 * @FilePath: \admin-mall\src\utils\http.js
 */

import { service } from './request';
import { Message } from 'element-ui'

export function get(url, data) {
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params: data
      })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
        Message({ message: err.msg, type: 'error' });
      });
  });
}


export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    service
      .post(url, data)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
        Message({ message: err.msg, type: 'error' });
      });
  });
}


export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    service
      .put(url, data)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
        Message({ message: err.msg, type: 'error' });
      });
  });
}


export function deletefn(url, params) {
  return new Promise((resolve, reject) => {
    service.delete(url, params)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
        Message({ message: err.msg, type: 'error' });
      })
  });
}