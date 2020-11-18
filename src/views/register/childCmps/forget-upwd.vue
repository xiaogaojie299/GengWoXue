<template>
  <div>
    <container>
      <div class="right-box">
        <!-- 头部 -->
        <div class="header">
          <span class="back" @click="go_regist()"> ＜ </span>
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
                    style="width: 100%"
                    type="text"
                    placeholder="请输入宁的手机号码"
                  />
                </div>
              </input-template>
            </div>
            <!-- 输入手机号码 -->
            <input-template>
              <div slot="left-content">
                <input
                  style="width: 100%"
                  type="text"
                  placeholder="请输入您的验证码"
                />
              </div>
              <div slot="right-content">
                <button class="send-btn" :disabled="disabledBtn" @click="send_code">{{textCode}}</button>
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
                    style="width: 340px"
                    type="text"
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
                  type="text"
                  placeholder="再次输入密码"
                />
              </div>
            </input-template>
          </div>
        </div>
        <!-- 底部按钮 -->
        <div class="footer-btn">
            确认重置
        </div>
      </div>
    </container>
  </div>
</template>
<script>
import inputTemplate from "./input-template";
export default {
  data() {
    return {
      textCode:"获取验证码",
      disabledBtn:false
    };
  },
  methods: {
    go_regist(){
      console.log('返回密码登录')
      this.$emit("backUpwdReg",0)
    },
    send_code(){
      this.startTime()
    },
    startTime(){
      let i =10;
      let timer=null;
     timer=setInterval(()=>{
       i--;
       if(i>=0){
         this.textCode=`${i}秒后重发`;
         this.disabledBtn=true;
       }else{
         clearInterval(timer)
         i=9;
         this.textCode=`重新发送`;
         this.disabledBtn=false;
       }
      },1000)
    }
  },
  components: {
    inputTemplate,
  },
};
</script>
<style lang="scss" scoped>
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
  height: 80%;
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
    margin-top:46px;
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
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 520;
        color: #000000;
      }
      .input-number {
        margin-top: -22px;
      }
    }
    .set-upwd-box {
      @extend .phone-box;
      margin-top:24px;
    }
  }
  .footer-btn{
  display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
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
  .send-btn{
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color:#eb002a;
        margin-left:4px;
}
}
</style>