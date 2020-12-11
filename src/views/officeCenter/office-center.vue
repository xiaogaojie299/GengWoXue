<template>
  <container>
  <el-container class="box banner">
    <!-- 侧边栏 -->
    <el-aside width="200px">
      <!-- <el-menu
      unique-opened
      router
        :default-active="activeIndex"
        background="linear-gradient(110deg, #F13232, #EF753C)"
        text-color="#888888"
        active-text-color="#fff"
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
      </el-menu> -->
    
      <el-menu @open="handleOpen" :default-active="activeIndex">
          <el-menu-item index="1" @click="go_url('test2', '1')"
            >课程表</el-menu-item>

          <el-submenu index="2">
            <template slot="title">
          <span>课件中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" @click="go_url('kejianku', '2-1')">课件库</el-menu-item>
          <el-menu-item index="2-2" @click="go_url('mykejian', '2-2')">我的课件</el-menu-item>
        </el-menu-item-group>
          </el-submenu>
         <el-submenu index="3">
            <template slot="title">
          <span>我的班级</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1" @click="go_url('myClass', '3-1')">我的班级</el-menu-item>
          <el-menu-item index="3-2" @click="go_url('evaluation', '3-2')">班级测评</el-menu-item>
        </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4" @click="go_url('student', 4)"
            >我的学生</el-menu-item
          >
          <!-- <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item> -->
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
import { mapState, mapActions } from "vuex";
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
         routerUrl:routerUrl
      }
    },
    computed:{
      activeIndex(){
        return this.$store.state.officeCenterIndex
      }
    },
    created(){
      // this.$store.commit("setOfficeCenterIndex",1)
    },
    methods:{
      handleOpen(key,keyPath){
        console.log("打开成功");
       console.log(key, keyPath);
      },
        go_url(path,index){
            console.log('跳转成功');
            this.$router.push({
                path:routerUrl+path
            })
            this.$store.commit("setOfficeCenterIndex",index)
        },
        created() {
          console.log("执行成功");
        },
    }
  };
</script>

<style lang="scss" scoped>
/deep/ .el-submenu__title{
  text-align: center;
}
/deep/ .el-menu{
  background: #FAFAFA;
}
/deep/ .el-submenu .el-menu-item{
  background: #F9C8B4;
}
/deep/ .el-submenu .el-menu-item:hover{
  color: #F13C33;
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
</style>
