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