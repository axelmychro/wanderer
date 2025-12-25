<template>
  <UPageCTA
    :ui="{
      root: 'flex flex-col items-center p-6',
      container:
        'flex flex-col gap-2 px-2 py-2 sm:gap-0 sm:px-2 sm:py-2 lg:flex lg:px-2 lg:py-2',
      description: 'mt-0',
      footer: 'mt-0',
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
        format="webp"
        quality="100"
        width="512"
        height="512"
        fit="contain"
        class="bg-primary size-64 shrink-0 rounded-xl"
      />
    </template>
  </UPageCTA>
</template>
