<template>
<div>
</div>
</template>

<script>
export default {
  name: 'Privacy-Policy',
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>

<style scoped>

</style>
