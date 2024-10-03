import { defineNuxtPlugin } from '#app';
import Highcharts from 'highcharts';
import HighchartsVue from 'highcharts-vue';
import stockInit from 'highcharts/modules/stock';
import exportingInit from 'highcharts/modules/exporting'
import exportDataInit from 'highcharts/modules/export-data'
import accessibilityInit from 'highcharts/modules/accessibility'

export default defineNuxtPlugin({
    name: 'highcharts-vue',
    parallel: true,
    setup (nuxtApp) {
        if (typeof Highcharts === 'object') {
            stockInit(Highcharts);
            exportingInit(Highcharts)
            exportDataInit(Highcharts)
            accessibilityInit(Highcharts)
        }
        nuxtApp.vueApp.use(HighchartsVue);
    }
});
