// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiBase: '', // переопределяется через NUXT_PUBLIC_API_BASE в .env
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "nuxt-swiper",
    "@vueuse/motion/nuxt",
  ],

  swiper: {
    modules: ['autoplay'],
  },

  // Добавьте эту секцию:
  vite: {
    server: {
      allowedHosts: [
        "ghastly-august-spearfish.cloudpub.ru",
        ".cloudpub.ru", // все поддомены cloudpub.ru
        "localhost",
      ],
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "Электромонтаж Premium | Умные Дома",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
        },
        {
          name: "description",
          content: "Профессиональный электромонтаж и системы умного дома",
        },
        { name: "theme-color", content: "#171717" },
      ],
      script: [
        {
          src: "https://telegram.org/js/telegram-web-app.js",
          tagPosition: "head",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=DM+Sans:wght@300;400;500;600&display=swap",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ["DM Sans", "sans-serif"],
            display: ["Oswald", "sans-serif"],
          },
          colors: {
            primary: {
              50: "#fafafa",
              100: "#f5f5f5",
              200: "#e5e5e5",
              300: "#d4d4d4",
              400: "#a3a3a3",
              500: "#737373",
              600: "#171717",
              700: "#0f0f0f",
              800: "#0a0a0a",
              900: "#000000",
            },
            accent: {
              300: "#fde047",
              400: "#facc15",
              500: "#eab308",
              600: "#ca8a04",
            },
            telegram: {
              bg: "#ffffff",
              text: "#000000",
              button: "#3390ec",
              secondary: "#707579",
            },
          },
        },
      },
    },
  },
});
