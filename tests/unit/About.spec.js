import { shallowMount } from '@vue/test-utils'
import About from './../../src/views/About.vue'

const wrapper = shallowMount(About, {
    stubs: ['router-link', 'router-view']
})

test("Exist elements", () => {
    expect(wrapper.find("h1").text()).toBe("You can create here article and comment others. Posts are anonymus.")
    expect(wrapper.find(".about").exists()).toBe(true)
})