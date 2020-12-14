import request from './request';
import qs from "./qs"
let api = "/api/web/message/";
//获取我的通知
export function queryMessageList(data){
    return request({
        url:api+"queryMessageList"+qs(data)
    })
}
//置为已读操作
export function optSetRead(data){
    return request({
        url:api+"optSetRead"+qs(data)
    })
}
// 获取客服
export function querySystemSetByType(data){
    return request({
        url:"/base/web/agreement/querySystemSetByType"+qs(data)
    })
    //http://139.9.154.145/teacher/api/web/message/querySystemSetByType?type=1
    //http://139.9.154.145/teacher-server/base/web/agreement/querySystemSetByType?type=1

}
// 获取未读消息总数
export function queryNoReadNumber(){
    return request({
       url:"/api/web/message/queryNoReadNumber" 
    })
}