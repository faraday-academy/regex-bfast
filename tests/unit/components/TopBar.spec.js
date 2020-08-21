import { mount, shallowMount } from '@vue/test-utils'

import TopBar from '@/components/TopBar.vue'

describe('TopBar.vue', () => {
  test('snapshot', () => {
    const $store = {
      state: {
        challenges: [],
        currentIndex: 0
      },
      getters: {
        percentDone: 0
      }
    }

    // TODO: get this to work with a full mount
    const wrapper = shallowMount(TopBar, {
      mocks: {
        $store
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
