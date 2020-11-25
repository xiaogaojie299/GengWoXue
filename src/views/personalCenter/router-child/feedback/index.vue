<template>
  <div class="box">
    <my-title>问题反馈</my-title>
    <!-- 右上问题反馈 -->
    <div class="right-top" @click="go_historyFeedback">历史反馈</div>
    <!-- 留言板 -->
    <div class="msg-border">
      <textarea
        v-model="textarea"
        placeholder="请输入您的宝贵意见："
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <!-- 输入字符限制 -->
      <div class="char">0/200</div>
    </div>
    <!-- <div class="msg-border">
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="textarea"
      >
      </el-input>
    </div> -->

    <!-- 底部提交按钮 -->
    <div class="footer"><button class="btn" @click="submit">提交</button></div>
  </div>
</template>
<script>
import {optFeedback} from "@/network/personalCenter"
export default {
  data() {
    return {
      textarea: "",
    };
  },
  methods: {
    go_historyFeedback() {
      console.log("跳转历史反馈页面");
      this.$router.push({
        path: "/page/personalCenter/personal/historyFeedback",
      });
    },
    submit(){
      if(!this.textarea){
        return this.$myAlert("留言板不能为空")
      }
      let data={
        content:this.textarea
      }
      console.log("optFeedback=",optFeedback);
      optFeedback(data).then(res=>{
        console.log("提交成功",res)
      });
    }
  },
};
</script>
<style lang="scss" scoped>
/deep/ .el-textarea__inner {
  height: 347px;
  border: 1px solid red;
  background: #ffffff;
}
textarea {
  width: 100%;
  height: 90%;
  background: #f8f9f9;
  padding: 18px 15px;
  //  字体大小
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #333333;
  border: none;
}
.box {
  width: 100%;
  position: relative;
  .right-top {
    width: 73px;
    height: 18px;
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #ef743c;
    line-height:44px;
    position: absolute;
    right: 0;
    top: 2px;
  }
  .msg-border {
    width: 100%;
    height: 347px;
    background: #f8f9f9;
    padding:12px;
    .char {
      margin-right: auto;
      text-align: right;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #a5a5a5;
    }
  }
  .footer {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 16px 0;
    & button {
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