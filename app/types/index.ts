export type SiteConfig = {
  name: string
  lang: `${string}-${string}` | string
  title: string
}
export type ProfileConfig = {
  author: string
  avatar?: string
  bio?: string
  links?: {
    label?: string
    to: string
    icon: string
  }[]
}
