import { mount } from '@vue/test-utils'
import Header from '@/components/template/header.vue'
import Loader from '@/components/page_loader.vue'
import About from '@/components/landing/about.vue'
import Socials from '@/components/landing/socials.vue'

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

describe('About', () => {
  test('is a Vue Instance', () => {
    const wrapper = mount(About)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
});

describe('Socials', () => {
  test('is a Vue Instance', () => {
    const wrapper = mount(Socials)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
});