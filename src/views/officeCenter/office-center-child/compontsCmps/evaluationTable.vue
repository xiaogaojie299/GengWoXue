<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      @cell-click="handleSelectionChange"
      :header-cell-style="{
        color: '#FFFFFF', 
        fontSize: '14px',
        background: '#EF743C',
        fontWeight: 500,
      }"
      :row-style="{
        fontSize: '8px',
        color: '#666',
        fontFamily: 'SourceHanSansCN-Medium',
      }"
      :row-class-name="tableRowClassName"
    >
      <!-- :row-class-name="tableRowClassName" -->
      <el-table-column width="40" align="center">
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
      <el-table-column prop="examinationName" label="考试名称" align="center">
      </el-table-column>
      <el-table-column prop="testPaperName" label="试卷名称" align="center">
      </el-table-column>
      <el-table-column prop="type" align="center" label="考试类别">
        <template slot-scope="scope">
          <span>{{ scope.row.type == 1 ? "线上" : "线下" }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="className" align="center" label="班级">
      </el-table-column>
      <el-table-column prop="studentName" align="center" label="学生姓名">
      </el-table-column>
      <el-table-column prop="courseNum" align="center" label="课次">
      </el-table-column>
      <el-table-column prop="phone" align="center" label="学生电话">
      </el-table-column>
      <!-- 课后习题 -->
      <el-table-column align="center" label="是否邮寄资料" width="150">
        <template slot-scope="scope">
          <!-- <span>{{ scope.row.release == 1 ? "未发布" : "已发布" }}</span> -->
          <span>{{ scope.row.release }}</span>
        </template>
      </el-table-column>
      <!-- 考试状态 -->
      <el-table-column align="center" label="是否邮寄资料" width="150">
        <template slot-scope="scope">
          <!-- <span>{{ scope.row.status == 1 ? "缺考" : "完成" }}</span> -->
          <span>{{ scope.row.status }}</span>
        </template>
      </el-table-column>
      <!-- 阅卷状况scoring -->
      <el-table-column align="center" label="阅卷状态" width="150">
        <template slot-scope="scope">
          <!-- <span>{{ scope.row.scoring == 1 ? "未阅卷" : "已阅卷" }}</span> -->
          <span>{{ scope.row.scoring }}</span>
        </template>
      </el-table-column>
      <!-- 考试成绩 -->
      <el-table-column
        prop="points"
        align="center"
        label="考试成绩"
        width="150"
      >
      </el-table-column>
      <el-table-column
        prop="average"
        align="center"
        label="班级平均分"
        width="150"
      >
      </el-table-column>
      <!-- 操作 -->
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
.el-table .warning-row {
  background: #f9f9f9;
}

.el-table .success-row {
  background: #ffffff;
}
</style>

<script>
export default {
  data() {
    return {
      isActive: 0,
    };
  },
  props: {
    tableData: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  created() {
    console.log("子组件中的", this.tableData);
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 0) {
        return "warning-row";
      } else {
        return "success-row";
      }
    },
        // 点击单元格
  handleSelectionChange(row) {
        this.isActive=row.id;
      this.$emit("selectRow",row);
      },
    // selectRow(index, rows) {
    //   console.log("isActive=", this.isActive);
    //   this.isActive = index;
    //   this.$emit("selectClass", index);
    //   // this.$EventBus("selectClassId",rows[index].id)
    // },
    deleteRow(index, rows) {
      console.log(index, rows);
      this.$router.push({
        path: "/page/officeCenter/OfficeCenterIndex/test2",
      });
    },
  },
};
</script>
