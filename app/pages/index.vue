<template>
  <div class="flex flex-col lg:flex-row">

    <UPageSection
    id="features"
    title="Everything you need to build modern Nuxt apps"
      description="Start with a solid foundation. This template includes all the essentials for building production-ready applications with Nuxt UI's powerful component system."
      :features="[
        {
          icon: 'i-lucide-rocket',
          title: 'Production-ready from day one',
          description:
          'Pre-configured with TypeScript, ESLint, Tailwind CSS, and all the best practices. Focus on building features, not setting up tooling.'
        },
        {
          icon: 'i-lucide-palette',
          title: 'Beautiful by default',
          description:
          'Leveraging Nuxt UI\'s design system with automatic dark mode, consistent spacing, and polished components that look great out of the box.'
        },
        {
          icon: 'i-lucide-zap',
          title: 'Lightning fast',
          description:
          'Optimized for performance with SSR/SSG support, automatic code splitting, and edge-ready deployment. Your users will love the speed.'
        },
        {
          icon: 'i-lucide-blocks',
          title: '100+ components included',
          description:
          'Access Nuxt UI\'s comprehensive component library. From forms to navigation, everything is accessible, responsive, and customizable.'
        },
        {
          icon: 'i-lucide-code-2',
          title: 'Developer experience first',
          description:
          'Auto-imports, hot module replacement, and TypeScript support. Write less boilerplate and ship more features.'
        },
        {
          icon: 'i-lucide-shield-check',
          title: 'Built for scale',
          description:
            'Enterprise-ready architecture with proper error handling, SEO optimization, and security best practices built-in.'
        }
      ]"
    />

    <div>
      <UPageCTA
      :ui="{container: 'px-2 py-8', body: 'min-h-1 bg-sky-500', footer: 'mt-2'}"
        title="Axel"
        description='"here, but not really"'
        reverse
        :links="[
          {
            to: 'mailto:axelmychro@gmail.com',
            icon: 'i-lucide-mail',
            color: 'neutral',
            variant: 'soft',
            target: '_blank'
          },
          {
            to: 'https://www.instagram.com/axelmychro',
            icon: 'i-lucide-instagram',
            color: 'neutral',
            variant: 'soft',
            target: '_blank'
          },
          {
            to: 'https://www.linkedin.com/in/axelramadhan',
            icon: 'i-lucide-linkedin',
            color: 'neutral',
            variant: 'soft',
            target: '_blank'
          },
          {
            to: 'https://github.com/axelmychro',
            icon: 'i-lucide-github',
            color: 'neutral',
            variant: 'soft',
            target: '_blank'
          }
        ]"
      >
        <NuxtImg
          src="Wanderer.png"
          quality="100"
          width="256"
          height="256"
          class="self-center rounded-xl"
        />
      </UPageCTA>
    </div>

    <!-- <UPageSection>
      <UPageCTA
        title="Ready to build your next Nuxt app?"
        description="Join thousands of developers building with Nuxt and Nuxt UI. Get this template and start shipping today."
        variant="subtle"
        :links="[
        {
            label: 'Start building',
            to: 'https://ui.nuxt.com/docs/getting-started/installation/nuxt',
            target: '_blank',
            trailingIcon: 'i-lucide-arrow-right',
            color: 'neutral'
          },
          {
            label: 'View on GitHub',
            to: 'https://github.com/nuxt-ui-templates/starter',
            target: '_blank',
            icon: 'i-simple-icons-github',
            color: 'neutral',
            variant: 'outline'
          }
        ]"
      />
    </UPageSection> -->
  </div>
</template>
