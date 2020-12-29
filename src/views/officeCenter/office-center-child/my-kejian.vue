<template>
  <div>
    <div class="title">我的课件</div>
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
            <input class="kjName" v-model="kejianName" type="text" />
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
        <div class="btn1 hand" @click="reset">重置</div>
        <div @click="query" class="btn2 hand">查询</div>
      </div>
      <!-- 顶部表格 -->
      <div>
        <mykejiankuTable
          ref="chekcout"
          :tableData="tableData"
          @selectRow="selectRow"
        />
      </div>
      <div class="btn-groups">
        <!-- 分页 -->
        <div class="page-device">
          <page-device
            :total="total"
            @handleCurrentChange="handleCurrentChange"
            :current="current"
          />
        </div>
        <div class="btn1 hand" @click="del">删除</div>
        <!-- 分割开始 -->
        <div @click="dialogVisible = true" class="btn2 hand">上传</div>
        <!-- 分割结束 -->
        <!-- <div class="btn2" @click="upload">上传</div> -->
      </div>
    </div>
    <div>
      <el-dialog
        :visible.sync="dialogVisible"
        :before-close="handleClose"
        center
      >
        <!-- 课件上传 -->
        <uploadKj
          @loadPage="loadPage"
          :subjectList="subjectList"
          :classList="classList"
        >
        </uploadKj>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import mykejiankuTable from "./compontsCmps/my-kejiankuTable";
import uploadKj from "./compontsCmps/upload-Kj";
import {
  queryMyAllCourseware,
  delMyCourseware,
  saveMyCourseware,
} from "@/network/officeCenter";
import { BASE_URL } from "@/network/config.js";
import { state, actions } from "vuex";
import { kjMixin } from "./kj-mixin/mixins";
export default {
  mixins: [kjMixin],
  provide() {
    return {
      _this: this,
      name: this.name,
    };
  },
  data() {
    return {
      kejianTypeValue: "", //课件类型
      subjectValue: "", //下拉框选中的学科列表
      classValue: "", //选择的年级ID
      auditValue: "", //审核通过与未通过
      kejianName: "", //课件名称
      current: 1, //分页
      size: 10, //每页多少条
      total: 0, //总条数
      baseUrl: BASE_URL, //IP地址
      tableData: [{ id: 0 }], //课件库列表
      kjId: "", //课件id
      row: {}, //table中选择的单元格
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
      i: 0,

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
    },
    // 重置
    reset() {
      this.kejianTypeValue = "";
      this.subjectValue = "";
      this.classValue = "";
      this.auditValue = "";
      this.kejianName = "";
    },
    // 分页
    handleCurrentChange(data) {
      this.current = data;
      this.get_AllCourseware();
    },
    //
    handleClose() {
      this.dialogVisible = false;
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
        this.i++;
        this.tableData = res.data.list;
        this.total = res.data.total;
        this.kjId = res.data.list[0].id || 0;
        if (this.i == 1) {
          //判断是否是第一次进来
          this.$refs.chekcout.chekcout(res.data.list[0].id);
        }
      });
    },
    loadPage() {
      //上传成功后更新页面
      this.get_AllCourseware();
    },
    // 选择状态
    change(val) {},
    // 删除课件
    del() {
      let data = { id: this.kjId };
      delMyCourseware(data).then((res) => {
        if (res.code == 200) {
          this.get_AllCourseware();
          this.$myMessage("删除课件成功");
        }
      });
    },
    // 测试预览
    test() {
      console.log("预览");
      console.log(this.row);
      this.$preview(this.tableData[0].url);
      // window.open("http://view.officeapps.live.com/op/view.aspx?src=" + Courseware.seItem.url);
    },
    //给耕我学服务器上传
    uploadGwx() {
      let pamars = {
        gradeId,
      };
      saveMyCourseware(pamars);
    },
    selectRow(id) {
      // 监听哪个课件的id
      this.kjId = id;
    },
    handleSuccess(response, file, fileList) {
      console.log(response, file, fileList);
      console.log(response.data);
    },
  },
  components: {
    mykejiankuTable,
    uploadKj,
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
