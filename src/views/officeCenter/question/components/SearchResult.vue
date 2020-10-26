<template>
  <div class="result banner">
    <div class="result-top">
      <div class="title">高三语文模拟考题一 <span>(136分)</span></div>
      <div class="score-timer-rank">
          <div class="score">总分：150分</div>
          <div class="timer">时间：01:30:12</div>
          <div class="rank">班级排名：12/50</div>
      </div>
    </div>
    <div class="result-main">
      <div class="main-header">
        <div class="r-e">
          <!-- r正确,e错误 -->
          <div class="result-ball r"></div>
          <span>正确</span>
        </div>
        <div class="r-e">
          <div class="result-ball e"></div>
          <span>错误</span>
        </div>
      </div>
      <div class="result-box">
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball r">1</div>
        <div class="result-ball e">1</div>
      </div>
    </div>
    <div class="result-foot">
      <a href="#" class="look-result" @click="goResultInfo">查看解析</a>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        goResultInfo(){
            this.$router.push('/ResultInfo')
        }
    }
};
</script>
<style scoped lang='scss'>
.result {
  box-shadow: 0px 9px 14px 5px rgba(226, 226, 226, 0.4);
  margin-top: 34px;
  .result-top {
    padding-top: 24px;
      border-bottom: 1px solid #ededed;

    .title {
      font-size: 30px;
      text-align: center;
      span {
        color: #ef703b;
      }
    }
    .score-timer-rank {
        display: flex;
        justify-content: space-between;
        margin-left: 240px;
        width: 966px;
      font-size: 24px;
      padding-top: 34px;
      padding-bottom: 37px;
    }
    .timer {
      
    }
  }
  .result-main {
    padding: 30px 23px 26px 20px;
    .r {
      background-color: #167cdb;
    }
    .e {
      background-color: #eb002a;
    }
    .main-header {
      display: flex;
      .r-e {
        display: flex;
        align-items: center;
        margin-right: 30px;
        span {
          font-size: 24px;
          color: #484848;
          margin-left: 13px;
        }
        .result-ball {
          width: 39px;
          height: 39px;
          border-radius: 50%;
        }
      }
    }
    .result-box {
      display: flex;
      flex-wrap: wrap;
      margin-top: 40px;
      .result-ball {
        height: 48px;
        width: 48px;
        border-radius: 50%;
        color: #fff;
        font-size: 24;
        text-align: center;
        line-height: 48px;
        margin-right: 52px;
        margin-bottom: 45px;
        &:nth-child(14n) {
          margin-right: 0;
        }
      }
    }
  }
  .result-foot {
      display: flex;
      justify-content: center;
    height: 45px;
    padding-bottom: 41px;
    .look-result {
      display: block;
      width: 274px;
      height: 45px;
      background: linear-gradient(110deg, #f13232, #ef753c);
      box-shadow: 0px 6px 9px 0px rgba(68, 5, 5, 0.32);
      border-radius: 4px;
      color: #fff;
      font-size: 18px;
      text-align: center;
      line-height: 45px;
    }
  }
}
</style>