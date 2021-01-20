<template>
  <div class="app">
    <!-- <my-box class="my-box">
      <div slot="my-header">
          <nav-bar></nav-bar>
      </div>
      <div class="my-main" slot="my-main">
        <router-view></router-view>
      </div>
      <div slot="my-footer">
        <footers></footers>
      </div>
    </my-box> -->

    <div class="my-box">
      <!-- 头部 -->
      <div class="my-header">
        <nav-bar></nav-bar>
      </div>
      <div class="my-main">
        <router-view></router-view>
      </div>
      <div class="my-footer">
        <footers></footers>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  components: {},
};
</script>

<style lang="scss" scoped>
.my-box{
   display: flex;
  flex-direction: column;
  min-height: 100vh;
  .my-header{
    height: 80px;
  }
  .my-footer{
    height:130px;
  }
  .my-main {
    flex: 1;
  }
}
</style>
