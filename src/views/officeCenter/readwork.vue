<template>
  <div>
    <crumbs>批阅作业</crumbs>
    <div class="main">
      <!-- 顶部标题 -->
      <div class="main-top">
        <!-- 第一行 -->
        <div class="first-row">
          <!-- 标题 -->
          <div class="tltle-box">
            <span class="one">英语第一课课后习题</span>
            <span class="two">(总分：60分)</span>
          </div>
          <div class="tag">已完成</div>
        </div>
        <!-- 第二行 -->
        <div class="second-row">
          <span>张思思</span>
          <span>英语直播课</span>
        </div>
      </div>

      <!-- 中间题库 -->
      <div class="main-center">
        <!-- 单选题 -->
        <div v-for="i in 3" :key="i" class="topic-box">
          <!-- 左侧题形 -->
          <div class="left-subject">单选题：</div>
          <!-- 右侧内容 -->
          <div class="subject-detail-box">
            <div class="row-header">
              <!-- 左侧题目 -->
              <div class="left-problem">1：以下哪个答案是正确的？（5分）</div>
              <!-- 右侧打分批阅 -->
              <div class="right-grade">
                <div class="first-box">
                  <span>得分：5</span>
                  <!-- icon -->
                  <img src="@/assets/img/officeCenter/icon_edit.png" alt="" />
                </div>

                <!-- 上传音频按钮 -->
                <div class="second-box">
                  <img src="@/assets/img/officeCenter/icon_upload.png" alt="" />
                  <span>上传音频按钮</span>
                </div>
              </div>
            </div>
            <!-- 选项A,B,C,D -->
            <div class="option-box">
              <div>A：答案1</div>
              <div>A：答案1</div>
              <div>A：答案1</div>
              <div>A：答案1</div>
            </div>
            <!-- 正确答案 -->
            <div class="answer-box">
              <div class="student-answer">学生答案：B</div>
              <div class="correct-answer">正确答案：A</div>
            </div>
          </div>
        </div>
      </div>
      <!-- -------------分割线开始----------- -->

      <div class="main-center">
        <!-- 单选题 -->
        <div class="topic-box">
          <!-- 左侧题形 -->
          <div class="left-subject">简答题：</div>
          <!-- 右侧内容 -->
          <div class="subject-detail-box">
            <div class="row-header">
              <!-- 左侧题目 -->
              <div class="left-problem">
                请对这张图表表述的内容进行描述。（10分）
              </div>
              <!-- 右侧打分批阅 -->
              <div class="right-grade">
                <div class="first-box">
                  <span>得分：5</span>
                  <!-- icon -->
                  <img src="@/assets/img/officeCenter/icon_edit.png" alt="" />
                </div>

                <!-- 上传音频按钮 -->
                <div class="second-box">
                  <img src="@/assets/img/officeCenter/icon_upload.png" alt="" />
                  <span>上传音频按钮</span>
                </div>
              </div>
            </div>
            <!-- 选项A,B,C,D -->
            <div class="option-box">
              <!-- <div>A：答案1</div>
              <div>A：答案1</div>
              <div>A：答案1</div>
              <div>A：答案1</div> -->
              <div>
                <img src="@/assets/img/officeCenter/test1.png" alt="" />
              </div>
            </div>
            <!-- 正确答案 -->
            <div class="answer-box">
              <div class="student-answer">
                <div>学生答案：</div>
                <img src="@/assets/img/officeCenter/test1.png" alt="" />
              </div>
              <div class="correct-answer">
                <div>正确答案：</div>
                <img src="@/assets/img/officeCenter/test1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ----------分割线------------- -->
    </div>
    <!-- 底部按钮 -->
    <div class="footer">
      <div class="btn">提交</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main {
  width: 100%;
  //   height: 1525px;
  background: #ffffff;
  box-shadow: 1px 9px 14px 5px rgba(226, 226, 226, 0.4);
  .main-top {
    width: 100%;
    border-bottom: 1px solid #ededed;
    .first-row {
      height: 50px;
      display: flex;
      .tltle-box {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        .one {
          display: inline-block;
          font-size: 19px;
          font-family: Source Han Sans CN;
          margin-right: 10px;
          color: #333333;
        }
        .two {
          font-size: 15px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #ea570f;
        }
      }
      .tag {
        width: 70px;
        height: 35px;
        background: #ffffff;
        border: 1px solid #eb002a;
        border-radius: 4px;
        margin-left: auto;
        margin-top: 12px;
        align-items: center;
        display: flex;
        justify-content: center;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #eb002a;
      }
    }
    .second-row {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 12px;
      & span {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #333333;
      }
    }
  }
}
.main-center {
  .topic-box {
    display: flex;
    padding: 12px 12px 0 12px;
    .left-subject {
      width: 60px;
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #eb002a;
    }
    .subject-detail-box {
      width: 100%;
      border-bottom: 1px solid #ededed;

      .row-header {
        display: flex;
        justify-content: space-between;
        .left-problem {
          font-size: 12px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #343434;
        }
        .right-grade {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 200px;
          .first-box {
            width: 80px;
            span {
              font-size: 12px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #ea5810;
            }
            img {
              margin-left: 8px;
              width: 13px;
              height: 13px;
            }
          }
          .second-box {
            position: relative;
            img {
              width: 100px;
              height: 22px;
            }
            span {
              position: absolute;
              right: 4px;
              top: 2px;
              font-size: 12px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #343434;
            }
          }
        }
      }
      //   中间选项的字体
      .option-box {
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #343434;
        div {
          margin: 4px 0;
        }
      }
      //   下面正确答案
      .answer-box {
        padding: 11px 13px;
        background: #f9f9f9;
        border-radius: 7px;
        margin-bottom: 17px;
        div {
          font-size: 12px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          line-height: 20px;
          display: flex;
        }
        .student-answer {
          color: #343434;
          img {
            margin-bottom: 12px;
          }
        }
        .correct-answer {
          color: #eb002a;
        }
      }
    }
  }
}
.footer {
  width: 100%;
  margin: 22px 0;
.btn {
    margin:0 auto;

    width: 172px;
    height: 29px;
    background: linear-gradient(110deg, #f13232, #ef763c);
    box-shadow: 1px 4px 6px 0px rgba(68, 6, 6, 0.32);
    border-radius: 3px;
    // 字体大小

    font-size: 12px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>