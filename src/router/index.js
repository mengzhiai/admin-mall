/*
 * @Date: 2021-02-10 22:49:04
 * @Description: 路由
 * @LastEditors: jun
 * @LastEditTime: 2021-07-04 00:49:25
 * @FilePath: \admin-mall\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/home',
    name: 'home',
    // redirect: 'product',
    meta: { title: '首页' },
    component: () => import('../views/home/index'),
    children: [
      {
        path: '/product',
        name: 'product',
        meta: { title: '产品管理', auth: true },
        component: () => import('../views/productManagement/product/productIndex'),
        meta: {
          auth: true,
          crumbsList: [
            {
              title: '产品管理'
            },
            {
              title: '商品管理'
            }
          ]
        }
      },
      {
        path: '/category',
        name: 'category',
        component: () => import('../views/productManagement/category/categoryIndex'),
        meta: {
          auth: true,
          crumbsList: [
            {
              title: '产品管理'
            },
            {
              title: '分类管理'
            }
          ]
        }
      },
      {
        path: '/goodsList',
        name: 'goodsList',
        component: () => import('../views/productManagement/category/detail/goodsList'),
        meta: {
          auth: true,
          crumbsList: [
            {
              title: '产品管理'
            },
            {
              title: '分类管理'
            },
            {
              title: '商品管理'
            }
          ]
        }
      },
      {
        path: '/carouselManage',
        name: 'bannerIndex',
        component: () => import('../views/carouselManage/bannerCarousel/bannerIndex'),
        meta: {
          auth: true,
          crumbsList: [
            {
              title: '轮播图管理'
            },
            {
              title: '首页轮播图'
            }
          ]
        }
      },
      {
        path: '/employee',
        name: 'employee',
        component: () => import('../views/setup/employee'),
        meta: [
          {
            title: '设置'
          },
          {
            title: '员工管理'
          }
        ],
      },
      {
        path: '/userManagement',
        name: 'userManagement',
        component: () => import('../views/setup/userManagement'),
        meta: {
          auth: true,
          crumbsList: [
            {
              title: '设置'
            },
            {
              title: '用户管理'
            }
          ]
        }
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router


router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    next();
  } else {
    let token = localStorage.getItem('token');
    if (!token) {
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