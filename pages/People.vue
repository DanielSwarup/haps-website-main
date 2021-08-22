<template>
  <div>
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
.bottom-line{
  width: 100%;
  border: 2px solid #36598F;
  opacity: 1;
  position: relative;
  top: -100px;
  z-index: 0 !important;
}
.people-cont{

}
</style>
