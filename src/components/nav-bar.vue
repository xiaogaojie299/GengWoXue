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
              hand: true,
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
      <div class="cooperation hand">
          <span @click="goTeacherCooperation">招募/合作</span>
         <div class="choice">
            <a @click="goTeacherCooperation">老师入驻</a>
            <a @click="goOrganizationCooperation">机构入驻</a>
          </div>
      </div>
      <!-- 右侧登陆注册 -->
      <div class="right-content">
        <!-- 客服电话 -->
        <div class="kf-box">
          <!-- Icon -->
          <img
            class="kf-icon"
            src="@/assets/img/navbar/icon_phone.png"
            alt=""
          />
          <!-- 数字 -->
          <div class="num">{{ KfInfo.content }}</div>
        </div>
        <!-- 登录注册 -->
        <div
          v-if="!userInfo.nickname"
          :class="{
            regist: true,
            active1: $route.path.indexOf('/register') != -1,
            hand:true
          }"
          @click="go_register"
        >
          登录/注册
          <span
            :class="{
              inline: true,
              active: $route.path.indexOf('/register') != -1,
            }"
          ></span>
        </div>
        <!-- <div><el-button @click="go_register">退出登陆</el-button></div> -->
        <!-- 登录成功后样式 -->
        <div v-else class="reg-succes hand">
          <div style="position: relative">
            <img
              @click="go_msgCenter"
              class="icon_envelope"
              src="@/assets/img/navbar/icon_envelope.png"
              alt=""
            />
            <div class="num">{{msgNum}}</div>
          </div>

          <div style="position: relative; width: 64px; height: 64px">
            <div @click="go_personalCenter" class="head-photo">
              <el-dropdown @command="go_register">
                <span class="el-dropdown-link">
                  下拉菜单下拉菜单下拉菜单下拉菜单下拉菜单下拉菜单下拉菜单
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <img class="head-portrait" :src="userImg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import preventBack from "vue-prevent-browser-back";
import { state, mutations, actions } from "vuex";
export default {
  // mixins: [preventBack],
  data() {
    const url = "/page";
    return {
      navBarList: [
        { title: "首页", path: url + "/home" },
        { title: "问答广场", path: url + "/answersPlaza" },
        { title: "办公中心", path: url + "/officeCenter" },
        { title: "APP下载", path: url + "/appInstall" },
        { title: "关于我们", path: url + "/about" },
        // { title:"入驻/合作", path: url + "/coIndex",isHover:true}
      ],
      options: [{ name: "退出登录" }],
    };
  },
  computed: {
    //所有未读的消息条数
    // msgTotal() {
    //   return this.$store.state.msgCenterList.total;
    // },
    KfInfo() {
      return this.$store.state.kfInfo;
    },
    userInfo() {
      return this.$store.state.userInfo;
    },
    userImg() {
      return this.$store.state.userImg;
    },
    msgNum(){
      return this.$store.state.unread;
    },
    token(){
      return this.$store.state.userInfo.token;
    }
  },
  mounted() {},
  created() {
    this.init();
    console.log(this.$store.state);
  },
  methods: {
    // 初始化
    init() {
      // vuex里的获取消息列表，在这里调用，然后去消息中心在调用，麻烦！！！可以用vuex中的数据可持续存储（百度）
      let data = {
        current: 1, //页码
        size: 10, //条数
        read: 1,
        type: 3,
      };
      this.$store.dispatch("getMessageList", data);
      // this.$store.dispatch()
    },
    quite() {
      console.log("跳转成功");
    },
    /* 跳转写的有点啰嗦。可以封装一个方法 */
    // 点击nav-bar切换路由
    checkRouter(path) {
      this.$router.push({
        path,
      });
      this.$store.commit("setOfficeCenterIndex", 1);
      this.$store.commit("setPersonalIndex", 1);
      // this.activeRouter=this.$route.path;
    },
    go_personalCenter() {
      console.log("跳转到个人中心");
      this.$store.dispatch("getPersonalData");
      this.$router.push({
        path: "/page/personalCenter/personal",
      });
    },
    go_msgCenter() {
      this.$router.push({
        path: "/page/msgCenter",
      });
    },
    // 点击跳转到登录注册页面
    go_register() {
      this.$router.push({
        path: "/page/register",
      });
      this.$store.commit("setToken", "");
      this.$store.commit("setUserInfo", {});
      // history.pushState(null, null, document.URL);
      //           window.addEventListener("popstate",function(e) {
      //               history.pushState(null, null, document.URL);
      // }, false);
    },
    // 获取消息列表
      goTeacherCooperation() {
      if(this.token){
        this.$router.push("/page/coIndex/teacherCo").catch((err) => err);
      }else{
        this.$myAlert("登录过后才能入驻哦")
      }
    },
      goOrganizationCooperation() {
        if(this.thistoken){
               this.$router.push("/page/coIndex/organizatCo").catch((err) => err);
      }else{
        this.$myAlert("登录过后才能入驻哦")
      }
      },
  },
};
</script>
<style lang="scss" scoped>
/deep/ .el-dropdown {
  opacity: 0;
  padding: 0;
  margin: 0;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid red; 
  overflow: hidden;
}
.nav {
  width: 100%;
  height: 80px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 13px 18px 0px rgba(233, 233, 233, 0.3);
}
.nav-main {
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
  width: 162px;
  /* height: 34px; */
  margin-right: 20px;
  color: #eb002a;
  display: flex;
  align-items: center;
  position: relative;
}
.left-title > span {
  height: 34px;
  width: 2px;
  background: #e0e0e0;
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
  flex-wrap: nowrap;
}
.navbar > .navbar-item {
  position: relative;
  margin-right: 56px;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  /* color: #191616; */
  line-height: 32px;
  height: 80px;
}
.cooperation{
  position: relative;
  height: 36px;
  width: 200px;
  span{
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    /* color: #191616; */
    line-height: 32px;
    height: 80px;
  }
  .choice {
          position: relative;
          display: none;
          height: 100px;
          width: 108px;
          padding-top: 10px;
          z-index: 9999;
          &::before {
            position: absolute;
            top: -10px;
            left: 45px;
            content: "";
            display: block;
            border: 10px solid transparent;
            border-bottom: 10px solid #ef753c;
          }
          &::after {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            display: block;
            border: 10px solid transparent;
          }
          a {
            display: block;
            width: 108px;
            height: 40px;
            background-color: #d0d0d0;
            color: #fff;
            font-size: 18px;
            text-align: center;
            line-height: 40px;
            &:hover {
              background-color: #ef753c;
            }
          }
        }
  &:hover {
    .choice {
      display: block;
    }
  }
}


.hezuo{
  display: none;
}
.navbar-item :last-child:hover>.hezuo{
  display: block;
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
.reg-succes {
  margin-left: 22px;
  width: 120px;
  justify-content: space-between;
}
.reg-succes .icon_envelope {
  width: 30px;
  height: 30px;
}
.reg-succes .num {
  position: relative;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background: #eb002a;
  border-radius: 50%;
  top: 0;
  right: 0;
  transform: translateX(50%);
  font-size: 6px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
}
.head-portrait {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
}
.head-photo {
  // pointer-events: none;
  position: absolute;
  z-index: 100;
}
</style>
