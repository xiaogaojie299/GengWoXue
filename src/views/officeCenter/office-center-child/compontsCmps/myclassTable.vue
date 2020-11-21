<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
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
      <el-table-column width="40" align="center">
        <template slot-scope="scope">
          <!-- <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
            图片
          </el-button> -->
          <!-- :src="isActive==scope.$index?'@/assets/img/icon_radiobutton.png':'@/assets/img/icon_selected.png'" -->
            <!-- src="@/assets/img/success.png" -->
          <img
            @click="selectRow(scope.$index, tableData)"
            style="width: 20px; height: 20px"
            :src="isActive==scope.$index?require('@/assets/img/success.png'):require('@/assets/img/icon_radiobutton.png')"
            :alt="scope.$index+','+isActive"
          />
        </template>
      </el-table-column>
      <el-table-column prop="date" label="课件名称" width="180" align="center">
      </el-table-column>
      <el-table-column prop="name" label="课件类型" align="center" width="180">
      </el-table-column>
      <el-table-column prop="address" align="center" label="课件科目">
      </el-table-column>
      <el-table-column prop="address" align="center" label="课件科目">
      </el-table-column>
      <el-table-column prop="address" align="center" label="课件科目">
      </el-table-column>
      <el-table-column prop="address" align="center" label="课件科目">
      </el-table-column>
      <el-table-column prop="address" align="center" label="课件科目">
      </el-table-column>
      <!-- 课后习题 -->
      <el-table-column prop="exercise" align="center" label="课后习题">
      </el-table-column>
      <!-- 操作 -->
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
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
      ],
      isActive:0
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      console.log(row);
      if (rowIndex % 2 == 0) {
        return "warning-row";
      } else {
        return "success-row";
      }
    },
    selectRow(index, rows) {
      console.log("isActive=",this.isActive)
      console.log(index, rows);
      this.isActive=index;
      // this.$router.push({
      //      path:"/officeCenter/OfficeCenterIndex/test2"
      // })
    },
    deleteRow(index, rows) {
      console.log(index, rows);
      this.$router.push({
        path: "/page/officeCenter/OfficeCenterIndex/test2",
      });
    },
  },
};
</script>