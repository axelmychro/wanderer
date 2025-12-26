<script setup lang="ts">
  const tags = {
    dev: {
      label: 'Dev',
      color: 'primary',
      variant: 'outline'
    },
    other: {
      label: 'other',
      color: 'secondary',
      variant: 'subtle'
    }
  } as const

  const posts = ref([
    {
      badge: tags.other,
      image: '/posts/hello_world/image.png',
      date: '2025-12-25',
      title: 'hello world!',
      description: 'this is the first post, everything a work in progress~',
      to: '/posts/hello-world'
    },
    {
      badge: tags.other,
      image: '/posts/a_social_repose/image.png',
      date: '2025-12-25',
      title: 'a social repose',
      description: 'how should this "good" cs student spend his free time?',
      to: '/posts/a-social-repose'
    }
  ])
</script>

<template>
  <UBlogPost
    :ui="{
      body: post.image ? '' : 'lg:px-4',
      image: 'object-center'
    }"
    orientation="horizontal"
    v-for="post in posts"
    :key="post.to"
    v-bind="post"
  />
</template>
