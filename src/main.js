// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import fastclick from 'fastclick';
import setFontsize from './common/js/setFontsize';
import Axios from 'axios';
import weixin from './common/js/weixin'
import {
  Button,
  Notification,
  Progress,
  Carousel,
  Radio,
  // Step,
  // Steps,
  CarouselItem,
  Input,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Dialog,
  // Form,
  // FormItem,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {url} from './common/js/urlLocation';
import store from './common/js/store';
import CryptoJS from 'crypto-js'
import AMap from 'vue-amap';
// import echarts from 'echarts';
import {class_name_ftn} from './common/js/computed_class_name';
// import $ from 'jquery'
// Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
fastclick.attach(document.body);
Vue.prototype.$Axios = Axios;
// Vue.prototype.$map = AMap;
Vue.prototype.$url = url;
Vue.prototype.$store = store;
Vue.prototype.$weixin = weixin;
Vue.prototype.$CryptoJS = CryptoJS;
Vue.prototype.$class_name_ftn = class_name_ftn;
Vue.prototype.$setDAesString = function (data, keys) {
  // let baseTen = res.data.slice(0,10);
  // let baseThree = res.data.slice(30,res.data.length);
  // let base64Str = baseTen + baseThree;
  //私钥
  let key = CryptoJS.enc.Utf8.parse("yhgt!d%sd*aw%dSDSFSsa#mng~dsq");
  let iv = CryptoJS.enc.Utf8.parse("yhgt!d%sd*aw%dSDSFSsa#mng~dsq");
  // Triple DES 加密
  let encrypted = CryptoJS.TripleDES.encrypt(data, key, {
    iv: iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
//                转换为字符串
  encrypted = encrypted.toString();
  return encrypted;
};
Vue.prototype.$getDAesString = function (res, keys) {
  let baseTen = res.data.slice(0, 10);
  let baseThree = res.data.slice(30, res.data.length);
  let base64Str = baseTen + baseThree;
  //私钥
  let key = CryptoJS.enc.Utf8.parse("yhgt!d%sd*aw%dSDSFSsa#mng~dsq");
  let iv = CryptoJS.enc.Utf8.parse("yhgt!d%sd*aw%dSDSFSsa#mng~dsq");
  // Triple DES 加密
//               var encrypted = this_.$CryptoJS.TripleDES.encrypt(str, key, {
//                 iv: iv,
//                 mode: this_.$CryptoJS.mode.ECB,
//                 padding: this_.$CryptoJS.pad.Pkcs7
//               });
//
////                转换为字符串
//               encrypted = encrypted.toString();
//               console.log(encrypted);
  // Triple DES 解密
//               let encrypted='U2FsdGVkX19qa+f0Zw2OqgVV8zBTK3lSLjhfmIaufMk=';
  let decrypted = CryptoJS.TripleDES.decrypt(base64Str, key, {
    iv: key,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  // 转换为 utf8 字符串
  return decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
};
Vue.use(AMap);
Vue.use(Button);
// Vue.component(Notification);
Vue.use(Progress);
Vue.use(Carousel);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(CheckboxGroup); 
Vue.use(CarouselItem);
Vue.use(Dialog);
// Vue.use(Form);
// Vue.use(FormItem);
setFontsize();
/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
});

var bus = new Vue({});
Vue.prototype.$bus = bus;


