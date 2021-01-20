<template>
    <!-- <el-carousel style="height:550px;" :interval="5000" arrow="never">
      <el-carousel-item
        style="height:550px overflow:hidden"
        v-for="(item, index) in bannerList"
        :key="index"
      >
        <img style="width:100%;height:550px" :src="item.url" alt="" />
        <h3>{{ item.url }}</h3>
      </el-carousel-item>
    </el-carousel> -->
      <el-carousel height="550px">
        <el-carousel-item v-for="(item,index) in bannerList" :key="index">
          <!-- <img style="object-fit:contain;border:1px solid red;height:550px;" @click="jump(item.jumpUrl)" :src="item.url" alt=""> -->
          <img style="height:550px;width:100vw;object-fit;none" @click="jump(item.jumpUrl)" :src="item.url" alt="">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      banner: [
        {
          url:
            "https://mian-ju-lian-ren.obs.cn-north-4.myhuaweicloud.com/admin/06ab0347f5ed4730bb9aafe82a129576.png",
        },
        {
          url:
            "https://mian-ju-lian-ren.obs.cn-north-4.myhuaweicloud.com/admin/61b624d030f04adb9a8d592782d7d3e6.png",
        },
        {
          url:
            "https://mian-ju-lian-ren.obs.cn-north-4.myhuaweicloud.com/admin/8a25fd552a884a92b75b496774543ebd.png",
        },
      ],
    };
  },
  methods:{
    jump(url){
      window.open(url);
    }
  },
  created() {
    setTimeout(() => {
      console.log("传过来的", this.bannerList);
    }, 2000);
  },
  props: {
    bannerList: {
      type: Array,
      default: [""],
    },
  },
};
</script>
<style lang="scss" scoped>
/deep/ .bannaer {
  padding:0 !important;
  border: 1px solid red;
}
/deep/ .bannaer[data-v-6d720fe5]{
   padding:0 !important;
}
//[data-v-de181ef8] .el-carousel__indicator--horizontal
/deep/ .el-carousel__indicator--horizontal {
  // padding: 12px 10px;
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
/deep/ .el-carousel__item {
  height: 100%;
}
/deep/ .el-carousel__container{
  height: 550px;
  overflow: hidden;
}
.box {
  width: 100%;
  background: #000000;
  opacity: 0.3;
}

</style>
