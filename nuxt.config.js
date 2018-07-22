module.exports = {
  mode: 'spa',
  devtools: true,
  env: {
    buildLocale: process.env.BUILD_LOCALE || 'en'
  },
  plugins: ['~/plugins/i18n.js'],
  generate: {
    routes: [
      '/articles/facebook',
    ]
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-test-1',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv' : 'X-UA-Compatible', content: 'IE=edge,chrome=1'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    htmlAttrs: {
      lang: 'ja',
      class: 'no-js'
    },
    bodyAttrs: {
      'data-spy': 'scroll',
      'data-target': '#site-header',
      'data-offset': '200'
    },
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js' },
      { src: '/modernizr-2.6.2-respond-1.1.0.min.js'}
    ],
    link: [
      { rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Open+Sans:400,400italic,700,700italic' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/assets/img/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/assets/img/apple-touch-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/assets/img/apple-touch-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/assets/img/apple-touch-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/assets/img/apple-touch-icon-144x144.png' }
    ],
  },
  css: [
    '@/assets/css/bootstrap.css',
    '@/assets/css/bootstrap-responsive.css',
    '@/assets/css/main.css',
  ],
  /*stomize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['vue-i18n']
  }
}
