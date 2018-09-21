// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import fastclick from 'fastclick';
import setFontsize from './common/js/setFontsize';
import weixin from './common/js/weixin'
import Http from './common/js/axios'
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
import { url } from './common/js/urlLocation';
import store from './common/js/store';
// import AMap from 'vue-amap';
// import echarts from 'echarts';
import { class_name_ftn } from './common/js/computed_class_name';
// import $ from 'jquery'
// Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
fastclick.attach(document.body);
Vue.prototype.$http = Http;
// Vue.prototype.$map = AMap;
Vue.prototype.$url = url;
Vue.prototype.$store = store;
Vue.prototype.$weixin = weixin;
Vue.prototype.$class_name_ftn = class_name_ftn;
// Vue.use(AMap);
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



