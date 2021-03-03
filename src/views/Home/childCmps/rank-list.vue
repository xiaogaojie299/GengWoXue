<template>
  <div class="box">
    <div class="rank-list-box">
      <div>
        </div>
      <div class="title pt-10"> {{type==1?'老师课时数排行':"推广人数排行"}}</div>
      <!-- 列表数据 -->
      <div class="top-title-list">
        <div>排名</div>
        <div>老师</div>
        <div>{{type==1?"课时数":"人数"}}</div>
      </div>

      <div class="listDetails-box">
        <div
          class="rank-list-item"
          v-for="(item, index) in teacherRankList"
          :key="index"
          v-if="teacherRankList.length>0"
        >
          <div class="rank">
            <img v-if="index == 0" src="@/assets/img/home/NO1.png" alt="" />
            <img
              v-else-if="index == 1"
              src="@/assets/img/home/NO2.png"
              alt=""
            />
            <img
              v-else-if="index == 2"
              src="@/assets/img/home/NO3.png"
              alt=""
            />
            <span v-else>{{ index + 1 }}</span>
          </div>
          <div class="teacher-name">
            <img :src="item.teacherAvater" alt="" /><span>{{
              item.teacherName
            }}</span>
          </div>
          <div class="rank-num">{{ item.classNum }}</div>
        </div>
          <no-data-title v-else>暂无排行</no-data-title>
        <!-- 老师推广人数排行 -->
         <!-- <div
          v-else
          class="rank-list-item"
          v-for="(item, index) in teacherExtension"
          :key="index"
        >
          <div class="rank">
            <img v-if="index == 0" src="@/assets/img/home/NO1.png" alt="" />
            <img
              v-else-if="index == 1"
              src="@/assets/img/home/NO2.png"
              alt=""
            />
            <img
              v-else-if="index == 2"
              src="@/assets/img/home/NO3.png"
              alt=""
            />
            <span v-else>{{ index + 1 }}</span>
          </div>
          <div class="teacher-name">
            <img :src="item.teacherAvater" alt="" /><span>{{
              item.teacherName
            }}</span>
          </div>
          <div class="rank-num">{{ item.classNum }}</div>
        </div> -->
      </div>
      <!-- 第二名 -->
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      rankList: [
       
      ],
    };
  },
  props:{
    teacherRankList:{
      type:Array,
      default:()=>{
        return [
          { tName: "张老师", tNum: "1233" },
        { tName: "肖老师", tNum: "1244" },
        { tName: "李老师", tNum: "1355" },
        { tName: "王老师", tNum: "1355" },
        { tName: "张老师", tNum: "1233" },
        { tName: "肖老师", tNum: "1244" },
        { tName: "李老师", tNum: "1355" },
        { tName: "王老师", tNum: "1355" },
        { tName: "张老师", tNum: "1233" },
        { tName: "肖老师", tNum: "1244" },
        { tName: "李老师", tNum: "1355" },
        { tName: "王老师", tNum: "1355" },
        { tName: "李老师", tNum: "1355" },
        { tName: "王老师", tNum: "1355" },
        { tName: "李老师", tNum: "1355" },
        { tName: "王老师", tNum: "1355" },
        { tName: "李老师", tNum: "1355" },
        { tName: "王老师", tNum: "1355" }
        ]
      }
    },
    teacherExtension:{
      type:Array,
      default:()=>{
        return []
      }
    },
    type:{
      type:String
    }
  }
};
</script>
<style lang="scss" scoped>
.listDetails-box {
  height: 530px;
  overflow-y: scroll;
  overflow-y: overlay;
  margin-top: 6px;
}
.rank-list-box {
  background: #ffffff;
  box-shadow: 0px 2px 57px 5px rgba(200, 200, 200, 0.32);
  border-radius: 10px;
  margin-bottom: 20px;
  width: 524px;
  min-height: 700px;
  background: url("~@/assets/img/home/list.png") no-repeat;
  background-size: 100% 100%;
  background-position-y: -20px;
}
.title {
  text-align: center;
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #343434;
}
.top-title-list {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  text-align: center;
  & div {
    width: 30%;
    text-align: center;
  }
  // 字体颜色

  font-size: 15px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #000000;
  line-height: 50px;
  opacity: 0.6;
}

.rank-list-item {
  display: flex;
  justify-content: space-around;
  margin-bottom: 23px;
  & .rank,
  .rank-num {
    // height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
    text-align: center;
  }
  .teacher-name{
    span{
      width: 72px;
    }
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rank {
    span {
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #000000;
      opacity: 0.75;
    }
    img {
      width: 19px;
      height: 24px;
    }
  }
  .teacher-name {
    span {
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #000000;
    }
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 17px;
    }
  }
  .rank-num {
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #ff5700;
  }
}
</style>
