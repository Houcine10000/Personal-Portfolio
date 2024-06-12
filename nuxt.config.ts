export default defineNuxtConfig({
  devtools: { enabled: false },

  css: ["~/assets/css/main.css"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/motion/nuxt",
    "@nuxt/image",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@formkit/auto-animate/nuxt",
  ],

  nitro: {
    devProxy: {
      host: "localhost",
    },
  },
});
