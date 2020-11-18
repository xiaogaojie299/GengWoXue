<template>
  <div class="hello">
    <div class="w1">课程表</div>
    <div class="Calendar-title w1">
        <!-- 左边点击上一个月 -->
        <div v-if="switchMonthWeek" class="top-data-box">
          <img @click="previousMonth" src="@/assets/img/officeCenter/icon_left_black.png" alt=""> 
            <span class="date-style">{{ this.time.year + " / " +(this.time.month+1) }}</span>
            <!--右边点击下一个月  -->
          <img @click="nextMonth" src="@/assets/img/officeCenter/icon_right_black.png" alt="">
      </div> 
      <!-- 按周显示 -->
       <div v-else class="top-data-box">
          <img @click="previousWeek" src="@/assets/img/officeCenter/icon_left_black.png" alt=""> 
            <span class="date-style">{{ this.time.year + " / " +(this.time.month+1) }}</span>
            <!--右边点击下一个月  -->
          <img @click="nextWeek" src="@/assets/img/officeCenter/icon_right_black.png" alt="">
      </div> 
      <div class="right-text"><span :class="{isActive:switchMonthWeek}" @click="swichWeek">周</span> &nbsp;/ <span :class="{isActive:!switchMonthWeek}" @click="swichMonth">月</span></div>
    </div>
    <!-- 下面日历 -->
    <div class="Calendar-content w1">
      <div class="weekdays-box">
        <span class="weekdays" v-for="j in 7" :key="'_' + j">
          {{ week[j - 1] }}
        </span>
      </div>
      <!-- 判断是不是当前月 -->
      <div class="cell" v-show="switchMonthWeek" v-for="i in 5" :key="i">
        <span
          v-for="j in 7"
          :key="j"
          :class="{
            notCurentMonth: !isCurrentMonth(visible[(i - 1) * 7 + (j - 1)]),
            today: isToday(visible[(i - 1) * 7 + (j - 1)]),
          }"
        >
          {{ visible[(i - 1) * 7 + (j - 1)].getDate() }}
          <span v-show="!isToday(visible[(i - 1) * 7 + (j - 1)])&&isCurrentMonth(visible[(i - 1) * 7 + (j - 1)])" class="inline"></span>
          <!-- {{ arr[(i - 1) * 7 + (j - 1)].getDate() }} -->
          <!-- <span class="inline">2<span> -->
        </span>
      </div>
      <!-- 按周显示 -->
        <div class="cell" v-show="!switchMonthWeek">
        <span
          v-for="j in 7"
          :key="j"
          :class="{
            notCurentMonth: !isCurrentMonth(visible[(todayIndex - 1) * 7 + (j - 1)]),
            today: isToday(visible[(todayIndex - 1) * 7 + (j - 1)]),
          }"
        >
          {{ visible[(todayIndex - 1) * 7 + (j - 1)].getDate() }}
          <span v-if="!isToday(visible[(todayIndex - 1) * 7 + (j - 1)])&&isCurrentMonth(visible[(todayIndex - 1) * 7 + (j - 1)])" class="inline"></span>
          <!-- {{ arr[(i - 1) * 7 + (j - 1)].getDate() }} -->
          <!-- <span class="inline">2<span> -->
        </span>
        </div>
      <!-- 按周显示结束 -->
    </div>
  </div>
</template>
<script>
import * as utils from "@/utils/getData";
export default {
  name: "HelloWorld",
  props: {
    value: {
      type: Date,
      default: () => new Date(),
    },
  },
  data() {
    let {year,month,day} = utils.getYearMonthDay(this.value)
    return {
      week: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      time:{year,month,day},
      arr: [],
      todayIndex:43, //当前日的下标
      switchMonthWeek:true  //用户点击月显示还是周显示的时候  默认true是月
    };
  },
  mounted() {
    // let { yaer, month, day } = utils.getYearMonthDay(new Date());
    this.visible;
    this.getTodayIndex();
  },
  computed: {
    formatDate() {
      let { year, month, day } = utils.getYearMonthDay(new Date());
      console.log(year, month, day);
    //   return `${year}-${month + 1}-${day}`;
    return `${year}/${month + 1}`;
    },
    visible() {
      var arr = [];
      let { year, month } = utils.getYearMonthDay(utils.getDate(this.time.year,this.time.month,1));
      let currrentfirstDay = utils.getDate(year, month, 1);
      let week = currrentfirstDay.getDay();
      let startDay = currrentfirstDay - week * 60 * 60 * 1000 * 24;
      // 循环42天
      for (let i = 0; i < 35; i++) {
        arr.push(new Date(startDay + i * 60 * 60 * 1000 * 24));
      }
      return arr
    },
  },
  methods: {
    // 判断当前的月是否是
    isCurrentMonth(date) {
      let { year, month } = utils.getYearMonthDay(utils.getDate(this.time.year,this.time.month,1));
      let { year: y, month: m } = utils.getYearMonthDay(date);
      return year === y && month === m;
    },

    // 是否是当前日
    isToday(date) {
      let { year, month, day } = utils.getYearMonthDay(new Date());
      let { year: y, month: m, day: d } = utils.getYearMonthDay(date);
      return year === y && month === m && day === d;
    },
    // 跳转到上一月
    previousMonth(){
      this.todayIndex=1;
        var d= utils.getDate(this.time.year,this.time.month,1);
        console.log(d);
        d.setMonth(d.getMonth()-1);
        this.time=utils.getYearMonthDay(d);
    },
    // 点击跳转到下一月
    nextMonth(){
        this.todayIndex=1;
        var d= utils.getDate(this.time.year,this.time.month,1);
        console.log(d);
        d.setMonth(d.getMonth()+1);
        this.time=utils.getYearMonthDay(d);
    },
    // 跳转上一周
    previousWeek(){
      console.log("跳转到上一周");
      this.todayIndex<=1?this.todayIndex=1:this.todayIndex--;
      console.log("todayIndex=",this.todayIndex);
    },
    nextWeek(){
      console.log("跳转到下一周",)
      this.todayIndex>4?this.todayIndex=5:this.todayIndex++;
       console.log("todayIndex=",this.todayIndex);
    },
    // 计算当前日的下标是多少
    getTodayIndex(){
      console.log("this.visible==",this.visible);
      this.visible.forEach((item,index)=>{
        if(this.isToday(item)){
          item.getDate()<=7?this.todayIndex=item.getDate():this.todayIndex=index%7;
          console.log('this.todayIndex=',this.todayIndex);
        }
      })
    },
    swichWeek(){
      // 按周显示
      this.switchMonthWeek=false
    },
    swichMonth(){
      // 按月显示
      this.switchMonthWeek=true
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
.date-style{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  display: inline-block;
  margin-left:12px;
}
.w1{
    width: 900px;
}
.m-lr{
    margin:0 6px;
}
.hello {
  height: 100%;
}
.Calendar-title {
  position: relative;

  .top-data-box{
  height: 40px;
  // text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #343434;
  }
 
  img{
      width: 14px;
      height: 22px;
  }
}
.right-text {
  color: #333333;
  position: absolute;
  right: 0;
  top: 8px;
}
.Calendar-content {
    padding:0 60px;
    height: 100%;
}
.cell {
  display: flex;
  justify-content: space-around;
}
.cell > span {
  /* 字体大小 */
  font-size: 19px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  /* color: #282848; */
  display: inline-block;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  margin: 4px;
}
.isActive{
  color: #dddddd;
}
.notCurentMonth {
  // color: #dddddd;
  color: #ffffff;
}
.today {
  background: linear-gradient(110deg, #f13232, #ef753c);
  border-radius: 50%;
}
.weekdays-box {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.weekdays {
  display: inline-block;
  font-size: 15px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
}
/* 日期的下划线 */
.inline {
  width: 19px;
  height: 2px;
  background: #eb002a;
  border-radius: 1px;
  position: absolute;
  bottom: 0;
}
</style>
