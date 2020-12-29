import Vue from "vue";
import Vuex from "vuex";
import { queryAllGrade, queryAllSubjects } from "@/network/officeCenter";
import {
  queryMessageList,
  querySystemSetByType,
} from "@/network/messageCenter";
import { queryPersonalData } from "@/network/personalCenter";
import { captchaLogin } from "@/network/login";
import {queryNoReadNumber} from "@/network/messageCenter"
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    classList: [{ name: "默认值", id: 1 }], //所有年级数据
    subjectList: [], //获取所有课程科目
    msgCenterList: [], //获取所有未读消息
    kfList: [], //获取客服电话，引导页，推广中心图片
    infoList: [], //获取用户信息列表
    token: "", //登录token
    userInfo: {}, //登录成功后返回的列表
    personalIndex: "", //我的个人中心左侧的导航栏的下标选择
    officeCenterIndex: "", //办公中心下拉框
    userImg: "",      //用户头像
    kfInfo: {},       //客服电话
    unread:{},        //未读消息条数  
  },
  mutations: {
    setClassList(state, list) {
      if (Array.isArray(list) && list.length > 0) {
        state.classList = list;
      }
    },
    setSubjectList(state, list) {
      if (Array.isArray(list) && list.length > 0) {
        state.subjectList = list;
      }
    },
    setMsgCenterList(state, list) {
      state.msgCenterList = list;
    },
    setKfList(state, list) {
      state.KfList = list;
    },
    setinfoList(state, list) {
      state.infoList = list;
    },
    setToken(state, value) {
      state.token = value;
    },
    setUserInfo(state, value) {
      state.userInfo = value;
    },
    setPersonalIndex(state, value) {
      state.personalIndex = "" + value;
    },
    setOfficeCenterIndex(state, value) {
      state.officeCenterIndex = "" + value;
    },
    setUserImg(state, value) {
      state.userImg = value;
    },
    setKfInfo(state, value) {
      state.kfInfo = value;
    },
    setUnread(state,value){
      state.unread = value
    }
  },
  actions: {
    //获取登录状态的token
    async getToken({ dispatch, commit }, params) {
      let res = await captchaLogin(params.data);
      console.log("res==》验证", res.data);
      // context.commit("setToken", res.data.token);
      commit("setUserInfo", res.data);
      commit("setUserImg", res.data.avatar);
      dispatch("getMessageList");
      dispatch("getUnread");     //调用获取未读消息展示
      // window.localStorage.setItem("userInfo", res.data);
      // window.localStorage.setItem("token",res.data.token);
      params.$router.push({
        path: "/page/home",
      });
    },
    //清空登录状态的token
    cearToken(context) {
      context.commit("setToken", "");
      window.localStorage.setItem("token", " ");
    },
    // 获取所有年纪数据
    async getClassList(context) {
      // 发送ajax 异步请求
      let res = await queryAllGrade();
      let teamArr = res.data.unshift({ name: "全部", id: "" });
      context.commit("setClassList", res.data);
    },
    // 获取所有科目
    async getSubjectList(context) {
      let res = await queryAllSubjects();
      let { code, data } = res;
      data.unshift({ name: "全部", id: "" });
      console.log("获取年级=", data);
      context.commit("setSubjectList", data);
    },
    //获取消息通知列表
    async getMessageList(
      context,
      data = {
        current: 1, //页码
        size: 10, //条数
        read: 1,
        type: 3,
      }
    ) {
      data || console.log("data==>", data);
      let res = await queryMessageList(data);
      console.log("res==123", res);
      // res.data.forEach((item) => {
      //   item.ischeckout;
      // });
      context.commit("setMsgCenterList", res.data );
    },
    // 获取客服列表
    async getKfList(context, data) {
      let pamars = { type: data };
      let res = await querySystemSetByType(pamars);
      console.log("客服", res.data);
      // context.commit("setKfList", res.data);
      context.commit("setKfInfo", res.data);
    },
    //获取个人资料
    async getPersonalData(context) {
      let res = await queryPersonalData();
      console.log("获取个人资料成功");
      context.commit("setinfoList", res.data);
      context.commit("setUserImg".res.data.avatar);
    },
    // 获取所有未读消息条数
    async getUnread(context){
      let {code,data} =await queryNoReadNumber();
      if(code==200){
        let msgTotal = Number(data.notice)+Number(data.activity);
        console.log("msgTotal==",msgTotal);
        context.commit("setUnread", msgTotal);
      }
    }
  },
  modules: {},
  plugins: [createPersistedState()], //默认情况是存储在localStory中
  //   plugins: [createPersistedState({
  //     storage: window.sessionStorage,
  //     reducer (val) {
  //         return {
  //             guideId: val.guideId,
  //             _StaffLoginInfo: val._StaffLoginInfo
  //         };
  //     }
  // })],
});
