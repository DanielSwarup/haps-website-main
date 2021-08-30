<template>
  <div class="center">
    <div class="hero-release">
      <div class="hero-picture" />
      <div class="hero-info-cont">
        <div class="hero-date">
          July 1, 2021
        </div>
        <div class="hero-title">
          Press Release Title 1
        </div>
        <div class="hero-author">
          By Ogbonnaya Anicho
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroPost'
}
</script>

<style scoped>
  .center{
    display: flex;
    justify-content: center;
  }
  .hero-release{
    margin-top: clamp(10px, 2vw, 30px);
    width: clamp(350px, 90vw, 800px);
    height:auto;
    background: var(--HAPS-blue-light) 0% 0% no-repeat padding-box;
  }
  .hero-picture {
    margin-top: 0;
    height: clamp(300px, 20vw, 400px);
    width: 800px;
    background: transparent url('../../assets/yorkHAPS.jpg') 0 0 no-repeat padding-box;
  }
  .hero-info-cont{
    margin-left: clamp(10px, 2vw, 20px);
    margin-top: 10px;
    margin-bottom: clamp(10px, 2vw, 20px);
  }
  .hero-date{
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-bold) 18px var(--primary-font-family-proxima-nova);
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    letter-spacing: var(--primary-character-spacing-0);
    text-align: left;
    color: #394248CC;
  }
  .hero-title{
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 50px var(--primary-font-family-proxima-nova);
    font-size: clamp(1.75rem, 4vw, 2.2rem);
    letter-spacing: var(--primary-character-spacing-0);
    color: var(--HAPS-dark-grey);
    text-align: left;
  }
  .hero-author{
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 20px var(--primary-font-family-proxima-nova);
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    letter-spacing: var(--primary-character-spacing-0);
    text-align: left;
  }
</style>
