import Vue from 'vue'
import Vuex from 'vuex'

import challenges from '@/data/challenges'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentIndex: 0,
    challenges
  },
  getters: {
    currentChallenge(state) {
      return state.challenges[state.currentIndex]
    }
  },
  mutations: {
    updateCurrentChallenge(state, index) {
      state.currentIndex = index
    }
  },
  actions: {
    navigateToChallenge({ commit, state }, index) {
      if (state.challenges.length >= index + 1) {
        try {
          if (router.history.current.name !== 'home') {
            router.push({ name: 'home' })
          }
          commit('updateCurrentChallenge', index)
        } catch (err) {
          console.error(err)
        }
      } else {
        router.push({ name: 'completed' })
      }
    }
  },
  modules: {
  }
})
