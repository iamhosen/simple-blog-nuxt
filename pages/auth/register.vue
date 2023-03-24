<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="name">Name</label>
        <input class="form-control" type="text" id="name" v-model="name" />
      </div>
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
        Register
      </button>
      <b-button variant="primary" disabled v-else>
        <b-spinner small></b-spinner>
        Loading...
      </b-button>
    </form>
    <hr />
    <p>
      Already have an account? <nuxt-link to="/auth/login">Login</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      isLoading: false,
    };
  },

  methods: {
    async register() {
      this.isLoading = true;

      const user = {
        email: this.email,
        password: this.password,
        options: {
          data: {
            full_name: this.name,
          },
        },
      };

      const res = await this.$store.dispatch("auth/register", user);

      this.isLoading = false;
      alert(res);
      this.$router.push("/");
    },
  },
};
</script>