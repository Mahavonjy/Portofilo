
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/pin.png' },
    ],
    script: [
      {src: "~/assets/lib/jquery/jquery.min.js"},
      {src: "~/assets/lib/jquery/jquery-migrate.min.js"},
      {src: "~/assets/lib/bootstrap/js/bootstrap.min.js"},
      {src: "~/assets/lib/counterup/jquery.waypoints.min.js"},
      {src: "~/assets/lib/counterup/jquery.counterup.js"},
      {src: "~/assets/lib/owlcarousel/owl.carousel.min.js"},
      {src: "~/assets/lib/lightbox/js/lightbox.min.js"},
      {src: "~/assets/lib/typed/typed.min.js"},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    "@/assets/lib/font-awesome/css/font-awesome.min.css",
    "@/assets/lib/ionicons/css/ionicons.min.css",
    "@/assets/lib/owlcarousel/assets/owl.carousel.min.css",
    "@/assets/lib/lightbox/css/lightbox.min.css",
    "@/assets/lib/bootstrap/css/bootstrap.min.css",
    "@/assets/css/style.css",
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
