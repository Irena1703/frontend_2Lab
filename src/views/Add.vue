<template>
    <div>
        <label for="item1">Enter a title:</label>
        <p><input id="item1" type="text" v-model="itemTitle" /></p>
        <label for="item">Enter a text:</label>
        <p><textarea id="item2" class = "form-control" type="text" v-model="itemText" /></p>
        <p><button id="add" @click="add">Add</button></p>
    </div>    
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Add',
  data () {
      return {
          itemTitle: '',
          itemText: ''
      }
  },
  methods: {
      add() {
          this.$store.dispatch('add', {title:this.itemTitle, text:this.itemText});
          this.$router.push({name: 'Home'});
      }
  }
}

</script>