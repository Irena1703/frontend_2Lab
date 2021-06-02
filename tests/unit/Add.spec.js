import { shallowMount } from '@vue/test-utils'
import Add from './../../src/views/Add.vue'

const wrapper = shallowMount(Add, {
    stubs: ['router-link', 'router-view']
})

test("Test existing fields", () => {
    expect(wrapper.find('#item1').exists()).toBe(true)
    expect(wrapper.find('#item2').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
})