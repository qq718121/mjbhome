<template>
  <div class="moban">
    <div>
      <div class="floor"></div>
      <div class="moban_s"></div>
      <div class="moban_" @touchmove.prevent
           v-if='this.$store.state.school_class'>
        <div class="hint animated bounceInDown" v-if="hintIs">{{codeText}}</div>
        <div :class="['centers',this.$store.state.school_class]" v-if="this.$store.state.motai_num == '0' ">
          <div class='loadText'><p>{{loadTexts}}</p>
            <p>更多楼盘质量数据尽在鹰眼鉴房</p><a
              @click='loadHref'>{{loadHrefs}}</a><img
              :src=this.$url.moban_pic_load_title>
            <i @click="cloce" class='el-icon-close' v-if="this.$store.state.is_close"></i></div>
        </div>
        <div :class="['web_obshare',this.$store.state.school_class]" v-if="this.$store.state.motai_num == '1' "><img
          src="/static/fenxiang@3x.png" alt="">
        </div>
        <div class="click_1" @click="cloce"
             v-if="this.$store.state.motai_num == '1' || this.$store.state.motai_num == '2'"></div>
        <div :class="['survey-centers',this.$store.state.school_class]" v-if="this.$store.state.motai_num == '2' ">
          <div class='survey-moban'>
            <div class="survey-moban-ine">
              <p class="survey-moban-tit">感谢您参与调研</p>
              <p class="survey-moban-tex">鹰眼鉴房将竭力获取更多楼盘</p>
              <p class="survey-moban-tex">质量信息为广大业主提供更加</p>
              <p class="survey-moban-tex">完善的监控服务</p>
              <div class="survey-moban-btn" @click.stop='surveyDown'>关注鹰眼鉴房公众号</div>
            </div>
          </div>
        </div>
        <div
          :class="['login-centers',this.$store.state.school_class]"
          style="position: relative"
          v-if="this.$store.state.motai_num == '3' && !isCodeSucc"
        >
          <div class="g-down-ipt">
            <el-input v-model="code"
                      placeholder="输入验证码"
                      type="number"
                      @input="inputCode"
                      clearable
            >
            </el-input>
          </div>
          <div class="g-set" v-if="setCode">重新发送验证码&nbsp;{{codeTextTime}}</div>
          <div class="g-set" style="background: #2E97FF" @click="anewSetCode" v-else>重新发送验证码</div>
          <div class="g-sub" v-if="subCode">提交验证码</div>
          <div class="g-sub" style="background: #2E97FF" v-else @click="submitCode">提交验证码</div>
        </div>
        <div
          :class="['login-centers',this.$store.state.school_class]"
          v-if="this.$store.state.motai_num == '3' && isCodeSucc"
        >
          <div class="g-suc">
            <div class="u-suc-tit"><img src="http://oxrgdeqd8.bkt.clouddn.com/icon_chenggong@3x.png" alt=""></div>
          </div>
          <div class="g-suc-ine">
            <p>成功加入鹰眼鉴房</p>
            <p>{{pathNum}}后自动跳转</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import Obshare from '../../common/js/obshare'
  import qs from 'qs'
  export default {
    data(){
      return {
        animated_six: '',
        codeText: '',
        URL_Scheme: '',
        loadTexts: '下载APP查看详情',
        loadHrefs: '在APP内查看',
        code: '',
        hintIs: false,
        subCode: true,
        pathNum: '3s',
        codeTextTime: '59s',
        isCodeSucc: false,
        setCode: true
      }
    },
    mounted(){
      if (this.$store.state.motai_num == '3') {
        this.codeTime();
      }
      return;
    },
    methods: {
      ...mapMutations({
        set_motai: 'set_motai',
        set_school_class: 'set_school_class',
        change_motai: 'change_motai'
      }),
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
        this.openApp();
        this.cloce();
      },
      hint_is(text){
        this.codeText = text;
        this.hintIs = true;
        setTimeout(() => {
          this.hintIs = false;
        }, 2000)
      },
      des(str){
        var timestamp = this.$setDAesString(new Date().getTime().toString(), "yhgt!d%sd*aw%dSDSFSsa#mng~dsq").slice(0, 20);
        var data = this.$setDAesString(str, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq");
        var tata = data.slice(0, 10);
        var tata1 = data.slice(10, data.length);
        var data1 = tata + timestamp + tata1;
        return data1;
      },
      loadHandler(){
        var url = this.$url.httpRequestse + 'user/captcha';
        var datas = window.sessionStorage.getItem('codes');
        this.$Axios.post(url, datas, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then((response) => {
          var res = {data: response.data};
          var data = this.$getDAesString(res, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq");
          var resp = JSON.parse(data);
          if (resp.response.message == 'success') {
            this.hint_is('验证码已发送');
          } else {
            this.hint_is(resp.response.message);
          }
        }).catch((error) => {
          this.hint_is('获取验证码失败，请重试');
        });
      },
      surveyDown(){
        window.location = this.$url.appDown;
      },
      //重新发送验证码
      anewSetCode(){
        this.codeTime();
        this.loadHandler();
      },
      //输入验证码
      inputCode(val){
        if (val) {
          this.subCode = false;
        }
      },
      record(){
        var d = {body: {}}, datas = null, iph = /(iPhone|iPod|iPad);?/i,state=this.$route.query,
          url = '';
        if (navigator.userAgent.match(iph)) {
          url = this.$url.httpRequests + 'backstageUser/download/' + state.ut + '/' + state.ui + '/2';
        } else {
          url = this.$url.httpRequests + 'backstageUser/download/' + state.ut + '/' + state.ui + '/1';
        }
        datas = qs.stringify({d: JSON.stringify(d)});
        this.$Axios.post(url, datas, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log(error);
        });
      },
      //提交验证码
      submitCode(){
        var d = {body: {}}, datas = null,
          url = this.$url.httpRequestse + 'user/quickLogin';
        d.body.userPhone = window.sessionStorage.getItem('phones');
        d.body.smsCode = this.code;
        var res = {
          data: this.des(JSON.stringify(d))
        };
        datas = qs.stringify({d: this.des(JSON.stringify(d))});
        this.$Axios.post(url, datas, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then((response) => {
          var res = {data: response.data};
          var data = this.$getDAesString(res, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq");
          var resp = JSON.parse(data);
          if (resp.response.status == '0') {
            this.record();
            this.isCodeSucc = true;
            this.pathNumTime();
          } else {
            this.hint_is(resp.response.message);
          }
        }).catch((error) => {
          console.log(error);
        });
      },
      pathNumTime(){
        let num = 3;
        let id = setInterval(() => {
          num--;
          this.pathNum = num + 's';
          if (num == 0) {
            clearInterval(id);
            this.cloce();
            this.$router.push({
              path: '/logindown'
            });
          }
        }, 1000)
      },
      codeTime(){
        this.setCode = true;
        let num = 60;
        let id = setInterval(() => {
          num--;
          this.codeTextTime = num + 's';
          if (num == 0) {
            this.setCode = false;
            clearInterval(id);
          }
        }, 1000)
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
            console.log(iphoneSchema);
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

  .click_1 {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
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
    position: absolute;
    top: 50%;
    margin-top: -3.145rem;
    left: 50%;
    margin-left: -2.51rem;
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

  .login-centers {
    width: 5.8rem;
    height: 4.06rem;
    background: #fff;
    border-radius: 0.08rem;
  }

  .g-down-ipt {
    width: 4.82rem;
    margin: 0.7rem auto 0;
  }

  .g-set {
    background: #C8CED5;
    border-radius: 2rem;
    width: 2.9rem;
    height: 0.6rem;
    color: #fff;
    text-align: center;
    line-height: 0.6rem;
    margin: 0.4rem auto 0;
  }

  .g-sub {
    width: 100%;
    height: 0.88rem;
    position: absolute;
    bottom: 0;
    background: #8B949E;
    border-radius: 0 0 0.08rem 0.08rem;
    text-align: center;
    line-height: 0.88rem;
    color: #fff;
  }

  .g-suc {
    margin-top: 1.07rem;
  }

  .u-suc-tit img {
    width: 100%;
  }

  .u-suc-tit {
    width: 0.6rem;
    height: 0.6rem;
    margin: auto;
  }

  .g-suc-ine p:nth-child(1) {
    margin-top: 0.33rem;
    font-family: PingFangSC-Light;
    font-size: 0.32rem;
    color: #212832;
    line-height: 0.32rem;
    text-align: center;
  }

  .g-suc-ine p:nth-child(2) {
    margin-top: 0.2rem;
    font-family: PingFangSC-Light;
    font-size: 0.24rem;
    color: #8B949E;
    line-height: 0.24rem;
    text-align: center;
  }

  .hint {
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -1.52rem;
    margin-top: -0.47rem;
    width: 3.04rem;
    height: 0.94rem;
    background: rgba(0, 0, 0, 0.78);
    border-radius: 0.08rem;
    text-align: center;
    color: #fff;
    line-height: 0.94rem;
    z-index: 9999999;
  }
</style>
<style>
  .g-down-ipt .el-input .el-input__inner {
    height: 0.88rem !important;
    font-family: PingFangSC-Light;
    font-size: 0.28rem;
    color: #212832;
    border: none !important;
    text-align: center;
    background: #F8F8F8;
  }
</style>

