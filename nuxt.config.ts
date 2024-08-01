// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Francois Botha | Digital CV',
      meta: [
        {
          name: 'description', content: 'Virtual Profile & CV for Francois Botha'
        },
      ],
      link: [
        {
          rel: 'stylesheet',
        },
      ],
    },
    baseURL: '/digital-cv/',
    buildAssetsDir: '/_nuxt/',
  },
})
