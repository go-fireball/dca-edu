// plugins/vuetify.ts
import {createVuetify} from 'vuetify'
import * as directives from 'vuetify/directives'
import 'vuetify/styles';
import {
    VApp,
    VAppBar,
    VAppBarNavIcon,
    VNavigationDrawer,
    VRow,
    VCol,
    VContainer,
    VImg,
    VToolbarTitle,
    VToolbar,
    VMain,
    VDivider,
    VList,
    VListItemTitle,
    VListItem,
    VBtn,
    VSelect,
    VDataTable,
    VFooter,

} from 'vuetify/components';

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'light',
            themes: {
                light: {},
                dark: {}
            }
        },
        components: {
            VApp,
            VAppBar,
            VAppBarNavIcon,
            VNavigationDrawer,
            VRow,
            VCol,
            VContainer,
            VImg,
            VToolbarTitle,
            VToolbar,
            VMain,
            VDivider,
            VList,
            VListItemTitle,
            VListItem,
            VBtn,
            VSelect,
            VDataTable,
            VFooter
        },
        directives
    })

    nuxtApp.vueApp.use(vuetify)
})
