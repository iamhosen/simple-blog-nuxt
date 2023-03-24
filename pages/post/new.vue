<template>
  <div>
    <h1>New Post</h1>
    <form @submit.prevent="createPost">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model="title" />
      </div>
      <div class="form-group">
        <label for="text">Text</label>
        <textarea
          class="form-control"
          id="text"
          v-model="text"
          rows="10"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary" v-if="!isLoading">
        Submit
      </button>
      <b-button variant="primary" disabled v-else>
        <b-spinner small></b-spinner>
        Loading...
      </b-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      text: "",
      isLoading: false,
    };
  },

  methods: {
    async createPost() {
      this.isLoading = true;
      const post = {
        title: this.title,
        text: this.text,
        user_id: this.$store.getters["auth/user"].id,
      };
      await this.$store.dispatch("createPost", post);

      this.isLoading = false;
      this.$router.push("/");
    },
  },
};
</script>