<template>
  <div>
    <h1>Posts</h1>
    <div class="content">
      <card
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :description="post.text"
      ></card>
    </div>
  </div>
</template>

<script>
import Card from "~/components/Card.vue";
export default {
  name: "IndexPage",
  components: {
    Card,
  },

  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },

  async fetch({ store }) {
    await store.dispatch("fetchPosts");
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: row;
  gap: 1em;
  flex-wrap: wrap;
}

.content div {
  align-self: stretchzx;
  flex-basis: calc(25% - 20px);
}

.content div article {
  height: 100%;
}

@media (max-width: 768px) {
  .content div {
    flex-basis: calc(50% - 20px);
  }
}
</style>