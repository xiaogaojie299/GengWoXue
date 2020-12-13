<template>
  <div>
    <breadcrumb-nav>
      <div slot="nav-name" class="hand" @click="go_back()">课程表</div>
      <div slot="nav-child">课程详情</div>
    </breadcrumb-nav>
    <!-- 下面主题内容 -->
    <div class="main w-1">
      <div class="title-style">课程信息</div>
      <div style="display: flex; justify-content: space-between">
        <div class="top-box">
          <row-template>
            <span slot="title">直播课程:</span>
            <div class="course-information vertical-center" slot="content">
              <span class="input-style">{{ couseDetail.courseName }}</span>
            </div>
          </row-template>
        </div>

        <div class="top-box">
          <row-template>
            <span slot="title">主讲人：</span>
            <div class="course-information vertical-center" slot="content">
              <span class="input-style">{{ couseDetail.keynoteTeacher }}</span>
            </div>
          </row-template>
        </div>
        <div class="top-box">
          <row-template>
            <span slot="title">直播间:</span>
            <div class="course-information vertical-center" slot="content">
              <span class="input-style">{{
                couseDetail.liveBroadcastHome || "暂无直播间"
              }}</span>
            </div>
          </row-template>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between">
        <div class="top-box">
          <row-template>
            <span slot="title">授课班级:</span>
            <div class="course-information vertical-center" slot="content">
              <span class="input-style">{{ couseDetail.className }}</span>
            </div>
          </row-template>
        </div>
        <div class="top-box">
          <row-template>
            <span slot="title">授课时间：</span>
            <div class="course-information vertical-center" slot="content">
              <span class="input-style">{{ couseDetail.classTime }}</span>
            </div>
          </row-template>
        </div>
        <div class="top-box">
          <row-template>
            <span slot="title">助教：</span>
            <div class="course-information vertical-center" slot="content">
              <span class="input-style">{{
                couseDetail.assistantTeacher
              }}</span>
            </div>
          </row-template>
        </div>
      </div>

      <!-- 上课情况 -->
      <div style="margin-top: 8px">
        <div class="title-style">上课情况</div>
        <div>
          <row-template>
            <span slot="title">直播课程:</span>
            <div slot="content">
              <span class="input-style">{{ couseDetail.coursewareName }}</span>
            </div>
          </row-template>
        </div>

        <!-- 授课班级 -->
        <div class="class-situation">
          <span>授课班级：</span>
          <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <!-- 课后习题 -->
        <div class="exercise">
          <row-template>
            <span slot="title">课后习题：</span>
            <div style="display: flex;align-items: center;" slot="content">
              <span class="input-style">{{
                couseDetail.examinationName || "暂未上传习题"
              }}</span>
              <span
                @click="open"
                class="hand"
                style="color:#0E51B7;margin-left:8px"
                >{{
                  couseDetail.examinationName
                    ? "习题已发送，点击重新上传"
                    : "上传习题"
                }}</span
              >
            </div>
          </row-template>
        </div>

        <!-- 学生情况 -->
        <div class="student-info">
          邀请参加（ <span>{{ couseDetail.invitation }}</span> ） 参加直播（
          <span>{{ couseDetail.invitation }}</span> ）； 完成习题人数（
          <span>{{ couseDetail.overTest }}</span> ）批阅（{{
            couseDetail.review
          }}）；
        </div>

        <!-- 学生表格 -->
        <div class="student-box m-t">
          <!-- 占位符号,与基线保持一致 -->
          <span style="width:60px;"></span>
          <div class="studentTabel">
            <studentTable :tableData="tableData" />
          </div>
        </div>
      </div>
    </div>

    <el-dialog :visible.sync="dialogVisible" :show-close="false" center>
      <selectTestTable :scheduleId="scheduleId" />
    </el-dialog>

    <!-- 底部分页 -->
    <!-- 分页 -->
    <div class="footer vertical-center w-1">
      <page-device
        :current="current"
        @handleCurrentChange="handleCurrentChange"
        :total="total"
      />
    </div>
  </div>
</template>

<script>
import studentTable from "./compontsCmps/studentTable";
import selectTestTable from "./compontsCmps/select-testTable";
import { queryCourseInfoDate, queryCourseInfo } from "@/network/officeCenter";
import { exmixin } from "./ex-mixin/mixin";
export default {
  mixins: [exmixin],
  data() {
    return {
      scheduleId: "",
      couseDetail: {},
      tableData: [],
      total: 0,
      current: 1,
      size: 10,
    };
  },
  provide() {
    return {
      _this: this,
      name: this.name,
    };
  },
  components: {
    studentTable,
    selectTestTable,
  },
  created() {
    this.init();
  },
  methods: {
    // 初始化
    init() {
      let scheduleId = this.$route.query.scheduleId;
      this.scheduleId = Number(scheduleId);
      this.getDaySchedule();
      this.getCourseInfo();
    },
    go_child() {
      this.$router.push({
        path: "/page/officeCenter/teacherLive",
      });
    },
    // 获取课程详情
    getDaySchedule() {
      let params = {
        scheduleId: this.scheduleId,
      };
      queryCourseInfoDate(params).then((res) => {
        console.log("获取课程", res);
        let { code, data } = res;
        if (code == 200) {
          this.timerCourse = data;
          this.couseDetail = data;
        }
      });
    },
    // 获取排课详情中的列表数据
    getCourseInfo() {
      let data = {
        scheduleId: this.scheduleId, //排课id
        current: this.current, //当前页
        size: this.size, //当前数据多少
      };
      queryCourseInfo(data).then((res) => {
        let { code, data } = res;
        if (code == 200) {
          this.tableData = data.list;
          this.total = data.total;
        }
        console.log("获取table==", res);
      });
    },
    //分页组件传过来的页码
    handleCurrentChange(current) {
      this.current = current;
      this.getCourseInfo();
    },
    //返回上一页
    go_back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
/deep/ .el-dialog {
  width: 80%;
}
/deep/ .el-dialog__body {
  // height: 700px;
  width: 100%;
}
.m-t {
  margin-top: 12px;
}
.w-1 {
  width: 900px;
}
textarea {
  width: 100%;
}
// 标题样式
.title-style {
  font-size: 13px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #343434;
  line-height: 35px;
}
// input框中的字体样式
.input-style {
  font-size: 2px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #4d4d4d;
  line-height: 17px;
}
// 垂直居中
.vertical-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.main {
  // min-height: 702px;
  background: #f9f9f9;
  padding: 12px 70px 14px 15px;
}
.course-information {
  width: 125px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 3px;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // 字体样式
}
.class-situation {
  width: 100%;
  display: flex;
  font-size: 10px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #343434;
  & span {
    display: inline-block;
    white-space: nowrap;
    width: 60px;
    text-align: left;
    font-size: 10px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #343434;
  }
  & div {
    width: 100%;
  }
}
.student-info {
  font-size: 10px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #343434;
}
.student-box {
  display: flex;
  & span {
    width: 70px;
  }
}
.studentTabel {
  width: 100%;
  height: 100%;
}

// 底部分页
.footer {
  margin: 22px 0;
}
</style>
