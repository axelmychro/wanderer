<script setup lang="ts">
import { profileConfig } from '~/data/yourInformation'
</script>

<template>
  <UPageCTA
    :ui="{
      root: 'flex flex-col items-center p-6',
      container:
        'flex flex-col gap-2 px-2 py-2 sm:gap-0 sm:px-2 sm:py-2 lg:flex lg:px-2 lg:py-2',
      description: 'mt-0',
      footer: 'mt-0',
      links: 'gap-x-2 gap-y-2',
    }"
    :title="profileConfig.author"
    :description="profileConfig.bio"
  >
    <template #top>
      <NuxtLink to="/about">
        <NuxtImg
          :src="profileConfig.avatar"
          format="webp"
          quality="100"
          width="224"
          height="224"
          class="bg-primary aspect-square rounded-sm object-cover"
          alt="Profile"
        />
      </NuxtLink>
    </template>

    <template #links>
      <UButton
        v-for="link in profileConfig.links"
        :key="link.label"
        :to="link.to"
        :icon="link.icon"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
        variant="soft"
      >
        <span class="sr-only">{{ link.label }}</span>
      </UButton>
    </template>
  </UPageCTA>
</template>
