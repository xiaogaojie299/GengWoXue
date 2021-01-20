<template>
  <div class="box">
    <div class="content">
      <div class="title">请您在<span class="font-color">{{endTimer}}</span>内支付</div>
      <div class="RMB">￥{{money}}</div>
      <div class="app-name">微信</div>
      <div class="QR-code">
        <vue-qr
          :size="300"
          :margin="0"
          :auto-color="true"
          :dot-scale="1"
          :text="qrCode" />
      </div>
      <div class="btn" @click="handleClose">关闭</div>
    </div>
    <div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time:"2020/12"
    };
  },
  props:{
    qrCode:{
      type:String,
      default:""
    },
    money:{
      type:String,
      default:0
    },
    endTimer:{
      type:String
    }
  },
  methods:{
      timeType(){
        let d = new Data();
        // 获取当前的时间戳，然后往后加两分钟
        console.log(d);
      },
      handleClose(){
          this.$emit("closeMask")
      }
  },
  created(){
  }
};
</script>
<style lang="scss" scoped>
.font-color{
    color: #EF743C;
}
.box {
    margin-top:-40px;
  height: 528px;
  background: #ffffff;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #333333;
      line-height: 36px;
      margin:10px 0;
    }
    .RMB {
      font-size: 36px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #ef1a15;
      line-height: 36px;
    }
    .app-name {
      width: 300px;
      height: 50px;
      background: #f9f9f9;
      font-size: 26px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #9b9b9b;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top:21px
    }
    .QR-code {
      width: 300px;
      height: 300px;
      border: 1px solid black;
    }
    .btn {
      margin-top: 30px;
      width: 133px;
      height: 45px;
      background: linear-gradient(110deg, #f13232, #ef753c);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #ffffff;
    }
  }
}
</style>