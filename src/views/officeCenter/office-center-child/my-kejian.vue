<template>
  <div>
    <div class="title">我的课件</div>
    <div class="box">
      <!-- 上面标签 -->
      <div class="header">
        <div class="header-tag" v-for="i in 4" :key="i">
          <div class="tag-left">课件类型:</div>
          <!-- 下拉多选框 -->
          <div class="tag-right">
            <!-- 下拉多选框 -->
            <!-- <el-select v-model="value" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select> -->
          </div>
          <!-- 下面按钮组 -->
        </div>
      </div>

      <div class="btn-groups">
        <div class="btn1">重置</div>
        <div class="btn2">查询</div>
      </div>
      <!-- 顶部表格 -->
      <div>
        <kejiankuTable />
      </div>
      <div class="btn-groups">
        <div class="btn1">预览</div>
        <div class="btn2">下载</div>
      </div>
    </div>
  </div>
</template>
<script>
import kejiankuTable from "./compontsCmps/kejiankuTable";
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
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

.box {
  background: #f9f9f9;
  width: 1054px;
  padding: 10px 20px;
  .header {
    display: flex;
    justify-content: space-between;
    .header-tag {
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