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
        <div class="btn1" @click="reset">重置</div>
        <div @click="query" class="btn2">查询</div>
      </div>
      <!-- 顶部表格 -->
      <div>
        <kejiankuTable :tableData="tableData" />
      </div>
      <div class="page-device">
          <page-device />
      </div>
      <div class="btn-groups">
        <div class="btn1" @click="previewPPT">预览</div>
        <!-- <a class="btn2" style="text-decoration: none;" :href="selectKejian.url">下载</a> -->
        <a class="btn2" @click="uploadPPT" style="text-decoration: none;">下载</a>
      </div>
    </div>
    <!-- 弹框，遮罩层 -->
    <el-dialog
      title="下载课件"
      :visible.sync="dialogVisible"
      width="60%"
      >
      <div style="display:flex">
        <div class="label">支付方式：</div>
        <div>
        <radio-button @chekoutIndex="chekoutIndex">
          <span slot="radio1" class="my-font">微信支付</span>
          <span slot="radio2" class="my-font">支付宝支付</span>
        </radio-button>
      </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="pay">确 定</el-button>
      </span>
</el-dialog>

  </div>
</template>
<script>
import kejiankuTable from "./compontsCmps/kejiankuTable";
import { state, actions } from "vuex";
import {queryAllCourseware,addCoursewareOrder} from "@/network/officeCenter"
export default {
  data() {
    return {
      kejianTypeValue: "",
      subjectValue: "",
      classValue: "",
      kejianName: "",
      current:1,
      size:10,
      total:0,    //数据总数
      tableData:[],  //列表详情
      selectKejian:{},
      dialogVisible:false, //控制遮罩层开关
      type:1
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
        {name:"全部",id:""},
        { name: "视频", id: 1 },
        { name: "PPT", id: 2 },
        { name: "文档", id: 3 },
      ];
    },
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
          break;
        default:
          this.type = 3;
      }
    },
    // 查询学科
    init() {
      this.subjectList = this.$store.dispatch("getSubjectList");
      this.classList = this.$store.dispatch("getClassList");
      this.get_AllCourseware()
    },
    pay(){

    this.pushCoursewareOrder()
    },
    // 查询
    query(){
      this.get_AllCourseware()
      // http://139.9.154.145/teacher-server/api/officeCenter/queryAllCourseware?current=1&gradeId=1&name=1&size=10&subjectsId=1&type=1
    },
    reset(){//清空选项框
      this.kejianTypeValue="";    //课件类型下拉款
      this.subjectValue="";       //科目下拉框
      this.kejianName="";         //课件名称
      this.classValue=""          //选择的年级
    },

    previewPPT(){// 预览PPT
      this.$preview(this.selectKejian.url);
    },
    uploadPPT(){//下载PPT
      this.dialogVisible = true;
      let a = document.getElementsByClassName("btn2")[1];
      //用户付款操作
    },
    pushCoursewareOrder(){ //调用支付接口
      let params = {
        payType:this.type,
        // coursewareId:this.selectKejian.id
        coursewareId:2
 }
        addCoursewareOrder(params).then(res=>{
          console.log("res",res);
        let {code,data} = res;
        if(code == 0){
          console.log("data==>",data);
        } 
      })
      
    },

    selectRow(row){//课件库选择的row
      this.selectKejian=row;  
    },
    // 查询课件列表
    get_AllCourseware(){
      let data={
        current:this.current, //当前页码
        size:this.size,       //每页多少条数据
        gradeId:this.classValue,  //班级id
        name:this.kejianName,    //课件名称
        subjectsId:this.subjectValue,  //科目id
        type:this.kejianTypeValue   //课件类型
      }
      queryAllCourseware(data).then(res=>{
        console.log("课件库列表");
        this.tableData=res.list;
        this.total=res.total;
        if(this.current==1){
          this.selectKejian=res.list[0]   //页面刷新的时候，给row赋值一个初始值
        }
      })
    },
    // 点击分页出发回调
    handleCurrentChange(val){
      this.current=val;
      get_AllCourseware;
    },
   
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
  background: #FFFFFF;
  border: 1px solid #EFEFEF;
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
  background: linear-gradient(110deg, #F13232, #EF753C);
  color: #fff;
}
.label{
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-right:12px;
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
        background: #FFFFFF;
        border: 1px solid #EFEFEF;
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
    .w-100{
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