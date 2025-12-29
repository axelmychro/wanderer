import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod/v4'

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: 'posts/**/index.md',
      schema: z.object({
        badge: z.string(),
        date: z.string(),
        image: z.string(),
        title: z.string(),
        description: z.string()
      })
    })
  }
})
