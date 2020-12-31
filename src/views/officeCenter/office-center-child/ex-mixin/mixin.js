
export const exmixin={
    inject:["_this"],
    data(){
     return{
        current:1,
        size:10,
        total:0,
        dialogVisible:false,
        random:1,
        scheduleId:"",
     }   
    },
    methods: {
        //打开遮罩层
        open(){
            this.dialogVisible=true;
            //this._this.get_classStudent()     //获取习题列表
            console.log('tableData',this.tableData)
            this.random+=1;
            console.log("this.random",this.random)
        },
        // 关闭遮罩层
        close(){
            console.log("关闭")
            this.dialogVisible=false;
            this.getDaySchedule()
        },
        // 获取列题ID
    },
    created() {
    },
} 