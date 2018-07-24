<template>
  <div class='tenement'>
    <div class='tenementTop'>
      <i></i><i></i>
      <div class='tenementTopImg'>
        <img :src='tenement_data.topImg ? tenement_data.topImg : this.$url.error_img'>
        <div class='tenementTopBar'>
          <p>{{tenement_data.tenement_houseName}}</p>
          <p>楼盘物业评测报告</p>
          <p>{{tenement_data.tenement_date}}</p>
        </div>
      </div>
      <div class='tenementTopText'>
        <div class='tenementTopLv'>
          <p>{{tenement_data.tenement_lv ? tenement_data.tenement_lv : '无' }}</p>
          <p>物业评测评级</p>
        </div>
        <div class='tenementTopLv2'>
          <p>{{tenement_data.tenement_plan ? tenement_data.tenement_plan : '0' }}<span class="￥_￥">元</span></p>
          <p>物业费</p>
        </div>
        <div class="clear"></div>
        <p
          style='text-align:center;margin-top:0.4rem;font-family: PingFangSC-Regular;font-size: 0.22rem;color: #9E9E9E;'>
          * 评级是由鹰眼鉴房的评分数值综合评定<br/>最高评级为S+，共划分为7个等级</p>
      </div>
    </div>

    <div class='tenementHr'>
      <i></i>
      <img src='../../../static/gray.svg'>
      <span>得分板块及达标率</span>
      <img src='../../../static/gray.svg'>
      <i></i>
    </div>

    <div class='tenementRate'>
      <div v-for="(value,index) in tenement_data.tenement_reach">
        <span :class="$class_name_ftn.classNames(value.lv)">{{$class_name_ftn.storeNam(value.lv)}}</span>
        <p>{{value.name}}</p>
      </div>
    </div>

    <div class='tenementHr'>
      <i></i>
      <img src='../../../static/gray.svg'>
      <span>总体评价</span>
      <img src='../../../static/gray.svg'>
      <i></i>
    </div>

    <div class='tenementoveralls' v-html="tenement_data.tenement_text"></div>

    <div class='tenementHr'>
      <i></i>
      <img src='../../../static/gray.svg'>
      <span>楼盘物业评测</span>
      <img src='../../../static/gray.svg'>
      <i></i>
    </div>

    <div class='tenementOne' v-for='(key,index) in this.tenement_data.tenement_reach'>
      <div class='tenementOneTop'>
        <div class='tenementOneTitle'>
          <span>
            <img :src='$class_name_ftn.tenement_img(key.id)'>
          </span>
          <span>{{key.name}}</span>
        </div>
        <div :class="$class_name_ftn.tenement_class(key.id)" v-if="key.plate.text">
          <i></i><i></i>
          <div><p v-html="key.plate.text"></p></div>
        </div>
      </div>

      <div class='tenementOneText' v-if=" key.plate.what || key.plate.what_text ">
        <p>{{key.plate.what}}</p>
        <div>
          <p v-html="key.plate.what_text"></p>
        </div>
      </div>

      <div class='tenementOneText' v-if=" key.plate.optimize || key.plate.optimize_text ">
        <p>{{key.plate.optimize}}</p>
        <div>
          <p v-html="key.plate.optimize_text"></p>
        </div>
      </div>

    </div>

    <div class='tenementHr'>
      <i></i>
      <img src='../../../static/gray.svg'>
      <span>楼盘物业基本情况</span>
      <img src='../../../static/gray.svg'>
      <i></i>
    </div>

    <div class='tenementOne'>
      <div class='tenementOneTop'>
        <div class='tenementOneTitle'>
          <span>
            <img :src='this.$url.icon_scg_wyxqImg'>
          </span>
          <span>物业详情</span>
        </div>
        <div class="qualityOneIndexFive"><i></i><i></i>
          <ul class="detial">
            <li v-for="val in this.tenement_data.detial" v-if="val.name !== '资质' ">
              <span class="setail_name">{{val.name}}</span>
              <span class="setail_content">{{val.name == '物业费' ? val.content + '元' : val.content}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

  export default {
    data(){
      return {
        tenement_data: {}
      }
    },
//    created(){
//      try {
//        parent.document.getElementsByClassName('headline')[0].style.display = 'none';
//        parent.document.querySelector('img').style.display = 'none';
//        if (parent.parent.localStorage.is == 'true') {
//          let commit = this.$store.commit;
//          commit('set_motai', '0');
//          commit('set_school_class', 'animated bounceIn');
//          commit('change_motai');
//          this.$store.commit('close_show');
//        } else {
//          return;
//        }
//      }
//      catch (e) {
//
//      }
//    },
    mounted(){
      let this_ = this;
      this.$Axios.get(this.$url.httpRequest + 'buidingProperty/' + this.$route.params.id).then(function (res) {
        let data = JSON.parse(this_.$getDAesString(res, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq"));
        this_.tenement_data = data.response.data;
      }).catch(function (err) {
        console.log(err);
      });
    }
  }
</script>
<style>
  .clear {
    clear: both
  }

  .￥_￥ {
    font-family: PingFangSC-Light;
    font-size: 0.4rem;
    color: #5880F3;
    line-height: 0.8rem;
  }

  .tenement {
    max-width: 15rem;
    background: #f2f3f7;
    border-top: 2px solid #E0E0E0;
    padding-top: 0.42rem;
    padding-bottom: 1rem;
  }

  .tenementTop {
    width: 6.9rem;
    height: 8rem;
    margin: auto;
    box-shadow: 0 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    position: relative
  }

  .tenementTop .projectTopImg {
    width: 6.9rem;
    height: 4.4rem;
    position: relative;
    border-radius: 6px;
  }

  .tenementTop i:nth-child(1) {
    width: 0;
    height: 0;
    border-top: 0.3rem solid transparent;
    border-left: 0.3rem solid #f2f3f7;
    border-bottom: 0.3rem solid transparent;
    position: absolute;
    z-index: 1;
    left: -0.05rem;
    top: 4.1rem;
  }

  .tenementTop i:nth-child(2) {
    width: 0;
    height: 0;
    border-top: 0.3rem solid transparent;
    border-right: 0.3rem solid #f2f3f7;
    border-bottom: 0.3rem solid transparent;
    position: absolute;
    z-index: 1;
    right: -0.05rem;
    top: 4.1rem;
  }

  .tenementTop .tenementTopImg img {
    width: 100%;
    height: 4.4rem;
    border-radius: 6px;
  }

  .tenementTop .tenementTopBar {
    width: 6.9rem;
    height: 4.4rem;
    background: rgba(0, 0, 0, 0.50);
    position: absolute;
    top: 0;
    border-radius: 6px;
  }

  .tenementTop .tenementTopBar p:nth-child(1) {
    font-family: PingFangSC-Semibold;
    font-size: 0.6rem;
    color: #FFFFFF;
    text-align: center;
    margin-top: 1.4rem;
  }

  .tenementTop .tenementTopBar p:nth-child(2) {
    font-family: PingFangSC-Light;
    font-size: 0.36rem;
    color: #FFFFFF;
    line-height: 0.36rem;
    text-align: center;
    margin-top: 0.16rem;
  }

  .tenementTop .tenementTopBar p:nth-child(3) {
    font-family: PingFangSC-Light;
    font-size: 0.2rem;
    color: #FFFFFF;
    line-height: 0.2rem;
    text-align: center;
    margin-top: 0.32rem;
  }

  .tenementTop .tenementTopText {
    width: 6.9rem;
    height: 3.2rem;
    background: #fff;
    padding-top: 0.4rem;
    border-radius: 6px
  }

  .tenementTop .tenementTopText .tenementTopLv {
    float: left;
    width: 2.4rem;
    height: 1.8rem;
    margin-left: 0.6rem;
    display: flex;
    flex-flow: column;
  }

  .tenementTop .tenementTopText .tenementTopLv p:nth-child(1) {
    font-family: PingFangSC-Thin;
    font-size: 0.8rem;
    color: #5880F3;
    line-height: 0.8rem;
    text-align: center;
    margin-top: 0.2rem;
    font-weight: 200;
  }

  .tenementTop .tenementTopText .tenementTopLv p:nth-child(2) {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #42464D;
    text-align: center;
    margin-top: 0.2rem;
  }

  .tenementTop .tenementTopText .tenementTopLv2 {
    float: left;
    width: 3.64rem;
    height: 1.8rem;
    margin-left: 0.2rem;
  }

  .tenementTop .tenementTopText .tenementTopLv2 p:nth-child(1) {
    font-family: PingFangSC-Thin;
    font-size: 0.8rem;
    color: #5880F3;
    line-height: 0.8rem;
    text-align: center;
    margin-top: 0.2rem;
    font-weight: 200;
  }

  .tenementTop .tenementTopText .tenementTopLv2 p:nth-child(2) {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #42464D;
    text-align: center;
    margin-top: 0.042rem;
  }

  .tenementHr {
    width: 6.9rem;
    height: 0.44rem;
    margin: auto;
    line-height: 0.44rem;
    text-align: center;
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;
    margin-bottom: 0.4rem;
    font-family: PingFangSC-Light;
    font-size: 0.32rem;
    color: #42464D;
  }

  .tenementHr span {
    white-space: nowrap;
  }

  .tenementHr i {
    display: inline-block;
    width: 1.5rem;
    height: 0;
    border-top: 0.02rem solid #42464D;
    margin-top: 0.2rem
  }

  .tenementRate {
    width: 6.9rem;
    height: 5rem;
    margin: auto;
    text-align: center
  }

  .tenementRate div {
    width: 2.04rem;
    height: 2.3rem;
    background: #FFFFFF;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.08rem;
    text-align: center;
    float: left;
    margin: 0.13rem 0.13rem 0.13rem
  }

  .defaults {
    display: inline-block;
    width: 0.78rem;
    height: 0.78rem;
    border-radius: 0.78rem;
    background: #E0E0E0;
    font-family: PingFangSC-Light;
    font-size: 0.36rem;
    color: #FFFFFF;
    text-align: center;
    line-height: 0.78rem;
    margin-top: 0.46rem;
  }

  .green {
    display: inline-block;
    width: 0.78rem;
    height: 0.78rem;
    border-radius: 0.78rem;
    background: #70CAA8;
    font-family: PingFangSC-Light;
    font-size: 0.36rem;
    color: #FFFFFF;
    text-align: center;
    line-height: 0.78rem;
    margin-top: 0.46rem;
  }

  .blue {
    display: inline-block;
    width: 0.78rem;
    height: 0.78rem;
    border-radius: 0.78rem;
    background: #5880F3;
    font-family: PingFangSC-Light;
    font-size: 0.36rem;
    color: #FFFFFF;
    text-align: center;
    line-height: 0.78rem;
    margin-top: 0.46rem;
  }

  .pu {
    display: inline-block;
    width: 0.78rem;
    height: 0.78rem;
    border-radius: 0.78rem;
    background: #879EC4;
    font-family: PingFangSC-Light;
    font-size: 0.36rem;
    color: #FFFFFF;
    text-align: center;
    line-height: 0.78rem;
    margin-top: 0.46rem;
  }

  .red {
    display: inline-block;
    width: 0.78rem;
    height: 0.78rem;
    border-radius: 0.78rem;
    background: #FE6E6E;
    font-family: PingFangSC-Light;
    font-size: 0.36rem;
    color: #FFFFFF;
    text-align: center;
    line-height: 0.78rem;
    margin-top: 0.46rem;
  }

  .tenementRate div p {
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #4C4C4C;
    margin-top: 0.2rem;
  }

  .tenementoveralls {
    width: 6.9rem;
    margin: auto;
    padding-bottom: 0.4rem;
    text-align: center;
    background-image: linear-gradient(-180deg, #5880F3 0%, #5311FD 100%);
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.08rem;
    color: #fff !important;
  }

  .tenementoveralls p {
    width: 5.98rem;
    display: inline-block;
    margin: 0.25rem auto 0.1rem;
    font-family: PingFangSC-Regular;
    font-size: 0.34rem;
    color: #FFFFFF !important;
    letter-spacing: 0;
    line-height: 0.6rem;
    text-align: left;
  }

  .tenementoveralls p span {
    color: #FFFFFF !important;
  }

  .tenementOne {
    width: 6.9rem;
    margin: auto;
    background: #FFFFFF;
    box-shadow: 0 1px 0.12rem 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.08rem;
    margin-top: 0.6rem;
  }

  .tenementOneTop {
    width: 6.9rem;
    position: relative;
  }

  .tenementOne > div {
    border: 1px solid #f2f3f7
  }

  .tenementOneTitle {
    display: flex;
    justify-content: center;
    width: 3.4rem;
    margin: 0.4rem auto;
    position: relative;
  }

  .tenementOneTitle span:nth-child(1) {
    width: 0.7rem;
    height: 0.7rem;
    line-height: 0.592rem;
    margin-right: 0.2rem;
  }

  .tenementOneTitle span img {
    width: 0.7rem;
    height: 0.7rem;
  }

  .tenementOneTitle span:nth-child(2) {
    display: inline-block;
    line-height: 0.7rem;
    font-family: PingFangSC-Thin;
    font-size: 0.36rem;
    color: #42464D;
  }

  .tenementOneTitleImg {
    margin: 0.19rem auto;
    width: 0.4rem;
    height: 0.36rem;
    background-image: linear-gradient(-180deg, #AB91FA 0%, #2A61FF 100%);
  }

  .qualityOneIndex {
    width: 7.26rem;
    background: #5880F3;
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #FFFFFF;
    line-height: 0.38rem;
    bottpm: 0.4rem;
    left: -0.2rem;
    text-align: left;
    margin-bottom: 0.4rem;
    position: relative;
  }

  .qualityOneIndex p {
    width: 5.98rem;
    margin: auto;
    padding: 0.4rem;
  }

  .qualityOneIndex i:nth-child(1) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #2846c2;
    border-left: 0.16rem solid transparent;
    position: absolute;
    left: 0;
    top: -0.095rem
  }

  .qualityOneIndex i:nth-child(2) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #2846c2;
    border-right: 0.16rem solid transparent;
    position: absolute;
    right: 0;
    top: -0.095rem
  }

  .tenementOneDoor div:nth-child(2) {
    width: 4.4rem;
    heiight: 1.9rem;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #81899E;
    line-height: 0.38rem;
    margin-top: 0.4rem;
    margin-left: 0.48rem
  }

  .tenementOneText p:nth-child(1) {
    font-family: PingFangSC-Semibold;
    font-size: 0.36rem;
    color: #5880F3;
    margin-top: 0.2rem;
    margin-left: 0.48rem
  }

  .tenementOneText div p:nth-child(1) {
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #81899E;
    line-height: 0.38rem;
    margin: 0.2rem 0 0.4rem 0.48rem;
  }

  .tenementOneText {
    width: 6.9rem;
    padding-bottom: 0.4rem;
    background: #FFFFFF;
    border: 0.02rem solid #E5E8F0
  }

  .tenementOnePlan {
    width: 6.9rem;
    background: #FFFFFF;
    border: 1px solid #E5E8F0;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem
  }

  .tenementOnePlan p {
    width: 6rem;
    margin: 0.1rem auto;
    display: flex;
    justify-content: space-between;
    line-height: 0.4rem
  }

  .tenementOnePlan p:nth-child(1) span:nth-child(1) {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #42464D;
  }

  .tenementOnePlan p:nth-child(1) span:nth-child(2) {
    font-family: PingFangSC-Light;
    font-size: 0.4rem;
    color: #42464D;
  }

  .tenementOnePlan p span:nth-child(1) {
    opacity: 0.4;
    font-family: PingFangSC-Regular;
    font-size: 0.22rem;
    color: #4C4C4C;
  }

  .tenementOnePlan p span:nth-child(2) {
    opacity: 0.4;
    font-family: PingFangSC-Regular;
    font-size: 0.22rem;
    color: #4C4C4C;
  }

  .qualityOneIndexTwo {
    width: 7.26rem;
    background: #7bb88e;
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #FFFFFF;
    line-height: 0.38rem;
    position: relative;
    left: -0.2rem;
    text-align: left;
    margin-bottom: 0.4rem;
  }

  .qualityOneIndexTwo p {
    width: 5.98rem;
    margin: auto;
    padding: 0.4rem;
  }

  .qualityOneIndexTwo i:nth-child(1) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #3d7454;
    border-left: 0.16rem solid transparent;
    position: absolute;
    left: 0;
    top: -0.095rem
  }

  .qualityOneIndexTwo i:nth-child(2) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #3d7454;
    border-right: 0.16rem solid transparent;
    position: absolute;
    right: 0;
    top: -0.095rem
  }

  .qualityOneIndexThree {
    width: 7.26rem;
    background: #f18585;
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #FFFFFF;
    line-height: 0.38rem;
    position: relative;
    left: -0.2rem;
    text-align: left;
    margin-bottom: 0.4rem;
  }

  .qualityOneIndexThree p {
    width: 5.98rem;
    margin: auto;
    padding: 0.4rem;
  }

  .qualityOneIndexThree i:nth-child(1) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #a74844;
    border-left: 0.16rem solid transparent;
    position: absolute;
    left: 0;
    top: -0.095rem
  }

  .qualityOneIndexThree i:nth-child(2) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #a74844;
    border-right: 0.16rem solid transparent;
    position: absolute;
    right: 0;
    top: -0.095rem
  }

  .qualityOneIndexFour {
    width: 7.26rem;
    background: #7c72b7;
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #FFFFFF;
    line-height: 0.38rem;
    position: relative;
    left: -0.2rem;
    text-align: left;
    margin-bottom: 0.4rem;
  }

  .qualityOneIndexFour p {
    width: 5.98rem;
    margin: auto;
    padding: 0.4rem;
  }

  .qualityOneIndexFour i:nth-child(1) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #3d3469;
    border-left: 0.16rem solid transparent;
    position: absolute;
    left: 0;
    top: -0.095rem
  }

  .qualityOneIndexFour i:nth-child(2) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #3d3469;
    border-right: 0.16rem solid transparent;
    position: absolute;
    right: 0;
    top: -0.095rem
  }

  .qualityOneIndexFive {
    width: 7.26rem;
    background: #4a5970;
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #FFFFFF;
    line-height: 0.38rem;
    position: relative;
    left: -0.2rem;
    text-align: left;
    margin-bottom: 0.4rem;
  }

  .qualityOneIndexFive p {
    width: 5.98rem;
    margin: auto;
    padding: 0.4rem;
  }

  .qualityOneIndexFive i:nth-child(1) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #202f50;
    border-left: 0.16rem solid transparent;
    position: absolute;
    left: 0;
    top: -0.095rem
  }

  .qualityOneIndexFive i:nth-child(2) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #202f50;
    border-right: 0.16rem solid transparent;
    position: absolute;
    right: 0;
    top: -0.095rem
  }

  .tenementFoot {
    width: 6.9rem;
    background: #FFFFFF;
    box-shadow: 0 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.09), 0 0.02rem 0.04rem 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.08rem;
    margin: 0.4rem auto
  }

  .tenementFootImg {
    width: 6.9rem;
    height: 3.78rem;
    border-radius: 0.08rem;
  }

  .tenementFootImg img {
    width: 6.9rem;
    height: 3.78rem;
    border-radius: 0.08rem;
  }

  .tenementFootTitle {
    padding-left: 0.4rem
  }

  .tenementFootText {
    padding-left: 0.4rem;
    padding-bottom: 0.4rem;
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #4C4C4C
  }

  .tenementFootText p {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #4C4C4C;
    line-height: 0.38rem;
    margin: 0.4rem 0 0;
    width: 5.98rem
  }

  .tenementFootTitle span {
    width: 5.9rem;
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #4C4C4C;
    margin: 0.3rem 0 0;
    display: inline-block
  }

  .footHr {
    width: 6.3rem;
    margin: 0.6rem auto 0.6rem;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.22rem;
    color: #9E9E9E;
  }

  .detial {
    margin: auto;
    width: 6.2rem;
    display: table;
    padding: 0.4rem 0 0.4rem 0;
  }

  .detial li {
    line-height: 0.6rem;
    display: flex;
    justify-content: space-between;
  }

  .setail_name {
    opacity: 0.6;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #FFFFFF;
  }

  .setail_content {
    font-family: PingFangSC-Medium;
    font-size: 0.24rem;
    color: #FFFFFF;
  }

  .el-progress-bar__outer {
    height: 0.1rem !important
  }

  .el-progress-bar__innerText {
    display: none !important
  }

  .el-progress.is-success .el-progress-bar__inner {
    background: #70CAA8;
    border-radius: 2rem
  }
</style>
