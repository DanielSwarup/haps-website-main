<template>
  <div class="landing-sect">
    <div class="center">
      <div class="wrapper">
        <div class="content-cont">
          <div class="landing-lhu-text">
            <p>Liverpool Hope University</p>
          </div>
          <div class="landing-text-cont">
            <div class="landing-main-text">
              Connecting People and Things via High Altitude Platform Stations (HAPS).
            </div>
            <div class="landing-sub-text">
              We specialise in HAPS and related applications to improve digital access, connecting people and things. Our work focuses on HAPS modelling and simulation, multiple HAPS coordination scenarios, HAPS application challenges and HAPS technology and policy innovation.
            </div>
            <div class="landing-sub-text-small">
              <div class="our-work-text">
                Our Work
                <div class="hor-line" />
              </div>
              <div>
                <NuxtLink to="/publications">
                  <div class="link-buttons">
                    <p>Publications</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="37.76" height="43.154" viewBox="0 0 37.76 43.154">
                      <path id="Icon_awesome-book" data-name="Icon awesome-book" d="M37.76,30.343V2.023A2.018,2.018,0,0,0,35.737,0H8.091A8.093,8.093,0,0,0,0,8.091V35.062a8.093,8.093,0,0,0,8.091,8.091H35.737a2.018,2.018,0,0,0,2.023-2.023V39.782a2.039,2.039,0,0,0-.75-1.576,18.8,18.8,0,0,1,0-6.3A2.009,2.009,0,0,0,37.76,30.343ZM10.788,11.294a.507.507,0,0,1,.506-.506H29.163a.507.507,0,0,1,.506.506V12.98a.507.507,0,0,1-.506.506H11.294a.507.507,0,0,1-.506-.506Zm0,5.394a.507.507,0,0,1,.506-.506H29.163a.507.507,0,0,1,.506.506v1.686a.507.507,0,0,1-.506.506H11.294a.507.507,0,0,1-.506-.506ZM32.146,37.76H8.091a2.7,2.7,0,0,1,0-5.394H32.146A30.344,30.344,0,0,0,32.146,37.76Z" fill="#616161" />
                    </svg>
                  </div>
                </NuxtLink>
                <NuxtLink to="/people">
                  <div class="link-buttons">
                    <p>People</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="55.345" height="35.22" viewBox="0 0 55.345 35.22">
                      <path id="Icon_material-people" data-name="Icon material-people" d="M39.235,22.594a7.547,7.547,0,1,0-7.547-7.547A7.516,7.516,0,0,0,39.235,22.594Zm-20.126,0a7.547,7.547,0,1,0-7.547-7.547A7.516,7.516,0,0,0,19.11,22.594Zm0,5.031c-5.862,0-17.61,2.943-17.61,8.8V42.72H36.72V36.431C36.72,30.569,24.971,27.626,19.11,27.626Zm20.126,0c-.73,0-1.56.05-2.44.126,2.918,2.113,4.956,4.956,4.956,8.679V42.72H56.845V36.431C56.845,30.569,45.1,27.626,39.235,27.626Z" transform="translate(-1.5 -7.5)" fill="#616161" />
                    </svg>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="right-cont">
          <div class="picture">
            <img src="~/assets/haps-balloon.png" alt="HAPS Balloon">
            <div class="img-title">
              High Altitude Balloon
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingSection'
}
</script>

<style scoped>
  .center{
    display: flex;
    justify-content: center;
    margin-top:clamp(70px, 15vw, 75px);
  }
  .landing-sect{
    background: #36598F;
  }
  .wrapper{
    flex-wrap: wrap-reverse;
    display: flex;
  }
  .hor-line{
    transform: translate(0, 11px);
    border-left: clamp(220px, 15vw, 450px) solid var(--pure-white);
    height: 2px;
    float: right;
  }
  .content-cont{
    float:left;
    margin: 0 clamp(1px, 1vw, 50px) clamp(1px, 4vw, 50px) clamp(1px, 5vw, 50px);
    width: auto;
  }
  .right-cont{
    order: 0;
    float:left;
    margin: 0 clamp(1px, 1vw, 50px) clamp(1px, 1vw, 20px) clamp(1px, 1vw, 50px);
    width: auto;
  }
  .landing-text-cont{
    margin-left: clamp(1px, 1vw, 300px);
    width: clamp(340px, 50vw, 600px);
    float: left;
    padding-bottom: 0;
  }
  .landing-main-text{
    float: left;
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 45px var(--primary-font-family-proxima-nova);
    font-size: clamp(1.5rem, 5vw, 2.5rem);
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
    font: var(--primary-font-style-normal) normal 100 21px/30px var(--primary-font-family-proxima-nova);
    font-size: clamp(1rem, 3vw, 1.3rem);
    opacity: 1;
  }
  .our-work-text{
    padding-bottom: 5px;
  }
  .landing-sub-text-small{
    padding-bottom: 5px;
    margin-top: clamp(10px, 1vw, 35px);
    float: left;
    letter-spacing: var(--primary-character-spacing-0);
    color: var(--pure-white);
    text-align: left;
    font: var(--primary-font-style-normal) normal 100 21px/25px var(--primary-font-family-proxima-nova);
    opacity: 1;
  }
  .link-buttons{
    float: left;
    margin: clamp(1px, 1vw, 20px) clamp(1px, 1vw, 60px) clamp(1px, 1vw, 30px) 0;
    width: clamp(220px, 20vw, 250px);
    height: auto;
    background: var(--pure-white) 0 0 no-repeat padding-box;
    opacity: 1;
  }
  .link-buttons svg{
    float: right;
    margin-right: clamp(1px, 5vw, 30px);
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
    margin-left:  clamp(1px, 1vw, 50px);
    padding: clamp(1px, 5vw, 30px);
  }
  .picture img {
    width: clamp(270px, 30vw, 500px);
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
  }
  .img-title{
    margin-top:  clamp(1px, 1vw, 15px);
    background-color: rgba(154, 203, 236, 0.3);
    border-radius: 8px;
    text-align: center;
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 20px var(--primary-font-family-proxima-nova);
    font-size: clamp(0.9rem, 4vw, 1.5rem);
    letter-spacing: var(--primary-character-spacing-0);
    color: var(--pure-white);
  }
  .landing-lhu-text{
    margin-top: clamp(1px, 1vw, 15px);
    padding-bottom: 5px;
    letter-spacing: 2px;
    color: var(--pure-white);
    text-align: left;
    font: var(--primary-font-style-normal) normal 100 16px var(--primary-font-family-proxima-nova);
    font-size: clamp(0.75rem, 3vw, 1rem);
    opacity: 1;
  }
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
</style>
