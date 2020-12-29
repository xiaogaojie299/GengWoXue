<template>
  <div class="box">
    <!-- 中间内容 -->
    <div class="main">
      <div class="title">充值金额</div>
      <input type="number" v-model="money" placeholder="请输入充值金额" />
      <!-- 单选框 -->
      <div>
        <radio-button @chekoutIndex="chekoutIndex">
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
    <el-dialog :visible.sync="dialogVisible" :show-close="false" center>
      <pay :qrCode="qrCode" @closeMask="closeMask()"></pay>
    </el-dialog>
    <div v-html="payHtml"></div>
  </div>
</template>
<script>
import pay from "./pay";
import { recharge, queryRecharge } from "@/network/personalCenter";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      dialogVisible: false, //控制遮罩层
      money: 0, //充值金额
      type: 2, //1.支付宝 2.微信 3.苹果内购
      payHtml: "",
      qrCode: "",
      timers: null,
    };
  },
  // 还有一步是最容易被忽略的 跳转页面的时候应该关闭查询订单定时器
  beforeDestroy() {
    if (this.timers) {
      clearInterval(this.timers); //关闭
    }
  },
  methods: {
    //单选框选中
    chekoutIndex(data) {
      //是从公共组件传过来的下标
      switch (data) {
        case 0:
          this.type = 2;
          break;
        case 1:
          this.type = 1;
          break;
        default:
          this.type = 3;
      }
    },
    test() {
      this.dialogVisible = true;
    },
    go_back() {
      this.$router.back(-1);
    },
    async go_pay() {
      //调用支付
      let money = Number(this.money).toFixed(2);
      if (money == 0) {
        this.$myAlert("充值金额不能为0");
        return;
      }
      if (money < 0) {
        this.$myAlert("充值金额不能小于0");
        return;
      }
      let params = {
        money: money,
        payType: this.type,
      };
      let { code, data } = await recharge(params);
      if (code == 200) {
        console.log("res=>", data);
        if (this.type == 1) {
          // 支付宝
          const div = document.createElement("divform");
          div.innerHTML = data;
          document.body.appendChild(div);
          document.forms[0].acceptCharset = "UTF-8"; //保持与支付宝默认编码格式一致，如果不一致将会出现：调试错误，请回到请求来源地，重新发起请求，错误代码 invalid-signature 错误原因: 验签出错，建议检查签名字符串或签名私钥与应用公钥是否匹配
          document.forms[0].submit();
        } else {
          this.qrCode = data; //微信二维码
          this.dialogVisible = true;
          this.getOrderstate();
        }
      }
    },
    //获取支付成功还是失败
    // 调用一个判断支付是否成功的接口，用这个接口我们监听微信是否支付成功
    getOrderstate() {
      let money = Number(this.money).toFixed(2);
      let self = this;
      let num = 0;
      self.timers = setInterval(() => {
        //创建一个全局的定时器
        num++;
        let params = {
          money: money,
          payType: self.type,
        };
        queryRecharge(params).then((res) => {
          console.log("查询是否支付成功", res);
          if (res.code == 200) {
            //判断就是订单支付成功
            if (res.data == 2) {
              //data ==1 失败  data==2 成功
              self.$router.push({
                path: "/page/personalCenter/personal/recharge/succee",
                query: {
                  money: money,
                },
              });
              clearInterval(self.timers); //别忘记关闭定时器，否则会一直调这个接口
            }
          }
        });
        if (num == 500) {
          //这里是判断num++到500的情况下用户还没有支付则自动关闭定时器和二维码
          clearInterval(this.timers);
          this.dialogVisible = false;
        }
      }, 1500);
    },
    closeMask() {
      this.dialogVisible = false;
      clearInterval(this.timers);
      // this.$router.push({
      //   path: "/page/personalCenter/personal/recharge/succee",
      //   query: {
      //     money: this.money,
      //   },
      // });
    },
  },
  components: {
    pay,
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
    .footer {
      margin-top: 60px;
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