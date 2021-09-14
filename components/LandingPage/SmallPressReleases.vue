<template>
  <div class="small-press-cont">
    <div>
      <div class="press-release-top">
        <div class="press-release-text">
          <div>
            Read our
          </div>
          <div>
            <span class="highlight-text"> Press Releases</span>
          </div>
        </div>
        <NuxtLink to="press-releases">
          <div class="view-button">
            <p>
              View All
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25.243" viewBox="0 0 24 25.243">
                <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(-6 -5.379)">
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M7.5,18h21"
                    fill="none"
                    stroke="#616161"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M18,7.5,28.5,18,18,28.5"
                    fill="none"
                    stroke="#616161"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                  />
                </g>
              </svg>
            </p>
          </div>
        </NuxtLink>
      </div>
      <div class="press-release-tiles">
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
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmallPressReleases'
}
</script>

<style scoped>
  .small-press-cont{
    margin: clamp(1px, 2vw, 50px) clamp(1px, 4vw, 150px) 0;
    display: flex;
    justify-content: center;
  }
  .view-button{
    float: right;
    margin-right: clamp(20px, 5vw, 300px);
    margin-top: 10px;
    margin-bottom: clamp(5px, 5vw, 40px);
    width: clamp(130px, 50vw, 250px);
    height: clamp(50px, 10vw, 70px);
    background: var(--pure-white) 0 0 no-repeat padding-box;
    border: 1px solid #707070;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .view-button p{
    opacity: 1;
    text-align: left;
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-bold) 18px var(--primary-font-family-proxima-nova);
    font-size: clamp(0.9rem, 3vw, 1.2rem);
    letter-spacing: 2px;
    color: var(--HAPS-dark-grey);
  }
  .view-button svg{
    height: 18px;
    transform: translateY(4px);
  }
  .press-release-text{
    float: left;
    width: auto;
    text-align: left;
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 55px var(--primary-font-family-proxima-nova);
    font-size: clamp(2rem, 5vw, 3.5rem);
    letter-spacing: 0;
    color: var(--HAPS-dark-grey);
    opacity: 1;
  }
  .highlight-text{
    background: linear-gradient(to top, #9ACBEC 50%, transparent 50%);
  }
  .press-release-tiles{
    margin-top: clamp(1px, 2vw, 50px);
    display: flex;
  }
  .single-tile{
    float: left;
    margin: 0 clamp(1px, 4vw, 40px) clamp(5px, 4vw, 25px) 0;
    width: clamp(300px, 25vw, 440px);
    height: 450px;
  }
  @media screen and (max-width: 1056px){
    .single-tile{
      height: auto;
    }
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
