<template>
    <div>
        <label for="item">Enter a text:</label>
        <div class="lg-3"/>
        <p><textarea id="item" class = "form-control" type="text" v-model="itemText" /></p>
        <p><button id="addComment" @click="add">Add</button></p>
    </div>    
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AddComment',
  props:['currentArticle'],
  data () {
      return {
          itemText: ''
      }
  },
  methods: {
      add() {
          this.$store.dispatch('addComment', {text:this.itemText, article:this.currentArticle});
          this.$router.push({name: 'Comments', params:{currentArticle:this.currentArticle}});
      }
  }
}

</script>