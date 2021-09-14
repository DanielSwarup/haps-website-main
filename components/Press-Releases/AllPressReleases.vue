<template>
  <div class="center">
    <div class="all-releases-cont">
      <div class="press-release-tiles ">
        <ul>
          <li class="single-tile">
            <div class="single-tile-img" />
            <div class="single-tile-date">
              June 16, 2020
            </div>
            <div class="single-tile-header">
             High altitude internet platforms ‘crucial’ in future pandemics
            </div>
            <div class="single-tile-author">
              IoTNOW
            </div>
          </li>
          <li class="single-tile">
            <div class="single-tile-img" />
            <div class="single-tile-date">
              June 16, 2020
            </div>
            <div class="single-tile-header">
              Liverpool Hope University finds solar powered high altitude platforms could solve the problem of rural connectivity
            </div>
            <div class="single-tile-author">
             Satellite Evolution Group
            </div>
          </li>
          <li class="single-tile">
            <div class="single-tile-img" />
            <div class="single-tile-date">
              June 16, 2020
            </div>
            <div class="single-tile-header">
              HAPS to boost rural connectivity
            </div>
            <div class="single-tile-author">
              Advanced Television
            </div>
          </li>
          <li class="single-tile">
            <div class="single-tile-img" />
            <div class="single-tile-date">
              Nov 3, 2020
            </div>
            <div class="single-tile-header">
             High-altitude platforms: why the way to bring the world online hangs in the sky
            </div>
            <div class="single-tile-author">
              The National
            </div>
          </li>
          <li class="single-tile">
            <div class="single-tile-img" />
            <div class="single-tile-date">
              August, 2020
            </div>
            <div class="single-tile-header">
              Universal Digital Access Already a Top Global Priority, Now More Urgent Due to COVID-19
            </div>
            <div class="single-tile-author">
              Avealto Insights
            </div>
          </li>
        </ul>
      </div>
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
  max-width: 1600px;
}
.center{
  display: flex;
  justify-content: center;
}
.press-release-tiles{
  margin-top: clamp(1px, 2vw, 50px);
  margin-left: clamp(30px, 5vw, 150px);
}
.press-release-tiles ul{
}
.single-tile{
  float: left;
  margin: 0 clamp(1px, 4vw, 35px) clamp(5px, 4vw, 25px) 0;
  width: clamp(300px, 25vw, 440px);
  height: 460px;

}
.single-tile-img{
  width: clamp(300px, 25vw, 440px);
  height: clamp(300px, 10vw, 330px);
  overflow: hidden;
  background: transparent url('../../assets/yorkHAPS.jpg') 0 0 no-repeat padding-box;
}
.single-tile-date{
  margin-top: 5px;
  text-align: left;
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-bold) 16px var(--primary-font-family-proxima-nova);
  font-size: clamp(0.75rem, 2vw, 1rem);
  letter-spacing: 0;
  color: #394248CC;
  opacity: 1;
}
.single-tile-header {
  text-align: left;
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 40px var(--primary-font-family-proxima-nova);
  font-size: clamp(0.8rem, 3vw, 1.2rem);
  letter-spacing: 0;
  color: var(--HAPS-dark-grey);
  opacity: 1;
}
.single-tile-author{
  text-align: left;
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 19px var(--primary-font-family-proxima-nova);
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  letter-spacing: 0;
  color: #394248CC;
  opacity: 1;
}
</style>
