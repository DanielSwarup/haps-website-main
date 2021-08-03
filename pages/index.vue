<template>
  <div>
    <Header />
    <div class="landing-cont">
      <LandingSection />
    </div>
    <Footer />
  </div>
</template>

<script>
import LandingSection from '~/components/LandingSection'
export default {
  components: { LandingSection },
  head: {
    title: 'HAPS'
  }
}
</script>
<style scoped>
  .landing-cont{
    position: relative;
    top: -100px;
  }

</style>
