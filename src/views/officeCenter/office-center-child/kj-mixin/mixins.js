import { state, actions } from "vuex";
export const kjMixin={
    inject:["_this"],
    data(){
        return {
          dialogVisible:false       //控制弹框的显示
        }
    },
    computed:{
        kejianType1() {
            return [
              { name: "PPT", id: 2 },
              { name: "文档", id: 3 }
            ];
          },
          classList1() {
            return this.$store.state.classList.shift();
          },
          subjectList1() {
            return this.$store.state.subjectList.shift();
          },
    },
    methods: {
        
    },
    created() {
        
    },
    mounted() {
        
    },
}
