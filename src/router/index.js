/*
 * @Date: 2021-02-10 22:49:04
 * @Description: 路由
 * @LastEditors: jun
 * @LastEditTime: 2021-02-14 12:26:41
 * @FilePath: \admin-mall\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/home',
    name: 'home',
    // redirect: '/login',
    meta: { title: '首页' },
    component: () => import('../views/home/index'),
    children: [
      {
        path: '/product',
        name: 'product',
        meta: { title: '产品管理', auth: true },
        component: () => import('../views/productManagement/product/productIndex'),
        meta: [
          {
            title: '商品管理'
          },
          {
            title: '产品管理'
          }
        ],
      },
      {
        path: '/category',
        name: 'category',
        meta: { title: '分类管理', auth: true },
        component: () => import('../views/productManagement/category/categoryIndex'),
        meta: [
          {
            title: '商品管理'
          },
          {
            title: '分类管理'
          }
        ],
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router


router.beforeEach((to, from, next) => {
  if(to.path == '/login') {
    next();
  } else {
    let token = localStorage.getItem('token');
    if(!token) {
      next('/login');
    } else {
      next();
    }
  }
})



const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}