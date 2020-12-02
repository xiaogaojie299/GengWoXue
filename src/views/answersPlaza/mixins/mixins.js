import { queryQuestionSquareList,queryMeAnswerList,queryMeQuestionList } from "@/network/answersPlaza";
export const myMixin={
    data(){
        return {
            test:"测试",
            isDel:true,
            questionSquareList: [],
            questionSquareList1: [1,2,3],
            current:1,
            size:10
        }
    },
   inject:["_this"],
    watch: {
      // isDel(){
      //   console.log("触发了");
      //   this.questionSquareList=1;
      //   console.log("questionSquareList",this.questionSquareList);
      // }
    },
    created() {
      console.log("questionSquareList=",this.questionSquareList);
    },
    methods: {
      test1(){
        this.questionSquareList1 = [4,5,6]
        console.log(this.questionSquareList1)
        console.log(this.test);
      },
          //查询我的问题
    get_MeQuestionList(){
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
    }
}