export default defineNuxtPlugin((nuxtApp) => {
    const route = useRoute();

    useHead({
        link: [
            {
                rel: 'canonical',
                href: `https://d29k9gyuvafwel.cloudfront.net${route.path}`
            },

        ],
        meta: [
            {
                property: 'og:type',
                content: 'website'
            },
            {
                property: 'og:url',
                content: `https://d29k9gyuvafwel.cloudfront.net${route.path}`
            }
        ]
    });
});
