<template>
  <div class="box">
    <!-- 中间内容 -->
    <div class="main">
      <div class="title">充值金额</div>
      <input type="text" placeholder="请输入充值金额" />
      <!-- 单选框 -->
      <div>
        <radio-button>
          <span slot="radio1" class="my-font">微信支付</span>
          <span slot="radio2" class="my-font">支付宝支付</span>
        </radio-button>
      </div>

      <!-- 按钮 -->
      <div class="footer">
            <div class="btn" @click="go_pay">去支付</div>
      </div>
    </div>
    <!-- 遮罩层 -->
    <el-dialog
        :visible.sync="dialogVisible"
        :show-close="false"
        center
        >
    <pay @closeMask="closeMask()"></pay>
</el-dialog>
  </div>
</template>
<script>
import pay from "./pay"
export default {
    data(){
        return{
            dialogVisible:false
        }
    },
    methods:{
        go_back(){
            this.$router.back(-1);
        },
        go_pay(){
            this.dialogVisible=true;
        },
        closeMask(){
           this.dialogVisible=false;
            this.$router.push({
            path:"/page/personalCenter/personal/recharge/succee"
          })
        },
       
    },
    components:{
        pay
    }
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
  .main {
    height: 262px;
    background: #f8f9f9;
    padding: 19px 23px;
    .title {
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #333333;
      line-height: 26px;
      margin-bottom: 16px;
    }
    & > input {
      width: 391px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #efefef;
      border-radius: 4px;
      padding: 13px 16px;
    }
    .footer{
        margin-top:60px;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .btn {
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