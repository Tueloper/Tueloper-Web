import { shallowMount, mount  } from '@vue/test-utils'
import Header from '../components/template/headerP'
import Index from '../pages/index'

describe('READING FILES FROM LANDING PAGE', () => {
  it('can view Tueloper', () => {
    const wrapper = mount(Header)
    expect(wrapper.html()).toContain('<h2><nuxt-link to="/">Tueloper</nuxt-link></h2>')
    expect(wrapper.html()).toContain('<p>Experience More than What You See......</p>')
  })
});

describe('Can see my name', () => {
  it('Tochukwu Ozurumba', () => {
    const wrapper = mount(Index)
    expect(wrapper.html()).toContain('<h2>Tochukwu Ozurumba</h2>')
    expect(wrapper.html()).toContain('<h2>General Info</h2>');
    expect(wrapper.html()).toContain('<img src="../../assets/img/tochi.jpg" alt="5">');
  })
});

describe('About', () => {
  it('Tochukwu Ozurumba', () => {
    const wrapper = mount(Index)
    expect(wrapper.html()).toContain('<h2>Tochukwu Ozurumba</h2>')
    expect(wrapper.html()).toContain('<h2>General Info</h2>');
    expect(wrapper.html()).toContain('<img src="../../assets/img/tochi.jpg" alt="5">');
  })
});

describe('Socials', () => {
  it('Can view Icons and Links', () => {
    const wrapper = mount(Index)
    expect(wrapper.html()).toContain('<a target="_blank" href="https://github.com/Tueloper"><i class="fa fa-github"></i></a>')
    expect(wrapper.html()).toContain('<a target="_blank" href="https://www.linkedin.com/in/tochukwu-ozurumba/"><i class="fa fa-linkedin"></i></a>');
    expect(wrapper.html()).toContain('<a target="_blank" href="https://web.facebook.com/Tueloper"><i class="fa fa-facebook"></i></a>');
    expect(wrapper.html()).toContain('<a target="_blank" href="https://www.instagram.com/baba_tezz/"><i class="fa fa-instagram"></i></a>');
    expect(wrapper.html()).toContain('<a target="_blank" href="https://twitter.com/Tueloper"><i class="fa fa-twitter"></i></a>');
    expect(wrapper.html()).toContain('<h2 class="hidden-md hidden-sm">Now, You Know How To Reach Me<span>😁</span></h2>');
  })
});

describe('Education', () => {
  it('Can view Educational Details', () => {
    const wrapper = mount(Index)
    expect(wrapper.html()).toContain('<h3>Web Development</h3>')
    expect(wrapper.html()).toContain('<h3>Environmental Technology</h3>');
  })
});

describe('Skills', () => {
  it('Can view EXtra skill details', () => {
    const wrapper = mount(Index)
    expect(wrapper.html()).toContain('<h2>Extra Skills</h2>')
    expect(wrapper.html()).toContain('<h2>85%</h2>');
    expect(wrapper.html()).toContain('<h3>Hardworking</h3>');
    expect(wrapper.html()).toContain('<p>Years of Experience</p>');
    expect(wrapper.html()).toContain('<img src="../../assets/img/icon/1-w.png" alt="">');
    expect(wrapper.html()).toContain('<img src="../../assets/img/icon/2-w.png" alt="">');
    expect(wrapper.html()).toContain('<p>Certficates Gained</p>');
  })
});