<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      :header-cell-style="{
        color: '#ffffff',
        fontSize: '9px',
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
      <el-table-column align="center" label="考勤">
        <template slot-scope="scope">
          <span>{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="studentName" align="center" label="姓名">
      </el-table-column>
      <!-- 课后习题 -->
      <!-- prop="work" -->
      <el-table-column align="center" label="考勤">
        <template slot-scope="scope">
          <span>{{ scope.row.work == 0 ? "参加直播" : "未参加" }}</span>
        </template>
      </el-table-column>
      <!-- 课后习题 -->
      <el-table-column align="center" label="课后习题">
        <template slot-scope="scope">
          <!-- !couseDetail.examinationName -->
          <span v-if="!couse.examinationName">
            未上传
          </span>
          <span v-else>{{
            scope.row.state == 0
              ? "未完成"
              : scope.row.state == 1
              ? "已完成"
              : "已阅卷"
          }}</span>
        </template>
      </el-table-column>
      <!-- 操作 -->
      <el-table-column align="center" fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <span v-if="!couse.examinationName">-</span>
          <el-button
            v-else
            @click.native.prevent="operation(scope.row)"
            type="text"
            size="small"
          >
            {{
              scope.row.state == 0
                ? "提醒做题"
                : scope.row.state == 1
                ? "批阅作业"
                : "查看作业"
            }}
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
import { exmixin } from "../ex-mixin/mixin"
import { remindTheProblem } from "@/network/officeCenter";
export default {
  mixins: [exmixin],
  data() {
    return {
      couse:{}
      // tableData: [
      //   {
      //     id: "10",
      //     studentName: "王小虎",
      //     state: "0",
      //     work: "0",
      //   },
      //   {
      //     id: "10",
      //     studentName: "王虎",
      //     state: "1",
      //     work: "1",
      //   },
      // ],
    };
  },
  props: {
    tableData: {
      type: Array,
      default: () => {
        return [
          {
            id: "1",
            studentName: "王小虎",
            state: "0",
            work: "0",
          },
          {
            id: "2",
            studentName: "王虎",
            state: "1",
            work: "1",
          },
        ];
      },
    },
  },
  created(){
  },
  mounted(){
    setTimeout(()=>{
      this.couse = this._this.couseDetail
    },500)
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
    operation(row) {
      console.log(row);
      if (row.state == 0) {
        //提醒学生做题
        let params = {
          id: row.id,
        };
        remindTheProblem(params).then((res) => {
          let { code, data } = res;
          if (code == 200) {
            this.$myAlert("提醒学生做题成功");
          } else {
            this.$myAlert("提醒学生做题失败，请稍后再试");
          }
        });
      } else if (row.state == 1) {
        let data = JSON.stringify(row);
        this.$router.push({
          path: "/page/officeCenter/readwork",
          query: {
            data: data,
            type: 1,
          },
        });
      }else{
        let data = JSON.stringify(row);
        this.$router.push({
          path: "/page/officeCenter/evaluationDetail",
          query: {
            data: data,
            type: 1,
          },
        });
      }
      // this.$router.push({
      //      path:"/page/officeCenter/readwork"
      // })
    },
  },
};
</script>