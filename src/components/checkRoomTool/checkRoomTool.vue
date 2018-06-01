<template>
  <div class="checkRoomTool">
    <TitBar titBarTits="自助验房" :backApp="true"/>
    <div v-show="prvLoad">
      <div class="g-checkRool" @click="f_checkRool(1)">
      <span>
        <i style="margin-left: 0.265rem;margin-right: 0.095rem">立即验房</i>
        <i style="margin-left: 0" class="el-icon-d-arrow-right icon"></i>
      </span>
      </div>
      <div class="g-toolBox" @click="f_toolBox">
      <span>
        <i>免费预约共享验房工具</i>
        <i style="margin-left: 0" class="el-icon-d-arrow-right icon"></i>
      </span>
      </div>
      <div class="g-orderTool" @click="f_orderTool">
      <span>
        <i>工具箱介绍</i>
        <i style="margin-left: 0" class="el-icon-d-arrow-right icon"></i>
      </span>
      </div>
      <div class="g-Room-over" @click="f_checkRool(0)">
      <span>
        <i>我的验房结果</i>
        <i style="margin-left: 0" class="el-icon-d-arrow-right icon"></i>
      </span>
      </div>
    </div>
  </div>
</template>

<script>
  import TitBar from "../common/titBar.vue";
  import Ob from "../../common/js/obshare";
  import SetupWebViewJavascriptBridge from "../../common/js/setupWebViewJavascriptBridge";
  import ImgPrvLoad from '@/common/js/ImgPrvLoad'

  export default {
    data() {
      return {
        token: null,
        userId: null,
        prvLoad: false,
        imgArr: [
          'http://oxrgdeqd8.bkt.clouddn.com/bg_lijiyanfang@3x.png',
          'http://oxrgdeqd8.bkt.clouddn.com/bg_mianfeiyuyuegongju@3x.png',
          'http://oxrgdeqd8.bkt.clouddn.com/bg_gongjuxiangjieshao@3x.png',
          'http://oxrgdeqd8.bkt.clouddn.com/bg_wodeyanfangjieguo2@3x.png'
        ],
        isApp: true
      };
    },
    components: {TitBar},
    created() {
      this.f_init();
      this.noBack();
      this.f_prvLoad(this.imgArr);
    },
    beforeDestroy(){
      $(window).unbind();
    },
    methods: {
      f_init() {
        window.scrollTo(0, 0);
        if (this.$route.query.type != "app") {
          this.isApp = false;
        } else {
          this.isApp = true;
        }
        if (!this.isApp) {
          window.sessionStorage.setItem("isBar", "true");
        } else {
          window.sessionStorage.setItem("isBar", "");
        }
      },
      f_appBack() {
        let iph = navigator.userAgent.match(/(iPhone|iPod|iPad);?/i);
        let az = navigator.userAgent.match(/android/i);
        if (iph) {
          //native调用js
          SetupWebViewJavascriptBridge(function (bridge) {
            bridge.callHandler("goBackAction", {str: "返回APP"}, function (response) {
              return;
            });
          });
        } else if (az) {
          window.android.callAndroidFinish("返回APP");
        }
      },
      noBack() {
        let this_ = this;
        if (window.history && window.history.pushState) {
//            history.pushState(null, null, document.URL);
          $(window).on("popstate", function () {
            if (this_.isApp) {
              this_.f_appBack();
            }
          });
        }
      },
      f_appLogin() {
        let iph = navigator.userAgent.match(/(iPhone|iPod|iPad);?/i);
        let az = navigator.userAgent.match(/android/i);
        if (iph) {
          //native调用js
          SetupWebViewJavascriptBridge(function (bridge) {
            bridge.callHandler(
              "loginAction",
              {str: "没有token，看着办"},
              function (response) {
                return;
              }
            );
          });
        } else if (az) {
          window.android.callAndroid("没有token，看着办");
        }
      },
      f_new_atOnceHome(num) {
        if (num == 0) {
          this.f_orderOver();
          return;
        }
        let d = window.sessionStorage.getItem("da");
        if (!d) {
          this.$store.commit("set_init_form");
          this.$router.push({
            path: "/atOnceHome",
            query: {
              isApp: this.isApp
            }
          });
        } else {
          this.$router.push({
            path: "/testOver",
            query: {
              data: d
            }
          });
        }
      },
      f_checkRool(num) {
        let t = "";
        if (!this.isApp) {
          //          t = window.sessionStorage.getItem('token');
          if (Ob.locaGet("token")) {
            t = JSON.parse(window.localStorage.getItem("token")).val;
          }
          if (t && t != "undefined") {
            this.f_new_atOnceHome(num);
          } else {
            this.$router.push({
              path: "/register?type=app",
              query: {
                path: this.$router.currentRoute.path
              }
            });
          }
        } else {
          t = window.sessionStorage.getItem("token");
          if (!t || t == "undefined") {
            this.f_appLogin();
            return;
          } else {
            this.f_new_atOnceHome(num);
          }
        }
      },
      f_toolBox() {
        this.$router.push({
          path: "/getToolBox"
        });
      },
      f_orderTool() {
        this.$router.push({
          path: "/introduceBox"
        });
      },
      f_orderOver() {
        this.$router.push({
          path: "/checkRoomRecord",
          query: {
            isApp: this.isApp
          }
        });
      },
      f_prvLoad(arrImg){
        if (!arrImg) {
          throw 'arrImg不存在';
          return;
        }
        let this_ = this;
        let len = arrImg.length;
        let count = 0;
        for (let i = 0; i < len; i++) {
          let img = new Image();
          img.onload = function () {
            count++;
            if (count == len) {
              this_.prvLoad = true;
            }
          };
          img.src = arrImg[i];
        }
      }
    }
  };
</script>
<style scoped>
  .checkRoomTool {
    width: 7.5rem;
    height: 13.34rem;
    margin: auto;
    padding-top: 0.88rem;
  }

  .g-checkRool {
    position: relative;
    width: 6.9rem;
    height: 2.6rem;
    text-align: center;
    margin: 0.4rem auto 0.3rem;
    background-image: url("http://oxrgdeqd8.bkt.clouddn.com/bg_lijiyanfang@3x.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .g-checkRool span {
    position: absolute;
    top: 1.03rem;
    right: 0.6rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 2.1rem;
    height: 0.54rem;
    border: 2px solid #ffffff;
    border-radius: 1rem;
    line-height: 0.54rem;
  }

  .g-checkRool i {
    display: inline-block;
    height: 0.312rem;
    line-height: 0.312rem;
    color: #fff;
    font-size: 0.32rem;
    font-family: Arial;
    margin: auto;
  }

  .g-toolBox {
    margin: auto;
    width: 6.9rem;
    height: 2rem;
    line-height: 2rem;
    text-align: right;
    background-image: url("http://oxrgdeqd8.bkt.clouddn.com/bg_mianfeiyuyuegongju@3x.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .g-toolBox span {
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #212832;
    margin-right: 0.605rem;
  }

  .g-orderTool {
    margin: 0.3rem auto 0;
    width: 6.9rem;
    height: 2rem;
    line-height: 2rem;
    text-align: right;
    background-image: url("http://oxrgdeqd8.bkt.clouddn.com/bg_gongjuxiangjieshao@3x.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .g-orderTool span {
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #212832;
    margin-right: 0.605rem;
  }

  .g-Room-over {
    margin: 0.3rem auto 0;
    width: 6.9rem;
    height: 2rem;
    line-height: 2rem;
    text-align: right;
    background-image: url("http://oxrgdeqd8.bkt.clouddn.com/bg_wodeyanfangjieguo2@3x.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .g-Room-over span {
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #212832;
    margin-right: 0.605rem;
  }
</style>
