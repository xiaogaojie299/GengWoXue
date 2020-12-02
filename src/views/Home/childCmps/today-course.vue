<template>
  <div>
    <container>
      <!-- 班级 -->
      <div
        class="class-box"
        v-for="(item, index) in TodayCourseList"
        :key="index"
      >
        <div class="class-title">{{ item.className }}</div>
        <!-- 课程列表 -->
        <div class="course-item">
          <!-- 左侧图片 -->
          <img class="left-img" :src="item.teacherAvater" />
          <!-- 右侧内容 -->
          <div class="right-content">
            <div class="right-content-top">
              <div class="right-content-top-group">
                <div class="right-content-top-group-title">
                  {{ item.courseName }}
                </div>
                <!-- <div class="tag">张三</div>
                <div class="tag">高三</div> -->
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
                <div class="start-times-item">
                  <img
                    class="icon_time"
                    src="@/assets/img/home/icon_time.png"
                    alt=""
                  />
                  <span>{{ item.time }}</span>
                </div>

                <!-- 未开始或者开始按钮 -->
                <div class="btn-start">
                  {{
                    item.status == 1
                      ? "未开始"
                      : item.status == 2
                      ? "进行中"
                      : "已结束"
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </container>
  </div>
</template>
<script>
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
  created() {
    console.log(this.TodayCourseList);
  },
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
          font-size: 24px;
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
