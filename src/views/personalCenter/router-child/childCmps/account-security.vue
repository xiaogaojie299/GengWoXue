<template>
  <div class="box">
    <div class="top">
      <!-- 验证手机号 -->
      <div class="verify">验证手机号：</div>
      <!-- input框输入手机号 -->
      <input type="number" v-model="phone" placeholder="输入手机号" />
      <!-- 验证码 -->
      <div class="verify-code">
        <!-- 输入验证码 -->
        <input type="text" v-model="code" placeholder="输入验证码" />
        <button class="btn" :disabled="disabledBtn" @click="send_code">{{textCode}}</button>
      </div>
      <!-- 下方多选框 -->
      <div class="radio-box">
        <div class="readio" @click="checkoutBtn(0)">
          <!-- incon -->
          <img
            :src="currentActive==0?selected:unselect"
            class="incon"
            alt=""
          />
          <span>重置密码</span>
        </div>

        <div class="readio" @click="checkoutBtn(1)">
          <!-- incon -->
          <img
            :src="currentActive==1?selected:unselect"
            class="incon"
            alt=""
          />
          <span>更换手机号</span>
        </div>
      </div>
    </div>
    <!-- 重置密码 -->
    <div v-if="currentActive==0" class="reset-paswd">
      <div class="title">重置密码</div>
      <input
        type="text"
        placeholder="输入新密码（6-16位任意字符，区分大小写）"
      />
      <div style="margin-top: 10px">
        <input type="text" placeholder="再次输入密码" />
      </div>
    </div>
    <!-- 更换手机号 -->
    <div v-else class="change">
      <div class="title">验证手机号：</div>
      <input type="text" placeholder="输入更换的手机号" />
      <!-- 验证码 -->
      <div class="verify-code">
        <!-- 输入验证码 -->
        <input type="text" placeholder="输入验证码" />
        <div class="btn">发送验证码</div>
      </div>
    </div>
    <!-- footer提交按钮 -->
    <div class="footer">
      <div class="footer-btn">提交</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        // 默认选中的单选框
        currentActive:0,
        // 选中icon
        selected:require("@/assets/img/personalCenter/icon_radiobutton_selected.png"),
        // 未选中icon
        unselect:require("@/assets/img/personalCenter/icon_radiobutton.png"),
        //发送验证码
        textCode: "获取验证码",
        disabledBtn:false,  //是否禁用按钮
        phone:"",  //用户手机号
        code:""    //输入验证码
    };
  },
  methods:{
      checkoutBtn(i){
          this.currentActive=i;
          console.log("this.currentActive",this.currentActive)
      },
      // 发送验证码
      send_code() {
      let phone = this.inputList[1].value;
      if (!phone) {
        alert("手机号码不能为空");
        return;
      }
      if (!validatePhoneNumber(phone)) {
        alert("请输入正确的手机格式");
        return;
      }
      this.startTime();
    },
    // 启动定时器
     startTime() {
      // 调用函数
      let i = 10;
      let timer = null;
      timer = setInterval(() => {
        i--;
        if (i >= 0) {
          this.textCode = `${i}秒后重发`;
          this.disabledBtn = true;
        } else {
          clearInterval(timer);
          i = 9;
          this.textCode = `重新发送`;
          this.disabledBtn = false;
        }
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
input {
  padding: 13px 16px;
}
.box {
  margin-left: 0px;
}
.top {
  .verify {
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
  }
  .verify-code {
    display: flex;
    margin-top: 10px;
    width: 391px;
    justify-content: space-between;
    & > input {
      width: 276px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #efefef;
      border-radius: 4px;
    }
    .btn {
      width: 102px;
      height: 39px;
      background: #ffffff;
      border: 1px solid #ef743c;
      border-radius: 4px;

      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #ef743c;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  //   下方单选框
  .radio-box {
    display: flex;
    align-items: center;
    margin: 19px 0;
    .readio {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #333333;
      display: flex;
      align-items: center;
      margin-right: 35px;
      & img {
        width: 14px;
        height: 14px;
        margin-right: 6px;
      }
    }
  }
}
.reset-paswd {
  .title {
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #333333;
    line-height: 26px;
    margin-bottom: 16px;
  }
  & input {
    width: 391px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #efefef;
    border-radius: 4px;
  }
}
.footer {
  margin: 40px 0;
  width: 100%;
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  .footer-btn {
    margin: 0 auto;
    width: 274px;
    height: 45px;
    background: linear-gradient(110deg, #f13232, #ef753c);
    box-shadow: 0px 6px 9px 0px rgba(68, 5, 5, 0.32);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.change {
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
  }
  .verify-code {
    display: flex;
    margin-top: 10px;
    width: 391px;
    justify-content: space-between;
    & > input {
      width: 276px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #efefef;
      border-radius: 4px;
    }
    .btn {
      width: 102px;
      height: 39px;
      background: #ffffff;
      border: 1px solid #ef743c;
      border-radius: 4px;

      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #ef743c;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>