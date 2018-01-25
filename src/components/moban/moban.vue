<template>
  <div class="moban">
    <div class="floor" @touchmove.prevent></div>
    <div class="moban_" @touchmove.prevent
         v-if='this.$store.state.school_class'>
      <div :class="['centers',this.$store.state.school_class]" v-if="this.$store.state.motai_num == '0' ">
        <div class='loadText'><p>{{this.loadTexts}}</p>
          <p>更多楼盘质量数据尽在鹰眼鉴房</p><span @click='loadHref'>{{this.loadHrefs}}</span><img :src=this.$url.moban_pic_load_title>
          <i v-on:click.prevent="cloce" class='el-icon-close' v-if="this.$store.state.is_close"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        animated_six: '',
        URL_Scheme: '',
        loadTexts: '下载APP查看详情',
        loadHrefs: '下载APP'
      }
    },
    created(){
//      this.app_exist();
    },
    methods: {
//关闭
      cloce(){
        this.$store.commit('set_school_class', 'animated bounceOutRight');
        this.$store.commit('change_motai');
      },
      loadHref(){
        window.location.href = 'http://www.homehawkeye.com/appDown.html';
        this.$store.commit('ismotai');
        this.cloce();
      },
//      app_exist(){
//        if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
//          var loadDateTime = new Date();
//          window.setTimeout(function () {
//              var timeOutDateTime = new Date();
//              if (timeOutDateTime - loadDateTime < 5000) {
//                this.loadText = '下载APP查看详情';
//                this.loadHref = '下载APP';
//              } else {
//                window.close();
//              }
//            },
//            25);
//          window.location = " apps custom url schemes ";
//        } else if (navigator.userAgent.match(/android/i)) {
//          var state = null;
//          try {
////            state = window.open("apps custom url schemes ", '_blank');
//            state = false;
//            this.loadText = '打开APP查看详情';
//            this.loadHref = '打开APP';
//          } catch (e) {
//          }
//          if (!state) {
//            this.loadText = '下载APP查看详情';
//            this.loadHref = '下载APP';
//          }
//        }
//      }
    }
  }
</script>

<style>
  .moban_ {
    left: 0;
    right: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.40);
    bottom: 0;
    top: 0;
    z-index: 999;
  }

  .centers {
    position: absolute;
    left: calc((100vw - 5.7rem)/2);
    top: 3rem;
    z-index: 999;
  }

  .loadText {
    width: 5.7rem;
    height: 4.1rem;
    background: #fff;
    border-radius: 0.08rem;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    position: relative;
  }

  .loadText p:nth-child(1) {
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #030303;
    letter-spacing: -0.39px;
    margin-top: 1rem;
  }

  .loadText p:nth-child(2) {
    opacity: 0.4;
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #030303;
    letter-spacing: -0.08px;
    line-height: 0.32rem;
    margin-top: 0.22rem;
  }

  .loadText span {
    display: inline-block;
    width: 4.5rem;
    height: 0.989rem;
    background: #5880F3;
    border-radius: 0.08rem;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #FFFFFF;
    line-height: 0.3rem;
    text-align: center;
    line-height: 0.98rem;
    margin-top: 0.43rem
  }

  .loadText img {
    position: absolute;
    top: -1.08rem;
    left: 1.7rem;
    width: 2.16rem;
    height: 2.16rem;
  }

  .loadText i {
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    color: #42464D;
  }

</style>
