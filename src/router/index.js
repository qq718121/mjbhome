import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

//组件异步加载

//评分系统介绍
const GradeIntroduce = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/grade-introduce/grade-introduce'))
  })
};
//问卷调查
const maijiabangQuestionnaire = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/maijiabang-questionnaire/maijiabang-questionnaire'))
  })
};
//资讯
const consultDate = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/consult/consultDate'))
  })
};
//严选
const bestChoice = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/bestChoice/bestChoice'))
  })
};
//关于
const about = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/about/about'))
  })
};
//用户协议
const AdminText = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/admintext/admintext'))
  })
};
//消息详情
const Newsdate = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/newsdate/newsdate'))
  })
};

//规划设计测评报告
const Projects = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/projects/projects'))
  })
};
//施工质量测评报告
const Quality = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/quality/quality'))
  })
};
//施工质量测评报告
const Config = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/configureReport/configureReport'))
  })
};
//严选分享
const ObShare = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/obshare/obshare'))
  })
};
//楼盘分析
const Analyze = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/analyze/analyze'))
  })
};
//規劃落實評測
const Programme = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/programme/programme'))
  })
};

//建筑规划落实介绍
const Gb_architcture = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/gb_text/gb_architecture'))
  })
};

//园区规划落实介绍
const Gb_park = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/gb_text/gb_park'))
  })
};

//物业评测报告
const Tenement = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/tenement/tenement'))
  })
};

//景观评测报告
const Landscape = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/landscape/landscape'))
  })
};
//其他城市已入住楼盘景观展示
const Landscape_other = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/landscape_other/landscape_other'))
  })
};
//高德地图
const Amap = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/amap/amap'))
  })
};

//720
const Ifrem = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/ifrem/ifrem'))
  })
};
//720
const Ifream = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/ifream/ifream'))
  })
};
//全流程监控
const Monitoring = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/monitoring/monitoring'))
  })
};
//积分说明
const Integral = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/integral/integral'))
  })
};
// 邀请码
const Invite = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/invite/invite'))
  })
};

// 常见问题
const CommonProblem = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/commonproblem/commonproblem'))
  })
};

// 寻光计划
const SeekLight = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/seekLight/seeklight'))
  })
};

// 寻光计划分享
const ObshareSeekLight = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/obshareseeklight/obshareseeklight'))
  })
};

// 积分兑换红包
const IntegralConvert = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/integralconvert/integralconvert'))
  })
};

// 邀请有赏
const SendNvite = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/sendnvite/sendnvite'))
  })
};

// 保密协议
const ConfidentialityAgreement = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/confidentialityAgreement/confidentialityAgreement'))
  })
};

// 示例
const ViewExample = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/viewExample/viewExample'))
  })
};

const obshareComment = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/obshareComment/obsharecomment'))
  })
};

const Survey = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/survey/survey'))
  })
};

const Liability = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/liability/liability'))
  })
};
const Register = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/common/register'))
  })
};
const Login = function (resolve) {
  require.ensure([], function () {
    resolve(require('@/components/login/login'))
  })
};
//配置路由路径
export default new Router({
  //历史模式，可以划掉路径里边得‘/#/’字符
  // mode: 'history',
  routes: [
    //主页跳转评分系统
    {
      path: '/',
      name: 'GradeIntroduce',
      component: GradeIntroduce
    },

    //问卷调查
    {
      path: '/maijiabangQuestionnaire',
      name: 'maijiabangQuestionnaire',
      component: maijiabangQuestionnaire
    },

    //资讯详情
    {
      path: '/consultDate/:city/:id',
      name: 'consultDate',
      component: consultDate
    },

    //严选楼盘
    {
      path: '/bestChoice',
      name: 'bestChoice',
      component: bestChoice
    },

    //关于鹰眼鉴房
    {
      path: '/about',
      name: 'about',
      component: about
    },

    //用户协议
    {
      path: '/admintext',
      name: 'adminText',
      component: AdminText
    },

    //上榜理由
    {
      path: '/newsdate/:id',
      name: 'newsDate',
      component: Newsdate
    },

    //规划设计
    {
      path: '/projects/:id',
      name: 'projects',
      component: Projects
    },

    //施工质量
    {
      path: '/quality/:id',
      name: 'quality',
      component: Quality
    },

    //工程质量
    {
      path: '/config/:id',
      name: 'config',
      component: Config
    },

    //严选楼盘分享
    {
      path: '/obshare/:id/:ids',
      name: 'obshare',
      component: ObShare
    },

    //资讯版本更新
    {
      path: '/analyze/:id',
      name: 'analyze',
      component: Analyze
    },

    //规划落实
    {
      path: '/programme/:id',
      name: 'programme',
      component: Programme
    },

    //建筑规划落实介绍
    {
      path: '/gb_architcture',
      name: 'gb_architcture',
      component: Gb_architcture
    },

    //园区规划落实介绍
    {
      path: '/gb_park',
      name: 'gb_park',
      component: Gb_park
    },

    //物业评测报告
    {
      path: '/tenement/:id',
      name: 'tenement',
      component: Tenement
    },

    //景观评测报告
    {
      path: '/landscape/:id',
      name: 'landscape',
      component: Landscape
    },

    //其他城市已入住楼盘景观展示
    {
      path: '/landscape_other/:id',
      name: 'landscape_other',
      component: Landscape_other
    },

    //高德地图
    {
      path: '/amap/:id',
      name: 'amap',
      component: Amap
    },
    //720
    {
      path: '/ifrem/:id',
      name: 'ifrem',
      component: Ifrem
    },
    //720
    {
      path: '/ifream/:id',
      name: 'ifream',
      component: Ifream
    },
    {
      path: '/monitoring',
      name: 'monitoring',
      component: Monitoring
    },
    {
      path: '/integral',
      name: 'integral',
      component: Integral
    },
    {
      path: '/invite',
      name: 'invite',
      component: Invite
    },
    {
      path: '/commonproblem',
      name: 'commonproblem',
      component: CommonProblem
    },
    {
      path: '/seeklight',
      name: 'seeklight',
      component: SeekLight
    },
    {
      path: '/obshareseeklight',
      name: 'obshareseeklight',
      component: ObshareSeekLight
    },
    {
      path: '/integralconvert',
      name: 'integralconvert',
      component: IntegralConvert
    },
    {
      path: '/sendnvite',
      name: 'sendnvite',
      component: SendNvite
    },
    {
      path: '/confidentialityAgreement',
      name: 'ConfidentialityAgreement',
      component: ConfidentialityAgreement
    },
    {
      path: '/viewExample',
      name: 'ViewExample',
      component: ViewExample
    },
    {
      path: '/obsharecomment/:id/:ids',
      name: 'obsharecomment',
      component: obshareComment
    },
    {
      path: '/survey',
      name: 'survey',
      component: Survey
    },
    {
      path: '/liability',
      name: 'liability',
      component: Liability
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
    // { path: '*', component: NotFoundComponent },
  ]
})



