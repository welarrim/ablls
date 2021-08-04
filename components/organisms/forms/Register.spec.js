import { mount } from '@vue/test-utils'
import Register from '@/components/organisms/forms/Register.vue'
import $t from '@/test/i18n'

let wrapper

beforeEach(() => {
  wrapper = mount(Register, {
    propsData: {},
    mocks: {
      $t,
    },
    stubs: {},
    methods: {},
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Organisms Forms Register', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  test('has all elements', () => {
    const email = wrapper.find('input[name=email]')
    const password = wrapper.find('input[name=password]')
    const passwordConfirm = wrapper.find('input[name=passwordConfirm]')
    const button = wrapper.find('button[type=button]')
    expect(email.exists()).toBe(true)
    expect(password.exists()).toBe(true)
    expect(passwordConfirm.exists()).toBe(true)
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe($t('btn.register'))
  })
})
