<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email</label>
        <input class="form-control" type="email" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          class="form-control"
          type="password"
          id="password"
          v-model="password"
        />
      </div>
      <button class="btn btn-primary" type="submit" v-if="!isLoading">
        Login
      </button>
      <b-button variant="primary" disabled v-else>
        <b-spinner small></b-spinner>
        Loading...
      </b-button>
    </form>
    <hr />
    <nuxt-link to="/auth/register">Register</nuxt-link>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
    };
  },

  methods: {
    async login() {
      this.isLoading = true;

      const user = {
        email: this.email,
        password: this.password,
      };

      await this.$store.dispatch("auth/login", user);

      this.isLoading = false;
      this.$router.push("/");
    },
  },
};
</script>