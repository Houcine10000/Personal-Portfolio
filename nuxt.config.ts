export default defineNuxtConfig({
  devtools: { enabled: false },
  
  css: ['~/assets/css/main.css'],

  modules: ["@nuxtjs/tailwindcss", '@vueuse/motion/nuxt', "@nuxt/image", '@vueuse/nuxt', 'nuxt-icon', '@formkit/auto-animate/nuxt'],

  nitro: {
    devProxy: {
      host: 'localhost',
    },
  },
})