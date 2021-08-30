<template>
  <div class="landing-sect">
    <div class="center">
      <div>
        <div class="content-cont">
          <div class="landing-text-cont">
            <div class="landing-lhu-text">
              <p>Liverpool Hope University</p>
            </div>
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
            <div class="center">
              <div>
                <img src="~/assets/Airship.jpg" alt="Geostationary Airship Satellite">
                <div class="img-title">
                  Geostationary Airship Satellite
                </div>
              </div>
            </div>
          </div>
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
.center{
  display: flex;
  justify-content: center;
}
.landing-sect{
  background: #36598F;
}
.content-cont{
  float:left;
  margin: clamp(70px, 15vw, 75px) clamp(1px, 1vw, 50px) clamp(1px, 1vw, 20px) clamp(1px, 5vw, 50px);
  width: auto;
}
.right-cont{
  float:left;
  margin: clamp(1px, 4vw, 75px) clamp(1px, 1vw, 50px) clamp(30px, 5vw, 50px) clamp(1px, 1vw, 50px);
  width: auto;
}
.landing-text-cont{
  margin-left: clamp(1px, 1vw, 300px);
  width: clamp(340px, 50vw, 600px);
  float: left;
  padding-bottom: clamp(10px, 5vw, 65px);
}
.landing-main-text{
  float: left;
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 55px var(--primary-font-family-proxima-nova);
  font-size: clamp(2rem, 5vw, 3.5rem);
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
  font: var(--primary-font-style-normal) normal 100 21px var(--primary-font-family-proxima-nova);
  font-size: clamp(1rem, 3vw, 1.5rem);
  opacity: 1;
}
.landing-lhu-text{
  margin-top: 20px;
  padding-bottom: 5px;
  float: left;
  letter-spacing: 2px;
  color: var(--pure-white);
  text-align: left;
  font: var(--primary-font-style-normal) normal 100 16px var(--primary-font-family-proxima-nova);
  font-size: clamp(0.75rem, 3vw, 1rem);
  opacity: 1;
}
.picture{
  margin-left:  clamp(1px, 1vw, 50px);
  padding: clamp(1px, 5vw, 30px);
  background-color: var(--HAPS-blue-light)
}
.picture img {
  width: clamp(270px, 30vw, 500px);
}
.img-title{
  margin-top: 15px;
  width: 100%;
  text-align: center;
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 20px var(--primary-font-family-proxima-nova);
  font-size: clamp(0.9rem, 1vw, 1.5rem);
  letter-spacing: var(--primary-character-spacing-0);
  color: var(--HAPS-dark-grey);
}
</style>
