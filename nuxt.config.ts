// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/i18n',
    '@nuxt/content'
  ],

  ssr: true,

  pages: true,

  devtools: {
    enabled: true
  },

  routeRules: {
    '/posts/**': { prerender: false },
    '/__nuxt_content/**': { prerender: false }
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'default'
    }
  },

  css: ['~/assets/css/main.css'],

  build: {
    transpile: ['@nuxt/ui']
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    preset: 'vercel',
    prerender: {
      ignore: ['/posts', '/posts/**', '/__nuxt_content/**']
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
        quotes: 'single'
      }
    }
  },

  i18n: {
    strategy: 'prefix',
    langDir: 'locales/',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'ms',
        name: 'Melayu',
        file: 'ms.json'
      },
      {
        code: 'id',
        name: 'Bahasa Indonesia',
        file: 'id.json'
      }
    ],
    defaultLocale: 'en'
  },

  image: { quality: 50, format: ['webp'] },

  icon: {
    serverBundle: false
  }
})
