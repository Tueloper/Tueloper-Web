import { shallowMount, mount  } from '@vue/test-utils'
import Header from '../components/template/header'

describe('READING FILES FROM LANDING PAGE', () => {
  it('can view Tueloper', () => {
    const wrapper = mount(Header)
    expect(wrapper.html()).toContain('<h2><nuxt-link to="/">Tueloper</nuxt-link></h2>')
    expect(wrapper.html()).toContain('<p>Experience More than What You See......</p>')
  })
})