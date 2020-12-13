<template>
  <div>
    <el-pagination
      background
      layout="prev, pager, next"
      :current-page="current"
      @size-change="test"
      @current-change="handleCurrentChange"
      :hide-on-single-page="true"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    current: {
      //传过来的值枫叶来显示第一行
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    test(i) {
      console.log("i", i);
    },
    handleCurrentChange(val) {
      this.$emit("handleCurrentChange", val);
      console.log("val", val);
    },
  },
};
</script>
<style lang="scss" scoped>
/deep/.el-pagination {
  height: 80px;
}
/deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #409eff;
  color: #fff;
  background: linear-gradient(110deg, #f13232, #ef763c);
  border-radius: 2px;
}
</style>
