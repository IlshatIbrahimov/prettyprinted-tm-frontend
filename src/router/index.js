import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    meta: {
      guest: true,
      layout: 'empty'
    },
    component: () => import('@/views/Auth.vue')
  },
  {
    path: '/',
    name: 'Dashboard',
    meta: {
      requiresAuth: true,
      layout: 'main'
    },
    component: () => import('@/views/Dashboard.vue')
  },
  {
    path: '/project/:id',
    name: 'Projects',
    meta: {
      requiresAuth: true,
      layout: 'main'
    },
    component: () => import('@/views/Projects.vue')
  },
  {
    path: '/project/:id/createTask',
    name: 'CreateTask',
    meta: {
      requiresAuth: true,
      layout: 'main',
      title: 'Task Manager'
    },
    component: () => import('../views/CreateTask.vue'),
    beforeEnter: (to, from, next) => {
      if(from.name !== 'Projects') next({ name: 'Dashboard' })
      else next()
    }
  },
  {
    path: '/project/:projectId/task-:id',
    name: 'Task',
    meta: {
      requiresAuth: true,
      layout: 'main',
      title: 'Task Manager'
    },
    component: () => import('../views/Task.vue')
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
