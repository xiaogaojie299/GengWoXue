<template>
  <div class="box">
    <div>
      <my-title><span @click="go_back">我的钱包></span>绑定支付宝</my-title>
    </div>
    <!-- 主体 -->
    <div class="main">
      <!-- 绑定状态 -->
      <div class="row">
        <div class="left-title left-font">绑定状态：</div>
        <div class="right-box">
          <div class="isbind left-font">已绑定</div>
          <!-- 如果已绑定，则出现重新绑定的按钮 -->
          <div class="rebind-btn" @click="anew">重新绑定</div>
        </div>
      </div>
      <!-- 支付宝 -->
      <div class="row">
        <div class="left-title left-font">支付宝：</div>
        <div class="right-box">
          <input type="text" :disabled="isdisable" placeholder="18328510362" />
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="footer">提交</div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            isdisable:true
        }
    },
    methods: {
      anew(){
            console.log("成功")
            this.isdisable=false;
        },
        go_back(){
          this.$router.back(-1);
        }
    }
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
        width: 100px;
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
      }
    }
    .footer {
      margin: 100px auto;
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