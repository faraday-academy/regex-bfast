import Vue from 'vue'
import Vuex from 'vuex'

import challenges from '@/data/challenges'

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
    navigateToChallenge(state, index) {
      state.currentIndex = index
    },
    nextChallenge(state) {
      state.currentIndex += 1
    }
  },
  actions: {
  },
  modules: {
  }
})
