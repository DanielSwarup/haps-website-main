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
          Connecting people via high altitude platform infrastructures
        </div>
        <div class="landing-sub-text">
          We specialise in researching high altitude platform applications to improve digital access to connect people and things. Researching platform modelling and simulation, multiple platform coordination, technology and policy innovation, and platform issues.
        </div>
        <div class="landing-sub-text-small">
          <div>
            Our Work
            <div class="hor-line" />
          </div>
          <div>
            <div class="link-buttons">
              <p>Publications</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="37.76" height="43.154" viewBox="0 0 37.76 43.154">
                <path id="Icon_awesome-book" data-name="Icon awesome-book" d="M37.76,30.343V2.023A2.018,2.018,0,0,0,35.737,0H8.091A8.093,8.093,0,0,0,0,8.091V35.062a8.093,8.093,0,0,0,8.091,8.091H35.737a2.018,2.018,0,0,0,2.023-2.023V39.782a2.039,2.039,0,0,0-.75-1.576,18.8,18.8,0,0,1,0-6.3A2.009,2.009,0,0,0,37.76,30.343ZM10.788,11.294a.507.507,0,0,1,.506-.506H29.163a.507.507,0,0,1,.506.506V12.98a.507.507,0,0,1-.506.506H11.294a.507.507,0,0,1-.506-.506Zm0,5.394a.507.507,0,0,1,.506-.506H29.163a.507.507,0,0,1,.506.506v1.686a.507.507,0,0,1-.506.506H11.294a.507.507,0,0,1-.506-.506ZM32.146,37.76H8.091a2.7,2.7,0,0,1,0-5.394H32.146A30.344,30.344,0,0,0,32.146,37.76Z" fill="#616161" />
              </svg>
            </div>
            <div class="link-buttons">
              <p>People</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="55.345" height="35.22" viewBox="0 0 55.345 35.22">
                <path id="Icon_material-people" data-name="Icon material-people" d="M39.235,22.594a7.547,7.547,0,1,0-7.547-7.547A7.516,7.516,0,0,0,39.235,22.594Zm-20.126,0a7.547,7.547,0,1,0-7.547-7.547A7.516,7.516,0,0,0,19.11,22.594Zm0,5.031c-5.862,0-17.61,2.943-17.61,8.8V42.72H36.72V36.431C36.72,30.569,24.971,27.626,19.11,27.626Zm20.126,0c-.73,0-1.56.05-2.44.126,2.918,2.113,4.956,4.956,4.956,8.679V42.72H56.845V36.431C56.845,30.569,45.1,27.626,39.235,27.626Z" transform="translate(-1.5 -7.5)" fill="#616161" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-cont">
      <div class="side-text-cont-picture">
        <div class="landing-vert-text">
          High Altitude Balloon
        </div>
        <div class="vert-line" />
      </div>
      <div class="picture">
        <img src="~/assets/haps-balloon.png" alt="HAPS Balloon">
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
  .landing-sect{
    z-index: 0 !important;
    min-height: 200px;
    height: auto;
    width: 100%;
    background: #36598F;
  }
  .side-text-cont{
    transform: rotate(0.25turn) translate(50%,-100%);
    height: auto;
    width: 350px;
  }
  .landing-vert-text{
    float: left;
    font: var(--primary-font-style-normal) normal 300 18px var(--primary-font-family-proxima-nova);
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
  .hor-line{
    transform: translate(0, 11px);
    border-left: 450px solid var(--pure-white);
    height: 2px;
    float: right;
  }
  .content-cont{
    float:left;
    margin: 100px 50px;
    width: auto;
  }
  .right-cont{
    float:left;
    margin: 100px 50px;
    width: auto;
  }
  .landing-text-cont{
    margin-left: 300px;
    width: 600px;
    float: left;
  }
  .landing-main-text{
    float: left;
    font: normal normal normal 60px Proxima Nova;
    letter-spacing: var(--primary-character-spacing-0);
    color: var(--pure-white);
    text-align: left;
    opacity: 1;
  }
  .landing-sub-text{
    margin-top: 20px;
    float: left;
    letter-spacing: var(--primary-character-spacing-0);
    color: var(--pure-white);
    text-align: left;
    font: normal normal 100 21px/25px Proxima Nova;
    opacity: 1;
  }
  .landing-sub-text-small{
    margin-top: 35px;
    float: left;
    letter-spacing: var(--primary-character-spacing-0);
    color: var(--pure-white);
    text-align: left;
    font: normal normal 100 21px/25px Proxima Nova;
    opacity: 1;
  }
  .link-buttons{
    float: left;
    margin: 20px 60px 0 0;
    width: 236px;
    height: 65px;
    background: #FFFFFF 0 0 no-repeat padding-box;
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
    font: normal normal 300 18px Proxima Nova;
    letter-spacing: 0;
    color: #616161;
    opacity: 1;
    margin: 21px 25px;
  }
  .picture{
    margin-left: 50px;
  }
  .picture img {
    height: 600px;
  }
  .side-text-cont-picture{
    transform: rotate(0.25turn) translate(50%,-450px);
    height: auto;
    width: 350px;
  }
</style>
