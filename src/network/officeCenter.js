import request from './request';
import qs from "./qs"
let api = "/api/officeCenter/";
// 获取给定日期的排课列表
export function queryDaySchedule(data){
    //http://139.9.154.145/teacher-server/api/officeCenter/queryDaySchedule?current=1&day=2020-11-09&size=10
    //http://139.9.154.145/teacher/api/web/officeCenter/queryDaySchedule?current=1&&size=10&&day=2020-11-20
    return request({
        url:api+"queryDaySchedule"+qs(data)
    })
}
// 获取教师每月中排课数量
export function queryTeacherSchedule(data){
    return request({
        url:api+"queryTeacherSchedule"+qs(data)
    })
}
// 获取所有年级
export function queryAllGrade(){
    return request({
        url:api+"queryAllGrade"
    })
}
// 获取所有科目
export function queryAllSubjects(){
    return request({
        url:api+"queryAllSubjects"
    })
}
// 获取课件库列表
export function queryAllCourseware(data){
    console.log("data",data);
    return request({
        url:api+"queryAllCourseware"+qs(data),
    })
}