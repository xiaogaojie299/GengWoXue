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
// 充值中心
export function recharge(data){
    return request({
        url:api+"recharge"+qs(data)
    })
}
// 提现记录
export function withdrawal(data){
    return request({
        url:api+"withdrawal"+qs(data)
    })
}
// 绑定支付宝
export function bindingAccount(data){
    return request({
        url:api+"bindingAccount"+qs(data)
    })
}
// 我的钱包充值记录
export function queryMyBalanceChange(data){
    return request({
        url:api+"queryMyBalanceChange"+qs(data)
    })
}
// 获取推广中心照片
export function queryExtensionImg(){
    return request({
        url:api+"queryExtensionImg"
    })
}
// 获取推广历史记录
export function queryRechargeRecordList(data){
    return request({
        url:api+"queryRechargeRecordList"+qs(data)
    })
}