export default defineNuxtConfig({
  devtools: { enabled: false },

  css: ["~/assets/css/main.css"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },

    // Add the script to the <head> section
    head: {
      script: [
        {
          // Inline script that checks for dark mode preference and applies it
          children: `
            (function() {
              const isDark = localStorage.getItem('isDark') === 'true';
              if (isDark) {
                document.documentElement.classList.add('dark');
              }
            })();
          `,
          type: "text/javascript",
        },
      ],
    },
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
