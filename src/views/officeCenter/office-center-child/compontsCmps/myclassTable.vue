<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      @cell-click="handleSelectionChange"
      :header-cell-style="{
        color: '#FFFFFF',
        fontSize: '14px',
        background: '#EF743C',
        fontWeight: 500,
      }"
      :row-style="{
        fontSize: '8px',
        color: '#666',
        fontFamily: 'SourceHanSansCN-Medium',
      }"
      :row-class-name="tableRowClassName"
    >
    <!-- :row-class-name="tableRowClassName" -->
      <el-table-column width="40" align="center">
        <template slot-scope="scope">
          <img
            style="width: 20px; height: 20px"
            :src="isActive==scope.row.id?require('@/assets/img/success.png'):require('@/assets/img/icon_radiobutton.png')"
            :alt="scope.$index+','+isActive"
          />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="班级名称" align="center">
      </el-table-column>
      <el-table-column prop="courseName" label="授课课程" align="center">
      </el-table-column>
      <el-table-column prop="responsibilityTeacher" align="center" label="责任老师">
      </el-table-column>
      <el-table-column prop="assistantTeacher" align="center" label="助教老师">
      </el-table-column>
      <el-table-column prop="studentNum" align="center" label="学生人数">
      </el-table-column>
      <el-table-column prop="courseNum" align="center" label="课次">
      </el-table-column>
      <el-table-column prop="overCourseNum" align="center" label="已开课">
       
      </el-table-column>
      <!-- 课后习题 -->
      <el-table-column align="center" label="是否邮寄资料" width="150">
         <template slot-scope="scope">
          <span>{{scope.row.mailingInformationNum==0?"否":"是"}}</span>
       </template>
      </el-table-column>
       <el-table-column prop="mailingInformationNum" align="center" label="已邮寄数">
      </el-table-column>
       <el-table-column prop="startTime" align="center" label="有效期起日" width="180">
      </el-table-column>
       <el-table-column prop="endTime" align="center" label="有效期止日" width="180">
      </el-table-column>
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
export default {
  data() {
    return {
      isActive:0
    };
  },
  props:{
    tableData:{
      type:Array,
      default:()=>{
        return []
      }
    }
  },
  created(){
    setTimeout(()=>{
      this.isActive = this.tableData[0].id;
    },500)
  },
  methods: {

    // 点击单元格
handleSelectionChange(row,column,cell) {
        this.isActive=row.id;
        this.$emit("selectClass",row);
      },

    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 0) {
        return "warning-row";
      } else {
        return "success-row";
      }
    },
    // selectRow(index, rows) {
    //   console.log("isActive=",this.isActive)
    //   this.isActive=index;
    //   this.$emit("selectClass",index)
    // },
    deleteRow(index, rows) {
      console.log(index, rows);
      this.$router.push({
        path: "/page/officeCenter/OfficeCenterIndex/test2",
      });
    },
  },
};
</script>