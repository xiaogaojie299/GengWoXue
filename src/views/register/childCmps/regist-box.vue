<template>
  <div class="loging-box">
    <div class="right-box">
      <!-- 顶部标题 -->
      <div class="top-title">
        <div @click="checkout(0)" :class="currentIndex == 0 ? 'active' : 'hand'">
          密码登录
        </div>
        <div @click="checkout(1)" :class="currentIndex == 1 ? 'active' : 'hand'">
          验证码登录
        </div>
      </div>
      <!-- 下面主体 -->
      <div class="main-box">
        <!-- 登陆模板 -->
        <input-template
          v-show="currentIndex == index"
          v-for="(item, index) in inputList"
          :key="index"
        >
          <input
            slot="left-content"
            type="text"
            v-model="item.value"
            :placeholder="item.placeholder"
          />
          <div slot="right-content">
            <!-- <div class="select_Icon"></div> -->
            <img
              @click="remember"
              class="select_Icon"
              :src="
                isSelect
                  ? require('@/assets/img/register/selected.png')
                  : require('@/assets/img/register/radiobutton@2x.png')
              "
              alt=""
            />
            <div class="right-txt hand">记住登录名</div>
          </div>
        </input-template>

        <input-template v-if="currentIndex == 0">
          <input
            slot="left-content"
            v-model="password"
            type="password"
            placeholder="请输入您的密码"
          />
          <div slot="right-content">
            <div style="color: #eb002a" class="right-txt hand">
              <span @click="forfet_upwd">忘记密码?</span>
            </div>
          </div>
        </input-template>

        <input-template v-else>
          <input
            slot="left-content"
            v-model="phoneCode"
            type="text"
            placeholder="请输入您的验证码"
          />
          <div slot="right-content">
            <div style="color: #eb002a" class="right-txt">
              <button
                class="send-btn"
                :disabled="disabledBtn"
                @click="send_code"
              >
                {{ textCode }}
              </button>
            </div>
          </div>
        </input-template>

        <!-- 登录按钮 -->
        <!-- <div class="btn" @click="testRules">测试正则</div> -->
        <div class="btn" @click="go_home">登录</div>
        <!-- 还没有账号？ -->
        <div class="ling-title">
          还没有账号？申请<span @click="goCooperation" class="hand" style="color: #2d4cd6">入驻平台</span>获取账号
        </div>
      </div>
      <!-- 底部跳转到学生登陆 -->
      <div @click="goStudent" class="footer hand">学生登录<span class="ml-10"> <i class="el-icon-d-arrow-right"></i> </span></div>
    </div>
  </div>
</template>
<script>
import inputTemplate from "./input-template";
import { state, actions } from "vuex";
import {
  passwordLogin,
  captchaLogin,
  queryCaptcha,
  checkCaptcha,
  test,
} from "@/network/login";
import { validatePhoneNumber } from "@/utils/regular";
import {studentURL} from "@/network/config"
export default {
  data() {
    return {
      currentIndex: 0, // 控制用户点击的是密码登录还是验证码登录
      isSelect: true,
      userName: "", //用户名
      password: "", //用户密码
      disabledBtn: false,
      inputList: [
        { placeholder: "请输入您的手机号", value: "" },
        { placeholder: "请输入您的手机号", value: "" },
      ], //选中ICON
      testURL: "@/assets/img/register/selected.png",
      textCode: "获取验证码",
      phoneCode: "", //用户手机验证码
      phoneCaptcha: "", // 后端返回的登录验证码
    };
  },

  methods: {
    goStudent(){  //点击学生登录跳转学生详情
    console.log("studentURL1=",studentURL);
     window.location.href = studentURL+'#/login'
    },
    goCooperation(){  //跳转到入驻
      this.$router.push("/page/coIndex/teacherCo")
    },
    //   判断用户点击的密码登录还是验证码登录 0：密码登录。2：验证码登录
    checkout(i) {
      (this.userName = ""),
        (this.password = ""),
        (this.isSelect = true),
        (this.currentIndex = i);
    },
    forfet_upwd() {
      console.log("忘记密码");
      this.$emit("goForgetUpwd", 1);
    },
    // 获取手机验证码
    get_queryCaptcha(phone, type, code) {
      let data = { phone: phone, type: type };
      queryCaptcha(data).then((res) => {
        console.log("消息获取成功", res);
        code = res.data;
      });
    },
    // 传给后端，后端校验验证码
    get_checkCaptcha() {
      let data = { phone: this.inputList[1].value, code: this.phoneCode };
      return checkCaptcha(data);
    },
    // 用户密码登录
    upwdLogin() {
      if (!this.inputList[0].value) {
        this.$myAlert("手机号码不能为空");
        return;
      }
      if (!this.password) {
        this.$myAlert("密码不能为空");
        return;
      }
      if (!validatePhoneNumber(this.inputList[0].value)) {
        this.$myAlert("请输入正确的手机格式");
        return;
      }
      let data = { password: this.password, phone: this.inputList[0].value };
      let params ={data:data,$router:this.$router}
      this.$store.dispatch("getPwdToken", params, this.$router); //将token存储在vuex中
      // passwordLogin(data).then((res) => {
      //   console.log("密码登录成功", res);
      //   if(res.code==200){
      //     setTimeout(() => {
      //     this.$router.push({
      //       path: "/page/home",
      //     });
      //   }, 2000);
      //   }
      // });
    },
    //用户验证码登录
    codeLogin() {
      if (!this.inputList[1].value) {
        this.$myAlert("手机号码不能为空");
        return;
      }
      if (!this.phoneCode) {
        this.$myAlert("验证码不能为空");
        return;
      }
      if (!validatePhoneNumber(this.inputList[1].value)) {
        this.$myAlert("请输入正确的手机格式");
        return;
      }
      let params ={data:{ code: this.phoneCode, phone: this.inputList[1].value },$router:this.$router}
      this.$store.dispatch("getToken", params, this.$router); //将token存储在vuex中
      // captchaLogin(params).then((res) => {
      //   let {data,code} = res;
      //   if(code==200){
      //     localStorage.setItem("userInfo", JSON.stringify(data));
      //   setTimeout(() => {
      //     this.$router.push({
      //       path: "/page/home",
      //     });
      //   }, 2000);
      //   }
        
      // });
    },
    // 校验验证码

    // 跳转到首页
    async go_home() {
      // this.$router.push({
      //   path: "/",
      // });
      if (this.currentIndex == 0) {
        this.upwdLogin();
      } else {
        //let result=await this.get_checkCaptcha();
        //console.log("异步正常",result);
        /* 
        if(result.code==200){
          //验证成功 
          this.$router.push({
        path: "/", 
      });
        }
      */
        this.codeLogin();
      }
    },
    remember() {
      this.isSelect = !this.isSelect;
    },
    send_code() {
      let phone = this.inputList[1].value;
      if (!phone) {
        this.$myAlert("手机号码不能为空");
        return;
      }
      if (!validatePhoneNumber(phone)) {
        this.$myAlert("请输入正确的手机格式");
        return;
      }
      this.startTime(phone);
    },
    startTime(phone) {
      console.log(queryCaptcha);
      // 调用函数
      this.get_queryCaptcha(phone, "2", this.phoneCaptcha);
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
  },
  components: {
    inputTemplate,
  },
};
</script>
<style scoped lang="scss">
input::-webkit-input-placeholder {
  /* WebKit browsers */
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #b8b8bf;
}

input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #b8b8bf;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #b8b8bf;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #b8b8bf;
}
.loging-box{
  position: relative;
  height: calc(100vh - 210px);
}
// 媒体查询
@media screen and (max-height: 700px) {
    .loging-box {
        height: 775px;
    }
}
.right-box {
  padding: 0 20px;
  // width: 400px;
  height: 564px;
  width: 504px;
  // height: 80%;
  background: #ffffff;
  box-shadow: 1px 13px 18px 0px rgba(158, 158, 158, 0.3);
  border-radius: 10px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  // top: 42px;
}
.top-title {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 35px;
  margin-bottom: 76px;
  color: #b8b8be;
}
//   选中时候字体颜色
.active {
  color: #191616;
}

.top-title div {
  font-size: 22px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  //   color: #b8b8be;
}

.main-box {
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    background: linear-gradient(110deg, #f13232, #ef763c);
    box-shadow: 1px 6px 9px 0px rgba(68, 6, 6, 0.32);
    border-radius: 0px;
    // 字体颜色
    font-size: 26px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;
    // 距离上个边距
    margin-top: 66px;
  }
  .ling-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    margin: 29px 0;
    color: #000000;
  }
}
.footer {
  position: absolute;
  bottom: 0;
  width: 464px;
  height: 110px;
  justify-content: center;
  align-items: center;
  display: flex;
  //   字体大小
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #000000;
  border-top: 1px solid #cdcdcd;
}
.send-btn {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #eb002a;
  margin-left: 4px;
}
</style>
