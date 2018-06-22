<template>
  <div class="monitoring">
    <article>
      <div class="pic_piaofuwu">
        <div :class='["pic_biaoti1",this.classname_biaoti]' v-if="biaoti_is"></div>
        <section :class='["header_house_img",this.className_piaofuwu]' v-if="biaofu_is">
          <div class="pic_biaoti"></div>
          <div :class='["pic_danmu",this.classname_danmu]' v-if="danmu_is"></div>
          <section class="monitoring_inner">
            <div class="new_post">
              <div class="new_post_title">
                <i class="left"></i>
                <h1>买房后续问题多</h1>
                <i class="right"></i>
              </div>
            </div>

            <div class="inner_post">
              <div class="inner_title">
                <i class="left"></i>
                <i class="right"></i>
              </div>
              <p>对自家新房建设进度不了解、施工进度看不到、担忧实物比承诺缩水太多…作为业主，有着数不尽的问题。鹰眼鉴房推出质量监控服务，让业主直观了解楼盘进度，心中有底，天天好梦到天明。</p>
            </div>

            <div class="new_post">
              <div class="new_post_title">
                <i class="left"></i>
                <h1>全方位守护您的新家</h1>
                <i class="right"></i>
              </div>
            </div>

            <div class="look_post">
              <div class="look_title">
                <i class="left"></i>
                <i class="right"></i>
              </div>
              <h1>720°航拍VR全景呈现</h1>
              <div class="look_post_img"></div>
              <p>室外无人机航拍全景楼盘进度</p>
              <p>实景视频展示建筑实况</p>
            </div>

            <div class="look_post">
              <div class="look_title">
                <i class="left"></i>
                <i class="right"></i>
              </div>
              <h1>过程质量全把握</h1>
              <div class="look_post_img1"></div>
              <p>涵盖工程进度、质量及整改前后对比</p>
              <p>通过专业报告深度了解楼盘进展</p>
            </div>

            <div class="look_post">
              <div class="look_title">
                <i class="left"></i>
                <i class="right"></i>
              </div>
              <h1>施工质量全透明</h1>
              <div class="look_post_img2"></div>
              <p>定期更新实际建筑进度</p>
              <p>可追踪千余项工程质量监控点</p>
            </div>

            <div class="new_post">
              <div class="new_post_title">
                <i class="left"></i>
                <h1>五大服务应对业主难题</h1>
                <i class="right"></i>
              </div>
            </div>

            <div class="feature_d" style="background: #fff">
              <div class="feature_post" style="margin-bottom: 0">
                <div class="feature_title">
                  <i class="left"></i>
                  <i class="right"></i>
                </div>
                <div class="pic_shuishisuidi"><img
                  src="http://oxrgdeqd8.bkt.clouddn.com/pic_shuishisuidi@3x_min.png?imageslim" alt=""></div>
                <div class="pic_jingzhundaohu"><img
                  src="http://oxrgdeqd8.bkt.clouddn.com/pic_jingzhundaohu@3x_min.png?imageslim" alt=""></div>
                <div class="pic_quanliuchenggenzong"><img
                  src="http://oxrgdeqd8.bkt.clouddn.com/pic_quanliuchenggenzong@3x_min.png?imageslim" alt=""></div>
                <div class="pic_quanfangweijiankong"><img
                  src="http://oxrgdeqd8.bkt.clouddn.com/pic_quanfangweijiankong@3x_min.png?imageslim" alt=""></div>
                <!--<div class="pic_gongzhengtouming"><img-->
                <!--src="http://oxrgdeqd8.bkt.clouddn.com/pic_gongzhengtouming@3x_min.png?imageslim" alt=""></div>-->

                <div class="number_title">
                  <div class="number_inner"><i class="img_num"><img
                    src="http://oxrgdeqd8.bkt.clouddn.com/pic_numberone@3x.png" alt=""></i>
                    <h1
                      class="num_title">进度清晰</h1></div>
                  <p class="num_text">多角度呈现新房进度</p>
                  <p class="num_text">不再人肉探盘</p>
                </div>
                <div class="number_two_title">
                  <div class="number_inner_two"><i class="img_num_two"><img
                    src="http://oxrgdeqd8.bkt.clouddn.com/pic_numbertwo@3x.png" alt=""></i>
                    <h1
                      class="num_title_two">随时随地</h1></div>
                  <p class="num_text_two">足不出户</p>
                  <p class="num_text_two">即可通过手机随时查看</p>
                </div>
                <div class="number_three_title">
                  <div class="number_inner"><i class="img_num_three"><img
                    src="http://oxrgdeqd8.bkt.clouddn.com/pic_numberthree@3x.png" alt=""></i>
                    <h1
                      class="num_title_three">质量透明</h1></div>
                  <p class="num_text">从面到点全流程跟踪</p>
                  <p class="num_text">长期跟进关注整改情况</p>
                </div>
                <div class="number_fore_title">
                  <div class="number_inner_fore"><i class="img_num_fore"><img
                    src="http://oxrgdeqd8.bkt.clouddn.com/pic_numberfour@3x.png" alt=""></i>
                    <h1
                      class="num_title_fore">专业规范</h1></div>
                  <p class="num_text_fore">建筑全过程评测</p>
                  <p class="num_text_fore">不再担心私自变更规划</p>
                </div>
                <!--<div class="number_five_title">-->
                <!--<div class="number_inner"><i class="img_num_five"><img-->
                <!--src="http://oxrgdeqd8.bkt.clouddn.com/pic_numberfive@3x.png" alt=""></i>-->
                <!--<h1-->
                <!--class="num_title_five">专业规范</h1></div>-->
                <!--<p class="num_text">建筑全过程评测</p>-->
                <!--<p class="num_text">不再担心私自变更规划</p>-->
                <!--</div>-->
              </div>
              <!--<div class="erweima" style="width:6.3rem;margin-top: 0">-->
              <!--<img style="width: 100%;" src="/static/xg/erweima.png" alt="">-->
              <!--</div>-->
            </div>

            <div class="u-foot">
              <img src="/static/xg/logo.png" alt="">
            </div>
          </section>
        </section>
      </div>
    </article>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        classname_biaoti: null,
        classname_danmu: null,
        className_piaofuwu: null,
        biaoti_is: false,
        danmu_is: true,
        biaofu_is: false
      }
    },
    mounted(){
      this.biaofu_is = true;
//      this.className_piaofuwu = 'animated pulse';
      this.biaoti_is = true;
      this.classname_biaoti = 'animated pulse';
//      setTimeout(() => {
//        this.danmu_is = true;
//        this.classname_danmu = 'animated bounceInUp'
//      }, 300)
    }
  }
</script>
<style scoped>
  .monitoring {
    width: 7.5rem;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/bg_quanliuchengjiankong@3x_min.png?imageslim');
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;
    margin: auto;
  }

  .pic_piaofuwu {
    width: 7.5rem;
    height: 50.69rem;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/pic_piaofuwu@3x_min.png?imageslim');
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;
  }

  .header_house_img {
    width: 7.5rem;
    height: 13.25rem;
    position: absolute;
    top: 1.85rem;
    z-index: 0;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/pic_zhushijue@3x_min.png?imageslim');
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 0.17rem;
    background-position-x: center;
  }

  .pic_biaoti {
    width: 6.5rem;
    height: 1.7rem;
    /*background-image: url('/static/pic_biaoti@3x.png');*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
    margin: auto;
  }

  .pic_biaoti1 {
    width: 6.5rem;
    height: 1.7rem;
    background-image: url('/static/pic_biaoti@3x.png');
    background-repeat: no-repeat;
    background-size: cover;
    margin: 1.03rem auto;
  }

  .pic_danmu {
    width: 7.5rem;
    height: 2.29rem;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/pic_danmu@3x_min.png?imageslim');
    background-repeat: no-repeat;
    background-size: cover;
    margin: 2.2rem auto 0;
  }

  .monitoring_inner {
    width: 6.3rem;
    margin: 0.8rem auto 0;
  }

  .monitoring_inner > div {
    margin: 0.31rem auto;
  }

  .new_post {
    width: 100%;
    height: 1.3rem;
    background: #FFFFFF;
    box-shadow: 0 2px 10px 0 rgba(0, 123, 255, 0.50);
    border-radius: 0.1rem;
    display: flex;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/pic_biaotilan@3x_min.png?imageslim');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .new_post_title {
    width: 100%;
    margin: auto;
    text-align: center;
    position: relative;
  }

  .new_post h1 {
    font-family: PingFangSC-Semibold, '微软雅黑';
    font-size: 0.32rem;
    color: #597CDB;
    letter-spacing: 0.03rem;
    line-height: 0.32rem;
    margin: 0 0.715rem 0 0.715rem;
  }

  .new_post_title i {
    display: inline-block;
    width: 0.61rem;
    height: 0.21rem;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/pic_zhuangshiwu@3x_min.png?imageslim');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .new_post_title .left {
    position: absolute;
    left: 0.53rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .new_post_title .right {
    position: absolute;
    right: 0.53rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .inner_post {
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0 2px 10px 0 rgba(0, 123, 255, 0.50);
    border-radius: 0.1rem;
    padding-top: 0.23rem;
    padding-bottom: 0.23rem;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/bg_fangkuaiduan@3x_min.png?imageslim');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .inner_post p {
    width: 5.38rem;
    margin: 0.13rem auto;
    font-family: MicrosoftYaHei;
    font-size: 0.24rem;
    color: #4E6F98;
    letter-spacing: 0.04rem;
    line-height: 0.4rem;
    text-align: justify;
  }

  .inner_title {
    width: 100%;
    height: 0.27rem;
    margin: auto;
    text-align: center;
    position: relative;
  }

  .inner_title i {
    display: inline-block;
    width: 0.61rem;
    height: 0.21rem;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/pic_zhuangshiwu@3x_min.png?imageslim');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .inner_title .left {
    position: absolute;
    left: 0.53rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .inner_title .right {
    position: absolute;
    right: 0.53rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .look_post {
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0 2px 10px 0 rgba(0, 123, 255, 0.50);
    border-radius: 0.1rem;
    padding-top: 0.23rem;
    padding-bottom: 0.23rem;
  }

  .look_post p {
    width: 5.4rem;
    margin: 0 auto 0;
    font-family: MicrosoftYaHei;
    font-size: 0.28rem;
    color: #4E6F98;
    letter-spacing: 0.04rem;
    line-height: 0.4rem;
    text-align: center;
  }

  .look_post h1 {
    width: 5.4rem;
    margin: 0.13rem auto;
    font-family: PingFangSC-Semibold;
    font-size: 0.32rem;
    color: #597CDB;
    letter-spacing: 0.03rem;
    line-height: 0.32rem;
    text-align: center;
  }

  .look_title {
    width: 100%;
    height: 0.27rem;
    margin: auto;
    text-align: center;
    position: relative;
  }

  .look_title i {
    display: inline-block;
    width: 0.61rem;
    height: 0.21rem;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/pic_zhuangshiwu@3x_min.png?imageslim');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .look_title .left {
    position: absolute;
    left: 0.53rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .look_title .right {
    position: absolute;
    right: 0.53rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .look_post_img {
    width: 5.7rem;
    height: 2.85rem;
    margin: 0.3rem auto;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/tupian1.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .look_post_img1 {
    width: 5.7rem;
    height: 2.85rem;
    margin: 0.3rem auto;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/tupian2.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .look_post_img2 {
    width: 5.7rem;
    height: 2.85rem;
    margin: 0.3rem auto;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/tupian3.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .feature_post {
    width: 100%;
    height: 15.07rem;
    background: #FFFFFF;
    padding-top: 0.23rem;
    /*padding-bottom: 0.23rem;*/
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/bg_fangkuai@3x_min.png?imageslim');
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }

  .feature_d {
    box-shadow: 0 2px 10px 0 rgba(0, 123, 255, 0.50);
    border-radius: 0.1rem;
  }

  .feature_title {
    width: 100%;
    height: 0.27rem;
    margin: auto;
    text-align: center;
    position: relative;
  }

  .feature_title i {
    display: inline-block;
    width: 0.61rem;
    height: 0.21rem;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/pic_zhuangshiwu@3x_min.png?imageslim');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .feature_title .left {
    position: absolute;
    left: 0.53rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .feature_title .right {
    position: absolute;
    right: 0.53rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .footer__ {
    width: 3rem;
    height: 0.4rem;
    margin: auto;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/pic_logo@3x_min.png?imageslim');
    background-repeat: no-repeat;
    background-size: cover;

  }

  .pic_shuishisuidi {
    width: 3rem;
    height: 3rem;
    position: absolute;
    left: 0.27rem;
    top: 0.67rem;
  }

  .pic_jingzhundaohu {
    width: 3rem;
    height: 3rem;
    position: absolute;
    right: 0.24rem;
    top: 4.3rem;
  }

  .pic_quanliuchenggenzong {
    width: 3rem;
    height: 3rem;
    position: absolute;
    left: 0.28rem;
    top: 7.91rem;
  }

  .pic_quanfangweijiankong {
    width: 3rem;
    height: 3rem;
    position: absolute;
    right: 0.24rem;
    top: 11.53rem;
  }

  .pic_gongzhengtouming {
    width: 3rem;
    height: 3rem;
    position: absolute;
    left: 0.28rem;
    top: 15.11rem;
  }

  .pic_shuishisuidi img, .pic_jingzhundaohu img, .pic_quanliuchenggenzong img, .pic_quanfangweijiankong img, .pic_gongzhengtouming img {
    width: 100%;
    height: auto;
  }

  .number_title {
    width: 2.78rem;
    height: 1.39rem;
    position: absolute;
    right: 0.24rem;
    top: 1.59rem;
  }

  .number_two_title {
    width: 3rem;
    height: 1.39rem;
    position: absolute;
    left: 0.16rem;
    top: 5.22rem;
  }

  .number_three_title {
    width: 3rem;
    height: 1.27rem;
    position: absolute;
    right: 0.24rem;
    top: 8.83rem;
  }

  .number_fore_title {
    width: 3rem;
    height: 1.27rem;
    position: absolute;
    left: 0.28rem;
    top: 12.45rem;
  }

  .number_five_title {
    width: 3rem;
    height: 1.27rem;
    position: absolute;
    right: 0.15rem;
    top: 15.9rem;
  }

  .number_inner {
    position: relative;
    width: 2.77rem;
    height: 0.7rem;

  }

  .img_num {
    width: 0.28rem;
    height: 0.5rem;
    position: absolute;
    bottom: 0.2rem;
  }

  .img_num img {
    width: 0.28rem;
    height: auto;
  }

  .img_num_three img {
    width: 0.41rem;
    height: auto;
  }

  .img_num_three {
    width: 0.41rem;
    height: 0.5rem;
    position: absolute;
    bottom: 0.1rem;
  }

  .num_title_three {
    font-family: PingFangSC-Semibold;
    font-size: 0.32rem;
    color: #597CDB;
    letter-spacing: 0.03rem;
    line-height: 0.32rem;
    position: absolute;
    bottom: 0.15rem;
    left: 0.53rem;
  }

  .img_num_five img {
    width: 0.41rem;
    height: auto;
  }

  .img_num_five {
    width: 0.41rem;
    height: 0.5rem;
    position: absolute;
    bottom: 0.17rem;
  }

  .num_title_five {
    font-family: PingFangSC-Semibold;
    font-size: 0.32rem;
    color: #597CDB;
    letter-spacing: 3px;
    line-height: 0.32rem;
    position: absolute;
    bottom: 0.2rem;
    left: 0.53rem;
  }

  .num_title {
    font-family: PingFangSC-Semibold;
    font-size: 0.32rem;
    color: #597CDB;
    letter-spacing: 3px;
    line-height: 0.32rem;
    position: absolute;
    bottom: 0.2rem;
    left: 0.38rem;
  }

  .num_text {
    font-family: MicrosoftYaHei;
    font-size: 0.24rem;
    color: #4E6F98;
    letter-spacing: 0.04rem;
    line-height: 0.4rem;
  }

  .number_inner_two {
    position: relative;
    width: 2.77rem;
    height: 0.7rem;
    margin-right: 0 !important;
  }

  .img_num_two {
    width: 0.41rem;
    height: 0.5rem;
    position: absolute;
    bottom: 0.2rem;
    right: 0;
  }

  .img_num_two img {
    width: 0.41rem;
    height: auto;
  }

  .num_title_two {
    font-family: PingFangSC-Semibold;
    font-size: 0.32rem;
    color: #597CDB;
    letter-spacing: 0.03rem;
    line-height: 0.32rem;
    position: absolute;
    bottom: 0.2rem;
    right: 0.53rem;
  }

  .num_text_two {
    font-family: MicrosoftYaHei;
    font-size: 0.24rem;
    color: #4E6F98;
    letter-spacing: 0.04rem;
    line-height: 0.4rem;
    text-align: right;
    padding-right: 0.05rem;
  }

  .number_inner_fore {
    position: relative;
    width: 2.77rem;
    height: 0.7rem;
    margin-right: 0 !important;
  }

  .img_num_fore {
    width: 0.41rem;
    height: 0.5rem;
    position: absolute;
    bottom: 0.095rem;
    right: 0;
  }

  .img_num_fore img {
    width: 0.41rem;
    height: auto;
  }

  .num_title_fore {
    font-family: PingFangSC-Semibold;
    font-size: 0.32rem;
    color: #597CDB;
    letter-spacing: 0.03rem;
    line-height: 0.32rem;
    position: absolute;
    bottom: 0.2rem;
    right: 0.53rem;
  }

  .num_text_fore {
    font-family: MicrosoftYaHei;
    font-size: 0.24rem;
    color: #4E6F98;
    letter-spacing: 0.04rem;
    line-height: 0.4rem;
    text-align: right;
    padding-right: 0.05rem;
  }

  .u-foot {
    width: 2.12rem;
    height: 0.49rem;
    position: relative;
    margin: auto;
  }

  .u-foot img {
    width: 100%;
  }
</style>
