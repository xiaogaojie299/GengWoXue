<template>
  <div class="box">
    <div class="title">推广中心</div>
    <div class="main">
      <div class="main-header">
        <!-- 二维码图片 -->
        <img class="QR-code" :src="QR_code" />
        <!-- 链接 -->
        <div class="link">
          <!-- 链接 -->
          <div class="title my-font">{{ infoList.extensionUrl }}</div>
          <!-- 复制链接按钮 -->
          <div
            class="btn my-font hand"
            :data-clipboard-text="infoList.extensionUrl"
            @click="copy"
          >
            复制链接
          </div>
        </div>
      </div>

      <div class="main-footer">
        <!-- 历史邀请标题 -->
        <my-title>历史邀请</my-title>
        <!-- 表格 -->
        <invite-table :tableData="tableData"></invite-table>
        <!-- 分页 -->
        <div class="pageNext">
          <page-device
            @handleCurrentChange="handleCurrentChange"
            current="current"
            :total="total"
          ></page-device>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import inviteTable from "./invite-table";
import Clipboard from "clipboard"; //复制
import {
  queryExtensionImg,
  queryRechargeRecordList,
} from "@/network/personalCenter";
import { mapState } from "vuex";
export default {
  data() {
    return {
      QR_code: "",
      tableData: "",
      total: 0, //默认分页总数
      current: 1,
      size: 10,
    };
  },
  computed: {
    infoList() {
      return this.$store.state.infoList;
    },
  },
  components: {
    inviteTable,
  },
  created() {
    this.getExtensionImg();
    this.getRechargeRecordList();
  },
  methods: {
    // 获取二维码图片
    async getExtensionImg() {
      let { data, code } = await queryExtensionImg();
      if (code == 200) {
        this.QR_code = data;
      } else {
        this.$myMeassage("获取推广二维码失败", "fail");
      }
      console.log("QR_code==>", this.QR_code);
    },
    //获取推广历史列表
    async getRechargeRecordList() {
      let params = {
        current: this.current,
        size: this.size,
      };
      let { code, data } = await queryRechargeRecordList(params);
      if (code == 200) {
        this.tableData = data.list;
        console.log("this.tableData==>", this.tableData);
        this.total = data.total;
      } else {
        this.$myAlert("网络错误");
      }
    },
    handleCurrentChange(cuurent) {
      this.current = current;
      this.getRechargeRecordList();
    },
    // 复制
    copy() {
      var clipboard = new Clipboard(".btn");
      clipboard.on("success", (e) => {
        this.$message({
          message: "复制成功",
          type: "success",
        });
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", (e) => {
        // 不支持复制
        console.log("该浏览器不支持自动复制");
        // 释放内存
        clipboard.destroy();
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.my-font {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #4d4d4d;
}
.box {
  width: 100%;
}
.title {
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #343434;
  margin-bottom: 20px;
}
.main {
  width: 100%;
  height: 801px;
  background: #f8f9f9;
  .main-header {
    margin-left: 353px;
    .QR-code {
      width: 298px;
      height: 299px;
      background: chartreuse;
      margin: 16px 0;
    }
    .link {
      display: flex;
      .title {
        width: 299px;
        height: 34px;
        background: #ffffff;
        border: 1px solid #efefef;
        border-radius: 4px;
        display: flex;
        align-items: center;
        padding: 0 12px;
        margin-right: 18px;
      }
      .btn {
        width: 94px;
        height: 34px;
        background: #ffffff;
        border: 1px solid #efefef;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 6px;
      }
    }
  }
  .main-footer {
    .pageNext {
      display: flex;
      justify-content: center;
      margin: 20px;
      // margin: 34px 0 30px 318px;
    }
  }
}
</style>
