import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta:{
      title: 'Login',
      layout: 'card-layout'
    },
    component: () => import('@/views/LogIn.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    meta:{
      title: 'registration',
      layout: 'card-layout'
    },
    component: () => import('@/views/Registration.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    meta:{
      title: 'chat',
      layout: 'main-layout'
    },
    component: () => import('@/views/Chat.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta:{
      title: 'profile',
      layout: 'card-layout'
    },
    component: () => import('@/views/Profile.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.accessToken
  if (accessToken || to.name === 'Login' || to.name === 'Registration') {
   next();
  } else {
    next('/login')
  }
})

export default router
