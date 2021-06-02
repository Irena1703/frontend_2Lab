import { shallowMount } from '@vue/test-utils'
import Register from './../../src/components/Register.vue'

const wrapper = shallowMount(Register, {
    stubs: ['router-link', 'router-view']
})

test("Test existing fields", () => {
    expect(wrapper.find('.form-select').exists()).toBe(true)
    expect(wrapper.find('[type="password"]').exists()).toBe(true)
    expect(wrapper.find('[type="email"]').exists()).toBe(true)
    expect(wrapper.find('[type="date"]').exists()).toBe(true)
    expect(wrapper.find('[type="text"]').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
})

test("Test password fields count", ()=>{
    expect(wrapper.findAll('[type="password"]').length).toBe(2)
})