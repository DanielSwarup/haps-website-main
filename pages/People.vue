<template>
  <div class="background-white">
    <Header />
    <div class="bottom-line" />
    <div class="people-cont">
      <Location />
    </div>
    <Footer />
  </div>
</template>

<script>
import Location from '~/components/Location'
export default {
  name: 'People',
  components: { Location }
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
  top: -100px;
  z-index: 5 !important;
}
.people-cont{
  position: relative;
  top: -100px;
}
</style>
