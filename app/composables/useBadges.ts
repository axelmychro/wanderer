export const useBadges = () => {
  const badges = {
    other: { label: 'other', color: 'secondary', variant: 'subtle' },
    dev: { label: 'dev', color: 'primary', variant: 'solid' }
  } as const

  const resolveBadge = (key?: string) =>
    key ? badges[key as keyof typeof badges] : undefined

  return { badges, resolveBadge }
}
