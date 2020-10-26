<template>
  <div>
    <!-- 顶部面包屑 -->
    <container>
      <breadcrumb-nav>
        <span slot="nav-name">问答广场</span>
        <span slot="nav-child">{{ routeNme }}</span>
      </breadcrumb-nav>

      <!-- 下面内容 -->
      <div class="main">
        <!-- 内容详情 -->
        <div class="exercises-item">
          <!-- 顶部标题 -->
          <div class="top-title">这道数学题如何解</div>
          <!-- 中间内容 -->
          <div class="main-content">
            <!-- 题目详情 -->
            <div class="timer">2020/04/24 14:20</div>
            <div class="exercises-detail">
              如图，若∠1=∠2，∠C=∠D，问∠A与∠F有什么关系，并说明理由？
            </div>
            <!-- 题目图片 -->
            <div class="exercises-img">
              <!-- <div class="exercises-img-item" v-for="i in 2" :key="i"></div> -->
              <el-image
                style="width: 168px; height: 168px"
                :src="url"
                :preview-src-list="srcList"
              >
              </el-image>
            </div>
          </div>
          <!-- 底部详情 -->
          <div class="footer">
            <span>5个回答</span>
          </div>
        </div>
        <!-- 回答列表 -->

        <div class="answer" v-for="i in 3" :key="i">
          <div class="answer-info">
            <!-- 回答人头像 -->
            <div class="answer-people-img"></div>
            <!-- 回答人回复时间和姓名 -->
            <div class="answer-people">
              <div class="right-box">
                <span class="answer-people-name">张三</span>
                <span class="answer-people-tag">{{
                  i == 1 ? "已采纳" : "我的回答"
                }}</span>
                <span class="answer-delete" v-show="i != 1">删除回答</span>
              </div>
              <div class="answer-people-time">2020/04/24 14:20</div>
            </div>
          </div>
          <!-- 回答内容 -->
          <div class="answer-content">
            这个问题应该是这样的，已知∠1=∠2，那么应该是这样，已知∠C=∠D,那么应该给是这样，所以∠A=∠F
          </div>
        </div>
      </div>

      <!-- 底部回答 -->
      <div class="footer-input">
        <input
          type="text"
          placeholder="回答被采纳后将会获得奖励哦（100字内）"
        />
        <div class="btn">我来回答</div>
      </div>
    </container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routeNme: "",
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
      ],
    };
  },
  methods: {},
  mounted() {
    console.log("router=", this.$route);
    this.routeNme = this.$route.name;
  },
};
</script>
<style lang="scss" scoped>
.main {
  min-height: 679px;
  background: #ffffff;
  box-shadow: 1px 2px 58px 5px rgba(200, 200, 200, 0.32);
  padding: 25px 27px;
  .exercises-item {
    display: flex;
    flex-direction: column;
    min-height: 300px;

    .top-title {
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #343434;
      margin-bottom: 13px;
    }

    .main-content {
      .timer {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #9a9a9a;
        margin-bottom: 4px;
      }
      .exercises-detail {
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #9a9a9a;
        margin-bottom: 17px;
      }
      .exercises-img {
        display: flex;
        flex-wrap: nowrap;
        margin-bottom: 15px;
        margin-right: 48px;
        .exercises-img-item {
          width: 168px;
          height: 168px;
          background: #000;
        }
      }
    }
    // 底部
    .footer {
      span {
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #9a9a9a;
      }
    }
  }

  .answer {
    margin-top: 17px;
    height: 130px;
    // border: 1px solid red;
    border-top: 1px solid #e2e2e2;
    padding-top: 20px;
    .answer-info {
      display: flex;
      .answer-people-img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
        background: #000;
        margin-right: 9px;
      }
      .answer-people {
        .right-box {
          display: flex;
          .answer-people-name {
            font-size: 20px;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #343434;
          }
          .answer-people-tag {
            min-width: 88px;
            height: 26px;
            background: #ffffff;
            border: 1px solid #eb002a;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            // 标签字体

            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #eb002a;

            margin-left: 10px;
          }
          .answer-delete {
            width: 84px;
            height: 26px;
            background: #eb002a;
            border-radius: 4px;
            // 字体颜色
            font-size: 16px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #ffffff;
            margin-left: 10px;
            // 垂直居中
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .answer-people-time {
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #9a9a9a;
        }
      }
    }
    .answer-content {
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #666666;
      margin-top: 19px;
    }
  }
}

.footer-input {
  width: 100%;
  height: 94px;
  background: #ffffff;
  box-shadow: 1px 4px 51px 9px rgba(197, 197, 197, 0.27);
  border-radius: 4px;
  margin-top: 26px;
  display: flex;
  input {
    outline: none;
    width: 100%;
    height: 100%;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    padding-left:21px;
    border: none;
  }
  .btn {
    width: 246px;
    height: 100%;
    background: linear-gradient(110deg, #f13232, #ef763c);
    border-radius: 4px;
    // 字体大小
    font-size: 28px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;
    // 垂直居中
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>