<template>
  <div>
    <div class="title">课件库</div>
    <div class="box">
      <!-- 上面标签 -->
      <div class="header">
        <div class="header-tag">
          <div class="tag-left">课件类型:</div>
          <!-- 下拉多选框 -->
          <div>
            <el-select
              @change="change"
              :popper-append-to-body="false"
              v-model="kejianTypeValue"
              placeholder="请选择"
            >
              <el-option
                v-for="item in kejianType"
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
                v-for="item in subjectList"
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
                v-for="item in classList"
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

        <div class="header-tag w-100">
          <div class="tag-left">课件名称:</div>
          <div>
            <input v-model="kejianName" class="kjName" type="text" />
          </div>
        </div>
      </div>
      <!-- 下面按钮组 -->
      <div class="btn-groups">
        <div class="btn1 hand" @click="reset">重置</div>
        <div @click="query" class="btn2 hand">查询</div>
      </div>
      <!-- 顶部表格 -->
      <div>
        <kejiankuTable ref="childMethod" @selectRow="selectRow" :tableData="tableData" />
      </div>
      <div class="page-device">
        <page-device
          :total="total"
          @handleCurrentChange="handleCurrentChange"
          :current="current"
        />
      </div>
      <div class="btn-groups">
        <!-- <div class="btn1 hand" @click="previewPPT">预览</div> -->
        <!-- <a class="btn2" style="text-decoration: none;" :href="selectKejian.url">下载</a> -->
        <a class="btn2 hand left-dev" @click.stop="isuploadPPT" style="text-decoration: none;" target="_blank"
          >下载</a
        >
      </div>
    </div>
    <!-- 弹框，遮罩层 -->
    <el-dialog title="下载课件" @close="closeMask" :visible.sync="dialogVisible" width="60%">
      <div style="display:flex">
        <div class="label">支付方式：</div>
        <div>
          <radio-button @chekoutIndex="chekoutIndex">
            <span slot="radio1" class="my-font">微信支付</span>
            <span slot="radio2" class="my-font">支付宝支付</span>
          </radio-button>
        </div>
      </div>
      <span slot="footer" class="dizhiofalog-footer">
        <el-button @click="quite">取 消</el-button>
        <el-button type="primary" @click="pay">确 定</el-button>
      </span>
      <div v-show="type==1">
          <vue-qr
          :size="300"
          :margin="0"
          :auto-color="true"
          :dot-scale="1"
          :text="wxQRcode" />
      </div>
    </el-dialog>
  </div>
</template>
<script>
import kejiankuTable from "./compontsCmps/kejiankuTable";
import { state, actions } from "vuex";
import { queryAllCourseware, addCoursewareOrder,queryCoursewareOrder,downloadCoursewareCount } from "@/network/officeCenter";
export default {
  data() {
    return {
      kejianTypeValue: "",
      subjectValue: "",
      classValue: "",
      kejianName: "",
      current: 1,
      size: 10,
      total: 0, //数据总数
      tableData: [], //列表详情
      selectKejian: {},   //选择课件的这个对象信息
      dialogVisible: false, //控制遮罩层开关
      type: 1,  //支付方式 1--微信支付  2--支付宝支付
      wxQRcode:"",        //调用微信支付返回的链接
      i: 0,       
      timers:null,     //定时器开关
      isPay:false       // 判断用户当前是否支付成功  成功 下载课件  否则  下载失败
    };
  },
  computed: {
    classList() {
      return this.$store.state.classList;
    },
    subjectList() {
      return this.$store.state.subjectList;
    },
    kejianType() {
      return [
        { name: "全部", id: "" },
        { name: "视频", id: 1 },
        { name: "PPT", id: 2 },
        { name: "文档", id: 3 },
      ];
    },
  },
  watch:{
    
  },
  created() {
    this.init();
  },
  methods: {
    //单选框选中
    chekoutIndex(data) {
      //是从公共组件传过来的下标
      switch (data) {
        case 0:
          this.type = 1;
          break;
        case 1:
          this.type = 2;
          window.clearInterval(this.timers); 
          break;
        default:
          this.type = 3;
      }
    },
    // 查询学科
    init() {
      this.subjectList = this.$store.dispatch("getSubjectList");
      this.classList = this.$store.dispatch("getClassList");
      this.current = 1;
      this.get_AllCourseware();
    },
    pay() {
      this.pushCoursewareOrder();
    },
    quite(){
       this.dialogVisible = false;
       window.clearInterval(this.timers);
       console.log(this.timers);
    },
    closeMask(){
      this.quite()
    },
    // 查询
    query() {
      this.get_AllCourseware();
      // http://139.9.154.145/teacher-server/api/officeCenter/queryAllCourseware?current=1&gradeId=1&name=1&size=10&subjectsId=1&type=1
    },
    reset() {
      //清空选项框
      this.kejianTypeValue = ""; //课件类型下拉款
      this.subjectValue = ""; //科目下拉框
      this.kejianName = ""; //课件名称
      this.classValue = ""; //选择的年级
    },
    // 分页
    handleCurrentChange(data) {
      this.current = data;
      this.get_AllCourseware();
    },
    previewPPT() {
      console.log(this.selectKejian.url);
      // 预览PPT
      //this.$preview(this.selectKejian.url);
    },
      //下载PPT
    async isuploadPPT() {
      
      let {downloadFee,isPay} = this.selectKejian
      console.log("isPay==>",isPay);
      // 判断当前的课件是否需要费用以及用户是否已经交费了
        if(downloadFee!==0 && isPay==1){
        this.dialogVisible = true;
        this.pushCoursewareOrder();
      }else{
        this.uploadPPT();
      }
      return false // 阻止A标签默认事件
      //用户付款操作
    },
    uploadPPT(){  //用户下载操作
    let params = {
      coursewareId : this.selectKejian.id
    }
      downloadCoursewareCount(params).then(res=>{  // 下载的时候调用
        if(res.code == 200){
          this.init()
        }
      });
      let a = document.getElementsByClassName("btn2")[1];
      a.href = this.selectKejian.url;
      // if(a.href){
      // }else{
      //   a.href = this.selectKejian.url;
      // }
    },
    clearPPT(){
      let a = document.getElementsByClassName("btn2")[1];
      a.href="";
    },
    async pushCoursewareOrder() {
      //调用支付接口
      let params = {
        payType: this.type,
        coursewareId:this.selectKejian.id
        // coursewareId: 2,
      };
      let res = await addCoursewareOrder(params);
        console.log("res",res);
        let { code, data } = res;
        if (code == 200) {
          if(this.type==1){
              // 微信支付返回二维码 
              this.wxQRcode = data;
              console.log(this.wxQRcode);
              this.getOrderstate();
          }else{
            //支付宝支付返回form 表单
            const div=document.createElement('divform');
            div.innerHTML=data;
            document.body.appendChild(div);
            document.forms[0].acceptCharset='UTF-8';//保持与支付宝默认编码格式一致，如果不一致将会出现：调试错误，请回到请求来源地，重新发起请求，错误代码 invalid-signature 错误原因: 验签出错，建议检查签名字符串或签名私钥与应用公钥是否匹配
            document.forms[0].submit();
          }
        }else{
          console.log("支付失败");
        }
    },
     // 调用一个判断支付是否成功的接口，用这个接口我们监听微信是否支付成功
    getOrderstate() {
      let self = this;
      let num = 0;
      self.timers = setInterval(() => {
        //创建一个全局的定时器
        num++;
        let params = {
          coursewareId:this.selectKejian.id,
          // coursewareId: 2,
          payType: self.type,
        };
        queryCoursewareOrder(params).then((res) => {
          console.log("查询是否支付成功", res);
          if (res.code == 200) {
            //判断就是订单支付成功
            if (res.data == 2) {
              //data ==1 失败  data==2 成功
              // 成功之后的的逻辑
              console.log("支付成功");
              this.uploadPPT();
              window.clearInterval(self.timers); //别忘记关闭定时器，否则会一直调这个接口
              this.dialogVisible = false;
              this.get_AllCourseware();
            }else{
                // 支付不成功的逻辑
                //  this.isPay = (num==4?true:false);
                console.log("支付失败")
            }
          }
        });
        if (num == 500) {
          //这里是判断num++到500的情况下用户还没有支付则自动关闭定时器和二维码
          window.clearInterval(this.timers);
           this.isPay =false;
          this.dialogVisible = false;
        }
      }, 1500);
    },

    selectRow(row) {
      //课件库选择的row
      this.selectKejian = row;
      console.log("row",row)
    },
    // 查询课件列表
    get_AllCourseware() {
      let params = {
        current: this.current, //当前页码
        size: this.size, //每页多少条数据
        gradeId: this.classValue, //班级id
        name: this.kejianName, //课件名称
        subjectsId: this.subjectValue, //科目id
        type: this.kejianTypeValue, //课件类型
      };
      queryAllCourseware(params).then((res) => {
        let {code,data} = res;
        if(code ==200){
          this.i++;
          data.list.forEach(el => {
            el.img = el.img.replace("blob:","")
          });
            console.log("课件库列表",data);
        this.tableData = data.list;
        this.total = data.total;
        console.log(this.total);
        if (this.i == 1) {
          this.selectKejian = data.list[0]; //页面刷新的时候，给row赋值一个初始值
          this.$refs.childMethod.chekcout(data.list[0].id);
        }
        }else{
          this.$myMessage("获取数据失败","error")
        }
        
      });
    },
    // 点击分页出发回调
    // handleCurrentChange(val) {
    //   this.current = val;
    //   get_AllCourseware;
    // },

    change(val) {
      console.log("val=", val);
    },
  },
  components: {
    kejiankuTable,
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #343434;
  margin: 20px 0;
}

/deep/ .el-input__inner {
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
.label {
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-right: 12px;
}
.box {
  background: #f9f9f9;
  width: 1054px;
  padding: 10px 20px;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .header-tag {
      position: relative;
      width: 150px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tag-left {
        width: 60px;
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
        width: 100%;
        width: 180px;
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
    .w-100 {
      width: 250px;
    }
  }
}
.btn-groups {
  margin: 20px 0;
  width: 100%;
  display: flex;
  font-size: 9px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  .left-dev{
     margin-left: auto !important;
  }
  .btn1 {
    margin-left: auto;
    width: 80px;
    height: 38px;
    background: #ffffff;
    border: 1px solid #f13a34;
    border-radius: 4px;
    color: #f13a34;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
</style>
