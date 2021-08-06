import { mount } from '@vue/test-utils'
import TopMenu from '@/components/organisms/TopMenu.vue'
import $t from '@/test/i18n'

let wrapper

beforeEach(() => {
  wrapper = mount(TopMenu, {
    propsData: {},
    mocks: {
      $t,
      $nuxt: {
        $route: {
          path: null,
        },
      },
    },
    stubs: {},
    methods: {},
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('TopMenu', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })
})
