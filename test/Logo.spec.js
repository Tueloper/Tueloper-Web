import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'
import Header from '@/components/template/header.vue'
import Loader from '@/components/loder.vue'

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

describe('Loader', () => {
  test('is a Vue Instance', () => {
    const wrapper = mount(Loader)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
});