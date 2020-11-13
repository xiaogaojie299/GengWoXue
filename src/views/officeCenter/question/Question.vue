<template>
  <div class="question banner">
    <el-row>
      <el-col :span="1">
        <span class="title">科目:</span>
      </el-col>
      <el-col :span="3">
        <el-button>全部</el-button>
      </el-col>
      <el-col :span="20">
        <el-button>语文</el-button>
        <el-button>数学</el-button>
        <el-button>英语</el-button>
        <el-button>物理</el-button>
        <el-button>化学</el-button>
        <el-button>生物</el-button>
        <el-button>地理</el-button>
        <el-button>历史</el-button>
        <el-button>政治</el-button>
        <el-button>其他</el-button>
      </el-col>
    </el-row>
    <div class="warehouse">
      <div class="question-box">
        <h4>高三语文模拟考题一</h4>
        <div class="tags">
          <div class="tag1">高三</div>
          <div class="tag1">语文</div>
        </div>
        <div class="info">
          <div class="score"><span>136分</span>(150分)</div>
          <a href="#" class="answer work-q" @click="goExercise">开始做题</a>
        </div>
      </div>
      <div class="question-box">
        <h4>高三语文模拟考题一</h4>
        <div class="tags">
          <div class="tag1">高三</div>
          <div class="tag1">语文</div>
        </div>
        <div class="info">
          <div class="score"><span>136分</span>(150分)</div>
          <a href="#" class="work-q answer" v-if="isShowWork" @click="goExercise">开始做题</a>
          <a href="#" class="reading-page answer" v-else>阅卷中</a>
        </div>
      </div>
      <div class="question-box">
        <h4>高三语文模拟考题一</h4>
        <div class="tags">
          <div class="tag1">高三</div>
          <div class="tag1">语文</div>
        </div>
        <div class="info">
          <div class="score"><span>136分</span>(150分)</div>
          <a href="#" class="answer reading-page">阅卷中</a>
        </div>
      </div>
      <div class="question-box">
        <h4>高三语文模拟考题一</h4>
        <div class="tags">
          <div class="tag1">高三</div>
          <div class="tag1">语文</div>
        </div>
        <div class="info">
          <div class="score"><span>136分</span>(150分)</div>
          <a href="#" class="answer work-q" @click="goExercise">开始做题</a>
        </div>
      </div>
      <div class="question-box">
        <h4>高三语文模拟考题一</h4>
        <div class="tags">
          <div class="tag1">高三</div>
          <div class="tag1">语文</div>
        </div>
        <div class="info">
          <div class="score"><span>136分</span>(150分)</div>
          <a href="#" class="answer reading-page analysis" @click="goSearchResult">查看解析</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Searchnav from '@/components/SearchNav'

export default {
  components: {
    // "search-nav": Searchnav,
  },
  data() {
    return {
      isShowWork: true,
      isReadPage: true,
    };
  },
  created() {},
  mounted() {},
  methods: {
      goExercise(){
          this.$router.push('/page/DoExercise')
      },
      goSearchResult(){
        this.$router.push('/page/SearchResult')
      }
  },
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.question {
    height: 680px;
  .el-row {
    padding: 25px 0;
    .el-col {
      .title {
        font-size: 15px;
        color: #333;
      }
      .el-button {
        padding: 9px 30px;
        border: 0;
      }
    }
  }
  .warehouse {
    display: flex;
    flex-wrap: wrap;
    .question-box {
      width: 400px;
      height: 170px;
      padding: 21px 17px 13px 25px;
      background: #ffffff;
      box-shadow: 0px 7px 11px 4px rgba(226, 226, 226, 0.16);
      margin-right: 100px;
      margin-bottom: 15px;
      &:nth-child(3n) {
        margin-right: 0;
      }
      h4 {
        font-size: 24px;
        font-weight: 400;
        color: #333;
      }
      .tags {
        display: flex;
        margin-top: 15px;
        .tag1 {
          width: 74px;
          height: 28px;
          border: 1px solid #eb0d35;
          border-radius: 2px;
          color: #eb0d35;
          font-size: 18px;
          text-align: center;
          line-height: 28px;
          margin-right: 11px;
        }
      }
      .info {
        display: flex;
        justify-content: space-between;
        margin-top: 32px;
        .score {
          font-size: 18px;
          color: #666666;
          span {
            color: #ef723b;
          }
        }
        .answer {
          width: 108px;
          height: 38px;
          border-radius: 6px;
          font-size: 18px;
          text-align: center;
          line-height: 38px;
        }
        .reading-page {
          color: #eb0d35;
          border: 1px solid #eb0d35;
        }
        .work-q {
          background: linear-gradient(73deg, #f13633 0%, #ef6e3b 100%);
          color: #fff;
        }
        .analysis {
            border-radius: 2px;
        }
      }
    }
  }
}
</style>
