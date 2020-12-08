<template>
  <div class="about">
    <div class="banner1"></div>
    <div class="company-box">
      <div class="company-profile">
        <div class="company">
          <img style="height: 100%; width: 100%" :src="titleList[2]" alt="" />
        </div>
        <div class="profile">
          <!-- 头部主副标题 -->
          <div class="company-title">
            <div>{{ titleList[0] }}</div>
            <div>{{ titleList[1] }}</div>
          </div>
          <!-- 内容 -->
          <!-- <div class="company-content" v-html="textContent"></div> -->
          <div class="company-content">
            <div v-for="(item, index) in textContent" :key="index">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner2">
      <div class="company-think">{{ incidentList[0] }}</div>
      <div class="cut-off">
        <div></div>
        <i class="icon-school"></i>
        <div></div>
      </div>
      <!-- 环形图 -->
      <div>
        <div class="row">
          <div class="left-row">
            <div v-for="(item, index) in timerArr" :key="index">{{ item }}</div>
          </div>
          <!-- 中间圆球加线 -->
          <div class="center-row">
            <div
              class="center-row-item"
              v-for="(item, index) in timerArr"
              :key="index"
            >
              <div class="center-row-item-circle"></div>
              <div class="center-row-item-inline"></div>
            </div>
          </div>
          <div class="right-row">
            <div v-for="(item, index) in valueArr" :key="index">{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="company-think-box">
      <div class="company-think">企业理念</div>
      <div class="cut-off">
        <div></div>
        <i class="icon-school"></i>
        <div></div>
      </div>
      <div class="company-think-info">
        <div class="info-box">
          <div class="info-img">
            <img src="~@/assets/img/about/jiazhi@2x.png" alt="" />
          </div>
          <h5>{{ this.ideaList[0].split("&&")[0] }}</h5>
          <p>{{ this.ideaList[0].split("&&")[1] }}</p>
        </div>
        <div class="info-box">
          <div class="info-img">
            <img src="~@/assets/img/about/xinnian@2x.png" alt="" />
          </div>
          <h5>{{ this.ideaList[1].split("&&")[0] }}</h5>
          <p>{{ this.ideaList[1].split("&&")[1] }}</p>
        </div>
        <div class="info-box">
          <div class="info-img">
            <img src="~@/assets/img/about/yuanjing@2x.png" alt="" />
          </div>
          <h5>{{ this.ideaList[2].split("&&")[0] }}</h5>
          <p>{{ this.ideaList[2].split("&&")[1] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { queryAboutUs } from "@/network/officeCenter";
export default {
  data() {
    return {
      timerArr: [], //时间数组
      valueArr: [], //事件数组
      titleList: [],
      incidentList: [],
      ideaList: [],
      textContent: "",
    };
  },
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    init() {
      this.getAboutList();
    },
    getAboutList() {
      queryAboutUs().then((res) => {
        let { code, data } = res;
        try {
          if (code == 200) {
            let result = data.split("%&");
            this.titleList = result[0].split("_"); //首页标题数组
            this.incidentList = result[1].split("_"); //中间树状图
            this.ideaList = result[2].split("_"); //企业想法
            this.incidentList.forEach((item, index) => {
              if (index > 0) {
                this.timerArr.push(item.split("&&")[0]);
                this.valueArr.push(item.split("&&")[1]);
              }
            });
            this.textContent = this.titleList[3].split("\n");
          }
        } catch (error) {
          console.log(error);
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

.about {
  .banner1 {
    height: 809px;
    background-color: #ccc;
  }
  .company-box {
    position: relative;
    height: 454px;
    background-color: #fff;
    .company-profile {
      position: absolute;
      top: -100px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      .company {
        width: 583px;
        height: 418px;
        background-color: #dedccf;
        padding: 0 16px;
        box-shadow: 3px 4px 5px 0px rgba(176, 176, 176, 0.75);
      }
      .profile {
        width: 588px;
        height: 418px;
        padding: 28px 33px;
        background-color: #fff;
        box-shadow: 3px 4px 5px 0px rgba(176, 176, 176, 0.75);
        .company-title {
          height: 50px;
          display: flex;
          margin-bottom: 50px;
          & div:first-child {
            height: 70px;
            font-size: 40px;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: #354168;
            margin-right: 30px;
            margin-bottom: 18px;
            border-bottom: 4px solid red;
          }
          & div:last-child {
            margin-top: auto;
            color: #354168;
            font-size: 30px;
            font-family: Source Han Sans CN;
          }
        }
        .company-content {
          font-size: 16px;
          font-family: Source Han Sans CN;
          color: #333333;
          overflow: hidden;
          text-overflow: ellipsis;
          & div {
            line-height: 34px;
            text-indent: 2em;
          }
        }
      }
    }
  }
  .banner2 {
    // height: 829px;
    // background: url("../../assets/img/about/bigPic.png") no-repeat;
    background: #354168;
    background-size: 100% 100%;
    position: relative;
    padding-top: 96px;

    /* 复制粘贴 */
    .company-think {
      font-size: 58px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #fff;
      text-align: center;
      padding-bottom: 146px;
    }
    .cut-off {
      position: absolute;
      top: 179px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      div {
        width: 230px;
        height: 2px;
        background-color: #c9c9c9;
      }
      i {
        display: block;
        width: 36px;
        height: 28px;
        background: url("../../assets/img/about/cap-white.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    /* 粘贴结束 */
    .row {
      padding-left: 493px;
      display: flex;
      height: 100%;
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #fff;
    }
    .left-row {
      & div {
        height: 100px;
      }
    }
    .center-row {
      height: 100%;
      width: 20px;
      margin: 4px 20px;
      & > .center-row-item {
        height: 100px;
        .center-row-item-circle {
          margin: 0 auto;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #bababa;
          border: #ffffff;
        }
        .center-row-item-inline {
          margin: 0 auto;
          width: 4px;
          height: 100%;
          background: #ffffff;
        }
      }
      .center-row-item:last-child {
        height: 0;
        widows: 0;
      }
    }
    .right-row {
      & div {
        height: 100px;
      }
    }
  }
  .company-think-box {
    position: relative;
    padding-top: 96px;
    .company-think {
      font-size: 58px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #354168;
      text-align: center;
      padding-bottom: 146px;
    }
    .cut-off {
      position: absolute;
      top: 179px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      div {
        width: 230px;
        height: 2px;
        background-color: #c9c9c9;
      }
      i {
        display: block;
        width: 36px;
        height: 28px;
        background: url("../../assets/img/about/cap.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    .company-think-info {
      display: flex;
      justify-content: space-around;
      padding-bottom: 125px;
      z-index: 99;
      .info-box {
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .info-img {
          width: 259px;
          height: 247px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        h5 {
          font-size: 40px;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #354168;
        }
        p {
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #354168;
        }
      }
    }
  }
}
</style>
