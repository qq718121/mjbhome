<template>
  <div class="loginDown">
    <div class="g-bg">
      <img src="http://oxrgdeqd8.bkt.clouddn.com/bg_d@3x.png" alt="">
    </div>
    <div class="g-tit-img">
      <img src="http://oxrgdeqd8.bkt.clouddn.com/wen_wenzi@3x.png" alt="">
    </div>
    <div class="g-page">
      <div class="u-page-tit">第一步</div>
      <div class="u-page-ine">
        <div class="u-page-ine-txt">
          <p>长按扫描二维码</p>
          <p>关注鹰眼鉴房官方服务号</p>
        </div>
        <div class="u-page-ine-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/QRcode@3x1.png" alt="">
        </div>
      </div>
    </div>
    <div class="g-page">
      <div class="u-page-tit">第二步</div>
      <div class="u-page-ine">
        <div class="u-page-ine-txt">
          <p>点击自动回复海报大图</p>
          <p>长按进入下载页面</p>
          <p>下载鹰眼鉴房APP</p>
          <p>随时随地查看新家进度</p>
        </div>
        <div class="u-page-ine-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/tu_huifu@3x.png" alt="">
        </div>
      </div>
    </div>
    <div class="g-down">
      <div class="u-down-img"><img src="http://oxrgdeqd8.bkt.clouddn.com/icon_logo@3x.png" alt=""></div>
      <div class="u-down-btn" @click="downs">下载APP</div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {}
    },
    methods: {
      downs(){
        window.location = this.$url.appDown;
      }
    }
  }
</script>
<style scoped>
  /*顶层容器*/
  .loginDown {
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

  .g-bg img, .g-tit-img img, .u-page-ine-img img, .u-down-img img {
    width: 100%;
  }

  .g-tit-img {
    position: relative;
    margin: 0.5rem auto 0;
    width: 5.46rem;
    height: 2.34rem;
  }

  .g-page {
    position: relative;
    margin: 0.62rem auto 0;
    width: 6.5rem;
    height: 2.61rem;
    background: #fff;
    border-radius: 0.08rem;
    padding-top: 0.72rem;
  }

  .g-page .u-page-tit {
    position: absolute;
    top: -0.32rem;
    left: 50%;
    margin-left: -1.5rem;
    width: 3rem;
    height: 0.64rem;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/bg_dise_n@3x.png');
    background-size: cover;
    text-align: center;
    line-height: 0.64rem;
    color: #fff;
  }

  .g-page .u-page-ine {
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    display: flex;
    justify-content: space-between;
  }

  .g-page .u-page-ine .u-page-ine-img {
    width: 2.2rem;
    height: 2.2rem;
  }

  .g-page .u-page-ine .u-page-ine-txt {
    width: 3.08rem;
    margin: auto;
  }

  .g-page .u-page-ine .u-page-ine-txt p {
    font-family: PingFangSC-Light;
    font-size: 0.28rem;
    color: #313131;
    line-height: 0.48rem;
  }

  .g-down {
    position: fixed;
    bottom: 0;
    width: 7.5rem;
    height: 1.58rem;
    background: #fff;
    display: flex;
  }

  .u-down-img {
    width: 2rem;
    margin: auto;
    margin-left: 0.5rem;
  }

  .u-down-img img {
    width: 100%;
  }

  .u-down-btn {
    margin: auto;
    margin-right: 0.3rem;
    width: 1.69rem;
    height: 0.64rem;
    background: #2E97FF;
    border-radius: 0.04rem;
    color: #fff;
    text-align: center;
    line-height: 0.64rem;
  }
</style>
