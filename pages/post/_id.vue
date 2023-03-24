<template>
  <div>
    <p># {{ $route.params.id }}</p>

    <h1 class="mb-0">{{ post.title }}</h1>
    <div class="badge badge-primary text-wrap mb-4">
      written by <strong>{{ user ? user.full_name : "..." }}</strong> on
      {{ convertDate(post.created_at) }}
    </div>

    <p class="mb-5">
      {{ post.text }}
    </p>

    <div v-if="isOwner">
      <b-button variant="danger" @click="deletePost" v-if="!isLoading">
        Delete
      </b-button>
      <b-button variant="danger" disabled v-else>
        <b-spinner small></b-spinner>
        Deleting...
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
      user: null,
      isLoading: false,
    };
  },

  computed: {
    isOwner() {
      return this.$store.getters["auth/user"].id === this.post.user_id;
    },
  },

  methods: {
    async deletePost() {
      this.isLoading = true;
      await this.$store.dispatch("deletePost", this.$route.params.id);
    },

    convertDate(date) {
      return new Date(date).toLocaleDateString();
    },
  },

  mounted() {
    //get post
    this.post = this.$store.getters["getPostById"](this.$route.params.id);

    //get user
    this.$supabase
      .from("profiles")
      .select("*")
      .eq("id", this.post.user_id)
      .then(({ data, error }) => {
        if (error) {
          console.error(error);
          return;
        }
        const user = data[0];
        this.user = user;
      });
  },

  async fetch({ store }) {
    if (!store.getters["posts"]) {
      await store.dispatch("fetchPosts");
    }
  },
};
</script>