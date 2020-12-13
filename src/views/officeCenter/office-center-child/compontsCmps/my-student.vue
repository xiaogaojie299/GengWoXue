<template>
  <div class="box1">
    <!-- <div><button>查看课表</button></div>
    <div><button @click="go_studentDetail">学生详情</button></div> -->
    <div class="header">
      <span class="title">查看学生</span>
      <span class="right-title1 hand" @click="go_studentDetail">学生详情</span>
    </div>
    <!-- 中间表格 -->
    <div class="main">
      <el-table
        :data="tableData"
        style="width: 100%"
        @cell-click="handleSelectionChange"
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
              style="width: 20px; height: 20px"
              :src="
                isActive == scope.row.id
                  ? require('@/assets/img/success.png')
                  : require('@/assets/img/icon_radiobutton.png')
              "
              :alt="scope.$index + ',' + isActive"
            />
          </template>
        </el-table-column>
        <el-table-column label="序号" width="160" align="center">
          <template slot-scope="scope">
            <span>{{ scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" align="center" width="160">
        </el-table-column>
        <el-table-column
          prop="mailingInformation"
          align="center"
          label="是否邮寄资料"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.mailingInformation == 0 ? "否" : "是" }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page-device">
      <page-device @handleCurrentChange="handleCurrentChange" :total="total" />
    </div>
    <!-- 底部关闭按钮 -->
    <div class="footer-btn hand" @click="close">关闭</div>
  </div>
</template>
<script>
import { queryClassStudent } from "@/network/officeCenter";
export default {
  data() {
    return {
      isActive: 0,
      current: 1,
      size: 10,
      tableData: [],
      total: 0,
      selectRow: "",
    };
  },
  props: {
    classId: {
      type: Number,
    },
  },
  watch: {
    classId(newval, oldval) {
      console.log(newval);
      this.current = 1;
      this.get_classStudent();
    },
  },
  created() {
    this.get_classStudent();
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 0) {
        return "warning-row";
      } else {
        return "success-row";
      }
    },
    handleCurrentChange(current) {
      this.current = current;
      this.get_classStudent();
    },
    // 点击单元格
    handleSelectionChange(row, column, cell) {
      this.isActive = row.id;
      this.selectRow = row;
    },
    go_studentDetail() {
      this.selectRow = this.selectRow || this.tableData[0];
      console.log(this.selectRow);
      this.$router.push({
        path: "/page/officeCenter/OfficeCenterIndex/studentDetail",
        query: {
          stuInfo: JSON.stringify(this.selectRow),
        },
      });
    },
    close() {
      // this.$root.closeMask()
      this.$emit("handleClose");
    },
    get_classStudent() {
      let params = {
        classId: this.classId,
        size: this.size,
        current: this.current,
      };
      queryClassStudent(params).then((res) => {
        let { code, data } = res;
        if (code == 200) {
          this.total = data.total;
          this.tableData = data.list;
          this.isActive = data.list[0].id;
        }
      });
    },
    handleCurrentChange(data) {
      // data   分页页数
      this.current = data;
      this.get_classStudent();
    },
  },
};
</script>
<style lang="scss" scoped>
.box1 {
  width: 100%;
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
    .right-title1 {
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
    background: #f8f8f8;
    border: 1px solid #dde7f0;
    margin-bottom: 21px;
  }
  .footer-btn {
    margin: 0 auto;
    width: 133px;
    height: 45px;
    background: linear-gradient(110deg, #f13232, #ef763c);
    border-radius: 4px;

    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .page-device {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 16px 0;
  }
}
</style>
