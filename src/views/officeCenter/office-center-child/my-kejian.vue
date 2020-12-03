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
        </div>

        <div class="header-tag">
          <div class="tag-left">课件名称:</div>
          <div>
            <input class="kjName" type="text" />
          </div>
          <div></div>
          <!-- 下面按钮组 -->
        </div>

        <div class="header-tag">
          <div class="tag-left">审核状态:</div>
          <!-- 下拉多选框 -->
          <div>
            <el-select
              @change="change"
              :popper-append-to-body="false"
              v-model="auditValue"
              placeholder="请选择"
            >
              <el-option
                v-for="item in auditList"
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

      <div class="btn-groups">
        <div class="btn1">重置</div>
        <div @click="query" class="btn2">查询</div>
      </div>
      <!-- 顶部表格 -->
      <div>
        <mykejiankuTable @selectRow="selectRow" />
      </div>
      <div class="btn-groups">
        <div class="page-device">
          <page-device />
        </div>
        <!-- 分页 -->
        <div class="btn1" @click="del">删除</div>
        <!-- 分割开始 -->
        <!-- action="http://ip:80/teacher/base/uploadFile" -->
        <!-- <el-upload
          class="upload-demo"
          action="http://139.9.154.145/student/base/uploadFile"
          :headers="headerObj"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-error="handleFail"
          :on-success="handleSuccess"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
        >
        </el-upload> -->
          <div @click="dialogVisible=true" class="btn2">上传</div>

        <!-- 分割结束 -->
        <!-- <div class="btn2" @click="upload">上传</div> -->
      </div>
    </div>
    <div>
          <el-dialog
        :visible.sync="dialogVisible"
        :show-close="false"
        center
        >
        <!-- 课件上传 -->
        <uploadKj @loadPage="loadPage" :subjectList="subjectList" :classList="classList"> </uploadKj>

</el-dialog>

    </div>
  </div>
</template>
<script>
import mykejiankuTable from "./compontsCmps/my-kejiankuTable";
import uploadKj from "./compontsCmps/upload-Kj"
import { queryMyAllCourseware,delMyCourseware,saveMyCourseware} from "@/network/officeCenter";
import { BASE_URL } from "@/network/config.js";
import { state, actions } from "vuex";
import {kjMixin} from "./kj-mixin/mixins"
export default {
  mixins:[kjMixin],
    provide(){
    return{
      _this:this,
      name:this.name
    }
  },
  data() {
    return {
      kejianTypeValue: "",
      subjectValue: "",
      classValue: "",
      auditValue: "",
      kejianName: "",
      current: 1,
      size: 10,
      baseUrl:BASE_URL,
      tableData:[{id:0}],
      kjId:"",  //课件id
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
      
      // headerObj:{'ContentType':'multipart/form-data'}
    };
  },
  computed: {
    classList() {
      return this.$store.state.classList;
    },
    
    subjectList() {
      return this.$store.state.subjectList;
    },
    
    kejianName() {
      return "";
    },
        auditList() {
            return [
              { name: "全部", id: "" },
              { name: "待审核", id: 1 },
              { name: "审核通过", id: 2 },
              { name: "审核拒绝", id: 3 },
            ];
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
  created() {
    this.init();
  },
  methods: {
    // 查询学科
    init() {
      this.subjectList = this.$store.dispatch("getSubjectList");
      this.classList = this.$store.dispatch("getClassList");
      this.get_AllCourseware();
    },
    // 查询
    query() {
      this.get_AllCourseware();
      // http://139.9.154.145/teacher-server/api/officeCenter/queryAllCourseware?current=1&gradeId=1&name=1&size=10&subjectsId=1&type=1
    },
    // 分页
    handleCurrentChange(data) {
      this.current = data;
      this.get_AllCourseware();
    },
    // 查询我的课件列表
    get_AllCourseware() {
      let data = {
        current: this.current, //当前页码
        size: this.size, //每页多少条数据
        gradeId: this.classValue, //班级id
        name: this.kejianName, //课件名称
        subjectsId: this.subjectValue, //科目id
        type: this.kejianTypeValue, //课件类型
        status: this.auditValue, //课件类型
      };
      queryMyAllCourseware(data).then((res) => {
        console.log("我的课件库", res);
        this.kjId = res.list[0].id||0
      });
    },
    loadPage(){//上传成功后更新页面
      this.get_AllCourseware()
    },
    // 选择状态
    change(val) {
      console.log("val=", val);
    },
    // 删除课件
    del(){
      console.log("kjId",this.kjId);
      let data={id:this.kjId}
      console.log("delMyCourseware",delMyCourseware);
      delMyCourseware(data).then(res=>{
        console.log("删除成功");
      })
    },
    //给耕我学服务器上传
    uploadGwx(){
      let pamars={
        gradeId 
      }
      saveMyCourseware(pamars)
    },
       selectRow(id){
      // 监听哪个课件的id
      this.kjId=id;
      console.log("this.kjId================>",this.kjId)
    },
    handleSuccess(response, file, fileList){
      console.log(response,file,fileList)
      console.log(response.data);
    },
    // 上传文件API
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    handleFail(err,file,fileList){
      console.log("err=",err)
      console.log("file=",file)
      console.log("fileList=",fileList)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
  },
  components: {
    mykejiankuTable,
  uploadKj

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

.box {
  background: #f9f9f9;
  width: 1054px;
  padding: 10px 20px;
  .header {
    display: flex;
    justify-content: space-between;
    .header-tag {
      position: relative;
      width: 150px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tag-left {
        width: 45%;
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
}
.btn-groups {
  margin: 20px 0;
  width: 100%;
  display: flex;
  font-size: 9px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  .page-device {
    width: 100%;
    display: flex;
    justify-content: center;
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