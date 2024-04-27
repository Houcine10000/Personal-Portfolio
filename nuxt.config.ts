export default defineNuxtConfig({
  devtools: { enabled: false },
  
  css: ['~/assets/css/main.css'],

  modules: ["@nuxtjs/tailwindcss",
  '@vueuse/motion/nuxt'
  ]
})