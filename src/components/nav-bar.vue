<template>
  <div class="nav">
    <!-- 左侧标题 -->
    <div class="left-box">
      <div class="left-title">
        <!-- 图片 -->
        <img src="@/assets/img/logo_slices/logo.png" alt="" />
        <span></span>
      </div>
      <!-- 中间导航栏 -->
      <div class="navbar">
        <div
          v-for="(item, index) in navBarList"
          :key="index"
          :class="{
            'navbar-item': true,
            active1: $route.path.indexOf(item.path) != -1,
          }"
          @click="checkRouter(item.path)"
        >
          <!-- :class="{ 'navbar-item': true, active: item.path == $route.path }" -->
          {{ item.title }}
          <span
            :class="{
              inline: true,
              active: $route.path.indexOf(item.path) != -1,
            }"
          ></span>
        </div>
        <div @click="go_personalCenter()">个人中心</div>
      </div>
    </div>

    <!-- 右侧登陆注册 -->
    <div class="right-content">
      <!-- 客服电话 -->
      <div class="kf-box">
        <!-- Icon -->
        <div class="kf-icon">⭕</div>
        <!-- 数字 -->
        <div class="num">400-88888888</div>
      </div>
      <!-- 登录注册 -->
      <div
        :class="{ regist: true, active1: '/register' == $route.path }"
        @click="go_register"
      >
        登录/注册
        <span
          :class="{ inline: true, active: '/register' == $route.path }"
        ></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const url = "/page";
    return {
      navBarList: [
        { title: "首页", path: url + "/home" },
        { title: "问答广场", path: url + "/answersPlaza" },
        { title: "办公中心", path: url + "/officeCenter" },
        { title: "APP下载", path: url + "/appInstall" },
        { title: "关于我们", path: url + "/about" },
      ],
    };
  },

  methods: {
    // 点击nav-bar切换路由
    checkRouter(path) {
      this.$router.push({
        path,
      });
      console.log("$router", this.$route);
      // this.activeRouter=this.$route.path;
    },
    go_personalCenter() {
      console.log("跳转到个人中心");
      this.$router.push({
        path: "/page/personalCenter/personal",
      });
    },
    // 点击跳转到登录注册页面
    go_register() {
      this.$router.push({
        path: "/page/register",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 80px;
  background: #ffffff;
  box-shadow: 1px 13px 18px 0px rgba(233, 233, 233, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left-box {
  display: flex;
}
.left-title {
  width: 107px;
  /* height: 34px; */
  margin-right: 55px;
  color: #eb002a;
  display: flex;
  align-items: center;
  position: relative;
}
.left-title > span {
  height: 12px;
  width: 1px;
  background: #e0e0e0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
}
.left-title > img {
  width: 107px;
  height: 34px;
}
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.navbar > .navbar-item {
  position: relative;
  margin-right: 86px;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  /* color: #191616; */
  line-height: 32px;
  height: 80px;
}
/* 下面横线 */
.inline {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 44px;
  height: 4px;
}
.right-content,
.kf-box,
.regist,
.navbar > .navbar-item {
  display: flex;
  align-items: center;
}
.kf-box > .kf-icon {
  margin-right: 2px;
}
.kf-box > .num {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
}
.regist {
  position: relative;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  margin-left: 10px;
  height: 80px;
}

/* 鼠标悬停后的样式 */
.navbar > .navbar-item:hover > .inline {
  border-bottom: 4px solid #eb002a;
}
.navbar-item:hover {
  color: #eb002a;
}
.active {
  border-bottom: 4px solid #eb002a;
  border-radius: 2px;
}
.active1 {
  color: #eb002a;
}
.regist:hover > .inline {
  border-bottom: 4px solid #eb002a;
}
.regist:hover {
  color: #eb002a;
}
</style>
