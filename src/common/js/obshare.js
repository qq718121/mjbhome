/**
 * Created by lenovo on 2018/3/21.
 */
export default {
  is_Weixin(){
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      return true;
    } else {
      return false;
    }
  },
  is_WeiBo(){
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/WeiBo/i) == "weibo") {
      return true;
    } else {
      return false;
    }
  }
};

