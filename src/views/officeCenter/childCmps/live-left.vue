<template>
  <div class="box">
    <!-- 顶部图片 -->
    <div class="top-img"></div>
    <!-- 直播公告 -->
    <div class="live-notice pl">
      <div>参会班级：三班</div>
      <div>邀请参会学员：10人</div>
      <div>助教老师：张老师</div>
      <!-- 开始直播 -->
      <div class="btn vertical-center">开始直播</div>
    </div>

    <!-- 直播间人数 -->
    <div class="live-people">
      <div class="live-people-title pl">直播间人数:3人</div>
      <!-- 直播列表数据 -->
      <div class="people-list pl">
        <div class="people-list-item">
          <div class="people-list-item-left">
            <!-- 人物ICON -->
            <img
              class="people_Icon"
              src="@/assets/img/live/icon_people.png"
              alt=""
            />
            <div class="my-color">主讲人</div>
          </div>
          <!-- 右侧两个ICON -->
          <div class="people-list-item-right">
            <!-- <img class="first-img" src="@/assets/img/live/icon_radio.png" alt="" /> -->
            <img class="second-img" src="@/assets/img/live/icon_horn.png" alt="" />
          </div>
        </div>
        <!-- 学生列表数据 -->
        <div class="people-list-item" v-for="(item,index) in studentList" :key="index">
          <div class="people-list-item-left">
            <!-- 人物ICON -->
            <img
              class="people_Icon"
              src="@/assets/img/live/icon_people.png"
              alt=""
            />
            <div class="my-color1">{{item.tname}}</div>
          </div>
          <!-- 右侧两个ICON -->
          <div class="people-list-item-right">
            <img class="first-img" src="@/assets/img/live/icon_radio.png" alt="" />
            <img class="second-img" src="@/assets/img/live/icon_horn.png" alt="" />
          </div>
        </div>
      </div>
     
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            studentList:[
                {tname:"张三"},
                {tname:"王二麻子"},
                {tname:"里斯"},
                {tname:"哈哈哈哈哈"},
                {tname:"张三"},
                {tname:"王二麻子"},
                {tname:"里斯"},
                {tname:"哈哈哈哈哈"},
                ]
        }
    }
};
</script>
<style lang="scss" scoped>
// 左侧内边距
.pl{
    padding-left:7px ;
}
// 垂直居中
.vertical-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
// 颜色字体
.my-color{
    color:#F0743C
}
// 在线时的颜色
.my-color1{
    color: #8C8C8C;
}
// 学生未在线时的颜色
.my-color2{
    color: #dddddd;
}
.box {
  width: 200px;
  height: 1000px;
  border: 1px solid black;
}
.top-img {
  width: 100%;
  height: 163px;
  border: 1px solid red;
}
.live-notice {
  border: 1px solid red;
  position: relative;
  div {
    font-size: 10px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #343434;
    line-height: 19px;
  }
  .btn {
    position: absolute;
    right: 2px;
    top: 0;
    width: 63px;
    height: 28px;
    background: linear-gradient(110deg, #f13232, #ef763c);
    border-radius: 3px;
    // 字体颜色

    font-size: 10px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;
  }
}
.live-people {
  width: 100%;
  height: 376px;
  background: #f8f9f9;
  .live-people-title {
    display: flex;
    align-items: center;
    width: 100%;
    height: 28px;
    background: #ef743c;
    font-size: 8px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;
  }
}

.people-list {
  .people-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    .people-list-item-left{
        width: 45%;
        display: flex;
        align-items: center;
        img{
            width: 11px;
            height: 12px;
            margin-right: 12px;
        }
        .people-name{
            color:#F0743C
        }
    }   
    .people-list-item-right{
        display: flex;
        align-items: center;
        padding-right:6px;
        .first-img{
            width: 13px;
            height: 7px;
        }
        .second-img{
            widows: 7px;
            height: 12px;
            margin-left: 8px;
        }
    }   
  }
}
</style>