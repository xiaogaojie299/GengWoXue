<template>
  <div>
    <crumbs>批阅作业</crumbs>
    <div class="main">
      <!-- 顶部标题 -->
      <div class="main-top">
        <!-- 第一行 -->
        <div class="first-row">
          <!-- 标题 -->
          <div class="tltle-box">
            <span class="one">{{testList.name}}</span>
            <span class="two">(总分：{{ testList.totalScore }}分)</span>
          </div>
          <div class="tag">已完成</div>
        </div>
        <!-- 第二行 -->
        <div class="second-row">
          <span>{{ testList.courseName }}</span>
        </div>
      </div>

      <!-- 中间题库 -->
      <div v-for="(item,index) in testList.list" :key="index" class="main-center">
        <!-- 填空题 -->
        <div v-if="item.type==1" class="topic-box">
          <!-- 左侧题形 -->
          <div class="left-subject">填空题：</div>
          <!-- 右侧内容 -->
         <div class="subject-detail-box">
            <div class="row-header">
              <!-- 左侧题目 -->
              <div class="left-problem">
                {{item.title}}（{{item.points}}分）
              </div>
              <!-- 右侧打分批阅 -->
              <div class="right-grade">
                <div class="first-box">
                  <div>得分：</div> 
                  <input v-model="item.studentScore" />
                  <!-- icon -->
                  <img src="@/assets/img/officeCenter/icon_edit.png" alt="" />
                </div>

                <!-- 上传音频按钮 -->
                 <!-- <div class="second-box">
                  <img src="@/assets/img/officeCenter/icon_upload.png" alt="" />
                  <span>上传音频按钮</span>
                </div> -->
                <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-change="handleChange"
                      :file-list="fileList">
                      <div class="second-box">
                  <img src="@/assets/img/officeCenter/icon_upload.png" alt="" />
                  <span>上传音频按钮</span>
                </div>
              </el-upload>
               
              </div>
            </div>
            <!-- 选项A,B,C,D -->
            <div class="option-box">
              <img :src="item.img" alt="">
              <div v-for="(it,i) in item.options" :key="i">{{it}}</div>
            </div>
            <!-- 正确答案 -->
            <div class="answer-box">
              <div class="student-answer">
                <div>学生答案：</div>
                <div>{{item.studentAnswer||"未作答"}}</div>
              </div>
              <div class="correct-answer">
                <div>正确答案：</div>
                <div>{{item.answer}}</div>
                <!-- <img src="@/assets/img/officeCenter/test1.png" alt="" /> -->
              </div>
            </div>
          </div>
        </div>

        <!-- 简答题： -->
        <div v-else-if="item.type==5" class="topic-box">
          <!-- 左侧题形 -->
          <div class="left-subject">简答题：</div>
          <!-- 右侧内容 -->
          <div class="subject-detail-box">
             <div class="row-header">
              <!-- 左侧题目 -->
              <div class="left-problem">
                {{item.title}}（{{item.points}}分）
              </div>
              <!-- 右侧打分批阅 -->
              <div class="right-grade">
                <div class="first-box">
                  <div>得分：</div> 
                  <input v-model="item.studentScore" />
                  <!-- icon -->
                  <img src="@/assets/img/officeCenter/icon_edit.png" alt="" />
                </div>

                <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-change="handleChange"
                      :file-list="fileList">
                      <div class="second-box">
                  <img src="@/assets/img/officeCenter/icon_upload.png" alt="" />
                  <span>上传音频按钮</span>
                </div>
              </el-upload>
               
              </div>
            </div>
            <!-- 选项A,B,C,D -->
            <div class="option-box">
              <!-- <div>A：答案1</div>
              <div>A：答案1</div>
              <div>A：答案1</div>
              <div>A：答案1</div> -->
              <div>
                <img :src="item.img" alt="" />
              </div>
            </div>
            <!-- 正确答案 -->
            <div class="answer-box">
              <div class="student-answer">
                <div>学生答案：</div>
                  <img :src="item.studentAnswerUrl" alt="" />
              </div>
              <div class="correct-answer">
                <div>正确答案：</div>
                <img :src="item.answer" alt="" />
              </div>
              <div class="correct-answer">
                <div>老师答案：</div>
                <textarea :value="item.studentAnswer" name="" id="" cols="30" rows="10"> </textarea>
              </div>
            </div>
          </div>
        </div>

        <!-- 选择题判断题多选题 -->
        <div v-else class="topic-box">
          <!-- 左侧题形 -->
          <div class="left-subject">{{item.type==2?"单选题":item.type==3?"多选题":"判断题"}}：</div>
          <!-- 右侧内容 -->
          <div class="subject-detail-box">
            <div class="row-header">
              <!-- 左侧题目 -->
              <div class="left-problem">
                {{item.title}}（{{item.points}}分）
              </div>
              <!-- 右侧打分批阅 -->
              <div class="right-grade">
                <div class="first-box">
                  <div>得分：</div> 
                  <input v-model="item.studentScore" />
                  <!-- icon -->
                  <img src="@/assets/img/officeCenter/icon_edit.png" alt="" />
                </div>

                <!-- 上传音频按钮 -->
                 <!-- <div class="second-box">
                  <img src="@/assets/img/officeCenter/icon_upload.png" alt="" />
                  <span>上传音频按钮</span>
                </div> -->
                <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-change="handleChange"
                      :file-list="fileList">
                      <div class="second-box">
                  <img src="@/assets/img/officeCenter/icon_upload.png" alt="" />
                  <span>上传音频按钮</span>
                </div>
              </el-upload>
               
              </div>
            </div>
            <!-- 选项A,B,C,D -->
            <div class="option-box">
              <img :src="item.img" alt="">
              <div v-for="(it,i) in item.options" :key="i">{{it}}</div>
            </div>
            <!-- 正确答案 -->
            <div class="answer-box">
              <div class="student-answer">
                <div>学生答案：</div>
                <div>{{item.studentAnswer||"未作答"}}</div>
              </div>
              <div class="correct-answer">
                <div>正确答案：</div>
                <div>{{item.answer}}</div>
                <!-- <img src="@/assets/img/officeCenter/test1.png" alt="" /> -->
              </div>
            </div>
          </div>
        </div>

        <!--  -->
      </div>
      <!-- -------------分割线开始----------- -->

      <!-- ----------分割线------------- -->
    </div>
    <!-- 底部按钮 -->
    <div class="footer">
      <div class="btn">提交</div>
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
      fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
      }
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
              let arr = [];
              try {
                item.options = item.options.split("%&");
                // item.options.forEach((item) => {
                //   let obj = {};
                //   obj.name = item.split("：")[0];
                //   obj.info = item.split("：")[1];
                //   arr.push(obj);
                // });
                // item.options = arr;
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
textarea {
          outline: none;
          width: 90%;
          height: 110px;
          padding: 4px;
          background: #ffffff;
          border: 1px solid #dbdbdb;
          border-radius: 6px;
        }
        textarea:focus {
          border: 1px solid #eb002a;
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
      width: 60px;
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #eb002a;
    }
    .subject-detail-box {
      width: 100%;
      border-bottom: 1px solid #ededed;

      .row-header {
        display: flex;
        justify-content: space-between;
        .left-problem {
          font-size: 12px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #343434;
        }
        .right-grade {
          display: flex;
          // justify-content: space-between;
          width: 220px;
          .first-box {
            font-size: 12px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #ea5810;
            width: 120px;
            height: 40px;
            display: flex;
            align-items: center;
            input{
              border: none;
              outline: none;
              width: 20px;
              font-size: 12px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #ea5810;
            };
            input:focus{
              border:1px solid #ea5810; 
            }
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
            width: 130px;
            padding-left: 6px;
            margin-top:8px;
            position: relative;
            display: flex;
            // align-items: center;
            img {
              width: 100px;
              height: 22px;
            }
            span {
              position: absolute;
              left: 30px;
              top: 2px;
              font-size: 12px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: #343434;
            }
          }
        }
      }
      //   中间选项的字体
      .option-box {
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #343434;
        div {
          margin: 4px 0;
        }
      }
      //   下面正确答案
      .answer-box {
        padding: 11px 13px;
        background: #f9f9f9;
        border-radius: 7px;
        margin-bottom: 17px;
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
      }
    }
  }
}
.footer {
  width: 100%;
  margin: 22px 0;
.btn {
    margin:0 auto;

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