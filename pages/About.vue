<template>
  <div class="background-white">
    <Header />
    <div class="bottom-line" />
    <div class="about-cont">
      <Location />
    </div>
    <Footer />
  </div>
</template>

<script>
import Location from '~/components/Location'
export default {
  name: 'About',
  components: { Location }
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
