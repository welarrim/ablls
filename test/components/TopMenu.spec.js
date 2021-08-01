import { mount } from '@vue/test-utils'
import TopMenu from '@/components/organisms/TopMenu.vue'

describe('TopMenu', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TopMenu)
    expect(wrapper.vm).toBeTruthy()
  })
})
