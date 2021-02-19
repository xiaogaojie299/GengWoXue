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
        <button class="btn" :disabled="disabledBtn" @click="send_code(2)">
          {{ textCode }}
        </button>
      </div>
      <!-- 下方多选框 -->
      <div class="radio-box">
        <div class="readio" @click="checkoutBtn(0)">
          <!-- incon -->
          <img
            :src="currentActive == 0 ? selected : unselect"
            class="incon"
            alt=""
          />
          <span>重置密码</span>
        </div>

        <div class="readio" @click="checkoutBtn(1)">
          <!-- incon -->
          <img
            :src="currentActive == 1 ? selected : unselect"
            class="incon"
            alt=""
          />
          <span>验证手机号：</span>
        </div>
      </div>
    </div>
    <!-- 重置密码 -->
    <div v-if="currentActive == 0" class="reset-paswd">
      <div class="title">重置密码</div>
      <input
        type="password"
        v-model="userUpwd"
        placeholder="输入新密码（6-16位任意字符，区分大小写）"
      />
      <div style="margin-top: 10px">
        <input
          type="password"
          v-model="redoUserUpwd"
          placeholder="再次输入密码"
        />
      </div>
    </div>
    <!-- 更换手机号 -->
    <div v-else class="change">
      <div class="title">更换手机号：</div>
      <input type="number" v-model="newPhone" placeholder="输入更换的手机号" />
      <!-- 验证码 -->
      <div class="verify-code">
        <!-- 输入验证码 -->
        <input type="text" v-model="newCode" placeholder="输入验证码" />
        <div class="btn" @click="send_code(3)">{{ newTextCode }}</div>
      </div>
    </div>
    <!-- footer提交按钮 -->
    <div class="footer">
      <div class="footer-btn hand" @click="submit">提交</div>
    </div>
  </div>
</template>
<script>
import { validatePhoneNumber } from "@/utils/regular";
import {
  passwordLogin,
  captchaLogin,
  queryCaptcha, 
  checkCaptcha,
  test,
} from "@/network/login";
import { optResetPassword , optChangePhone } from "@/network/personalCenter";
import {state} from "vuex"
export default {
  data() {
    return {
      // 默认选中的单选框
      currentActive: 0,
      // 选中icon
      selected: require("@/assets/img/personalCenter/icon_radiobutton_selected.png"),
      // 未选中icon
      unselect: require("@/assets/img/personalCenter/icon_radiobutton.png"),
      //发送验证码
      textCode: "获取验证码",
      disabledBtn: false, //是否禁用按钮
      newTextCode: "获取验证码", //获取验证码文本
      newDisabledBtn: false, //是否禁用按钮
      phone: "", //用户手机号
      code: "", //用户输入验证码
      newCode: "", //用户更换新手机出现验证手机号
      serverCode: "", //验证手机服务器返回来的验证码
      newServerCode: "", //更换手机服务器返回来的验证码
      userUpwd: "", //用户重置的密码
      redoUserUpwd: "", //用户重复输入密码
      newPhone: "", //用户更换的新手机号
    };
  },
  computed:{
    /* 
      phone(){
      return this.$store.state.infoList.phone
    }
    */
    
  },
  methods: {
    checkoutBtn(i) {
      this.currentActive = i;
      console.log("this.currentActive", this.currentActive);
    },
    // 清空form

    // 发送验证码
    send_code(type) {
      /* type判断是验证手机号 还是更换手机号 2：验证手机号 3：更换手机号  跟后台返回的接口一致*/
      let phone = this.phone;
      let newPhone = this.newPhone;
      if (type == 2) {
        if (!phone) {
          this.$myAlert("手机号码不能为空");
          return;
        }
        if (!validatePhoneNumber(phone)) {
          this.$myAlert("请输入正确的手机格式");
          return;
        }
      } else {
        if (!newPhone) {
          this.$myAlert("手机号码不能为空");
          return;
        }
        if (!validatePhoneNumber(newPhone)) {
          this.$myAlert("请输入正确的手机格式");
          return;
        }
      }
      type == 2 ? this.startTime(phone, type) : this.startTime(newPhone, type);
    },
    // 启动定时器
    async startTime(phone, type) {
      console.log(phone, type);
      // 调用函数
      let i = 60;
      let timer = null;
      let res = await this.get_queryCaptcha(phone, type);
      if(res.code!==200){return}
      timer = setInterval(() => {
        i--;
        if (i >= 0) {
          if (type == 2) {
            this.textCode = `${i}秒后重发`;
            this.disabledBtn = true;
          } else {
            this.newTextCode = `${i}秒后重发`;
            this.newDisabledBtn = true;
          }
        } else {
          clearInterval(timer);
          i = 60;
          if (type == 2) {
            this.textCode = `发送验证码`;
            this.disabledBtn = false;
          } else {
            this.newTextCode = `发送验证码`;
            this.newDisabledBtn = false;
          }
        }
      }, 1000);
    },
    // 获取手机验证码
    async get_queryCaptcha(phone, type) {
      let data = { phone: phone, type: type };
      return queryCaptcha(data);
      // if(res.code==200){
      //   console.log("消息获取成功", res);
      //   type == 2 ? (this.serverCode = res) : (this.newServerCode = res);

      // }else{
      //   return 
      // }
    },
    // 传给后端，后端校验验证码
    get_checkCaptcha(phone, code) {
      let data = { phone, code };
      return checkCaptcha(data);
    },
    // 提交表单给后台
    async submit() {
      if (this.currentActive == 0) {
        if (!this.phone) {
          alert("手机号码不能为空");
          return;
        }
        if (!this.code) {
          alert("验证码不能为空");
          return;
        }
        if (!this.userUpwd) {
          this.$myAlert("新密码不能为空");
          return;
        }
        if (this.userUpwd.length<6) {
          this.$myAlert("密码长度不能低于6位");
          return;
        }
        if (this.userUpwd.length>16) {
          this.$myAlert("密码长度不能大于16位");
          return;
        }
        if (!this.redoUserUpwd) {
          this.$myAlert("请再次输入密码");
          return;
        }
        if (!validatePhoneNumber(this.phone)) {
          this.$myAlert("请输入正确的手机格式");
          return;
        }
        if (this.userUpwd !== this.redoUserUpwd) {
          this.$myAlert("两次输入的密码不一致");
          return;
        }
        // let result = await this.get_checkCaptcha(this.phone, this.code);
        // 后端校验验证码，如果正确，调用修改密码接口，否则return 重新输入验证码
        let params = {
          code: this.code,
          newPassword: this.userUpwd,
          phone: this.phone,
        };
        // let { data, code } = await optResetPassword(params);
        // if (code == 200) {
        //   this.$myAlert("重置密码成功");
        // } else {
        //   this.$myAlert("重置密码失败，网络错误");
        // }
      } else {
        if (!this.phone) {
          this.$myAlert("手机号码不能为空");
          return;
        }
        if (!this.code) {
          this.$myAlert("验证码不能为空");
          return;
        }
        if (!this.newPhone) {
          this.$myAlert("新手机不能为空");
          return;
        }
        if (!this.newCode) {
          this.$myAlert("验证码不能为空");
          return;
        }
        if (!validatePhoneNumber(this.phone)) {
          this.$myAlert("请输入正确的手机格式");
          return;
        }
        if (!validatePhoneNumber(this.newPhone)) {
          this.$myAlert("请输入正确的手机格式");
          return;
        }
        let result = await this.get_checkCaptcha(this.newPhone, this.newCode);
        // 后端校验验证码，如果正确，调用修改密码接口，否则return 重新输入验证码
        let data = {
          code: this.code, //原手机号验证码
          newCode: this.newCode, //新手机号验证码
          newPhone: this.newPhone, //新手机号码
          phone: this.phone, //原手机号码
        };
        let res = await optChangePhone(data);
        if(res.code ==200){
          // this.$myAlert("手机号码更改成功");
          this.$myMessage("手机号码更改成功");
          setTimeout(()=>{
            this.$router.push({
              path: "/page/register",
            });
            this.$store.commit("setToken", "");
            this.$store.commit("setUserInfo", {});
          },1500)
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
input {
  padding: 13px 16px;
  outline: none;
}
input:focus {
  border: 1px solid #f13232 !important;
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
