<template>
  <div class="research-question-cont">
    <div class="research-picture">
      <img src="~/assets/proteus.jpg" alt="NASA Proteus Project">
    </div>
    <div class="research-content">
      <div class="information-cont">
        <div class="mini-top">
          OUR GOAL:
        </div>
        <div class="research-question-text">
          Research Question Lorem Ipsum?
        </div>
        <div class="research-brief">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis magna a elit volutpat varius. Nulla at urna at libero vehicula auctor ut in velit. Donec nec fringilla lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim metus, tempor vel condimentum in, ultricies vel libero. Praesent aliquam elit facilisis orci tempor, a volutpat elit auctor. Duis et sem vitae odio bibendum porta. Donec id ultricies nibh. Suspendisse a elit vel justo mattis elementum vel quis felis. Nulla vel convallis arcu.
        </div>
        <div class="more-button">
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
  .research-question-cont{
    padding-left: calc(50vw - 900px);
    padding-right: calc(50vw - 900px);
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
  }
  .research-picture{
    float: left;
    width:  700px;
    height: 600px;
    overflow: hidden;
  }
  .research-picture img{
    height: 100%;
  }
  .research-content{
    float: right;
    margin-left: 50px;
    height: 600px;
    width: 1000px;
    background-color: #F0F6FA;
  }
  .information-cont{
    margin: 30px 200px 0 100px;
    overflow: visible;
  }
  .mini-top{
    text-align: left;
    font: normal normal 600 15px Proxima Nova;
    letter-spacing: 2px;
    color: #394248;
    opacity: 1;
  }
  .research-question-text{
    margin-top: 20px;
    text-align: left;
    font: normal normal normal 50px Proxima Nova;
    letter-spacing: 1px;
    color: #394248;
    opacity: 1;
  }
  .research-brief{
    margin-top: 33px;
    text-align: left;
    font: normal normal normal 20px/30px Proxima Nova;
    letter-spacing: 1px;
    color: #394248;
    opacity: 1;
  }
  .more-button{
    margin-top: 30px;
    width: 200px;
    height: 60px;
    background: #FFFFFF 0 0 no-repeat padding-box;
    border: 1px solid #707070;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .more-button p{
    opacity: 1;
    text-align: left;
    font: normal normal 600 18px Proxima Nova;
    letter-spacing: 2px;
    color: #394248;
  }
  .more-button svg{
    height: 18px;
    transform: translateY(4px);
  }
  @media screen and (max-width: 1850px) {
    .research-question-cont{
      padding-left: calc(50vw - 750px);
      padding-right: calc(50vw - 750px);
    }
    .research-picture{
      height: 600px;
      width: 650px;
    }
    .research-content{
      margin-left: 50px;
      height: 600px;
      width: 800px;
    }
    .information-cont{
      margin: 30px 100px 0 100px;
    }
    .mini-top{
      font: normal normal 400 12px Proxima Nova;
    }
    .research-question-text{
      margin-top: 15px;
      font: normal normal normal 45px Proxima Nova;
    }
    .research-brief{
      margin-top: 25px;
      font: normal normal normal 22px Proxima Nova;
    }
  }
  @media screen and (max-width: 1550px) {
    .research-question-cont{
      padding-left: calc(50vw - 750px);
      padding-right: calc(50vw - 750px);
    }
    .research-picture{
      height: 500px;
      width: 550px;
      margin-left: 50px;
    }
    .research-content{
      margin-left: 50px;
      height: 500px;
      width: 750px;
    }
    .information-cont{
      margin: 30px 75px 0 75px;
    }
    .mini-top{
      font: normal normal 400 12px Proxima Nova;
    }
    .research-question-text{
      margin-top: 10px;
      font: normal normal normal 40px Proxima Nova;
    }
    .research-brief{
      margin-top: 15px;
      font: normal normal normal 20px Proxima Nova;
    }
    .more-button{
      margin-top: 30px;
      width: 200px;
      height: 60px;
    }
    .more-button p{
      font: normal normal 600 18px Proxima Nova;
    }
    .more-button svg{
      height: 18px;
      transform: translateY(4px);
    }
  }
</style>
