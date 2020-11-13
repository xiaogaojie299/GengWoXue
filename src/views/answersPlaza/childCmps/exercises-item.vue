<template>
  <div class="box">
    <div class="exercises-item" @click="go_exDetail()">
      <!-- 顶部标题 -->
      <div class="top-title">这道数学题如何解</div>
      <!-- 中间内容 -->
      <div class="main-content">
        <!-- 题目详情 -->
        <div class="exercises-detail">
          如图，若∠1=∠2，∠C=∠D，问∠A与∠F有什么关系，并说明理由？
        </div>
        <!-- 题目图片 -->
        <div class="exercises-img">
          <!-- <div class="exercises-img-item" v-for="i in 2" :key="i"></div> -->
          <el-image
            style="width: 105px;height: 105px;"
            :src="url"
            :preview-src-list="srcList"
          >
          </el-image>
        </div>
      </div>
      <!-- 底部详情 -->
      <div class="footer">
        <div class="footer-left">
          <img src="@/assets/img/answers/icon_coin.png" alt="" />
          <span>1200</span>
        </div>
        <div class="footer-center">5个回答</div>
        <div class="footer-right">2020/04/24 14:20</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
      ],
    };
  },
  methods: {
    go_exDetail() {
      console.log("跳转成功");
      this.$router.push({
        path: "/page/answersPlaza/exercises-detail",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  min-height: 218px;
  background: #ffffff;
  box-shadow: 1px 2px 58px 5px rgba(200, 200, 200, 0.32);
  border-radius: 4px;
  margin: 10px 0;
  padding: 25px 27px;
}
.exercises-item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100%;
  .top-title {
    font-size: 15px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #343434;
    margin-bottom: 17px;
  }

  .main-content {
    .exercises-detail {
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #9a9a9a;
      margin-bottom: 25px;
    }
    .exercises-img {
      display: flex;
      flex-wrap: nowrap;
      margin-bottom: 15px;
      margin-right: 48px;
      .exercises-img-item {
        width: 105px;
        height: 105px;
        background: #000;
      }
    }
  }
  // 底部
  .footer {
    display: flex;
    width: 25%;
    justify-content: space-between;
    .footer-left {
      display: flex;
      align-items: center;
      img {
        width: 18px;
        height: 20px;
        margin-right: 10px;
      }
      span {
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #9a9a9a;
      }
    }
    .footer-center,
    .footer-right {
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #9a9a9a;
    }
  }
}
</style>
