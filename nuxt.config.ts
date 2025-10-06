// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxt/icon',
  ],
  css: ['~/assets/css/main.css'],
  colorMode: {
    classSuffix: '',
  },
  app: {
    head: {
      htmlAttrs: {
        class: 'h-full antialiased',
        lang: 'en',
      },
      bodyAttrs: {
        class: 'flex h-full bg-zinc-50 dark:bg-black',
      },
    },
  },
  image: {
    // Use default provider for static images
  },
});
