<template>
  <div>
    <div class="background-white">
      <Header title="Privacy Policy" />
      <div class="bottom-line" />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy',
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
.background-white{
  background: white;
}
.bottom-line{
  width: 100%;
  border: 2px solid #36598F;
  opacity: 1;
  position: relative;
  top: -85px;
}
.publication-cont{
  position: relative;
  top: -85px;
}
</style>
