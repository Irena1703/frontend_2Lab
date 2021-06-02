<template>
  <div class="container">
    <div class="well">
      <div class="media">
        <div class="media-body">
          <table border="0" class="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Body</th>
                <th>Created</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="article in Articles" :key="article.id">
                <td>{{ article.description }}</td>
                <td>{{ article.text }}</td>
                <td>{{ article.createdAt }}</td>
                <td>
                  <button
                    data-toggle="collapse"
                    data-target="#comments"
                    @click="showComments(article.id)"
                  >
                    <i class="glyphicon glyphicon-comment"></i
                    >{{ article.comments.length }}
                  </button>
                </td>
                <td>
                  <button @click="deleteItem(article.id)">Delete</button> &nbsp;
                  <button @click="editItem(article.id)">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentsTable from "@/components/CommentsTable";
export default {
  name: "ArticlesTable",
  props: {},
  components: CommentsTable,
  data: function () {
    return {
      Articles: this.$store.state.Articles,
    };
  },
  methods: {
    showComments: function (articleId) {
      let currentArticle = this.Articles.find((el) => el.id == articleId);

      this.$router.push({
        name: "Comments",
        params: { currentArticle: currentArticle },
      });
    },
    deleteItem(id) {
      this.$router.push({name:'Delete', params: {itemId: id}});
    },
    editItem(id) {
      this.$router.push({name:'Edit', params: {itemId: id}});
    },
  },
};
</script>