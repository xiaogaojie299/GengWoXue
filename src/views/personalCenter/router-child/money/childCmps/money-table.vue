<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%;"
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
    >
      <el-table-column prop="id" label="订单编号" width="180" align="center">
      </el-table-column>
      <el-table-column prop="reason" label="变动事由" align="center" width="180">
      </el-table-column>

      <el-table-column prop="insertTime" align="center" label="变动时间">
      </el-table-column>
      <!-- 课后习题 -->
      <el-table-column prop="balance" align="center" label="余额">
      </el-table-column>
       <el-table-column prop="withdrawal" align="center" label="提现审核">
      </el-table-column>
      <el-table-column prop="remark" align="center" label="审核说明">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
    
    };
  },
  props:{
    tableData:{
      type:Array,
      default:()=>{
        return []
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>