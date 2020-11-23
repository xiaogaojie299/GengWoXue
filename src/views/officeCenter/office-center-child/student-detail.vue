<template>
  <div class="box">
      <div style="margin-left:23px">
        <breadcrumb-nav>
        <span slot="nav-name">我的学生</span>
        <span slot="nav-child">{{studyInfo.name}}个人信息</span>
        </breadcrumb-nav>
      </div>

    <div class="main">
      <div class="main-top">
        <!-- 标题 -->
        <div class="top-title">基本信息</div>
        <!-- 学生资料 -->
        <div class="stu-Info-box">
          <div class="row-box">
            <div class="left-title mt-1 pt">头像:</div>
            <img class="right-img" :src="studyInfo.avatar" />
          </div>

          <div class="row-box">
            <div class="left-title">姓名：</div>
            <div class="right-content my-font">{{studyInfo.name}}</div>
          </div>
          <!-- 一行多个 -->
          <div class="rows">
            <div>
              <div class="row-box">
                <div class="left-title">性别：</div>
                <div class="right-content my-font">{{studyInfo.sex}}</div>
              </div>
            </div>
            <div>
              <div class="row-box">
                <div class="left-title">生日：</div>
                <div class="right-content my-font">{{studyInfo.birthday}}</div>
              </div>
            </div>
            <div>
              <div class="row-box">
                <div class="left-title">在读班级：</div>
                <div class="right-content my-font">{{studyInfo.className}}</div>
              </div>
            </div>
          </div>
          <div class="rows">
            <div>
              <div class="row-box">
                <div class="left-title">在读课程：</div>
                <div class="right-content my-font">{{studyInfo.courseName}}</div>
              </div>
            </div>
            <div>
              <div class="row-box">
                <div class="left-title">学员状态：</div>
                <div class="right-content my-font"> {{ studentType(studyInfo.studentState)}}</div>
              </div>
            </div>
            <div>
              <div class="row-box">
                <div class="left-title">总课时：</div>
                <div class="right-content my-font">{{studyInfo.classHour}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 成长记录 -->
      <div class="main-center">
        <div class="top-title">成长记录</div>
          <div class="table">
              <growth-table></growth-table>
          </div>
          <div class="page-device">
            <page-device @handleCurrentChange="handleCurrentChange" />
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import growthTable from "./compontsCmps/growthTable"
import {queryEvaluationList} from "@/network/officeCenter"
export default {
  data() {
    return {
      studyInfo:{},
      current:1,
      size:10,
      tableData:[]
    };
  },
  created(){
    this.studyInfo=JSON.parse(this.$route.query.stuInfo);
    console.log("studyInfo=",this.studyInfo)
    this.init()
},
  methods:{
    init(){
      this.get_EvaluationList()
    },
    studentType(i){
      console.log("i",i);
      switch(i){
        case 1:
        return "在读";
         case 2:
        return "未分班";
         case 3:
        return "转班";
         case 4:
        return "离班";
        case 5:
        return "已结课";
        case 6:
        return "停课";
        case 7:
        return "已退学";
        default :
        return "已转科"
      }
    },
    // 获取学生详情
    async get_EvaluationList(){
      let data={
        current:this.current,
        size:this.size,
        id:this.studyInfo.id||""
      }
    let res = await queryEvaluationList(data);
      console.log("学生记录",res);
    },
    // 分页
    handleCurrentChange(currenr){
      this.current=currenr;
      this.get_EvaluationList()
    }
  },
  components:{
      growthTable
  }
};
</script>
<style lang="scss" scoped>

.mt-1 {
  margin-bottom: auto;
}
.pt {
  padding-top: 10px;
}
.top-title {
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 550;
  color: #343434;
  line-height: 55px;
}
.my-font {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #4d4d4d;
}
.main {
    padding: 18px 85px 20px 23px;
  width: 1014px;
  height: 844px;
  background: #f9f9f9;
  .main-top {
    .stu-Info-box {
      .row-box {
        display: flex;
        margin: 10px 0;
        align-items: center;
        .left-title {
          width: 75px;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #333333;
          white-space: nowrap;
        }
        .right-img {
          width: 100px;
          height: 100px;
          border: 1px solid red;
        }
        .right-content {
          width: 167px;
          height: 34px;
          background: #ffffff;
          border: 1px solid #efefef;
          border-radius: 4px;
          display: flex;
          align-items: center;
          padding-left: 19px;
        }
      }
      //   一行多个
      .rows {
        display: flex;
        justify-content: space-between;
        & > div {
          width: 240px;
          height: 60px;
        }
      }
    }
  }
  .main-center{
      .table{
          width: 794px;
          margin-left: 75px;
          border: 1px solid black;
      }
      .page-device{
        display: flex;
        justify-content: center;
        margin:20px 0;
      }
  }
}

.row-box {
        display: flex;
        margin: 10px 0;
        align-items: center;
        .left-title {
          width: 75px;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #333333;
          white-space: nowrap;
        }
        .right-img {
          width: 100px;
          height: 100px;
          border: 1px solid red;
        }
        .right-content {
          width: 167px;
          height: 34px;
          background: #ffffff;
          border: 1px solid #efefef;
          border-radius: 4px;
          display: flex;
          align-items: center;
          padding-left: 19px;
        }
      }
</style>