<template>
  <div class="background-white">
    <Header />
    <div class="bottom-line" />
    <div class="join-cont">
      <JoinSectionOne />
      <Location />
    </div>
    <Footer />
  </div>
</template>

<script>
import Location from '~/components/Location'
import JoinSectionOne from '~/components/Join/JoinSectionOne'
export default {
  name: 'Join',
  components: { Location, JoinSectionOne },
  head: {
    title: 'Join Us | High Altitude Platform Station, Liverpool Hope University'
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
  .join-cont{
    position: relative;
    top: -50px;
  }
  .bottom-line{
    width: 100%;
    border: 2px solid #36598F;
    opacity: 1;
    position: relative;
    top: -85px;
  }
</style>
