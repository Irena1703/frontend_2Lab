import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from './../../src/views/Home.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const wrapper = shallowMount(Home, {
    mocks:{
        $store:
        {
            state:{}
        }
    },
    stubs: ['router-link', 'router-view']
})

test("Exist elements", () => {
    expect(wrapper.find("button").exists()).toBe(true)
    expect(wrapper.find(".home").exists()).toBe(true)
})