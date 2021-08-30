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
    height: clamp(10px, 50vw, 200px);
    background: transparent url('assets/smallBanner2.jpg') 0 80% no-repeat padding-box;
    background-size: 100%;
    position: relative;
  }
  .small-banner-text{
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-bold) 55px var(--primary-font-family-proxima-nova);
    letter-spacing: var(--primary-character-spacing-0);
    font-size: clamp(1.7rem, 5vw, 2.5rem);
    color: var(--pure-white);
    text-align: left;
    position: absolute;
    bottom: clamp(1px, 10%, 50px);
    left: clamp(10px, 10%, 200px);
  }
</style>
