<template>
  <div class="box">
    <!-- 背景图片 -->
    <div class="main">
      <container>
        <div class="right-box">
          <div v-if="isVisible == 0">
            <regist-box @goForgetUpwd="goForgetUpwd" />
          </div>
          <div v-else>
            <forget-upwd @backUpwdReg="backUpwdReg" />
          </div>
        </div>
      </container>
    </div>
  </div>
</template>
<script>
import registBox from "./childCmps/regist-box";
import forgetUpwd from "./childCmps/forget-upwd";
export default {
  data() {
    return {
      //
      isVisible: 0,
    };
  },
  mounted() {},
  watch: {
    $route() {
      // history.pushState(null, null, document.URL);
      //   window.addEventListener('popstate', function () {
      //       history.pushState(null, null, document.URL);
      //   });
    },
  },
  methods: {
    backUpwdReg(data) {
      console.log("接收到了", data);
      this.isVisible = data;
    },
    goForgetUpwd(data) {
      this.isVisible = data;
    },
  },
  components: {
    registBox,
    forgetUpwd,
  },
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
}
.my-main {
  width: 100px;
  height: 100%;
  background: red;
}
.main {
  /* min-height: calc(100vh - 179px); */
  height: 100%;
  background: url("~@/assets/img/bg_Img2.png") no-repeat;
  background-size: 100% 100%;
}
.right-box {
  position: relative;
  height: 100%;
}
</style>
