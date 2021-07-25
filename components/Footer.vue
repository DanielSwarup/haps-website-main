<template>
  <div class="footer-cont">
    <div class="footer-logo">
      <img src="~/assets/logo.png" alt="HAPS Logo">
      <div>
        Test
      </div>
    </div>
    <div class="haps-links">
      Test
    </div>
    <div class="haps-links">
      Test
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .footer-cont{
    width: 100%;
    min-height: 500px;
    background: #F0F6FA 0% 0% no-repeat padding-box;
    opacity: 1;
  }
  .footer-logo{
    float: left;
    margin: 50px 210px;
  }
  .footer-logo img{
    height: 210px;
  }
  .haps-links{
    float:left;
  }
</style>
