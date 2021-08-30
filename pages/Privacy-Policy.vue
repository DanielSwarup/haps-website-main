<template>
<div>
</div>
</template>

<script>
export default {
  name: 'Privacy-Policy',
  head: {
    title: 'Privacy Policy | High Altitude Platform Station, Liverpool Hope University'
  },
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
