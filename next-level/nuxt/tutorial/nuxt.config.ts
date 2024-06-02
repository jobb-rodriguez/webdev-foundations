// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            link: [
                { rel: "icon", type: "image/x-icon", href: "favicon.ico" },
                { rel: "stylesheet", type: "text/css", href: "/css/main.css" },
            ],
        },
    },
    modules: ['@pinia/nuxt'],
    runtimeConfig: {
        public: {
            sampleEnv: "default", // can be overridden by NUXT_PUBLIC_API_BASE environment variable
        },
    },
});
