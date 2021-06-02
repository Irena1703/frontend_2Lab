<template>
  <div class="home">
    <ArticlesTable :Articles = "$store.state.Articles"/>
    <button id="add" @click="add">Add</button>
  </div>
</template>

<script>
// @ is an alias to /src
import ArticlesTable from "@/components/ArticlesTable.vue";

export default {
  name: "Home",
  components: {
    ArticlesTable,
  },

  methods:{
    add() {
      this.$router.push({name:'Add'});
    },
  }
};
</script>
