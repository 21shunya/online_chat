import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta:{
      title: 'Login'
    },
    component: () => import('@/views/LogIn.vue')
  },
  {
    path: '/reg',
    name: 'Reg',
    meta:{
      title: 'registration'
    },
    component: () => import('@/views/Registration.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    meta:{
      title: 'chat'
    },
    component: () => import('@/views/Chat.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta:{
      title: 'profile'
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
