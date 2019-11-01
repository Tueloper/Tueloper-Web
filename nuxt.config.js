
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    '@/assets/css/general.css',
    '@/assets/css/font.css',
    // '@/assets/css/icon-fonts/Flaticon.eot'
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
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /**
   * Bootstrap-Vue
   */
  bootstrapVue: {
    // bootstrapCSS: false, // here you can disable automatic bootstrapCSS in case you are loading it yourself using sass
    // bootstrapVueCSS: false, // CSS that is specific to bootstrapVue components can also be disabled. That way you won't load css for modules that you don't use
    // Here you can specify which components you want to load and use:
    componentPlugins: [
      'NavbarPlugin',
      'FormPlugin',
      'FormCheckboxPlugin',
      'FormInputPlugin',
      'FormRadioPlugin',
      'ButtonPlugin',
      'LayoutPlugin',
      'PaginationNavPlugin',
      'LinkPlugin',
      'TabsPlugin',
      'CardPlugin',
      'ListGroupPlugin',
      'BadgePlugin',
      'FormSelectPlugin',
      'FormCheckboxPlugin',
      'FormGroupPlugin'
    ],
    // Here you can specify which directives you want to load and use. Look into official docs to get a list of what's available
    directivePlugins: ['Popover']
  },
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
