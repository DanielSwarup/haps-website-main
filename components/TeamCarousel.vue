<template>
  <div class="team-carousel-cont">
    <div class="team-content">
      <div class="team-header">
        The Team
      </div>
      <div class="member-cont">
        <div class="member-info">
          <div class="member-picture">
            <img src="~/assets/anicho.jpg">
          </div>
          <div class="member-personal">
            <div class="member-name">
              Dr Ogbonnaya Anicho
            </div>
            <div class="member-excerpt">
              Dr. Ogbonnaya Anicho, (Member, IEEE), holds a PhD in Computer Science from Liverpool Hope University, MSc (Distinction) in Telecommunications with Management from University of South Wales and BSc in Computing and Information Technologies from University of Derby. His research work focuses on modelling and simulating multiple High Altitude Platform Stations (HAPS) with autonomous capabilities for communications connectivity. Central to the research is exploring ways of extending broadband connectivity to rural remote locations; a key requirement for participation in the digital economy.
            </div>
            <NuxtLink to="/people">
              <div class="view-button">
                <p>
                  The Team
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
  name: 'TeamCarousel'
}
</script>

<style scoped>
  .team-carousel-cont{
    margin-top: 50px;
    width: 100%;
    background: var(--HAPS-blue) 0 0 no-repeat padding-box;
    height: auto;
  }
  .team-content{
    margin: 35px 250px 70px;
  }
  .team-header{
    padding-bottom: 10px;
    text-align: left;
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 55px/68px var(--primary-font-family-proxima-nova);
    letter-spacing: 0;
    color: #FFFFFF;
    opacity: 1;
  }
  .member-cont{
    width: 1445px;
    min-height: 100px;
    background:var(--HAPS-light-grey) 0% 0% no-repeat padding-box;
    opacity: 1;
  }
  .member-info{
    margin-top: 100px;
  }
  .member-picture{
    float: left;
    width: 352px;
    height: 440px;
    margin-left: 150px;
  }
  .member-picture img{
    width: 100%;
  }
  .member-personal{
    float: left;
    margin-left: 150px;
    margin-bottom: 70px;
  }
  .member-name{
    padding-bottom: 5px;
    text-align: left;
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 40px/49px var(--primary-font-family-proxima-nova);
    letter-spacing: 0px;
    color: #394248;
    opacity: 1;
  }
  .member-excerpt{
    margin-top: 20px;
    margin-bottom: 20px;
    width: 650px;
    text-align: left;
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 20px/30px var(--primary-font-family-proxima-nova);
    letter-spacing: 0.3px;
    color: #394248;
    opacity: 1;
  }
  .view-button{
    float: left;
    margin-right: 300px;
    margin-top: 40px;
    width: 200px;
    height: 60px;
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
    letter-spacing: 2px;
    color: var(--HAPS-dark-grey);
  }
  .view-button svg{
    height: 18px;
    transform: translateY(4px);
  }
</style>
