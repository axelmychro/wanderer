<script setup>
onMounted(() => {
  if (window.twttr) {
    window.twttr.widgets.load()
    return
  }
  const twitterWidgetScript = document.createElement('script')
  twitterWidgetScript.src = 'https://platform.twitter.com/widgets.js'
  twitterWidgetScript.async = true
  document.body.appendChild(twitterWidgetScript)
})
</script>

<template>
  <slot />
</template>
