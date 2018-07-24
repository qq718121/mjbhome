<template>
  <div class="animateInputOver">
    <div class="g-tit">关注“鹰眼鉴房”官方微信获取更多信息</div>
    <div id="test-target1" class="g-ine">
      <p v-if="zi">长按保存图片分享至朋友圈</p>
      <span v-if="names">{{$route.query.name}}</span>
      <img :src="codeImg" alt="">
      <div class="g-code">
        <img :src="this.$url.codePhoto" alt="">
      </div>
    </div>
    <div class="g-btn" @click="appDowns">
      <img style="width: 100%;"
           src="http://oxrgdeqd8.bkt.clouddn.com/%E7%82%B9%E5%87%BB%E4%B8%8B%E8%BD%BD%E6%8C%89%E9%92%AE.png" alt="">
    </div>
    <!--<div id="result">-->
    <!--<img :src="codeImg" alt="">-->
    <!--</div>-->
  </div>
</template>
<script>
  import html2canvas from "html2canvas";
  export default{
    data(){
      return {
        imgArr: [
          'http://oxrgdeqd8.bkt.clouddn.com/gff.png',
          'http://oxrgdeqd8.bkt.clouddn.com/%E9%92%A2%E9%93%81.png',
          'http://oxrgdeqd8.bkt.clouddn.com/%E7%BE%8E%E9%98%9F.png',
          'http://oxrgdeqd8.bkt.clouddn.com/%E9%94%A4%E5%AD%90.png',
          'http://oxrgdeqd8.bkt.clouddn.com/%E8%9C%98%E8%9B%9B%E4%BE%A0.png'
        ],
        ids: 'test-target1',
        codeImg: '',
        zi: false,
        names:true
      }
    },
    mounted(){
      this.preImg();
    },
    methods: {
      //预加载选项图片
      preImg(){
        let this_ = this;
        for (let i = 0; i < this.imgArr.length; i++) {
          let img = document.createElement('img');
          img.src = this.imgArr[i];
          img.style.display = 'none';
          document.body.appendChild(img);
          if (i == this.imgArr.length - 1) {
            img.onload = function () {
              this_.codeImg = this_.imgArr[this_.$route.query.id * 1 - 1];
              this_.$nextTick(() => {
                this_.screenshots();
              })
            }
          }
        }
      },
      screenshots() {
        html2canvas(document.getElementById('test-target1'), {logging: false, useCORS: true}).then(canvas => {
          var dataUrl = canvas.toDataURL("image/png");
          this.codeImg = dataUrl;
          setTimeout(() => {
            this.zi = true;
            this.names = false;
          }, 200)
        });
      },
      appDowns(){
        window.location = this.$url.appDown;
      }
    }
  }
  //431030
</script>
<style scoped>
  .animateInputOver {
    position: relative;
    width: 7.5rem;
    margin: auto;
    overflow: hidden;
  }

  .g-tit {
    font-size: 0.3rem;
    font-family: MicrosoftYaHei-Bold;
    color: rgba(87, 87, 87, 1);
    line-height: 0.4rem;
    font-weight: 900;
    text-align: center;
    margin: 0.5rem auto 0.25rem;
  }

  .g-ine {
    position: relative;
    width: 5.06rem;
    margin: auto;
  }

  .g-ine span {
    display: inline-block;
    width: 1.3rem;
    text-align: center;
    font-size: 0.3rem;
    font-family: MicrosoftYaHei-Bold;
    color: rgba(87, 87, 87, 1);
    line-height: 0.4rem;
    font-weight: 600;
    position: absolute;
    top: 1.01rem;
    left: 0.65rem;
    white-space: pre-wrap;
  }

  .g-ine p {
    position: absolute;
    top: 0.36rem;
    width: 100%;
    text-align: center;
    font-size: 0.3rem;
    font-family: MicrosoftYaHei-Bold;
    color: rgba(255, 255, 255, 1);
    line-height: 0.4rem;
  }

  .g-btn {
    position: relative;
    margin: 0.23rem auto 0;
    width: 3.42rem;
    height: 1.32rem;
  }

  .g-code {
    position: absolute;
    bottom: 0.2rem;
    right: 0.2rem;
    width: 0.9rem;
    height: 0.9rem;
  }
</style>
