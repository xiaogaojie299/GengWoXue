<template>
  <div class="box">
    <!-- 头部个人资料 -->
    <div class="title">个人资料</div>
    <!-- 中间内容 -->
    <div class="main">
      <!-- 基本信息 -->
      <div class="nav-bar">
        <span
          @click="go_url(item.path), checkoutTitle(index)"
          :class="{ active: isRouter(item.path) }"
          v-for="(item, index) in navbarList"
          :key="index"
          >{{ item.title }}</span
        >
        <!-- <span>账号安全</span> -->
      </div>
      <!-- 判断是否是基本信息还是账号安全 -->
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navbarList: [
        {
          path: "personal-info",
          title: "基本信息",
        },
        {
          path: "account-security",
          title: "账号安全",
        },
      ],
      // 默认选中基本信息
      currentIndex: 0,
    };
  },
  methods: {
    isRouter(url) {
      return url == this.$route.name;
    },
    go_url(url) {
      this.$router.push({
        path: "/page/personalCenter/personal/data/" + url,
      });
    },
    checkoutTitle(index) {
      this.currentIndex = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  // padding-left: 44px;
}
.title {
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #343434;
  margin: 20px 0;
}
// 选中
.active {
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #333333;
}
.main {
  width: 1014px;
  // height: 1080px;
  padding: 18px 23px;
  background: #f8f9f9;
  .nav-bar {
    width: 100%;
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #7b7b7b;
    line-height: 54px;
    & > :first-child {
      margin-right: 25px;
    }
  }
}
</style>
