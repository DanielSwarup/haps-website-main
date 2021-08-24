<template>
  <div class="background-white">
    <Header />
    <div class="bottom-line" />
    <div class="landing-cont">
      <LandingSection />
      <ResearchQuestion />
      <SmallPressReleases />
      <TeamCarousel />
      <Location />
    </div>
    <Footer />
  </div>
</template>

<script>
import LandingSection from '~/components/LandingSection'
import ResearchQuestion from '~/components/ResearchQuestion'
import SmallPressReleases from '~/components/SmallPressReleases'
import Location from '~/components/Location'
import TeamCarousel from '~/components/TeamCarousel'

export default {
  components: { LandingSection, ResearchQuestion, SmallPressReleases, Location, TeamCarousel },
  head: {
    title: 'HAPS'
  }
}
</script>
<style scoped>
  .landing-cont{
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
  }
  .background-white{
    background: white;
  }
</style>
