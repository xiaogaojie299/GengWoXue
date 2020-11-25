import { queryQuestionSquareList,queryMeAnswerList,queryMeQuestionList } from "@/network/answersPlaza";
export const myMixin={
    data(){
        return {
            test:"测试",
            isDel:true,
            questionSquareList: []
        }
    },
    watch: {
      isDel(){
        console.log("触发了");
        this.questionSquareList=1;
        console.log("questionSquareList",this.questionSquareList);
      }
    },
    created() {
      console.log("questionSquareList=",this.questionSquareList);
    },
    methods: {
      test1(){
        this.questionSquareList=1;
        console.log(this.test);
      }
    }
}