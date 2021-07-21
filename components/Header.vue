<template>
  <div class = "head">
    <div class="header-cont">
      sadas
    </div>
    <img src="~/assets/logo.png" alt="HAPS Logo" class="header-logo">
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
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

</style>

<style scoped>
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
    background-color: #282828;
  }
  .header-cont{
    width: 100%;
    height: 100px;
    background-color: #FFFFFF;
  }
  .header-logo {
    position: relative;
    width:180px;
    top: -90px;
  }
</style>
