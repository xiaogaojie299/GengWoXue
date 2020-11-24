<template>
  <div>
    <div class="box">
      <!-- 头像上传 -->
      <div class="upload-box">
        <div class="left-title my-font">头像:</div>
        <!-- 右边内容 -->
        <div class="right-content">
          <img :src="form.avatar" alt="" />
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
              :value="form.introduction"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </div>
      <!-- 资质 -->
      <div>
        <div class="row">
          <div class="col1">
            <div class="left-box my-font">资质：</div>
            <div class="right-box">
              <input type="text" :value="info.qualificationType" />
            </div>
            <div class="btn-group">
              <div class="add" @click="add">添加</div>
              <div class="delete" @click="del(item)">删除</div>
            </div>
          </div>
        </div>

        <!-- 图片上传 -->
        <div class="upload-box">
          <div class="left-title my-font"></div>
          <!-- 右边内容 -->
          <div class="right-content">
            <img :src="info.qualificationImg" alt="" />
            <img
              style="margin-left: 12px"
              src="@/assets/img/icon_photo_update.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div v-for="item in rotate" :key="item">
        <div class="row">
          <div class="col1">
            <div class="left-box my-font"></div>
            <div class="right-box">
              <input type="text" :value="form.qualificationType" />
            </div>
            <div class="btn-group">
              <div class="add" @click="add">添加</div>
              <div class="delete" @click="del(item)">删除</div>
            </div>
          </div>
        </div>

        <!-- 图片上传 -->
        <div class="upload-box">
          <div class="left-title my-font"></div>
          <!-- 右边内容 -->
          <div class="right-content">
            <!-- <img :src="info.qualificationImg" alt="" /> -->
            <img src="@/assets/img/icon_photo_update.png" alt="" />
          </div>
        </div>
      </div>

      <!-- 底部按钮 -->
      <div class="footer-btn"><button @click="submit">保存</button></div>
    </div>
  </div>
</template>
<script>
import { queryPersonalData, optPersonalData } from "@/network/personalCenter";
import qs from "@/network/qs.js"
import { state, actions } from "vuex";
export default {
  data() {
    return {
      form: {
        birthday: "", //出生日期
        subjectValue: "", //选择科目按钮
        sex: 1, //选择性别
      },
      sexList: [
        { name: "男", sex: 1 },
        { name: "女", sex: 2 },
      ], //选择性别list
      rotate: 0,
      info: {},
    };
  },
  computed: {
    subjectList() {
      let arr = this.$store.state.subjectList;
      arr.shift();
      return arr;
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
      console.log("获取用户个人信息", res);
      this.info = res;
      this.form.birthday = res.birthday;
      this.form.nickname = res.nickname;
      this.form.sex = res.sex;
      this.form.avatar = res.avatar;
      this.form.introduction = res.introduction;
      this.form.qualificationImg = res.qualificationImg;
      this.form.qualificationType = res.qualificationType;
      if (res.coursesubjectsIds.indexOf(",") != -1) {
        this.form.subjectValue = res.coursesubjectsIds.split(",").map(Number);
      } else {
        this.form.subjectValue = [].concat(Number(res.coursesubjectsIds));
      }
      console.log("this.subjectValue=", this.form.subjectValue);
    },
    // 修改个人资料
    async setPersonalData() {
      let res=await optPersonalData(qs(this.form));
      this.$myAlert("修改成功")
      this.getPersonalData()
    },
    // 保存
    submit() {
      this.setPersonalData();
    },
    // 点击添加
    add() {
      console.log("add", this.rotate);
      this.rotate++;
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