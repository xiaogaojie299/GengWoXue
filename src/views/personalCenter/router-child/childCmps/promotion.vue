<template>
  <div class="box">
    <div class="title">推广中心</div>
    <div class="main">
      <div class="main-header">
        <!-- 二维码图片 -->
        <div class="QR-code"></div>
        <!-- 链接 -->
        <div class="link">
          <!-- 链接 -->
          <div class="title my-font">www.baidu.com</div>
          <!-- 复制链接按钮 -->
          <div class="btn my-font">复制链接</div>
          <div class="btn my-font">复制链接</div>
        </div>
      </div>

      <div class="main-footer">
      <!-- 历史邀请标题 -->
      <my-title>历史邀请</my-title>
        <!-- 表格 -->
        <invite-table></invite-table>
        <!-- 分页 -->
        <div class="pageNext">
         <page-device></page-device>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import inviteTable from "./invite-table"
export default {
    data(){
        return {

        }
    },
    components:{
        inviteTable
    }
}
</script>
 <style lang="scss" scoped>
 .my-font{
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #4D4D4D;
 }
.box {
  width: 100%;
}
.title {
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #343434;
  margin-bottom: 20px;
}
.main {
  width: 100%;
  height: 801px;
  background: #f8f9f9;
  .main-header {
        margin-left: 353px;
    .QR-code {
      width: 298px;
      height: 299px;
      background: chartreuse;
      margin:16px 0;
    }
    .link{
        display: flex;
        .title{
            width: 299px;
            height: 34px;
            background: #FFFFFF;
            border: 1px solid #EFEFEF;
            border-radius: 4px;
            display:flex;
            align-items: center;
            padding:0 12px;
            margin-right: 18px;
        }
        .btn{
            width: 94px;
            height: 34px;
            background: #FFFFFF;
            border: 1px solid #EFEFEF;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 6px;
        }
    }
  }
  .main-footer{
      .pageNext{
            margin:34px 0 30px 318px;
      }
  }
}
</style>