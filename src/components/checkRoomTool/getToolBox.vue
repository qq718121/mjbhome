<template>
  <div class="getToolBox">
    <TitBar
      titBarTits="领取工具箱流程"
    />
    <div class="g-stage">
      <div class="g-stage-tit">
        <p>第一步   添加客服微信</p>
      </div>
      <div class="g-stage-ine">
        <p class="g-stage-head" style="width: 5.95rem;">请搜索添加官方客服微信 yyjf101 或保存客服二维码</p>
        <div class="g-stage-code">
          <div class="g-stage-img">
            <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_erweima@3x.png" alt="">
          </div>
          <div class="g-stage-btn" style="margin-left: 0.66rem">
            <span>长按图片保存二维码</span>
          </div>
        </div>
        <p style="width: 5.25rem;">可通过微信二维码扫描功能上传二维码进行添加</p>
      </div>
    </div>
    <div class="g-stage">
      <div class="g-stage-tit">
        <p>第二步   提供您的相关信息</p>
      </div>
      <div class="g-stage-text">
        <p class="g-stage-head">请提供您的真实姓名、手机号及配送地址，以便我们的客服人员尽快将您所需的工具箱配送至您的手中。</p>
        <div class="g-stage-text-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_tigongxinxi@3x.png" alt="">
        </div>
      </div>
    </div>
    <div class="g-stage">
      <div class="g-stage-tit">
        <p>第三步   缴纳工具箱押金</p>
      </div>
      <div class="g-stage-text">
        <p class="g-stage-head">通过微信向客服转账缴纳工具箱押金 200元 ，客服人员会提供给您一个唯一的用户编码，请妥善保管。</p>
        <div class="g-stage-text-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_jiaonayajin@3x.png" alt="">
        </div>
        <div class="g-stage-tps">
          <p>TIPS小贴士</p>
          <p>
            为什么要缴纳押金鹰眼鉴房的自助验房，免费向业主提供验房工具的共享服务，为防止工具损坏、丢失，让更多业主能够享受到共享工具的便捷性，需缴纳押金200元，待工具返还并确保无损坏、丢失情况后，向缴纳押金的业主全数退还押金。</p>
        </div>
      </div>
    </div>
    <div class="g-stage">
      <div class="g-stage-tit">
        <p>第四步   快递工具箱</p>
      </div>
      <div class="g-stage-text">
        <p class="g-stage-head">鹰眼鉴房的客服人员将按照您提供的地址，将工具箱快递至该地点，供您自助验房使用。</p>
        <div class="g-stage-text-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_kuaidigongjuxiang@3x.png" alt="">
        </div>
      </div>
    </div>
    <div class="g-stage">
      <div class="g-stage-tit">
        <p>第五步   返还工具箱</p>
      </div>
      <div class="g-stage-text">
        <p class="g-stage-head">
          使用完成后，请您将工具箱快递返还至如下地址：郑州市xx区xxxxxxxxxxx室。并与我们的客服人员取得联系，待工具箱确认无损坏、丢失情况后，将押金全数退回（往返邮费需自理）</p>
        <div class="g-stage-text-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_fanhuaigongju@3x.png" alt="">
        </div>
        <div class="g-stage-text-img" style="margin-top: 0.3rem">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_tuiyajin@3x.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import TitBar from '../common/titBar.vue'
  export default {
    components: {TitBar},
    data(){
      return {}
    },
    created(){
      window.scrollTo(0, 0);
    },
  }
</script>
<style scoped>
  .getToolBox {
    width: 7.5rem;
    margin: auto;
    padding-top: 0.88rem;
  }

  .g-stage {
    width: 6.9rem;
    margin: 0.3rem auto 0.2rem;
    box-shadow: 0 0 0.1rem 0 rgba(225, 225, 225, 0.50);
  }

  .g-stage-tit {
    padding: 0.3rem 0.25rem;
    border-bottom: 1px solid #EEEEEE;
  }

  .g-stage-ine {
    padding: 0.3rem;
  }

  .g-stage-ine p {
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #7F8893;
    letter-spacing: 0.01rem;
    line-height: 0.24rem;
    text-align: justify;
  }

  .g-stage-img {
    width: 1.8rem;
  }

  .g-stage-img img {
    width: 100%;
  }

  .g-stage-code {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
  }

  .g-stage-btn {
    margin: auto;
    width: 2.8rem;
    height: 0.64rem;
    background: #0080FF;
    border-radius: 1rem;
    text-align: center;
    color: #fff;
    line-height: 0.64rem;
  }

  .g-stage-head {
    margin: 0.22rem auto;
    width: 6.3rem;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #7F8893;
    letter-spacing: 0.01rem;
    line-height: 0.4rem;
  }

  .g-stage-text {
    padding-bottom: 0.4rem;
  }

  .g-stage-text-img {
    width: 6.3rem;
    height: 4rem;
    margin: auto;
  }

  .g-stage-text-img img {
    width: 100%;
  }

  .g-stage-tps {
    margin: 0.3rem auto 0.4rem;
    width: 5.7rem;
    background: #F7F7F7;
    padding: 0.3rem;
  }

  .g-stage-tps p:nth-child(1) {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #212832;
    line-height: 0.28rem;
  }

  .g-stage-tps p:nth-child(2) {
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #8B949E;
    line-height: 0.4rem;
    margin-top: 0.1rem;
  }
</style>
