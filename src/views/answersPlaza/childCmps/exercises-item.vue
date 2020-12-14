<template>
  <div class="box">
    <div class="exercises-item" @click="go_exDetail()">
      <!-- <div class="exercises-item"> -->
      <!-- 顶部标题 -->
      <div class="top-title">{{item.question}}</div>
      <div class="delete" @click.stop @click="deleteQuestion" v-show="item.setValue==3">删除提问</div>
      <!-- 中间内容 -->
      <div class="main-content">
        <!-- 题目详情 -->
        <div class="exercises-detail">
          <!-- 如图，若∠1=∠2，∠C=∠D，问∠A与∠F有什么关系，并说明理由？ -->{{item.describe}}
        </div>
        <!-- 题目图片 -->
        <div class="exercises-img">
          <div v-for="(it,index) in item.imgUrl" :key="index">
              <el-image
            style="width: 105px; height: 105px"
            :src="it"
          >
          </el-image>
          </div>
          <!-- <div class="exercises-img-item" v-for="i in 2" :key="i"></div> -->
          <!-- 图片预览功能 -->
          <!-- <el-image
            style="width: 105px; height: 105px"
            :src="url"
            :preview-src-list="srcList"
          >
          </el-image> -->
          <!-- <el-image
            style="width: 105px; height: 105px"
            src="https://xixisuxi.obs.cn-southwest-2.myhuaweicloud.com/16054585862.png"
          >
          </el-image> -->
          

        </div>
      </div>
      <!-- 底部详情 -->
      <div class="footer">
        <div class="footer-left">
          <img src="@/assets/img/answers/icon_coin.png" alt="" />
          <span>{{info.golds}}</span>
        </div>
        <div class="footer-center">{{item.answerNum}}个回答</div>
        <div class="footer-right">{{item.insertTime}}</div> 
      </div>
    </div>
  </div>
</template>
<script>
import {optDeleteQuestion} from "@/network/answersPlaza"
import {myMixin} from "../mixins/mixins"
export default {
  mixins:[myMixin],
  data() {
    return {
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
      ],
      info:{
        imgUrl:["https://xixisuxi.obs.cn-southwest-2.myhuaweicloud.com/16054585862.png"]
      }
    };
  },
  inject:["_this"],
  props: { 
    item: {
      type: Object,
      default:()=>{
        return {
          imgUrl:["https://xixisuxi.obs.cn-southwest-2.myhuaweicloud.com/16054585862.png"]
        }
      },
    },
  },
  mounted(){
      // this.info = JSON.parse(JSON.stringify(this.item))
      // console.log("this.info==>",this.info.imgUrl,this.item.imgUrl);
      // this.$set(this.info.imgUrl,this.item.imgUrl);
  },
  methods: {
    go_exDetail() {
      console.log("跳转成功");
      this.$router.push({
        path: "/page/answersPlaza/exercises-detail",
        query:{"exercisesDetail":JSON.stringify(this.item)}
      });
    },
    deleteQuestion(){
      let data={
        questionId:this.item.id
      };
      optDeleteQuestion(data).then(res=>{
        // this.isDel=!this.isDel;
        this._this.get_MeQuestionList()
      })
      // console.log(this.questionSquareList)
      // this._this.test1()
    }
  },
  created(){
    console.log("this.item=",this.item);
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  min-height: 218px;
  background: #ffffff;
  box-shadow: 1px 2px 58px 5px rgba(200, 200, 200, 0.32);
  border-radius: 4px;
  margin: 10px 0;
  padding: 25px 27px;
}
.exercises-item {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100%;
  .delete{
    position: absolute;
    right: 0;
    width: 84px;
    height: 26px;
    background: #eb002a;
    border-radius: 4px;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:20;
  }
  .top-title {
    font-size: 15px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #343434;
    margin-bottom: 17px;
  }

  .main-content {
    .exercises-detail {
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #9a9a9a;
      margin-bottom: 25px;
    }
    .exercises-img {
      display: flex;
      flex-wrap: nowrap;
      margin-bottom: 15px;
      margin-right: 48px;
      .exercises-img-item {
        width: 105px;
        height: 105px;
        background: #000;
      }
    }
  }
  // 底部
  .footer {
    display: flex;
    width: 25%;
    justify-content: space-between;
    .footer-left {
      display: flex;
      align-items: center;
      img {
        width: 18px;
        height: 20px;
        margin-right: 10px;
      }
      span {
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #9a9a9a;
      }
    }
    .footer-center,
    .footer-right {
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #9a9a9a;
    }
  }
}
</style>
