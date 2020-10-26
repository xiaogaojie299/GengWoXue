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
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
      </div>
      <!-- 资质 -->
      <div class="row">
        <div class="col1">
          <div class="left-box my-font">资质：</div>
          <div class="right-box">
            <input type="text" placeholder="教师资格证" />
          </div>
          <div class="btn-group">
            <div class="add">添加</div>
            <div class="delete">删除</div>
          </div>
        </div>
      </div>

      <!-- 图片上传 -->
       <div class="upload-box">
        <div class="left-title my-font"></div>
        <!-- 右边内容 -->
        <div class="right-content">
          <img src="@/assets/img/icon_photo_update.png" alt="" />
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
  height: 113px;
  padding: 10px 20px;
}
.box {
  width: 100%;
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
    justify-content: space-around;
    width: 100%;
    .col1 {
      display: flex;
      align-items: center;
      margin: 30px 0;
      width: 100%;
      .left-box {
        white-space: nowrap;
        width: 90px;
        margin-right: 2px;
      }
      .right-box {
        width: 272px;
        height: 34px;
      }

      .btn-group {
        width: 240px;
        display: flex;
        .add,
        .delete {
          margin-left:23px;
          width: 82px;
          height: 34px;
          background: #ffffff;
          border: 1px solid #ef743c;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          // 字体大小

          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #ef743c;
        }
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