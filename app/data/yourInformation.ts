// Configure your informations here ^^
// Image directory is relative to public folder
export const siteConfig: SiteConfig = {
  name: 'Wanderer',
  lang: 'en',
  title: 'Eons Adrift',
  description: 'anywhere the wind blows doesn\'t really matter to me',
  image: '/header.webp',
}

// You can always add more items into the links
export const profileConfig: ProfileConfig = {
  author: 'Axel',
  avatar: '/avatar.png',
  bio: 'here, but not really',
  links: [
    {
      to: 'mailto:axelmychro@gmail.com',
      label: 'Email',
      icon: 'i-lucide-mail',
    },
    {
      to: 'https://www.linkedin.com/in/axelramadhan',
      label: 'LinkedIn',
      icon: 'i-simple-icons-linkedin',
    },
    {
      to: 'https://github.com/axelmychro',
      label: 'GitHub',
      icon: 'i-simple-icons-github',
    },
    // {
    //   to: 'https://**.*/**',
    // label: '**',
    //   icon: 'i-**-*',
    // },
  ],
}

import type { SiteConfig, ProfileConfig } from '~/types/yourInformationConfig'
