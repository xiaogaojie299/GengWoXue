<template>
  <div>
    <div class="title">班级测评</div>
    <div class="box">
      <!-- 上面标签 -->
      <div style="display: flex">
        <div class="header">
          <div class="header-tag">
            <div class="tag-left">学生:</div>
            <!-- 下拉多选框 -->
            <div class="tag-right">
              <input
                type="text"
                v-model="studentName"
                placeholder="输入学生姓名"
              />
            </div>
          </div>
          <!-- 班级 -->
          <div class="header-tag">
            <div class="tag-left">班级:</div>
            <!-- 下拉多选框 -->
            <div class="tag-right">
              <input
                type="text"
                v-model="className"
                placeholder="请输入班级名称"
              />
            </div>
          </div>
          <!-- 班级 -->
          <div class="header-tag">
            <div class="tag-left">考试状态:</div>
            <!-- 下拉多选框 -->
            <div class="tag-right">
              <div>
                <el-select
                  @change="change"
                  :popper-append-to-body="false"
                  v-model="examStatusValue"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in examStatus"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
                <img src="@/assets/img/answers/icon_arrow.png" alt="" />
              </div>
            </div>
          </div>
          <!-- 班级 -->
          <div class="header-tag">
            <div class="tag-left">阅卷状态:</div>
            <!-- 下拉多选框 -->
            <div class="tag-right">
              <div>
                <el-select
                  @change="change"
                  :popper-append-to-body="false"
                  v-model="scoreValue"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in scoreList"
                    :key="item.value"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
                <img src="@/assets/img/answers/icon_arrow.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="display: flex">
        <div class="header">
          <div class="header-tag">
            <div class="tag-left">考试试卷:</div>
            <!-- 下拉多选框 -->
            <div class="tag-right">
              <input
                type="text"
                v-model="examPaper"
                placeholder="请输入考试试卷"
              />
            </div>
          </div>

          <div class="header-tag">
            <div class="tag-left">考试类别:</div>
            <!-- 下拉多选框 -->
            <div class="tag-right">
              <div>
                <el-select
                  @change="change"
                  :popper-append-to-body="false"
                  v-model="testPaperTypeValue"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in testPaperType"
                    :key="item.value"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
                <img src="@/assets/img/answers/icon_arrow.png" alt="" />
              </div>
            </div>
          </div>

          <div class="header-tag">
            <div class="tag-left">成绩发布:</div>
            <!-- 下拉多选框 -->
            <div class="tag-right">
              <div>
                <el-select
                  @change="change"
                  :popper-append-to-body="false"
                  v-model="pushAnswerValue"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in pushAnswer"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
                <img src="@/assets/img/answers/icon_arrow.png" alt="" />
              </div>
            </div>
          </div>

          <div class="header-tag">
            <!-- <div class="tag-left"></div> -->
            <!-- 下拉多选框 -->
            <!-- <div class="tag-right"></div> -->
          </div>
        </div>
      </div>
      <div class="btn-groups">
        <div class="btn1">重置</div>
        <div class="btn2" @click="query">查询</div>
      </div>
      <!-- 查看课表按钮组 -->
      <div class="btn-groups1">
        <div class="btn1" @click="go_evalDetails">测评详情</div>
        <div class="btn1" @click="go_readWork">阅卷</div>
        <div class="btn1" @click="publish">发布成绩</div>
      </div>
      <!-- 底部表格 -->
      <div>
        <evaluation-table ref="evaCheck" @selectRow="selectRow" :active="active" :tableData="tableData" />
      </div>
    </div>
    <!-- 底部分页 -->

    <div class="footer">
      <page-device @handleCurrentChange="handleCurrentChange" :current="current" :total="total" />
    </div>
    <!-- 遮罩层弹框 -->

    <el-dialog :visible.sync="dialogVisible" :show-close="false" center>
      <myStudent @handleClose="closeMask" />
    </el-dialog>
  </div>
</template>
<script>
import evaluationTable from "./compontsCmps/evaluationTable";
import myStudent from "./compontsCmps/my-student";

import { queryClassEvaluation, pushExamination } from "@/network/officeCenter";
export default {
  data() {
    return {
      dialogVisible: false,
      className: "", //班级名称
      studentName: "", //学生姓名
      current: 1, //当前页码
      size: 10, //当前条数
      total: 0, //总数
      examStatus: [
        { id: "", name: "全部" },
        { id: 1, name: "缺考" },
        { id: 2, name: "完成" },
      ], //考试状态
      examStatusValue: "",
      scoreList: [
        { id: "", name: "全部" },
        { id: 1, name: "未阅卷" },
        { id: 2, name: "已阅卷" },
      ],
      scoreValue: "", //选择的值
      examPaper: "", //考试试卷
      testPaperType: [
        { id: "", name: "全部" },
        { id: 1, name: "线上" },
        { id: 2, name: "线下" },
      ],
      testPaperTypeValue: "",
      pushAnswer: [
        { id: "", name: "全部" },
        { id: 1, name: "未发布" },
        { id: 2, name: "已发布" },
      ],
      pushAnswerValue: "",
      tableData: [], //表格数据
      selectTest: [],
      active:0
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.get_ClassEvaluation();
    },
    // 调用子组件切换下标的方法
    childMethod(id=this.tableData[0].id){
      this.current>1||this.$refs.evaCheck.chekcout(id);
      console.log("调用成功",this.tableData[0]);
    },
    // 查询
    query() {
      this.current=1;
      this.get_ClassEvaluation();
      this.childMethod();
    },
    go_myStudent() {
      this.$router.push({
        path: "/page/officeCenter/OfficeCenterIndex/myStudent",
      });
    },
    //   关闭遮罩层
    closeMask() {
      console.log("调用成功");
      this.dialogVisible = false;
    },
    //   跳转到测评页面
    go_evalDetails() {
      console.log(this.selectTest);
      let data = JSON.stringify(this.selectTest);
      this.$router.push({
        path: "/page/officeCenter/evaluationDetail",
        query: {
          data: data,
        },
      });
    },
    //跳转到阅卷页面
    go_readWork() {
      let data = JSON.stringify(this.selectTest);
      this.$router.push({
        path: "/page/officeCenter/readwork",
        query: {
          data: data,
        },
      });
    },
    //发布成绩
    publish() {
      let params = {
        id: this.selectTest.id,
      };
      pushExamination(params).then((res) => {
        console.log("res==>",res);
        if(res.code == 200){
          this.$message({
            message:"发布成绩成功",
            type:"success"
          })
          this.get_ClassEvaluation();
        }else{
          this.$message.error({
            message:"发布成绩失败",
          })
        }
      });
    },
    //获取测评详情数据
    async get_ClassEvaluation() {
      let params = {
        current: this.current, //页码
        size: this.size, //每页多少条数据
        name: this.studentName, // 学生姓名
        pushAnswer: this.pushAnswerValue, //成绩发布 1==未发布 2 已发布
        scoring: this.scoreValue, //阅卷状态（1=未阅卷，2=已阅卷）
        status: this.examStatusValue, //考试状态（1=缺考，2=完成）
        testPaperName: this.examPaper, //试卷名称
        testPaperType: this.testPaperTypeValue, //考试类型（1=线上，2=线下）
      };
      let { code, data } = await queryClassEvaluation(params);
      if (code == 200) {
        this.tableData = data.list;
        this.total = data.total;
        this.childMethod(data.list[0].id)
        if (this.current == 1) {
          //this.active = data.list[0].id;  //根据ID来进行选择的判定
          this.selectTest = data.list[0];

        }
      }

      console.log("测评列表", data);
    },
    // 下拉框
    change(val) {},
    //table表格传过来选中的列
    selectRow(row) {
      this.selectTest = row;
    },
    // 分页
    handleCurrentChange(data) {
      this.current = data;
      this.get_ClassEvaluation();
    },
  },
  components: {
    evaluationTable,
    myStudent,
  },
};
</script>
<style lang="scss" scoped>
/deep/ .el-input__inner {
  padding-left: 6px;
  margin: 0;
  outline: none;
  border: none;
  width: 100%;
  // width: 121px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 3px;
  font-size: 10px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #343434;
}
/deep/ .el-input__icon {
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
input {
  padding: 0 6px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 3px;
  font-size: 9px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #4d4d4d;
  outline: none;
}
.title {
  font-size: 16px;
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
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    .header-tag {
      position: relative;
      width: 200px;
      display: flex;
      // justify-content: space-between;
      align-items: center;
      .tag-left {
        // width: 30%;
        white-space: nowrap;
        font-size: 10px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #343434;
        margin-right: 6px;
      }
      .tag-right {
        // width: 98px;
        width: 100%;
        height: 34px;
        background: #ffffff;
        border: 1px solid #efefef;
        border-radius: 4px;
        font-size: 9px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #4d4d4d;
        & img {
          width: 10px;
          height: 10px;
          position: absolute;
          right: 6px;
          top: 50%;
          transform: translateY(-50%);
        }
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
