<template>
  <div>
    <div>
      <!-- 上面标签 -->
      <div class="header">
        <div class="header-tag">
          <div class="tag-left">课件类型:</div>
          <!-- 下拉多选框 -->
          <div style="margin-left: 8px">
            <el-select
              :popper-append-to-body="false"
              v-model="kejianTypeValue"
              placeholder="请选择"
            >
              <el-option
                v-for="item in kejianType1"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
          <img src="@/assets/img/answers/icon_arrow.png" alt="" />
          <!-- 下面按钮组 -->
        </div>

        <div class="header-tag">
          <div class="tag-left">科目:</div>
          <!-- 下拉多选框 -->
          <div>
            <el-select
              @change="change"
              :popper-append-to-body="false"
              v-model="subjectValue"
              placeholder="请选择"
            >
              <el-option
                v-for="item in copy_subject"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
          <img src="@/assets/img/answers/icon_arrow.png" alt="" />
          <!-- 下面按钮组 -->
        </div>

        <div class="header-tag">
          <div class="tag-left">年级:</div>
          <!-- 下拉多选框 -->
          <div>
            <el-select
              @change="change"
              :popper-append-to-body="false"
              v-model="classValue"
              placeholder="请选择"
            >
              <el-option
                v-for="item in copy_classList"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </div>
          <img src="@/assets/img/answers/icon_arrow.png" alt="" />
        </div>
      </div>

      <div style="margin: 20px 0" class="header">
        <div class="header-tag">
          <div class="tag-left">课件名称:</div>
          <div>
            <input v-model="kjName" class="kjName" type="text" />
          </div>
          <div></div>
          <!-- 下面按钮组 -->
        </div>
      </div>

      <div class="upload-ppt">
        <div>{{kejianTypeValue==2?"PPT":"文档"}}上传:</div>
        <!-- <el-upload
          :action="BASE_URL+'student/base/uploadFile'"
          list-type="picture-card"
          :headers="{'Access-Control-Allow-Origin':'http://192.168.0.38:8080'}"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <i class="el-icon-plus"></i>
        </el-upload> -->

        <el-upload
          class="upload-demo"
          drag
          :action="BASE_URL+'student/base/uploadFile'"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :before-upload="beforeAvatarUpload"
          :limit="1"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
          <div class="el-upload__tip" slot="tip">有且只能上传一个文件</div>
        </el-upload>
      </div>

      <!-- 上传 -->
      <div class="footer">
        <button @click="submit" class="btn2">上传</button>
      </div>
    </div>
  </div>
</template>

<script>
import { kjMixin } from "../kj-mixin/mixins";
import { saveMyCourseware } from "@/network/officeCenter";
import {BASE_URL} from "@/network/config"
export default {
  mixins: [kjMixin],
  props: {
    classList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    subjectList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      kejianTypeValue: 2,
      subjectValue: "",
      classValue: "",
      kjName: "",
      dialogVisible: false,
      pptUrl: "",
      copy_classList: [],
      copy_subject: [],
      BASE_URL:BASE_URL
    };
  },
  created() {
    this.copy_classList = [...this.classList];
    this.copy_classList.shift();
    this.copy_subject = [...this.subjectList];
    this.copy_subject.shift();
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
    },
    handleSuccess(file) {
      console.log("file==>", file);
      this.pptUrl = file.data;
    },
    beforeAvatarUpload(file){
      // console.log("isLt2M==>",file);
      // const isLt2M = file.size / 1024 / 1024 < 2;
      // if (!isLt2M) {
      //     this.$message.error('上传大小不能超过 2MB!');
      //   }
      //   return isLt2M

      //音频上传校验
      const isLt2M = file.size / 1024 / 1024 < 2;
      const type = "file";
      const fileName = file.name;
      const m = fileName.match(/\.(\w+)(#|\?|$)/);
      const fileType = (m && m[1]).toString().toLowerCase();
      console.log(fileType);
      const allowHook = {
        video: ["mp4", "ogv", "ogg", "webm"],
        audio: ["wav", "mp3", "ogg", "acc", "webm", "amr"],
        file: ["doc", "docx", "xlsx", "xls", "pdf","pptx"],
        excel: ["xlsx", "xls"],
        img: ["jpg", "jpeg", "png", "gif"],
      };
      const validType = (allowHook[type] || []).includes(fileType);
      console.log("validType", validType);
      if (!validType) {
        const supprtTypes = allowHook[type].join(",");
        this.$message.error(`只能上传${supprtTypes}类型的文件上传`);
      }
       if (!isLt2M) {
          // this.$message.error('上传图片大小不能超过 2MB!');
        }
        return validType;

    },
    submit() {
      if (!this.kejianTypeValue) {
        this.$myAlert("课件类型不能为空");
        return;
      }
      if (!this.subjectValue) {
        this.$myAlert("科目不能为空");
        return;
      }
      if (!this.classValue) {
        this.$myAlert("年级不能为空");
        return;
      }
      if (!this.kjName) {
        this.$myAlert("课件名称不能为空");
        return;
      }
      if (!this.pptUrl) {
        this.$myAlert("请上传PPT");
        return;
      }
      let pamars = {
        gradeId: this.classValue,
        name: this.kjName,
        subjectsId: this.subjectValue,
        type: this.kejianTypeValue,
        url: this.pptUrl,
      };
      console.log("this.pptUrl",this.pptUrl);
      saveMyCourseware(pamars).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this._this.dialogVisible = false;
          this.$emit("loadPage");
          this.$message({
            message: "课件上传成功",
            type: "success",
          });
        }
      });
    },
    // 选择状态
    change(val) {
      console.log("val=", val);
    },
  },
};
</script>
<style lang="scss" scoped>
/deep/ .el-input__inner {
  margin-left: 10px;
  padding-left: 6px;
  margin: 0;
  outline: none;
  border: none;
  // width: 100%;
  width: 101px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 3px;
  font-size: 10px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #343434;
}
/deep/ .el-input__icon {
  display: none;
}
/deep/ .el-select-dropdown {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #262626;
}
/deep/ .el-select-dropdown__list li {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #484949;
}
/deep/ .el-select-dropdown__item.hover {
  background: linear-gradient(110deg, #f13232, #ef753c);
  color: #fff;
}

.footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  .btn2 {
    width: 80px;
    height: 38px;
    background: linear-gradient(110deg, #f13232, #ef763c);
    border-radius: 4px;
    margin-left: 16px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.upload-ppt {
  display: flex;
  font-size: 10px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #343434;
  & :first-child {
    margin-right: 6px;
  }
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.header {
  display: flex;
  justify-content: space-between;
  .header-tag {
    position: relative;
    width: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tag-left {
      width: 60%;
      white-space: nowrap;
      font-size: 10px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #343434;
    }
    .kjName {
      padding-left: 6px;
      margin: 0;
      outline: none;
      border: none;
      width: 101px;
      // width: 121px;
      height: 32px;
      background: #ffffff;
      border: 1px solid #efefef;
      border-radius: 3px;
      font-size: 10px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #343434;
    }
    & img {
      width: 10px;
      height: 10px;
      position: absolute;
      right: 6px;
    }
    .tag-right {
      width: 98px;
      height: 34px;

      border: 1px solid #efefef;
      border-radius: 4px;
      font-size: 9px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #4d4d4d;
    }
  }
}
</style>