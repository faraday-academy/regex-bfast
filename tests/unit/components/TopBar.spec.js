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
        percentDone: () => 0
      }
    }

    const wrapper = shallowMount(TopBar, {
      propsData: {

      },
      mocks: {
        $store
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
