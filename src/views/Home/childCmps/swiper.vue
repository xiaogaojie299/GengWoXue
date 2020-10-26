<template>
  <div class="box">
    <el-carousel style="height:500px" :interval="5000" arrow="never">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 506px;
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

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
