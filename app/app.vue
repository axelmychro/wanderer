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

const title = 'eons adrift'
const description = '..how can you listen all night long?'

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
      class="absolute inset-0 max-h-96 min-h-64 min-w-full object-cover"
      src="Header.webp"
      format="webp"
      quality="100"
      fit="cover"
      width="auto"
      height="256"
      aria-hidden="true"
    />

    <UHeader
      mode="drawer"
      title="Wanderer"
      class="max-w-6xl rounded-b-xl border sm:mx-2"
    >
      <template #title>
        <NuxtLink :to="localePath('/')">
          <AppLogo class="h-6 w-auto shrink-0" />
        </NuxtLink>

        <!-- <TemplateMenu /> -->
      </template>

      <template #right>
        <ULocaleSelect
          variant="ghost"
          :label-key="'code'"
          :model-value="locale"
          :locales="Object.values(supportedLocales)"
          @update:model-value="
            (value: string) => setLocale(value as 'en' | 'ms' | 'id')
          "
        />
        <UColorModeButton />

        <!-- <UButton
          to="https://github.com/nuxt-ui-templates/starter"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        /> -->
      </template>

      <template #body>
        <UNavigationMenu
          :items="navigationItems"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>

    <UMain class="max-w-6xl sm:mx-2">
      <NuxtPage />
    </UMain>

    <UFooter class="max-w-6xl sm:mx-2">
      <template #left>
        <p class="text-muted text-sm">
          &copy; {{ new Date().getFullYear() }} &bull; Axel
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
