import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Completed from '@/views/Completed.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/1'
  },
  {
    path: '/:id',
    name: 'challenge',
    component: Home,
    props: true,
    beforeEnter: (to, from, next) => {
      if (store.state.currentIndex !== to.params.id) {
        store.commit('updateCurrentChallenge', to.params.id - 1)
      }
      next()
    }
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
