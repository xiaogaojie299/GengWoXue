<template>
  <div>
    <container>
      <!-- 班级 -->
      <div class="class-box" v-for="(it, i) in TodayCourseList" :key = "i">
        <div class="class-title">{{ it.className }}</div>
        <!-- 课程列表 -->
        <div class="course-item"  v-for="(item, index) in it.list" :key="index">
          <!-- 左侧图片 -->
          <img class="left-img" :src="item.teacherAvater" />
          <!-- 右侧内容 -->
          <div class="right-content">
            <div class="right-content-top">
              <div class="right-content-top-group">
                <div class="right-content-top-group-title">
                  {{ item.courseName }}
                </div>
                <!-- <div class="tag">张三</div> -->
                <div class="tag">{{item.gradeName}}</div>
                <div class="tag">{{ item.courseNature }}</div>
              </div>
              <!-- 右侧课时 -->
              <div class="class-hour">
                {{ item.indexNum }}/{{ item.schoolHour }}课时
              </div>
            </div>
            <div class="right-content-bottom">
              <!-- 老师名字 -->
              <div class="teacher-name">{{ item.teacherName }}</div>
              <!-- 老师开课时间 -->
              <div class="start-times-box">
                <div class="start-times-item flex-center">
                  <img
                    class="icon_time mr-10"
                    src="@/assets/img/home/icon_time.png"
                    alt=""
                  />
                  <!-- <span>{{ item.time.split(":")[0] +":"+ item.time.split(":")[1] }}</span> -->
                  <span>{{ second(item.time) }}</span>
                </div>

                <!-- 未开始或者开始按钮 -->
                <!-- <div @click="go_live(item)" class="btn-start">
                  {{
                    item.status == 1
                      ? "未开始"
                      : item.status == 2
                      ? "进行中"
                      : "已结束"
                  }}
                </div> -->
                <div v-if="item.status == 1" @click="go_live(item)" class="btn-start hand">未开始</div>
                <div v-else-if="item.status == 2" @click="go_live(item)" class="btn-start hand">进行中</div>
                <div v-else class="btn-start hand">已结束</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </container>
  </div>
</template>
<script>
import {state} from "vuex";
import filters from "@/utils/filters"
export default {
  data() {
    return {};
  },
  props: {
    TodayCourseList: {
      type: Array,
      default: [],
    },
  },
  computed:{
    userInfo(){ //在vuex中拿到登录成功的列表{token,老师id} 传给直播页面
      return this.$store.state.userInfo
    }
  },
  methods:{
    second(time){
      // time====>12:00:00 - 12:00:12 
      let date = time.split("-");
      return filters.delSec(date[0]) + " - " + filters.delSec(date[1])
    },
    go_live(item){  //看直播
    console.log("跳转成功");
    console.log(item);
       let params = item;
        params.teacherId = this.userInfo.id;
        params.token = this.userInfo.token;
        params.avatar = this.userInfo.avatar;
       console.log("params==>",params);
        params = JSON.stringify(params)
        // window.open("http://www.xiaogaojie.vip:99/"+"?params="+encodeURIComponent(params));
        // window.open("https://demo.qcloudtiw.com/web/latest/index.html");
         // window.open("https://gengwoxue.com:8443/index.html"+"?params="+encodeURIComponent(params))
          window.open("https://gengwoxue.com:8443/live/index.html"+"?params="+encodeURIComponent(params))
          // window.open("http://127.0.0.1:5500/index.html"+"?params="+encodeURIComponent(params))
        // window.open("https://gengwoxue.com:8443/");
    },
  },
  created() {
    console.log("123,",this.TodayCourseList);
  },
  mounted(){
   
  }
};
</script>
<style lang="scss" scoped>
.class-title {
  color: #343434;
  margin: 22px 0;
  font-size: 12px;
}

.course-item {
  background: #ffffff;
  box-shadow: 1px 2px 58px 5px rgba(200, 200, 200, 0.32);
  border-radius: 4px;
  min-height: 144px;
  padding: 19px 27px 19px 22px;
  display: flex;
  .left-img {
    width: 142px;
    height: 142px;
    border-radius: 50%;
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
          font-size: 24px;
          height: 24px;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #343434;
        }

        // 标签
        .tag {
          margin-left: 24px;
          //   width: 52px;
          width: 105px;
          height: 33px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ffffff;
          border-radius: 4px;
          border: 1px solid #eb002a;
          //   文字
          font-size: 18px;
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
      height: 100%;
      margin-top: 29px;
      //   老师名字
      .teacher-name {
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #343434;
        // margin-bottom: 8px;
      }
      .start-times-box {
        .start-times-item {
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #343434;
          .icon_time {
            width: 18px;
            height: 18px;
          }
          span{
            // color: #adb4be !important;
          }
        }
        display: flex;
        justify-content: space-between;
        align-items: center;
        .btn-start {
          width: 141px;
          height: 49px;
          background: linear-gradient(110deg, #f13232, #ef753c);
          border-radius: 25px;
          //字体颜色
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #ffffff;
          margin-top: -4px;
        }
      }
    }
  }
}
</style>
