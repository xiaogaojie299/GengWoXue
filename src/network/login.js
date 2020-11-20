import request from './request';
import qs from "./qs"
let base = "/base/web/user/";
let api = "/api/web/user/";
// 手机验证码登录
export function captchaLogin(data) {
    return request({
        url: base + "captchaLogin"+qs(data),
    })
}
// 获取验证码 //1:注册 2.登录（修改密码校验） 3.更换手机号
export function queryCaptcha(data) {
    return request({
        url: base + "queryCaptcha"+qs(data),
    })
}
export function test(){
    postType();
    return request({
        //http://139.9.154.145/teacher-server/base/web/user/queryCaptcha
        url:'http://139.9.154.145/teacher-server/base/web/user/queryCaptcha?phone=18328510362&type=2'
    })
}
// 验证短信验证码
export function checkCaptcha(data) {
    return request({
        url: base + "checkCaptcha"+qs(data),
    })
}
// 密码登录
export function passwordLogin(data) {
    console.log("调用密码登录接口",);
    return request({
        url: base + 'passwordLogin',
        method: "post",
        data: data
    })
}
//  忘记密码操作
export function forgetPassword(data){
    console.log("data=",data);
    return request({
        url: base + 'passwordLogin',
        data: data
    })
}