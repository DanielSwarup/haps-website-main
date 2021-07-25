<template>
  <div>
    <Header />
    <div class="holder">TEXT</div>
    <Footer />
  </div>
</template>

<script>
export default {
  head: {
    title: 'HAPS'
  }
}
</script>
<style>
  .holder{
    position: relative;
    z-index: 0 !important;
    min-height: 500px;
    top: -100px;
    height: auto;
    width: 100%;
    background: coral;
  }
</style>
