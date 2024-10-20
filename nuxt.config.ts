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
            ],
            link: [],
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
    css: [
        'vuetify/styles',
        '@mdi/font/css/materialdesignicons.css'
    ],
    plugins: [
        // Ensure this runs on client side only
        {src: '~/plugins/highcharts.client.ts', mode: 'client'},
        {src: '~/plugins/canonical.ts'}
    ],

    build: {
        analyze: {
            enabled: true,
        },
        terser: {
            terserOptions: {
                compress: {
                    drop_console: true, // Remove console logs for production
                },
            },
        },
        splitChunks: {
            layouts: true,
            pages: true,
            commons: true,
        },
        transpile: ['vuetify'],
    },
    optimization:{
        keyedComposables: [
            { name: 'useFetch', argumentLength: 3 },
            { name: 'useLazyFetch', argumentLength: 3 },
        ],
        treeShake: {
            composables: {
                client: {
                    '@nuxtjs/composables': ['useServerOnlyComposable'], // Ensure server-only code isn't in client bundle
                },
            },
        }
    },
    modules: ['@nuxtjs/sitemap'],
    site: {url: 'd29k9gyuvafwel.cloudfront.net'},
})
