<template>
  <div class="box">
    <!-- 上面大图 -->
    <div class="big-img"></div>
    <!-- 下面小图 -->
    <div class="small-list">
      <div class="small-img">
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box{
}
.big-img {
  border: 1px solid red;
  height: 500px;
  width: 1000px;
}
.small-list {
  border: 1px solid black;
  width: 1000px;
//   height: 200px;
  overflow-x: auto;;
}
.small-img{
    display: flex;
    width: 1800px;
}
.img-item {
  width: 180px;
  height: 180px;
  border: 1px solid blue;
}
</style>