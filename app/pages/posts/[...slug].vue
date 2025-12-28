<script setup lang="ts">
  const route = useRoute()

  const { tags } = usePosts()

  const badge = computed(() =>
    post.value ? tags[post.value.badge as keyof typeof tags] : null
  )

  const slug = computed(() =>
    Array.isArray(route.params.slug)
      ? route.params.slug.join('/')
      : route.params.slug
  )

  const { data: post } = await useAsyncData(() =>
    queryCollection('posts').where('path', '=', `/posts/${slug.value}`).first()
  )

  watchEffect(() => {
    if (!post.value) return

    useSeoMeta({
      title: post.value.title,
      description: post.value.description,
      ogTitle: post.value.title,
      ogDescription: post.value.description,
      ogImage: post.value.image,
      ogType: 'article',
      twitterCard: 'summary_large_image',
      twitterImage: post.value.image
    })
  })
</script>

<template>
  <UBlogPost
    v-if="post"
    :badge="badge ?? undefined"
    :image="post.image"
    :date="post.date"
    :title="post.title"
    :description="post.description"
    :ui="{
      root: 'bg-default rounded-xl',
      image: 'object-contain',
      footer: 'px-4 sm:px-6'
    }"
  >
    <template #footer>
      <ContentRenderer :value="post" />
    </template>
  </UBlogPost>
</template>
