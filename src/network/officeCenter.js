import request from "./request";
import qs from "./qs";
let api = "/api/officeCenter/";
// 获取给定日期的排课列表
export function queryDaySchedule(data) {
  //http://139.9.154.145/teacher-server/api/officeCenter/queryDaySchedule?current=1&day=2020-11-09&size=10
  //http://139.9.154.145/teacher/api/web/officeCenter/queryDaySchedule?current=1&&size=10&&day=2020-11-20
  return request({
    url: api + "queryDaySchedule" + qs(data),
  });
}
// 获取教师每月中排课数量
export function queryTeacherSchedule(data) {
  return request({
    url: api + "queryTeacherSchedule" + qs(data),
  });
}
// 获取所有年级
export function queryAllGrade() {
  return request({
    url: api + "queryAllGrade",
  });
}
// 获取所有科目
export function queryAllSubjects() {
  return request({
    url: api + "queryAllSubjects",
  });
}
// 获取课件库列表
export function queryAllCourseware(data) {
  return request({
    url: api + "queryAllCourseware" + qs(data),
  });
}
//获取我的课件库列表
export function queryMyAllCourseware(data){
  return request({
    url:api+"queryMyAllCourseware"+qs(data)
  })
}
// 删除我的课件
export function delMyCourseware(data){
  return request({
    url:api+"delMyCourseware"+qs(data)
  })
}
// 获取排课详情
export function queryCourseInfoDate(data) {
  return request({
    url: api + "queryCourseInfoDate" + qs(data),
  });
}
// 获取排课详情中的列表数据
export function queryCourseInfo(data) {
  return request({
    url: api + "queryCourseInfo" + qs(data),
  });
}
// 提醒学生做题操作
export function remindTheProblem(data) {
  return request({
    url: api + "remindTheProblem" + qs(data),
  });
}
//获取我的班级的列表数据
export function queryMyAllClassList(data) {
  console.log(data);
  return request({
    url: api + "queryMyAllClassList" + qs(data),
  });
}
//获取班级学生列表数据
export function queryClassStudent(data) {
  return request({
    url: api + "queryClassStudent" + qs(data),
  });
}
// 获取学生成长纪录列表
export function queryEvaluationList(data) {
  return request({
    url: api + "queryEvaluationList" + qs(data),
  });
}
// 获取班级测评列表
export function queryClassEvaluation(data) {
  return request({
    url: api + "queryClassEvaluation" + qs(data),
  });
}
//获取我的学生列表(按学生名字查询)
export function queryAllMyStudent(data){
  return request({
    url:api+"queryAllMyStudent"+qs(data)
  })
}
//  获取可以修改的课后练习题列表
export function queryTestPaperList(data){
  return request({
    url:"/api/testPaper/queryTestPaperList"+qs(data),
  })
}

//上传课件习题
export function uploadTestFile(data){
  return request({
    url:api+"uploadTestFile"+qs(data)
  })
}
//获取关于我们
export function queryAboutUs(){
  return request({
    url:"/base/officeCenter/queryAboutUs"
  })
}

//课件上传
export function saveMyCourseware(data){
  return request({
    url:api+"saveMyCourseware"+qs(data)
  })
}

//根据学生考试关系id获取考试详情
export function queryExaminationInfo(data){
  return request({
    url:api+"queryExaminationInfo"+qs(data)
  })
}
//根据学生排课ID获取完成作业情况  //课程详情页面 table表格
export function queryAnswerInfo(data){
  return request({
    url:api+"queryAnswerInfo"+qs(data)
  })
}

// 下载付费课件
export function addCoursewareOrder(data){
  return request({
    url:api+"addCoursewareOrder"+qs(data)
  })
}
// 查询充值结果
export function queryCoursewareOrder(data){
  return request({
      url:api+"queryCoursewareOrder"+qs(data)
  })
}

// 提交阅卷激励
export function saveExamines(data){
  return request({
    url:api+"saveExamines?"+data,
  })
}

//发布成绩
export function pushExamination(data){
  return request({
    url:api+"pushExamination"+qs(data)
  })
}

// 保存上课情况
export function saveScheduleContent(data){
  return request({
    url:api + "saveScheduleContent"+qs(data)
  })
}

// 课件下载计数器
export function downloadCoursewareCount(data){
  return request({
    url:api + "downloadCoursewareCount"+qs(data)
  })
}