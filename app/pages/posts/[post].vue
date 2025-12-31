<script setup lang="ts">
  const route = useRoute()
  const routedPath = route.path

  const { data: post } = await useAsyncData(
    () => `post:${routedPath}`,
    () => queryCollection('posts').path(routedPath).first(),
    { default: () => null }
  )

  if (import.meta.server && !post.value) {
    throw createError({ statusCode: 404 })
  }

  const { badges } = useBadges()
  const badge = computed(() =>
    post.value ? badges[post.value.badge as keyof typeof badges] : null
  )

  const seoTitle = computed(() => post.value?.title || 'Untitled post')
  const seoDescription = computed(
    () => post.value?.description || 'Undescribed post'
  )
  const seoImage = computed(() => post.value?.image || '/header.webp')
  const seoUrl = computed(() => `https://www.wanderer.my.id${routedPath}`)

  useSeoMeta({
    title: seoTitle,
    description: seoDescription,
    ogTitle: seoTitle,
    ogDescription: seoDescription,
    ogType: 'article',
    ogImage: seoImage,
    ogUrl: seoUrl,
    twitterCard: 'summary_large_image',
    twitterTitle: seoTitle,
    twitterDescription: seoDescription,
    twitterImage: seoImage
  })

  const formattedDate = computed(() =>
    post.value
      ? new Intl.DateTimeFormat('en', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }).format(new Date(post.value.date))
      : ''
  )

  const shareLinks = computed(() => {
    const canonicalUrl = seoUrl.value
    const canicalTitle = seoTitle.value

    return {
      shareToX: `https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(canicalTitle)}`,
      shareToFacebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`,
      shareToWhatsapp: `https://wa.me/?text=${encodeURIComponent(`${canicalTitle} ${canonicalUrl}`)}`,
      shareToTelegram: `https://t.me/share/url?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(canicalTitle)}`
    }
  })
</script>

<template>
  <UCard v-if="post" :ui="{ root: 'bg-default rounded-xl' }">
    <template #header>
      <NuxtImg
        :src="post.image"
        fit="contain"
        class="pointer-events-none relative aspect-video w-full overflow-hidden"
      />
      <div class="flex min-w-0 flex-1 flex-col">
        <div class="mb-2 flex items-center gap-2">
          <UBadge
            :label="badge?.label"
            :color="badge?.color"
            :variant="badge?.variant"
          />
          <time>{{ formattedDate }}</time>
        </div>

        <h1 class="text-highlighted text-xl font-semibold text-pretty">
          {{ post.title }}
        </h1>
        <p class="text-base text-pretty">{{ post.description }}</p>
      </div>
    </template>

    <ContentRenderer :value="post" />

    <template #footer>
      <UFieldGroup>
        <UButton label="share ts!" color="neutral" variant="subtle" />
        <UTooltip text="copy to clipboard">
          <UButton color="neutral" variant="solid" icon="i-lucide-link" />
        </UTooltip>
      </UFieldGroup>

      <UFieldGroup>
        <UButton icon="i-lucide-facebook" color="neutral" variant="subtle" />
        <UButton
          icon="i-mingcute-whatsapp-line"
          color="neutral"
          variant="subtle"
        />
        <UButton icon="i-lucide-twitter" color="neutral" variant="subtle" />
        <UButton icon="i-lucide-linkedin" color="neutral" variant="subtle" />
      </UFieldGroup>
    </template>
  </UCard>
</template>
