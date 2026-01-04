<script setup lang="ts">
const { filteredPosts } = usePostList()

useSeoMeta({
  title: 'Home',
})
</script>

<template>
  <div class="sm:space-y-4">
    <UBlogPost
      v-if="filteredPosts.length <= 0"
      orientation="horizontal"
      :ui="{
        body: 'lg:pr-4',
      }"
      badge="???"
      :date="Date()"
      image="/header.webp"
      title="loading posts..."
      description="wait just a bit, okay?"
    />

    <UBlogPost
      v-for="post in filteredPosts"
      v-else
      :key="post.path"
      orientation="horizontal"
      class="animate-enter"
      :ui="{
        root: 'gap-x-0 p-2 sm:flex-row lg:flex',
        header: 'aspect-auto sm:max-w-64',
        image: 'max-h-32 min-h-full rounded-lg object-center',
        body: 'max-h-32 min-h-32 justify-start p-2 sm:p-2 lg:px-2',
      }"
      :badge="post.badge"
      :date="post.date"
      :image="post.image"
      :title="post.title"
      :description="post.description"
      :to="post.path"
    >
      <template #body>
        <h2 class="text-highlighted text-xl font-semibold text-pretty">
          {{ post.title }}
        </h2>

        <div class="mb-2 flex items-center gap-2">
          <UBadge
            :label="post.badge?.label"
            :color="post.badge?.color"
            :variant="post.badge?.variant"
          />
          <time>{{
            useDateFormatter(computed(() => post.date)).formattedDate
          }}</time>
        </div>

        <p class="mt-1 text-base text-pretty">
          {{ post.description }}
        </p>
      </template>
    </UBlogPost>
  </div>
</template>
