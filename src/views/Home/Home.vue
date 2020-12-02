<template>
  <div id="box">
    <div class="bannaer">
      <swiper :bannerList="bannerList"></swiper>
    </div>
    <!-- 面包屑 -->
    <crumbs>今日课程</crumbs>
    <!-- 今日课程列表 -->
    <div>
      <todayCourse
        v-if="TodayCourseList.length > 0"
        :TodayCourseList="TodayCourseList"
      />
      <container v-else>
        <div class="noCurese">
          今日暂无课程安排
        </div>
      </container>
    </div>
    <!-- 排行榜 -->
    <div>
      <crumbs>排行榜</crumbs>
      <container>
        <div class="rank-list-box">
          <div>
            <rank-list></rank-list>
          </div>
          <div>
            <rank-list></rank-list>
          </div>
        </div>
      </container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import swiper from "./childCmps/swiper";
import todayCourse from "./childCmps/today-course";
import rankList from "./childCmps/rank-list";

import {
  queryBanner,
  queryClassHourRand,
  queryTodayCourse,
} from "@/network/home.js";
export default {
  name: "Home",
  data() {
    let TodayCourseList = [
      {
        classId: 4, //所属班级ID
        className: "", //所属班级名称
        courseId: "", //所属课程ID
        courseName: "", //所属课程名称
        courseNature: "", //课程性质
        day: "", //上课日期
        gradeName: "", //年级名称
        indexNum: "", //当前课时
        scheduleId: "", //排课ID
        schoolHour: "", //授课总课时
        status: "", //业务状态（1=未开始，2=进行中，3=已结束）
        subjectName: "", //科目名称
        teachWay: "", //授课方式
        teacherAvater: "", //主教老师头像
        teacherId: "", //主教老师ID
        teacherName: "", //主教老师昵称
        time: "", //上课时间段
      },
    ];
    return {
      bannerList: [], //轮播图列表
      TodayCourseList: TodayCourseList, //今日课程
    };
  },
  components: {
    swiper,
    todayCourse,
    rankList,
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      this.getBanner(); //获取首页轮播页面
      this.getClassHourRand(); //获取老师课时数排行
      this.getTodayCourse();
    },
    // 获取首页轮播图
    async getBanner() {
      let data = { type: 1 }; //1=学生APP端，2=学生网页端，3=老师端
      let res = await queryBanner(data);
      this.bannerList = res;
    },
    // 获取老师课时数排行
    getClassHourRand() {
      queryClassHourRand().then((res) => {
        console.log(res);
      });
    },
    getTodayCourse() {
      let data = {
        current: 1,
        size: 10,
      };
      queryTodayCourse(data).then((res) => {
        this.TodayCourseList = res;
        console.log("TodayCourseList", this.TodayCourseList);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.bannaer {
  padding: 10px;
}
.rank-list-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.noCurese {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  font-size: 26px;
}
</style>
