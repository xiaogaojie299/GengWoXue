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
export default {};
</script>
<style lang="scss" scoped>
.crumb {
  display: flex;
  align-items: center;
  margin: 18px 0;
  .long-string {
    width: 8px;
    height: 26px;
    background: #eb002a;
    border-radius: 4px;
  }
}
.crumb-title {
  font-size: 24px;
  margin-left: 12px;
  font-family: Source Han Sans CN;
  font-weight: 550;
  color: #343434;
}
</style>
