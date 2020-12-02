import Vue from "vue";
import Vuex from "vuex";
import { queryAllGrade, queryAllSubjects } from "@/network/officeCenter";
import {
  queryMessageList,
  querySystemSetByType,
} from "@/network/messageCenter";
import { queryPersonalData } from "@/network/personalCenter";
import { captchaLogin } from "@/network/login";
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
  },
  actions: {
    //获取登录状态的token
    async getToken(context, data) {
      console.log(data);
      let res = await captchaLogin(data.data);
      context.commit("setToken", res.token);
      data.$router.push({
        path: "/page/home",
      });
    },
    // 获取所有年纪数据
    async getClassList(context) {
      // 发送ajax 异步请求
      let res = await queryAllGrade();
      let teamArr = res.unshift({ name: "全部", id: "" });
      context.commit("setClassList", res);
    },
    // 获取所有科目
    async getSubjectList(context) {
      let res = await queryAllSubjects();
      res.unshift({ name: "全部", id: "" });
      context.commit("setSubjectList", res);
    },
    //获取消息通知列表
    async getMessageList(context, data) {
      console.log("data==>", data);
      let res = await queryMessageList(data);
      res.forEach((item) => {
        item.ischeckout;
      });
      context.commit("setMsgCenterList", res);
    },
    // 获取客服列表
    async getKfList(context, data) {
      let pamars = { type: data };
      let res = await querySystemSetByType(pamars);
      context.commit("setKfList", res);
    },
    //获取个人资料
    async getPersonalData(context) {
      let res = await queryPersonalData();
      context.commit("setinfoList", res);
    },
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
