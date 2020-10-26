<template>
  <div class="box">
    <div class="live-title">小学英语直播间1</div>
    <div style="display:flex">
        <!-- 左侧 -->
        <div class="left-content">
            <live-left></live-left>
        </div>
        <!-- 中间 -->
        <div class="center-content">
            <live-center />
        </div>
        <!-- 右边 -->
        <div class="right-content">
            <liveRight />
        </div>
    </div>
  </div>
</template>
<script>
import liveLeft from "./childCmps/live-left"
import liveCenter from "./childCmps/live-center"
import liveRight from "./childCmps/live-right"
export default {
  data() {
    return {};
  },
  components:{
      liveLeft,
      liveCenter,
      liveRight
  }
};
</script>
<style lang="scss" scoped>
.box {
    background: #ffffff;
  .live-title {
    font-size: 15px;
    font-family: Source Han Sans CN;
    font-weight: 550;
    color: #343434;
    display: flex;
    justify-content: center;
  }
  .right-content{
      width: 100%;
  }
}
</style>    