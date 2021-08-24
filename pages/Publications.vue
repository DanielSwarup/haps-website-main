<template>
  <div class="background-white">
    <Header />
    <div class="bottom-line" />
    <div class="publication-cont">
      <SmallBanner />
    </div>
    <Publication />
    <Footer />
  </div>
</template>

<script>
import SmallBanner from '~/components/SmallBanner'
import Publication from '~/components/Publication'
export default {
  name: 'Publications',
  components: { SmallBanner, Publication }
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
