<template>
  <div>
    <div class="title">我的学生</div>
    <div class="box">
      <!-- 上面标签 -->
      <div style="display: flex">
        <div class="header">
          <div class="header-tag">
            <div class="tag-left">学生:</div>
            <!-- 下拉多选框 -->
            <input
              class="tag-right"
              v-model="inputStudentName"
              placeholder="请输入学生姓名"
            />
          </div>
        </div>

        <div class="header">
          <div class="header-tag">
            <div class="tag-left">班级:</div>
            <!-- 下拉多选框 -->
            <input
              class="tag-right"
              v-model="inputClassName"
              placeholder="请输入班级"
            />
          </div>
        </div>
        <!-- 下面按钮组 -->
        <div class="btn-groups">
          <div class="btn1 hand" @click="reset">重置</div>
          <div class="btn2 hand" @click="query">查询</div>
        </div>
      </div>

      <!-- 查看课表按钮组 -->
      <div class="btn-groups1">
        <div class="btn1 hand" @click="look_student">查看课表</div>
        <div class="btn1 hand" @click="go_stuDetail">学生详情</div>
      </div>
      <!-- 顶部表格 -->
      <div>
        <my-studentTable
          ref="stuCheck"
          @selectRow="selectRow"
          :tableData="tableData"
        />
      </div>
    </div>
    <!-- 底部分页 -->

    <div class="footer">
      <page-device
        :current="current"
        @handleCurrentChange="handleCurrentChange"
        :total="total"
      />
    </div>
  </div>
</template>
<script>
import myStudentTable from "./compontsCmps/my-studentTable";
import { queryAllMyStudent } from "@/network/officeCenter.js";
export default {
  data() {
    return {
      dialogVisible: false,
      inputStudentName: "",
      inputClassName: "",
      current: 1,
      size: 10,
      tableData: [],
      total: 1,
      classIndex: 0,
      selectStudent: [],
      i: 1,
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.get_AllMyStudent();
    },
    // 查询
    query() {
      this.current = 1;
      this.get_AllMyStudent();
    },
    reset() {
      // 重置
      this.inputStudentName = "";
      this.inputClassName = "";
    },
    // 调用子组件切换下标的方法
    childMethod() {
      this.i == 1 && this.$refs.stuCheck.chekcout(this.tableData[0].id);
    },
    // 查看课表
    look_student() {
      console.log("查看课表", this.selectStudent);
      this.$router.push({
        path: "/page/officeCenter/OfficeCenterIndex/test2",
        query: {
          studentInfo: JSON.stringify(this.selectStudent),
        },
      });
    },
    //选中的学生信息
    selectRow(data) {
      // this.classIndex = data;
      this.selectStudent = data;
    },
    // 跳转到学生详情
    go_stuDetail() {
      let studyInfo = this.selectStudent;
      console.log("studyInfo=", studyInfo);
      this.go_url("studentDetail", studyInfo);
    },
    go_myStudent() {
      this.$router.push({
        path: "/page/officeCenter/OfficeCenterIndex/myStudent",
      });
    },
    go_url(path, data) {
      let routerUrl = "/page/officeCenter/OfficeCenterIndex/";
      console.log("跳转成功");
      this.$router.push({
        path: routerUrl + path,
        query: { stuInfo: JSON.stringify(data) },
      });
    },
    async get_AllMyStudent() {
      //获取我的学生列表
      let params = {
        className: this.inputClassName,
        studentName: this.inputStudentName,
        current: this.current,
        size: this.size,
      };
      let res = await queryAllMyStudent(params);
      this.tableData = res.data.list;
      if (this.i == 1) {
        this.childMethod(); //重复
        this.selectStudent = res.data.list[0];
      }
      this.total = res.data.total;
    },
    handleCurrentChange(current) {
      //分页组件传过来的页码
      this.current = current;
      this.get_AllMyStudent();
    },
  },
  components: {
    myStudentTable,
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #343434;
  margin: 20px 0;
}

.box {
  background: #f9f9f9;
  width: 1054px;
  padding: 10px 20px;
  .header {
    display: flex;
    justify-content: space-between;
    .header-tag {
      margin-right: 44px;
      width: 150px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tag-left {
        width: 30%;
        white-space: nowrap;
        font-size: 10px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #343434;
      }
      .tag-right {
        outline: none;
        padding-left: 6px;
        width: 98px;
        height: 34px;
        background: #ffffff;
        border: 1px solid #efefef;
        border-radius: 4px;
        font-size: 9px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #4d4d4d;
      }
    }
  }
}
.btn-groups {
  margin: 20px 0;
  width: 100%;
  display: flex;
  font-size: 9px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  .btn1 {
    margin-left: auto;
    width: 80px;
    height: 38px;
    background: #ffffff;
    border: 1px solid #f13a34;
    border-radius: 4px;
    color: #f13a34;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn2 {
    width: 80px;
    height: 38px;
    background: linear-gradient(110deg, #f13232, #ef763c);
    border-radius: 4px;
    margin-left: 16px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.btn-groups1 {
  font-size: 9px;
  font-family: Source Han Sans CN;
  font-weight: 550;
  display: flex;
  margin: 20px 0;
  .btn1 {
    width: 108px;
    height: 38px;
    background: #ffffff;
    border: 1px solid #f13a34;
    border-radius: 3px;
    color: #f13a34;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  }
}
.footer {
  margin: 20px 0 !important;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
