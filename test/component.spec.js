import { mount } from '@vue/test-utils';
import Header from '@/components/template/headerP.vue';
import Loader from '@/components/page_loader.vue';
import About from '@/components/landing/about';
import Projects from '@/components/landing/project.vue';
import Contact from '@/components/landing/contact.vue';
import Skills from '@/components/landing/skills.vue';

describe('Header', () => {
	test('is a Vue Instance', () => {
		const wrapper = mount(Header);
		expect(wrapper.isVueInstance()).toBeTruthy();
	});
});

describe('Loader', () => {
	test('is a Vue Instance', () => {
		const wrapper = mount(Loader);
		expect(wrapper.isVueInstance()).toBeTruthy();
	});
});

describe('About', () => {
	test('is a Vue Instance', () => {
		const wrapper = mount(About);
		expect(wrapper.isVueInstance()).toBeTruthy();
	});
});

describe('Projects', () => {
	test('is a Vue Instance', () => {
		const wrapper = mount(Projects);
		expect(wrapper.isVueInstance()).toBeTruthy();
	});
});

describe('Skills', () => {
	test('is a Vue Instance', () => {
		const wrapper = mount(Skills);
		expect(wrapper.isVueInstance()).toBeTruthy();
	});
});

describe('Contact', () => {
	test('is a Vue Instance', () => {
		const wrapper = mount(Contact);
		expect(wrapper.isVueInstance()).toBeTruthy();
	});
});
