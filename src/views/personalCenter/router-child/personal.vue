<template>
    <div style="height:100%">
        <!-- <button @click="go_child()">跳转</button> -->
        <!-- <router-view></router-view> -->
        <el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="200px">
    <el-menu :default-openeds="['2-1']">
<el-menu-item index="1-1" @click="go_url('data')">个人资料</el-menu-item>

        <el-menu-item-group>
          <el-menu-item index="3-1" @click="go_url('wallet')">我的钱包</el-menu-item>
        </el-menu-item-group>
       <el-menu-item-group>
          <el-menu-item index="4-1" @click="go_url('promotion')">推广中心</el-menu-item>
        </el-menu-item-group>
      <!-- 我的学生 -->
        <el-menu-item-group>
          <el-menu-item index="5-1" @click="go_url('feedback')">问题反馈</el-menu-item>
        </el-menu-item-group>
    </el-menu>
  </el-aside>

  <el-container style="border:1px solid black;min-height:100%;padding-left:47px">
      <router-view></router-view>
  </el-container>
</el-container>
    </div>
</template>
<script>
let routerUrl='/personalCenter/personal/';
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
