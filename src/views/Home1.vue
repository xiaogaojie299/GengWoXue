<template>
  <div id="app">
    <my-box v-show="true" class="my-box">
      <div slot="my-header">
        <container>
          <nav-bar></nav-bar>
        </container>
      </div>
      <div style="height:100%" slot="my-main">
        <router-view></router-view>
      </div>

      <div slot="my-footer">
        <footers></footers>
      </div>
    </my-box>
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

<style lang="scss">
.test {
  width: 100%;
  height: 1000px;
  border: 1px solid red;
}
</style>
