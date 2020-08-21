import { mount } from '@vue/test-utils'

import Body from '@/components/Body.vue'
import challenges from '@/data/challenges'

describe('Body.vue', () => {
  let $store = {}
  beforeEach(() => {
    $store = {
      state: {},
      getters: {
        currentChallenge: challenges[0]
      }
    }
  })

  test('snapshot', () => {
    const wrapper = mount(Body, {
      mocks: {
        $store
      }
    })
    expect(wrapper).toMatchSnapshot()
  })

  test('challenges advance', async () => {
    const wrapper = mount(Body, {
      mocks: {
        $store
      }
    })

    // enter correct answer into input
    const input = wrapper.find('[data-test="regex"]')
    await input.setValue(challenges[0].pattern)
    // press enter
    input.trigger('keypress.enter.stop')
    // check that nextChallenge has been called
    jest.spyOn(wrapper.vm, 'nextChallenge')

    expect(wrapper.vm.nextChallenge)
      .toHaveBeenCalled()
  })
})
