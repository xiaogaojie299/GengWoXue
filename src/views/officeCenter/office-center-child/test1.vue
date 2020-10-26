<template>
  <div>
    <breadcrumb-nav>
      <div slot="nav-name">课程表</div>
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
              <span class="input-style">英语直播课</span>
            </div>
          </row-template>
        </div>

        <div class="top-box">
          <row-template>
            <span slot="title">主讲人：</span>
            <div class="course-information vertical-center" slot="content">
              <span class="input-style">张老师</span>
            </div>
          </row-template>
        </div>
        <div class="top-box">
          <row-template>
            <span slot="title">直播间:</span>
            <div class="course-information vertical-center" slot="content">
              <span class="input-style">直播间AAAA</span>
            </div>
          </row-template>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between">
        <div class="top-box">
          <row-template>
            <span slot="title">授课班级:</span>
            <div class="course-information vertical-center" slot="content">
              <span class="input-style">三班</span>
            </div>
          </row-template>
        </div>
        <div class="top-box">
          <row-template>
            <span slot="title">授课时间：</span>
            <div class="course-information vertical-center" slot="content">
              <span class="input-style">张老师</span>
            </div>
          </row-template>
        </div>
        <div class="top-box">
          <row-template>
            <span slot="title">助教：</span>
            <div class="course-information vertical-center" slot="content">
              <span class="input-style">张老师</span>
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
              <span class="input-style">英语第一课课件.p</span>
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
            <div slot="content">
              <span class="input-style">英语第一课课后习题</span>
              <span style="color:#0E51B7;margin-left:8px">习题已发送，点击重新上传</span>
            </div>
          </row-template>
        </div>

        <!-- 学生情况 -->
        <div class="student-info">
            邀请参加（ <span>30</span> ） 参加直播（ <span>30</span> ）； 完成习题人数（ <span>30</span> ）批阅（30）；
        </div>

        <!-- 学生表格 -->
        <div class="student-box m-t">
          <!-- 占位符号,与基线保持一致 -->
          <span style="width:60px;"></span>
          <div class="studentTabel">
              <studentTable />
          </div>
        </div>
      </div>
    </div>
    <!-- 底部分页 -->
     <!-- 分页 -->
        <div class="footer vertical-center w-1">
            <page-device />
        </div>
  </div>
</template>

<script>
import studentTable from "./compontsCmps/studentTable"
export default {
    data(){
        return{

        }
    },
    components:{
        studentTable
    },
  methods: {
    go_child() {
      this.$router.push({
        path: "/officeCenter/teacherLive",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.m-t{
    margin-top:12px
}
.w-1{
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
  min-height: 702px;
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
.student-info{
font-size: 10px;
font-family: Source Han Sans CN;
font-weight: 400;
color: #343434;
}
.student-box{
    display: flex;
    & span{
        width: 70px;
    }
}
.studentTabel{
    width:100%;
    height:100%;
}

// 底部分页
.footer{
    margin:22px 0;
}
</style>