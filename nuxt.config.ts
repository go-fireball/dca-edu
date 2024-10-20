// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: false},
    app: {
        head: {
            meta: [
                {charset: 'utf-8'},
                {'http-equiv': 'content-language', 'content': 'en'},
                {
                    property: 'og:url',
                    content: 'https://d29k9gyuvafwel.cloudfront.net' // Set your base URL here
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/vuetify@3.7.2/dist/vuetify.min.css'
                }
            ],
            script: [
                {
                    src: '/clarity.js', // This is the path to the public/clarity.js file
                    async: true
                },
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-YP6TS8N4HE',
                    async: true
                },
                {
                    src: '/google.js',
                    type: 'text/javascript'
                }
            ]
        }
    },
    css: [],
    /**
     * Include the following in css block if needed,
     * if included you may remove the link section
     * 'vuetify/styles',
     * '@mdi/font/css/materialdesignicons.css',
     */
    plugins: [
        // Ensure this runs on client side only
        {src: '~/plugins/highcharts.client.ts', mode: 'client'}
    ],

    build: {
        transpile: ['vuetify'],
    },

    modules: ['@nuxtjs/sitemap'],
    site: {url: 'd29k9gyuvafwel.cloudfront.net'},
})
