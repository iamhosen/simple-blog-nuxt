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
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      text: "",
    };
  },

  methods: {
    async createPost() {
      const post = {
        title: this.title,
        text: this.text,
      };
      await this.$store.dispatch("createPost", post);
      this.$router.push("/");
    },
  },
};
</script>