<template>
  <div class="moban">
    <div>
      <div class="floor"></div>
      <div class="moban_" @touchmove.prevent
           v-if='this.$store.state.school_class'>
        <div :class="['centers',this.$store.state.school_class]" v-if="this.$store.state.motai_num == '0' ">
          <div class='loadText'><p>{{loadTexts}}</p>
            <p>更多楼盘质量数据尽在鹰眼鉴房</p><a
              @click='loadHref'>{{loadHrefs}}</a><img
              :src=this.$url.moban_pic_load_title>
            <i @click="cloce" class='el-icon-close' v-if="this.$store.state.is_close"></i></div>
        </div>
        <div :class="['web_obshare',this.$store.state.school_class]" v-if="this.$store.state.motai_num == '1' "><img
          src="/static/fenxiang@3x.png" alt=""></div>
        <div :class="['survey-centers',this.$store.state.school_class]" v-if="this.$store.state.motai_num == '2' ">
          <div class='survey-moban'>
            <div class="survey-moban-ine">
              <p class="survey-moban-tit">感谢您参与调研</p>
              <p class="survey-moban-tex">鹰眼鉴房将竭力获取更多楼盘</p>
              <p class="survey-moban-tex">质量信息为广大业主提供更加</p>
              <p class="survey-moban-tex">完善的监控服务</p>
              <div class="survey-moban-btn" @click='loadHref'>下载鹰眼鉴房APP</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import Obshare from '../../common/js/obshare'
  export default {
    data(){
      return {
        animated_six: '',
        URL_Scheme: '',
        loadTexts: '下载APP查看详情',
        loadHrefs: '在APP内查看'
      }
    },
    methods: {
      ...mapState({
        dat_com: 'dat_com',
        data_comment: 'data_comment'
      }),
//关闭
      cloce(){
        this.$store.commit('set_school_class', 'animated bounceOutRight');
        this.$store.commit('change_motai');
      },

      loadHref(){
        this.cloce();
        this.openApp();
      },

      openApp(){

        var iphoneSchema = '',
          iphoneDownUrl = 'https://itunes.apple.com/cn/app/%E9%B9%B0%E7%9C%BC%E9%89%B4%E6%88%BF/id1298408736?mt=8',
          androidSchema = '',
          androidDownUrl = 'http://owvcynyz1.bkt.clouddn.com/homehawkeye1.4.3.1.apk';
        if (this.dat_com() == '0') {
          var obj = this.data_comment();
          obj.type = '1';
          var last = JSON.stringify(obj);
          iphoneSchema = 'com.maijiaHome.MyHawkEyeApp://' + last;
          androidSchema = 'jump://start.yyjf/' + last;
        } else {
          var obj = this.data_comment();
          obj.type = '2';
          obj.buidingName = encodeURI(encodeURI(obj.buidingName));
          var last = JSON.stringify(obj);
          iphoneSchema = 'com.maijiaHome.MyHawkEyeApp://' + last;
          androidSchema = 'jump://start.yyjf/' + last;
        }
        if (Obshare.is_Weixin()) {
//          window.location = 'http://tweb.homehawkeye.com/appDown.html' + url_n + url_m;
        } else {//非微信浏览器
          if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
            var nowTime = new Date().valueOf();
            setTimeout(function () {
              var launchTime = new Date().valueOf() - nowTime;
              if (launchTime < 280) {    //28是调试估算出来的打开本地app基本需要的时间
                window.location = iphoneDownUrl; //下载app页面
              }
            }, 25);
            window.location = iphoneSchema;//自己定义的scheme协议

          } else if (navigator.userAgent.match(/android/i)) {
            var nowTime = new Date().valueOf();
            setTimeout(function () {
              var launchTime = new Date().valueOf() - nowTime;
              if (launchTime < 28) {     //28是调试估算出来的打开本地app基本需要的时间
                window.location = androidDownUrl; //下载app页面
              }
            }, 25);
            window.location = androidSchema;//自己定义的scheme协议
          } else {
            window.location = androidDownUrl;
          }
        }
      },
    }
  }
</script>

<style>
  .moban_ {
    left: 0;
    right: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    bottom: 0;
    top: 0;
    z-index: 999;
    display: -webkit-flex; /*设置父元素盒子的，这样内部盒子就会水平居中，上下居中。*/
    -webkit-justify-content: center; /*设置父元素盒子的，这样内部盒子就会水平居中，上下居中。*/
    -webkit-align-items: center; /*设置父元素盒子的，这样内部盒子就会水平居中，上下居中。*/
  }

  .loadText {
    width: 5.7rem;
    height: 4.1rem;
    background: #fff;
    border-radius: 0.08rem;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    position: relative;
  }

  .survey-moban {
    width: 5.2rem;
    height: 6.29rem;
    background-image: url('/static/suv/bg_tankuang_n@3x.png');
    background-size: cover;
    overflow: hidden;
  }

  .loadText p:nth-child(1) {
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #030303;
    letter-spacing: -0.39px;
    margin-top: 1rem;
  }

  .loadText p:nth-child(2) {
    opacity: 0.4;
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #030303;
    letter-spacing: -0.08px;
    line-height: 0.32rem;
    margin-top: 0.22rem;
  }

  .loadText a {
    display: inline-block;
    width: 4.5rem;
    height: 0.989rem;
    background: #5880F3;
    border-radius: 0.08rem;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #FFFFFF;
    line-height: 0.3rem;
    text-align: center;
    line-height: 0.98rem;
    margin-top: 0.43rem;
    text-decoration: none;
  }

  .loadText img {
    position: absolute;
    top: -1.08rem;
    left: 1.7rem;
    width: 2.16rem;
    height: 2.16rem;
  }

  .loadText i {
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    color: #42464D;
  }

  .web_obshare {
    width: 6.5rem;
    position: absolute;
    top: 0;
    left: 0.7rem;
    z-index: 999;
  }

  .web_obshare img {
    width: 100%;
  }

  .survey-moban-ine {
    margin-top: 1.6rem;
    text-align: center;
  }

  .survey-moban-tit {
    margin-bottom: 0.3rem;
    font-family: PingFangSC-Semibold;
    font-size: 0.4rem;
    color: #6B7DFF;
    line-height: 0.4rem;
  }

  .survey-moban-tex {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #454879;
    line-height: 0.48rem;
  }

  .survey-moban-btn {
    margin: 0.6rem auto;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #FFFFFF;
    width: 3.39rem;
    height: 0.64rem;
    border-radius: 0.64rem;
    background: #6B7DFF;
    text-align: center;
    line-height: 0.64rem;
  }
</style>
s
