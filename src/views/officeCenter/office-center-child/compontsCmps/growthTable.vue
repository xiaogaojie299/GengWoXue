<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
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
      <el-table-column prop="completionTime" label="测评时间" width="180" align="center">
      </el-table-column>
      <el-table-column prop="paperType" label="测评类别" align="center" width="180">
        <template slot-scope="scope">
          <div>
              {{testType(scope.row.paperType)}}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="testPaper" align="center" label="测评内容">
      </el-table-column>
      <el-table-column prop="points" align="center" label="测评成绩">
      </el-table-column>
      <el-table-column align="center" label="考题">
        <template slot-scope="scope">
          <div style="color:blue;" class="hand" @click="goEva(scope.row)">{{scope.row.name}}</div>
        </template>
      </el-table-column>
      
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
  methods: {
    
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 0) {
        return "warning-row";
      } else {
        return "success-row";
      }
    },
    goEva(row){
      console.log("跳转成功",row);
       let data = JSON.stringify(row);
      this.$router.push({
        path: "/page/officeCenter/evaluationDetail",
        query: {
          data: data,
        },
      });
    },
    testType(type){  //考试类别
    switch(type){
      case 1:
        return "测评";
        case 2:
          return "课后练习";
          case 3:
            return "考试";
            default :
            return "免费题库"
    }
},
    selectRow(index, rows) {
      console.log(index, rows);
      // this.$router.push({
      //      path:"/officeCenter/OfficeCenterIndex/test2"
      // })
    },
    deleteRow(index, rows) {
      console.log(index, rows);
      this.$router.push({
        path: "/page/officeCenter/OfficeCenterIndex/test2",
      });
    },
  },
 
};
</script>