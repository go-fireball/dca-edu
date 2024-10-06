// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    app: {
        head: {
            meta: [
                {charset: 'utf-8'},
                {'http-equiv': 'content-language', 'content': 'en'}
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
            ]
        }
    },
    css: [
    ],
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
