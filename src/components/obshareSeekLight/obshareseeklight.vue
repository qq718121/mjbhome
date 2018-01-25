<template>
  <div class="seeklight">
    <div class="seeklight_top">
      <div class="seeklight_top_text">
        <p>为帮助更多业主监控所购房产的工程质量，鹰眼鉴房正式启动“质量寻光计划”！三步拍照上传，即可加入寻光计划，轻松赢取兑换现金红包！</p>
      </div>
    </div>
    <div class="money_ing"><img
      :src="this.$url.Xg_money" alt=""></div>
    <div class="activity_inner">
      <div class="activity_inner_top">
        <img src="http://oxrgdeqd8.bkt.clouddn.com/biaoqian_bg@2x.png" alt="">
        <span>活动内容</span>
      </div>
      <div class="activity_inner_text">
        <p>通过鹰眼鉴房APP提交在建楼盘工程进度图片和质量问题图片，通过审核即可获得50-100积分/张的积分奖励</p>
      </div>
      <div class="exchange_red">
        <div class="exchange_red_img">
          <img :src="this.$url.Xg_hongbao" alt="">
        </div>
      </div>
      <div class="hr_container">
        <div class="hr_">
          <img :src="this.$url.Xg_xixian" alt="">
        </div>
      </div>

      <div class="photo_inner">
        <div class="photo_inner_top">
          <div class="photo_inner_top_text">图片内容</div>
        </div>
        <div class="photo_inner_img">
          <img src="/static/xg/gongchengjindu_mig@3x.png" alt="">
        </div>
        <div class="photo_inner_list">
          <p>工程进度过程图片</p>
          <div class="ul_">
            <ul>
              <li v-for="(val,index) in this.photo_inner_list" :style="'background:'+photo_inner_list_bg(index)">
                {{val}}











              </li>
            </ul>
          </div>
        </div>
        <div class="problem_photo">
          <p>工程质量问题图片</p>
          <div class="problem_photo_type">
            <div>
              <p>楼栋</p>
              <div class="house_text">
                <p>包含楼体和户内两部分的质量问题照片</p>
              </div>
            </div>
            <div>
              <p>园区</p>
              <div class="house_text">
                <p>涉及园区路面景观等质量问题照片</p>
              </div>
            </div>
          </div>
        </div>
        <div class="photo_inner_list_hr">
          <div class="hr_">
            <img :src="this.$url.Xg_xixian" alt="">
          </div>
        </div>
      </div>
      <div class="photo_require">
        <div class="photo_inner_top">
          <div class="photo_inner_top_text">图片要求</div>
        </div>
        <div class="photo_require_list">
          <div>
            <img src="/static/xg/bilijujiao_mig.png" alt="">
          </div>
          <p style="white-space: nowrap">图片清晰，主题明确，无抖动拖影,</p>
          <p>横向拍照，长宽比例为4：3</p>
        </div>
        <div class="photo_require_list">
          <div>
            <img src="/static/xg/butongjiaoduweizhi_mig.png" alt="">
          </div>
          <p>每个位置点需上传三张照片，不同角度反映当前位置工程情况</p>
        </div>
      </div>

    </div>
    <div class="participate_in">
      <div class="border_bg">
        <div class="border_bg_top"></div>
        <div class="border_bg_inner">
          <div class="participate_in_inner">
            <div class="participate_in_top">
              <img src="http://oxrgdeqd8.bkt.clouddn.com/biaoqian_bg@2x.png" alt="">
              <span>参与方式</span>
            </div>
            <div class="qr_code"><img src="/static/xg/canyufangshi_weixinchahua@3x.png" alt=""></div>
            <p class="qr_code_text">长按二维码，或在应用商店下载“鹰眼鉴房”即可通过app参与活动</p>
            <div class="participate_in_text">
              <div class="participate_in_text_list" v-for="(val,index) in this.participate_in_text_list">
                <span>{{index + 1}}</span>
                <p>{{val}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="border_bg_footer"></div>
      </div>
    </div>
    <div class="audit_rule">
      <div class="border_bg">
        <div class="border_bg_top"></div>
        <div class="border_bg_inner">
          <div class="audit_rule_inner">
            <div class="audit_rule_top">
              <img src="http://oxrgdeqd8.bkt.clouddn.com/biaoqian_bg@2x.png" alt="">
              <span>审核规则</span>
            </div>
            <p class="audit_rule_title">照片通过审核后，将根据提交照片质量不同获得50-100积分/张的奖励</p>
            <div class="audit_rule_img"><img src="/static/xg/shenheguize_mig@3x.png" alt=""></div>
            <div class="audit_rule_text">
              <div class="audit_rule_text_list" v-for="(val,index) in this.audit_rule_text_list">
                <span>{{index + 1}}</span>
                <p>{{val}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="border_bg_footer"></div>
      </div>
    </div>
    <div class="footer_inner">
      <p>注意事项</p>
      <div class="footer_inner_list">
        <div class="footer_inner_list_text">
          <span>*</span>
          <p>上传照片严禁作假，一经发现存在违规情况，鹰眼鉴房保留取消奖励权利</p>
        </div>
        <div class="footer_inner_list_text">
          <span>*</span>
          <p>参与用户拍照时请注意自身安全，无防护措施下，请避免前往施工现场危险区域</p>
        </div>
        <div class="footer_inner_list_text">
          <span>*</span>
          <p>进入施工现场，请获得施工方允许</p>
        </div>
        <div class="footer_inner_list_text">
          <span>*</span>
          <p>照片请保证真实可信，客观反馈施工现场实际情况</p>
        </div>
        <div class="footer_inner_list_text">
          <span>*</span>
          <p>活动最终解释权归鹰眼鉴房所有。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'seeklight',
    data(){
      return {
        photo_inner_list: [
          '完整现场鸟瞰图',
          '进门总进度',
          '总体园区景观进度',
          '单个楼进度',
          '总体园区路面进度'
        ],
        participate_in_text_list: [
          '下载安装鹰眼鉴房APP，注册账号',
          '通过鹰眼鉴房自带的拍照功能提交所对应楼盘照片',
          '照片通过审核后即可获得奖励',
          '奖励下发至平台账号，用户可自行申请将积分兑换成现金红包'
        ],
        audit_rule_text_list: [
          '同一位置同一问题点图片只收录一次',
          '提交图片需清晰完整，从不同角度完整说明问题点情况',
          '图片需完整拍摄问题点全貌，而不是局部图',
          '正确选择问题点所属分类，加以具体文字描述，可提高审核通过几率'
        ]
      }
    },
    methods: {
      photo_inner_list_bg: function (index) {
        if (index % 2 == 0) {
          return '#ff866f'
        } else {
          return '#ffa490'
        }
      }
    }
  }
</script>
<style scoped>
  .seeklight {
    width: 7.5rem;
    margin: auto;
    background-image: radial-gradient(100% 154%, #FF806A 87%, #FF8755 100%);
    height: 74.9rem;
    position: relative;
  }

  .seeklight_top {
    width: 7.5rem;
    height: 9.88rem;
    background-image: url(http://oxrgdeqd8.bkt.clouddn.com/%E5%A4%B4%E5%9B%BE@2x.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }

  .seeklight_top_text {
    width: 6.47rem;
    height: 1.2rem;
    position: absolute;
    top: 5.71rem;
    left: 0.54rem;
  }

  .seeklight_top_text p {
    width: 6.2111rem;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #ED4427;
    letter-spacing: 0;
    text-align: justify;
  }

  .money_ing {
    width: 7rem;
    height: 2.59rem;
    position: absolute;
    top: 7.76rem;
    left: 0.25rem;
    z-index: 99;
  }

  .money_ing img {
    width: 100%;
    height: auto;
  }

  .activity_inner {
    width: 7.11rem;
    height: 33.1rem;
    margin: 0.29rem auto;
    background-image: url(http://oxrgdeqd8.bkt.clouddn.com/kuang1_bg@2x.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
  }

  .activity_inner_top {
    width: 3rem;
    position: absolute;
    top: 1.14rem;
    left: 2.055rem;
  }

  .participate_in_top, .audit_rule_top {
    width: 3rem;
    position: relative;
    margin: auto;
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

  .activity_inner_text {
    width: 4.78rem;
    height: 1.2rem;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #ED4427;
    letter-spacing: 0;
    position: absolute;
    left: 1.165rem;
    top: 2.26rem;
    text-align: justify;
  }

  .exchange_red {
    width: 100%;
    position: absolute;
    top: 4.1rem;
  }

  .exchange_red_img {
    width: 4.97rem;
    margin: auto;
  }

  .exchange_red_img img {
    width: 100%;
    height: auto;
  }

  .hr_container {
    width: 100%;
    position: absolute;
    top: 7.23rem;
  }

  .hr_ {
    width: 6.32rem;
    margin: auto;
  }

  .hr_ img {
    width: 100%;
    height: 1px;
  }

  .photo_inner {
    width: 100%;
    position: absolute;
    top: 7.78rem;
  }

  .photo_inner_top_text {
    width: 2.5rem;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 0.36rem;
    color: #ED4427;
    line-height: 0.48rem;
    background-image: url(http://oxrgdeqd8.bkt.clouddn.com/lALPBY0V4uaQ9ys0zQHu_494_52.png);
    background-size: 100%;
    background-repeat: no-repeat;
    margin: auto;
    background-position-y: 0.15rem;
  }

  .photo_inner_img {
    width: 5.29rem;
    height: 4.42rem;
    margin: auto;
  }

  .photo_inner_img img {
    width: 100%;
  }

  .photo_inner_list {
    width: 5.2rem;
    margin: auto;
  }

  .photo_inner_list ul {
    width: 5.2rem;
    margin: auto;
    display: inline-block;
  }

  .ul_ {
    width: 5.2rem;
    margin: auto;
    display: inline-block;
    border-radius: 0.12rem;
    overflow: hidden;
    margin-top: 0.2rem;
  }

  .photo_inner_list p, .problem_photo p {
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #FF602E;
  }

  .photo_inner_list ul li {
    height: 0.6rem;
    line-height: 0.6rem;
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #FFFFFF;
    letter-spacing: 0.028rem;
    text-align: center;
  }

  .problem_photo {
    width: 5.2rem;
    margin: 0.6rem auto;
  }

  .problem_photo_type {
    width: 5.2rem;
    height: 2.21rem;
    background: #FF6D51;
    border-radius: 0.12rem;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    margin-top: 0.2rem;
  }

  .problem_photo_type > div {
    width: 2.53rem;
    height: 100%;
    display: flex;
    flex-flow: column;
  }

  .problem_photo_type > div > p {
    height: 0.61rem;
    line-height: 0.61rem;
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #FFFFFF;
    letter-spacing: 0.028rem;
    background: #ffa490;
  }

  .house_text {
    flex: 1;
    display: flex;
    background: #ff866f;
  }

  .house_text p {
    width: 1.8rem;
    height: 1.2rem;
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #FFFFFF;
    letter-spacing: -0.0186rem;
    margin: auto;
    text-align: left;
  }

  .photo_require {
    position: absolute;
    top: 20.99rem;
    width: 100%;
  }

  .photo_require_list {
    width: 4.82rem;
    background: #fff;
    margin: 0.35rem auto;
    border-radius: 2px;
    box-shadow: 0px 0px 10px 0px #ff866f;
    padding: 0.35rem 0;
  }

  .photo_require_list div {
    width: 4.25rem;
    margin: auto;
  }

  .photo_require_list div img {
    width: 100%;
  }

  .photo_require_list p {
    width: 4.25rem;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #ED4427;
    line-height: 0.41rem;
    margin: auto;
    text-align: justify;
  }

  .participate_in {
    width: 7.12rem;
    height: 12.16rem;
    position: absolute;
    top: 43.91rem;
    left: 0.2rem;
  }

  .border_bg {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .border_bg_top {
    width: 100%;
    height: 1.2rem;
    position: absolute;
    background-image: url('/static/xg/KUANG2_app_bg Copy@3x.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .border_bg_inner {
    width: 100%;
    position: absolute;
    top: 1.2rem;
    bottom: 0.6rem;
  }

  .border_bg_footer {
    width: 6.54rem;
    height: 0.6rem;
    left: 0.29rem;
    position: absolute;
    bottom: 0;
    background-image: url('/static/xg/KUANG2_app_bg Copy 3@3x.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .participate_in_inner {
    width: 6.54rem;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0.29rem;
    background-image: url('/static/xg/KUANG2_app_bg Copy 2@3x.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .qr_code {
    width: 4.17rem;
    height: 4.42rem;
    margin: 0.4rem auto;
  }

  .qr_code img {
    width: 100%;
    height: auto;
  }

  .participate_in_text_list {
    width: 5rem;
    display: flex;
    justify-content: space-between;
    margin: auto;
  }

  .participate_in_text_list span {
    display: inline-block;
    width: 0.28rem;
    height: 0.28rem;
    background: #FF684E;
    border-radius: 0.28rem;
    line-height: 0.28rem;
    text-align: center;
    /*margin: auto;*/
    margin-top: 0.08rem;
    font-family: PangMenZhengDao;
    font-size: 0.2rem;
    color: #FFFFFF;
  }

  .participate_in_text_list p {
    width: 4.5rem;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #ED4427;
    line-height: 0.4rem;
    margin-bottom: 0.21rem;
  }

  .audit_rule {
    width: 7.12rem;
    height: 12.56rem;
    position: absolute;
    top: 56.71rem;
    left: 0.2rem;
  }

  .border_bg {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .border_bg_top {
    width: 100%;
    height: 1.2rem;
    position: absolute;
    background-image: url('/static/xg/KUANG2_app_bg Copy@3x.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .border_bg_inner {
    width: 100%;
    position: absolute;
    top: 1.2rem;
    bottom: 0.6rem;
  }

  .border_bg_footer {
    width: 6.54rem;
    height: 0.6rem;
    left: 0.29rem;
    position: absolute;
    bottom: 0;
    background-image: url('/static/xg/KUANG2_app_bg Copy 3@3x.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .audit_rule_inner {
    width: 6.54rem;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0.29rem;
    background-image: url('/static/xg/KUANG2_app_bg Copy 2@3x.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .audit_rule_img {
    width: 2.35rem;
    height: 3.85rem;
    margin: 0.4rem auto;
  }

  .qr_code img {
    width: 100%;
    height: auto;
  }

  .audit_rule_text_list {
    width: 5.4rem;
    display: flex;
    justify-content: space-between;
    margin: auto;
  }

  .audit_rule_text_list span {
    display: inline-block;
    width: 0.28rem;
    height: 0.28rem;
    background: #FF684E;
    border-radius: 0.28rem;
    line-height: 0.28rem;
    text-align: center;
    /*margin: auto;*/
    margin-top: 0.08rem;
    font-family: PangMenZhengDao;
    font-size: 0.2rem;
    color: #FFFFFF;
  }

  .audit_rule_title {
    width: 5.04rem;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #ED4427;
    line-height: 0.35rem;
    margin: 0.4rem auto;
  }

  .audit_rule_text_list p {
    width: 4.76rem;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #ED4427;
    line-height: 0.4rem;
    margin-bottom: 0.21rem;
  }

  .footer_inner {
    width: 100%;
    position: absolute;
    top: 69.8rem;
  }

  .footer_inner P {
    width: 100%;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 0.24rem;
    color: #FFFFFF;
  }

  .footer_inner_list {
    width: 6.467rem;
    border: 5px solid #ffb776;
    margin: 0.2rem auto;
    border-radius: 0.36rem;
    overflow: hidden;
    background: #fff;
    padding-top: 0.2rem;
  }

  .footer_inner_list_text {
    width: 5.97rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  .footer_inner_list_text p {
    width: 5.6rem;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #ED4427;
    letter-spacing: 0.012rem;
    line-height: 0.36rem;
    text-align: justify;
    margin-bottom: 0.2rem;
  }

  .footer_inner_list_text span {
    font-family: PingFangSC-Medium;
    font-size: 0.36rem;
    color: #ED4427;
  }

  .qr_code_text {
    width: 4.61rem;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 0.24rem;
    color: #212832;
    font-weight: 600;
    margin: 0 auto 0.6rem;
  }
</style>
