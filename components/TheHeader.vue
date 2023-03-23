<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <nuxt-link to="/">
        <b-navbar-brand>simple-blog-nuxt</b-navbar-brand>
      </nuxt-link>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <nuxt-link to="/about">
            <b-nav-item href="/about"> About </b-nav-item>
          </nuxt-link>
          <b-nav-item disabled>Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item>
            <nuxt-link to="/post/new">
              <b-button variant="outline-light">+ New Post</b-button>
            </nuxt-link>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

