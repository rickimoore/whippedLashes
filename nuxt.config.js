const {getConfigForKeys} = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_CMA_ACCESS_TOKEN',
  'CTF_PERSON_ID'
])
const {createClient} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)
const cmaContentful = require('contentful-management')
const cmaClient = cmaContentful.createClient({
  accessToken: ctfConfig.CTF_CMA_ACCESS_TOKEN
})

const config = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Whipped Lashes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Custom app in under 5 minutes' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {rel: 'apple-touch-icon', href: 'apple-touch-icon.png'},
      {href: 'https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700%7CNiconne', rel: 'stylesheet'},
      {rel: 'stylesheet', href: 'css/bootstrap.min.css'},
      {rel: 'stylesheet', href: 'css/bootstrap-datepicker.min.css'},
      {rel: 'stylesheet', href: 'css/font-awesome.min.css'},
      {rel: 'stylesheet', href: 'css/xs-icon.css'},
      {rel: 'stylesheet', href: 'css/owl.carousel.min.css'},
      {rel: 'stylesheet', href: 'css/isotope.css'},
      {rel: 'stylesheet', href: 'css/magnific-popup.css'},
      {rel: 'stylesheet', href: 'css/plugins.css'},
      {rel: 'stylesheet', href: 'css/style.css'},
      {rel: 'stylesheet', href: 'css/responsive.css'}
    ],
    script: [
        {src: 'js/jquery-3.2.1.min.js'},
        {src: 'js/plugins.js'},
        {src: 'js/bootstrap.min.js'},
        {src: 'js/bootstrap-datepicker.min.js'},
        {src: 'js/isotope.pkgd.min.js'},
        {src: 'js/jquery.ajaxchimp.min.js'},
        {src: 'js/owl.carousel.min.js'},
        {src: 'js/jquery.magnific-popup.min.js'},
        {src: 'js/appear.js'},
        {src: 'js/spectragram.min.js'},
        {src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBE_iesGQeretwDJi5W5_S1qK4_YvCqs2o&libraries=places'},
        {src: 'js/main.js'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2199e8' },

  /*
  ** Build configuration
  */
  // build: {
  //   /*
  //   ** Run ESLINT on save
  //   */
  //   extend (config, ctx) {
  //     if (ctx.isClient) {
  //       config.module.rules.push({
  //         enforce: 'pre',
  //         test: /\.(js|vue)$/,
  //         loader: 'eslint-loader',
  //         exclude: /(node_modules)/
  //       })
  //     }
  //   },
  //
  //   postcss: [
  //     require('autoprefixer')({
  //       browsers: ['> 5%']
  //     })
  //   ]
  // },

  /*
  ** ᕕ( ᐛ )ᕗ CTF-BLOG-IN-5-MINUTES
  ** Make client available everywhere via Nuxt plugins
  */
  plugins: [
    '~/plugins/contentful'
  ],

  /*
  ** ᕕ( ᐛ )ᕗ CTF-BLOG-IN-5-MINUTES
  ** Get all blog posts from Contentful
  ** and generate the needed files upfront
  **
  ** Included:
  ** - blog posts
  ** - available blog post tags
  */
  generate: {
    routes () {
      return Promise.all([
        // get all blog posts
        cdaClient.getEntries({
          'content_type': ctfConfig.CTF_BLOG_POST_TYPE_ID
        }),
        // get the blog post content type
        cmaClient.getSpace(ctfConfig.CTF_SPACE_ID)
          .then(space => space.getContentType(ctfConfig.CTF_BLOG_POST_TYPE_ID))
      ])
      .then(([entries, postType]) => {
        return [
          // map entries to URLs
          ...entries.items.map(entry => `/blog/${entry.fields.slug}`),
          // map all possible tags to URLs
          ...postType.fields.find(field => field.id === 'tags').items.validations[0].in.map(tag => `/tags/${tag}`)
        ]
      })
    }
  },

  /*
  ** Define environment variables being available
  ** in generate and browser context
  */
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_CMA_ACCESS_TOKEN: ctfConfig.CTF_CMA_ACCESS_TOKEN,
    CTF_PERSON_ID: ctfConfig.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  }
}

module.exports = config
