<template>
  <div id="app">
    <!-- <my-box v-show="true" class="my-box">
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
    </my-box> -->
    <router-view></router-view>
    <!-- 引入ifraim -->
    <!-- <iframe id="iframe1" width="100%" height="800" frameborder="0" scrolling="auto" src="../public/test.html"></iframe>  -->
  </div>
</template>
<script>
// import navBar from "./components/nav-bar"
// import container from "./components/container"
// import footers from "./components/footers"
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getKfList", 1);
  },
  components: {},
};
</script>

<style lang="scss">
.test {
  width: 100%;
  height: 1000px;
  border: 1px solid red;
}
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
button {
  background: #fff;
  border: none;
  outline: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}

// html {
// overflow-y: scroll;
// }
</style>
