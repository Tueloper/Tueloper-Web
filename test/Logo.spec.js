import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'
import Header from '@/components/template/header.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('Header', () => {
  test('is a Vue Instance', () => {
    const wrapper = mount(Header)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
});