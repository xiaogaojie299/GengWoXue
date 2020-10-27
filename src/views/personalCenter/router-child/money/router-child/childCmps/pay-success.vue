<template>
  <div class="box">
    <!-- 第一行 -->
    <div class="row1">
      <!-- img -->
      <div class="succee_icon"></div>
      <!-- 支付成功 -->
      <div class="title">支付成功！</div>
    </div>
     <!-- 订单号  充值金额 -->
      <div>
          <!-- 订单号 -->
          <div>
            订单号：<span>REO0917891 </span>
          </div>
          <!-- 充值金额 -->
           <div>
            充值金额：<span>100 </span>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 200px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  .row1 {
    display: flex;
    .succee_icon {
      width: 34px;
      height: 34px;
      border: 1px solid red;
    }
    .title {
        margin-left:16px;
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #333333;
    }
  }
}
</style>