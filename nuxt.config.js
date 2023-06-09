export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'simple-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/supabase',
    // { src: '~/plugins/supabase.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // '@nuxtjs/auth-next',
    // '@nuxtjs/supabase',
  ],

  router: {
    middleware: 'auth'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: `${process.env.SUPABASE_URL}`,
    headers: {
      common: {
        "Content-Type": "application/json",
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    supabaseApiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsYmdjc2prbnlpZ3NsdGVsc2RxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2Njk3MjMsImV4cCI6MTk5NTI0NTcyM30.doUk2a3_Vvv-DF-Q2sErv42Qw7EKyzSx0GOuF8KUC5U',
    supabaseUrl: 'https://dlbgcsjknyigsltelsdq.supabase.co'
  },

  pwa: {
    meta: {
      theme_color: '##007bff',
      mobileAppIOS: true,
      mobileApp: true,
      appleStatusBarStyle: 'black'
    },
    manifest: {
      name: 'Simple Blog',
      short_name: 'Blog',
      description: 'Simple Blog with Nuxt.js and Supabase',
      background_color: '##007bff',

    },
  }
}
