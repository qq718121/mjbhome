<template>
  <div class="monitoring">
    <article>
      <div class="pic_piaofuwu">
        <section :class='["header_house_img",this.className_piaofuwu]'  v-if="biaofu_is">
          <div :class='["pic_biaoti",this.classname_biaoti]' v-if="biaoti_is"></div>
          <div :class='["pic_danmu",this.classname_danmu]' v-if="danmu_is"></div>
          <section class="monitoring_inner">

            <div class="new_post">
              <div class="new_post_title">
                <i class="left"></i>
                <h1>质量监控新姿势</h1>
                <i class="right"></i>
              </div>
            </div>

            <div class="inner_post">
              <div class="inner_title">
                <i class="left"></i>
                <i class="right"></i>
              </div>
              <p>作为购房者，你是不是有数不尽问题？关于质量的忧心，是不是让你一直夜不能寐？鹰眼鉴房推出全流程监控服务，通过全景监控和监控数据报告，让您直观监控房屋质量，心中有底，天天好梦到天明。</p>
            </div>

            <div class="new_post">
              <div class="new_post_title">
                <i class="left"></i>
                <h1>什么是全流程监控</h1>
                <i class="right"></i>
              </div>
            </div>

            <div class="inner_post">
              <div class="inner_title">
                <i class="left"></i>
                <i class="right"></i>
              </div>
              <p>
                全流程监控，是鹰眼鉴房通过全景监控和监控数据报告，为购房人提供园区、楼栋公共区域以及户内区域从规划到施工的全流程质量监督服务。其通过航拍以及监控点实拍展示，打破时间和空间限制帮助购房人实景感受楼盘施工落实情况，并以分期监控数据报告，使购房人全方位可了解楼盘质量细节。</p>
            </div>

            <div class="look_post">
              <div class="look_title">
                <i class="left"></i>
                <i class="right"></i>
              </div>
              <h1>可视化全景监控</h1>
              <div class="look_post_img"></div>
              <p>实景呈现，无死角多点全方位展示项目细节。多角度，分期展示，实景图片监控一览无遗。打破时间和空间限制，全景监控不同时期工程质量。</p>
            </div>

            <div class="look_post">
              <div class="look_title">
                <i class="left"></i>
                <i class="right"></i>
              </div>
              <h1>深度质量监控报告</h1>
              <div class="look_post_img"></div>
              <p>多份深度监控报告，全方位展示楼盘工程质量透明化展示楼盘整体施工进度，全面跟进工程进度持续监控跟进问题点状态，多维度展示楼盘全流程周期数据</p>
            </div>

            <div class="new_post">
              <div class="new_post_title">
                <i class="left"></i>
                <h1>全流程监控有何特色</h1>
                <i class="right"></i>
              </div>
            </div>

            <div class="feature_post">
              <div class="feature_title">
                <i class="left"></i>
                <i class="right"></i>
              </div>
              <div class="pic_shuishisuidi"><img src="http://oxrgdeqd8.bkt.clouddn.com/pic_shuishisuidi@3x_min.png?imageslim" alt=""></div>
              <div class="pic_jingzhundaohu"><img src="http://oxrgdeqd8.bkt.clouddn.com/pic_jingzhundaohu@3x_min.png?imageslim" alt=""></div>
              <div class="pic_quanliuchenggenzong"><img src="http://oxrgdeqd8.bkt.clouddn.com/pic_quanliuchenggenzong@3x_min.png?imageslim" alt=""></div>
              <div class="pic_quanfangweijiankong"><img src="http://oxrgdeqd8.bkt.clouddn.com/pic_quanfangweijiankong@3x_min.png?imageslim" alt=""></div>
              <div class="pic_gongzhengtouming"><img src="http://oxrgdeqd8.bkt.clouddn.com/pic_gongzhengtouming@3x_min.png?imageslim" alt=""></div>

              <div class="number_title">
                <div class="number_inner"><i class="img_num"><img
                  src="http://oxrgdeqd8.bkt.clouddn.com/pic_numberone@3x.png" alt=""></i>
                  <h1
                    class="num_title">随时随地</h1></div>
                <p class="num_text">线上全景监控质量</p>
                <p class="num_text">打破时间空间的限制</p>
              </div>
              <div class="number_two_title">
                <div class="number_inner_two"><i class="img_num_two"><img
                  src="http://oxrgdeqd8.bkt.clouddn.com/pic_numbertwo@3x.png" alt=""></i>
                  <h1
                    class="num_title_two">精准到户</h1></div>
                <p class="num_text_two">绑定购房人所购房屋</p>
                <p class="num_text_two">提供精准房屋监控信息</p>
              </div>
              <div class="number_three_title">
                <div class="number_inner"><i class="img_num_three"><img
                  src="http://oxrgdeqd8.bkt.clouddn.com/pic_numberthree@3x.png" alt=""></i>
                  <h1
                    class="num_title_three">全流程跟踪</h1></div>
                <p class="num_text">从面到点全流程跟踪</p>
                <p class="num_text">长期跟进关注整改情况</p>
              </div>
              <div class="number_fore_title">
                <div class="number_inner_fore"><i class="img_num_fore"><img
                  src="http://oxrgdeqd8.bkt.clouddn.com/pic_numberfour@3x.png" alt=""></i>
                  <h1
                    class="num_title_fore">全方位监控</h1></div>
                <p class="num_text_fore">全景监控直观了解</p>
                <p class="num_text_fore">身临其境掌握工程质量</p>
              </div>
              <div class="number_five_title">
                <div class="number_inner"><i class="img_num_five"><img
                  src="http://oxrgdeqd8.bkt.clouddn.com/pic_numberfive@3x.png" alt=""></i>
                  <h1
                    class="num_title_five">公正透明</h1></div>
                <p class="num_text">质量问题可一目了然</p>
                <p class="num_text">监控信息公正真实透明</p>
              </div>

            </div>

            <footer>
              <div class="footer__"></div>
            </footer>
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
    height: 58.72rem;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/bg_quanliuchengjiankong@3x_min.png?imageslim');
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;
    margin: auto;
  }

  .pic_piaofuwu {
    width: 7.5rem;
    height: 55.72rem;
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
    background-image: url(http://oxrgdeqd8.bkt.clouddn.com/pic_zhushijue@3x_min.png?imageslim);
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 0.17rem;
    background-position-x: center;
  }

  .pic_biaoti {
    width: 5.9rem;
    height: 1.7rem;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/pic_biaoti@3x_min.png?imageslim');
    background-repeat: no-repeat;
    background-size: cover;
    margin: auto;
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
    text-align: left;
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
    margin: 0.13rem auto;
    font-family: MicrosoftYaHei;
    font-size: 0.24rem;
    color: #4E6F98;
    letter-spacing: 0.04rem;
    line-height: 0.4rem;
    text-align: left;
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
    width: 4.31rem;
    height: 4.31rem;
    margin: auto;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/pic_keshihuaquanjingjiankong@3x_min.png?imageslim');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .feature_post {
    width: 100%;
    height: 18.76rem;
    background: #FFFFFF;
    box-shadow: 0 2px 10px 0 rgba(0, 123, 255, 0.50);
    border-radius: 0.1rem;
    padding-top: 0.23rem;
    padding-bottom: 0.23rem;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/bg_fangkuai@3x_min.png?imageslim');
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
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
</style>
