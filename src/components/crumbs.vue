<template>
  <div>
    <container>
      <div class="crumb">
        <div class="long-string"></div>
        <div class="crumb-title">
          <slot></slot>
        </div>
      </div>
    </container>
  </div> 
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.crumb {
  display: flex;
  align-items: center;
  margin: 18px 0;
  .long-string {
    width: 5px;
    height: 17px;
    background: #eb002a;
    border-radius: 4px;
  }
}
.crumb-title {
  font-size: 15px;
  margin-left: 8px;
  font-family: Source Han Sans CN;
  font-weight: 550;
  color: #343434;
}
</style>
