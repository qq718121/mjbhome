<template>
     <div class="register">
          <div class="register_is">
               <div class="hint animated bounceInDown" v-if="hintIs">{{codeText}}</div>
               <p class="u-tit">登陆后可查看</p>
               <div class="from">
                    <div class="iphone">
                         <div class="u-input-bg">
                              <span>
                                   <img src="/static/zc/icon_mobilephone@3x.png" alt="">
                              </span>
                              <el-input type="tel" style="width: 2.6rem;margin: auto;margin-left: 0;" v-model="registerFrom.phone" placeholder="请输入11位手机号码"></el-input>
                              <span style="color: #0080FF" @click="f_get_code" v-if="is_codeTextTime">{{codeTextTime}}</span>
                              <span style="color: #e2e2e2" v-if="!is_codeTextTime">{{codeTextTimes}}</span>
                         </div>
                    </div>
                    <div class="a-code">
                         <div class="u-input-bg">
                              <span>
                                   <img src="/static/zc/icon_identifying_code@3x.png" alt="">
                              </span>
                              <el-input type="number" style="width: 2.6rem;margin: auto;margin-left: 0" v-model="registerFrom.code" placeholder="请输入验证码"></el-input>
                         </div>
                    </div>
                    <!--<div class="u-pass">-->
                    <!--<div class="u-input-bg">-->
                    <!--<span>-->
                    <!--<img src="/static/zc/icon_password@3x.png" alt="">-->
                    <!--</span>-->
                    <!--<el-input :type="passwor" style="width: 2.6rem;margin: auto;margin-left: 0" v-model="registerFrom.pass"-->
                    <!--placeholder="请输入密码"></el-input>-->
                    <!--<span style="color: #0080FF;width: 0.6rem;" @click="passImgHandler">-->
                    <!--<img style="width: 100%;" v-if="passImg" src="/static/zc/icon_display@3x.png" alt="">-->
                    <!--<img style="width: 100%;" v-if="!passImg" src="/static/zc/icon_hide@3x.png" alt="">-->
                    <!--</span>-->
                    <!--</div>-->
                    <!--</div>-->
                    <div class="u-sub" @click="submit">快捷注册／快捷登陆</div>
               </div>
          </div>
     </div>
</template>
<script>
import qs from "qs";
import Obshare from "../../common/js/obshare";
import { mapMutations } from 'vuex'
export default {
     data() {
          return {
               isShow: false,
               codeTextTime: "获取验证码",
               codeTextTimes: "59s",
               is_codeTextTime: true,
               passwor: "password",
               hintIs: false,
               passImg: false,
               codeText: "请填写正确的验证码",
               registerFrom: {
                    phone: "",
                    code: "",
                    pass: ""
               }
          };
     },

     methods: {
          ...mapMutations({
               hint_is: 'set_hint'
          }),
          //手机验证
          checkMobile(str) {
               var re = /^1\d{10}$/;
               if (!re.test(str)) {
                    return false;
               }
          },

          submit() {
               if (
                    this.registerFrom.phone == "" ||
                    Obshare.checkMobile(this.registerFrom.phone) === false
               ) {
                    this.hint_is("请填写正确的手机号");
                    return;
               }
               if (this.registerFrom.code == "") {
                    this.hint_is("请填写正确的验证码");
                    return;
               }
               //        if (this.registerFrom.pass == '') {
               //          this.hint_is('请填写密码');
               //          return;
               //        }
               var body = {
                    userPhone: this.registerFrom.phone,
                    smsCode: this.registerFrom.code,
                    userId: this.$route.query.userId ? this.$route.query.userId : ""
               },
                    url = "user/quickLogin";
               let options = {
                    urls: url,
                    methods: 'post',
                    data: body,
                    des: true,
                    types: 3
               };

               //你要传给后台的参数值 key/value
               this.$http(options).then(res => {
                    if (res.code == "0") {
                         if (res.message == "success") {
                              //              window.sessionStorage.setItem('token', resp.response.data.token);
                              Obshare.localPut("token", res.response.data.token, 259200);
                              this.hint_is("登陆成功");
                         } else {
                              this.hint_is(res.message);
                         }
                         setTimeout(() => {
                              if (
                                   res.message == "该手机号已注册." ||
                                   res.message == "success"
                              ) {
                                   Obshare.localPut("regis", "1", 259200);
                                   this.$router.push({
                                        path: this.$route.query.path,
                                        query: {
                                             userId: this.$route.query.userId
                                        }
                                   });
                              }
                         }, 1500);
                    }
               })
                    .catch(error => {
                         console.log(error);
                         this.hint_is("登陆失败，请重试");
                    });
          },
          des(str) {
               var timestamp = this.$setDAesString(
                    new Date().getTime().toString(),
                    "yhgt!d%sd*aw%dSDSFSsa#mng~dsq"
               ).slice(0, 20);
               var data = this.$setDAesString(str, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq");
               var tata = data.slice(0, 10);
               var tata1 = data.slice(10, data.length);
               var data1 = tata + timestamp + tata1;
               return data1;
          },
          codeTime() {
               this.is_codeTextTime = false;
               let num = 60;
               let id = setInterval(() => {
                    num--;
                    this.codeTextTimes = num + "s";
                    if (num == 0) {
                         this.is_codeTextTime = true;
                         clearInterval(id);
                    }
               }, 1000);
          },
          f_get_code() {
               var datas = null,
                    url = "user/captcha";
               var body = {
                    userPhone: this.registerFrom.phone,
                    type: "1"
               };
               if (
                    this.registerFrom.phone == "" ||
                    Obshare.checkMobile(this.registerFrom.phone) === false
               ) {
                    this.hint_is("请填写正确的手机号");
                    return;
               }
               this.codeTime();
               let options = {
                    urls: url,
                    methods: 'post',
                    data: body,
                    des: true,
                    types: 3
               };
               this.$http(options).then(response => {
                    if (response.message == "success") {
                         this.hint_is("已获取验证码");
                    } else {
                         this.hint_is(response.message);
                    }

               }).catch(error => {
                    this.hint_is("获取验证码失败，请重试");
               });
          },

          passImgHandler() {
               if (this.passwor === "password") {
                    this.passwor = "text";
               } else {
                    this.passwor = "password";
               }
               this.passImg = !this.passImg;
          }
     }
};
</script>
<style scoped>
.register {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 1000;
}

.register_is {
      position: relative;
      height: 100%;
      background: #fff;
      padding: 0.51rem 0.5rem 0 0.5rem;
}

.u-tit {
      width: 100%;
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: 0.32rem;
      color: #212832;
      line-height: 0.36rem;
}

.from {
      width: 6.5rem;
      margin: auto;
}

.iphone,
.a-code,
.u-pass {
      margin: 0.22rem auto 0;
      width: 5.9rem;
      height: 0.98rem;
      border-bottom: 1px solid #e7e7e7;
      overflow: hidden;
}

.u-sub {
      margin: 0.8rem auto 0;
      width: 100%;
      height: 0.88rem;
      font-family: PingFangSC-Regular;
      font-size: 0.32rem;
      color: #ffffff;
      background: #0080ff;
      border-radius: 4px;
      text-align: center;
      line-height: 0.88rem;
}

.u-input-bg {
      display: flex;
      justify-content: flex-start;
      margin-top: 0.225rem;
}

.u-input-bg span {
      margin: auto;
      margin-left: 0;
      margin-right: 0.2rem;
}

.u-input-bg span:nth-child(1) {
      width: 0.3rem;
      padding: 0.1rem;
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
.u-input-bg .el-input .el-input__inner {
      font-family: PingFangSC-Regular;
      font-size: 0.28rem;
      color: #212832;
      line-height: 0.44rem !important;
      border: none !important;
      padding: 0 !important;
}
</style>
