import {
  queryQuestionSquareList,
  queryMeAnswerList,
  queryMeQuestionList,
} from "@/network/answersPlaza";
export const myMixin = {
  data() {
    return {
      isDel: true,
      questionSquareList: [],
      current: 1,
      size: 10,
    };
  },
  inject: ["_this"],
  watch: {
    // isDel(){
    //   console.log("触发了");
    //   this.questionSquareList=1;
    //   console.log("questionSquareList",this.questionSquareList);
    // }
  },
  created() {
    console.log("questionSquareList=", this.questionSquareList);
  },
  methods: {
    //查询我的问题
    get_MeQuestionList() {
      let data = {
        current: this.current,
        size: this.size,
      };
      queryMeQuestionList(data).then((res) => {
        console.log("查询我的问答", res);
        //  判断返回的图片是否含有逗号，如果有，转为数组
        if (res.imgUrl && res.imgUrl.indexOf(",") != -1) {
          res.imgUrl = res.imgUrl.split(",");
        }
        // 传入value判断 当前是问答广场的问题 还是自己题的问题 //取决于下拉框中的值
        res.forEach((item) => {
          item.setValue = this.value;
        });
        this.questionSquareList = res;
      });
    },
  },
};
