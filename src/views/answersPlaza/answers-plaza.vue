<template>
  <div id="box">
    <router-view>
     
    </router-view>
  </div>
</template>
<script>
// import bgImg from "./childCmps/bg-img";
// import exercises from "./childCmps/exercises" 
export default {
  data() {
    return {};
  },
  components: {
  },
};
</script>
<style lang="scss" scoped>
// input中设置placeholder样式
input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #9a9a9a;
}

input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #9a9a9a;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #9a9a9a;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #9a9a9a;
}

.content {
  .input-border-box {
    width: 100%;
    height: 172px;
    background: #ffffff;
    box-shadow: 1px 4px 51px 9px rgba(197, 197, 197, 0.27);
    border-radius: 20px;
    margin-top: -72px;

    display: flex;
    justify-content: space-between;
    & .left-content {
      width: 276px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #272727;

      img {
        width: 18px;
        height: 23px;
        margin-left: 12px;
      }
    }
    & .center-content {
      flex: 1;
      display: flex;
      align-items: center;
      div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-left:1px solid #C9C9C9;
        padding:0 46px
      }
      input {
        height: 77px;
        width: 90%;
        border: none;
        outline: none;
        font-size: 36px;
        font-family: Source Han Sans CN;
        font-weight: 400;
      }
      img {
        width: 47px;
        height: 47px;
      }
    }
    & .right-content {
      width: 246px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      background: linear-gradient(110deg, #f13232, #ef763c);
      border-radius: 20px;
      // 字体样式

      font-size: 40px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #ffffff;
    }
  }
}

.bg-img {
  position: relative;
  z-index: -1;
  width: 100%;
  height: 623px;
  border: 1px solid blue;
}
</style>