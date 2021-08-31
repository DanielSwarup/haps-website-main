<template>
  <div class="center">
    <div class="section-cont">
      <div class="section-blob-cont white">
        <div class="blob-top-cont">
          <div class="blob-head">
            Our<br>
            <span>Mission</span>
          </div>
        </div>
        <div class="blob-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a sagittis enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut porttitor dictum ex, non scelerisque ante consectetur et. Mauris dapibus fermentum diam, sed molestie dui consectetur nec. Phasellus mattis lorem non felis dictum, id interdum nunc interdum. Curabitur eu mauris mi. Duis id elit at lorem mollis dictum. Quisque ultrices ligula sit amet posuere cursus. Duis vestibulum tincidunt tempor. Maecenas molestie, dolor vitae sagittis pulvinar, eros est rhoncus lectus, sed cursus mi turpis eu dui. Vivamus ac iaculis ligula, nec ornare sem.
        </div>
        <NuxtLink to="/publications">
          <div class="view-button">
            <p>
              Publications
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
      <div class="section-blob-cont">
        <div class="blob-top-cont">
          <div class="blob-head">
            Our<br>
            <span>Background</span>
          </div>
        </div>
        <div class="blob-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a sagittis enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut porttitor dictum ex, non scelerisque ante consectetur et. Mauris dapibus fermentum diam, sed molestie dui consectetur nec. Phasellus mattis lorem non felis dictum, id interdum nunc interdum. Curabitur eu mauris mi. Duis id elit at lorem mollis dictum. Quisque ultrices ligula sit amet posuere cursus. Duis vestibulum tincidunt tempor. Maecenas molestie, dolor vitae sagittis pulvinar, eros est rhoncus lectus, sed cursus mi turpis eu dui. Vivamus ac iaculis ligula, nec ornare sem.
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
</template>

<script>
export default {
  name: 'AboutSection2'
}
</script>

<style scoped>
.center{
  display: flex;
  justify-content: center;
}
.white{
  background-color: white !important;
}
.section-cont{
  max-width: 1800px;
  margin: 0 clamp( 1px, 5vw, 150px);
}
.blob-top-cont{
  margin-top: clamp( 1px, 2vw, 50px);
}
.section-blob-cont{
  width: 100%;
  margin-bottom: clamp(5px, 5vw, 20px);
  min-height: 20px;
  background: var(--HAPS-light-grey) 0% 0% no-repeat padding-box;
}
.blob-content{
  margin: clamp( 1px, 2vw, 50px) clamp( 1px, 4vw, 100px);
  text-align: left;
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal)  20px var(--primary-font-family-proxima-nova);
  font-size: clamp(1rem, 3vw, 1.5rem);
  letter-spacing: var(--primary-character-spacing-0);
  color: var(--HAPS-grey);
  opacity: 1;
  padding-bottom: 10px;
}
.blob-head{
  float: left;
  padding-bottom: 10px;
  margin-left: clamp( 1px, 4vw, 100px);
  text-align: left;
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 55px var(--primary-font-family-proxima-nova);
  font-size: clamp(2rem, 5vw, 3.5rem);
  letter-spacing: 0;
  color: #394248;
  opacity: 1;
}
.blob-head span {
  background: linear-gradient(to top, #9ACBEC 50%, transparent 50%);
}
.view-button{
  float: right;
  margin-right: clamp(20px, 5vw, 300px);
  margin-top: 0;
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
