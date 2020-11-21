import Vue from 'vue'
import Vuex from 'vuex'
import {queryAllGrade,queryAllSubjects} from "@/network/officeCenter"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    classList:[{name:"默认值",id:1}], //所有年级数据
    subjectList:[],   //获取所有课程科目
  },
  mutations: {
    setClassList(state,list){
      if(Array.isArray(list)&&list.length>0){
        state.classList=list
      }
    },
    setSubjectList(state,list){
      if(Array.isArray(list)&&list.length>0){
        state.subjectList=list
      }
    }
  },
  actions: {
    // 获取所有年纪数据
    async getClassList(context){
      // 发送ajax 异步请求
     let res =await queryAllGrade();
     let teamArr=res.unshift({name:"全部",id:""})
     context.commit('setClassList',res);
    },
  // 获取所有科目
    async getSubjectList(context){
      let res =await queryAllSubjects();
      res.unshift({name:"全部",id:""})
      context.commit('setSubjectList',res);
    }

  },
  modules: {
  }
})
