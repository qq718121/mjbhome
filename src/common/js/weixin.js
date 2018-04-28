/**
 * Created by lenovo on 2018/4/2.
 */
import wx from 'weixin-js-sdk';
import $ from 'jquery';
import Axios from 'axios';
import Qs from 'qs'
export default function weixin(title, desc) {
  // const url = 'http://47.93.185.205:8081/maijiabangbackstate-1.0-SNAPSHOT/getJsapiTicket';//url不能写死
  const url = this.$url.httpRequests + 'getJsapiTicket';//url不能写死
  // const url = 'http://www.cnmjw.com.cn/rentReturnHandler/jssdk';//url不能写死
  // const url = 'http://192.168.1.243:8088/user/getJsapiTicket';//url不能写死
  var params = new URLSearchParams();
  params.append('url', window.location.href.split('#')[0]);       //你要传给后台的参数值 key/value
  let body = {};
  let a;
  body.url = window.location.href.split('#')[0];
  params.body = body;
  let b = {body: {url: window.location.href.split('#')[0]}};
  a = Qs.stringify({d: JSON.stringify(b)});
  Axios({
    method: 'post',
    url: url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    data: a,
  }).then((res) => {
    let data = res.data.response;
    wx.config({
      debug: false,////生产环境需要关闭debug模式
      appId: data.appid,//appId通过微信服务号后台查看
      timestamp: data.timestamp,//生成签名的时间戳
      nonceStr: data.nonceStr,//生成签名的随机字符串
      signature: data.signature,//签名
      jsApiList: [//需要调用的JS接口列表
        'checkJsApi',//判断当前客户端版本是否支持指定JS接口
        'onMenuShareTimeline',//分享给好友
        'onMenuShareAppMessage'//分享到朋友圈
      ]
    });
  });

  wx.ready(function () {

    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。

//朋友圈
    wx.onMenuShareTimeline({
      title: title, // 分享标题
      desc: desc,
      link: 'http://h5.homehawkeye.com/#/survey', // 分享链接，该链接域名必须与当前企业的可信域名一致
      imgUrl: 'http://oxrgdeqd8.bkt.clouddn.com/fenxiang@2x.png', // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
//        alert('1')
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
    //朋友
    wx.onMenuShareAppMessage({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: 'http://h5.homehawkeye.com/#/survey', // 分享链接，该链接域名必须与当前企业的可信域名一致
      imgUrl: 'http://oxrgdeqd8.bkt.clouddn.com/fenxiang@2x.png', // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
        // alert('1')
      },
      cancel: function () {
        // alert('2');
        // 用户取消分享后执行的回调函数
      }
    });
//qq
    wx.onMenuShareQQ({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: 'http://h5.homehawkeye.com/#/survey', // 分享链接
      imgUrl: 'http://oxrgdeqd8.bkt.clouddn.com/fenxiang@2x.png', // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
    //腾讯微博
    wx.onMenuShareWeibo({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: 'http://h5.homehawkeye.com/#/survey', // 分享链接
      imgUrl: 'http://oxrgdeqd8.bkt.clouddn.com/fenxiang@2x.png', // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
    //分享到QQ空间
    wx.onMenuShareQZone({
      title: title, // 分享标题
      desc: desc, // 分享描述
      link: 'http://h5.homehawkeye.com/#/survey', // 分享链接
      imgUrl: 'http://oxrgdeqd8.bkt.clouddn.com/fenxiang@2x.png', // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
  });


  wx.error(function (res) {
    console.log('信息验证失败:', res)
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
  });

//  function call_javascript_function(param) {
//    if (param == '') {
//      return 'failed';
//    }
//    return 'ok';
//  };
//  function call_app_function(param) {
////              alert('传入参数'+param);
//    window.location.href = param;
//    return false;
//  //  }
//
}
