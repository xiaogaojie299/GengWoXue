<template>
  <div class="box">
    <!-- 头部日历 -->
    <breadcrumb-nav v-if="Object.keys(classInfo).length !== 0">
      <div slot="nav-name" @click="goBack">我的班级</div>
      <div slot="nav-child">{{classInfo.name}}</div>
    </breadcrumb-nav>
    <div class="header">
      <calendar @initCurrent="initCurrent" :MonthClass="MonthClass"  @checkDay="checkDay" @checkMonth="checkMonth"></calendar>
    </div>
    <!-- 底部详情 -->
    <div>
      <div class="class-box" v-for="(it,i) in timerCourse" :key="i">
        <div class="class-title">{{it.className}}</div>
        <!-- 课程列表 -->
        <div v-for="(item,index) in it.list" :key="index" class="course-item">
          <!-- 左侧图片 -->
          <img class="left-img" :src="item.teacherAvater" />
          <!-- 右侧内容 -->
          <div class="right-content">
            <div class="right-content-top">
              <div class="right-content-top-group">
                <div class="right-content-top-group-title">
                  {{item.courseName}}
                </div>
                <div class="tag">{{item.gradeName}}</div>
                <div class="tag">{{item.courseNature}}</div>
                <div class="tag">{{item.teachWay}}</div>
              </div>
              <!-- 右侧课时 -->
              <div class="class-hour">{{item.indexNum	}}/{{item.schoolHour}}课时</div>
            </div>
            <div class="right-content-bottom">
              <!-- 老师名字 -->
              <div class="teacher-name">{{item.teacherName}}</div>
              <!-- 老师开课时间 -->
              <div class="start-times-box">
                <div class="start-times-item">
                  <img
                    class="icon_time"
                    src="@/assets/img/home/icon_time.png"
                    alt=""
                  />
                  <span>{{item.time}}</span>
                </div>

                <!-- 未开始或者开始按钮 -->
                <div class="btn-start">{{item.status==1?"未开始":item.status==2?"进行中":"已结束"}}</div>
              </div>
            </div>
          </div>
          <!-- 课程详情 -->
          <div class="course-detail"></div>
          <div class="course-detail1" @click="go_courseDetail(item.scheduleId)">课程详情</div>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <div class="page-device">
      <page-device :total="total" @handleCurrentChange="handleCurrentChange"></page-device>
    </div>
  </div>
</template>
<script>
import {queryDaySchedule,queryTeacherSchedule } from '@/network/officeCenter'
import * as utils from "@/utils/getData";
export default {
  data() {
  let {year,month,day}=utils.getYearMonthDay(new Date());
    return {
      dayTimer:new Date(),  //按天查询课程
      monthTimer:new Date(),  //按月查询课程
      isdayTimer:false,      //控制按月查询还是按日查询的开关
      current:1,
      size:10,
      total:0,
      timerCourse:[],     //课程表数据
      MonthClass:[],
      classInfo:[],       //班级数据 从我的班级课程表传入
      studentInfo:[]      //学生数据，从我的学生课程表传入
    };
  },
  created(){
    this.init()
  },  
  watch:{
    // 监听现在是按时间查询还是按月查询
    dayTimer(){
      this.isdayTimer=true;
      this.current=1;
    },
    monthTimer(){
      this.isdayTimer=false;
      this.current=1;
      this.getMonthTeacherSchedule()
    }
  },
  methods: {
    init(){
      console.log("this.$route.query==>",this.$route.query);
      // 判断当前传过来的是班级信息还是学生信息
    if(Object.keys(this.$route.query).indexOf('classInfo')!=-1){
      this.classInfo=JSON.parse(this.$route.query.classInfo);
    }else if(Object.keys(this.$route.query).indexOf('studentInfo')!=-1){
      this.studentInfo=JSON.parse(this.$route.query.studentInfo);
    }else{
      
    }
    this.getDaySchedule()  //按时间查询课程
    this.getMonthTeacherSchedule()  //查询这个月有那几天有课
    },
    // 按天查询获取的时间
    getDaySchedule(){
     let day = utils.getTimeType(this.dayTimer);
      let params={
        current:this.current,
        size:this.size,
        day:day,
        classId:this.classInfo.id||"",
        studentId:this.studentInfo.id||""
      }
      queryDaySchedule(params).then(res=>{
        console.log("获取课程",res.list);
        let {data,code} =res;
        this.timerCourse=data.list;
        this.total = data.total;
      })
    },
    // 按月查询课程数
    getMonthTeacherSchedule(){
      let day=utils.getTimeType(this.monthTimer,true);
      let data={
        current:this.current,
        size:this.size,
        day:day
      }
      console.log("data=",data);
      queryTeacherSchedule(data).then(res=>{
        console.log("获取月课程",res);
        if(res=="undefind"||res.length==0){
            this.MonthClass=[{number:1,strTime:"2020-12-25"},{number:2,strTime:"2020-12-22"}]
            console.log("MonthClass=",this.MonthClass);
        }else{
          this.MonthClass=res;
        }
      })
    },
    // 跳转课程详情
    go_courseDetail(id,day) {
      this.$router.push({
        path: "/page/officeCenter/OfficeCenterIndex/test1",
        query:{scheduleId:id}
      });
    },

    // 日历组件自定义的方法传给这个页面
    checkDay(data){
      console.log(data);
        this.dayTimer=data;
        this.getDaySchedule();
    },

    checkMonth(data){
      let {year,month,day}=data;
      let days=utils.getDate(year,month,day);
      this.monthTimer=days
      this.getMonthTeacherSchedule()
    },

    initCurrent(i){
      this.current=1;
    },

    //分页页数
    handleCurrentChange(data){
      this.current=data;
        this.getDaySchedule();  //按天查询 2020-09-09
        this.getMonthTeacherSchedule()  //按月查询2020-09 有多少节课
    },
    goBack(){
        this.$router.go(-1);
    }
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
}
.header {
  width: 100%;
  // height: 100%;
  min-height: 431px;
  background: #ffffff;
  box-shadow: 1px 2px 36px 4px rgba(200, 200, 200, 0.32);
  border-radius: 3px;
}

// 底部
.class-title {
  color: #343434;
  margin: 22px 0;
  font-size: 12px;
}
// 课程详情
.course-detail {
  width: 120px;
}
.course-detail1 {
  width: 101px;
  background: #ef6e3b;
  box-shadow: 0px 1px 36px 3px rgba(200, 200, 200, 0.32);
  border-radius: 3px;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;

  font-size: 15px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.course-item {
  position: relative;
  background: #ffffff;
  box-shadow: 1px 2px 58px 5px rgba(200, 200, 200, 0.32);
  border-radius: 4px;
  min-height: 144px;
  padding: 19px 27px 19px 22px;
  display: flex;
  .left-img {
    width: 88px;
    height: 88px;
    border-radius: 50%;
    border: 1px solid blue;
    margin-right: 12px;
  }

  .right-content {
    padding-top: 4px;
    width: 90%;
    height: 88px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .right-content-top {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 32px;
      .right-content-top-group {
        width: 85%;
        display: flex;
        align-items: center;

        .right-content-top-group-title {
          font-size: 15px;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #343434;
        }

        // 标签
        .tag {
          margin-left: 24px;
          //   width: 52px;
          width: 65px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ffffff;
          border-radius: 4px;
          border: 1px solid #eb002a;
          //   文字
          font-size: 11px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #eb002a;
        }
      }
      .class-hour {
        font-size: 15px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #343434;
      }
    }

    .right-content-bottom {
      width: 100%;
      height: 80%;
      margin-top: 4px;
      //   老师名字
      .teacher-name {
        font-size: 15px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #343434;
      }
      .start-times-box {
        .start-times-item {
          font-size: 12px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #343434;
          .icon_time {
            width: 11px;
            height: 11px;
          }
        }
        display: flex;
        justify-content: space-between;
        align-items: center;
        .btn-start {
          width: 88px;
          height: 30px;
          background: linear-gradient(110deg, #f13131, #ef753b);
          border-radius: 15px;

          //字体颜色
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 15px;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #ffffff;
          margin-top: -4px;
        }
      }
    }
  }
}
//分页
.page-device{
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
