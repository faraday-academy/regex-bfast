import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import Body from '@/components/Body.vue'

const localVue = createLocalVue()
// localVue.use(Vuex)
// const store = new Vuex.Store({})

describe('Body.vue', () => {
  test('snapshot', () => {
    const $store = {
      state: {},
      getters: {
        currentChallenge: () => ({})
      }
    }

    const wrapper = mount(Body, {
      mocks: {
        $store
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
