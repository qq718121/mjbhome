<template>
  <div class="g-dislog">
    <transition name="el-fade-in-linear">
      <div class="transition-box sur_moban_" v-show="show" @touchmove.prevent @click="close"></div>
    </transition>
    <div class="shareDislog" v-show="show">
      <div class="shareList">

        <div class="shareList-li" @click="share_(1)">
          <div class="shareList-li-icon">
            <img src="/static/tool/icon_share_wechat@3x.png" alt="">
          </div>
          <p class="shareList-li-name">微信</p>
        </div>

        <div class="shareList-li" @click="share_(2)">
          <div class="shareList-li-icon">
            <img src="/static/tool/icon_share_moments@3x.png" alt="">
          </div>
          <p class="shareList-li-name">朋友圈</p>
        </div>

        <div class="shareList-li" @click="share_(3)">
          <div class="shareList-li-icon">
            <img src="/static/tool/icon_share_weibo@3x.png" alt="">
          </div>
          <p class="shareList-li-name">微博</p>
        </div>

        <div class="shareList-li" @click="share_(4)">
          <div class="shareList-li-icon">
            <img src="/static/tool/icon_share_qq@3x.png" alt="">
          </div>
          <p class="shareList-li-name">QQ好友</p>
        </div>

      </div>
      <div class="shareFoot" @click="close">
        <span>取消分享</span>
      </div>
    </div>
  </div>
</template>
<script>
  //  import NativeShare from 'nativeshare'
  import SetupWebViewJavascriptBridge from "../../common/js/setupWebViewJavascriptBridge";
  export default {
    props: {
      shows: {
        default: false
      }
    },
    data() {
      return {
        show: false
      };
    },
    created() {
      this.show = this.shows;
//      this.share();
    },
    watch: {
      shows: function (params) {
        if (params === 1) {
          this.show = false;
        } else {
          this.show = params;
        }
      }
    },
    methods: {
      f_appShare() {
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
          window.android.callAndroidShare("http://192.168.1.247:8080/#/testOver?data=%7B%22count1%22%3A3,%22count2%22%3A4,%22count3%22%3A0,%22count4%22%3A0,%22count5%22%3A0,%22count6%22%3A0,%22createTime%22%3A%222018-05-30%2009%3A48%3A05%22,%22totalScore%22%3A85%7D&time=2018-05-30%2009%3A48%3A05", "验房工具", "验房工具");
        }
      },
//      share(){
//        window.nativeShare = new NativeShare();
//        // 设置分享文案
//        nativeShare.setShareData({
//          icon: 'https://pic3.zhimg.com/v2-080267af84aa0e97c66d5f12e311c3d6_xl.jpg',
//          link: 'http://localhost:8080/#/testOver?data=%7B%22count1%22%3A3,%22count2%22%3A0,%22count3%22%3A0,%22count4%22%3A0,%22count5%22%3A0,%22count6%22%3A0,%22createTime%22%3A%222018-05-30%2009%3A48%3A05%22,%22totalScore%22%3A93%7D&time=2018-05-30%2009%3A48%3A05',
//          title: '验房工具',
//          desc: 'NativeShare是一个整合了各大移动端浏览器调用原生分享的插件',
//          from: '@fa-ge',
//        })
//      },
      close() {
        this.show = false;
        this.$emit("shareHandlerBtn", 1);
      },
//      f_weibo(){
//        var _shareUrl = 'http://v.t.sina.com.cn/share/share.php?&appkey=895033136';     //真实的appkey ，必选参数
//        _shareUrl += '&url=' + encodeURIComponent('http://localhost:8080/#/testOver?data=%7B%22count1%22%3A3,%22count2%22%3A0,%22count3%22%3A0,%22count4%22%3A0,%22count5%22%3A0,%22count6%22%3A0,%22createTime%22%3A%222018-05-30%2009%3A48%3A05%22,%22totalScore%22%3A93%7D&time=2018-05-30%2009%3A48%3A05' || document.location);     //参数url设置分享的内容链接|默认当前页location，可选参数
//        _shareUrl += '&title=' + encodeURIComponent('111' || document.title);    //参数title设置分享的标题|默认当前页标题，可选参数
//        _shareUrl += '&source=' + encodeURIComponent('11' || '');
//        _shareUrl += '&sourceUrl=' + encodeURIComponent('https://pic3.zhimg.com/v2-080267af84aa0e97c66d5f12e311c3d6_xl.jpg' || '');
//        _shareUrl += '&content=' + 'utf-8';   //参数content设置页面编码gb2312|utf-8，可选参数
//        _shareUrl += '&pic=' + encodeURIComponent('https://pic3.zhimg.com/v2-080267af84aa0e97c66d5f12e311c3d6_xl.jpg' || '');  //参数pic设置图片链接|默认为空，可选参数
//        window.open(_shareUrl, '_blank', 'toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0,' + 'width=' + '750' + ',height=' + '500' + ',top=' + (screen.height - '500') / 2 + ',left=' + (screen.width - '750') / 2);
//      },
//      f_QQ(){
//        var p = {
//          url: location.href, /*获取URL，可加上来自分享到QQ标识，方便统计*/
//          desc: '', /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
//          title: '', /*分享标题(可选)*/
//          summary: '', /*分享摘要(可选)*/
//          pics: '', /*分享图片(可选)*/
//          flash: '', /*视频地址(可选)*/
//          site: '', /*分享来源(可选) 如：QQ分享*/
//          style: '201',
//          width: 750,
//          height: 750
//        };
//        var s = [];
//        var url = '';
//        for (var i in p) {
//          s.push(i + '=' + encodeURIComponent(p[i] || ''));
//        }
//        url = 'http://connect.qq.com/widget/shareqq/index.html?' + s.join('&');
//        window.open(url);
//      },
      share_(type) {
        switch (type) {
          case 1:
            this.f_appShare();
            break;
          case 2:
            alert("2");
            break;
          case 3:
//            this.f_weibo();
//            try {
//              nativeShare.call('weiBo');
//            } catch (err) {
//              // 如果不支持，你可以在这里做降级处理
////              alert(err.message)
//            }
            break;
          case 4:
////            this.f_QQ();
//            try {
//              nativeShare.call('qqFriend');
//            } catch (err) {
//              // 如果不支持，你可以在这里做降级处理
////              alert(err.message)
//            }
            break;
        }
      }
    }
  };
</script>
<style scoped>
  .sur_moban_ {
    width: 7.5rem;
    left: 50%;
    margin-left: -3.75rem;
    right: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    bottom: 0;
    top: 0;
    z-index: 99999999999999999999;
    display: -webkit-flex; /*设置父元素盒子的，这样内部盒子就会水平居中，上下居中。*/
    -webkit-justify-content: center; /*设置父元素盒子的，这样内部盒子就会水平居中，上下居中。*/
    -webkit-align-items: center; /*设置父元素盒子的，这样内部盒子就会水平居中，上下居中。*/
  }

  .shareDislog {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3.39rem;
    background: #fff;
    z-index: 999999999999999999999999999;
  }

  .shareFoot {
    position: absolute;
    bottom: 0;
    height: 0.98rem;
    width: 7.5rem;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #42464d;
    line-height: 0.98rem;
    text-align: center;
    border-top: 1px solid #e0e0e0;
  }

  .shareList {
    padding: 0.6rem 0.8rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .shareList-li {
    width: 1rem;
  }

  .shareList-li-icon img {
    width: 100%;
  }

  .shareList-li-icon {
    padding: 0.1rem;
    margin: 0.1rem auto;
    width: 0.7rem;
    height: 0.8rem;
  }

  .shareList-li-name {
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #8b949e;
  }
</style>


