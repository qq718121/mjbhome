<template>
  <div class="loginGen">
    <div class="hint animated bounceInDown" v-if="hintIs">{{codeText}}</div>
    <div class="g-bg">
      <img src="http://oxrgdeqd8.bkt.clouddn.com/bg_n@3x.png" alt="">
    </div>
    <div class="g-tit-img">
      <img src="http://oxrgdeqd8.bkt.clouddn.com/vr_yanjing@3x.png" alt="">
    </div>
    <div class="g-house-img">
      <img src="http://oxrgdeqd8.bkt.clouddn.com/bg_quanjing@3x.png" alt="">
    </div>
    <div class="g-tel-ipu">
      <el-input v-model="phone"
                @input="fucsHander($event)"
                placeholder="输入手机号"
                type="tel"
                clearable
      >
      </el-input>
    </div>
    <div :class="btn_class" v-on:click.prevent="loadHandler('0','animated bounceIn')">立即看新家</div>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  import qs from 'qs'
  import Obshare from '../../common/js/obshare'
  export default {
    data(){
      return {
        phone: '',
        btn_class: 'g-sub-btn-b',
        hintIs: false,
        codeText: '请输入正确的手机号码',
      }
    },

    methods: {
      ...mapMutations({
        set_motai: 'set_motai',
        set_school_class: 'set_school_class',
        change_motai: 'change_motai',
        set_dat_com: 'set_dat_com',
        set_data_comment: 'set_data_comment'
      }),
      fucsHander(val){
        if (this.btn_class && val != '') {
          this.btn_class = 'g-sub-btn-f';
        } else {
          this.btn_class = 'g-sub-btn-b';
        }
        return;
      },
      //手机验证
      checkMobile(str) {
        var re = /^1\d{10}$/;
        if (!re.test(str)) {
          return false;
        }
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
      loadHandler(className){
        if (this.btn_class != 'g-sub-btn-f') {
          return;
        }
        if (this.phone == '' || this.checkMobile(this.phone) === false) {
          this.hint_is('请输入正确的手机号码');
          return;
        }
        var d = {body: {}}, datas = null,
          url = this.$url.httpRequestse + 'user/captcha';
        d.body.userPhone = this.phone;
        d.body.type = '1';
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
          if (resp.response.message == 'success') {
            window.sessionStorage.setItem('codes', datas);
            window.sessionStorage.setItem('phones', this.phone);
            this.set_motai('3');
            this.set_school_class(className);
            this.change_motai();
          } else {
            this.hint_is(resp.response.message);
          }
        }).catch((error) => {
          this.hint_is('获取验证码失败，请重试');
        });
      },
    }
  }
</script>
<style scoped>
  /*顶层容器*/
  .loginGen {
    width: 7.5rem;
    margin: auto;
    overflow: hidden;
  }

  /*底层背景*/
  .g-bg {
    width:7.5rem;
    position: absolute;
    margin: 0;
    top: 0;
    bottom: 0;
  }

  .g-bg img, .g-tit-img img, .g-house-img img {
    width: 100%;
  }

  .g-tit-img {
    position: relative;
    margin: 0.3rem auto 0;
    width: 6.34rem;
    height: 3.9rem;
  }

  .g-house-img {
    position: relative;
    margin: 0.2rem auto 0;
    width: 6.5rem;
    height: 3.71rem;
  }

  .g-tel-ipu, .g-sub-btn-b, .g-sub-btn-f {
    position: relative;
    margin: 0.5rem auto 0;
    width: 6.5rem;
    height: 0.88rem;
  }

  .g-sub-btn-b {

    background: #8B949E;
    border-radius: 0.08rem;
    color: #fff;
    font-size: 0.32rem;
    line-height: 0.88rem;
    text-align: center;
  }

  .g-sub-btn-f {
    background: #2E97FF;
    border-radius: 0.08rem;
    color: #fff;
    font-size: 0.32rem;
    line-height: 0.88rem;
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
  .g-tel-ipu .el-input .el-input__inner {
    height: 0.88rem !important;
    font-family: PingFangSC-Light;
    font-size: 0.28rem;
    color: #212832;
    border: none !important;
    text-align: center;
  }
</style>
