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
