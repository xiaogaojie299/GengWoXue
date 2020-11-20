<template>
  <div id="box">
    <!-- 背景图片 -->
    <div class="bg-img"></div>
    <!-- 内容 -->
    <div class="content">
      <!-- 顶上搜索框 -->
      <container>
        <div class="input-border-box">
          <!-- 左边内容 -->
          <div class="left-content">
            <!-- <span>问答内容</span> -->
            <div>
              <el-select @change="change"  :popper-append-to-body="false" v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <img src="@/assets/img/answers/icon_arrow.png" alt="" />
          </div>
          <!-- 中间内容 -->
          <div class="center-content">
            <!-- input搜索框 -->
            <div>
              <input v-model="seachTitle" type="text" placeholder="搜索问答" />
              <img
                @click="get_QuestionSquareList"
                src="@/assets/img/answers/icon_search.png"
                alt=""
              />
            </div>
          </div>
          <!-- 右侧内容 -->
          <div class="right-content" @click="go_myAnswer">
            <span>我要提问</span>
          </div>
        </div>
        <!-- 例题列表 -->
        <div>
          <exercises :questionSquareList="questionSquareList" />
        </div>
        <!-- 解析答案 -->
      </container>
    </div>
  </div>
</template>
<script>
import exercises from "./childCmps/exercises";
import { queryQuestionSquareList,queryMeAnswerList,queryMeQuestionList } from "@/network/answersPlaza";
export default {
  data() {
    return {
      seachTitle: "",
      current: 1, //当前页
      size: 10, //分页条数
      questionSquareList: [],
      elTitle: "回答广场",
      options: [
        {
          value: "1",
          label: "问答广场",
        },
        {
          value: "2",
          label: "我的回答",
        },
        {
          value: "3",
          label: "我的提问",
        },
      ],
      value: "1",
    };
  },
  components: {
    exercises,
  },
  created() {
    this.get_QuestionSquareList();
  },
  methods: {
    change(val){
      console.log("val=",this.value);
      if(this.value==1){
        this.get_QuestionSquareList();
      }else if(this.value==2){
        this.get_MeAnswerList();
      }else{
        this.get_MeQuestionList();
      }

      /*  不知道怎么回事 switch case 出问题了。
      switch(this.value){
        case 1:
          alert("1")
        this.get_QuestionSquareList();
        break;
        case 2:
          alert("2")
          this.get_MeAnswerList();
        break;
        default:
          alert("3")
          this.get_MeQuestionList();
      }
      */
    },
    //查询我的回答
    get_MeAnswerList(){
      let data={
        current: this.current,
        size: this.size,
      }
      queryMeQuestionList(data).then(res=>{
        console.log("查询我的问答",res);
        //  判断返回的图片是否含有逗号，如果有，转为数组
        if (res.imgUrl && res.imgUrl.indexOf(",") != -1) {
          res.imgUrl = res.imgUrl.split(",");
        }
        // 传入value判断 当前是问答广场的问题 还是自己题的问题 //取决于下拉框中的值
        res.forEach(item=>{
          item.setValue=this.value
        })
        this.questionSquareList = res;
      })
    },
    // 查询我的问题
    get_MeQuestionList(){
      let data={
        current: this.current,
        size: this.size,
      }
      queryMeAnswerList(data).then(res=>{
        console.log("查询我的问题",res);
        //  判断返回的图片是否含有逗号，如果有，转为数组
        if (res.imgUrl && res.imgUrl.indexOf(",") != -1) {
          res.imgUrl = res.imgUrl.split(",");
        }
        res[0].setValue=this.value;
        this.questionSquareList = res;
      })
    },
    //跳转我的提问
    go_myAnswer() {
      console.log("跳转到我的提问");
      this.$router.push({
        path: "/page/answersPlaza/my-answer",
      });
    },
    get_QuestionSquareList() {
      let data = {
        conditions: this.seachTitle,
        current: this.current,
        size: this.size,
      };
      queryQuestionSquareList(data).then((res) => {
        //  判断返回的图片是否含有逗号，如果有，转为数组
        if (res.imgUrl && res.imgUrl.indexOf(",") != -1) {
          res.imgUrl = res.imgUrl.split(",");
        }
        res[0].setValue=this.value;
        this.questionSquareList = res;
        console.log("this.questionSquareList", this.questionSquareList);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
// input中设置placeholder样式
input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #9a9a9a;
}

input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #9a9a9a;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #9a9a9a;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #9a9a9a;
}
/deep/ .el-input__inner {
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  width: 100%;
  font-size: 26px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #262626;
}
/deep/ .el-input__icon {
  display: none;
}
/deep/ .el-select-dropdown{
   font-size: 26px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #262626;
}
/deep/ .el-select-dropdown__list li{
  font-size: 26px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #484949;
  height: 68px;
  line-height: 68px;
}
  /deep/ .el-select-dropdown__item.hover{
  background: linear-gradient(110deg, #F13232, #EF753C);
  color: #fff;
}
/deep/ .el-select-dropdown__list{
}
.content {
  .input-border-box {
    padding-left:28px;
    width: 100%;
    height: 107px;
    background: #ffffff;
    box-shadow: 0px 2px 30px 5px rgba(197, 197, 197, 0.27);
    border-radius: 12px;
    margin-top: -72px;

    display: flex;
    justify-content: space-between;
    & .left-content {
      width: 146px;
      margin-right:20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 22px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #272727;

      img {
        width: 11px;
        height: 14px;
        margin-left: 12px;
      }
    }
    & .center-content {
      flex: 1;
      display: flex;
      align-items: center;
      div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-left: 1px solid #c9c9c9;
        padding: 0 46px;
      }
      input {
        // height: 77px;
        height: 100%;
        width: 90%;
        border: none;
        outline: none;
        font-size: 22px;
        font-family: Source Han Sans CN;
        font-weight: 400;
      }
      img {
        width: 29px;
        height: 29px;
      }
    }
    & .right-content {
      width: 154px;
      height: 108px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      background: linear-gradient(110deg, #f13232, #ef763c);
      border-radius: 0 10px 10px 0;
      // 字体样式

      font-size: 25px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #ffffff;
    }
  }
}

.bg-img {
  position: relative;
  z-index: -1;
  width: 100%;
  height: 389px;
  border: 1px solid blue;
}
</style>
