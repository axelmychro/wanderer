export const useDateFormatter = (
  date: Ref<string | undefined> | ComputedRef<string | undefined>,
) => {
  const formattedDate = computed(() =>
    date.value
      ? new Intl.DateTimeFormat('en', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }).format(new Date(date.value))
      : '',
  )
  return { formattedDate }
}
