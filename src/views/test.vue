<template>
    <div class="header">
      <el-button @click="go_live">测试跳转</el-button>
        <div class="header-tag">
          <div class="tag-left">课件类型:</div>
          <!-- 下拉多选框 -->
          <div>
            <el-select
              @change="change"
              :popper-append-to-body="false"
              v-model="kejianTypeValue"
              placeholder="请选择"
            >
              <el-option
                v-for="item in kejianType"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
          <img src="@/assets/img/answers/icon_arrow.png" alt="" />
          <!-- 下面按钮组 -->
        </div>

        <div class="header-tag">
          <div class="tag-left">科目:</div>
          <!-- 下拉多选框 -->
          <div>
            <el-select
              @change="change"
              :popper-append-to-body="false"
              v-model="subjectValue"
              placeholder="请选择"
            >
              <el-option
                v-for="item in subjectList"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
          <img src="@/assets/img/answers/icon_arrow.png" alt="" />
          <!-- 下面按钮组 -->
        </div>

        <div class="header-tag">
          <div class="tag-left">年级:</div>
          <!-- 下拉多选框 -->
          <div>
            <el-select
              @change="change"
              :popper-append-to-body="false"
              v-model="classValue"
              placeholder="请选择"
            >
              <el-option
                v-for="item in classList"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
          <img src="@/assets/img/answers/icon_arrow.png" alt="" />
          <!-- 下面按钮组 -->
        </div>

        <div class="header-tag">
          <div class="tag-left">课件名称:</div>
          <div>
            <input class="kjName" type="text" />
          </div>
          <div></div>
        </div>
      </div>
</template>
<script>
let routerUrl='/page/officeCenter/OfficeCenterIndex/';
import {mapState} from "vuex"
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
    computed:{
      userInfo(){
        return this.$store.state.infoList
      }
    },
    methods:{
      go_live(){
        window.open("http://www.xiaogaojie.vip:99/")
      },
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
