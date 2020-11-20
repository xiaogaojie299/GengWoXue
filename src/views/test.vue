<template>
    <div style="height:100%">
        <!-- <button @click="go_child()">跳转</button> -->
        <!-- <router-view></router-view> -->
        <el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="200px">
    <el-menu :default-openeds="['2-1']">
<el-menu-item index="1-1" @click="go_url('test2')">课程中心</el-menu-item>

      <el-submenu index="2">
        <template slot="title">课件中心</template>
        <el-menu-item-group>
          <el-menu-item index="2-1" @click="go_url('kejianku')">课件库</el-menu-item>
          <el-menu-item index="2-2" @click="go_url('mykejian')">我的课件</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">我的班级</template>
        <el-menu-item-group>
          <el-menu-item index="3-1" @click="go_url('myClass')">我的班级</el-menu-item>
          <el-menu-item index="3-2" @click="go_url('evaluation')">班级测评</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 我的学生 -->
       <el-submenu index="4">
        <template slot="title">我的学生</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="4-1" @click="go_url('student')">我的学生</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>

  <el-container style="border:1px solid black;max-height:100%">
      <router-view></router-view>
  </el-container>
</el-container>
    </div>
</template>
<script>
let routerUrl='/page/officeCenter/OfficeCenterIndex/';
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
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
/deep/ .el-menu-item.is-active{
background: linear-gradient(110deg, #F13232, #EF763C);
font-size: 10px;
font-family: Source Han Sans CN;
font-weight: 500;
color: #FFFFFF;
}
// 修改左侧导航栏选中时的样式
    .el-menu-item:hover{
        // background-color: #EF703C !important;
        // color: #38B2FF !important;
        
    }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
    
  }
</style>
