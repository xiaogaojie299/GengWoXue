<template>
  <div class="OrganizationCo banner">
    <div class="title">
      <h4>机构合作</h4>
    </div>

    <div class="main">
      <!-- 表单 -->
      <el-form :model="organization" :rules="rules" ref="ruleForm">
        <!-- 联系人和电话 -->
        <el-row :gutter="97">
          <el-col :span="12">
            <el-form-item prop="linkman">
              <el-input
                placeholder="请输入您的姓名"
                v-model="organization.linkman"
                class="link-man"
              >
                <template slot="prepend">联系人:</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="phone">
            <el-form-item prop="phone">
              <el-input
                placeholder="请输入联系电话"
                v-model="organization.phone"
                 type="number"
                 maxlength="11"
             oninput="if(value.length>11)value=value.slice(0,11)"
              >
                <template slot="prepend">联系电话:</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 所在城市-级联选择器 -->
        <el-row :gutter="97">
          <el-col class="city-chioce" :span="12">
            <div class="ipt-title">所在城市:</div>
            <el-form-item prop="province">
              <el-select
                v-model="organization.province"
                @change="changeProvince"
                placeholder="省"
              >
                <el-option
                  v-for="(item, index) in provinceOptions"
                  :key="index"
                  :label="item.name"
                  :value="item.name"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item>
              <el-select v-model="organization.city" @change="changeCity" placeholder="市" class="city">
              <el-option
                v-for="(item,index) in cityOptions"
                :key="index"
                :label="item.name"
                :value="item.name"
              >
              </el-option>
            </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 联系地址 -->
        <el-row>
          <el-col>
            <el-form-item prop="address">
              <el-input
                placeholder="请填写联系地址"
                v-model="organization.address"
              >
                <template slot="prepend">联系地址:</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 备注说明 -->
        <el-row>
          <el-col>
            <el-form-item>
              <el-input
                placeholder="请填写备注说明(选填)"
                v-model="organization.remarks"
              >
                <template slot="prepend">备注说明:</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-button class="send-btn" @click="send">提交审核</el-button>

      </el-form>
    </div>
  </div>
</template>

<script>
import { getCityJson,optMechanismApply } from "@/network/cooperation";
export default {
  data() {
    return {
      organization: {
        linkman: "",
        phone: "",
        province: "", //省名称
        provinceCode: "", //省code
        city: "", //市名称
        cityCode: "", //市code
        district: "", //区县名称
        districtCode: "", //区县code
        address: "",
        remarks: "",
      },
      rules: {
        //验证规则
        linkman: [
          { required: true, message: "请输入联系人姓名", trigger: "blur" },
          {
            min: 1,
            max: 10,
            message: "长度在 1 到 10 个字符",
            trigger: "blur",
          },
        ],
        phone: [
          { required: true, message: "请输入联系电话", trigger: "blur" },
          { min: 11, max: 11, message: "联系电话长度不正确", trigger: "blur" },
        ],
        province: [
          { required: true, message: "请选择所在省份", trigger: "change" },
        ],
        address: [
          { required: true, message: "请填写详细地址", trigger: "blur" },
          {
            min: 1,
            max: 200,
            message: "详细地址在1到100字之间",
            trigger: "blur",
          },
        ],
      },
      shen: "",
      shi: "",
      provinceOptions: [], //省级数组
      provinceId: null,
      cityOptions: [], //市级数组
      value: "",
    };
  },
  created() {
    this.getcityJson(0); //加载省
  },
  methods: {
    changeProvince(e) {//省级下拉框变化时
      let obj = {};
      obj = this.provinceOptions.find((item) => {
        return item.name === e;
      });
      this.organization.provinceCode = obj.code;
      this.provinceId = obj.id
      this.getcityJson(this.provinceId)
      this.organization.city = ''
      this.organization.cityCode = ''
    },
    changeCity(e){ //市级下拉框变化时
      let obj = {};
      obj = this.cityOptions.find((item) => {
        return item.name === e;
      });
      this.organization.cityCode = obj.code;
    },
    send(ruleForm){ //发起申请
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) {
          // return false;
          return false;
        }else {
          this.getoptMechanismApply()
        }
      });
    },
    async getcityJson(id) {//获取省市区json
      try {
        let { code,data,msg } = await getCityJson({
          parentId: id,
        });
        if (code === 200 && id === 0) {
          this.provinceOptions = data;
        }else if(code === 200 && id != 0) {
          this.cityOptions = data
        }
      } catch (err) {
        return this.$message("获取省市区失败");
      }
    },
    async getoptMechanismApply(){//申请api
      try{
        let {code,data,msg} = await optMechanismApply({
        address: this.organization.address,
        city: this.organization.city,
        cityCode: this.organization.cityCode,
        contactNumber: this.organization.phone,
        contactPerson: this.organization.linkman,
        province: this.organization.province,
        provinceCode: this.organization.provinceCode,
        remark: this.organization.remark,
      })
      console.log(data);
        if(code === 200) {
          this.$message.success('申请成功')
        }else {
          this.$message(msg)
        }
      }catch(err){
        return err
      }
    }
  },
};
</script>
<style scoped lang='scss'>
* {
  box-sizing: border-box;
}
.city {
  width: 563px;
}
.OrganizationCo {
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
      .el-row {
        margin-bottom: 32px;
        .el-col {
          /deep/.el-input-group__prepend {
            height: 48px;
          }
          /deep/.el-input__inner {
            height: 50px;
          }
          .link-man {
            /deep/.el-input-group__prepend {
              padding-right: 35px;
            }
          }
        }
        .city-chioce {
          display: flex;
          .ipt-title {
            height: 50px;
            width: 103px;
            font-size: 14px;
            color: #909399;
            background-color: #f5f7fa;
            border: 1px solid #dcdfe6;
            border-right: 0;
            padding-left: 20px;
            text-align: left;
            line-height: 50px;
          }
          .el-select {
            width: 463px !important;
            display: block;
          }
        }
      }
    }
  }
  .send-btn {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 274px;
      height: 45px;
      background: linear-gradient(110deg, #f13232, #ef753c);
      box-shadow: 0px 6px 9px 0px rgba(68, 5, 5, 0.32);
      border-radius: 4px;
      text-align: center;
      color: #fff;
  }
}
</style>