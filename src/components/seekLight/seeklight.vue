<template>
  <div class="seeklight">
    <div class="seeklight_top">
      <div class="u-topImg">
        <div class="u-topImg1"><img src="/static/xg/biaotizi.png" alt=""></div>
        <div class="u-topImg2"><img src="/static/xg/pic_xunguangjihuatoutu.png" alt=""></div>
      </div>
    </div>
    <div class="g-mes">
      <div class="u-ges-img">
        <img style="width: 100%;" src="/static/xg/baisebeijing_bg1.png" alt="">
      </div>
      <div class="u-mes-text">
        <div class="u-mes-textImg"><img src="/static/xg/xiaoren_2_mig.png" alt=""></div>
        <div style="margin: auto">
          <p>对这些问题有疑问？</p>
          <p>快看过来！质量寻光计划带你拨开迷雾</p>
        </div>
      </div>
    </div>
    <div class="activity_inner">
      <div class="s-bg">
        <div class="s-bg-top"><img src="/static/xg/huangsekuang_bg_03.png" alt=""></div>
        <div class="s-bg-inner"></div>
        <div class="s-bg-foot"><img src="/static/xg/huangse03_bg.png" alt=""></div>
      </div>
      <div class="u-inr-title">
        <div class="u-inr-titleImg"><img src="/static/xg/biaotizi_1_pic.png" alt=""></div>
      </div>
      <div class="activity_inner_top">
        <div class="u-inner-img1"><img src="/static/xg/lansetiaofu%20copy.png" alt=""></div>
        <div class="u-inner-img2"><img src="/static/xg/huoquloupanzuixinxinxi_mig.png" alt=""></div>
        <div class="u-inner-text"><p>在楼盘详情页上方点击业主圈，便可立即进入，与其他业主实时交流，进一步了解该楼盘最新信息！</p></div>
      </div>
      <div class="g-inner-top1">
        <div class="u-inner1-img1"><img src="/static/xg/lansetiaofu.png" alt=""></div>
        <div class="u-inner-img2"><img src="/static/xg/gongxiangzuixinziliao_mig.png" alt=""></div>
        <div class="u-inner-text"><p>可随时查阅楼盘建设的图片信息，获取最新施工进度及质量情况，在线讨论楼盘问题，即时了解房屋质量概况。</p></div>
      </div>
    </div>
    <div class="g-takeIn">
      <div class="s-bg">
        <div class="s-bg-top"><img src="/static/xg/huangsekuang_bg_03.png" alt=""></div>
        <div class="s-bg-inner"></div>
        <div class="s-bg-foot"><img src="/static/xg/huangse03_bg.png" alt=""></div>
      </div>
      <div class="u-inr-title">
        <div class="u-inr-titleImg"><img src="/static/xg/biaoti_2_pic.png" alt=""></div>
      </div>
      <div class="activity_inner_top">
        <div class="g-takeIn-imgTop"><img src="/static/xg/pic_saomiaoerweima.png" alt=""></div>
        <p>仅需下载鹰眼鉴房APP，搜索关注楼盘，进入楼盘详情页就可以看到寻光计划的海量内容啦！</p>
      </div>
    </div>
    <div class="u-foot">
      <img src="/static/xg/logo.png" alt="">
    </div>
  </div>
</template>
<script>
  export default{
    name: 'seeklight',
  }
</script>
<style scoped>
  .seeklight {
    width: 7.5rem;
    margin: auto;
    background: linear-gradient(to bottom, #2961FD, #5A9FFF 30%, #2961FD); /* 标准的语法 */
    height: 40.85rem;
    position: relative;
  }

  .seeklight_top {
    position: relative;
    width: 7.5rem;
  }

  .u-topImg {
    /*position: absolute;*/
    /*top:0.97rem;*/
    padding-top: 0.97rem;
    margin: auto;
    width: 6.4rem;
  }

  .u-topImg2 {
    width: 5.57rem;
    margin: 0.4rem auto 0;
  }

  .u-topImg2 img {
    width: 100%;
  }

  .u-mes-text {
    display: flex;
    margin: auto;
    width: 6.39rem;
  }

  .u-mes-text p {
    width: 5.24rem;
    text-align: justify;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #FFF;
    letter-spacing: 0.028rem;
  }

  .u-inr-titleImg {
    margin: auto;
    width: 2.73rem;
  }

  .g-mes {
    margin-top: -0.91rem;
    width: 7.5rem;
    position: relative;
    z-index: 99;
  }

  .activity_inner {
    width: 7.11rem;
    height: 11.05rem;
    margin: 0.85rem auto;
    position: relative;
  }

  .g-takeIn {
    width: 7.11rem;
    height: 4.6rem;
    margin: 3.85rem auto 0;
    position: relative;
  }

  .u-inner-img1 {
    width: 4.28rem;
    margin: auto;
  }

  .u-inner1-img1 {
    width: 4.28rem;
    margin: auto;
  }

  .u-mes-textImg {
    width: 1.18rem;
  }

  .u-inner-img2 {
    width: 2.55rem;
    margin: auto;
  }

  .s-bg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .s-bg-top {
    width: 100%;
  }

  .g-takeIn-imgTop {
    margin: 0 auto 0.549rem;
    width: 2.55rem;
  }

  .s-bg-inner {
    margin: auto;
    width: 6.565rem;
    height: 100%;
    background-image: url('/static/xg/baisebeijing_pic_2.png');
    background-size: 100% 100%;
  }

  .s-bg-foot {
    margin: auto;
    width: 6.565rem;
  }

  .u-inr-title {
    position: absolute;
    top: -0.4rem;
    width: 100%;
    text-align: center;
  }

  .u-inner-text {
    margin-top: 0.3rem;
    width: 100%;
  }

  .u-inner-text p, .activity_inner_top p {
    margin: auto;
    width: 5.29rem;
    height: 1.2rem;
    text-align: justify;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #2059DA;
  }

  .activity_inner_top {
    width: 100%;
    position: absolute;
    top: 1.54rem;
  }

  .g-inner-top1 {
    width: 100%;
    position: absolute;
    top: 7.24rem;
  }

  .activity_inner_top img, .participate_in_top img, .audit_rule_top img {
    width: 100%;
  }

  .activity_inner_top span, .participate_in_top span, .audit_rule_top span {
    position: absolute;
    font-family: PingFangSC-Medium;
    font-size: 0.36rem;
    color: #FFFFFF;
    top: 0;
    left: 0.78rem;
  }

  .u-foot {
    width: 2.12rem;
    height: 0.49rem;
    position: absolute;
    bottom: 0.3rem;
    left: 50%;
    margin-left: -1.06rem;
  }

  .u-foot img {
    width: 100%;
  }

</style>
