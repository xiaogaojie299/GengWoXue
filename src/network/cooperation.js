import qs from "./qs"
import request from "./request" 
export const optTeacherApply = (params) => { //【成为老师】申请操作
    let url = "/base/web/user/optTeacherApply"+qs(params);
    return request(url)
}; 
export const optMechanismApply = (params) => { //【机构合作】申请操作
    let url ="/base/web/user/optMechanismApply"+qs(params);
    return request(url)
}; 
export const getCityJson = (params) => {
    // http://139.9.154.145:81/student-server/base/app/agreement/getCityJson?parentId=0
    let url = "https://gengwoxue.com/student/base/app/agreement/getCityJson"+qs(params);
    return request(url)
} 