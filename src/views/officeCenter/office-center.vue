<template>
  <container>
  <el-container class="box banner">
    <!-- 侧边栏 -->
    <el-aside>
      <el-menu
      unique-opened
      router
        :default-active="activeIndex"
        background-color="#EF753C"
        text-color="#F1F1F1"
        active-text-color="#ef753c"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="icons">
            
            </i>
            <span>课程表</span>
          </template>
          <el-menu-item class="son-item" index="/page/officeCenter/OfficeCenterIndex/test2">课程表</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"> 
            <i class="icons"></i>
            <span>课件中心</span>
          </template>
          <el-menu-item class="son-item" :index="routerUrl+'kejianku'">课件库</el-menu-item>
          <el-menu-item class="son-item" :index="routerUrl+'mykejian'">我的课件</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="icons"></i>
            <span>我的班级</span>
          </template>
          <el-menu-item class="son-item" :index="routerUrl+'myClass'">我的班级</el-menu-item>
          <el-menu-item class="son-item" :index="routerUrl+'evaluation'">班级测评</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="icons"></i>
            <span>我的学生</span>
          </template>
          <el-menu-item class="son-item" :index="routerUrl+'student'">我的学生</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <!-- 主要显示区 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </container>
</template>
<script>

let routerUrl='/page/officeCenter/OfficeCenterIndex/';
  export default{
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
         activeIndex: "/page/officeCenter/OfficeCenterIndex/test2",
         routerUrl:routerUrl
      }
    },
    methods:{
        go_url(path){
            console.log('跳转成功');
            this.$router.push({
                path:routerUrl+path
            })
        },
        created() {
          console.log("执行成功");
        },
    }
  };
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
body {
  background-color: #ccc !important;
}
.box {
  .el-aside {
    width: 200px !important;
    .el-menu {
      height: 754px;
      .el-submenu {
        /deep/.el-menu-item,
        /deep/.el-submenu__title {
          &:hover {
            background-color: rgba(255, 255, 255, 0.5) !important;
          }
        }
        /deep/.el-submenu__title {
          border-top: 1px solid #E9E9E9 !important;

        }
        .son-item {
          border-bottom: 1px solid #ef753c;
          background-color: rgba(255,255,255,.5) !important;
        }
        /deep/.el-menu {
          /deep/.is-active {
            background-color: #fff !important;
            color: #ef753c !important;
          }
        }
      }
    }
  }
  .el-main {
      margin-left: 13px;
   padding: 0;
  }
}
</style>
