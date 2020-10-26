<template>
  <div>
    <container>
      <breadcrumb-nav>
        <span slot="nav-name">问答广场</span>
        <span slot="nav-child">我要提问</span>
      </breadcrumb-nav>
      <!-- 主题内容 -->
      <div class="main">
        <!-- 我的问题 -->
        <div class="my-question">
          <span>*我的问题</span>
          <!-- 输入框 -->
          <input type="text" placeholder="请输入您的问题（20字内）" />
        </div>
        <!-- 问题描述 -->
        <div class="problem-description">
          <span>*问题描述</span>
          <textarea
            placeholder="请输入问题的详细描述（200字内）"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <!-- 图片上传 -->
        <div class="upload-img">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </div>

        <!-- 悬赏金额 -->
        <div>
            <div class="my-question">
          <span>*悬赏金额</span>
          <!-- 输入框 -->
          <input type="text" placeholder="据说悬赏越高，回答的人越多哦" />
        </div>
        </div>
        <!-- 可用状元币 -->
        <div class="usable-gold">可用状元币：10个</div>
      </div>
      <!-- 底部按钮 -->
      <div class="footer">
          <div class="btn">提交</div>   
      </div>
    </container>
  </div>
</template>
<script>
export default {
    data(){
        return{
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
};
</script>

<style lang="scss" scoped>
// 修改elmentui中图片上传的样式
/deep/ .el-upload--picture-card{
background: #F7F7F7;
border: 1px solid #DDDDDD;
border-radius: 6px;
}
input {
  border: none;
  outline: none;
  padding-left: 35px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #9a9a9a;
  height: 90%;
}
textarea {
  width: 90%;
  height: 164px;
  padding-left: 35px;
  padding-top: 16px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  border: none;
  outline: none;
}
.main {
  width: 100%;
  height: 100%;
  .my-question {
    display: flex;
    height: 48px;
    border: 1px solid #e5e5e5;
    display: flex;
    align-items: center;
    & span {
      width: 140px;
      height: 100%;
      background: #f3f3f3;
      display: flex;
      align-items: center;
      justify-content: center;
      //   字体颜色
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #666666;
    }
    & input {
      width: 90%;
    }
  }
  .problem-description {
    height: 184px;
    border: 1px solid #e5e5e5;
    //   border: 1px solid red;
    overflow: hidden;
    display: flex;
    margin: 16px 0;
    & span {
      display: inline-block;
      width: 140px;
      height: 100%;
      background: #f3f3f3;
      display: flex;
      justify-content: center;
      //   字体颜色
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #666666;
      padding-top: 16px;
    }
  }
  .upload-img{
      margin-bottom: 15px;
  }
  .usable-gold{
font-size: 14px;
font-family: Source Han Sans CN;
font-weight: 300;
color: #9A9A9A;
line-height: 36px;
padding-left:34px;
  }
}
.footer{
    margin-top:100px;
    .btn{
        margin:0 auto;
        width: 274px;
        height: 45px;
        background: linear-gradient(110deg, #F13232, #EF763C);
        box-shadow: 1px 6px 9px 0px rgba(68, 6, 6, 0.32);
        border-radius: 4px;
        // 字体颜色
        font-size: 19px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
    }

}
</style>