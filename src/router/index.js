import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LogIn',
    meta:{
      title: 'LogIn'
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

export default router
