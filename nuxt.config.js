const webpack = require('webpack');
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
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico.png' },
			{
				rel: 'stylesheet',
				type: 'font',
				href: 'https://fonts.googleapis.com/css?family=Josefin+Sans|Noto+Sans+SC|Poppins|Questrial&display=swap'
			}
		],

		script: [
			{
				src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
				type: 'text/javascript'
			},
			{
				src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
				type: 'text/javascript'
			},
			{
				src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
				type: 'text/javascript'
			}
		]
	},
	/*
  ** Customize the progress-bar color
  */
	loading: {
		color: 'red',
		height: '4px',
		duration: 5000,
		throttle: 200
	},
	/*
  ** Global CSS
  */
	css: [
		'@/assets/css/general.css',
		'@/assets/css/font.css',
		'@/assets/css/animate.css'
		// '~/node_modules/bootstrap/dist/css/bootstrap.css'
	],
	/*
  ** Plugins to load before mounting the App
  */
	// plugins: [ '~plugins/bootstrap.js' ],
	build: {
		/**
			* add external plugins
			*/
		// vendor: [ 'jquery', 'bootstrap' ],
		// plugins: [
		// 	new webpack.ProvidePlugin({
		// 		$: 'jquery'
		// 	})
		// ],
		/*
		** Run ESLint on save
		// */
		// extend(config, { isDev, isClient }) {
		// 	if (isDev && isClient) {
		// 		config.module.rules.push({
		// 			enforce: 'pre',
		// 			test: /\.(js|vue)$/,
		// 			loader: 'eslint-loader',
		// 			exclude: /(node_modules)/
		// 		});
		// 	}
		// }
	},
	/*
  ** Nuxt.js dev-modules
  */
	buildModules: [],
	/*
  ** Nuxt.js modules
  */
	modules: [
		// Doc: https://bootstrap-vue.js.org
		'bootstrap-vue/nuxt',
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios'
	],
	/*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
	axios: {},
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
		directivePlugins: [
			'Popover'
		]
	},

	router: {
		linkActiveClass: 'active'
	}

	// transistion: {
	//   //a means of using animations within the page
	//   name: 'page',
	//   mode: 'out-in'
	// },

	// loadingIndicator: {
	//   name: 'circle',
	//   color: '#fa923f',
	//   duration: 3000
	// },
	/*
  ** Build configuration
  */
};
