<template>
  <div class="box">
    <!-- 第一行 -->
    <div class="row1">
      <!-- img -->
      <div class="succee_icon">
        <img src="@/assets/img/success.png" alt="" />
      </div>
      <!-- 支付成功 -->
      <div class="title">支付成功！</div>
    </div>
    <!-- 订单号  充值金额 -->
    <div class="row2">
      <div class="succe-content">
        <!-- 订单号 -->
        <!-- <div class="order_list">订单号：<span>REO0917891 </span></div> -->
        <!-- 充值金额 -->
        <div class="credit">充值金额：<span>{{money}} </span></div>
      </div>
      <!-- 充值成功 -->
      <div class="inform">充值成功</div>
      <div class="inform">{{i}}秒后返回我的钱包</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      money:0,
      timer:null,
      i:5
    };
  },
  created(){
    this.money = this.$route.query.money;
    this.timer=setInterval(()=>{
        this.i--;
        console.log("i",this.i)
        if(this.i==0){
          this.$router.push({
            path:"/page/personalCenter/personal/wallet"
          })
          clearInterval(this.timer)
        }
    },1000)
  },
  watch:{
  },
  beforeDestroy() {
    console.log("组件被销毁");
    this.$router.push({
            path:"/page/personalCenter/personal/wallet"
          })
      if(this.timer) {
           clearInterval(this.timer); //关闭
      }  
 },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .row1 {
    display: flex;
    .succee_icon {
      width: 34px;
      height: 34px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      margin-left: 16px;
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #333333;
    }
  }
  .row2 {
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #676767;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top:18px;
    div{
      line-height: 30px;
    }
    .succe-content {
      display: flex;
      & > .order_list {
        margin-right: 18px;
      }
    }
  }
}
</style>