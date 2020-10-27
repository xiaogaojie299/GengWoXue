<template>
  <div>
    <!-- 顶部选择框 -->
    <div class="top-filtrate">
      <!-- 时间选择器 -->
      <div class="timer">
        <div class="time-title my-font">反馈时间:</div>
        <div>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择开始日期"
          >
          </el-date-picker>
        </div>
      </div>
      <!-- 下面横线 -->
      <div class="inline"></div>
      <div>
        <el-date-picker v-model="value1" type="date" placeholder="选择结束日期">
        </el-date-picker>
      </div>
      <!-- 处理状态 -->
      <div class="dispose m-r">
        <div class="my-font m-r">处理状态:</div>
        <!-- 下拉多选框 -->
        <div class="select-box"></div>
      </div>
      <!-- 按钮组 -->
      <div class="btn-group">
        <div class="btn1 m-r">重置</div>
        <div class="btn2">查询</div>
      </div>
    </div>
    <!-- 中间表格 -->
    <div class="main">
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
          prop="date"
          label="课件名称"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="课件类型"
          align="center"
          width="180"
        >
        </el-table-column>

        <el-table-column prop="address" align="center" label="课件科目">
        </el-table-column>
        <!-- 课后习题 -->
        <el-table-column prop="exercise" align="center" label="课后习题">
        </el-table-column>
      </el-table>
    </div>
    <!-- 底部分页 -->
    <div class="footer">
      <page-device></page-device>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: "",
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
    };
  },
};
</script>
<style lang="scss" scoped>
/deep/ .el-input__inner {
  height: 34px;
  line-height: 34px;
}
.my-font {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
}
.m-r {
  margin-right: 20px;
}
.top-filtrate {
  display: flex;
  align-items: center;
  .timer {
    display: flex;
    align-items: center;
    .time-title {
      margin-right: 20px;
    }
  }
  .inline {
    width: 14px;
    height: 1px;
    background: #7e7e7e;
    margin: 0 6px;
  }
}

.dispose {
  display: flex;
  align-items: center;
  margin-left: 26px;
  .select-box {
    width: 121px;
    height: 34px;
    background: #ffffff;
    border: 1px solid #efefef;
    border-radius: 4px;
  }
}

.btn-group {
  display: flex;
  .btn1,
  .btn2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 38px;
    border-radius: 3px;

    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 500;
  }
  .btn1 {
    background: #ffffff;
    border: 1px solid #f13a33;
    border-radius: 3px;
    color: #f04335;
  }
  .btn2 {
    background: linear-gradient(110deg, #f13232, #ef753c);
    color: #ffffff;
  }
}
.main {
  margin: 25px 0;
}
.footer {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>