<template>
  <div class="box1">
    <!-- <div><button>查看课表</button></div>
    <div><button @click="go_studentDetail">学生详情</button></div> -->
    <div class="header">
      <span class="title">查看学生</span>
      <span class="right-title" @click="go_studentDetail">学生详情</span>
    </div>
    <!-- 中间表格 -->
    <div class="main">
      <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{
          color: '#343434',
          fontSize: '14px',
          background: '#F8F8F8',
          fontWeight: 500,
        }"
        :row-style="{
          fontSize: '8px',
          color: '#666',
          fontFamily: 'SourceHanSansCN-Medium',
          background: '#F8F8F8',
        }"
        :row-class-name="tableRowClassName"
        border
      >
        <el-table-column width="80" align="center">
          <template slot-scope="scope">
          <img
            @click="selectRow(scope.$index, tableData)"
            style="width: 20px; height: 20px"
            :src="isActive==scope.$index?require('@/assets/img/success.png'):require('@/assets/img/icon_radiobutton.png')"
            :alt="scope.$index+','+isActive"
          />
        </template>
        </el-table-column>
        <el-table-column
          label="序号"
          width="160"
          align="center"
        >
        <template slot-scope="scope">
          <span>{{scope.$index+1}}</span>
        </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          align="center"
          width="160"
        >
        </el-table-column>
        <el-table-column prop="mailingInformation" align="center" label="是否邮寄资料">
          <template slot-scope="scope">
          <span>{{scope.row.mailingInformation==0?"否":"是"}}</span>
        </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page-device"><page-device /></div>
    <!-- 底部关闭按钮 -->
    <div class="footer-btn" @click="close">关闭</div>
  </div>
</template>
<script>
import {queryClassStudent} from "@/network/officeCenter"
export default {
  data() {
    return {
      isActive:0,
      current:1,
      size:10,
      tableData:[
          {
            id:4,
            date: "2016-05-02",
            name: "王小虎",
            mailingInformation: 0,
            studentState:2
        },
        {
          id:5,
          date: "2016-05-02",
          name: "张三",
          mailingInformation: 0,
          studentState:1
        },
        ]
    };
  },
  props:{
    classId:{
      type:Number,
    }
  },
  watch:{
    classId(){
      this.get_classStudent()
    }
  },
  created(){
    console.log("传过来的id",this.classId)
    this.get_classStudent()
  },
  methods: {
      tableRowClassName({ row, rowIndex }) {
      console.log(row);
      if (rowIndex % 2 == 0) {
        return "warning-row";
      } else {
        return "success-row";
      }
    },
    go_studentDetail() {
      console.log("跳转到学生详情成功");

      this.isActive
      this.$router.push({
        path: "/page/officeCenter/OfficeCenterIndex/studentDetail",
        query:{
          stuInfo:JSON.stringify(this.tableData[this.isActive])
        }
      });
    },
    close(){
        // this.$root.closeMask()
        this.$emit("handleClose");
    },
    get_classStudent(){
      let data={
        id:this.classId,
        size:this.size,
        current:this.current
      }
      queryClassStudent(data).then(res=>{
        console.log("获取班级成功呢",res);
      })
    },
    handleCurrentChange(data){
      // data   分页页数
      this.current=data;
      this.get_classStudent()
    },
    selectRow(index, rows) {
      console.log("isActive=",this.isActive)
      console.log(index, rows);
      this.isActive=index;
    },
  },
};
</script>
<style lang="scss" scope>
.box1 {
  width: 100%;
  height: 600px;
  background: white;
  margin-top: -50px !important;
  .header {
    position: relative;
    padding: 12px 0;
.title {
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 550;
      color: 000;
      display: flex;
      // align-items: center;
      justify-content: center;
    }
    .right-title {
      position: absolute;
      top: 20px;
      right: 0;

      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 550;
      color: #f23e34;
    }
  }
  .main {
    width: 100%;
    height: 455px;
    background: #f8f8f8;
    border: 1px solid #dde7f0;
    margin-bottom: 21px;;
  }
  .footer-btn {
      margin:0 auto;
    width: 133px;
height: 45px;
background: linear-gradient(110deg, #F13232, #EF763C);
border-radius: 4px;

    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .page-device{
    width: 100%;
    display: flex;
    justify-content: center;
    margin:16px 0;
  }
}
</style>