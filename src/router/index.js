import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/views/layout/Layout'

export const constantRouterMap = [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          component: () => import('@/views/login/index')
        }
      ]
    }
]

export default new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
  })