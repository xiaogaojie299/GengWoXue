import {
  queryQuestionSquareList,
  queryMeAnswerList,
  queryMeQuestionList,
} from "@/network/answersPlaza";
import utils from "@/utils/filters"
export const myMixin = {
  data() {
    return {
      isDel: true,
      questionSquareList: [],
      current: 1,
      size: 10,
      total: 0,
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
  },
  methods: {
    //查询我的问题
    get_MeQuestionList() {
      let params = {
        current: this.current,
        size: this.size,
      };
      queryMeQuestionList(params).then((res) => {
        let { code, data } = res;
        console.log("查询我的问答", res);
        this.total = data.total;
        if (code == 200) {
          //  判断返回的图片是否含有逗号，如果有，转为数组
          data.list.forEach((item) => {
            item.imgUrl =  utils.splitImg(item.imgUrl,",");
            item.setValue = this.value; // 传入value判断 当前是问答广场的问题 还是自己题的问题 //取决于下拉框中的值
          });
          this.questionSquareList = data.list;
        }
      });
    },
  },
};
