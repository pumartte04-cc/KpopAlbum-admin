import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Information', icon: 'el-icon-s-help' },
    children: [
      
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Album', icon: 'table' }
      },
      {
        path: 'buyer',
        name: 'Buyer',
        component: () => import('@/views/table/buyer'),
        meta: { title: 'Sold', icon: 'table' }
      },
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Add Album', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Artists',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/EXO/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'EXO' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/EXO/Hkyungsoo'),
            name: 'Menu1-1',
            meta: { title: 'D.O.' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/EXO/Baekhyun'),
            name: 'Menu1-2',
            meta: { title: 'Baekhyun' },
            
          },
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/IU/index.vue'),
        name: 'Menu2',
        meta: { title: 'IU' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
