import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

//组件异步加载

//评分系统介绍
const GradeIntroduce = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/grade-introduce/grade-introduce"));
     }, 'GradeIntroduce');
};

//资讯
const consultDate = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/consult/consultDate"));
     }, 'consultDate');
};

//严选
const bestChoice = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/bestChoice/bestChoice"));
     }, 'bestChoice');
};
//关于
const about = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/about/about"));
     }, 'about');
};
//用户协议
const AdminText = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/admintext/admintext"));
     }, 'AdminText');
};
//消息详情
const Newsdate = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/newsdate/newsdate"));
     }, 'Newsdate');
};

//规划设计测评报告
const Projects = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/projects/projects"));
     }, 'Projects');
};
//施工质量测评报告
const Quality = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/quality/quality"));
     }, 'Quality');
};
//施工质量测评报告
const Config = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/configureReport/configureReport"));
     }, 'Config');
};
//严选分享
const ObShare = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/obshare/obshare"));
     }, 'ObShare');
};
//优惠咨询
const Information = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/obshare/information"));
     }, 'Information');
};

//規劃落實評測
const Programme = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/programme/programme"));
     }, 'Programme');
};

//建筑规划落实介绍
const Gb_architcture = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/gb_text/gb_architecture"));
     }, 'Gb_architcture');
};

//园区规划落实介绍
const Gb_park = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/gb_text/gb_park"));
     }, 'Gb_park');
};

//物业评测报告
const Tenement = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/tenement/tenement"));
     }, 'Tenement');
};

//景观评测报告
const Landscape = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/landscape/landscape"));
     }, 'Landscape');
};
//其他城市已入住楼盘景观展示
const Landscape_other = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/landscape_other/landscape_other"));
     }, 'Landscape_other');
};
// //高德地图
// const Amap = function (resolve) {
//           require.ensure([], function () {
//                     resolve(require("@/components/amap/amap"));
//           }, 'Amap');
// };

//720
// const Ifrem = function (resolve) {
//           require.ensure([], function () {
//                     resolve(require("@/components/ifrem/ifrem"));
//           }, 'Ifrem');
// };
// //720
// const Ifream = function (resolve) {
//           require.ensure([], function () {
//                     resolve(require("@/components/ifream/ifream"));
//           }, 'Ifream');
// };
//全流程监控
const Monitoring = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/monitoring/monitoring"));
     }, 'Monitoring');
};
//积分说明
const Integral = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/integral/integral"));
     }, 'Integral');
};
// 邀请码
const Invite = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/invite/invite"));
     }, 'Invite');
};

// 常见问题
const CommonProblem = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/commonproblem/commonproblem"));
     }, 'CommonProblem');
};

// 寻光计划
const SeekLight = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/seekLight/seeklight"));
     }, 'SeekLight');
};

// 寻光计划分享
// const ObshareSeekLight = function (resolve) {
//           require.ensure([], function () {
//                     resolve(require("@/components/obshareseeklight/obshareseeklight"));
//           }, 'ObshareSeekLight');
// };

// 积分兑换红包
const IntegralConvert = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/integralconvert/integralconvert"));
     }, 'IntegralConvert');
};

// 邀请有赏
const SendNvite = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/sendnvite/sendnvite"));
     }, 'SendNvite');
};

// 保密协议
const ConfidentialityAgreement = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/confidentialityAgreement/confidentialityAgreement"));
     }, 'ConfidentialityAgreement');
};

// 示例
const ViewExample = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/viewExample/viewExample"));
     }, 'ViewExample');
};

const obshareComment = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/obshareComment/obsharecomment"));
     }, 'obshareComment');
};

const Survey = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/survey/survey"));
     }, 'Survey');
};

const Liability = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/liability/liability"));
     }, 'Liability');
};
const Register = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/common/register"));
     }, 'Register');
};
const Login = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/login/login"));
     }, 'Login');
};
const LoginDown = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/login/logindown"));
     }, 'LoginDown');
};
const AnimateInput = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/animateInput/animateInput"));
     }, 'AnimateInput');
};
const AnimateInputOut = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/animateInput/animateInputOut"));
     }, 'AnimateInputOut');
};
const AnimateInputOver = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/animateInput/animateInputOver"));
     }, 'AnimateInputOver');
};
const AnimateInputLogin = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/animateInput/animateInputLogin"));
     }, 'AnimateInputLogin');
};
const CheckRoomTool = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/checkRoomTool/checkRoomTool"));
     }, 'CheckRoomTool');
};
const GetToolBox = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/checkRoomTool/getToolBox"));
     }, 'GetToolBox');
};
const IntroduceBox = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/checkRoomTool/introduceBox"));
     }, 'IntroduceBox');
};
const AtOnceHome = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/checkRoomTool/atOnceHome"));
     }, 'AtOnceHome');
};
const AllList = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/checkRoomTool/allList"));
     }, 'AllList');
};
const TestMethod = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/checkRoomTool/testMethod"));
     }, 'TestMethod');
};
const TestOver = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/checkRoomTool/testOver"));
     }, 'TestOver');
};
//验房工具-我的验房结果
const CheckRoomRecord = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/checkRoomTool/checkRoomRecord"));
     }, 'CheckRoomRecord');
};
//业主调查神器
const Artifact = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/artifact/artifact"));
     }, 'Artifact');
};
//验房结果详情页
const CheckRoomOver = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/checkRoomTool/checkRoomOver"));
     }, 'CheckRoomOver');
};
//抽奖活动
const Raffle = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/raffle/raffle"));
     }, 'Raffle');
};
//户型页面
const Housetype = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/housetype/housetype"));
     }, 'Housetype');
};
//楼盘评测分享
const Houseeval = function (resolve) {
     require.ensure([], function () {
          resolve(require("@/components/obshare/houseeval"))
     }, 'Houseeval')
}
//配置路由路径
export default new Router({
     //历史模式，可以划掉路径里边得‘/#/’字符
     // mode: 'history',
     routes: [
          //主页跳转评分系统
          {
               path: "/",
               name: "GradeIntroduce",
               component: GradeIntroduce
          },

          //资讯详情
          {
               path: "/consultDate/:city/:id",
               name: "consultDate",
               component: consultDate
          },

          //严选楼盘
          {
               path: "/bestChoice",
               name: "bestChoice",
               component: bestChoice
          },

          //关于鹰眼鉴房
          {
               path: "/about",
               name: "about",
               component: about
          },

          //用户协议
          {
               path: "/admintext",
               name: "adminText",
               component: AdminText
          },

          //上榜理由
          {
               path: "/newsdate/:id",
               name: "newsDate",
               component: Newsdate
          },

          //规划设计
          {
               path: "/projects/:id",
               name: "projects",
               component: Projects
          },

          //施工质量
          {
               path: "/quality/:id",
               name: "quality",
               component: Quality
          },

          //工程质量
          {
               path: "/config/:id",
               name: "config",
               component: Config
          },

          //严选楼盘分享
          {
               path: "/obshare/:id",
               name: "obshare",
               component: ObShare
          },
          //优惠咨询
          {
               path: '/information/:id',
               name: 'information',
               component: Information
          },
          //户型详情
          {
               path: '/housetype/:id/:arid',
               name: 'housetype',
               component: Housetype
          },
          // //资讯版本更新
          // {
          //           path: "/analyze/:id",
          //           name: "analyze",
          //           component: Analyze
          // },

          //规划落实
          {
               path: "/programme/:id",
               name: "programme",
               component: Programme
          },

          //建筑规划落实介绍
          {
               path: "/gb_architcture",
               name: "gb_architcture",
               component: Gb_architcture
          },

          //园区规划落实介绍
          {
               path: "/gb_park",
               name: "gb_park",
               component: Gb_park
          },

          //物业评测报告
          {
               path: "/tenement/:id",
               name: "tenement",
               component: Tenement
          },

          //景观评测报告
          {
               path: "/landscape/:id",
               name: "landscape",
               component: Landscape
          },

          //其他城市已入住楼盘景观展示
          {
               path: "/landscape_other/:id",
               name: "landscape_other",
               component: Landscape_other
          },

          // //高德地图
          // {
          //           path: "/amap/:id",
          //           name: "amap",
          //           component: Amap
          // },
          //720
          // {
          //           path: "/ifrem/:id",
          //           name: "ifrem",
          //           component: Ifrem
          // },
          // //720
          // {
          //           path: "/ifream/:id",
          //           name: "ifream",
          //           component: Ifream
          // },
          //质量监控服务
          {
               path: "/monitoring",
               name: "monitoring",
               component: Monitoring
          },
          //关于积分介绍
          {
               path: "/integral",
               name: "integral",
               component: Integral
          },
          //邀请说明介绍
          {
               path: "/invite",
               name: "invite",
               component: Invite
          },
          //常见问题
          {
               path: "/commonproblem",
               name: "commonproblem",
               component: CommonProblem
          },
          //质量寻光计划
          {
               path: "/seeklight",
               name: "seeklight",
               component: SeekLight
          },
          // {
          //           path: "/obshareseeklight",
          //           name: "obshareseeklight",
          //           component: ObshareSeekLight
          // },
          //积分换红包
          {
               path: "/integralconvert",
               name: "integralconvert",
               component: IntegralConvert
          },
          //邀请忧伤
          {
               path: "/sendnvite",
               name: "sendnvite",
               component: SendNvite
          },
          //用户协议
          {
               path: "/confidentialityAgreement",
               name: "ConfidentialityAgreement",
               component: ConfidentialityAgreement
          },
          //购房合同
          {
               path: "/viewExample",
               name: "ViewExample",
               component: ViewExample
          },
          //楼盘分享评论
          {
               path: "/obsharecomment/:id/:ids",
               name: "obsharecomment",
               component: obshareComment
          },
          //房屋维权大调查
          {
               path: "/survey",
               name: "survey",
               component: Survey
          },
          //声明
          {
               path: "/liability",
               name: "liability",
               component: Liability
          },
          //H5注册
          {
               path: "/register",
               name: "register",
               component: Register
          },
          //全景登陆
          {
               path: "/login",
               name: "login",
               component: Login
          },
          //全景注册下载
          {
               path: "/logindown",
               name: "logindown",
               component: LoginDown
          },
          //漫威活动
          {
               path: "/animateInput",
               name: "animateInput",
               component: AnimateInput
          },
          {
               path: "/animateInputOut",
               name: "animateInputOut",
               component: AnimateInputOut
          },
          {
               path: "/animateInputOver",
               name: "animateInputOver",
               component: AnimateInputOver
          },
          {
               path: "/animateInputLogin",
               name: "animateInputLogin",
               component: AnimateInputLogin
          },
          //验房工具
          {
               path: "/checkRoomTool",
               name: "checkRoomTool",
               component: CheckRoomTool
          },
          {
               path: "/getToolBox",
               name: "getToolBox",
               component: GetToolBox
          },
          {
               path: "/introduceBox",
               name: "introduceBox",
               component: IntroduceBox
          },
          {
               path: "/atOnceHome",
               name: "atOnceHome",
               component: AtOnceHome
          },
          {
               path: "/allList",
               name: "allList",
               component: AllList
          },
          //验房方法
          {
               path: "/testMethod",
               name: "testMethod",
               component: TestMethod
          },
          //严防工具提交验房结果也
          {
               path: "/testOver",
               name: "testOver",
               component: TestOver
          },
          {
               path: "/artifact",
               name: "artifact",
               component: Artifact
          },
          //验房工具-我的验房结果
          {
               path: "/checkRoomRecord",
               name: "checkRoomRecord",
               component: CheckRoomRecord
          },
          //验房结果详情页
          {
               path: "/checkRoomOver",
               name: "checkRoomOver",
               component: CheckRoomOver
          },
          //抽奖活动
          {
               path: "/raffle",
               name: "raffle",
               component: Raffle
          },
          //楼盘评测分享
          {
               path: "/houseeval/:cid/:uid",
               name: "houseeval",
               component: Houseeval
          }
          // { path: '*', component: NotFoundComponent },
     ]
});
