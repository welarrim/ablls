import { mount } from '@vue/test-utils'
import Login from '@/components/organisms/forms/Login.vue'
import i18n from '@/test/i18n'

describe('Organisms Forms Login', () => {
  test('is the Login form', () => {
    const wrapper = mount(Login, i18n)
    expect(wrapper.vm).toBeTruthy()
  })

  test('submit empty login form', async () => {
    const wrapper = mount(Login, i18n)
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('.el-form-item__error')).toBeTruthy()
  })

  test('submit correct login form', async () => {
    window.alert = jest.fn()
    const wrapper = mount(Login, i18n)
    await wrapper.find('input[name=email]').setValue('test@gg.com')
    await wrapper.find('input[name=password]').setValue('123456')
    await wrapper.find('button').trigger('click')
    expect(window.alert).toHaveBeenCalledWith('submit!')
  })
})
