import qs from "./qs"
import request from "./request"
let base ="/base/web/agreement/"
let api="/api/web/index/"
export function queryBanner(data){
    return request({
         url:base+"queryBannerListByType"+qs(data)
    })
}
// 获取所有科目
export function queryAllSubjects(data){
    return request({
        url:base+"queryAllSubjects"+qs(data)
    })
}
// 获取老师课时数排行
export function queryClassHourRand(){
    return request({
        url:api+"queryClassHourRand"
    })
}
// 获取老师推广人数排行
export function queryExtensionRand(){
    return request({
        url:api+"queryExtensionRand"
    })
}
// 查询今日课程
export function queryTodayCourse(data){
    return request({
        url:api+"queryTodayCourse",
        data,
    })
}
// APP下载
export function querySystemSetByType(){
    return request({
        url:"base/web/agreement/querySystemSetByType",
    })
}