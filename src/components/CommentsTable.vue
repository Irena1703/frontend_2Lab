<template>
  <div id="comments" class="panel-collapse">
    <hr class="divider" />
    <p class="text-center">Comments</p>
    <div v-if="currentArticle.comments.length > 0">
      <table border="0" class="table">
        <thead>
          <tr>
            <th>Article</th>
            <th>Body</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="comment in currentArticle.comments" :key="comment">
            <td>{{ currentArticle.description }}</td>
            <td>{{ comment }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button id="add" @click="add">Add</button>
  </div>
</template>
<script>
export default {
  name: "CommentsTable",
  props: ["currentArticle"],
  methods: {
    add: function () {
      this.$router.push({
        name: "AddComment",
        params: { currentArticle: this.currentArticle },
      });
    },
  },
};
</script>