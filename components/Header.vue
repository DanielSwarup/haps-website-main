<template>
  <div class="head">
    <head>
      <link rel="stylesheet" href="https://use.typekit.net/jzu6vuf.css">
    </head>
    <NuxtLink to="/">
      <img src="~/assets/logo.png" alt="HAPS Logo" class="header-logo">
    </NuxtLink>
    <div class="header-cont">
      <div class="center-links">
        <div class="logo-text">
          <NuxtLink to="/">
            HAPS
          </NuxtLink>
        </div>
        <ul class="header-links">
          <nav role="navigation">
            <li>
              <NuxtLink to="/about">
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/people">
                People
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/publications">
                Publications
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/press-releases">
                Press Releases
              </NuxtLink>
            </li>
            <NuxtLink to="/join">
              <li class="join-button">
                Join Us
              </li>
            </NuxtLink>
          </nav>
        </ul>
        <div class="mobile-nav">
          <ul>
            <li class="join-button">
              <NuxtLink to="join">
                Join Us
              </NuxtLink>
            </li>
            <li class="header">
              <input id="menu-btn" class="menu-btn" type="checkbox">
              <label class="menu-icon" for="menu-btn">
                <div id="menuToggle">
                  <span />
                  <span />
                  <span />
                </div>
              </label>
              <ul class="menu">
                <li>
                  <NuxtLink to="/about">
                    About
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/people">
                    People
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/publications">
                    Publications
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/press-releases">
                    Press Releases
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true,
      default: 'High Altitude Platform Station, Liverpool Hope University'
    }
  },
  head () {
    return {
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Connecting People and Things via High Altitude Platform Stations (HAPS).'
        },
        {
          hid: 'twitter:image',
          name: 'og:image',
          content: '../assets/sharecard.png'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Connecting People and Things via High Altitude Platform Stations (HAPS).'
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'High Altitude Platform Station, Liverpool Hope University'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '../assets/sharecard.png'
        }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>

<style>
@import url("https://use.typekit.net/jzu6vuf.css");

/*@import url('https://fonts.googleapis.com/css?family=Proxima+Nova');*/
@font-face {
  font-family: Proxima Nova;
  src: url('https://use.typekit.net/jzu6vuf.css');
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
    --HAPS-light-grey: #F0F6FA;

    /* Font/text values */
    --primary-font-family-proxima-nova: proxima-nova;
    --primary-font-style-normal: normal;
    --primary-font-weight-normal: normal;
    --primary-font-weight-bold: 600;
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
    overflow: hidden;
    z-index: 10 !important;
  }
  .logo-text{
    color: var(--HAPS-dark-grey);
    float:left;
    font: var(--primary-font-style-normal) normal 600 65px var(--primary-font-family-proxima-nova);
    font-size: clamp(2rem, 4vw, 4rem);
    letter-spacing: var(--primary-character-spacing-0);
    text-align: left;
    opacity: 1;
    margin: 0;
    position: relative;
    top: 5px;
  }
  .logo-text a{
    text-decoration: none;
    color: var(--HAPS-dark-grey);
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
    float:right;
    margin-right: clamp( 1px, 2vw, 50px);
    margin-bottom: clamp( 10px, 2vw, 20px);
  }
  .header-links nav{
    height: auto;
  }
  .header-links li{
    float:left;
    font: var(--primary-font-style-normal) normal 600 20px var(--primary-font-family-proxima-nova);
    font-size: clamp(1rem, 1.1vw, 1.5rem);
    letter-spacing: var(--primary-character-spacing-0);
    text-align: left;
    color: var(--HAPS-dark-grey);
    opacity: 1;
    margin: clamp( 30px, 2vw, 35px) clamp( 1px, 1.5vw, 35px) 0;
  }
  .header-links a{
    text-decoration: none;
    color: var(--HAPS-dark-grey);
  }
  .header-logo {
    position: relative;
    float: left;
    width:clamp(120px, 10vw,160px);
    top: -15px;
    margin: 20px clamp( 1px, 2vw, 20px) 0 clamp( 1px, 1.5vw,60px);
    z-index: 99 !important;
  }
  .join-button{
    background-color: var(--HAPS-blue);
    padding: clamp( 5px, 2vw, 10px) clamp( 10px, 2vw, 20px);
    color: var(--pure-white) !important;
    border-radius: 8px;
    margin-top: clamp( 15px, 2vw, 20px) !important;
  }
  .mobile-nav{
    display: none;
    margin-top: 30px;
    margin-right: 40px;
  }
  @media screen and (max-width: 740px) {
    .header-links {
      display: none;
    }

    .mobile-nav {
      display: block;
      float: right;
      margin: clamp(10px, 1vw, 20px) clamp(20px, 1vw, 30px) 0;
    }

    .header-cont {
    }

    .logo-text {
      font-size: clamp(30px, 2vw, 40px);
    }

    .header-logo {
      position: relative;
      float: left;
      width: clamp(75px, 10vw, 120px);
      top: -10px;
      margin-left: clamp(1px, 1.5vw, 60px);
    }

    .mobile-nav li {
      display: inline;
      list-style-type: none;
      font: var(--primary-font-style-normal) normal 600 22px var(--primary-font-family-proxima-nova);
      letter-spacing: var(--primary-character-spacing-0);
      text-align: left;
      color: var(--HAPS-dark-grey);
      opacity: 1;
      /*margin: 39px 35px 0px 35px;*/
    }

    .join-button {
      background-color: var(--HAPS-blue);
      padding: clamp(5px, 2vw, 8px) clamp(10px, 2vw, 20px);
      color: var(--pure-white) !important;
      font: var(--primary-font-style-normal) normal 600 20px var(--primary-font-family-proxima-nova) !important;
      font-size: clamp(1rem, 1vw, 1.5rem) !important;
      border-radius: 8px;
      margin-top: 0 !important;
      margin-right: clamp(10px, 1vw, 40px);
      margin-bottom: clamp(10px, 1vw, 40px);
    }
    .join-button a{
      color: var(--pure-white) !important;
      text-decoration: none;
    }
    /* header */
    .header ul {
      margin: 0;
      padding: 0;
      list-style: none;
      overflow: hidden;
      background-color: #fff;
    }

    .header li a {
      color: var(--HAPS-dark-grey);
      display: block;
      padding: clamp( 13px, 1vw, 20px) clamp( 5px, 1vw, 10px);
      font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) 20px var(--primary-font-family-proxima-nova);
      font-size: clamp(1rem, 2vw, 1.5rem) !important;
      text-decoration: none;
    }

    .header li a:hover,
    .header .menu-btn:hover {
      background-color: #f4f4f4;
    }
    /* menu */
    .header .menu {
      clear: both;
      max-height: 0;
      transition: max-height .2s ease-out;
    }

    /* menu icon */

    .header .menu-icon {
      cursor: pointer;
      display: inline-block;
      float: right;
      padding: clamp(5px, 2vw, 20px) clamp(10px, 2vw, 20px);
      position: relative;
      user-select: none;
    }

    .header .menu-icon .nav-icon {
      background: #333;
      display: block;
      height: 2px;
      position: relative;
      transition: background .2s ease-out;
      width: 18px;
    }

    .header .menu-icon .nav-icon:before,
    .header .menu-icon .nav-icon:after {
      background: #333;
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      transition: all .2s ease-out;
      width: 100%;
    }

    .header .menu-icon .nav-icon:before {
      top: 5px;
    }

    .header .menu-icon .nav-icon:after {
      top: -5px;
    }

    /* menu btn */

    .header .menu-btn {
      display: none;
    }

    .header .menu-btn:checked ~ .menu {
      max-height: 100vh;
    }

    .header .menu-btn:checked ~ .menu-icon .nav-icon {
      background: transparent;
    }

    .header .menu-btn:checked ~ .menu-icon .nav-icon:before {
      transform: rotate(-45deg);
    }

    .header .menu-btn:checked ~ .menu-icon .nav-icon:after {
      transform: rotate(45deg);
    }

    .header .menu-btn:checked ~ .menu-icon:not(.steps) .nav-icon:before,
    .header .menu-btn:checked ~ .menu-icon:not(.steps) .nav-icon:after {
      top: 0;
    }
    @media (min-width: 48em) {
      .header li {
        float: left;
      }
      .header li a {
        padding: clamp( 15px, 2vw, 20px) clamp( 15px, 2vw, 20px);
      }
      .header .menu {
        clear: none;
        float: right;
        max-height: none;
      }
      .header .menu-icon {
        display: none;
      }
    }

    #menuToggle
    {
      /*display: block;*/
      /*position: relative;*/
      z-index: 1;

      -webkit-user-select: none;
      user-select: none;
    }

    #menuToggle a
    {
      text-decoration: none;
      color: #232323;

      transition: color 0.3s ease;
    }

    #menuToggle a:hover
    {
      color: tomato;
    }
    #menuToggle menu-btn
    {
      display: block;
      width: 60px;
      height: 32px;
      position: absolute;
      top: -7px;
      left: -5px;

      cursor: pointer;

      opacity: 0; /* hide this */
      z-index: 2; /* and place it over the hamburger */

      -webkit-touch-callout: none;
    }

    /*
     * Just a quick hamburger
     */
    #menuToggle span
    {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;

      background: #cdcdcd;
      border-radius: 3px;

      z-index: 1;

      transform-origin: 4px 0px;

      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
      background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
      opacity 0.55s ease;
    }

    #menuToggle span:first-child
    {
      transform-origin: 0% 0%;
    }

    #menuToggle span:nth-last-child(2)
    {
      transform-origin: 0% 100%;
    }

    /*
     * Transform all the slices of hamburger
     * into a crossmark.
     */
     .header .menu-btn:checked ~ span
    {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
      background: #232323;
    }

    /*
     * But let's hide the middle one.
     */
    .header .menu-btn:checked ~ span:nth-last-child(3)
    {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    /*
     * Ohyeah and the last one should go the other direction
     */
    .header .menu-btn:checked ~ span:nth-last-child(2)
    {
      transform: rotate(-45deg) translate(0, -1px);
    }

    /*
     * Make this absolute positioned
     * at the top left of the screen
     */
    #menu
    {
      position: absolute;
      width: 300px;
      margin: -100px 0 0 -50px;
      padding: 50px;
      padding-top: 125px;

      background: #ededed;
      list-style-type: none;
      -webkit-font-smoothing: antialiased;
      /* to stop flickering of text in safari */

      transform-origin: 0% 0%;
      transform: translate(-100%, 0);

      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    }

    #menu li
    {
      padding: 10px 0;
      font-size: 22px;
    }

    /*
     * And let's slide it in from the left
     */
    .header .menu-btn:checked ~ ul
    {
      transform: none;
    }
  }

</style>
