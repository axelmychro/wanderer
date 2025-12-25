<script setup lang="ts">
  const posts = ref([
    {
      title: 'Hello World!',
      description: 'This is the first post, everything a work in progress~',
      image: '/posts/hello_world.png',
      date: '2025-12-25',
      to: '/posts/hello-world'
    }
  ])
</script>

<template>
  <UBlogPosts orientation="vertical" :posts="posts" class="gap-4 lg:gap-4" />
</template>
