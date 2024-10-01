// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    css: [
        'vuetify/styles',
        '@mdi/font/css/materialdesignicons.css', // Optional - For Material Icons

    ],
    modules: [
        // Simple usage
        'nuxt-highcharts',

        // With options
        ['nuxt-highcharts', { /* module options */}]
    ],
    build: {
        transpile: ['vuetify'],
    }
})

