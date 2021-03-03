<template lang="">
    <div class="box">
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            >
            <span>当前浏览器暂不支持老师直播功能，推荐使用 <a href="https://www.google.cn/chrome/"> 谷歌浏览器 </a> </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="quiteInstall">取 消</el-button>
                <el-button type="primary" @click="goInstall">去下载</el-button>
            </span>
            </el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return {
            dialogVisible:true, // 弹出遮罩层判断用户使用的浏览器是否支持直播
            warnText:"",        // 提示用语 
        }
    },
    created(){
        this.nonsupport()
    },
    methods:{
            goInstall(){  // 用户点击去下载跳转到谷歌浏览器
            window.location.href("https://www.google.cn/chrome/");
            },
            quiteInstall(){ // 用户点击取消
                window.opener=null;
                window.open(' ','_self');
                window.close()
            },
            nonsupport(text){
                this.warnText = "当前浏览器暂不支持老师直播功能" 
                this.dialogVisible = true;
            },
    }
}
</script>
<style lang="scss">
    .box{
        height: 100vh;
    }
</style>