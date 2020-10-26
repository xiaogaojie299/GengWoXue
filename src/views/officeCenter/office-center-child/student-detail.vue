<template>
  <div class="box">
      <div style="margin-left:23px">
        <breadcrumb-nav>
        <span slot="nav-name">我的学生</span>
        <span slot="nav-child">小王个人信息</span>
        </breadcrumb-nav>
      </div>

    <div class="main">
      <div class="main-top">
        <!-- 标题 -->
        <div class="top-title">基本信息</div>
        <!-- 学生资料 -->
        <div class="stu-Info-box">
          <div class="row-box">
            <div class="left-title mt-1 pt">头像:</div>
            <div class="right-img"></div>
          </div>

          <div class="row-box">
            <div class="left-title">性别：</div>
            <div class="right-content my-font">女</div>
          </div>
          <!-- 一行多个 -->
          <div class="rows">
            <div>
              <div class="row-box">
                <div class="left-title">生日：</div>
                <div class="right-content my-font">2012-01-01</div>
              </div>
            </div>
            <div>
              <div class="row-box">
                <div class="left-title">在读班级：</div>
                <div class="right-content my-font">张三</div>
              </div>
            </div>
            <div>
              <div class="row-box">
                <div class="left-title">在读班级：</div>
                <div class="right-content my-font">张三</div>
              </div>
            </div>
          </div>
          <div class="rows">
            <div>
              <div class="row-box">
                <div class="left-title">课程详情:</div>
                <div class="right-content my-font">2012-01-01</div>
              </div>
            </div>
            <div>
              <div class="row-box">
                <div class="left-title">学员状态：</div>
                <div class="right-content my-font">张三</div>
              </div>
            </div>
            <div>
              <div class="row-box">
                <div class="left-title">总课时：</div>
                <div class="right-content my-font">张三</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 成长记录 -->
      <div class="main-center">
        <div class="top-title">成长记录</div>
          <div class="table">
              <growth-table></growth-table>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import growthTable from "./compontsCmps/growthTable"
export default {
  data() {
    return {};
  },
  components:{
      growthTable
  }
};
</script>
<style lang="scss" scoped>

.mt-1 {
  margin-bottom: auto;
}
.pt {
  padding-top: 10px;
}
.top-title {
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 550;
  color: #343434;
  line-height: 55px;
}
.my-font {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #4d4d4d;
}
.main {
    padding: 18px 85px 20px 23px;
  width: 1014px;
  height: 844px;
  background: #f9f9f9;
  .main-top {
    .stu-Info-box {
      .row-box {
        display: flex;
        margin: 10px 0;
        align-items: center;
        .left-title {
          width: 75px;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #333333;
          white-space: nowrap;
        }
        .right-img {
          width: 100px;
          height: 100px;
          border: 1px solid red;
        }
        .right-content {
          width: 167px;
          height: 34px;
          background: #ffffff;
          border: 1px solid #efefef;
          border-radius: 4px;
          display: flex;
          align-items: center;
          padding-left: 19px;
        }
      }
      //   一行多个
      .rows {
        display: flex;
        justify-content: space-between;
        & > div {
          width: 240px;
          height: 60px;
        }
      }
    }
  }
  .main-center{
      .table{
          width: 794px;
          margin-left: 75px;
          border: 1px solid black;
      }
  }
}

.row-box {
        display: flex;
        margin: 10px 0;
        align-items: center;
        .left-title {
          width: 75px;
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #333333;
          white-space: nowrap;
        }
        .right-img {
          width: 100px;
          height: 100px;
          border: 1px solid red;
        }
        .right-content {
          width: 167px;
          height: 34px;
          background: #ffffff;
          border: 1px solid #efefef;
          border-radius: 4px;
          display: flex;
          align-items: center;
          padding-left: 19px;
        }
      }
</style>