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
      @selection-change="handleSelectionChange"
    >
      <!-- <el-table-column width="40" align="center">
        <template slot-scope="scope">
          <img
            @click="selectRow(scope.$index, tableData)"
            style="width: 20px; height: 20px"
            :src="
              isActive == scope.$index
                ? require('@/assets/img/success.png')
                : require('@/assets/img/icon_radiobutton.png')
            "
            :alt="scope.$index + ',' + isActive"
          />
        </template>
      </el-table-column> -->
     <el-table-column
     align="center"
      type="selection"
      width="80">
    </el-table-column>
      <el-table-column label="消息状态" align="center" width="100">
        <template slot-scope="scope">
          <div>{{scope.row.read==1?"未读":"已读"}}</div>
        </template>
      </el-table-column>
      <!-- 课后习题 -->
      <el-table-column prop="exercise" align="center" label="消息内容" >
        <template slot-scope="scope">
          <div style="display:flex;justify-content:center;">
            <div style="width:100px">{{scope.row.title}}:</div>
            <!-- <div>{{scope.row.content}}</div> -->
            <div v-html="scope.row.content"></div>
          </div>
        </template>
      </el-table-column>
      <!-- 操作 -->
      <el-table-column prop="insertTime" align="center" label="发送时间" width="160">
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
/deep/ .el-checkbox__inner{
  width: 18px;
  height: 18px;
  outline: none;
  border-radius:50%;
}
/deep/ .el-checkbox__input.is-checked>.el-checkbox__inner{
    background-color: #F13D34;
    border: #F13D34;
}
/deep/.el-checkbox__input.is-indeterminate>.el-checkbox__inner{
  background-color: #F13D34;
  border: #F13D34;
}
/deep/ .el-checkbox__inner::after {
    box-sizing: content-box;
    content: "";
    border: 1px solid #FFF;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 5px;
    position: absolute;
    top: 2px;
    transform: rotate(45deg) scaleY(0) translateX(-50%);
    width: 3px;
    // transition: transform .15s ease-in .05s;
    transform-origin: center;
}
/deep/ .el-checkbox__inner::after {
    box-sizing: content-box;
    content: "";
    border: 1px solid #FFF;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 6px;
    position: absolute;
    top: 4px;
    transform: rotate(45deg) scaleY(0) translateX(-50%);
    width: 3px;
    transition: transform .15s ease-in .05s;
    transform-origin: center;
}
.el-table .warning-row {
  background: #f9f9f9;
}

.el-table .success-row {
  background: #ffffff;
}
</style>

<script>
export default {
  data(){
    return {
      selectRows:[]
    }
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
      console.log(row);
      if (rowIndex % 2 == 0) {
        return "warning-row";
      } else {
        return "success-row";
      }
    },
    selectRow(index, rows) {
      console.log(index, rows);
      // this.$router.push({
      //      path:"/officeCenter/OfficeCenterIndex/test2"
      // })
    },
    handleSelectionChange(val) {
       this.selectRows=val.map((item,index)=>{
         return item.noticeUserId
       })
       this.$emit("selectRows",this.selectRows.toString())
       console.log("this.selectRows=",this.selectRows);
      },
    deleteRow(index, rows) {
      console.log(index, rows);
      this.$router.push({
        path: "/page/officeCenter/OfficeCenterIndex/test2",
      });
    },
  }
};
</script>
<style lang="scss" scoped>
  .props{
    display:flex;
    align-items :center;
    justify-content :center
  }
</style>