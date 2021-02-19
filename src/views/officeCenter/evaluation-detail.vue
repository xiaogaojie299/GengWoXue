<template>
  <div>
    <crumbs>测评详情</crumbs>
    <div class="main">
      <!-- 顶部标题 -->
      <div class="main-top">
        <!-- 第一行 -->
        <div class="first-row">
          <!-- 标题 -->
          <div class="tltle-box">
            <span class="one">{{ testList.name }}</span>
            <span class="two">(总分：{{ testList.totalScore }}分)</span>
          </div>
        </div>
        <!-- 第二行 -->
        <div class="second-row">
          <!-- <span>张思思</span>
          <span>英语直播课</span> -->
          <span>{{ testList.courseName ||"" }}</span>
        </div>
      </div>

      <!-- 中间题库 -->
      <div
        v-for="(item, index) in testList.list"
        :key="index"
        class="main-center"
      >
        <!-- 填空题 -->
        <div v-if="item.type == 1" class="topic-box">
          <!-- 右侧内容 -->
          <div class="subject-detail-box w-1">
            <div class="row-header">
              <!-- 左侧题目 -->
              <div class="left-problem">
                <span style="color: #eb0029"
                  >{{ index + 1 }}/{{ testList.list.length }}：</span
                >{{item.title}}（{{item.points}}分）
              </div>
            </div>

            <!--  答题框 -->
            <div class="answer-board">
              <el-image
                v-for="(imgIt,imgI) in item.img" 
                :key="imgI"
                style="width: 100px; height: 100px"
                :src="imgIt" 
                :preview-src-list="item.img">
              </el-image>
              <!-- <textarea disabled :value="item.studentAnswer" name="" id="" cols="30" rows="10"> </textarea> -->
            </div>

            <!-- 答案解析 -->
            <!-- <div class="analysis" v-if="studentParams.scoring=='已阅卷'">答案解析 (5分)</div> -->
            <!-- 正确答案 -->
            <div class="answer-box">
              <div class="student-answer" v-if="testList.state==2">学生答案：{{item.studentAnswer}}</div>
              <div class="correct-answer">正确答案：{{item.answer}}</div>
              <!-- 右侧语音解析 -->
              <div v-if="studentParams.scoring=='已阅卷'" class="right-grade">
                <!-- 上传音频按钮 -->
                <div class="second-box">
                  <!-- <img src="@/assets/img/officeCenter/icon_play.png" alt="" /> -->
                  <span>语音解析</span>
                </div>
              </div>
              <!-- 解析 -->
              <div class="jiexi-box">
                <div class="jiexi">解析</div>
                <div class="paragraph">
                  {{item.prompt}}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 简答题 -->
        <div v-else-if="item.type==5" class="topic-box">
          <!-- 左侧题形 -->
          <div class="left-subject">
            {{ index + 1 }}/{{ testList.list.length }}：
          </div>
          <!-- 右侧内容 -->
          <div class="subject-detail-box">
            <div class="row-header">
              <!-- 左侧题目 -->
              <div class="left-problem">
                {{ item.title }}（{{ item.points }}分）
              </div>
            </div>
            <!-- 选项A,B,C,D -->
            <div class="option-box">
              <div>
                <!-- <img v-for="(imgIt,imgI) in item.img" :key="imgI" :src="imgIt" alt="" /> -->
                 <el-image
                  v-for="(imgIt,imgI) in item.img" 
                  :key="imgI"
                  style="width: 100px; height: 100px"
                  :src="imgIt" 
                  :preview-src-list="item.img">
              </el-image>
              </div>
            </div>
            <!-- 正确答案 -->
            <div class="answer-box">
              <!-- 右侧语音解析 -->
              <div v-if="studentParams.scoring=='已阅卷'" class="right-grade">
                <!-- 上传音频按钮 -->
                <div class="second-box">
                  <!-- <img src="@/assets/img/officeCenter/icon_play.png" alt="" /> -->
                  <span>语音解析</span>
                </div>
              </div>
              <div class="student-answer">
                <div>学生答案：</div>
                <!-- <img src="@/assets/img/officeCenter/test1.png" alt="" /> -->
                <!-- <img :src="item.studentAnswerUrl" alt=""> -->
                <el-image
                  v-for="(imgIt,imgI) in item.studentAnswerUrl" 
                  :key="imgI"
                  style="width: 100px; height: 100px"
                  :src="imgIt" 
                  :preview-src-list="item.studentAnswerUrl">
              </el-image>
              </div>
               <div class="correct-answer">老师批阅备注：{{ item.teacherRemark }}</div>
              <div class="correct-answer flex">
                <div class="nowrap">图片解析：</div>
                <!-- <img v-for="(imgItem,imgIndex) in item.teacherImg" :src="item.teacherImg" :key="imgIndex" alt="" /> -->
               <el-image
                v-for="(imgIt,imgI) in item.img" 
                :key="imgI"
                style="width: 100px; height: 100px"
                :src="imgIt" 
                :preview-src-list="item.teacherImg">
              </el-image>
              </div>
              <div class="correct-answer">
                <div class="mt-10 mb-10">正确答案：{{item.answer}} </div>
                <div v-if="item.img" class="right-answers">
                  <el-image
                  v-for="(imgIt,imgI) in item.img" 
                  :key="imgI"
                  style="width: 100px; height: 100px"
                  :src="imgIt" 
                  :preview-src-list="item.img">
              </el-image>
                </div>
              </div>

              <!-- <div class="correct-answer">
                <div class="mt-10 mb-10">老师批阅图片： </div>
                <div v-if="item.teacherImg" class="right-answers">
                  <img :src="item.teacherImg" alt="" />
                </div>
              </div> -->

            </div>
          </div>
        </div>

        <!-- 单选题 多选题 -->
        <div v-else class="topic-box">
          <!-- 右侧内容 -->
          <div class="subject-detail-box">
            <div class="row-header">
              <!-- 左侧题目 -->
              <div class="left-problem">
                <span class="" style="color: #eb0029"
                  >{{ index + 1 }}/{{ testList.list.length }}：</span
                >{{ item.title }}（{{ item.points }}分）
              </div>
            </div>
            <!-- 选项A,B,C,D -->
            <div class="option-box">
              <div>
                <!-- <img src="@/assets/img/officeCenter/test1.png" alt="" /> -->
                <img :src="item.url" alt="">
              </div>
              <!-- <div><span class="active">{{}}</span> 答案1</div> -->
              <div v-for="(it, i) in item.options" :key="i">
                <span :class="{ active:item.answer==it.info }">{{
                  it.name
                }}</span
                >{{ it.info }}
              </div>
            </div>

            <!-- 答案解析 -->
            <!-- <div class="analysis" v-if="studentParams.scoring=='已阅卷'">答案解析 (5分)</div> -->
            <!-- 正确答案 -->
            <div class="answer-box">
              <div class="student-answer">
                学生答案：{{
                  item.studentAnswer == "" ? "未作答" : item.studentAnswer
                }}
              </div>
              <div class="correct-answer">正确答案：{{ item.answer }}</div>
              <!-- 右侧语音解析 -->
              <div v-if="studentParams.scoring=='已阅卷'" class="right-grade">
                <!-- 上传音频按钮 -->
                <div class="second-box">
                  <!-- <img src="@/assets/img/officeCenter/icon_play.png" alt="" /> -->
                  <span>语音解析</span>
                </div>
              </div>
              <!-- 解析 -->
              <div class="jiexi-box">
                <div class="jiexi">解析</div>
                <div class="paragraph">
                  {{item.prompt}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- -------------分割线开始----------- -->

      <!-- ----------分割线------------- -->
    </div>
  </div>
</template>
  <script>
import { queryExaminationInfo,queryAnswerInfo } from "@/network/officeCenter";
export default {
  data() {
    return {
      studentInfo: {}, //传过来的学生详情对象
      studentWork:{}, //学生传过来的答题情况
      studentParams:{},
      current: 1,
      size: 10,
      testList: [], //考试详情
      audio: "",
    };
  },
  created() {
    console.log(this.$route.query.type);
    if(this.$route.query.type=="线上考试"){
      //如果type存在 则是根据学生排课ID查询。
      this.studentWork = JSON.parse(this.$route.query.data);
      this.getAnswerInfo();
    }else{
      // 否则则是考试关系ID的 考试题
      this.studentInfo = JSON.parse(this.$route.query.data);
      this.getExaminationInfo();
    }
    this.studentParams = JSON.parse(this.$route.query.data);
    console.log("this.studentParams==>",this.studentParams);
  },
  methods: {
    // 切割 带%& 的图片URL
    splitImg(item,symbol="%&"){
      let tepArr=[];
      if(item.includes("%&")){
        tepArr = item.join("%&")
      }else if(!item){
        tepArr = [];
      }else{
        tepArr.push(item)
      }
      return tepArr
    },
    /* 1=填空题，2=单选题，3=多选题，4=判断题，5=问答题） */

    getExaminationInfo() {  //根据学生考试关系ID查询考试成绩
      //查询考试试题
      let params = {
        id: this.studentInfo.id,
      };
      queryExaminationInfo(params).then((res) => {
        let { code, data } = res;
        if (code == 200) {
          this.testList = data;
          let opt=['A','B','C','D','E','F','G','H'];
          this.testList.list.forEach((item) => {
              item.img = this.splitImg(item.img);
              item.teacherImg = this.splitImg(item.teacherImg);
              item.studentAnswerUrl = this.splitImg(item.studentAnswerUrl)
            if (item.options) {
              let arr = []; //单选题  多选
              try {
                item.options = item.options.split("%&");
                item.img
                if(item.type==4){
                    item.options.forEach((item) => {
                    let obj = {};
                    obj.name = item;
                    obj.info = item;
                    arr.push(obj);
                  });
                item.options = arr;
                }else if(item.type==2 || item.type==3){
                  item.options.forEach((item,i) => {
                    let obj = {};
                    obj.name = opt[i];
                    obj.info = item;
                    arr.push(obj);
                  });
                  item.options = arr;
                }
              } catch (e) {
                console.log(e);
              }
            }
          });
        }
      });
    },
    getAnswerInfo(){  //根据学生排课ID查询完成作业成绩
     //查询考试试题
      let params = {
        id: this.studentWork.id,
      };
      queryAnswerInfo(params).then((res) => {
        let { code, data } = res;
        if (code == 200) {
          this.testList = data;
          this.testList.list.forEach((item) => {
            if (item.options) {
              let arr = []; //单选题  多选
              try {
                item.options = item.options.split("%&");
                item.options.forEach((item) => {
                  let obj = {};
                  obj.name = item.split("：")[0];
                  obj.info = item.split("：")[1];
                  arr.push(obj);
                });
                item.options = arr;
              } catch (e) {
                console.log(e);
              }
            }
          });
        }
      });
    },
    myAudio() {
      this.audio = new Audio();
      this.audio.src =
        "https://beixiaorui.obs.cn-southwest-2.myhuaweicloud.com/b41c39a67f124ca89fc5047fa7bf14ec.mp3";
      let playPromise;
      playPromise = this.audio.play();
      if (playPromise) {
        playPromise
          .then(() => {
            console.log("加载成功");
            // 音频加载成功
            // 音频的播放需要耗时
            that.tiemr = setInterval(() => {
              second--;
              if (second <= 0) {
                that.audio.pause();
                clearInterval(that.tiemr);
              }
            }, 1000);
          })
          .catch((e) => {
            // 音频加载失败
            console.error(e);
          });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.w-1 {
  width: 88px;
  display: inline-block;
}
.main {
  width: 100%;
  //   height: 1525px;
  background: #ffffff;
  box-shadow: 1px 9px 14px 5px rgba(226, 226, 226, 0.4);
  .main-top {
    width: 100%;
    border-bottom: 1px solid #ededed;
    .first-row {
      height: 50px;
      display: flex;
      .tltle-box {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        .one {
          display: inline-block;
          font-size: 19px;
          font-family: Source Han Sans CN;
          margin-right: 10px;
          color: #333333;
        }
        .two {
          font-size: 15px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #ea570f;
        }
      }
      .tag {
        width: 70px;
        height: 35px;
        background: #ffffff;
        border: 1px solid #eb002a;
        border-radius: 4px;
        margin-left: auto;
        margin-top: 12px;
        align-items: center;
        display: flex;
        justify-content: center;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #eb002a;
      }
    }
    .second-row {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 12px;
      & span {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #333333;
      }
    }
  }
}
.main-center {
  .topic-box {
    display: flex;
    padding: 12px 12px 0 12px;
    .left-subject {
      // width: 60px;
      white-space: nowrap;
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #eb002a;
    }
    .subject-detail-box {
      width: 100%;
      // border-bottom: 1px solid #ededed;
      .row-header {
        display: flex;
        justify-content: space-between;
        .left-problem {
          font-size: 12px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #343434;
        }
      }
      .answer-board {
        //填空题留言板
        // border: 1px solid red;
        margin: 20px 0;
        textarea {
          outline: none;
          width: 100%;
          padding: 10px;
          height: 110px;
          background: #ffffff;
          border: 1px solid #dbdbdb;
          border-radius: 6px;
        }
        & textarea:focus {
          border: 1px solid #eb002a;
        }
      }
      //   中间选项的字体
      .option-box {
        font-size: 10px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #343434;
        span {
          display: inline-block;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #eb0029;
          margin-right: 12px;
        }
        .active {
          background: #eb0029;
          color: #ffffff;
        }
        div {
          display: flex;
          align-items: center;
          margin: 12px 0;
        }
      }
      .analysis {
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #343434;
        margin: 16px 0;
      }
      //   下面正确答案
      .answer-box {
        position: relative;
        padding: 11px 13px;
        background: #f9f9f9;
        border-radius: 7px;
        margin-bottom: 17px;
        .right-grade {
          position: absolute;
          right: 0;
          top: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 200px;
          .first-box {
            width: 80px;
            span {
              font-size: 12px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #ea5810;
            }
            img {
              margin-left: 8px;
              width: 13px;
              height: 13px;
            }
          }
          .second-box {
            position: relative;
            width: 109px;
            height: 38px;
            background: #ffffff;
            border: 1px solid #eb002a;
            border-radius: 18px;
            img {
              width: 100%;
              height: 100%;
            }
            span {
              white-space: nowrap;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-size: 12px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #eb0029;
            }
          }
        }
        div {
          font-size: 12px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          line-height: 20px;
          // display: flex;
        }
        .student-answer {
          color: #343434;
          img {
            margin-bottom: 12px;
          }
        }
        .correct-answer {
          color: #eb002a;
          .right-answers{
            display: flex;
            flex-wrap: wrap;
            padding-left:50px;
          }
        }

        .jiexi-box {
          width: 100%;
          font-size: 11px;
          font-family: Source Han Sans CN;
          color: #333333;
          display: flex;
          flex-direction: column;
          .jiexi {
            width: 100%;
            font-weight: bold;
            margin: 8px 0;
            line-height: 24px;
          }
          .paragraph {
            text-indent: 2em;
          }
        }
      }
    }
  }
}
.footer {
  width: 100%;
  margin: 22px 0;
  .btn {
    margin: 0 auto;

    width: 172px;
    height: 29px;
    background: linear-gradient(110deg, #f13232, #ef763c);
    box-shadow: 1px 4px 6px 0px rgba(68, 6, 6, 0.32);
    border-radius: 3px;
    // 字体大小

    font-size: 12px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>