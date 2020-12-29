<template>
  <div>
    <container>
      <breadcrumb-nav>
        <span slot="nav-name" class="hand" @click="go_black">问答广场</span>
        <span slot="nav-child">我要提问</span>
      </breadcrumb-nav>
      <!-- 主题内容 -->
      <div class="main">
        <!-- 我的问题 -->
        <div class="my-question">
          <span>*我的问题</span>
          <!-- 输入框 -->
          <input
            type="text"
            v-model="problem"
            placeholder="请输入您的问题（20字内）"
          />
        </div>
        <!-- 问题描述 -->
        <div class="problem-description">
          <span>*问题描述</span>
          <textarea
            placeholder="请输入问题的详细描述（200字内）"
            v-model="describe"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <!-- 图片上传 -->
        <div class="upload-img">
          <el-upload
            ref="upload"
            :show-file-list="true"
            :action="BASE_URL + 'student/base/uploadImg'"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :on-progress="handleProgress"
            :before-upload="beforeAvatarUpload"
            :limit="3"
            
          >
            <i class="el-icon-plus"></i>

          </el-upload>
          <span>上传问题图片（最多上传3张）</span>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </div>

        <!-- 悬赏金额 -->
        <div>
          <div class="my-question">
            <span>*悬赏金额</span>
            <!-- 输入框 -->
            <input
              v-model="golds"
              type="number"
              placeholder="据说悬赏越高，回答的人越多哦"
            />
          </div>
        </div>
        <!-- 可用状元币 -->
        <div class="usable-gold">可用状元币：{{ myGold }}个</div>
      </div>
      <!-- 底部按钮 -->
      <div class="footer">
        <div @click="submit" class="btn hand">提交</div>
      </div>
    </container>
  </div>
</template>
<script>
import { optAddQuestion } from "@/network/answersPlaza";
import { BASE_URL } from "@/network/config";
import { state } from "vuex";
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false, //控制遮罩层开关
      describe: "", //问题描述
      problem: "", //输入问题
      golds: "", //状元币个数
      BASE_URL: BASE_URL,
      imgUrl: [], //图片上传的路径
      i:1
    };
  },
  computed: {
    myGold() {
      return this.$store.state.infoList.balance;
    },
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
     this.imgUrl = fileList.map(item=>{
        return item.response.data
      })
      console.log(this.imgUrl);
      this.i--;
    },
    handlePictureCardPreview(file) {
      console.log("file", file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleSuccess(event, file, fileList) {
      this.imgUrl = this.imgUrl.concat(event.data);
      this.i++
    },
    beforeAvatarUpload(file) {
      if(this.i<=3){
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;


      if (!isJPG && !isPNG) {
        this.$message.error("上传图片只能是 JPG或者PNG 格式!");
      }
      if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
      return (isJPG || isPNG) && isLt2M;
    }else{
      this.$myMessage("有且之能上传三张图片","error")
      return i==3
    }
      },
    handleProgress() {},
    // 初始化
    init() {
      this.describe = "";
      this.problem = "";
      this.golds = "";
      this.imgUrl = "";
    },
    // 提交提问
    submit() {
      if (!this.problem) {
        this.$myAlert("请输入您的问题");
        return;
      }
      if (!this.describe) {
        this.$myAlert("请输入您的问题描述");
        return;
      }
      if (this.golds) {
        this.$myAlert("请输入状元币个数");
        return;
      }
      if (this.golds > this.myGold) {
        this.$myAlert("状元币余额不足");
        return;
      }
      if (!this.imgUrl) {
        this.$myAlert("请上传您的问题图片");
      }
      console.log(this.imgUrl);
      this.imgUrl = this.imgUrl.length==0?this.imgUrl[0]:this.imgUrl.join(",")
      let params = {
        question: this.problem,
        describe: this.describe,
        golds: this.golds,
        imgUrl: this.imgUrl,
      };
      optAddQuestion(params).then((res) => {
        let {code,data,msg} = res;
        if(code==200){
           this.init();
           this.$refs.upload.clearFiles();
        this.$myAlert("提交问题成功");
        }else{
          this.$myAlert(msg);
        }
       
      });
    },
    // 返回上一页
    go_black() {
      console.log("跳转");
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
// 修改elmentui中图片上传的样式
/deep/ .el-upload--picture-card {
  background: #f7f7f7;
  border: 1px solid #dddddd;
  border-radius: 6px;
}
input {
  border: none;
  outline: none;
  padding-left: 35px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
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
  .upload-img {
    margin-bottom: 15px;
  }
  .usable-gold {
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 300;
    color: #9a9a9a;
    line-height: 36px;
    padding-left: 34px;
  }
}
.footer {
  margin-top: 100px;
  .btn {
    margin: 0 auto;
    width: 274px;
    height: 45px;
    background: linear-gradient(110deg, #f13232, #ef763c);
    box-shadow: 1px 6px 9px 0px rgba(68, 6, 6, 0.32);
    border-radius: 4px;
    // 字体颜色
    font-size: 19px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
