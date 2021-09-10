<template>
  <div class="team-carousel-cont">
    <div class="team-content">
      <div class="team-header">
        The Team
      </div>
      <div class="member-cont">
        <div class="member-info">
          <div class="member-picture">
            <img src="~/assets/Atulya-Nagar.jpg" alt="">
          </div>
          <div class="member-personal">
            <div class="member-name">
              Prof. Atulya K. Nagar
            </div>
            <div class="member-excerpt">
              Prof. Atulya K. Nagar holds the Foundation Chair as Professor of Mathematical Sciences and is the Pro Vice-Chancellor (Research) at Liverpool Hope University, United Kingdom. He is responsible for developing Sciences and Engineering and has been the Head of the School of Mathematics, Computer Science and Engineering which he established at the University. He received a prestigious Commonwealth Fellowship for pursuing his doctorate (DPhil) in Applied Nonlinear Mathematics, which he earned from the University of York (UK) in 1996. He holds BSc (Hons), MSc, and MPhil (with distinction) in Mathematical Physics from the MDS University of Ajmer, India. Prior to joining Liverpool Hope, he was with the Department of Mathematical Sciences, and later at the Department of Systems Engineering, at Brunel University, London.
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
    margin-top: clamp(1px, 2vw, 50px);
    background: var(--HAPS-blue) 0 0 no-repeat padding-box;
    display: flex;
    justify-content: center;
  }
  .team-content{
    margin: clamp(10px, 2vw, 35px) clamp(1px, 2vw, 250px) clamp(20px, 10vw, 70px);
  }
  .team-header{
    padding-bottom:  clamp(1px, 5vw, 10px);
    text-align: left;
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 55px/68px var(--primary-font-family-proxima-nova);
    font-size: clamp(2rem, 5vw, 3.5rem);
    letter-spacing: 0;
    color: #FFFFFF;
    opacity: 1;
  }
  .member-cont{
    width: clamp(400px, 80vw, 1445px);
    background:var(--HAPS-light-grey) 0% 0% no-repeat padding-box;
    opacity: 1;
  }
  .member-info{
    margin-top: clamp(15px, 4vw, 100px);
  }
  .member-picture{
    float: left ;
    width: clamp(250px, 20vw, 352px);
    height: clamp(300px, 20vw, 440px);
    margin-left: clamp(50px, 4vw, 150px);
    overflow: hidden;
  }
  .member-picture img{
    width: 100%;
  }
  .member-personal{
    float: left;
    margin-left: clamp(15px, 4vw, 200px);
    margin-right: clamp(15px, 2vw, 150px);
    margin-bottom: clamp(10px, 2vw, 70px);
  }
  .member-name{
    padding-bottom: 5px;
    text-align: left;
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 40px/49px var(--primary-font-family-proxima-nova);
    font-size: clamp(1.75rem, 4vw, 2.2rem);
    letter-spacing: 0px;
    color: #394248;
    opacity: 1;
  }
  .member-excerpt{
    width: clamp(300px, 40vw, 750px);
    margin-top: clamp(1px, 1vw, 20px);
    margin-bottom: 20px;
    text-align: left;
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 20px/30px var(--primary-font-family-proxima-nova);
    font-size: clamp(0.8rem, 2vw, 1.1rem);
    letter-spacing: 0.3px;
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
</style>
