
export const exmixin={
    inject:["_this"],
    data(){
     return{
        current:1,
        size:10,
        total:0,
        dialogVisible:false

     }   
    },
    methods: {
        //打开遮罩层
        open(){
            this.dialogVisible=true
        },
        // 关闭遮罩层
        close(){
            console.log("关闭")
        }
    },
    created() {
        // scheduleId=thi
    },
} 