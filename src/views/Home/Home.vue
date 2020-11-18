<template>
  <div id="box">
    <div class="bannaer">
    <swiper></swiper>
    </div>
    <!-- 面包屑 -->
    <crumbs>今日课程</crumbs>
    <!-- 今日课程列表 -->
    <div>
      <todayCourse />
    </div>
    <!-- 排行榜 -->
    <div>
      <crumbs>排行榜</crumbs>
      <container>
        <div class="rank-list-box">
          <div>
            <rank-list></rank-list>
          </div>
          <div>
            <rank-list></rank-list>
          </div>
        </div>
     </container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import swiper from "./childCmps/swiper"
import todayCourse from './childCmps/today-course'
import rankList from './childCmps/rank-list'
export default {
  name: "Home",
  components: {
    swiper,
    todayCourse,
    rankList
  },
};
</script>
<style lang="scss" scoped>
    .bannaer{
      padding: 10px;
    }
    .rank-list-box{
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
</style>