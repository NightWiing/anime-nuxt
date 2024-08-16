// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css', 'swiper/css', 'swiper/css/pagination'],

  modules: ['@nuxtjs/google-fonts', 'nuxt-swiper', '@vueuse/nuxt'],

  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },

  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      'Reddit Sans': {
        wght: '200..900',
      },
    },
  },
  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  },
});
