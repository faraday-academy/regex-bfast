import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Completed from '@/views/Completed.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/completed',
    name: 'completed',
    component: Completed
  }
]

const router = new VueRouter({
  routes
})

export default router
