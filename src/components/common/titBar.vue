<template>
  <div :class="titBar">
    <span class="backIcom" @click="backs" v-if="!this.isOver" v-show="isApp == ''">
      <img src="/static/tool/icon_fanhui_n@3x.png" alt="">
    </span>
    <span class="backIcom" @click="backs" v-else v-show="isApp == ''">
      <img src="/static/tool/icon_fanhui_b@3x.png" alt="">
    </span>
    <span class="shareIcon" v-if="isOver" v-show="isApp == ''" @click="shareHandlerBtns"></span>
    <span>{{titBarTit}}</span>
  </div>
</template>
<script>
  import SetupWebViewJavascriptBridge from "../../common/js/setupWebViewJavascriptBridge";
  export default {
    props: {
      titBarTits: {
        default: ""
      },
      isOver: {
        default: false
      },
      isBar: {
        default: null
      },
      backApp: {
        default: false
      },
      isBackHome: {
        default: false
      }
    },
    data() {
      return {
        titBarTit: "",
        titBar: "titBar",
        isApp: null
      };
    },
    created() {
      let u = window.sessionStorage.getItem("isBar");
      this.isApp = u;
      this.titBarTit = this.titBarTits;
      if (this.isOver) {
        this.titBar = "titBar2";
      }
    },

    methods: {
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
      f_appShare() {
        let iph = navigator.userAgent.match(/(iPhone|iPod|iPad);?/i);
        let az = navigator.userAgent.match(/android/i);
        if (iph) {
          //native调用js
          SetupWebViewJavascriptBridge(function (bridge) {
            bridge.callHandler(
              "shareAction",
              {
                url: window.location.href + '&&share=1',
                desc: '验房工具思密达',
                title: '验房工具思密达',
                img: 'O(∩_∩)O'
              },
              function (response) {
                return;
              }
            );
          });
        } else if (az) {
          window.android.callAndroidShare(window.location.href + '&&share=1', '验房工具', '验房工具', 'O(∩_∩)O');
        }
      },
      shareHandlerBtns() {
//        this.$emit("shareHandlerBtn");
        this.f_appShare();
      },
      backs() {
        if (this.backApp) {
          this.f_appBack();
        } else {
          if (this.isBackHome) {
            if (this.isApp == '') {
              this.$router.push({
                path: "/checkRoomTool?type=app"
              });
            } else {
              this.$router.push({
                path: "/checkRoomTool"
              });
            }
            return;
          }
          this.$router.go(-1);
        }
      }
    }
  };
</script>
<style scoped>
  .backIcom img {
    width: 100%;
  }

  .titBar {
    position: fixed;
    top: 0;
    z-index: 999999999;
    width: 7.5rem;
    height: 0.88rem;
    line-height: 0.88rem;
    color: rgba(16, 16, 16, 1);
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    box-shadow: 0 0 0.1rem 0 rgba(225, 225, 225, 0.5);
    color: #212832;
    background: #fff;
    /*background-color: rgba(247, 247, 247, 1);*/
  }

  .titBar2 {
    position: fixed;
    top: 0;
    z-index: 999999999;
    width: 7.5rem;
    height: 0.88rem;
    line-height: 0.88rem;
    color: rgba(16, 16, 16, 1);
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #fff;
  }

  .titBar span:nth-child(1),
  .titBar2 span:nth-child(1) {
    display: inline-block;
    height: 0.34rem;
    line-height: 0.34rem;
    font-size: 0.36rem;
    font-weight: 600;
  }

  .backIcom {
    position: absolute;
    top: 0.275rem;
    left: 0.3rem;
    width: 0.35rem;
  }

  .shareIcon img {
    width: 100%;
  }

  .shareIcon {
    position: absolute;
    top: 0.24rem;
    right: 0.3rem;
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    background-image: url("/static/tool/housingesta_icon_fenxiang_n@3x.png");
    background-size: cover;
  }
</style>
