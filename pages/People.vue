<template>
  <div class="background-white">
    <Header />
    <div class="bottom-line" />
    <div class="people-cont">
      <Team />
      <Location />
    </div>
    <Footer />
  </div>
</template>

<script>
import Location from '~/components/Location'
import Team from '~/components/People/Team'
export default {
  name: 'People',
  components: { Location, Team },
  head: {
    title: 'People | High Altitude Platform Station, Liverpool Hope University'
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
.people-cont{
  position: relative;
  top: -100px;
}
</style>
