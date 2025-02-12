import { mount } from '@vue/test-utils'
import Login from '@/components/organisms/forms/Login.vue'
import $t from '@/test/i18n'

let wrapper

beforeEach(() => {
  wrapper = mount(Login, {
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

describe('Organisms Forms Login', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  test('has all elements', () => {
    const email = wrapper.find('input[name=email]')
    const password = wrapper.find('input[name=password]')
    const button = wrapper.find('button[type=button]')
    expect(email.exists()).toBe(true)
    expect(password.exists()).toBe(true)
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe($t('btn.login'))
  })
})
