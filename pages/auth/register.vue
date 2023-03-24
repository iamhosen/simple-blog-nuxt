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
      <button class="btn btn-primary" type="submit">Register</button>
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
    };
  },

  methods: {
    async register() {
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
      alert(res);
      this.$router.push("/");
    },
  },
};
</script>