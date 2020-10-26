<template>
  <div id="box">
    <!-- 背景图片 -->
    <div class="main">
      <!-- 右侧边框 -->
      <div class="right-box">
        <!-- 登录盒子 -->
        <div v-if="isVisible == 0">
          <regist-box @goForgetUpwd="goForgetUpwd" />
        </div>
        <div v-else>
          <forget-upwd @backUpwdReg="backUpwdReg" />
        </div>
      </div>
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
.main {
  min-height: calc(100vh - 179px);
  background: url("~@/assets/img/bg_Img2.png") no-repeat;
  background-size: 100% 100%;
}
.right-box {
  position: relative;
}
</style>
