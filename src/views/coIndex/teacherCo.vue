<template>
  <div class="teacher-co banner">
    <div class="title">
      <h4>成为老师</h4>
    </div>

    <div class="main">
      <!-- 表单 -->
      <el-form :model="userInfo" :rules="rules" ref="ruleForm">
        <!-- 姓名和性别 -->
        <el-row :gutter="97">
          <el-col :span="12">
           <el-form-item prop="uname">
              <el-input placeholder="请输入您的姓名" v-model="userInfo.uname">
              <template slot="prepend">姓名:</template>
            </el-input>
           </el-form-item>
          </el-col>
          <el-col :span="12" class="sex">
            <div class="ipt-title">性别</div>
            <el-form-item prop="sex">
              <el-radio-group v-model="userInfo.sex">
                <el-radio label="1">男</el-radio>
                <el-radio label="2">女</el-radio>
              </el-radio-group>
            </el-form-item>
            
          </el-col>
        </el-row>

        <!-- 联系电话和生日 -->
        <el-row :gutter="97">
          <el-col :span="12">
            <el-form-item prop="uphone">
              <el-input placeholder="请输入联系电话" v-model="userInfo.uphone"  type="number"
             oninput="if(value.length>11)value=value.slice(0,11)">
                <template slot="prepend">联系电话:</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="time-choice">
            <div class="ipt-title">生日:</div>
            <el-form-item prop="birthday" style="margin: 0;">
              <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="userInfo.birthday"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
              style="width: 100%"
            ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 个人简介 -->
        <el-row>
          <el-col>
            <el-form-item prop="info">
              <el-input placeholder="请填写个人简介" v-model="userInfo.info">
                <template slot="prepend">个人简介:</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 联系地址 -->
        <el-row>
          <el-col>
            <el-form-item prop="address">
              <el-input placeholder="请填写联系地址" v-model="userInfo.address">
                <template slot="prepend">联系地址:</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 毕业院校和最高学历 -->
        <el-row :gutter="97">
          <el-col :span="12">
            <el-form-item prop="school">
              <el-input placeholder="请输入毕业院校" v-model="userInfo.school">
                <template slot="prepend">毕业院校:</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="education">
            <div class="ipt-title">最高学历:</div>
            <el-form-item prop="education" style="magin-bottom: 0;">
              <el-select v-model="userInfo.education" placeholder="请选择">
              <el-option
                v-for="item in educationOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 所学专业和擅长课程 -->
        <el-row :gutter="97">
          <el-col :span="12">
            <el-form-item prop="major">
              <el-input placeholder="请输入所学专业" v-model="userInfo.major">
                <template slot="prepend">所学专业:</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="course">
            
            <el-form-item prop="course">
              <el-input placeholder="请输入擅长课程" v-model="userInfo.course">
                <template slot="prepend">擅长课程:</template>
              </el-input>
            </el-form-item>
              <!-- <div class="ipt-title">擅长课程:</div> -->
            <!-- <el-select v-model="userInfo.course" placeholder="请选择擅长科目">
              <el-option
                v-for="item in courseOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select> -->
          </el-col>
        </el-row>

        <!-- 资质证书 -->
        <el-row class="certificate">
          <div class="certificate-title">
            <div class="ipt-title">资质证书:</div>
            <span>(毕业证书、教师资格证、相关专业考级证书)</span>
          </div> 
          <div class="certificate-up">
            <el-upload
              :action="BASEURL+'/student/base/uploadImg'"
              list-type="picture-card"
              accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
              :on-success="uploadImg"
              :on-remove="removeImg"
              :limit="3"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-row>

        <el-button @click="sendUserInfo" class="send-btn" style="margin: 0 auto;">申请成为老师</el-button>
      </el-form>
    </div>
    
  </div>
</template>

<script>
import { log } from 'util';
import {optTeacherApply} from '@/network/cooperation'
import {BASE_URL} from "@/network/config"
export default {
  data() {
    return {
      userInfo: {
        uname: "",
        sex: "",
        uphone: "",
        birthday: "",
        info: "",
        address: "",
        school: "",
        major: '',
        education: "",
        course: "",
        imgUrl: [],
        BASEURL:""
      },
      rules: { //验证规则
          uname: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          uphone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 11, max: 11, message: '手机号长度不正确', trigger: 'blur' }
          ],
          birthday: [
            { required: true, message: '请选择生日', trigger: 'change' }
          ],
          info: [
            { required: true, message: '请填写个人简介', trigger: 'blur' },
            { min: 1, max: 200, message: '个人简介在1到100字之间', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请填写联系地址', trigger: 'blur' },
          ],
          school: [
            { required: true, message: '请填写毕业院校', trigger: 'blur' },
          ],
          major: [
            { required: true, message: '请填写所学专业', trigger: 'blur' }
          ],
          education: [
            { required: true, message: '请选择最高学历', trigger: 'change' }
          ],
          course: [
            { required: true, message: '请填写擅长科目', trigger: 'blur' }
          ]
      },
      educationOptions: [
        {
          value: "高中",
          label: "高中",
        },
        {
          value: "大专",
          label: "大专",
        },
        {
          value: "本科",
          label: "本科",
        },
        {
          value: "硕士",
          label: "硕士",
        },
        {
          value: "博士",
          label: "博士",
        },
      ],
      courseOptions: [
        {
          value: "选项1",
          label: "语文",
        },
        {
          value: "选项2",
          label: "数学",
        },
        {
          value: "选项3",
          label: "英语",
        },
      ],
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  created() {
    this.BASEURL = BASE_URL
  },
  mounted() {},
  methods: {
    uploadImg(response, file, fileList){
      // console.log(response);
      // console.log(fileList);
      let imgArr = []
      fileList.forEach(item => {
        if(item.response.code === 200){
          imgArr.push(item.response.data)
        }
      })
      // console.log(imgArr);
      this.userInfo.imgUrl = imgArr
    },
    removeImg(file, fileList){
      // console.log(fileList);
      let imgArr = []
      fileList.forEach(item => {
        imgArr.push(item.response.data)
      })
      this.userInfo.imgUrl = imgArr

    },
    sendUserInfo(ruleForm){
      if(this.userInfo.imgUrl.length < 1) {
        return this.$message('请上传资质证书')
      }
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) {
          return false
        }else {
          this.getoptTeacherApply()
        }
      });
    },
    
    async getoptTeacherApply(){ //发起申请
      try{
        let imgStr = this.userInfo.imgUrl.join(',')
      let {data,code,msg} = await optTeacherApply({
        address: this.userInfo.address + '',
        birthday: this.userInfo.birthday+ '',
        graduatedSchool: this.userInfo.school+ '',
        highestEducation: this.userInfo.education+ '',
        introduction: this.userInfo.info + '',
        major: this.userInfo.major+ '',
        name: this.userInfo.uname + '',
        phone: this.userInfo.uphone + '',
        sex: this.userInfo.sex + '',
        subjectIds: this.userInfo.course + '',
        qualificationImg: imgStr,
      })
      if(code == 200){
        this.$message.success('申请成功')
      }else {
        return this.$message(msg)
      }
      }catch(err){
        return err
      }
    }
  },
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.teacher-co {
  padding: 25px 0 48px;
  background: #ffffff;
  box-shadow: 2px 17px 35px 0px #dfdbdb;
  border-radius: 10px;
  .title {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      width: 7px;
      height: 30px;
      background: linear-gradient(270deg, #ef753d 0%, #f13232 100%);
      border-radius: 7px;
    }
    h4 {
      font-size: 24px;
      font-weight: bold;
      margin-left: 18px;
    }
  }
  .main {
    padding: 52px 88px 63px;
    .el-form {
      .el-form-item {
        margin: 0;
      }
      .el-row {
        margin-right: 0 !important;
        margin-bottom: 32px;
        .el-col {
          .ipt-title {
            height: 48px;
            width: 100px;
            font-size: 14px;
            color: #909399;
            background-color: #f5f7fa;
            border-right: 1px solid #dcdfe6;
            padding-left: 20px;
            text-align: left;
            line-height: 50px;
            margin-right: 25px;
          }
          /deep/.el-input-group__prepend {
            width: 60px;
            height: 48px;
          }
          /deep/.el-input__inner {
            height: 50px;
          }
        }
      }
      .sex {
        display: flex;
        align-items: center;
        padding-left: 0 !important;
        border: 1px solid #dcdfe6;
        height: 50px;
        border-radius: 4px;
      }
      /deep/.time-choice {
        display: flex;
        padding: 0 !important;
        border: 1px solid #dcdfe6;
        .el-input__inner {
          width: 500px;
          height: 48px !important;
          border: none;
        }
        .ipt-title {
          width: 120px !important;
        }
      }
      .education {
        border: 1px solid #dcdfe6;
      }
      /deep/.course {
        border: 1px solid #dcdfe6;
        /deep/.el-input-group__append,.el-input-group__prepend {
          border: none !important;
          border-right: 1px solid #dcdfe6 !important;

        }
      }
      
      .education,
      .course {
        display: flex;
        align-items: center;
        padding-left: 0 !important;
        
        height: 50px;
        border-radius: 4px;
        /deep/.el-input__inner {
          width: 485px;
          height: 46px !important;
          border: none;
          padding-left: 39px;
          margin-top: 1px;
        }
        .ipt-title {
          width: 120px !important;
          margin-right: 0 !important;
        }
      }
      .certificate {
        .certificate-title {
          display: flex;
          align-items: center;
          .ipt-title {
            height: 48px;
            width: 100px;
            font-size: 14px;
            color: #909399;
            background-color: #f5f7fa;
            border: 1px solid #dcdfe6;
            padding-left: 20px;
            text-align: left;
            line-height: 50px;
            margin-right: 55px;
          }
          span {
            font-size: 16px;
            color: #999999;
          }
        }
        .certificate-up {
          padding-left: 157px;
          margin-top: 29px;
        }
      }
    }
  }
  .send-btn {
    display: flex;
    justify-content: center;
    a {
      display: block;
      width: 274px;
      height: 45px;
      background: linear-gradient(110deg, #f13232, #ef753c);
      box-shadow: 0px 6px 9px 0px rgba(68, 5, 5, 0.32);
      border-radius: 4px;
      text-align: center;
      line-height: 45px;
      color: #fff;
    }
  }
}
</style>
