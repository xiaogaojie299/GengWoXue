<template>
  <div>
    <div class="right-box">
      <!-- 顶部标题 -->
      <div class="top-title">
        <div @click="checkout(0)" :class="currentIndex == 0 ? 'active' : ''">
          密码登录
        </div>
        <div @click="checkout(1)" :class="currentIndex == 1 ? 'active' : ''">
          验证码登录
        </div>
      </div>
      <!-- 下面主体 -->
      <div class="main-box">
        <!-- 登陆模板 -->
        <input-template>
          <input
            slot="left-content"
            type="text"
            placeholder="请输入您的验证码"
          />
          <div slot="right-content">
            <div class="select_Icon"></div>
            <div class="right-txt">记住登录名</div>
          </div>
        </input-template>

        <input-template>
          <input slot="left-content" type="text" placeholder="请输入您的密码" />
          <div slot="right-content">
            <div style="color: #eb002a" class="right-txt">
              <span @click="forfet_upwd" v-if="currentIndex == 0"
                >忘记密码</span
              >
              <span v-else>获取验证码</span>
            </div>
          </div>
        </input-template>

        <!-- 登录按钮 -->
        <div class="btn" @click="go_home">登录</div>
        <!-- 还没有账号？ -->
        <div class="ling-title">
          还没有账号？申请<span style="color: #2d4cd6">入驻平台</span>获取账号
        </div>
      </div>
      <!-- 底部跳转到学生登陆 -->
      <div class="footer">学生登录 》</div>
    </div>
  </div>
</template>
<script>
import inputTemplate from "./input-template";
export default {
  data() {
    return {
      // 控制用户点击的是密码登录还是验证码登录
      currentIndex: 0,
    };
  },
  methods: {
    //   判断用户点击的密码登录还是验证码登录 0：密码登录。2：验证码登录
    checkout(i) {
      this.currentIndex = i;
    },
    forfet_upwd() {
      console.log("忘记密码");
      this.$emit("goForgetUpwd", 1);
    },
    // 跳转到首页
    go_home() {
      this.$router.push({
        path: "/",
      });
    },
  },
  components: {
    inputTemplate,
  },
};
</script>
<style scoped lang="scss">
input::-webkit-input-placeholder {
  /* WebKit browsers */
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #b8b8bf;
}

input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #b8b8bf;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #b8b8bf;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #b8b8bf;
}

.right-box {
  padding: 0 20px;
  // width: 400px;
  // height: 564px;
  width: 504px;
  // height: 795px;
  height: 80%;
  border: 1px solid red;
  background: #ffffff;
  box-shadow: 1px 13px 18px 0px rgba(158, 158, 158, 0.3);
  border-radius: 10px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  // top: 42px;
}
.top-title {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 35px;
  margin-bottom: 76px;
  color: #b8b8be;
}
//   选中时候字体颜色
.active {
  color: #191616;
}

.top-title div {
  font-size: 22px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  //   color: #b8b8be;
}

.main-box {
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    background: linear-gradient(110deg, #f13232, #ef763c);
    box-shadow: 1px 6px 9px 0px rgba(68, 6, 6, 0.32);
    border-radius: 0px;
    // 字体颜色
    font-size: 26px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;
    // 距离上个边距
    margin-top: 66px;
  }
  .ling-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    margin: 29px 0;
    color: #000000;
  }
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 110px;
  justify-content: center;
  align-items: center;
  display: flex;
  //   字体大小
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #000000;
  border-top: 1px solid #cdcdcd;
}
</style>
