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

  test('has email input', () => {
    const email = wrapper.find('input[name=email]')
    expect(email.exists()).toBe(true)
  })

  test('has password input', () => {
    const password = wrapper.find('input[name=password]')
    expect(password.exists()).toBe(true)
  })

  test('has button submit', () => {
    const button = wrapper.find('button[type=button]')
    expect(button.exists()).toBe(true)
  })

  test('method submitForm called', () => {
    const submitForm = jest.fn()
    wrapper.setMethods({ submitForm })
    const button = wrapper.find('button[type=button]')
    button.trigger('click')
    expect(submitForm).toHaveBeenCalled()
  })

  test('submit empty fields', () => {
    const button = wrapper.find('button[type=button]')
    button.trigger('click')
    expect(wrapper.vm.error).toBe(true)
  })

  test('submit wrong email format', async () => {
    const data = {
      ruleForm: {
        email: 'test',
        password: '123456',
      },
    }
    await wrapper.setData(data)
    const button = wrapper.find('button[type=button]')
    button.trigger('click')
    expect(wrapper.vm.error).toBe(true)
  })

  test('submit wrong password format', async () => {
    const data = {
      ruleForm: {
        email: 'test@email.com',
        password: '12345',
      },
    }
    await wrapper.setData(data)
    const button = wrapper.find('button[type=button]')
    button.trigger('click')
    expect(wrapper.vm.error).toBe(true)
  })

  test('submit correct field', async () => {
    const data = {
      ruleForm: {
        email: 'test@email.com',
        password: '123456',
      },
    }
    await wrapper.setData(data)
    const button = wrapper.find('button[type=button]')
    button.trigger('click')
    expect(wrapper.vm.error).toBe(false)
  })
})
