// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    css: [
        'vuetify/styles',
        '@mdi/font/css/materialdesignicons.css', // Optional - For Material Icons

    ],
    plugins: [
        // Ensure this runs on client side only
        { src: '~/plugins/highcharts.client.ts', mode: 'client' }
    ],
    build: {
        transpile: ['vuetify'],
    }
})

