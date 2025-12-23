<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import * as locales from '@nuxt/ui/locale'

const { locale, setLocale } = useI18n()

const supportedLocales = {
  en: locales.en,
  ms: locales.ms,
  id: locales.id
}

const uiLocale = computed(() => {
  return supportedLocales[locale.value as keyof typeof supportedLocales]
})

const lang = computed(() => uiLocale.value.code)
const dir = computed(() => uiLocale.value.dir)

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  title: '🍃',
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang,
    dir
  }
})

const title = 'Nuxt Starter Template'
const description =
  'A production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image'
})

const localePath = useLocalePath()

const navigationItems = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home'
  }
])
</script>

<template>
  <UApp :locale="uiLocale">
    <NuxtImg
      class="absolute inset-0 min-w-full min-h-64 max-h-64 object-cover"
      src="Header.webp"
      format="webp"
      quality="100"
      fit="cover"
      width="auto"
      height="256"
      aria-hidden="true"
    />

    <UHeader mode="drawer" title="Wanderer" class="sm:mx-2 rounded-b-xl">
      <template #title>
        <NuxtLink :to="localePath('/')">
          <AppLogo class="w-auto h-6 shrink-0" />
        </NuxtLink>

        <!-- <TemplateMenu /> -->
      </template>

      <template #right>
        <UColorModeButton />
        <ULocaleSelect
          :model-value="locale"
          :locales="Object.values(supportedLocales)"
          @update:model-value="((value: 'en' | 'ms' | 'id') => setLocale(value))"
        />

        <UButton
          to="https://github.com/nuxt-ui-templates/starter"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>

      <template #body>
        <UNavigationMenu
          :items="navigationItems"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator icon="i-simple-icons-nuxtdotjs" />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Built with Nuxt UI • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/nuxt-ui-templates/starter"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
