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
          <span>{{ testList.courseName }}</span>
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
                >{{item.title}}（{{testList.totalScore}}分）
              </div>
            </div>

            <!--  答题框 -->
            <div class="answer-board">
              <img :src="item.img" alt="">
              <!-- <textarea disabled :value="item.studentAnswer" name="" id="" cols="30" rows="10"> </textarea> -->
            </div>

            <!-- 答案解析 -->
            <div class="analysis">答案解析 (5分)</div>
            <!-- 正确答案 -->
            <div class="answer-box">
              <div class="student-answer">学生答案：{{item.studentAnswer}}</div>
              <div class="correct-answer">正确答案：{{item.answer}}</div>
              <!-- 右侧语音解析 -->
              <div class="right-grade">
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
                <img :src="item.img" alt="" />
              </div>
            </div>
            <!-- 正确答案 -->
            <div class="answer-box">
              <!-- 右侧语音解析 -->
              <div class="right-grade">
                <!-- 上传音频按钮 -->
                <div class="second-box">
                  <!-- <img src="@/assets/img/officeCenter/icon_play.png" alt="" /> -->
                  <span>语音解析</span>
                </div>
              </div>
              <div class="student-answer">
                <div>学生答案：</div>
                <!-- <img src="@/assets/img/officeCenter/test1.png" alt="" /> -->
                <img :src="item.studentAnswerUrl" alt="">
              </div>
              <div class="correct-answer">
                <div>正确答案：</div>
                <img src="@/assets/img/officeCenter/test1.png" alt="" />
              </div>
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
                >{{ item.title }}（5分）
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
                <span :class="{ active:item.answer.includes(it.name) }">{{
                  it.name
                }}</span
                >{{ it.info }}
              </div>
            </div>

            <!-- 答案解析 -->
            <div class="analysis">答案解析 (5分)</div>
            <!-- 正确答案 -->
            <div class="answer-box">
              <div class="student-answer">
                学生答案：{{
                  item.studentAnswer == "" ? "未作答" : item.studentAnswer
                }}
              </div>
              <div class="correct-answer">正确答案：{{ item.answer }}</div>
              <!-- 右侧语音解析 -->
              <div class="right-grade">
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
import { queryExaminationInfo } from "@/network/officeCenter";
export default {
  data() {
    return {
      studentInfo: {}, //传过来的学生详情对象
      current: 1,
      size: 10,
      testList: [], //考试详情
      audio: "",
    };
  },
  created() {
    this.studentInfo = JSON.parse(this.$route.query.data);
    this.getExaminationInfo();
  },
  methods: {
    getExaminationInfo() {
      //查询考试试题
      let params = {
        id: this.studentInfo.id,
      };
      queryExaminationInfo(params).then((res) => {
        let { code, data } = res;
        if (code == 200) {
          this.testList = data;
          let testObj = {
            //测试数据
            answer: "C%&D",
            audio: "",
            id: 0,
            img:
              "https://beixiaorui.obs.cn-southwest-2.myhuaweicloud.com/8b8d0d9e119f4566bc98ca02cc88c7e6.jpg",
            options: "A：测试A%&B：测试B%&C：测试C%&D：测试D",
            points: 10,
            prompt: "",
            studentAnswer: "",
            studentAnswerUrl: "",
            studentScore: 0,
            studentState: 0,
            teacherAudio: "",
            teacherImg: "",
            teacherRemark: "",
            title: "这是一道多选题",
            type: 3,
          };
          let testObj1 = {
            //测试数据
            answer: "A%&C",
            audio: "",
            id: 0,
            img:
              "https://beixiaorui.obs.cn-southwest-2.myhuaweicloud.com/8b8d0d9e119f4566bc98ca02cc88c7e6.jpg",
            options: "A：测试多选A%&B：测试多选B%&C：测试多选C%&D：测试多选D",
            points: 10,
            prompt: "",
            studentAnswer: "",
            studentAnswerUrl: "",
            studentScore: 0,
            studentState: 0,
            teacherAudio: "",
            teacherImg: "",
            teacherRemark: "",
            title: "这是一道多选题",
            type: 2,
          };
          let testObj2 = {
            //测试数据
            answer: "日照香炉生紫烟",
            audio: "",
            id: 0,
            img:
              "https://beixiaorui.obs.cn-southwest-2.myhuaweicloud.com/8b8d0d9e119f4566bc98ca02cc88c7e6.jpg",
            options: "",
            points: 10,
            prompt: "",
            studentAnswer: "我不想回答",
            studentAnswerUrl: "",
            studentScore: 0,
            studentState: 0,
            teacherAudio: "",
            teacherImg: "",
            teacherRemark: "",
            title: "这是填空题",
            type: 1,
          };
          let testObj3 = {
            answer: "A",
            audio: "",
            id: 0,
            img:
              "https://beixiaorui.obs.cn-southwest-2.myhuaweicloud.com/8b8d0d9e119f4566bc98ca02cc88c7e6.jpg",
            options: "A：正确%&B：错误",
            points: 10,
            prompt: "",
            studentAnswer: "A",
            studentAnswerUrl: "",
            studentScore: 0,
            studentState: 0,
            teacherAudio: "",
            teacherImg: "",
            teacherRemark: "",
            title: "判断题",
            type: 4,
          };
          this.testList.list.push(testObj);
          this.testList.list.push(testObj1);
          this.testList.list.push(testObj2);
          this.testList.list.push(testObj3);
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
          border: 1px solid red;
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
          display: flex;
        }
        .student-answer {
          color: #343434;
          img {
            margin-bottom: 12px;
          }
        }
        .correct-answer {
          color: #eb002a;
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