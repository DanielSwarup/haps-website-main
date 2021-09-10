<template>
  <div class="research-question-cont">
    <div class="center">
      <div>
        <div class="research-picture">
          <img src="~/assets/proteus.jpg" alt="NASA Proteus Project">
        </div>
        <div class="research-content">
          <div class="information-cont">
            <div class="mini-top">
              VISION:
            </div>
            <div class="research-question-text">
              OUR MISSION
            </div>
            <div class="research-brief">
              To facilitate digital access by accelerating the adoption of HAPS through researching at the cutting edge of technology and policy innovation, providing futuristic and solution oriented thinking within the HAPS ecosystem.
            </div>
            <NuxtLink to="/about">
              <div class="view-button">
                <p>
                  About Us
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResearchQuestion'
}
</script>

<style scoped>
  .center{
    display: flex;
    justify-content: center;
  }
  .research-question-cont{
    margin-top: 50px;
  }
  .research-picture{
    margin-left: clamp( 1px, 2vw, 50px);
    float: left;
    height: clamp(280px, 30vw, 600px);
    overflow: hidden;
  }
  .research-picture img{
    height: 100%;
  }
  .research-content{
    min-height: clamp(280px, 30vw, 600px);
    float: left;
    margin-left: clamp( 5px, 2vw, 50px);
    margin-right: clamp( 5px, 2vw, 50px);
    width: clamp(350px, 55vw, 1000px);
    background-color: #F0F6FA;
  }
  .information-cont{
    margin: clamp( 1px, 2vw, 50px) clamp( 5px, 4vw, 200px) clamp( 1px, 2vw, 50px) clamp( 5px, 4vw, 100px);
  }
  .mini-top{
    text-align: left;
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-bold) 15px var(--primary-font-family-proxima-nova);
    font-size: clamp(0.75rem, 2vw, 1rem);
    letter-spacing: 2px;
    color: #394248;
    opacity: 1;
  }
  .research-question-text{
    margin-top: 10px;
    text-align: left;
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 50px var(--primary-font-family-proxima-nova);
    font-size: clamp(2rem, 4vw, 3rem);
    letter-spacing: 1px;
    color: #394248;
    opacity: 1;
  }
  .research-brief{
    overflow: hidden;
    margin-top: 15px;
    text-align: left;
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 20px/25px var(--primary-font-family-proxima-nova);
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    letter-spacing: 1px;
    color: #394248;
    opacity: 1;
  }
  .view-button{
    float: left;
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
  .more-button svg{
    height: 18px;
    transform: translateY(4px);
  }
</style>
