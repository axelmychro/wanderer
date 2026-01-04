export default defineAppConfig({
  ui: {
    colors: {
      primary: 'cyan',
      secondary: 'blue',
      neutral: 'slate',
    },
    blogPost: {
      variants: {
        to: {
          true: {
            image:
              'transform transition-transform duration-200 group-hover/blog-post:scale-110',
          },
        },
      },
      compoundVariants: [
        { variant: 'outline', class: { root: 'hover:bg-default' } },
      ],
    },
  },
})
