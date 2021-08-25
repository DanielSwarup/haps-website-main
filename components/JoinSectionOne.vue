<template>
  <div class="section-cont">
    <div class="section-header">
      Join Us
    </div>
    <div class="section-blob-cont">
      <div class="blob-head">
        Be a Part of the<br>
        <span>Team</span>
      </div>
      <div class="blob-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a sagittis enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut porttitor dictum ex, non scelerisque ante consectetur et. Mauris dapibus fermentum diam, sed molestie dui consectetur nec. Phasellus mattis lorem non felis dictum, id interdum nunc interdum. Curabitur eu mauris mi. Duis id elit at lorem mollis dictum. Quisque ultrices ligula sit amet posuere cursus. Duis vestibulum tincidunt tempor. Maecenas molestie, dolor vitae sagittis pulvinar, eros est rhoncus lectus, sed cursus mi turpis eu dui. Vivamus ac iaculis ligula, nec ornare sem.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JoinSectionOne'
}
</script>

<style scoped>
.section-cont{
  margin: 0 clamp( 0px, 10%, 150px);
}
.section-header{
  margin-left: clamp( 0px, 10%, 100px);
  float: left;
  text-align: left;
  overflow: visible;
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) clamp(3rem, 6vw, 5rem) var(--primary-font-family-proxima-nova);
  letter-spacing: var(--primary-character-spacing-0);
  color: var(--HAPS-grey);
  opacity: 1;
  background: linear-gradient(to top, #9ACBEC 50%, transparent 50%);
}

.section-blob-cont{
  margin-top: clamp( 20px, 20%, 150px);
  width: 100%;
  min-height: 20px;
  background: var(--HAPS-light-grey) 0% 0% no-repeat padding-box;
}
.blob-content{
  margin: clamp( 0px, 10%, 50px) clamp( 0px, 10%, 100px);
  text-align: left;
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) clamp(0.9rem, 3vw, 1.5rem) var(--primary-font-family-proxima-nova);
  letter-spacing: var(--primary-character-spacing-0);
  color: var(--HAPS-grey);
  opacity: 1;
  padding-bottom: 10px;
}
.blob-head{
  padding-bottom: 10px;
  margin-right:  clamp( 0px, 10%, 100px);
  margin-left: clamp( 0px, 10%, 100px);
  margin-top: clamp( 0px, 10%, 50px);
  text-align: left;
  font: var(--primary-font-style-normal) normal var(--primary-font-weight-normal) clamp(2rem, 5vw, 3.5rem) var(--primary-font-family-proxima-nova);
  letter-spacing: 0px;
  color: #394248;
  opacity: 1;
}
.blob-head span{
  background: linear-gradient(to top, #9ACBEC 50%, transparent 50%);
}
</style>
