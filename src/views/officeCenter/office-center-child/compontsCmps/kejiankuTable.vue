<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      @cell-click="handleSelectionChange"
      :header-cell-style="{
        color: 'black',
        fontSize: '14px',
        background: '#FFFFFF',
        fontWeight: 500,
      }"
      :row-style="{
        fontSize: '8px',
        color: '#666',
        fontFamily: 'SourceHanSansCN-Medium',
      }"
      :row-class-name="tableRowClassName"
    >
      <el-table-column width="40" align="center">
        <template slot-scope="scope">
          <!-- <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
            图片
          </el-button> -->
          <img
            style="width: 20px; height: 20px"
            :src="
              isActive == scope.row.id
                ? require('@/assets/img/success.png')
                : require('@/assets/img/icon_radiobutton.png')
            "
            :alt="scope.$index + ',' + isActive"
          />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="课件名称" width="120" align="center">
      </el-table-column>
      <el-table-column label="课件类型" align="center" width="120">
        <template slot-scope="scope">
          <div>
            {{
              scope.row.type == 1
                ? "视频"
                : scope.row.type == 2
                ? "PPT"
                : "文档"
            }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="coursesubjects" align="center" label="课件科目">
      </el-table-column>
      <el-table-column prop="grade" align="center" label="年级">
      </el-table-column>
      <el-table-column prop="url" align="center" width="180" label="附件">
        <template slot-scope="scope">
          <el-button type="text" @click="watchPPT(scope.row)">
            {{scope.row.coursewareName}}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column prop="downloadFee" align="center" label="下载费用">
         <template slot-scope="scope">
          <span>{{scope.row.downloadFee==0?'-':scope.row.downloadFee+'元'}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="downloadNumber" align="center" label="下载次数">
        <template slot-scope="scope">
          <span>{{scope.row.downloadNumber==0?'-':scope.row.downloadFee}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="downloadNumber" align="center" label="是否付费">
        <template slot-scope="scope">
          <span>{{scope.row.isPay==1?"未付费":"以付费"}}</span>
        </template>
      </el-table-column>
      <!-- 课后习题 -->
      <el-table-column prop="insertUser" align="center" label="上传人">
      </el-table-column>
      <el-table-column
        prop="insertTime"
        align="center"
        label="上传时间"
        width="180"
      >
      </el-table-column>
      <!-- <el-table-column label="审核状态" align="center" width="120">
        <template slot-scope="scope">
          <div>
            {{
              scope.row.status == 1
                ? "待审核"
                : scope.row.status == 2
                ? "审核通过"
                : "审核拒绝"
            }}
          </div>
        </template>
      </el-table-column> -->
      <!-- 操作 -->
      <!-- <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
.el-table .warning-row {
  background: #f9f9f9;
}

.el-table .success-row {
  background: #ffffff;
}
</style>

<script>
import { delMyCourseware } from "@/network/officeCenter";
export default {
  data() {
    return {
      isActive: "",
    };
  },
  props: {
    tableData: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  created() {},
  methods: {
    // 点击单元格
    handleSelectionChange(row) {
      // this.multipleSelection = val;
      this.isActive = row.id;
      this.$emit("selectRow", row);
    },
    // 查看PPT
    watchPPT(row) {
      this.$preview(row.url);
    },
    // 切换actice的下标
    chekcout(id) {
      this.isActive = id;
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 0) {
        return "warning-row";
      } else {
        return "success-row";
      }
    },
    selectRow(index, row) {
      // this.$router.push({
      //      path:"/officeCenter/OfficeCenterIndex/test2"
      // })
    },
    deleteCourseware(row = this.tableData[0]) {
      //删除课件操作
      console;
      let pamars = { id: row.id };
      delMyCourseware(pamars).then((res) => {
        if (res.code == 200) {
          console.log("res", "删除成功");
        }
      });
    },
    deleteRow(index, rows) {
      console.log(index, rows);
      this.$router.push({
        path: "/officeCenter/OfficeCenterIndex/test2",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
/deep/ .cell {
  color: #666666;
}
</style>
