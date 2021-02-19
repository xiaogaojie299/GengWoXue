<template>
  <div>
    <div class="my-box">
      <!-- 头部 -->
      <div class="my-header">
        <slot name="my-header"></slot>
      </div>
      <div class="my-main">
        <slot name="my-main"></slot>
      </div>
      <div class="my-footer">
        <slot name="my-footer"></slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.my-box {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .my-header,.my-footer {
    height: 80px;
  width: 100vw !important;

  }
  .my-main {
    flex: 1;
    position: relative;
  }
}
</style>
