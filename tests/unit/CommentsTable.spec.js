import { shallowMount } from "@vue/test-utils";
import CommentsTable from "./../../src/components/CommentsTable";

describe("CommentsTable", () => {
  const wrapper = shallowMount(CommentsTable, {
    propsData: {
      currentArticle: {
        id: 2,
        description: "test 2",
        text: "Lorem ipsum",
        createdAt: new Date(),
        comments: ["comment1", "comment2"],
      },
    },
        stubs: ["router-link", "router-view"],
    })

    it("test tr elements exists", ()=>{
        expect(wrapper.find("tr").exists()).toBe(true)
    })

    it("test tr elements should be 3", ()=>{
        expect(wrapper.findAll("tr").length).toBe(3)
    })

    it("test description", ()=>{
        expect(wrapper.vm.currentArticle.description).toBe("test 2")
    })

    it("test text", ()=>{
        expect(wrapper.vm.currentArticle.text).toBe("Lorem ipsum")
    })

    it("test comments count", ()=>{
        expect(wrapper.vm.currentArticle.comments.length).toBe(2)
    })

    it("test comments existance", ()=>{
        expect(wrapper.vm.currentArticle.comments.includes("comment1")).toBe(true)
    })

})
