// const devBaseURL = "http://192.168.0.80/teacher";
// const devBaseURL = "http://139.9.154.145/";
const proBaseURL = "https://gengwoxue.com:443/";
const devBaseURL = "https://gengwoxue.com:443/";
export const studentURL = "https://gengwoxue.com:8444/index.html"      //学生端
export const studentLiveURL = "https://gengwoxue.com:8444/live/index.html"  //学生直播端
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;
export const TIMEOUT = 5000;