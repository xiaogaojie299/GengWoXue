<template>
  <div class="box">
    <!-- 头部日历 -->
    <div class="header">
      <calendar></calendar>
    </div>
    <!-- 底部详情 -->
    <div>
      <div class="class-box" v-for="i in 3" :key="i">
        <div class="class-title">一班</div>
        <!-- 课程列表 -->
        <div class="course-item">
          <!-- 左侧图片 -->
          <div class="left-img"></div>
          <!-- 右侧内容 -->
          <div class="right-content">
            <div class="right-content-top">
              <div class="right-content-top-group">
                <div class="right-content-top-group-title">
                  一年级英语清华培训
                </div>
                <div class="tag">张三</div>
                <div class="tag">高三</div>
                <div class="tag">基础班</div>
              </div>
              <!-- 右侧课时 -->
              <div class="class-hour">7/32课时</div>
            </div>
            <div class="right-content-bottom">
              <!-- 老师名字 -->
              <div class="teacher-name">Huik</div>
              <!-- 老师开课时间 -->
              <div class="start-times-box">
                <div class="start-times-item">
                  <img
                    class="icon_time"
                    src="@/assets/img/home/icon_time.png"
                    alt=""
                  />
                  <span>14:30-16:30</span>
                </div>

                <!-- 未开始或者开始按钮 -->
                <div class="btn-start">未开始</div>
              </div>
            </div>
          </div>
          <!-- 课程详情 -->
          <div class="course-detail"></div>
          <div class="course-detail1" @click="go_courseDetail">课程详情</div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    go_courseDetail() {
      this.$router.push({
        path: "/page/officeCenter/OfficeCenterIndex/test1",
      });
    },
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
  height: 431px;
  background: #ffffff;
  box-shadow: 1px 2px 36px 4px rgba(200, 200, 200, 0.32);
  border-radius: 3px;
  border: 1px solid black;
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
</style>
