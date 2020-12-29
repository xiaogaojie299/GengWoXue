<template>
    <div class="header">
      <div>
        <!-- <qrCode value="weixin://wxpay/bizpayurl?pr=iDuENF400" :options="{ size: 170 }"></qrCode> -->
        <vue-qr
          :size="191"
          :margin="0"
          :auto-color="true"
          :dot-scale="1"
          text="weixin://wxpay/bizpayurl?pr=iDuENF400" />
      </div>

      <el-button @click="go_live">测试跳转</el-button>
      <el-button @click="goJump">跳转注册</el-button>

      </div>
</template>
<script>
let routerUrl='/page/officeCenter/OfficeCenterIndex/';
import {mapState,mapActions} from "vuex"
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    computed:{
      userInfo(){
        return this.$store.state.userInfo
      }
    },
    methods:{

      qrcode () {
                let that = this;
                let qrcode = new qrCode('qrcode', {
                    width: 124,
                    height: 124,        // 高度
                    text:  "weixin://wxpay/bizpayurl?pr=iDuENF400",   // 二维码内容
                    // render: 'canvas' ,   // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
                    // background: '#f0f',   // 背景色
                    // foreground: '#ff0'    // 前景色
                })
            },
            goJump(){
               window.open("http://m.xiaogaojie.vip:717/#/"+"?type=2&invitation=33");
            },
      go_live(){
        this.$myMessage("错误消息","error")
        let params = {id:2,scheduleId:2,caurseName:"火箭班直播",teacherName:"肖高杰"};
        params.teacherId = this.userInfo.id;
        params.token = this.userInfo.token;
        params = JSON.stringify(params)
        // window.open("http://www.xiaogaojie.vip:99/"+"?params="+encodeURIComponent(params));
        // this.$router.push({
        //   path:"/test",
        //   query:{
        //     params:params
        //   }
        // })
        // window.open("")
        console.log(location.search)
      },
        go_url(path){
            console.log('跳转成功');
            this.$router.push({
                path:routerUrl+path
            })
        },
        created() {
          console.log("执行成功");
           this.$nextTick (function () {
       this.qrcode();
    })
        },
    }
  };
</script>

<style lang="scss" scoped>
/deep/ .el-menu-item.is-active{
background: linear-gradient(110deg, #F13232, #EF763C);
font-size: 10px;
font-family: Source Han Sans CN;
font-weight: 500;
color: #FFFFFF;
}
// 修改左侧导航栏选中时的样式
    .el-menu-item:hover{
        // background-color: #EF703C !important;
        // color: #38B2FF !important;
        
    }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
    
  }
</style>
