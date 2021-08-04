<template>
  <div>
    <Header />
    <div class="landing-cont">
      <LandingSection />
      <ResearchQuestion />
    </div>
    <Footer />
  </div>
</template>

<script>
import LandingSection from '~/components/LandingSection'
import ResearchQuestion from '~/components/ResearchQuestion'
export default {
  components: { LandingSection, ResearchQuestion },
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
