<template>
  <div class="box">
    <div>
      <my-title><span @click="go_back">我的钱包></span>提现</my-title>
    </div>
    <!-- 主体 -->
    <div class="main">
      <!-- 绑定状态 -->
      <div class="row">
        <div class="left-title left-font">选择提现类别：</div>
        <div class="right-box">
          <!-- 如果已绑定，则出现重新绑定的按钮 -->
        </div>
      </div>
      <!-- 支付宝 -->
      <div class="row">
        <div class="left-title left-font">输入提现金币：</div>
        <div class="right-box">
          <input type="text" :disabled="isdisable" placeholder="18328510362" />
        </div>
      </div>

      <!-- 可提现余额 -->
      <div class="row">
        <div class="left-title left-font">可提现余额：</div>
        <div class="right-box">
          <span class="student-gold">1180 学习币（个）</span>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="footer">提交</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isdisable: true,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.left-font {
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  line-height: 26px;
}
.box {
  width: 100%;
  .main {
    width: 100%;
    height: 301px;
    background: #f8f9f9;
    padding: 27px 23px;
    .row {
      display: flex;
      align-items: center;
      margin-bottom: 26px;
      .left-title {
        width: 140px;
        margin-right: 12px;
      }
      .right-box {
        display: flex;
        align-items: center;
        .isbind {
          color: #ef753c;
          margin-right: 30px;
        }
        .rebind-btn {
          width: 77px;
          height: 32px;
          border: 1px solid #a7a7a7;
          border-radius: 6px;

          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #828282;

          display: flex;
          align-items: center;
          justify-content: center;
        }
        & > input {
          width: 267px;
          height: 40px;
          background: #ffffff;
          border: 1px solid #efefef;
          border-radius: 4px;
          padding: 14px 17px;
        }
        .student-gold {
        margin-left:18px;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #4d4d4d;
        }
      }
    }
    .footer {
      margin: 60px auto;
      width: 274px;
      height: 45px;
      background: linear-gradient(110deg, #f13232, #ef753c);
      box-shadow: 0px 6px 9px 0px rgba(68, 5, 5, 0.32);
      border-radius: 4px;

      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #ffffff;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>