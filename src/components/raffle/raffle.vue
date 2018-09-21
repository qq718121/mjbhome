<template>

          <div class="m-raffle" v-show="loadIs">

                    <div class="g-tit">
                              <div class="u-tit-img">
                                        <img src="/static/raffle/pic_toutu@2x.png" alt="">
                              </div>
                              <div class="u-tit-text">
                                        <div class="u-tit-text-bor">
                                                  <span>赢取手机大奖 万元礼品等你拿</span>
                                        </div>
                              </div>
                              <p class="u-tit-time">活动时间：6月11日-7月15日</p>
                    </div>
                    <div class="g-luckyPrize">
                              <div class="u-g-luckyPrize-tit">
                                        <span>幸运大奖</span>
                              </div>
                              <div class="g-luckyPrize-img">
                                        <img src="/static/raffle/pic_shouji@2x.png" alt="">
                              </div>
                              <div class="g-luckyPrize-foot">
                                        <span>iPhone X</span>
                                        <span>X1</span>
                              </div>
                    </div>
                    <div class="g-houseExclusive">
                              <div class="u-g-houseExclusive-tit">
                                        <span>楼盘专属大奖</span>
                              </div>
                              <div class="u-houseExclusive-trophy">
                                        <div class="u-houseExclusive-trophy-li">
                                                  <div class="u-houseExclusive-trophy-li-img">
                                                            <img src="/static/raffle/pic_jingdong@2x.png" alt="">
                                                  </div>
                                                  <p style="font-size: 0.28rem">100元京东卡</p>
                                                  <p>每个楼盘X2</p>
                                        </div>
                                        <div class="u-houseExclusive-trophy-li">
                                                  <div class="u-houseExclusive-trophy-li-img">
                                                            <img src="/static/raffle/pic_30huafei@2x.png" alt="">
                                                  </div>
                                                  <p style="font-size: 0.28rem">30元手机话费</p>
                                                  <p>每个楼盘X15</p>
                                        </div>
                                        <div class="u-houseExclusive-trophy-li">
                                                  <div class="u-houseExclusive-trophy-li-img">
                                                            <img src="/static/raffle/pic_yanfanggongju@2x.png" alt="">
                                                  </div>
                                                  <p style="font-size: 0.28rem">自助验房工具卡</p>
                                                  <p>每个楼盘X10</p>
                                        </div>
                                        <div class="u-houseExclusive-trophy-li">
                                                  <div class="u-houseExclusive-trophy-li-img">
                                                            <img src="/static/raffle/pic_jianfengtiyan@2x.png" alt="">
                                                  </div>
                                                  <p style="font-size: 0.28rem">鉴房体验卡</p>
                                                  <p>每个楼盘X30</p>
                                        </div>
                              </div>
                    </div>
                    <div class="g-appointment">
                              <div class="u-appointment-trophy">
                                        <div class="u-houseExclusive-trophy-li">
                                                  <div class="u-houseExclusive-trophy-li-img">
                                                            <img src="/static/raffle/pic_20huafei@2x.png" alt="">
                                                  </div>
                                                  <p style="font-size: 0.28rem">20元手机话费</p>
                                                  <p>X200</p>
                                        </div>
                                        <div class="u-houseExclusive-trophy-li">
                                                  <div class="u-houseExclusive-trophy-li-img">
                                                            <img src="/static/raffle/pic_qqbi@2x.png" alt="">
                                                  </div>
                                                  <p style="font-size: 0.28rem">10 Q币</p>
                                                  <p>X300</p>
                                        </div>
                              </div>
                    </div>
                    <div class="g-problem">
                              <p class="g-problem1">如何参加活动</p>
                              <p class="g-problem2">简单三步，完成即可参与抽奖活动</p>
                    </div>
                    <div class="g-joinPaty">

                              <div class="g-joinPaty-li" style="margin-left: 0.81rem">
                                        <div class="g-joinPaty-li-img">
                                                  <img src="/static/raffle/icon_xiazai@2x.png" alt="">
                                        </div>
                                        <p style="font-size: 0.28rem">下载</p>
                                        <p style="font-size: 0.28rem">鹰眼鉴房APP</p>
                              </div>
                              <div class="g-joinPaty-li" style="margin-left: 0.41rem">
                                        <div class="g-joinPaty-li-img">
                                                  <img src="/static/raffle/icon_sousuo@2x.png" alt="">
                                        </div>
                                        <p style="font-size: 0.28rem">搜索</p>
                                        <p style="font-size: 0.28rem">目标楼盘名称</p>
                              </div>
                              <div class="g-joinPaty-li" style="margin-left: 0.41rem">
                                        <div class="g-joinPaty-li-img">
                                                  <img src="/static/raffle/icon_yuyue@2x.png" alt="">
                                        </div>
                                        <p style="font-size: 0.28rem">预约</p>
                                        <p style="font-size: 0.28rem">质量监控服务</p>
                              </div>

                    </div>
                    <div class="g-problem">
                              <p class="g-problem1">楼盘监控服务是什么</p>
                              <p class="g-problem2">全方位了解施工质量</p>
                    </div>
                    <div class="g-monitoring">
                              <div class="g-monitoring-li" style="margin-left: 0.75rem">
                                        <div class="g-monitoring-li-img">
                                                  <img src="/static/raffle/pic_fangpai@2x.png" alt="">
                                        </div>
                                        <p>全景航拍</p>
                                        <p>施工进度</p>
                              </div>
                              <div class="g-monitoring-li" style="margin-left: 0.44rem">
                                        <div class="g-monitoring-li-img">
                                                  <img src="/static/raffle/pic_zhuanyebaogao@2x.png" alt="">
                                        </div>
                                        <p>专业报告</p>
                                        <p>定期更新</p>
                              </div>
                              <div class="g-monitoring-li" style="margin-left: 0.46rem">
                                        <div class="g-monitoring-li-img">
                                                  <img src="/static/raffle/pic_gongchengzhiliang%20@2x.png" alt="">
                                        </div>
                                        <p>工程质量</p>
                                        <p>一目了然</p>
                              </div>
                              <p class="g-monitoring-text">不再人肉探盘，足不出户即可直观感受楼盘进度，近千项专业监控点定期生成评测报告，让业主全程掌握新家动态。</p>
                    </div>
                    <div class="g-problem" style="margin-top: 0.3rem">
                              <p class="g-problem1">怎么开通楼盘质量监控服务</p>
                    </div>
                    <div class="g-open">
                              <p>分享并邀请其他业主参与本活动，当单个楼盘监控服务预约数达到500人，即可开启该楼盘质量监控服务。</p>
                    </div>
                    <div class="g-problem">
                              <p class="g-problem1">活动详情</p>
                    </div>
                    <div class="g-details">
                              <p style="margin-top: 0.8rem">1、活动时间为2018年6月11日至2018年7月15日；</p>
                              <p>2、活动结束后五个工作日内，中奖结果将于鹰眼鉴房官方服务号公布，中奖信息将通过鹰眼鉴房APP、手机短信的方式通知中奖者，请及时留意中奖信息；</p>
                              <p>3、活动期间成功开通“质量监控服务”的楼盘，随机抽取1名用户获得幸运大奖；</p>
                              <p>4、活动期间预约数达到500人的楼盘，每个楼盘随机抽取对应名额的预约用户获得楼盘专属大奖；</p>
                              <p>5、活动期间所有参与预约的用户，随机抽取500名用户获得预约普惠奖；</p>
                              <p>6、使用自助验房工具卡，可免除申请验房工具箱等待时间；</p>
                              <p>7、使用鉴房体验卡，可免提交购房资料开通监控服务；</p>
                              <p>8、本活动最终解释权归鹰眼鉴房所有。</p>
                    </div>
                    <div class="g-logo">
                              <img src="/static/raffle/pic_logo@2x.png" alt="">
                    </div>
                    <div class="g-downBtn" @click="f_downHandler" v-if="isAppBtn">
                              <span>立即下载</span>
                    </div>

          </div>

</template>

<script>
import OB from '../../common/js/obshare'
export default {
          data() {
                    return {
                              loadIs: false,
                              scheme_IOS: 'com.maijiaHome.MyHawkEyeApp://',
                              scheme_Adr: 'jump://start.yyjf/',
                              download_url_Adr: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.mjhome',
                              download_url_IOS: 'https://itunes.apple.com/cn/app/%E9%B9%B0%E7%9C%BC%E9%89%B4%E6%88%BF/id1298408736?mt=8',
                              timeout: 600,
                              isAppBtn: true,
                              title: '预约楼盘监控，免费赢取苹果手机',
                              desc: '免费预约质量监控服务，即有机会赢取iPhone X，更有海量京东储值卡、自助验房工具卡、手机充值卡、Q币等万元礼品等你拿',
                              imgUrl: 'http://oxrgdeqd8.bkt.clouddn.com/Artboard%203.png'
                    }
          },
          created() {
                    if (this.$route.query.type) {
                              this.isAppBtn = false;
                    } else {
                              this.isAppBtn = true;
                              this.$weixin(this.title, this.desc, this.imgUrl);
                    }
                    this.noScroll();
                    this.bgLoad();

          },
          mounted() {
                    this.prvImgLoad();
          },

          methods: {
                    prvImgLoad() {

                              let imgArr = [];
                              let count = 0;
                              let len = 0;
                              let i = 0;
                              let this_ = this;
                              imgArr = document.getElementsByTagName('img');
                              len = imgArr.length;
                              for (let i = 0; i < len; i++) {
                                        let img = new Image();
                                        img.onload = function () {
                                                  count++;
                                                  if (count == len - 1) {
                                                            this_.loadIs = true;
                                                  }
                                        };
                                        img.src = imgArr[i].src;
                              }

                    },
                    noScroll() {
                              $(document).on('touchmove', function (e) {
                                        e.preventDefault();
                              })
                    },
                    yesScroll() {
                              $(document).unbind();
                    },
                    bgLoad() {
                              let img = new Image();
                              let this_ = this;
                              img.onload = function () {
                                        this_.yesScroll();
                                        let id = setTimeout(() => {
                                                  this_.yesScroll();
                                                  clearTimeout(id);
                                        }, 5000);
                              };
                              img.src = '/static/raffle/bg_beijingtu1@2x.png';
                    },
                    openclient() {
                              let nav = navigator.userAgent;
                              let win = window;
                              let iph = /(iPhone|iPod|iPad);?/i;
                              let and = /android/i;
                              if (nav.match(iph)) {
                                        var nowTime = new Date().valueOf();
                                        setTimeout(() => {
                                                  var launchTime = new Date().valueOf() - nowTime;
                                                  if (launchTime < 150) {   //28是调试估算出来的打开本地app基本需要的时间
                                                            win.location = this.download_url_IOS;  //下载app页面
                                                  }
                                        }, 25);
                                        win.location = this.scheme_IOS;  //自己定义的scheme协议
                              } else if (nav.match(and)) {
                                        var nowTime = new Date().valueOf();
                                        setTimeout(() => {
                                                  var launchTime = new Date().valueOf() - nowTime;
                                                  if (launchTime < 150) {     //28是调试估算出来的打开本地app基本需要的时间
                                                            win.location = this.download_url_Adr;  //下载app页面
                                                  }
                                        }, 25);
                                        win.location = this.scheme_Adr;  //自己定义的scheme协议
                              } else {
                                        var nowTime = new Date().valueOf();
                                        setTimeout(() => {
                                                  var launchTime = new Date().valueOf() - nowTime;
                                                  if (launchTime < 150) {     //28是调试估算出来的打开本地app基本需要的时间
                                                            win.location = this.download_url_Adr;  //下载app页面
                                                  }
                                        }, 25);
                                        win.location = this.scheme_Adr;  //自己定义的scheme协议
                              }
                    },
                    isApp() {

                              let nav = navigator.userAgent;
                              let win = window;
                              let iph = /(iPhone|iPod|iPad);?/i;
                              let and = /android/i;
                              if (nav.match(iph)) {
                                        window.location.href = this.scheme_Adr;
                                        win.location = this.download_url_IOS;  //自己定义的scheme协议
                              } else if (nav.match(and)) {
                                        win.location = this.download_url_Adr;  //自己定义的scheme协议
                              } else {
                                        win.location = this.download_url_Adr;  //自己定义的scheme协议
                              }

                    },
                    f_downHandler() {

                              var u = navigator.userAgent;
                              if (OB.is_Weixin()) {
                                        this.isApp();
                              } else if (OB.is_WeiBo()) {
                                        window.open(this.download_url_Adr);
                              } else if (u.match(/\sQQ/i) !== null) {
                                        this.openclient();
                              } else {
                                        this.openclient();
                              }

                    }
          }
}
</script>
<style scoped>
.m-raffle {
        width: 7.5rem;
        margin: auto;
        height: 50.05rem;
        overflow: hidden;
        background-image: url("/static/raffle/bg_beijingtu1@2x.png");
        background-size: cover;
        background-repeat: no-repeat;
}

.m-raffle .g-tit .u-tit-img img,
.u-houseExclusive-trophy-li .u-houseExclusive-trophy-li-img img {
        width: 100%;
}

.m-raffle .g-tit {
        margin-top: 1.51rem;
        margin-left: 0.63rem;
        width: 5.32rem;
}

.m-raffle .g-tit .u-tit-img {
        width: 100%;
}

.m-raffle .g-tit .u-tit-text {
        margin-top: 0.12rem;
        position: relative;
        width: 4.82rem;
        height: 0.58rem;
        background: #fff;
        box-sizing: border-box;
        border-radius: 0.58rem;
        overflow: hidden;
}

.m-raffle .g-tit .u-tit-text .u-tit-text-bor {
        margin: 0.04rem auto 0;
        width: 4.7rem;
        height: 0.48rem;
        border: 1px solid #f7512f;
        border-radius: 0.48rem;
        position: relative;
        font-family: PingFangSC-Semibold;
        font-size: 0.3rem;
        color: #f7512f;
        letter-spacing: 0.02rem;
        line-height: 0.5rem;
        text-align: center;
}

.m-raffle .g-tit .u-tit-time {
        margin-top: 0.18rem;
        font-family: PingFangSC-Semibold;
        font-size: 0.24rem;
        color: #ffffff;
        letter-spacing: 0.016rem;
        line-height: 0.24rem;
}

.m-raffle .g-luckyPrize {
        padding-top: 0.1rem;
        margin-top: 0.65rem;
        width: 7.5rem;
        height: 4.07rem;
        background-image: url("/static/raffle/pic_dise_one@2x.png");
        background-size: cover;
}

.m-raffle .g-luckyPrize .u-g-luckyPrize-tit,
.u-g-houseExclusive-tit {
        font-family: PingFangSC-Semibold;
        font-size: 0.5rem;
        color: #ffffff;
        letter-spacing: 0.02rem;
        height: 0.7rem;
        line-height: 0.7rem;
        text-align: center;
}

.m-raffle .g-luckyPrize .g-luckyPrize-img {
        width: 4.98rem;
        margin: 1.08rem auto 0;
}

.m-raffle .g-luckyPrize .g-luckyPrize-foot span {
        margin-top: 0.33rem;
        font-family: PingFangSC-Semibold;
        font-size: 0.3rem;
        color: #e05e5e;
        letter-spacing: 0.02rem;
        overflow: hidden;
}

.m-raffle .g-luckyPrize .g-luckyPrize-foot span:nth-child(1) {
        float: left;
        margin-left: 1.03rem;
}

.m-raffle .g-luckyPrize .g-luckyPrize-foot span:nth-child(2) {
        float: right;
        margin-right: 0.99rem;
}

.m-raffle .g-houseExclusive {
        padding-top: 0.1rem;
        width: 7.5rem;
        height: 7.32rem;
        background-image: url("/static/raffle/pic_dise_two@2x.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
}

.m-raffle .g-appointment {
        padding-top: 0.1rem;
        width: 7.5rem;
        height: 4.45rem;
        background-image: url("/static/raffle/pic_dise_three@2x.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
}

.m-raffle .g-houseExclusive .u-houseExclusive-trophy {
        width: 6.3rem;
        height: 5.64rem;
        margin-top: 0.4rem;
        margin-left: 0.61rem;
}

.u-appointment-trophy {
        width: 6.3rem;
        height: 2.72rem;
        margin-top: 1.18rem;
        margin-left: 0.61rem;
}

.u-houseExclusive-trophy-li {
        width: 2.15rem;
        height: 1.82rem;
        padding: 0.5rem;
        float: left;
}

.u-houseExclusive-trophy-li .u-houseExclusive-trophy-li-img {
        width: 2rem;
        margin: 0 auto 0.2rem;
}

.u-houseExclusive-trophy-li p {
        margin-bottom: 0.09rem;
        font-family: PingFangSC-Semibold;
        font-size: 0.22rem;
        color: #e05e5e;
        letter-spacing: 0.0213rem;
        line-height: 0.22rem;
        text-align: center;
}

.g-problem {
        padding-left: 0.6rem;
        margin-bottom: 0.16rem;
}

.g-problem1,
.g-problem2 {
        font-family: PingFangSC-Semibold;
        color: #ffffff;
        letter-spacing: 0.02rem;
}

.g-problem1 {
        font-size: 0.5rem;
}

.g-problem2 {
        font-size: 0.3rem;
        margin-top: 0.06rem;
}

.g-joinPaty {
        width: 100%;
        height: 4.04rem;
        background-image: url("/static/raffle/pic_dise_four@2x.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
}

.g-monitoring {
        width: 100%;
        height: 6.19rem;
        background-image: url("/static/raffle/pic_dise_five@2x.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        overflow: hidden;
}

.g-joinPaty-li {
        width: 1.7rem;
        float: left;
        margin-top: 0.98rem;
}

.g-joinPaty-li .g-joinPaty-li-img {
        width: 1rem;
        height: 1rem;
        margin: 0 auto 0.2rem;
}

.g-joinPaty-li p {
        width: 100%;
        margin-bottom: 0.09rem;
        font-family: PingFangSC-Semibold;
        font-size: 0.22rem;
        color: #e05e5e;
        line-height: 0.3rem;
        text-align: center;
}

.g-monitoring-li {
        width: 1.7rem;
        float: left;
        margin-top: 0.98rem;
        margin-bottom: 0.28rem;
}

.g-monitoring-li .g-monitoring-li-img {
        width: 1.6rem;
        height: 1.6rem;
        margin: 0 auto 0.2rem;
}

.g-monitoring-li p {
        width: 100%;
        margin-bottom: 0.09rem;
        font-family: PingFangSC-Semibold;
        font-size: 0.28rem;
        color: #e05e5e;
        line-height: 0.3rem;
        text-align: center;
}

.g-monitoring-text {
        float: left;
        width: 5.9rem;
        margin-left: 0.75rem;
        text-align: justify;
        line-height: 0.4rem;
        font-family: PingFangSC-Semibold;
        font-size: 0.28rem;
        color: #e05e5e;
}

.g-open {
        width: 100%;
        height: 3.07rem;
        background-image: url("/static/raffle/pic_dise_six@2x.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        overflow: hidden;
}

.g-open p {
        width: 5.7rem;
        margin: 0.95rem auto 0;
        text-align: justify;
        line-height: 0.4rem;
        font-family: PingFangSC-Semibold;
        font-size: 0.28rem;
        color: #e05e5e;
}

.g-details {
        width: 100%;
        height: 8.76rem;
        background-image: url("/static/raffle/pic_dise_seven@2x.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        overflow: hidden;
}

.g-details p {
        width: 5.7rem;
        margin: 0.03rem auto 0;
        text-align: justify;
        line-height: 0.4rem;
        font-family: PingFangSC-Semibold;
        font-size: 0.28rem;
        color: #e05e5e;
}

.g-logo {
        margin: 0.09rem auto;
        width: 1.62rem;
        height: 0.36rem;
}

.g-downBtn {
        position: fixed;
        bottom: 0.26rem;
        left: 50%;
        margin-left: -3.12rem;
        width: 6.24rem;
        height: 0.92rem;
        font-family: PingFangSC-Medium;
        font-size: 0.32rem;
        color: #dc5300;
        letter-spacing: 0.017rem;
        background-image: url("/static/raffle/pic_anniu@2x.png");
        background-size: 100% auto;
        background-repeat: no-repeat;
        text-align: center;
        line-height: 0.92rem;
}

/*@media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {*/
/*.m-raffle {*/
/*background: red;*/
/*}*/
/*}*/
</style>
