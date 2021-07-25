<template>
  <div class="head">
    <img src="~/assets/logo.png" alt="HAPS Logo" class="header-logo">
    <div class="header-cont">
      <div class="center-links">
        <div class="logo-text">
          HAPS
        </div>
        <ul class="header-links">
          <nav role="navigation">
            <li>Publications</li>
            <li>About</li>
            <li>People</li>
            <li>Press Releases</li>
            <li class="join-button">
              Join Us
            </li>
          </nav>
        </ul>
        <div class="mobile-nav">
          <ul>
            <li class="join-button">
              Join Us
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Proxima+Nova');
@font-face {
  font-family: Proxima Nova;
  src: url('https://fonts.googleapis.com/css?family=Proxima+Nova');
}
*{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
html, body{
  /* padding-left: calc(50vw - 750px); To be used for content
    padding-right: calc(50vw - 750px); */
  overflow-x: hidden;
  margin: 0 !important;
  padding: 0 !important;
  background-color: #f8f8f8;
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;
  -webkit-scroll-behavior: smooth;
}
body{
  overflow-x: hidden;
  margin: 0;
  background-color: #f8f8f8;
  height: 100%;
  width: 100%;
}
button{
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

  :root {
    /* Colors: */
    --HAPS-grey: #616161;
    --HAPS-dark-grey: #394248;
    --HAPS-blue-light: #9ACBEC;
    --HAPS-blue: #36598F;
    --pure-white: #FFFFFF;

    /* Font/text values */
    --primary-font-family-proxima-nova: Proxima Nova;
    --primary-font-style-normal: normal;
    --primary-font-weight-normal: normal;
    --primary-font-size-20: 20px;
    --primary-font-size-40: 40px;
    --primary-font-size-61: 61px;
    --primary-character-spacing-0: 0px;
    --primary-character-spacing-0-3: 0.3px;
    --primary-line-spacing-30: 30px;
    --primary-line-spacing-49: 49px;
    --primary-line-spacing-74: 74px;
  }

  /* Character Styles */
  .unnamed-character-style-1 {
    font-family: var(--primary-font-family-proxima-nova);
    font-style: var(--primary-font-style-normal);
    font-weight: var(--primary-font-weight-normal);
    font-size: var(--primary-font-size-61);
    line-height: var(--primary-line-spacing-74);
    letter-spacing: var(--primary-character-spacing-0);
    color: var(--pure-white);
  }
  .unnamed-character-style-2 {
    font-family: var(--primary-font-family-proxima-nova);
    font-style: var(--primary-font-style-normal);
    font-weight: var(--primary-font-weight-normal);
    font-size: var(--primary-font-size-40);
    line-height: var(--primary-line-spacing-49);
    letter-spacing: var(--primary-character-spacing-0);
    color: var(--HAPS-dark-grey);
  }
  .unnamed-character-style-3 {
    font-family: var(--primary-font-family-proxima-nova);
    font-style: var(--primary-font-style-normal);
    font-weight: var(--primary-font-weight-normal);
    font-size: var(--primary-font-size-20);
    line-height: var(--primary-line-spacing-30);
    letter-spacing: var(--primary-character-spacing-0-3);
    color: var(--HAPS-dark-grey);
  }
  .head{
    position: relative;
    background-color: rgba(0,0,0,0);
    min-height: 150px;
    overflow: hidden;
    z-index: 10 !important;
  }
  .logo-text{
    color: var(--HAPS-dark-grey);
    float:left;
    font: var(--primary-font-style-normal) normal 600 65px var(--primary-font-family-proxima-nova);
    letter-spacing: var(--primary-character-spacing-0);
    text-align: left;
    opacity: 1;
    margin: 0;
    position: relative;
    top: 5px;
  }
  .header-cont{
    width: 100%;
    background-color: var(--pure-white);
    overflow: visible;
  }
  .center-links{
    height: 100%;
    overflow: hidden;
  }
  .header-links{
    height: 100%;
    display: flex;
    float:right;
    margin-right: 50px;
  }
  .header-links nav{
    height: auto;
  }
  .header-links li{
    display: inline;
    list-style-type: none;
    float:left;
    font: var(--primary-font-style-normal) normal 600 22px var(--primary-font-family-proxima-nova);
    letter-spacing: var(--primary-character-spacing-0);
    text-align: left;
    color: var(--HAPS-dark-grey);
    opacity: 1;
    margin: 30px 35px 0 35px;
  }
  .header-logo {
    position: relative;
    float: left;
    width:160px;
    top: -15px;
    margin: 20px 20px 0 60px;
  }
  .join-button{
    background-color: var(--HAPS-blue);
    padding: 10px 20px;
    color: var(--pure-white) !important;
    border-radius: 8px;
    margin-top: 20px !important;
  }
  .mobile-nav{
    display: none;
    margin-top: 30px;
    margin-right: 40px;
  }
@media screen and (max-width: 1350px) {
  .header-cont{
    width: 100%;
    background-color: var(--pure-white);
    overflow: visible;
  }
  .join-button{
    background-color: var(--HAPS-blue);
    padding: 6px 16px;
    color: var(--pure-white) !important;
    font: var(--primary-font-style-normal) normal 600 18px var(--primary-font-family-proxima-nova) !important;
    border-radius: 8px;
    margin-right: 40px;
    margin-top: 15px !important;
  }
  .logo-text{
    font: var(--primary-font-style-normal) normal 600 45px var(--primary-font-family-proxima-nova);
    letter-spacing: var(--primary-character-spacing-0);
    text-align: left;
    opacity: 1;
    margin: 0;
    position: relative;
    top:15px;
  }
  .header-logo{
    position: relative;
    float: left;
    width:130px;
    /*top: -65px;*/
    margin-left: 60px;
    z-index: 999 !important;
  }
  .header-links{
    height: 100%;
    display: flex;
    float:right;
    margin-right: 20px;
  }
  .header-links li{
    display: inline;
    list-style-type: none;
    float:left;
    font: var(--primary-font-style-normal) normal 600 17px var(--primary-font-family-proxima-nova);
    letter-spacing: var(--primary-character-spacing-0);
    text-align: left;
    color: var(--HAPS-dark-grey);
    opacity: 1;
    margin: 20px 20px 15px 15px;

  }
}
  @media screen and (max-width: 950px) {
    .header-links{
      display: none;
    }
    .mobile-nav {
      display: block;
      float: right;
      margin: 20px 30px 0;
    }
    .header-cont{
      height: 80px;
    }
    .header-logo{
      position: relative;
      float: left;
      width:130px;
      top: -60px;
      margin-left: 60px;
    }
    .mobile-nav li{
      display: inline;
      list-style-type: none;
      float:left;
      font: var(--primary-font-style-normal) normal 600 22px var(--primary-font-family-proxima-nova);
      letter-spacing: var(--primary-character-spacing-0);
      text-align: left;
      color: var(--HAPS-dark-grey);
      opacity: 1;
      /*margin: 39px 35px 0px 35px;*/
    }
    .join-button{
      background-color: var(--HAPS-blue);
      padding: 8px 20px;
      color: var(--pure-white) !important;
      font: var(--primary-font-style-normal) normal 600 20px var(--primary-font-family-proxima-nova) !important;
      border-radius: 8px;
      margin-top: 0 !important;
      margin-right: 40px;
    }
  }
</style>
