<template>
  <div>
    测试页面
    <!-- <a class="target" href="" @click="jump">跳转</a> -->
    <button @click="jump">跳转</button>
  </div>
</template>
<script src="https://res.qcloudtiw.com/thirdpart/axios/axios.min.js"></script>
<script>
// console.log("axios=",this.axios);
export default {
  data() {
    return {};
  },
  methods: {
    jump() {
      console.log("window", window.location);
      window.location.href = "http://www.baidu.com";
    },
  },
};
</script>
<style lang="scss" scoped>
      .footer {
        width: 100%;
        height: 60px;
        margin: 12px 0;
        padding: 6px;
        display: flex;
        align-items: center;
      }

      .footer > input {
        width: 100%;
        height: 36px;
        border: 1px solid #c7c7c7;
        border-radius: 7px;
        outline: none;
        padding-left: 10px;
      }

      .footer > .send {
        width: 59px;
        height: 36px;
        background: linear-gradient(110deg, #f13232, #ef763c);
        border-radius: 7px;

        font-size: 10px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 18px;
      }

      * {
        margin: 0;
        padding: 0;
      }

      html,
      body,
      #app_box {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .title {
        margin: 10px 0;
        text-align: center;
      }

      .text-right {
        text-align: right;
      }

      .promption {
        color: #a0a0a0;
      }

      .im-log-box {
        width: 100%;
        height: 100%;
        /* border: 1px solid #999; */
        margin: 0px;
        box-sizing: border-box;
        overflow-y: auto;
        overflow-x: hidden;
      }

      .im-log-box li {
        margin: 2px 5px;
        font-size: 14px;
        color: #666;
      }

      #video_wrap {
        height: 100px;
        display: flex;
      }

      #video_wrap > div {
        width: 134px;
        height: 100%;
      }

      #paint_box {
        position: relative;
        width: 100%;
        height: 100%;
        border: 1px solid #888;
        overflow: hidden;
        box-sizing: content-box;
      }

      .el-header,
      .el-footer {
        padding: 0 !important;
      }

      .el-main {
        padding: 0 !important;
        overflow: hidden !important;
        height: 100%;
      }

      .el-container {
        flex: 1;
        height: 100%;
        overflow: hidden;
      }

      .el-tabs__header {
        margin: 0;
      }

      .el-icon-arrow-left,
      .el-icon-arrow-right {
        font-size: 20px;
      }

      .version-info {
        font-size: 14px;
        color: #606266;
      }

      .tiw-tips {
        border-left: 10px solid #50bfff;
        background-color: #ecf8ff;
        padding: 10px 10px;
      }

      .tiw-tips p {
        font-size: 14px;
        color: #5e6d82;
        line-height: 30px;
      }
    </style>

