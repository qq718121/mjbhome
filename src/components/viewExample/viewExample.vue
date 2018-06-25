<template>
  <article class="viewExample">
    <p class="viewExample-title viewExample-title1">以下五种购房凭证，您可选择其中的1-3种上传作为审核凭据，请保证资料真实有效。</p>
    <p class="viewExample-title viewExample-title1">如有任何疑问，请联系官方客服微信：<span class="viewExample-title-span">yyjf101</span>核实
    </p>
    <div class="viewExample-img" v-for="(item,num) in imgArr" :key="num">
      <p>{{item.te}}</p>
      <div v-if="!preImg" class="viewExample-img-s"><img :src="item.da_sr" alt=""></div>
      <div v-else class="viewExample-img-s"><img :src="item.sr" alt=""></div>
    </div>
  </article>
</template>
<script>

  export default{
    data(){
      return {
        preImg: false,
        imgArr: [
          {
            te: '1.购房合同（商品房买卖合同）：',
            sr: 'http://oxrgdeqd8.bkt.clouddn.com/%E5%9B%BE%E7%89%87%202.png',
            da_sr: '/static/view/1.png'
          },
          {
            te: '2.购房发票（购房银行付款凭证）：',
            sr: 'http://oxrgdeqd8.bkt.clouddn.com/timg.jpg',
            da_sr: '/static/view/2.png'
          },
          {
            te: '3.购房收据：',
            sr: 'http://oxrgdeqd8.bkt.clouddn.com/lALPBbCc1eoJZNTNAjrNAaw_428_570.png_620x10000q90g.jpg',
            da_sr: '/static/view/3.png'
          },
          {
            te: '4.购房协议书（房屋订购协议书）：',
            sr: 'http://oxrgdeqd8.bkt.clouddn.com/%E5%9B%BE%E7%89%87%203.png',
            da_sr: '/static/view/4.png'
          }
        ]
      }
    },
    created(){
      this.preload(this.imgArr);
    },

    methods: {

      preload(Arr = []){

        let len = Arr.length;
        let count = 0;
        let this_ = this;

        for (let i = 0; i < len; i++) {
          let img = new Image();
          img.onload = function () {
            count++;
            if (count == 4) {
              this_.preImg = true;
            }
          };
          img.src = Arr[i].sr;
        }

      }
    }
  }
</script>
<style scoped>
  .viewExample {
    width: 6.9rem;
    margin: auto;
    padding: 0.3rem;
  }

  .viewExample-title {

    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    letter-spacing: 0.005rem;

  }

  .viewExample-title1 {
    line-height: 0.34rem;
    color: #212832;
  }

  .viewExample-title-span {
    color: #0080FF;
  }

  .viewExample-img {
    margin: 0.4rem auto 0;
  }

  .viewExample-img p {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #212832;
    line-height: 0.28rem;
  }

  .viewExample-img-s {
    width: 6.3rem;
    margin: 0.2rem auto 0;
  }
</style>
