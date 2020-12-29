<template>
  <div>
    <div class="box">
      <!-- 头像上传 -->
      <div class="upload-box">
        <div class="left-title my-font">头像：</div>
        <!-- 右边内容 -->
        <div class="right-content hand">
          <el-upload
            :show-file-list="false"
            :action="BASE_URL + 'student/base/uploadImg'"
            :before-upload="beforeImgUpload"
            :on-success="handleAvatar"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleImgRemove"
          >
            <img :src="form.avatar" alt="" />
          </el-upload>
          <!-- <img :src="form.avatar" alt="" /> -->
        </div>
      </div>
      <!-- 一行两列 -->
      <div class="row">
        <div class="col1">
          <div class="left-box my-font">账户：</div>
          <input type="text" disabled :value="info.phone" />
        </div>
        <div class="col1">
          <div class="left-box my-font">电话：</div>
          <input type="text" disabled :value="info.phone" />
        </div>
      </div>

      <div class="row">
        <div class="col1">
          <div class="left-box my-font">昵称：</div>
          <input type="text" v-model="form.nickname" />
        </div>
        <div class="col1">
          <div class="left-box my-font">联系地址：</div>
          <input disabled type="text" :value="info.address" />
        </div>
      </div>

      <div class="row">
        <div class="col1">
          <div class="left-box my-font">性别：</div>
          <div class="pull-down-box">
            <el-select
              @change="change"
              :popper-append-to-body="false"
              v-model="form.sex"
            >
              <el-option
                v-for="item in sexList"
                :key="item.sex"
                :label="item.name"
                :value="item.sex"
              >
              </el-option>
            </el-select>
            <img
              class="icon_arrow"
              src="@/assets/img/answers/icon_arrow.png"
              alt=""
            />
          </div>
        </div>
        <div class="col1">
          <div class="left-box my-font">擅长课程：</div>
          <div class="pull-down-box">
            <el-select
              :multiple="true"
              @change="change"
              :popper-append-to-body="false"
              v-model="form.subjectValue"
              placeholder="请选择"
            >
              <el-option
                v-for="item in subjectList"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
            <img
              class="icon_arrow"
              src="@/assets/img/answers/icon_arrow.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col1">
          <div class="left-box my-font">角色：</div>
          <input disabled type="text" :value="info.type" />
        </div>
        <div class="col1">
          <div class="left-box my-font">学历：</div>
          <input disabled type="text" :value="info.highestEducation" />
        </div>
      </div>

      <div class="row">
        <div class="col1">
          <div class="left-box my-font">姓名：</div>
          <input type="text" disabled :value="info.name" />
        </div>
        <div class="col1">
          <div class="left-box my-font">毕业院校：</div>
          <div class="right-box">
            <input disabled type="text" :value="info.graduatedSchool" />
          </div>
        </div>
      </div>
      <!-- 出生日期 -->
      <div class="row">
        <div class="col1">
          <div class="left-box my-font">出生日期：</div>
          <div class="right-box">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.birthday"
              style="width: 100%; height: 100%"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
      <!-- 毕业时间 -->
      <div class="row">
        <div class="col1">
          <div class="left-box my-font">入职时间：</div>
          <div class="right-box">
            <el-date-picker
              disabled
              type="date"
              placeholder="选择日期"
              v-model="info.onboardingTime"
              style="width: 100%; height: 100%"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
      <!-- 个人简历 -->
      <div class="row">
        <div class="col1">
          <div class="left-box my-font">个人简介：</div>
          <!-- <div class="right-box">
              <textarea name="" id="" cols="30" rows="10"></textarea>
          </div> -->
          <div class="my-jianji">
            <textarea
              v-model="form.introduction"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </div>
      <!-- 资质 -->
      <!-- <div v-for="(item, index) in form.qualificationType" :key="index"> -->
      <div>
        <div class="row">
          <div class="col1">
            <div class="left-box my-font">资质：</div>
            <div class="right-box">
              <input v-model="form.qualificationType" type="text" />
            </div>
            <!-- <div class="btn-group">
              <div class="add" @click="add">添加</div>
              <div class="delete" @click="del(item)">删除</div>
            </div> -->
          </div>
        </div>

        <!-- 图片上传 -->
        <div class="upload-box">
          <div class="left-title my-font"></div>
          <div
            v-for="(item, index) in this.form.qualificationImg"
            :key="index"
            class="right-content"
          >
            <div v-if="item.url" class="upload-img">
              <img :src="item.url" alt="" />
              <div class="del-icon">
                <img
                  @click="delImg(index)"
                  src="@/assets/img/icon_del.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div></div>
          <div v-if="form.qualificationImg.length < 3 && form.qualificationImg">
            <el-upload
              :show-file-list="false"
              :action="BASE_URL + 'student/base/uploadImg'"
              :before-upload="beforeImgUpload"
              :on-success="handleImg"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleImgRemove"
            >
              <!-- <i class="el-icon-plus"></i> -->
              <img
                style="margin-left: 12px"
                src="@/assets/img/icon_photo_update.png"
                alt=""
              />
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </div>
        </div>
      </div>

      <!-- 底部按钮 -->
      <div class="footer-btn hand"><button @click="submit">保存</button></div>
    </div>
  </div>
</template>
<script>
import { queryPersonalData, optPersonalData } from "@/network/personalCenter";
import qs from "@/network/qs.js";
import { BASE_URL, TIMEOUT } from "@/network/config";

import { state, actions } from "vuex";
export default {
  data() {
    return {
      form: {
        birthday: "", //出生日期
        subjectValue: "", //选择科目按钮
        sex: 1, //选择性别
        qualificationImg: [],
      },
      fileList: [],
      upLoadList: [{ url: "" }, { url: "" }, { url: "" }],
      imgIndex: "",
      dialogVisible: false, // 预览图片放大
      dialogImageUrl: "", //预览图片路径
      BASE_URL: BASE_URL, // 上传接口头
      sexList: [
        { name: "男", sex: 1 },
        { name: "女", sex: 2 },
      ], //选择性别list
      rotate: [],
      info: {},
    };
  },
  computed: {
    subjectList: {
      get() {
        let arr = this.$store.state.subjectList;
        arr.shift();
        return arr;
      },
      set() {
        
      },
    },
  },
  created() {
    this.getPersonalData();
    this.init();
  },
  methods: {
    init() {
      this.subjectList = this.$store.dispatch("getSubjectList");
    },
    // 获取用户个人详情
    async getPersonalData() {
      let res = await queryPersonalData();
      let { code, data } = res;
      if (code == 200) {
        console.log("获取用户个人信息", data.avatar);
        this.$store.commit("setUserImg", data.avatar); //首页展示与当前更改头像保持一致
        switch (data.type) {
          case 1:
            data.type = "平台教师";
            break;
          case 2:
            data.type = "入驻教师";
            break;
          default:
            data.type = "机构教师";
        }
        this.info = data;
        this.form.birthday = data.birthday; //用户姓名
        this.form.nickname = data.nickname; //用户昵称
        this.form.sex = data.sex; //用户性别
        this.form.avatar = data.avatar; //用户头像
        this.form.introduction = data.introduction;
        // 资质图片 多个用,连接
        let imgArr = data.qualificationImg.includes(",")
          ? data.qualificationImg.split(",")
          : data.qualificationImg.split(" ");
        this.form.qualificationImg = imgArr.map((item, index, arr) => {
          let obj = {};
          obj.url = item;
          return obj;
        });
        console.log("upLoadList==", this.form.qualificationImg);
        // 判断当前是否有多选个擅长科目
        if (data.coursesubjectsIds.indexOf(",") != -1) {
          this.form.subjectValue = data.coursesubjectsIds
            .split(",")
            .map(Number);
        } else {
          this.form.subjectValue = [].concat(Number(data.coursesubjectsIds));
        }
        this.form.qualificationType = data.qualificationType; //资质证书
      }
    },
    // 修改个人资料
    async setPersonalData() {
      let arr = [];
      let params = {};
      for (let i = 0; i < this.form.qualificationImg.length; i++) {
        arr.push(this.form.qualificationImg[i].url);
      }
      this.form.qualificationImg = arr;
      this.form.coursesubjectsIds = this.form.subjectValue;
      delete this.form.subjectValue;
      params = JSON.parse(JSON.stringify(this.form));
      // params.qualificationImg;
      console.log("str==", params);
      console.log(params.qualificationImg[2]);
      let res = await optPersonalData(qs(params));
      this.$myAlert("修改成功");
      this.rotate = [];
      this.getPersonalData();
    },
    checkIndex(index) {
      //选中图片的下标
      this.imgIndex = index;
      console.log("imgIndex==", this.imgIndex);
    },
    delImg(i) {
      //删除图片的下标
      this.form.qualificationImg.splice(i, 1);
      // console.log(this.upLoadList);
    },
    beforeImgUpload(file) {
      // 校验上传的文件类型是否是图片
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      if (!isJPG && !isPNG) {
        this.$message.error("上传资质 JPG或者PNG 格式!");
      }
      return isJPG || isPNG;
    },
    handleImg(res, fileList) {
      console.log(res, fileList);
      //上传图片接口
      if (res.code == 200) {
        let obj = {};
        obj.url = res.data;
        this.form.qualificationImg.push(obj);
      } else {
        this.$myAlert(res.msg);
      }
      console.log(this.form.qualificationImg);
    },
    handleAvatar(res, file) {
      if (res.code == 200) {
        this.$forceUpdate();
        this.$set(this.form, "avatar", res.data);
      } else {
        this.$myAlert(res.msg);
      }
    },
    handlePictureCardPreview(file) {
      //查看图片
      //查看图片操作
      console.log(file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    handleImgRemove(file, fileList) {
      //删除图片操作
      console.log(file, fileList);
      //   fileList.forEach(item=>{
      //     if(Object.keys(item).includes("response")){
      //       item.url = item.response.data
      //     }
      // })
      // this.form.qualificationImg=fileList;
    },
    handleExceed(files, fileList) {
      //限制音频上传个数
      this.$message.warning("最多只能上传3张照片噢");
      this.form.qualificationImg = fileList;
      console.log(files, fileList);
    },
    // 保存
    submit() {
      this.setPersonalData();
    },
    // 点击添加
    add() {
      console.log("add");
      this.rotate.push("");
    },
    del() {},
    // 用户点击选择
    change(val) {
      console.log("val=", val);
    },
  },
};
</script>
<style lang="scss" scoped>
input[disabled] {
  border: 1px solid #ddd;
  background-color: #f5f7fa;
  color: #c0c4cc;
}
/deep/ .el-input__inner {
  padding-left: 16px;
  margin: 0;
  outline: none;
  border: none;
  width: 100%;
  width: 272px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 3px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #343434;
}
/deep/ .el-input__icon {
  display: none;
}
/deep/ .el-select-dropdown {
  font-size: 24px;
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

/deep/ .el-input__inner {
  height: 34px;
}
.my-font {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
}
input {
  width: 272px;
  height: 34px;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 4px;
  padding: 0 14px;
}

textarea {
  width: 100%;
  height: 113px;
  padding: 10px 20px;
}
.box {
  width: 100%;
  .upload-box {
    display: flex;
    .left-title {
      width: 90px;
      height: 90px;
      margin-right: 2px;
    }
    .right-content {
      img {
        width: 168px;
        height: 168px;
      }
      .upload-img:hover > .del-icon {
        opacity: 1;
      }
      .upload-img {
        position: relative;
        .del-icon {
          opacity: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          img {
            width: 22px;
            height: 22px;
          }
        }
      }
    }
  }
  .footer-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
    & button {
      width: 190px;
      height: 36px;
      background: linear-gradient(110deg, #f13232, #ef753c);
      box-shadow: 0px 4px 6px 0px rgba(68, 5, 5, 0.32);
      border-radius: 3px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #ffffff;
    }
  }
  .row {
    display: flex;
    justify-content: space-around;
    width: 100%;
    .col1 {
      display: flex;
      align-items: center;
      margin: 12px 0;
      width: 100%;
      .icon_arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 8px;
        width: 8px;
        height: 11px;
      }
      .left-box {
        white-space: nowrap;
        width: 90px;
        margin-right: 2px;
      }
      .right-box {
        position: relative;
        width: 272px;
        height: 34px;
      }
      .pull-down-box {
        position: relative;
      }
      .btn-group {
        width: 240px;
        display: flex;
        .add,
        .delete {
          margin-left: 23px;
          width: 82px;
          height: 34px;
          background: #ffffff;
          border: 1px solid #ef743c;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          // 字体大小

          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #ef743c;
        }
      }
      //   这是个人简介留言框样式
      .my-jianji {
        width: 753px;
        height: 113px;
        background: #ffffff;
        border: 1px solid #efefef;
        border-radius: 4px;
      }
    }
  }
}
</style>
