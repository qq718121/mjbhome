<template>
  <div class="titBar2">
    <span class="backIcom" @click="backs" v-show="!isApp">
      <img src="/static/tool/icon_fanhui_n@3x.png" alt="">
    </span>
    <span @click="checkIcon(0)" class="titBarTit1" :style="`color:${iconColor}`">{{titBarTit1}}<i
      v-if="iconBar"></i></span>
    <span @click="checkIcon(1)" class="titBarTit2" :style="`color:${iconColor2}`">{{titBarTit2}}<i v-if="!iconBar"></i></span>
  </div>
</template>
<script>
  export default {
    props: {
      titBarTits1: {
        default: ''
      },
      titBarTits2: {
        default: ''
      },
      isBar: {
        default: ''
      }
    },
    data(){
      return {
        titBarTit1: '',
        titBarTit2: '',
        iconBar: true,
        iconColor: '#0080ff',
        iconColor2: '#8B949E',
        isApp: null
      }
    },
    created(){
      let u = window.sessionStorage.getItem('isBar');
      this.isApp = u;
      this.titBarTit1 = this.titBarTits1;
      this.titBarTit2 = this.titBarTits2;
    },
    methods: {
      backs(){
        this.$router.go(-1);
      },
      checkIcon(type){
        this.$emit('checkIc', type);
        if (type == 0) {
          this.iconBar = true;
          this.iconColor = '#0080ff';
          this.iconColor2 = '#8B949E';
        } else {
          this.iconBar = false;
          this.iconColor2 = '#0080ff';
          this.iconColor = '#8B949E';
        }
      }
    }
  }
</script>
<style scoped>
  .backIcom img {
    width: 100%;
  }

  .titBar2 {
    position: fixed;
    top: 0;
    z-index: 3;
    width: 7.5rem;
    height: 0.88rem;
    line-height: 0.72rem;
    color: rgba(16, 16, 16, 1);
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    box-shadow: 0 0 0.1rem 0 rgba(225, 225, 225, 0.50);
    color: #212832;
    background: #fff;
    /*background-color: rgba(247, 247, 247, 1);*/
  }

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
    left: 0.24rem;
    width: 0.35rem;
  }

  .titBarTit1 {
    position: relative;
    height: 0.88rem;
    line-height: 0.88rem;
    display: inline-block;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #8B949E;
  }

  .titBarTit2 {
    position: relative;
    line-height: 0.88rem;
    margin-left: 0.42rem;
    height: 0.88rem;
    display: inline-block;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #8B949E;
  }

  .titBarTit1 i, .titBarTit2 i {
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -0.4rem;
    display: inline-block;
    width: 0.8rem;
    border-bottom: 0.04rem solid #0080ff;
  }
</style>
