import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,vue}',
    './pages/**/*.{js,ts,jsx,tsx,vue}',
    './components/**/*.{js,ts,jsx,tsx,vue}',
    './layouts/**/*.{js,ts,jsx,tsx,vue}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}',
    './node_modules/@nuxt/ui/**/*.{js,ts}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
} satisfies Config
