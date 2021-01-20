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
            :src="isActive==scope.row.id?require('@/assets/img/success.png'):require('@/assets/img/icon_radiobutton.png')"
            :alt="scope.$index+','+isActive"
          />
        </template>
      </el-table-column>
      <el-table-column label="序号" width="80" align="center">
          <template slot-scope="scope">
              <span>{{scope.$index}}</span>
          </template>
      </el-table-column>
      <el-table-column label="头像" align="center" width="100">
          <template slot-scope="scope">
              <img style="width: 32px; height: 32px" :src="scope.row.avatar" alt="">
          </template>
      </el-table-column>
      <el-table-column prop="name" width="100"  align="center" label="姓名">
      </el-table-column>
      <el-table-column prop="sex" width="100"  align="center" label="性别">
      </el-table-column>
      <el-table-column prop="birthday" width="140" align="center" label="生日">
      </el-table-column>
      <el-table-column prop="courseName" width="140" align="center" label="在读课程">
      </el-table-column>
      <el-table-column prop="gradeName"  width="140" align="center" label="年级">
      </el-table-column>
      <!-- 课后习题 -->
      <el-table-column prop="courseNature" width="100" align="center" label="班级类别">
      </el-table-column>
      <el-table-column prop="teachWay"  width="100" align="center" label="授课类别">
      </el-table-column>
      <el-table-column prop="points" width="100" align="center" label="测评成绩">
      </el-table-column>
      <el-table-column prop="studentState" width="100" align="center" label="学生状态">
           <template slot-scope="scope">
              <span>{{studentType(scope.row.studentState)}}</span>
          </template>
      </el-table-column>
      <el-table-column prop="className" align="center" width="140" label="在读班级">
      </el-table-column>
      <el-table-column align="center" label="总课时">
        <template slot-scope="scope">
         <span>{{scope.row.noClassHour + scope.row.overClassHour}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="overClassHour" align="center" label="已上课时">
      </el-table-column>

       <el-table-column align="center" width="140" label="结业证附件">
         <template slot-scope="scope">
           <img v-if="scope.row.graduationCertificate" style="width:38px;height:38px" :src="scope.row.graduationCertificate" alt="">
         </template>
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
    tableData:Array,
    default:()=>{
        return []
    }
},
   methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 0) {
        return "warning-row";
      } else {
        return "success-row";
      }
    },
       // 切换actice的下标
    chekcout(id){
        this.isActive = id;
    },
    studentType(i){
      switch(i){
        case 1:
        return "在读";
         case 2:
        return "未分班";
         case 3:
        return "已转班";
         case 4:
        return "离班";
        case 5:
        return "已结课";
        case 6:
        return "停课";
        case 7:
        return "已退学";
        default :
        return "已转科"
      }
    },
    handleSelectionChange(row) {
        this.isActive=row.id;
      this.$emit("selectRow",row);
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