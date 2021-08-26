<template>
  <div class="location-cont">
    <div class="location-head">
      Contact Us
    </div>
    <div class="location-info-cont">
      <div class="location-info">
        Liverpool Hope University,<br>
        Hope Park,<br>
        Liverpool<br>
        L16 9JD
        <br><br>
        Phone: <a href="tel:1512913000">+44 (0)151 291 3000</a> <br><br>
        Email: <a href="mailto:haps@hope.ac.uk">haps@hope.ac.uk</a>
        <a style="text-decoration: none" target="_blank" href="https://www.google.com/maps/dir//Liverpool+Hope+University+-+Hope+Park+Campus+Liverpool+Hope+University+Hope+Park+L16+9JD+United+Kingdom/@53.3908007,-2.8922988,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x487b21167b7bd2df:0x259667069a5e6423">
          <div class="more-button">
            <p>
              Get Directions
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
        </a>
      </div>
      <div class="google-maps">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              id="gmap_canvas"
              width="775"
              height="452"
              src="https://maps.google.com/maps?q=liverpool%20hope%20university&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Location'
}
</script>

<style scoped>
  .mapouter{
    position:relative;text-align:right;height:452px;width:775px;
  }
  .gmap_canvas{
    overflow:hidden;
    background:none!important;
    height:452px;
    width:775px;
  }
  .google-maps{
    float: left;
    margin-right: 250px;
  }
  .location-cont{
    margin-top: clamp(1px, 3vw, 50px);
    margin-bottom: 0;
  }
  .location-head{
    width: 100%;
    text-align: center;
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 55px var(--primary-font-family-proxima-nova);
    font-size: clamp(3rem, 6vw, 4rem);
    letter-spacing: 0;
    color: #394248;
    opacity: 1;
  }
  .location-info-cont{
    margin-left: 300px;
    margin-top: 20px;
  }
  .location-info{
    float: left;
    text-align: left;
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 32px var(--primary-font-family-proxima-nova);
    letter-spacing: 0;
    color: #394248;
    opacity: 1;
  }
  .location-info a{
    text-decoration: underline;
    color: #36598F;
  }
  .more-button{
    margin-top: 50px;
    width: 250px;
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
    font: var(--primary-font-style-normal) normal var(--primary-font-weight-bold) 18px var(--primary-font-family-proxima-nova);
    letter-spacing: 2px;
    color: #394248;
  }
  .more-button svg{
    height: 18px;
    transform: translateY(4px);
  }

</style>
