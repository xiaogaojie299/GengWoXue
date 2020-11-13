<template>
  <div>
    <div class="title">班级测评</div>
    <div class="box">
      <!-- 上面标签 -->
      <div style="display: flex;">
        <div class="header">
          <div class="header-tag">
            <div class="tag-left">班级:</div>
            <!-- 下拉多选框 -->
            <div class="tag-right">选择班级</div>
          </div>
        </div>
        <!-- 下面按钮组 -->
        <div class="btn-groups">
          <div class="btn1">查看课表</div>
          <div class="btn2" @click="dialogVisible=true">查看学生</div>
        </div>
      </div>

      <!-- 查看课表按钮组 -->
      <div class="btn-groups1">
        <div class="btn1" @click="go_evalDetails">测评详情</div>
        <div class="btn1">查询</div>
      </div>
      <!-- 顶部表格 -->
      <div>
        <myclass-table />
      </div>
    </div>
    <!-- 底部分页 -->

    <div class="footer">
        <page-device />
    </div>
    <!-- 遮罩层弹框 -->

    <el-dialog
        :visible.sync="dialogVisible"
        :show-close="false"
        center
        >
        <myStudent @handleClose="closeMask" />
        
</el-dialog>

    <button @click="closeMask">打卡</button>
  </div>
</template>
<script>
import myclassTable from "./compontsCmps/myclassTable";
import myStudent from "./compontsCmps/my-student"
export default {
  data() {
    return {
     dialogVisible:false,
    };
  },
  methods:{
      go_myStudent(){
           this.$router.push({
                path: "/page/officeCenter/OfficeCenterIndex/myStudent",
      });
      },
    //   关闭遮罩层
      closeMask(){
          console.log("调用成功");
          this.dialogVisible=false;
      },
    //   跳转到测评页面
    go_evalDetails(){
        this.$router.push({
                path: "/page/officeCenter/evaluationDetail",
      });
    }
  },
  components: {
    myclassTable,
    myStudent
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #343434;
  margin: 20px 0;
}

.box {
  background: #f9f9f9;
  width: 1054px;
  padding: 10px 20px;
  .header {
    display: flex;
    justify-content: space-between;
    .header-tag {
      width: 150px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tag-left {
        width: 30%;
        white-space: nowrap;
        font-size: 10px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #343434;
      }
      .tag-right {
        width: 98px;
        height: 34px;
        background: #ffffff;
        border: 1px solid #efefef;
        border-radius: 4px;
        font-size: 9px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #4d4d4d;
      }
    }
  }
}
.btn-groups {
  margin: 20px 0;
  width: 100%;
  display: flex;
  font-size: 9px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  .btn1 {
    margin-left: auto;
    width: 80px;
    height: 38px;
    background: #ffffff;
    border: 1px solid #f13a34;
    border-radius: 4px;
    color: #f13a34;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn2 {
    width: 80px;
    height: 38px;
    background: linear-gradient(110deg, #f13232, #ef763c);
    border-radius: 4px;
    margin-left: 16px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.btn-groups1 {
  font-size: 9px;
  font-family: Source Han Sans CN;
  font-weight: 550;
  display: flex;
  margin:20px 0;
  .btn1 {
    width: 108px;
    height: 38px;
    background: #ffffff;
    border: 1px solid #f13a34;
    border-radius: 3px;
    color: #f13a34;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  }
}
.footer{
    margin:20px 0 !important;
    width: 100%;
    margin:0 auto;
    display: flex;
    justify-content: center;
}
</style>