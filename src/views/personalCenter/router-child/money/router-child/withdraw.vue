<template>
  <div class="box">
    <div>
      <my-title
        ><span @click="go_back" class="hand">我的钱包></span>提现</my-title
      >
    </div>
    <!-- 主体 -->
    <div class="main">
      <!-- 绑定状态 -->
      <div class="row">
        <div class="left-title left-font">选择提现类别：</div>
        <div class="right-box">
          <div>
            <el-select
              :popper-append-to-body="false"
              v-model="moneyTypeValue"
              placeholder="请选择"
            >
              <el-option
                v-for="item in moneyType"
                :key="item.value"
                :label="item.name"
                :value="item.type"
              >
              </el-option>
            </el-select>
          </div>
          <img src="@/assets/img/answers/icon_arrow.png" alt="" />
        </div>
      </div>
      <!-- 支付宝 -->
      <div class="row">
        <div class="left-title left-font">输入提现金币：</div>
        <div class="right-box">
          <input
            type="number"
            v-model="money"
            placeholder="100（折算金额100）"
          />
        </div>
      </div>

      <!-- 可提现余额 -->
      <div class="row">
        <div class="left-title left-font">可提现余额：</div>
        <div class="right-box">
          <span class="student-gold">{{ infoList.balance }} 学习币（个）</span>
        </div>
      </div>
      <!-- 底部按钮 -->
      <div class="footer hand" @click="submit">提交</div>
    </div>
  </div>
</template>
<script>
import { withdrawal } from "@/network/personalCenter";
import { mapState } from "vuex";
export default {
  data() {
    return {
      isdisable: true,
      moneyTypeValue: 1,
      money: "",
    };
  },
  computed: {
    moneyType() {
      return [
        { name: "金币", type: 1 },
        { name: "人民币", type: 2 },
      ];
    },
    infoList() {
      return this.$store.state.infoList;
    },
  },
  methods: {
    go_back() {
      this.$router.back(-1);
    },
    // 提交订单
    async submit() {
      if (!this.money) {
        this.$myAlert("提现金额不能为0");
        return;
      }
      //  if(this.money>this.infoList.balance){
      //   this.$myAlert("提现金额不能大于余额");
      //   return
      // }
      let params = {
        number: this.money,
        type: this.moneyTypeValue,
      };
      let {code,data} = await withdrawal(params);
      if(code ==200){
        this.$myMessage("恭喜你提现成功");
      }else{
        this.$myMessage("恭喜你提现失败","error");
      }
      console.log("res==>", res);
    },
  },
};
</script>
<style lang="scss" scoped>
/deep/ .el-input__inner {
  padding-left: 6px;
  margin: 0;
  outline: none;
  border: none;
  // width: 100%;
  width: 101px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 3px;
  font-size: 10px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #343434;
}
/deep/ .el-input__icon {
  display: none;
}
/deep/ .el-select-dropdown {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #262626;
}
/deep/ .el-select-dropdown__list li {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #484949;
}
/deep/ .el-select-dropdown__item.hover {
  background: linear-gradient(110deg, #f13232, #ef753c);
  color: #fff;
}

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
        position: relative;
        img {
          position: absolute;
          right: 4px;
          width: 9px;
          height: 12px;
        }
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
          margin-left: 18px;
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
