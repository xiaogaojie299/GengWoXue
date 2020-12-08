<template>
  <div class="nav">
    <div class="nav-main">
      <!-- 左侧标题 -->
      <div class="left-box">
        <div class="left-title">
          <!-- 图片 -->
          <img src="@/assets/img/logo_slices/logo.png" alt="" />
          <span></span>
        </div>
        <!-- 中间导航栏 -->
        <div class="navbar">
          <div
            v-for="(item, index) in navBarList"
            :key="index"
            :class="{
              'navbar-item': true,
              hand:true,
              active1: $route.path.indexOf(item.path) != -1,
            }"
            @click="checkRouter(item.path)"
          >
            <!-- :class="{ 'navbar-item': true, active: item.path == $route.path }" -->
            {{ item.title }}
            <span
              :class="{
                inline: true,
                active: $route.path.indexOf(item.path) != -1,
              }"
            ></span>
          </div>
          <!-- <div @click="go_personalCenter()">个人中心</div> -->
        </div>
      </div>

      <!-- 右侧登陆注册 -->
      <div class="right-content">
        <!-- <button @click="go_personalCenter">个人中心</button> -->
        <!-- 客服电话 -->
        <div class="kf-box">
          <!-- Icon -->
         <img class="kf-icon" src="@/assets/img/navbar/icon_phone.png" alt="" />
          <!-- 数字 -->
          <div class="num">{{kfList.content}}</div>
        </div>
        <!-- 登录注册 -->
        <div
        v-if="!userInfo.nickname"
          :class="{ regist: true, active1: $route.path.indexOf('/register') != -1 }"
          @click="go_register"
        >
          登录/注册
          <span
            :class="{ inline: true, active: $route.path.indexOf('/register') != -1 }"
          ></span>
        </div>
        <!-- 登录成功后端样式 -->
        <div v-else class="reg-succes">
          <div style="position: relative">
          <img @click="go_msgCenter" class="icon_envelope" src="@/assets/img/navbar/icon_envelope.png" alt="">
          <div class="num">1</div>
          </div>
          <img @click="go_personalCenter()" class="head-portrait" :src="userInfo.avatar" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {state,actions} from "vuex"
export default {
  data() {
    const url = "/page";
    return {
      navBarList: [
        { title: "首页", path: url + "/home" },
        { title: "问答广场", path: url + "/answersPlaza" },
        { title: "办公中心", path: url + "/officeCenter" },
        { title: "APP下载", path: url + "/appInstall" },
        { title: "关于我们", path: url + "/about" },
      ],
      userInfo:JSON.parse(localStorage.getItem("userInfo")),
     
    };
  },
  computed: {
       //所有未读的消息条数
     msgTotal(){
       return this.$store.state.msgCenterList.total
     },
     kfList(){
       return this.$store.state.KfList
     }
  },
    created(){
      this.init()
      console.log(this.$store.state);
  },
  methods: {
    // 初始化
    init(){
      // vuex里的获取消息列表，在这里调用，然后去消息中心在调用，麻烦！！！可以用vuex中的数据可持续存储（百度）
      let data={
        current:1,    //页码
        size:10,       //条数
        read:1,
        type:3
      }
      this.$store.dispatch('getMessageList', data);
      this.$store.dispatch('getKfList',1);
    },
    /* 跳转写的有点啰嗦。可以封装一个方法 */
    // 点击nav-bar切换路由
    checkRouter(path) {
      this.$router.push({
        path,
      });
      console.log("$router", this.$route);
      // this.activeRouter=this.$route.path;
    },
    go_personalCenter() {
      console.log("跳转到个人中心");
      this.$router.push({
        path: "/page/personalCenter/personal",
      });
    },
    go_msgCenter(){
      this.$router.push({
        path: "/page/msgCenter",
      });
    },
    // 点击跳转到登录注册页面
    go_register() {
      this.$router.push({
        path: "/page/register",
      });
    },
    // 获取消息列表
  }

};
</script>
<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 80px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
   box-shadow: 1px 13px 18px 0px rgba(233, 233, 233, 0.3);
}
.nav-main{
   width: 1400px;
  margin: 0 auto;
  // background: #ffffff;
  // box-shadow: 1px 13px 18px 0px rgba(233, 233, 233, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left-box {
  display: flex;
}
.left-title {
  // border: 1px solid red;
  width: 162px;
  /* height: 34px; */
  margin-right: 20px;
  color: #eb002a;
  // border-right: 2px solid #E0E0E0;
  display: flex;
  align-items: center;
  position: relative;
}
.left-title > span {
  height: 34px;
  width: 2px;
  background: #E0E0E0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
}
.left-title > img {
  width: 107px;
  height: 34px;
}
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.navbar > .navbar-item {
  position: relative;
  margin-right: 86px;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  /* color: #191616; */
  line-height: 32px;
  height: 80px;
}
/* 下面横线 */
.inline {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 44px;
  height: 4px;
}
.right-content,
.kf-box,
.regist,
.reg-succes,
.navbar > .navbar-item {
  display: flex;
  align-items: center;
}
.kf-box > .kf-icon {
  width: 22px;
  height: 22px;
  margin-right: 4px;
}
.kf-box > .num {
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  white-space: nowrap;
}
.regist {
  position: relative;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  margin-left: 10px;
  height: 80px;
}

/* 鼠标悬停后的样式 */
.navbar > .navbar-item:hover > .inline {
  border-bottom: 4px solid #eb002a;
}
.navbar-item:hover {
  color: #eb002a;
}
.active {
  border-bottom: 4px solid #eb002a;
  border-radius: 2px;
}
.active1 {
  color: #eb002a;
}
.regist:hover > .inline {
  border-bottom: 4px solid #eb002a;
}
.regist:hover {
  color: #eb002a;
}
.reg-succes{
  margin-left:22px;
  width: 120px;
  justify-content: space-between;
}
.reg-succes .icon_envelope{
  width: 30px;
  height: 30px;
}
.reg-succes .num{
  position: relative;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
height: 16px;
background: #EB002A;
border-radius: 50%;
top:0;
right:0;
transform: translateX(50%);
font-size: 6px;
font-family: Source Han Sans CN;
font-weight: 400;
color: #FFFFFF;

}
.reg-succes>.head-portrait{
  width: 64px;
height: 64px;
border-radius: 50%;
background: #000;
}
</style>
