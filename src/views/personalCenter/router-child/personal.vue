<template>
  <div style="height: 100%">
    <!-- <button @click="go_child()">跳转</button> -->
    <!-- <router-view></router-view> -->
    <el-container style="height: 100%;margin-top:20px; border: 0px solid #eee">
      <el-aside height="100%" width="200px">
        <el-menu :default-active="'' + activeIndex">
          <el-menu-item index="1" @click="go_url('data', 1)"
            >个人资料</el-menu-item
          >
          <el-menu-item index="2" @click="go_url('wallet', 2)"
            >我的钱包</el-menu-item
          >
          <el-menu-item index="3" @click="go_url('promotion', 3)"
            >推广中心</el-menu-item
          >
          <!-- 我的学生 -->
          <el-menu-item index="4" @click="go_url('feedback', 4)"
            >问题反馈</el-menu-item
          >
          <!-- <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item> -->
        </el-menu>
      </el-aside>

      <el-container
        style="
          min-height: 100%;
          padding-left: 47px;
        "
      >
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

let routerUrl = "/page/personalCenter/personal/";

export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {};
  },
  computed: {
    activeIndex() {
      return this.$store.state.personalIndex;
    },
  },
  methods: {
    go_url(path, index) {
      console.log("跳转成功");
      this.$router.push({
        path: routerUrl + path,
      });
      this.$store.commit("setPersonalIndex", index);
    },
    created() {
      console.log("执行成功");
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .el-menu{
  background: #FAFAFA;
}
/deep/ .el-menu-item.is-active {
  background: linear-gradient(110deg, #f13232, #ef763c);
  font-size: 10px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}
/deep/ .el-menu-item {
  text-align: center;
}
// 修改左侧导航栏选中时的样式
.el-menu-item:hover {
  // background-color: #EF703C !important;
  // color: #38B2FF !important;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
