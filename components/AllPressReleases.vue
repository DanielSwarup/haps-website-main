<template>
  <div class="all-releases-cont">
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
    <div class="press-release-tiles">
      <ul>
        <li class="single-tile">
          <div class="single-tile-img" />
          <div class="single-tile-date">
            July 1, 2021
          </div>
          <div class="single-tile-header">
            Press Release Title 1
          </div>
          <div class="single-tile-author">
            By Ogbonnaya Anicho
          </div>
        </li>
        <li class="single-tile">
          <div class="single-tile-img" />
          <div class="single-tile-date">
            July 1, 2021
          </div>
          <div class="single-tile-header">
            Press Release Title 1
          </div>
          <div class="single-tile-author">
            By Ogbonnaya Anicho
          </div>
        </li>
        <li class="single-tile">
          <div class="single-tile-img" />
          <div class="single-tile-date">
            July 1, 2021
          </div>
          <div class="single-tile-header">
            Press Release Title 1
          </div>
          <div class="single-tile-author">
            By Ogbonnaya Anicho
          </div>
        </li>
        <li class="single-tile">
          <div class="single-tile-img" />
          <div class="single-tile-date">
            July 1, 2021
          </div>
          <div class="single-tile-header">
            Press Release Title 1
          </div>
          <div class="single-tile-author">
            By Ogbonnaya Anicho
          </div>
        </li>
        <li class="single-tile">
          <div class="single-tile-img" />
          <div class="single-tile-date">
            July 1, 2021
          </div>
          <div class="single-tile-header">
            Press Release Title 1
          </div>
          <div class="single-tile-author">
            By Ogbonnaya Anicho
          </div>
        </li>
        <li class="single-tile">
          <div class="single-tile-img" />
          <div class="single-tile-date">
            July 1, 2021
          </div>
          <div class="single-tile-header">
            Press Release Title 1
          </div>
          <div class="single-tile-author">
            By Ogbonnaya Anicho
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllPressReleases'
}
</script>

<style scoped>
.all-releases-cont{
  display: block;
  margin-left: auto;
  margin-right: auto
}
.press-release-tiles{
  margin-top: 30px;
  margin-left: 200px;
}
.press-release-tiles ul{
}
.single-tile{
  float: left;
  margin: 30px 40px;
}
.single-tile-img{
  width: 440px;
  height: 330px;
  overflow: hidden;
  background: transparent url('assets/yorkHAPS.jpg') 0 0 no-repeat padding-box;
}
.single-tile-date{
  margin-top: 5px;
  text-align: left;
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-bold) 16px var(--primary-font-family-proxima-nova);
  letter-spacing: 0;
  color: #394248CC;
  opacity: 1;
}
.single-tile-header {
  text-align: left;
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 40px var(--primary-font-family-proxima-nova);
  letter-spacing: 0;
  color: var(--HAPS-dark-grey);
  opacity: 1;
}
.single-tile-author{
  text-align: left;
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 19px var(--primary-font-family-proxima-nova);
  letter-spacing: 0;
  color: #394248CC;
  opacity: 1;
}
.hero-release{
  margin-top: 30px;
  width: 800px;
  height: 550px;
  background: var(--HAPS-light-grey) 0% 0% no-repeat padding-box;
  display: block;
  margin-left: auto;
  margin-right: auto
}
.hero-picture {
  margin-top: 0;
  height: 400px;
  width: 800px;
  background: transparent url('assets/yorkHAPS.jpg') 0 0 no-repeat padding-box;
  display: block;
  margin-left: auto;
  margin-right: auto
}
.hero-info-cont{
  margin-left: 20px;
  margin-top: 10px;
}
.hero-date{
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-bold) 18px var(--primary-font-family-proxima-nova);
  letter-spacing: var(--primary-character-spacing-0);
  text-align: left;
  color: #394248CC;
}
.hero-title{
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 50px var(--primary-font-family-proxima-nova);
  letter-spacing: var(--primary-character-spacing-0);
  color: var(--HAPS-dark-grey);
  text-align: left;
}
.hero-author{
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 20px var(--primary-font-family-proxima-nova);
  letter-spacing: var(--primary-character-spacing-0);
  text-align: left;
}
</style>
