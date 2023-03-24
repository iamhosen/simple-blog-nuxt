<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <nuxt-link to="/">
        <b-navbar-brand class="text-monospace">simple-blog-nuxt</b-navbar-brand>
      </nuxt-link>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <nuxt-link to="/about">
            <b-nav-item href="/about"> About </b-nav-item>
          </nuxt-link>
        </b-navbar-nav>
        <b-dropdown id="dropdown-1" text="Account" class="m-md-2">
          <div v-if="!isAuthenticated">
            <nuxt-link to="/auth/register" class="dropdown-item">
              Register
            </nuxt-link>
            <nuxt-link to="/auth/login" class="dropdown-item">
              Login
            </nuxt-link>
          </div>
          <div v-else>
            <b-dropdown-item disabled>{{ email }}</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item @click="logout">Logout</b-dropdown-item>
          </div>
        </b-dropdown>
      </b-collapse>

      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item>
            <nuxt-link to="/post/new">
              <b-button variant="outline-light" class="ml-3"
                >+ New Post</b-button
              >
            </nuxt-link>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters["auth/isAuthenticated"];
    },
    email() {
      return this.$store.getters["auth/user"]?.email;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
};
</script>