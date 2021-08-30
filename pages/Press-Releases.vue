<template>
  <div class="background-white">
    <Header />
    <div class="bottom-line" />
    <div class="press-release-cont">
      <SmallBanner />
      <HeroPost />
      <AllPressReleases />
    </div>
    <Footer />
  </div>
</template>

<script>
import SmallBanner from '~/components/SmallBanner'
import AllPressReleases from '~/components/Press-Releases/AllPressReleases'
import HeroPost from '~/components/Press-Releases/HeroPost'

export default {
  name: 'Press-Releases',
  components: { SmallBanner, AllPressReleases, HeroPost },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>

<style scoped>
  .press-release-cont{
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
