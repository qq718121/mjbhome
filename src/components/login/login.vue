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
               <el-input v-model="phone" @input="fucsHander($event)" placeholder="输入手机号" type="tel" clearable>
               </el-input>
          </div>
          <div :class="btn_class" v-on:click.prevent="loadHandler('0','animated bounceIn')">立即看新家</div>
     </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Obshare from '../../common/js/obshare'
export default {
     data() {
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
               set_data_comment: 'set_data_comment',
               hint_is: 'set_hint'
          }),
          fucsHander(val) {
               if (this.btn_class && val != '') {
                    this.btn_class = 'g-sub-btn-f';
               } else {
                    this.btn_class = 'g-sub-btn-b';
               }
               return;
          },

          loadHandler(className) {
               if (this.btn_class != 'g-sub-btn-f') {
                    return;
               }
               if (this.phone == '' || Obshare.checkMobile(this.phone) === false) {
                    this.hint_is('请输入正确的手机号码');
                    return;
               }

               var url = 'user/captcha';
               var options = {
                    urls: url,
                    methods: 'post',
                    data: {
                         userPhone: this.phone,
                         type: '1'
                    },
                    des: true,
                    types: 3
               };

               this.$http(options).then((resp) => {
                    if (resp.response.message == 'success') {
                         window.sessionStorage.setItem('codes', JSON.stringify(options.data));
                         window.sessionStorage.setItem('phones', this.phone);
                         this.set_motai('3');
                         this.set_school_class(className);
                         this.change_motai();
                    } else {
                         this.hint_is(resp.response.message);
                    }
               }).catch((error) => {
                    console.log(error);
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
      width: 7.5rem;
      position: absolute;
      margin: 0;
      top: 0;
      bottom: 0;
}

.g-bg img,
.g-tit-img img,
.g-house-img img {
      width: 100%;
      height: 100%;
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

.g-tel-ipu,
.g-sub-btn-b,
.g-sub-btn-f {
      position: relative;
      margin: 0.5rem auto 0;
      width: 6.5rem;
      height: 0.88rem;
}

.g-sub-btn-b {
      background: #8b949e;
      border-radius: 0.08rem;
      color: #fff;
      font-size: 0.32rem;
      line-height: 0.88rem;
      text-align: center;
}

.g-sub-btn-f {
      background: #2e97ff;
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
