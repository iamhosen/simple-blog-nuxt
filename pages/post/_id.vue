<template>
  <div>
    <p># {{ $route.params.id }}</p>

    <h1>{{ post.title }}</h1>
    <p>
      {{ post.text }}
    </p>

    <b-button variant="danger" @click="deletePost">Delete</b-button>
  </div>
</template>

<script>
export default {
  computed: {
    post() {
      return this.$store.getters["getPostById"](this.$route.params.id);
    },
  },

  methods: {
    async deletePost() {
      this.$router.push("/");

      const id = this.$route.params.id;
      await this.$store.dispatch("deletePost", id);

      // alert("Post deleted!");
    },
  },
};
</script>