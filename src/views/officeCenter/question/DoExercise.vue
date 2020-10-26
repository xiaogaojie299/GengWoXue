<template>
  <div class="main banner">
    <div class="title">高三语文模拟考题一 <span>(136分)</span></div>
    <div class="timer">时间：01：30：12</div>
    <div class="q-main">
      <!-- q-radio    单选题 -->
      <div class="q-box q-radio">
        <div class="q-title">
          <span class="num">1/80：</span>
          以下哪个答案是正确的
          <span class="score">(5分)</span>
        </div>
        <!-- 选项按钮 -->
        <el-radio-group
          v-model="radio1"
          size="mini"
          text-color="#fff"
          fill="#EB002A"
        >
          <el-radio-button label="A"></el-radio-button>
          <el-radio-button label="B"></el-radio-button>
          <el-radio-button label="C"></el-radio-button>
          <el-radio-button label="D"></el-radio-button>
        </el-radio-group>
        <!-- 选项对应的题目说明 -->
        <div class="radio-answer">
          <p>答案1</p>
          <p>答案2</p>
          <p>答案3</p>
          <p>答案4</p>
        </div>
      </div>

      <!-- q-short 简答题 -->
      <div class="q-box q-short">
        <div class="q-title">
          <span class="num">2/80：</span>
          日照香炉生紫烟
          <span class="score">(5分)</span>
        </div>
        <div class="q-short-main">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入您的答案(100字内)"
            resize="none"
            v-model="textarea"
          >
          </el-input>
        </div>
      </div>

      <!-- q-describe 描述题，带上传图片功能 -->
      <div class="q-box q-describe">
        <div class="q-title">
          <span class="num">3/80：</span>
          请对这张图表表述的内容进行描述
          <span class="score">(5分)</span>
        </div>
        <div class="q-describe-main">
          <!-- 题目图片 -->
          <div class="q-img">
            <img src="~@/assets/images/img.jpg" alt="" />
          </div>
          <!-- 对题目的描述框 -->
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入您的答案(300字)"
            resize="none"
            v-model="textarea"
          >
          </el-input>

          <!-- 上传答题图片 -->
          <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            :multiple="false"
            :limit="limitNum"
          >
            <i slot="default" class="el-icon-plus"></i>
          </el-upload>
          <div class="bt"></div>
        </div>
      </div>

      <!-- q-radio    单选题 -->
      <div class="q-box q-radio">
        <div class="q-title">
          <span class="num">1/80：</span>
          以下哪个答案是正确的
          <span class="score">(5分)</span>
        </div>
        <!-- 选项按钮 -->
        <el-radio-group
          v-model="radio1"
          size="mini"
          text-color="#fff"
          fill="#EB002A"
        >
          <el-radio-button label="A"></el-radio-button>
          <el-radio-button label="B"></el-radio-button>
          <el-radio-button label="C"></el-radio-button>
          <el-radio-button label="D"></el-radio-button>
        </el-radio-group>
        <!-- 选项对应的题目说明 -->
        <div class="radio-answer">
          <p>答案1</p>
          <p>答案2</p>
          <p>答案3</p>
          <p>答案4</p>
        </div>
      </div>

      <!-- q-radio    单选题 -->
      <div class="q-box q-radio">
        <div class="q-title">
          <span class="num">1/80：</span>
          以下哪个答案是正确的
          <span class="score">(5分)</span>
        </div>
        <!-- 选项按钮 -->
        <el-radio-group
          v-model="radio1"
          size="mini"
          text-color="#fff"
          fill="#EB002A"
        >
          <el-radio-button label="A"></el-radio-button>
          <el-radio-button label="B"></el-radio-button>
          <el-radio-button label="C"></el-radio-button>
          <el-radio-button label="D"></el-radio-button>
        </el-radio-group>
        <!-- 选项对应的题目说明 -->
        <div class="radio-answer">
          <p>答案1</p>
          <p>答案2</p>
          <p>答案3</p>
          <p>答案4</p>
        </div>
      </div>

      <!-- q-short 简答题 -->
      <div class="q-box q-short">
        <div class="q-title">
          <span class="num">2/80：</span>
          日照香炉生紫烟
          <span class="score">(5分)</span>
        </div>
        <div class="q-short-main">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入您的答案(100字内)"
            resize="none"
            v-model="textarea"
          >
          </el-input>
        </div>
      </div>
    </div>
    <div class="q-sub">
      <a href="#" class="sub-btn" @click="testEnd">交卷考试</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //单选框选中的答案
      radio1: "B",
      //简答题回答的文本数据
      textarea: "",
      //答题上传的个数，只支持上传1个
      limitNum: 1,
    };
  },
  methods: {
    testEnd(){
      this.$router.push('/Question')
    }
  }
};
</script>
<style scoped lang='scss'>
* {
  box-sizing: border-box;
  color: #333;
}
.main {
  margin-top: 42px;
  padding-top: 24px;
  box-shadow: 0px 9px 14px 5px rgba(226, 226, 226, 0.4);
  .title {
    font-size: 30px;
    text-align: center;
    span {
      color: #ef703b;
    }
  }
  .timer {
    text-align: center;
    font-size: 24px;
    padding-top: 34px;
    padding-bottom: 37px;
    border-bottom: 1px solid #ededed;
  }
  .q-main {
    padding: 24px 0 33px 20px;

    .q-box {
      padding-top: 41px;
      border-bottom: 1px solid #ededed !important;
    }
    .q-title {
      font-size: 18px;
      .num {
        color: #eb002a;
      }
      margin-bottom: 33px;
    }

    // 单选题样式
    .q-radio {
      position: relative;
      /deep/.el-radio-group {
        display: flex;
        flex-direction: column !important;
        .el-radio-button {
          position: relative;
          margin-bottom: 28px;
          height: 26px;
          width: 26px;
          border-radius: 50%;
          overflow: hidden;
          border: 1px solid #eb002a;
          /deep/.el-radio-button__inner {
            position: absolute;
            top: -2px;
            left: -7px;
            height: 30px;
            width: 30px;
            color: #eb002a;
          }
        }
      }
      .radio-answer {
        position: absolute;
        left: 46px;
        bottom: -2px;
        p {
          font-size: 18px;
          margin-bottom: 30px;
        }
      }
    }
    //简答题样式
    .q-short-main {
      .el-textarea {
        height: 163px;
        width: 1288px;
        /deep/.el-textarea__inner {
          min-height: 130px !important;
        }
      }
    }
    //描述题样式
    .q-describe {
      .q-describe-main {
        .q-img {
          width: 404px;
          height: 300px;
          margin-left: 20px;
          margin-bottom: 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .el-textarea {
          height: 163px;
          width: 1288px;
          /deep/.el-textarea__inner {
            min-height: 130px !important;
          }
        }
        .bt {
          height: 20px;
        }
      }
    }
  }
  .q-sub {
      display: flex;
      justify-content: center;
      height: 80px;
    .sub-btn {
    display: block;
      width: 274px;
      height: 45px;
      background: linear-gradient(110deg, #f13232, #ef753c);
      box-shadow: 0px 6px 9px 0px rgba(68, 5, 5, 0.32);
      border-radius: 4px;
      line-height: 45px;
      font-size: 18px;
    text-align: center;
    color: #fff;
    }
  }
}
</style>