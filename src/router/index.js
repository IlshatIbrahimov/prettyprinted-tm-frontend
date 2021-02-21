import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    meta: {
      guest: true,
    },
    component: () => import('@/views/Auth.vue')
  },
  {
    path: '/',
    name: 'Dashboard',
    meta: {
      requiresAuth: true,
    },
    component: () => import('@/views/Dashboard.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!JSON.parse(localStorage.getItem('jwt'))) {
      next({
        path: '/auth',
        params: {nextUrl: to.fullPath}
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (!JSON.parse(localStorage.getItem('jwt'))) {
      next()
    } else {
      next({
        path: '/',
        params: {nextUrl: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
