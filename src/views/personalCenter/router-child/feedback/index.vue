<template>
  <div class="box">
    <my-title>问题反馈</my-title>
    <!-- 右上问题反馈 -->
    <div class="right-top" @click="go_historyFeedback">历史反馈</div>
    <!-- 留言板 -->
    <div class="msg-border">
      <textarea
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      textarea: "",
    };
  },
  methods:{
      go_historyFeedback(){
          console.log("跳转历史反馈页面");
          this.$router.push({
              path:"/personalCenter/personal/historyFeedback"
          })
      }
  }
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
    line-height: 54px;
    position: absolute;
    right: 0;
    top: 2px;
  }
  .msg-border {
    width: 100%;
    height: 347px;
    background: #f8f9f9;
    .char {
      margin-right: auto;
      text-align: right;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #a5a5a5;
    }
  }
}
</style>