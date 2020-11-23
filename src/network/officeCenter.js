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
    return request({
        url:api+"queryAllCourseware"+qs(data),
    })
}
// 获取排课详情
export function queryCourseInfoDate(data){
    return request({
        url:api+"queryCourseInfoDate"+qs(data),
    })
}
// 获取排课详情中的列表数据
export function queryCourseInfo(data){
    return request({
        url:api+"queryCourseInfo"+qs(data)
    })
}
// 提醒学生做题操作
export function remindTheProblem(data){
    return request({
        url:api+"remindTheProblem"+qs(data)
    })
}
//获取我的班级的列表数据
export function queryMyAllClassList(data){
    console.log(data);
    return request({
        url:api+"queryMyAllClassList"+qs(data)
    })
}
//获取班级学生列表数据
export function queryClassStudent(data){
    return request({
        url:api+"queryClassStudent"+qs(data)
    })
}
// 获取学生成长纪录列表
export function queryEvaluationList(data){
    return request({
        url:api+"queryEvaluationList"+qs(data)
    })
}