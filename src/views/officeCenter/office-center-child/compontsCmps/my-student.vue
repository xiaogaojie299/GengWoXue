<template>
  <div class="box1">
    <!-- <div><button>查看课表</button></div>
    <div><button @click="go_studentDetail">学生详情</button></div> -->
    <div class="header">
      <span class="title">查看学生</span>
      <span class="right-title" @click="go_studentDetail">学生详情</span>
    </div>
    <!-- 中间表格 -->
    <div class="main">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{
          color: '#343434',
          fontSize: '14px',
          background: '#F8F8F8',
          fontWeight: 500,
        }"
        :row-style="{
          fontSize: '8px',
          color: '#666',
          fontFamily: 'SourceHanSansCN-Medium',
          background: '#F8F8F8',
        }"
        :row-class-name="tableRowClassName"
        border
      >
        <el-table-column width="80" align="center">
          <template slot-scope="scope">
            <img
              @click="selectRow(scope.$index, tableData)"
              style="width: 20px; height: 20px"
              src="@/assets/img/icon_selected.png"
              alt=""
            />
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          label="课件名称"
          width="270"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="课件类型"
          align="center"
          width="160"
        >
        </el-table-column>
        <el-table-column prop="address" align="center" label="课件科目">
        </el-table-column>
      </el-table>
    </div>

    <!-- 底部关闭按钮 -->
    <div class="footer-btn" @click="close">关闭</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区",
          exercise: "已审批",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区",
          exercise: "待审批",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区",
          exercise: "审批成功",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区",
          exercise: "未审批",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区",
          exercise: "未审批",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区",
          exercise: "未审批",
        },
      ],
    };
  },
  methods: {
    go_studentDetail() {
      console.log("跳转到学生详情成功");
      this.$router.push({
        path: "/page/officeCenter/OfficeCenterIndex/studentDetail",
      });
    },
    close(){
        // this.$root.closeMask()
        this.$emit("handleClose");
    }
  },
};
</script>
<style lang="scss" scope>
.box1 {
  width: 100%;
  height: 600px;
  background: white;
  margin-top: -50px !important;
  .header {
    position: relative;
    padding: 12px 0;
.title {
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 550;
      color: 000;
      display: flex;
      // align-items: center;
      justify-content: center;
    }
    .right-title {
      position: absolute;
      top: 20px;
      right: 0;

      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 550;
      color: #f23e34;
    }
  }
  .main {
    width: 100%;
    height: 455px;
    background: #f8f8f8;
    border: 1px solid #dde7f0;
    margin-bottom: 21px;;
  }
  .footer-btn {
      margin:0 auto;
    width: 133px;
height: 45px;
background: linear-gradient(110deg, #F13232, #EF763C);
border-radius: 4px;

    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>