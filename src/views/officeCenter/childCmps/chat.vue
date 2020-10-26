<template>
  <div class="box">
    <!-- 消息列表 -->
    <div class="chat-list-box">
      <div class="chat-list">张三: 进入直播间</div>
      <div class="chat-list">刘小林: 进入直播间</div>
    </div>
    <!-- 下方发送按钮 -->
    <div class="footer">
      <input type="text" />
      <div class="send">发送</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.box {
  margin-top: 20px;
  width: 100%;
  height: 100%;
  background: #f9f9f9;
  // border: 1px solid #C7C7C7;
  .chat-list {
    font-size: 10px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #343434;
    line-height: 17px;
  }
}
.chat-list-box {
  height: 200px;
  border: 1px solid slateblue;
}
.footer {
  width: 100%;
  height: 60px;
  border: 1px solid olive;
  margin: 12px 0;
  padding: 6px;
  display: flex;
  align-items: center;
  input {
    width: 100%;
    height: 36px;
border: 1px solid #C7C7C7;
border-radius: 7px;
outline: none;
padding-left:10px;
  }
  .send {
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
    margin-left:18px;
  }
}
</style>