import { shallowMount, createLocalVue } from '@vue/test-utils'
import Edit from './../../src/views/Edit.vue'

import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const wrapper = shallowMount(Edit, {
    mocks:{
        $store:{
            state:{
                Articles:
                    [{id:1, description:"test", text:"text"}],
            }
        }
    },
    propsData:{itemId : 1},
    stubs: ['router-link', 'router-view']
})

test("Exist elements", () => {
    expect(wrapper.find("button").exists()).toBe(true)
    expect(wrapper.find("textArea").exists()).toBe(true)
})

test("test itemId", () => {
    expect(wrapper.vm.itemId).toBe(1)
})
