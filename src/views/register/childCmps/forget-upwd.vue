<template>
  <div class="forget-box">
    <!-- <container> -->
      <div class="right-box">
        <!-- 头部 -->
        <div class="header">
          <span class="back hand" @click="go_regist()"> <i class="el-icon-arrow-left"></i> </span>
          <span class="header-title">重置密码</span>
        </div>
        <!-- 中间主题 -->
        <div class="main">
          <!-- 验证手机码 -->
          <div class="phone-box">
            <div class="main-title">验证手机号:</div>
            <div class="input-number">
              <input-template>
                <div slot="left-content">
                  <input
                    v-model="upwdForm.userPhone"
                    style="width: 100%"
                    type="text"
                    placeholder="请输入您的手机号码"
                  />
                </div>
              </input-template>
            </div>
            <!-- 输入手机号码 -->
            <input-template>
              <div slot="left-content">
                <input
                  v-model="upwdForm.upwdCode"
                  style="width: 100%"
                  type="text"
                  placeholder="请输入您的验证码"
                />
              </div>
              <div slot="right-content">
                <button
                  class="send-btn hand"
                  :disabled="disabledBtn"
                  @click="send_code"
                >
                  {{ textCode }}
                </button>
              </div>
            </input-template>
          </div>

          <!-- 设置新密码 -->
          <div class="set-upwd-box">
            <div class="main-title">设置新密码:</div>
            <div class="input-number">
              <input-template>
                <div slot="left-content">
                  <input
                    v-model="upwdForm.userUpwd"
                    style="width: 340px"
                    type="password"
                    placeholder="输入新密码（6-16位任意字符，区分大小写）"
                  />
                </div>
              </input-template>
            </div>
            <!-- 输入手机号码 -->
            <input-template>
              <div slot="left-content">
                <input
                  style="width: 100%"
                  type="password"
                  v-model="upwdForm.redoUserUpwd"
                  placeholder="再次输入密码"
                />
              </div>
            </input-template>
          </div>
        </div>
        <!-- 底部按钮 -->
        <div @click="submit" class="footer-btn hand">确认重置</div>
      </div>
    <!-- </container> -->
  </div>
</template>
<script>
import inputTemplate from "./input-template";
import { queryCaptcha, checkCaptcha, forgetPassword } from "@/network/login";
import { validatePhoneNumber } from "@/utils/regular";
let form = () => {
  return {
    userPhone: "", //用户手机号
    upwdCode: "", //用户输入的验证码
    upwdCatch: "", //后端返回的验证码
    userUpwd: "", //用户输入的新密码
    redoUserUpwd: "", //再次输入新密码
  };
};
export default {
  data() {
    return {
      textCode: "获取验证码",
      disabledBtn: false, //禁用按钮
      upwdForm: form(),
    };
  },
  methods: {
    go_regist() { // 返回密码登录
      this.$emit("backUpwdReg", 0);
    },
    // 获取手机验证码
    get_queryCaptcha(phone, type, code) {
      let data = { phone, type };
      queryCaptcha(data).then((res) => {
        console.log("消息获取成功", res);
        code = res.data;
      });
    },
    // 发送验证码
    send_code() {
      let phone = this.upwdForm.userPhone;
      if (!phone) {
        this.$myAlert("手机号码不能为空");
        return;
      }
      if (!validatePhoneNumber(phone)) {
        this.$myAlert("请输入正确的手机格式");
        return;
      }
      let params = { phone, type :2 };
      queryCaptcha(params).then((res) => {
        if(res.code == 200){
          this.$myMessage("验证码发送成功，请注意查收")
        this.startTime(phone);
        }else{
          this.$myMessage(res.msg,"error")
        }
      });
    },
    // 传给后端，后端校验验证码
    get_checkCaptcha() {
      let data = { phone: this.inputList[1].value, code: this.phoneCode };
      return checkCaptcha(data);
    },
    // 开始倒计时
    startTime(phone) {
      let i = 60;
      let timer = null;
      timer = setInterval(() => {
        i--;
        if (i >= 0) {
          this.textCode = `${i}秒后重发`;
          this.disabledBtn = true;
        } else {
          clearInterval(timer);
          i = 9;
          this.textCode = `获取验证码`;
          this.disabledBtn = false;
        }
      }, 1000);
    },
    async submit() {
      console.log("upwdForm", this.upwdForm);
      if (!this.upwdForm.userPhone) {
        this.$myAlert("手机号码不能为空");
        return;
      }
      if (!this.upwdForm.upwdCode) {
        $this.$myAlert("验证码不能为空");
        return;
      }
      if (!this.upwdForm.userUpwd) {
        this.$myAlert("新密码不能为空");
        return;
      }
      if (this.upwdForm.userUpwd.length<6) {
        this.$myAlert("密码长度不能低于6位");
        return;
      }
      if (this.upwdForm.userUpwd.length>16) {
        this.$myAlert("密码长度不能高于16位");
        return;
      }
      if (!this.upwdForm.redoUserUpwd) {
        this.$myAlert("请再次输入密码");
        return;
      }
      if (!validatePhoneNumber(this.upwdForm.userPhone)) {
        this.$myAlert("请输入正确的手机格式");
        return;
      }
      // if(this.upwdForm.upwdCode!=this.upwdForm.upwdCatch){
      //    this.$Alert('请输入正确的验证码')
      //   return
      // }
      if (this.upwdForm.userUpwd !== this.upwdForm.redoUserUpwd) {
        this.$myAlert("两次输入的密码不一致");
        return;
      }
      this.forgetUpwd();
      /* 
      let result = await this.get_checkCaptcha();
      if(result.code==200){
        this.forgetUpwd();
      }else{
        this,$$myMessage(result.msg,"error")
      }
    */
    },
    forgetUpwd() {
      let data = {
        code: this.upwdForm.upwdCode,
        password: this.upwdForm.userUpwd,
        phone: this.upwdForm.userPhone,
      };
      forgetPassword(data).then((res) => {
        this.$emit("goForgetUpwd", 1);
        if(res.code == 200){
          this.$myMessage("修改密码成功")
          this.go_regist()
        }
      });
    },
  },
  components: {
    inputTemplate,
  },
};
</script>
<style lang="scss" scoped>
.el-icon-arrow-left{
  font-weight: bold;
}
.forget-box{
  position: relative;
  height: calc(100vh - 120px);
}
@media screen and (max-height: 700px) {
    .forget-box {
        height: 775px;
    }
}
.right-box {
  // padding: 0 20px;
  // width: 400px;
  // height: 564px;
  // background: #ffffff;
  // box-shadow: 1px 13px 18px 0px rgba(158, 158, 158, 0.3);
  // border-radius: 10px;
  // position: absolute;
  // right: 0;
  // top: 42px;
  padding: 0 20px;
  width: 504px;
  // height: 80%;
  height: 564px;
  background: #ffffff;
  box-shadow: 1px 13px 18px 0px rgba(158, 158, 158, 0.3);
  border-radius: 10px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  .header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 46px;
    .back {
      position: absolute;
      left: 0;
      font-size: 22px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #191616;
    }
    .header-title {
      font-size: 22px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #191616;
    }
  }
  .main {
    .phone-box {
      margin-top: 24px;
      .main-title {
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 550;
        color: #000000;
      }
      .input-number {
        margin-top: -22px;
      }
    }
    .set-upwd-box {
      @extend .phone-box;
      margin-top: 24px;
    }
  }
  .footer-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90px;
    background: linear-gradient(110deg, #f13232, #ef763c);
    box-shadow: 1px 6px 9px 0px rgba(68, 6, 6, 0.32);
    border-radius: 0px;
    // 字体颜色
    font-size: 22px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;
    // 距离上个边距
    margin-top: 40px;
  }
  .send-btn {
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #eb002a;
    font-weight: 550;
    margin-left: 4px;
  }
}
</style>
