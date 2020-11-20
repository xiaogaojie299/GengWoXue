<template>
  <div class="about">
    <div class="banner1"></div>
    <div class="company-box">
      <div class="company-profile">
        <div class="company"></div>
        <div class="profile"></div>
      </div>
    </div>
    <div class="banner2">
      <div class="company-think">企业理念</div>
      <div class="cut-off">
        <div></div>
        <i class="icon-school"></i>
        <div></div>
      </div>
      <!-- 环形图 -->
      <div>
        <div class="row">
          <div class="left-row">
            <div v-for="(item, index) in timeList" :key="index">{{ item }}</div>
          </div>
          <!-- 中间圆球加线 -->
          <div class="center-row">
            <div
              class="center-row-item"
              v-for="(item, index) in timeList"
              :key="index"
            >
              <div class="center-row-item-circle"></div>
              <div class="center-row-item-inline"></div>
            </div>
          </div>
          <div class="right-row">
            <div v-for="(item, index) in textList" :key="index">{{ item }}</div>
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
          <h5>企业价值观</h5>
          <p>成就员工，成就客户，拼搏创新，社会喜欢。</p>
        </div>
        <div class="info-box">
          <div class="info-img">
            <img src="~@/assets/img/about/xinnian@2x.png" alt="" />
          </div>
          <h5>企业信念</h5>
          <p>奋斗改变人生</p>
        </div>
        <div class="info-box">
          <div class="info-img">
            <img src="~@/assets/img/about/yuanjing@2x.png" alt="" />
          </div>
          <h5>企业愿景</h5>
          <p>成为受人尊重的教育机构品牌</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeList: ["2020-10", "2020-9", "2020-8", "2020-10", "2020-10",],
      textList: [
        "我们成立了",
        "我们成立了",
        "我们成立了",
        "我们成立了",
        "我们成立了",
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {},
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
        background-color: #fff;
        box-shadow: 3px 4px 5px 0px rgba(176, 176, 176, 0.75);
      }
    }
  }
  .banner2 {
    height: 829px;
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
          background: #BABABA;
          border: #FFFFFF;
        }
        .center-row-item-inline {
          margin: 0 auto;
          width: 4px;
          height: 100%;
          background: #FFFFFF;
        }
      }
      .center-row-item:last-child{
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
