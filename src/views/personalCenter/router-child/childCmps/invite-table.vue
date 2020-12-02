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
      <el-table-column
        prop="userName"
        label="被邀请人"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="insertTime"
        label="被邀请人消费时间"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="reason" align="center" label="被邀请人消费内容">
      </el-table-column>
      <el-table-column prop="golds" align="center" label="邀请提成">
        <template slot-scope="scope">
          <div>{{ scope.row.golds }}状元币</div>
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
    return {};
  },
  props: {
    tableData: {
      type: Array,
      default: () => {
        return [];
      },
    },
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
      console.log(index, rows);
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