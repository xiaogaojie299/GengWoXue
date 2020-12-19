import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home.vue";
import curriculum from "@/views/curriculum/curriculum";
import AnswersPlaza from "@/views/answersPlaza/answers-plaza";
import OfficeCenter from "@/views/officeCenter/office-center";
import AppInstall from "@/views/appInstall/app-install";
import test2 from "@/views/officeCenter/office-center-child/test2.vue";
Vue.use(VueRouter);

const routes = [
  {path:'/',redirect: "/test"},
  {
    path: "/page",
    component: () => import("../views/Home1.vue"),
    children: [
      {
        path: "home",
        // redirect: "home",
        name: "Home",
        component: Home,
      },
      // 问答广场
      {
        path: "answersPlaza",
        name: "AnswersPlaza",
        component: AnswersPlaza,
        children: [
          {
            path: "",
            name: "问答中心",
            component: () => import("../views/answersPlaza/bg-img.vue"),
          },
          {
            path: "exercises-detail",
            name: "问答详情",
            component: () =>
              import("../views/answersPlaza/exercises-detail.vue"),
          },
          {
            path: "my-answer",
            name: "我要提问",
            component: () => import("../views/answersPlaza/my-answer.vue"),
          },
        ],
      },
      // 办公中心
      {
        path: "officeCenter",
        redirect: "officeCenter/OfficeCenterIndex",
        name: "OfficeCenter",
        component: () => import("../views/officeCenter/index.vue"),
        children: [
          {
            path: "OfficeCenterIndex",
            name: "OfficeCenterIndex",
            component: OfficeCenter,
            children: [
              // 个人中心首页
              {
                path: "test1",
                component: () =>
                  import("../views/officeCenter/office-center-child/test1.vue"),
              },
              // 课程详情
              {
                path: "test2",
                name: "test2",
                component: test2,
              },
              // 课件库
              {
                path: "kejianku",
                component: () =>
                  import(
                    "../views/officeCenter/office-center-child/kejianku.vue"
                  ),
              },
              // 我的课件
              {
                path: "myKejian",
                component: () =>
                  import(
                    "../views/officeCenter/office-center-child/my-kejian.vue"
                  ),
              },
              // 我的班级
              {
                path: "myClass",
                component: () =>
                  import(
                    "../views/officeCenter/office-center-child/my-class.vue"
                  ),
              },
              // 班级评测
              {
                path: "evaluation",
                component: () =>
                  import(
                    "../views/officeCenter/office-center-child/evaluation.vue"
                  ),
              },

              // 我的学生
              {
                path: "student",
                component: () =>
                  import(
                    "../views/officeCenter/office-center-child/student.vue"
                  ),
              },
              // 学生详情页面
              {
                path: "studentDetail",
                component: () =>
                  import(
                    "../views/officeCenter/office-center-child/student-detail.vue"
                  ),
              },
            ],
          },
          // 批阅作业
          {
            path: "readwork",
            name: "readwork",
            component: () => import("../views/officeCenter/readwork.vue"),
          },
          // 测评详解
          {
            path: "evaluationDetail",
            component: () =>
              import("../views/officeCenter/evaluation-detail.vue"),
          },
        ],
      },
      // APP下载
      {
        path: "appInstall",
        name: "AppInstall",
        component: AppInstall,
      },
      // 课程
      {
        path: "curriculum",
        name: "curriculum",
        component: curriculum,
      },
      // 关于我们
      {
        path: "about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About/About.vue"),
      },
      // 登录/注册
      {
        path: "register",
        name: "register",
        component: () => import("../views/register/register.vue"),
      },
      // 消息中心
      {
        path: "msgCenter",
        name: "msgCenter",
        component: () => import("../views/messageCenter/index.vue"),
      },
      // 个人中心
      {
        path: "personalCenter",
        name: "personalCenter",
        component: () => import("../views/personalCenter/index.vue"),
        children: [
          {
            path: "personal",
            redirect: "personal/data/personal-info",
            name: "personal",
            component: () =>
              import("../views/personalCenter/router-child/personal.vue"),
            children: [
              {
                path: "data",
                name: "personal-data",
                component: () =>
                  import(
                    "../views/personalCenter/router-child/childCmps/personal-data.vue"
                  ),
                children: [
                  {
                    path: "account-security",
                    name: "account-security",
                    component: () =>
                      import(
                        "../views/personalCenter/router-child/childCmps/account-security.vue"
                      ),
                  },
                  {
                    path: "personal-info",
                    name: "personal-info",
                    component: () =>
                      import(
                        "../views/personalCenter/router-child/childCmps/personal-info.vue"
                      ),
                  },
                ],
              },

              {
                path: "promotion",
                name: "promotion",
                component: () =>
                  import(
                    "../views/personalCenter/router-child/childCmps/promotion.vue"
                  ),
              },

              // 反馈
              {
                path: "feedback",
                name: "feedback",
                component: () =>
                  import(
                    "../views/personalCenter/router-child/feedback/index.vue"
                  ),
              },
              // 历史反馈
              {
                path: "historyFeedback",
                name: "historyFeedback",
                component: () =>
                  import(
                    "../views/personalCenter/router-child/feedback/history.vue"
                  ),
              },
              // 我的钱包
              {
                path: "wallet",
                name: "wallet",
                component: () =>
                  import(
                    "../views/personalCenter/router-child/money/index.vue"
                  ),
              },
              // 充值金额
              {
                path: "recharge",
                name: "recharge",
                component: () =>
                  import(
                    "../views/personalCenter/router-child/money/router-child/money-recharge.vue"
                  ),
                children: [
                  {
                    path: "detail",
                    name: "detail",
                    component: () =>
                      import(
                        "../views/personalCenter/router-child/money/router-child/childCmps/pay-detail.vue"
                      ),
                  },
                  {
                    path: "succee",
                    name: "succee",
                    component: () =>
                      import(
                        "../views/personalCenter/router-child/money/router-child/childCmps/pay-success.vue"
                      ),
                  },
                ],
              },
              // 绑定支付宝
              {
                path: "bind",
                name: "bind",
                component: () =>
                  import(
                    "../views/personalCenter/router-child/money/router-child/bind.vue"
                  ),
              },
              // 提现金额
              {
                path: "withdraw",
                name: "withdraw",
                component: () =>
                  import(
                    "../views/personalCenter/router-child/money/router-child/withdraw.vue"
                  ),
              },
            ],
          },
        ],
      },
    ],
  },
  // 老师直播页面
  {
    path: "/teacherLive",
    name: "/teacherLive",
    component: () => import("../views/officeCenter/teacherLive.vue"),
  },
  // 测试页面
  {
    path: "/test",
    component: () => import("../views/test.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
