<template>
  <div class="box">
    <el-carousel style="height:550px;" :interval="5000" arrow="never">
      <el-carousel-item style="height:550px overflow:hidden"  v-for="(item,index) in bannerList" :key="index" >
        <img style="width:100%;height:100%" :src="item.url" alt="">
        <h3>{{item.url}}</h3>
      </el-carousel-item>
    </el-carousel>


  </div>
</template>

<script>
export default {
  data(){
    return {
      banner:[
        {url:"https://mian-ju-lian-ren.obs.cn-north-4.myhuaweicloud.com/admin/06ab0347f5ed4730bb9aafe82a129576.png"},
         {url:"https://mian-ju-lian-ren.obs.cn-north-4.myhuaweicloud.com/admin/61b624d030f04adb9a8d592782d7d3e6.png"},
          {url:"https://mian-ju-lian-ren.obs.cn-north-4.myhuaweicloud.com/admin/8a25fd552a884a92b75b496774543ebd.png"}
      ]
    }
  },
  created(){
    setTimeout(()=>{
    console.log("传过来的",this.bannerList)
    },2000)
  },
  props:{
    bannerList:{
      type:Array,
      default:[""]
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .bannaer{
  *{margin: 0;padding: 0;}
}
//[data-v-de181ef8] .el-carousel__indicator--horizontal
/deep/ .el-carousel__indicator--horizontal{
  padding:12px 10px;
}
/deep/ .el-carousel__button {
  width: 18px;
  height: 18px;
  background: #dddddd;
  opacity: 0.3;
  border-radius: 50%;
}
/deep/.is-active > button {
  background: #ffffff;
  width: 37px;
  height: 18px;
  border-radius: 9px;
}
/deep/ .el-carousel__item{
    height: 100%;
}
.box {
  width: 100%;
  background: #000000;
  opacity: 0.3;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
