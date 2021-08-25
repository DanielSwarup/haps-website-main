<template>
  <div class="landing-sect">
    <div class="content-cont">
      <div class="side-text-cont">
        <div class="landing-vert-text">
          Liverpool Hope University
        </div>
        <div class="vert-line" />
      </div>
      <div class="landing-text-cont">
        <div class="landing-main-text">
          Research Question Lorem Ipsum?
        </div>
        <div class="landing-sub-text">
          We specialise in researching high altitude platform applications to improve digital access to connect people and things. Researching platform modelling and simulation, multiple platform coordination, technology and policy innovation, and platform issues.
        </div>
      </div>
    </div>
    <div class="right-cont">
      <div class="picture">
        <img src="~/assets/Airship.jpg" alt="Geostationary Airship Satellite">
        <div class="img-title">
          Geostationary Airship Satellite
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmallLanding'
}
</script>

<style scoped>
.img-title{
  margin-top: 15px;
  width: 100%;
  text-align: center;
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 20px var(--primary-font-family-proxima-nova);
  letter-spacing: var(--primary-character-spacing-0);
  color: var(--HAPS-dark-grey);
}
.landing-sect{
  padding-left: calc(50vw - 900px);
  padding-right: calc(50vw - 900px);
  z-index: 0 !important;
  min-height: 200px;
  height: auto;
  width: 100%;
  background: #36598F;
}
.side-text-cont {
  padding-left: 30px;
  transform: rotate(0.25turn) translate(50%,-100%);
  height: auto;
  width: 350px;
}
.landing-vert-text{
  float: left;
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 18px var(--primary-font-family-proxima-nova);
  letter-spacing: var(--primary-character-spacing-0);
  color: var(--pure-white);
  text-align: left;
  opacity: 1;
}
.vert-line{
  transform: translate(20px, 10px);
  border-left: 125px solid var(--pure-white);
  height: 2px;
}
.content-cont{
  float:left;
  margin: 75px 50px 20px;
  width: auto;
}
.right-cont{
  float:left;
  margin: 50px 0 50px 0;
  width: auto;
}
.landing-text-cont{
  margin-left: 300px;
  width: 600px;
  float: left;
  padding-bottom: 65px;
}
.landing-main-text{
  float: left;
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 55px var(--primary-font-family-proxima-nova);
  letter-spacing: var(--primary-character-spacing-0);
  color: var(--pure-white);
  text-align: left;
  opacity: 1;
}
.landing-sub-text{
  margin-top: 20px;
  padding-bottom: 5px;
  float: left;
  letter-spacing: var(--primary-character-spacing-0);
  color: var(--pure-white);
  text-align: left;
  font: var(--primary-font-style-normal) normal 100 21px/25px var(--primary-font-family-proxima-nova);
  opacity: 1;
}
.our-work-text{
  padding-bottom: 5px;
}
.landing-sub-text-small{
  padding-bottom: 5px;
  margin-top: 35px;
  float: left;
  letter-spacing: var(--primary-character-spacing-0);
  color: var(--pure-white);
  text-align: left;
  font: var(--primary-font-style-normal) normal 100 21px/25px var(--primary-font-family-proxima-nova);
  opacity: 1;
}
.link-buttons{
  float: left;
  margin: 20px 60px 30px 0;
  width: 236px;
  height: auto;
  background: var(--pure-white) 0 0 no-repeat padding-box;
  opacity: 1;
}
.link-buttons svg{
  float: right;
  margin-right: 30px;
  margin-top: 13px;
}
.link-buttons p{
  float: left;
  text-align: left;
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 18px var(--primary-font-family-proxima-nova);
  letter-spacing: 0;
  color: #616161;
  opacity: 1;
  margin: 21px 25px;
}
.picture{
  margin-left: 50px;
  padding: 30px;
  background-color: var(--HAPS-blue-light)
}
.picture img {
  width: 500px;
}
.side-text-cont-picture{
  padding-left: 30px;
  transform: rotate(0.25turn) translate(50%,-450px);
  height: auto;
  width: 350px;
}
@media screen and (max-width: 1750px) {
  .landing-sect{
    padding-bottom: 50px;
  }
  .content-cont {
    margin: 100px 0 0 0;
  }
  .right-cont{
    margin: 100px 0 0 0;
  }
  .landing-text-cont {
    margin-left: calc(50vw - 350px);
    width: 450px;
  }
  .picture {
    margin-left: 50px;
  }
  .side-text-cont{
    margin-left: calc(50vw - 650px);
  }
  .picture img {
    height: 400px;
  }

  .side-text-cont-picture {
    transform: rotate(0.25turn) translate(50%, -250px);
    width: 350px;
  }

  .landing-main-text {
    font-size: 40px;
  }
  .landing-vert-text{
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 15px var(--primary-font-family-proxima-nova);
  }
  .landing-sub-text {
    font-size: 18px;
  }
  .landing-sub-text-small{
    font-size: 17px;
  }
  .link-buttons {
    margin: 10px 30px 0 0;
    width: 190px;
    height: auto;
  }
  .link-buttons svg{
    float: right;
    margin-right: 15px;
    margin-top: 15px;
    height: 28px;
  }
  .link-buttons p{
    float: left;
    text-align: left;
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 17px var(--primary-font-family-proxima-nova);
    letter-spacing: 0;
    color: #616161;
    opacity: 1;
    margin: 21px 20px;
  }
  .hor-line{
    transform: translate(0, 11px);
    border-left: 350px solid var(--pure-white);
    height: 2px;
    float: right;
  }
}
@media screen and (max-width: 1300px) {
  .content-cont {
    margin: 90px 0 0 0;
  }
  .side-text-cont{
    margin-left: calc(50vw - 650px);
  }
  .right-cont{
    margin: 90px 0 0 0;
  }
  .landing-text-cont{
    margin-left: calc(50vw - 400px);
    width: 450px;
  }
  .link-buttons {
    margin: 10px 30px 0 0;
    width: 170px;
    height: auto;
  }
  .link-buttons svg{
    margin-right: 5px;
    margin-top: 15px;
    height: 28px;
  }
  .link-buttons p{
    float: left;
    text-align: left;
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 17px var(--primary-font-family-proxima-nova);
    letter-spacing: 0;
    color: #616161;
    opacity: 1;
    margin: 21px 15px 21px 20px;
  }
  .hor-line{
    transform: translate(0, 11px);
    border-left: 300px solid var(--pure-white);
    height: 2px;
    float: right;
  }
  .landing-main-text {
    font-size: 35px;
  }
  .landing-vert-text{
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 12px var(--primary-font-family-proxima-nova);
  }
  .landing-sub-text {
    font-size: 16px;
  }
  .landing-sub-text-small{
    font-size: 16px;
  }
  .picture img {
    height: 350px;
  }
  .side-text-cont-picture {
    transform: rotate(0.25turn) translate(50%, -200px);
    width: 350px;
  }
}
</style>
