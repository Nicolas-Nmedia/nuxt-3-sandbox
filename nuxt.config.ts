// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        rootTag: "body"
    },
    css: [
        "~/assets/style/main.scss"
    ],
    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL ?? 'https://pokeapi.co/api/v2',
        },
    },
})
