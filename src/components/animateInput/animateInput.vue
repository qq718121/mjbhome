<template>
  <div class="animateInput">
    <div class="g-bg"><img src="http://oxrgdeqd8.bkt.clouddn.com/pinglundanmu.png" alt=""></div>
    <div class="g-bg-big"></div>
    <div class="g-tit-img">
      <img src="http://oxrgdeqd8.bkt.clouddn.com/biaoti.png" alt="">
    </div>
    <div class="g-m" @click="tryIn">
      <img src="http://oxrgdeqd8.bkt.clouddn.com/mengmianren.png" alt="">
    </div>
    <div class="g-btn" @click="tryIn"></div>
  </div>
</template>
<script>
  export default {
    data(){
      return {}
    },
    created(){
      this.openWX();
    },
    methods: {
      tryIn(){
        this.$router.push({
          path: '/animateInputOut'
        });
      },
      //微信授权验证
      openWX(){
        let CODE;
        const URL = this.$url.m_wx_login;
        if (!this.$route.query.userId) {
//        CODE = this.f_getParam().userId;
          window.location = URL;
        } else {
          CODE = this.$route.query.userId;
        }
      },
    }
  }
</script>
<style scoped>
  body {
    height: 100%;
  }

  .animateInput {
    position: relative;
    width: 7.5rem;
    margin: auto;
    overflow: hidden;
    background: #2c75e9;
    /*height: 100vh;*/
  }

  .g-tit-img img, .g-m img, .g-bg img {
    width: 100%;
  }

  .g-tit-img {
    position: relative;
    margin: 0.6rem auto 0;
    width: 6.2rem;
    height: 2.08rem;
  }

  .g-bg-big {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/bg.png');
    z-index: 0;
  }

  .g-bg {
    width: 100%;
    position: absolute;
    top: 4.35rem;
  }

  .g-m {
    width: 3.5rem;
    height: 5rem;
    position: relative;
    text-align: center;
    margin: 3rem auto 0 2.15rem;
    z-index: 99;
  }

  .g-btn {
    position: relative;
    margin: -0.44rem auto 0.74rem;
    width: 3.88rem;
    height: 1.23rem;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/%E4%BF%AE%E6%94%B9---%E6%88%91%E8%A6%81%E6%B5%8B%E8%AF%95.png');
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    text-align: center;
  }
</style>
