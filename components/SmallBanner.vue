<template>
  <div class="small-banner-cont">
    <div class="small-banner-text">
      Publications
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmallBanner'
}
</script>

<style scoped>
  .small-banner-cont{
    height: 280px;
    background: transparent url('assets/smallBanner2.jpg') 0 80% no-repeat padding-box;
    background-size: 100%;
    position: relative;
  }
  .small-banner-text{
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-bold) 50px var(--primary-font-family-proxima-nova);
    letter-spacing: var(--primary-character-spacing-0);
    color: var(--pure-white);
    text-align: left;
    position: absolute;
    bottom: 10px;
    left: 200px;
  }
</style>
