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
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
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
  <UApp :locale="uiLocale" :toaster="{ position: 'top-center' }">
    <UPageBody>
      <UPageHeader>
        <UHeader
          mode="drawer"
          class="max-w-6xl rounded-b-xl border sm:mx-2"
          :ui="{ root: 'bg-default backdrop-blur-none' }"
          :title="title"
        >
          <template #title>
            <NuxtLink :to="localePath('/')" aria-label="Eons Adrift, home">
              <AppLogo class="shrink-0" aria-hidden="true" />
            </NuxtLink>
          </template>
          <template #right>
            <ULocaleSelect
              variant="ghost"
              :ui="{ value: 'hidden', base: 'uppercase' }"
              :label-key="'code'"
              :model-value="locale"
              :locales="Object.values(supportedLocales)"
              @update:model-value="
                (value: string) => setLocale(value as 'en' | 'ms' | 'id')
              "
            />
            <UColorModeButton />
          </template>
          <template #body>
            <UNavigationMenu
              :items="navigationItems"
              orientation="vertical"
              class="-mx-2.5"
            />
          </template>
        </UHeader>
      </UPageHeader>
      
      <UMain class="max-w-6xl sm:mx-2 lg:flex">
        <div
          class="absolute inset-0 -z-10 max-h-96 min-h-64 min-w-full bg-[url('header.webp')] bg-cover bg-center"
          aria-hidden="true"
        />
        <UPageSection class="shrink-0 lg:order-first">
          <UPageCTA
            class="shrink-0"
            :ui="{
              root: 'flex flex-col items-center pt-6',
              container:
                'flex flex-col gap-8 px-6 py-12 sm:gap-16 sm:px-12 sm:py-24 lg:grid lg:px-16 lg:py-8',
              description: 'mt-0',
              links: 'flex-nowrap gap-x-2'
            }"
            title="Axel"
            description="here, but not really"
            :links="[
              {
                to: 'mailto:axelmychro@gmail.com',
                target: '_blank',
                icon: 'i-lucide-mail',
                color: 'primary',
                variant: 'subtle',
                size: 'xl'
              },
              {
                to: 'https://www.instagram.com/axelmychro',
                target: '_blank',
                icon: 'i-lucide-instagram',
                color: 'primary',
                variant: 'subtle',
                size: 'xl'
              },
              {
                to: 'https://www.linkedin.com/in/axelramadhan',
                target: '_blank',
                icon: 'i-lucide-linkedin',
                color: 'primary',
                variant: 'subtle',
                size: 'xl'
              },
              {
                to: 'https://github.com/axelmychro',
                target: '_blank',
                icon: 'i-lucide-github',
                color: 'primary',
                variant: 'subtle',
                size: 'xl'
              }
            ]"
          >
            <template #top>
              <NuxtImg
                src="Wanderer.png"
                quality="100"
                width="256"
                height="256"
                class="bg-primary rounded-xl"
              />
            </template>
          </UPageCTA>
          <UPageCard />
        </UPageSection>
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
    </UPageBody>
  </UApp>
</template>
