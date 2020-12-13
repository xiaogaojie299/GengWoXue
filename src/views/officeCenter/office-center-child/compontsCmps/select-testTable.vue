<template>
  <div class="box1">
    <!-- <div><button>查看课表</button></div>
    <div><button @click="go_studentDetail">学生详情</button></div> -->
    <div class="header">
      <span class="title">选择试题</span>
      <span class="right-title hand" @click="upload_test">上传</span>
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
        <el-table-column
          label="试卷名称"
          prop="name"
          width="160"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="num1"
          label="填空题数量"
          align="center"
          width="160"
        >
        </el-table-column>

        <el-table-column
          prop="num2"
          label="单择题数量"
          align="center"
          width="160"
        >
        </el-table-column>

        <el-table-column
          prop="num3"
          label="多择题数量"
          align="center"
          width="160"
        >
        </el-table-column>

        <el-table-column
          prop="num4"
          label="判断题数量"
          align="center"
          width="160"
        >
        </el-table-column>

        <el-table-column
          prop="num5"
          label="简答题数量"
          align="center"
          width="160"
        >
        </el-table-column>

        <el-table-column
          prop="points1"
          label="填空题分值"
          align="center"
          width="160"
        >
        </el-table-column>

        <el-table-column
          prop="points2"
          label="单择题分值"
          align="center"
          width="160"
        >
        </el-table-column>

        <el-table-column
          prop="points3"
          label="多择题分值"
          align="center"
          width="160"
        >
        </el-table-column>

        <el-table-column
          prop="points4"
          label="判断题分值"
          align="center"
          width="160"
        >
        </el-table-column>

        <el-table-column
          prop="points5"
          label="简答题分值"
          align="center"
          width="160"
        >
        </el-table-column>

        <el-table-column
          prop="points4"
          label="判断题分值"
          align="center"
          width="160"
        >
        </el-table-column>
      </el-table>
    </div>
    <div class="page-device"><page-device /></div>
    <!-- 底部关闭按钮 -->
    <div class="footer-btn hand" @click="closeMask">关闭</div>
  </div>
</template>
<script>
import { queryTestPaperList, uploadTestFile } from "@/network/officeCenter";
import { exmixin } from "../ex-mixin/mixin";
export default {
  mixins: [exmixin],
  data() {
    return {
      isActive: 0,
      testId: 0, //试卷Id
      tableData: [
        {
          id: 4,
          date: "2016-05-02",
          name: "王小虎",
          mailingInformation: 0,
          studentState: 2,
        },
        {
          id: 4,
          date: "2016-05-02",
          name: "王小虎",
          mailingInformation: 0,
          studentState: 2,
        },
        {
          id: 4,
          date: "2016-05-02",
          name: "王小虎",
          mailingInformation: 0,
          studentState: 2,
        },
        {
          id: 4,
          date: "2016-05-02",
          name: "王小虎",
          mailingInformation: 0,
          studentState: 2,
        },
        {
          id: 5,
          date: "2016-05-02",
          name: "张三",
          mailingInformation: 0,
          studentState: 1,
        },
        {
          id: 5,
          date: "2016-05-02",
          name: "张三",
          mailingInformation: 0,
          studentState: 1,
        },
        {
          id: 5,
          date: "2016-05-02",
          name: "张三",
          mailingInformation: 0,
          studentState: 1,
        },
        {
          id: 5,
          date: "2016-05-02",
          name: "张三",
          mailingInformation: 0,
          studentState: 1,
        },
        {
          id: 5,
          date: "2016-05-02",
          name: "张三",
          mailingInformation: 0,
          studentState: 1,
        },
        {
          id: 5,
          date: "2016-05-02",
          name: "张三",
          mailingInformation: 0,
          studentState: 1,
        },
        {
          id: 5,
          date: "2016-05-02",
          name: "张三",
          mailingInformation: 0,
          studentState: 1,
        },
      ],
      i: 0, //第一次加载
    };
  },
  props: {
    scheduleId: {
      type: Number,
    },
  },
  watch: {
    scheduleId() {
      this.get_classStudent();
    },
  },
  created() {
    console.log("传过来的id", this.scheduleId);
    this.get_testPaperList();
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 0) {
        return "warning-row";
      } else {
        return "success-row";
      }
    },
    // 上传课件习题
    async upload_test() {
      let data = {
        testId: this.testId,
        scheduleId: this.scheduleId,
      };
      //上传课件
      let res = await uploadTestFile(data);
      console.log("res===>上传", res);
    },
    // 获取习题列表
    get_testPaperList() {
      let data = {
        scheduleId: this.scheduleId,
        size: this.size,
        current: this.current,
      };
      queryTestPaperList(data).then((res) => {
        console.log("习题列表成功", res);
        let { code, data } = res;
        this.i++;
        if (code == 200) {
          // this.tableData = data.list;
          // this.testId = data.list[0].id;
          if (this.i == 1) {
            this.testId = this.tableData[0].id;
            this.isActive = this.tableData[0].id; //首次加载，默认选中第一个
          }
        } else {
        }
      });
    },
    // 点击单元格
    handleSelectionChange(row) {
      // this.multipleSelection = val;
      this.isActive = row.id;
      this.testId = row.id;
    },
    // 选中的id
    // selectRow(index, rows) {
    //   console.log("isActive=", this.isActive);
    //   console.log(index, rows);
    //   this.isActive = index;
    //   this.testId = rows.id;
    // },
    // 关闭
    closeMask() {
      this._this.dialogVisible = false;
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
    height: 100px;
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
      //   position: absolute;
      //   top: 20px;
      //   right: 0;

      //   font-size: 14px;
      //   font-family: Source Han Sans CN;
      //   font-weight: 550;
      //   color: #f23e34;

      position: absolute;
      top: 12px;
      right: 0;
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
