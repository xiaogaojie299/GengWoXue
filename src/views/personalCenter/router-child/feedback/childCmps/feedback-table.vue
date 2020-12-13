<template>
  <div>
    <!-- 顶部选择框 -->
    <div class="top-filtrate">
      <!-- 时间选择器 -->
      <div class="timer">
        <div class="time-title my-font">反馈时间:</div>
        <div class="calendar">
          <el-date-picker
            v-model="startTime"
            type="date"
            placeholder="选择开始日期"
          >
          </el-date-picker>
          <img class="calendar_Icon" src="@/assets/img/calendar.png" alt="" />
        </div>
      </div>
      <div class="inline"></div>
      <div class="calendar">
        <el-date-picker
          v-model="endTime"
          type="date"
          placeholder="选择结束日期"
        >
        </el-date-picker>
        <img class="calendar_Icon" src="@/assets/img/calendar.png" alt="" />
      </div>
      <!-- 处理状态 -->
      <div class="dispose m-r">
        <div class="my-font m-r">处理状态:</div>
        <!-- 下拉多选框 -->
        <div class="select-box hand">
          <div>
            <el-select
              @change="change"
              :popper-append-to-body="false"
              v-model="auditValue"
              placeholder="请选择"
            >
              <el-option
                v-for="item in auditList"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
          <img src="@/assets/img/answers/icon_arrow.png" alt="" />
        </div>
      </div>
      <!-- 按钮组 -->
      <div class="btn-group">
        <div class="btn1 m-r hand" @click="reset">重置</div>
        <div class="btn2 hand" @click="query">查询</div>
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
      >
        <el-table-column
          prop="insertTime"
          label="反馈时间"
          width="180"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="content"
          label="反馈内容"
          align="center"
          width="180"
        >
        </el-table-column>

        <el-table-column align="center" label="处理状态">
          <template slot-scope="scope">
            <span>{{ scope.row.status == 1 ? "未处理" : "已处理" }}</span>
          </template>
        </el-table-column>
        <!-- 课后习题 -->
        <el-table-column prop="reply" align="center" label="处理结果">
        </el-table-column>
      </el-table>
    </div>
    <!-- 底部分页 -->
    <div class="footer">
      <page-device
        @handleCurrentChange="handleCurrentChange"
        :total="total"
      ></page-device>
    </div>
  </div>
</template>
<script>
import * as utils from "@/utils/getData";
import { queryFeedbackList } from "@/network/personalCenter";
export default {
  data() {
    return {
      startTime: "",
      endTime: "",
      tableData: [],
      current: 1,
      size: 10,
      auditValue: "",
      total: 0,
    };
  },
  computed: {
    auditList() {
      return [
        { name: "全部", id: "" },
        { name: "未处理", id: 1 },
        { name: "已处理", id: 2 },
      ];
    },
  },
  created() {
    this.getFeedbackList();
  },
  methods: {
    // 查询历史反馈记录
    async getFeedbackList() {
      let timeStr = "";
      if (!this.startTime || !this.endTime) {
        timeStr = "";
      } else {
        timeStr =
          utils.getTimeType(this.startTime) +
          " - " +
          utils.getTimeType(this.endTime);
      }
      let params = {
        current: 1,
        size: 10,
        status: this.auditValue,
        timeStr: timeStr,
      };
      let { code, data } = await queryFeedbackList(params);
      if (code == 200) {
        this.tableData = data.list;
        this.total = data.total;
      } else {
        this.$myAlert("网络错误");
      }
    },
    //查询
    query() {
      if (!this.startTime && this.endTime) {
        this.$myAlert("请选择您的开始时间");
        return;
      }
      if (!this.endTime && this.startTime) {
        this.$myAlert("请选择您的结束时间");
        return;
      }
      if (
        this.startTime != "" &&
        this.startTime.getTime() > this.endTime.getTime()
      ) {
        this.$myAlert("开始时间不能大于起始时间");
        return;
      }
      this.getFeedbackList();
    },
    //重置
    reset() {
      this.startTime = 0;
      this.endTime = 0;
      this.auditValue = "";
    },
    // 下拉框选择
    change(val) {},
    // 分页
    handleCurrentChange(current) {
      this.current = current;
      this.getFeedbackList();
    },
  },
};
</script>
<style lang="scss" scoped>
/deep/ .el-input__inner {
  height: 34px;
  line-height: 34px;
}
/deep/ .el-input__suffix-inner > i {
  display: none;
}
/deep/ .el-select-dropdown {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #262626;
}
/deep/ .el-select-dropdown__list li {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #484949;
}
/deep/ .el-select-dropdown__item.hover {
  background: linear-gradient(110deg, #f13232, #ef753c);
  color: #fff;
}
// 日历的样式
/deep/ .el-input__prefix > i {
  // position: absolute;
  display: none;
  height: 0;
  width: 0;
}
/deep/ .el-input--prefix .el-input__inner {
  padding-left: 16px;
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
    // background: #ffffff;
    // border: 1px solid #efefef;
    // border-radius: 4px;
    position: relative;
    img {
      width: 9px;
      height: 12px;
      position: absolute;
      right: 6px;
      top: 50%;
      transform: translateY(-50%);
    }
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
.calendar {
  position: relative;
  & img {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
  }
}
</style>
