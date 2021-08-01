import { mount } from '@vue/test-utils'
import TopMenu from '@/components/organisms/TopMenu.vue'
import i18n from '@/test/i18n'

describe('TopMenu', () => {
  test('is the TopMenu', () => {
    const wrapper = mount(TopMenu, i18n)
    expect(wrapper.vm).toBeTruthy()
  })
})
