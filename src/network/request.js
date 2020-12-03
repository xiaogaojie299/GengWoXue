import axios from "axios";
import vue from "../main";
import { BASE_URL, TIMEOUT } from "./config";
let token = localStorage.getItem("token");
const instance = axios.create({
  baseURL: BASE_URL,
  method: "POST",
});
// instance.defaults.withCredentials=true;
instance.interceptors.request.use(
  (config) => {
    // 1.发送网络请求时, 在界面的中间位置显示Loading的组件
    console.log("token=", token);
    // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面
    if (token) {
      config.headers.Authorization = "Bearer" + " " + token;
    } else {
      vue.$router.push({ path: "/page/register" });
    }
    // 3.params/data序列化的操作
    return config;
  },
  (err) => {}
);

instance.interceptors.response.use(
  (res) => {
    console.log("http=", res.data);
    if (res.data.code == 200) {
      return res.data;
    } else {
      // vue.$myAlert(res.data.msg || res.data.message);
      switch (res.data.code) {
        case 700:
          vue.$router.push({ path: "/page/register" });
      }
    }
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          alert("请求错误");
          break;
        case 401:
          alert("未授权访问");
          break;
        case 404:
          alert("参数传递错误");
          break;
        default:
          alert("其他错误信息");
      }
    }
    return err;
  }
);

export default instance;
