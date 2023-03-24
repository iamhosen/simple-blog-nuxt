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
      <button class="btn btn-primary" type="submit">Login</button>
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
    };
  },

  methods: {
    async login() {
      const user = {
        email: this.email,
        password: this.password,
      };

      await this.$store.dispatch("auth/login", user);
      this.$router.push("/");
    },
  },
};
</script>