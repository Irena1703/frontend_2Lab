import { shallowMount } from '@vue/test-utils'
import Delete from './../../src/views/Delete.vue'

const wrapper = shallowMount(Delete, {
    propsData:{itemId : 1},
    stubs: ['router-link', 'router-view']
})

test("Exist elements", () => {
    expect(wrapper.find("button").exists()).toBe(true)
})

test("test itemId", () => {
    expect(wrapper.vm.itemId).toBe(1)
})

test("buttons dhould be 2", () => {
    expect(wrapper.findAll("button").length).toBe(2)
})
