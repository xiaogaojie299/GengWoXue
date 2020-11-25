import request from "./request";
import qs from "./qs";
let api = "/api/web/teacher/";
// 获取个人资料
export function queryPersonalData(){
    return request({
        url:api+"queryPersonalData"
    })
}
// 修改我的个人资料
export function optPersonalData(data){
    return request({
        url:api+"optPersonalData"+qs(data)
    })
}
//重置密码
export function optResetPassword(data){
    return request({
        url:api+"optResetPassword"+qs(data)
    })
}
// 获取我的反馈记录
export function queryFeedbackList(data){
    return request({
        url:api+"queryFeedbackList"+qs(data)
    })
}
// 提交反馈
export function optFeedback(data){
    return request({
        url:api+"optFeedback"+qs(data)
    })
}