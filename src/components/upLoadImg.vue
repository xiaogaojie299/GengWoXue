<template lang="">
    <div>
        <el-upload
            class="avatar-uploader"
            :action="BASE_URL+'student/base/uploadImg'"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>        
    </div>
</template>
<style scoped lang="scss">
  /deep/ .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  /deep/ .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  /deep/ .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  /deep/ .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<script>
import {BASE_URL} from "@/network/config"
  export default {
    data() {
      return {
        imageUrl: '',
        BASE_URL:BASE_URL
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        console.log("res==>",res);
        console.log("file==>",file);
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log("this.imageUrl===>",this.imageUrl);
        this.$emit("imgUrl",this.imageUrl+"")
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG && !isPNG) {
            this.$message.error("上传封面只能是 JPG或者PNG 格式!");
        }
        
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }

        return (isJPG || isPNG) && isLt2M;
      }
    }
  }
</script>