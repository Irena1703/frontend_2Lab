<template>
  <div>
    <label for="item1">Replace a title:</label>
    <p><input id="item1" type="text" v-model="itemTitle" /></p>
    <label for="item">Replace a text:</label>
    <p>
      <textarea
        id="item2"
        class="form-control"
        type="text"
        v-model="itemText"
      />
    </p>
    <p><button @click="edit">Edit</button></p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Edit",
  props: ["itemId"],

  data() {
    return {
      itemTitle: "",
      itemText: "",
    };
  },

  mounted() {
    if (this.itemId == null) {
      // and undefined
      this.$router.push({ name: "Home" });
      return;
    }
    const article = this.$store.state.Articles.find((el) => el.id == this.itemId);
    this.itemTitle = article.description;
    this.itemText = article.text;
  },

  methods: {
    edit() {
      this.$store.dispatch("edit", {
        itemId: this.itemId,
        title: this.itemTitle,
        text: this.itemText,
      });
      this.$router.push({ name: "Home" });
    },
    cancel() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>