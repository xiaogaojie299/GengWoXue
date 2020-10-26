<template>
  <div id="box">
    <container>
      <div class="header">
        <!-- 多选框，选择所有消息和未读消息 -->
        <div class="msg">所有消息</div>
        <!-- 按钮 -->
        <div class="btn">置为已读</div>
      </div>
      <!-- 中间表格数据 -->
      <div class="main">
          <msg-table></msg-table>
      </div>

      <!-- 底部分页 -->
      <div class="footer">
        <page-device></page-device>

      </div>
    </container>
  </div>
</template>
<script>
import msgTable from "./childCmps/msgTable"
export default {
    data(){
        return {

        }
    },
    components:{
msgTable
    }
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  font-size: 10px;
  font-family: Source Han Sans CN;
  font-weight: 550;
  .msg {
     width: 95px;
    height: 25px;
    margin-right: 12px;
    color: #333333;
    border: 1px solid red;
  }
  .btn {
    color: #ef743b;
    width: 95px;
    height: 25px;
    background: #ffffff;
    border: 1px solid #ef733b;
    border-radius: 2px;
  }
}
.main{
    margin: 20px auto;
    width: 90%;
    // display: flex;
}
.footer{
    width: 100%;
    margin:20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>