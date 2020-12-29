<template>
  <div id="box">
    <container>
      <div class="header">
        <!-- 多选框，选择所有消息和未读消息 -->
        <div class="header-tag">
          <div class="tag-left"></div>
          <!-- 下拉多选框 -->
          <div>
            <el-select
              @change="change"
              :popper-append-to-body="false"
              v-model="msgTypeValue"
              placeholder="请选择"
            >
              <el-option
                v-for="item in msgType"
                :key="item.read"
                :label="item.name"
                :value="item.read"
              >
              </el-option>
            </el-select>
          </div>
          <img src="@/assets/img/answers/icon_arrow.png" alt="" />
          <!-- 下面按钮组 -->
        </div>
        <!-- 按钮 -->
        <div class="btn hand" @click="resetRead">置为已读</div>
      </div>
      <!-- 中间表格数据 -->
      <div class="main">
        <msg-table @selectRows="selectRows" :tableData="msgCenterList.list"></msg-table>
      </div>

      <!-- 底部分页 -->
      <div class="footer">
        <page-device :total="msgCenterList.total"></page-device>
      </div>
    </container>
  </div>
</template>
<script>
import msgTable from "./childCmps/msgTable";
import {optSetRead} from "@/network/messageCenter"

import { state, actions } from "vuex";
export default {
  data() {
    return {
      msgType: [
        { name: "全部", read: 3 },
        { name: "未阅读", read: 1 },
        { name: "已阅读", read: 2 },
      ],
      msgTypeValue: 1,
      current:1,
      size:10,
      noticeUserId:"",
    };
  },
  computed: {
    msgCenterList() {
      return this.$store.state.msgCenterList;
    },
    
  },
  components: {
    msgTable,
  },
  methods: {
    // 初始化
    init() {
      // vuex里的获取消息列表，在这里调用，然后去消息中心在调用，麻烦！！！可以用vuex中的数据可持续存储（百度）
      let data = {
        current: this.current, //页码
        size: this.size, //条数
        read: this.msgTypeValue,
        type: 3,
      };
     this.$store.dispatch("getMessageList", data);
    },
    async resetRead(){
    console.log(optSetRead);
    let data={noticeUserId:this.noticeUserId}
    let res = await optSetRead(data);
     console.log("res====>",res);
      this.init();
    },
    change(val) {
      console.log("val=", val);
      this.init();
    },
    selectRows(val){
      this.noticeUserId=val;
    }
  },
};
</script>
<style lang="scss" scoped>
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

.header {
  width: 100%;
  display: flex;
  margin-top:19px;
  font-size: 10px;
  font-family: Source Han Sans CN;
  font-weight: 550;
  .header-tag {
    position: relative;
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tag-left {
      width: 60px;
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
      width: 180px;
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
  .btn {
    color: #ef743b;
    width: 101px;
    height: 32px;
    background: #ffffff;
    border: 1px solid #ef733b;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 18px;
  }
}
.main {
  margin: 20px auto;
  width: 90%;
  // display: flex;
}
.footer {
  width: 100%;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>