<template>
  <div>
    <div class="box">
      <!-- 头像上传 -->
      <div class="upload-box">
        <div class="left-title my-font">头像:</div>
        <!-- 右边内容 -->
        <div class="right-content">
          <img src="@/assets/img/icon_photo_update.png" alt="" />
        </div>
      </div>
      <!-- 一行两列 -->
      <div class="row">
        <div class="col1">
          <div class="left-box my-font">账户：</div>
          <input type="text" />
        </div>
        <div class="col1">
          <div class="left-box my-font">电话：</div>
          <input type="text" />
        </div>
      </div>

      <div class="row">
        <div class="col1">
          <div class="left-box my-font">账户：</div>
          <input type="text" />
        </div>
        <div class="col1">
          <div class="left-box my-font">电话：</div>
          <input type="text" />
        </div>
      </div>

      <div class="row">
        <div class="col1">
          <div class="left-box my-font">账户：</div>
          <input type="text" />
        </div>
        <div class="col1">
          <div class="left-box my-font">电话：</div>
          <input type="text" />
        </div>
      </div>

      <div class="row">
        <div class="col1">
          <div class="left-box my-font">账户：</div>
          <input type="text" />
        </div>
        <div class="col1">
          <div class="left-box my-font">电话：</div>
          <input type="text" />
        </div>
      </div>

      <div class="row">
        <div class="col1">
          <div class="left-box my-font">账户：</div>
          <input type="text" />
        </div>
        <div class="col1">
          <div class="left-box my-font">电话：</div>
          <div class="right-box">
            <input type="text" />
          </div>
        </div>
      </div>
      <!-- 出生日期 -->
      <div class="row">
        <div class="col1">
          <div class="left-box my-font">出生日期：</div>
          <div class="right-box">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%; height: 100%"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
      <!-- 个人简历 -->
      <div class="row">
        <div class="col1">
          <div class="left-box my-font">出生日期：</div>
          <!-- <div class="right-box">
              <textarea name="" id="" cols="30" rows="10"></textarea>
          </div> -->
          <div class="my-jianji">
            哈啊哈
            <!-- <textarea name="" id="" cols="30" rows="10"></textarea> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        date1: "",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
/deep/ .el-input__inner {
  height: 34px;
}
.my-font {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
}
input {
  width: 272px;
  height: 34px;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 4px;
  padding: 0 20px;
}

textarea {
  border: 1px solid red;
  width: 100%;
}
.box {
  .upload-box {
    display: flex;
    .left-title {
      width: 85px;
      height: 85px;
    }
    .right-content {
      img {
        width: 168px;
        height: 168px;
      }
    }
  }
  .row {
    display: flex;
      justify-content: space-between;
    width: 100%;
    .col1 {
      display: flex;
      align-items: center;
      margin: 30px 124px 0 0;
      width: 100%;
      .left-box {
        white-space: nowrap;
        width: 90px;
        border: 1px solid red;
        margin-right: 2px;
      }
      .right-box {
        width: 272px;
        height: 34px;
      }
      //   这是个人简介留言框样式
      .my-jianji {
        width: 753px;
        height: 113px;
        background: #ffffff;
        border: 1px solid #efefef;
        border-radius: 4px;
      }
    }
  }
}
</style>