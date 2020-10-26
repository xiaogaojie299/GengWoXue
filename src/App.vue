<template>
  <div id="app">
    <my-box class="my-box">
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
// import navBar from "./components/nav-bar"
// import container from "./components/container"
// import footers from "./components/footers"
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="scss">
@import "./assets/css/my-style.scss";
// #box{
//   min-height: calc(100vh - 179px);
// }
* {
  padding: 0;
  margin: 0;
}
div,
span,
img,
input,
textarea {
  box-sizing: border-box;
}
// html {
// overflow-y: scroll;
// }
</style>
