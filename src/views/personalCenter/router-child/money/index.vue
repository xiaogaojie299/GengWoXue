<template>
  <div class="box">
    <div class="header">
      <my-title>我的钱包</my-title>
    </div>
    <!-- 主体 -->
    <div class="main">
      <div class="row1 my-font">
        <div>当前余额：</div>
        <!-- icon -->
        <img src="@/assets/img/answers/icon_coin.png" alt="" />
        <!-- 我的学习币 -->
        <div><span>1180 </span> 学习币（个）</div>
      </div>
      <div class="row2 my-font">
        <div><span>80</span> 人民币（元）</div>
      </div>

      <!-- 按钮组 -->
      <div class="btn-groups">
        <div class="btn1" @click="go_url('recharge/detail')">充值</div>
        <div class="btn2" @click="go_url('withdraw')">提现</div>
        <div class="btn3" @click="go_url('bind')">绑定支付宝</div>
      </div>

      <!-- 表格数据 -->
      <div>
        <!-- 表格数据 -->
        <div><money-table></money-table></div>
        <!-- 分页 -->
        <div class="page-next">
          <page-device></page-device>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moneyTable from "./childCmps/money-table";
export default {
  data() {
    return {};
  },
  methods: {
    go_url(url) {
      this.$router.push({
        path: "/personalCenter/personal/" + url,
      });
    },
  },
  components: {
    moneyTable,
  },
};
</script>
<style lang="scss" scoped>
.my-font {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
}
.box {
  width: 100%;
}
.main {
  width: 100%;
  height: 566px;
  background: #f8f9f9;
  .row1 {
    display: flex;
    align-items: center;
    margin: 16px 0;
    img {
      margin: 0 8px;
      width: 20px;
      height: 22px;
    }
  }
  .row2 {
    margin-left: 100px;
  }
  .btn-groups {
    display: flex;
    margin: 21px 0;
    .btn1,
    .btn2,
    .btn3 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 108px;
      height: 38px;
      background: #ffffff;
      border: 1px solid #f13a33;
      border-radius: 3px;

      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #f04335;
    }
    .btn2 {
      margin: 0 21px;
    }
  }
  .page-next {
    width: 100%;
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }
}
</style>