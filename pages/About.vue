<template>
  <div class="background-white">
    <Header />
    <div class="bottom-line" />
    <div class="about-cont">
      <SmallLanding />
      <AboutSection2 />
      <Location />
    </div>
    <Footer />
  </div>
</template>

<script>
import Location from '~/components/Location'
import AboutSection2 from '~/components/About/AboutSection2'
import SmallLanding from '~/components/About/SmallLanding'
export default {
  name: 'About',
  components: { Location, AboutSection2, SmallLanding },
  head: {
    title: 'About | High Altitude Platform Station, Liverpool Hope University'
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
.about-cont{
  position: relative;
  top: -100px;
  background: white;
}
.bottom-line{
  width: 100%;
  border: 2px solid #36598F;
  opacity: 1;
  position: relative;
  top: -85px;
  z-index: 1 !important;
}
.background-white{
  background-color: white;
}
</style>
