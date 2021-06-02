import { shallowMount } from '@vue/test-utils'
import Login from './../../src/components/Login.vue'

const wrapper = shallowMount(Login, {
    stubs: ['router-link', 'router-view']
})

test("Test existing fields", () => {
    expect(wrapper.find('.login').exists()).toBe(true)
    expect(wrapper.find('[type="password"]').exists()).toBe(true)
    expect(wrapper.find('[type="email"]').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
})