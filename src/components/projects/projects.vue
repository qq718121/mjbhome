<template>
  <div class='projects'>
    <div class='projectTop'>
      <i></i><i></i>
      <div class='projectTopImg'>
        <img :src='projectsData.allImg ? projectsData.allImg : this.$url.error_img'>
        <div class='projectTopBar'>
          <p>{{projectsData.housesName}}</p>
          <p>规划设计评测报告</p>
          <p>{{projectsData.date}}</p>
        </div>
      </div>
      <div class='projectTopText'>
        <div class='projectTopLv'>
          <p>{{projectsData.houseLv ? projectsData.houseLv : '0'}}</p>
          <p>规划设计评级</p>
        </div>
        <div class='projectTopLv2'>
          <p>{{projectsData.recommend ? projectsData.recommend : '无' }}</p>
          <p>推荐点</p>
        </div>
        <div class="clear"></div>
        <p
          style='text-align:center;margin-top:0.4rem;font-family: PingFangSC-Regular;font-size: 0.22rem;color: #9E9E9E;'>
          * 评级是由鹰眼鉴房的评分数值综合评定<br/>最高评级为S+，共划分为7个等级
        </p>
      </div>
    </div>
    <div class='projectHr'>
      <i></i>
      <img src='../../../static/gray.svg'>
      <span>规划设计评级</span>
      <img src='../../../static/gray.svg'>
      <i></i>
    </div>
    <div class='projectRate'>
      <div v-for='val in projectsData.designArr'>
        <span :class="$class_name_ftn.projects_classNames(val.lv)">{{val.lv}}</span>
        <p>{{val.name}}</p>
      </div>
    </div>
    <div class='projectHr'>
      <i></i>
      <img src='../../../static/gray.svg'>
      <span>总体评价</span>
      <img src='../../../static/gray.svg'>
      <i></i>
    </div>
    <div class='projectOverall' v-html="projectsData.designText"></div>
    <div class='projectHr'>
      <i></i>
      <img src='../../../static/gray.svg'>
      <span>主要板块评测</span><img
      src='../../../static/gray.svg'>
      <i></i>
    </div>
    <div class='allAppraisal'>
      <div class='allAppraisalTop'>
        <div class='allAppraisalTitle'>
          <span><img src='../../../static/blue.svg'></span>
          <span>楼栋规划评测</span>
        </div>
        <div class="allAppraisalIndex">
          <i></i><i></i>
          <p>{{projectsData.project.text}}</p>
        </div>
      </div>
      <div class='elevatorDoor' v-for='value in projectsData.project.types'>
        <div>
          <span :class="$class_name_ftn.projects_classNames(value.lv)">{{$class_name_ftn.storeNam(value.lv)}}</span>
          <p>{{value.name}}</p>
        </div>
        <div v-html='value.messages'></div>
      </div>
    </div>
    <div class='park'>
      <div class='parkTop'>
        <div class='parkTitle'>
          <span><img src='../../../static/green.svg'></span>
          <span>园区规划评测</span>
        </div>
        <div class="parkIndex">
          <i></i><i></i>
          <p>{{projectsData.park.text}}</p>
        </div>
      </div>
      <div class='parkDoorText' v-for="value in projectsData.park.types">
        <span>{{value.type}}</span>
        <span>{{value.name == '8' ? '有' : value.name == '9' ? '无' : value.name}}</span>
        <p v-html='value.messages'></p>
      </div>
      <div class='parkDoor' v-for='value in projectsData.park.typeLv'>
        <div>
          <span :class="$class_name_ftn.projects_classNames(value.lv)">{{$class_name_ftn.storeNam(value.lv)}}</span>
          <p>{{value.name}}</p>
        </div>
        <div class='parkMess' v-html='value.messages'></div>
      </div>
    </div>
    <div class='projectHr'>
      <i></i>
      <img src='../../../static/gray.svg'>
      <span>主要户型评测</span>
      <img src='../../../static/gray.svg'>
      <i></i>
    </div>
    <div class='foot' v-for='value in projectsData.houseType'>
      <div class='footTop'>
        <div class='footTopImg'>
          <img v-if='value.img ? true : false' :src='value.img ? value.img : "../../../static/pig_image holder.png"'>
        </div>
        <div class='footTitle'>
          <span>{{value.houseTypeName}}</span>
        </div>
        <div class="footIndex"><i></i><i></i>
          <div class='psText'>
            <p v-for='key in value.houseTypeLv'>
              <span>{{key.name}}</span>
              <span>{{$class_name_ftn.storeNam(key.lv)}}</span>
            </p>
          </div>
        </div>
        <div class='footInsexText' v-html='value.text'></div>
        <div class='footDoorText' v-for='j in value.get' v-if="j.name">
          <p>赠送面积</p>
          <p>{{j.name}}</p>
          <p class='footGet' v-for='tes in j.messages'>{{tes}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        designArr: [],
        projectsData: {
          houseType: [],
          project: {
            text: '',
            types: []
          },
          park: {
            text: '',
            typLv: '',
            types: []
          }
        },
      }
    },

    created(){
      this.vr_loaclStorga();
    },

    mounted(){
      let this_ = this;
      this.$Axios.get(this.$url.httpRequest + 'planDesign/' + this.$route.params.id).then(function (res) {
        let data = JSON.parse(this_.$getDAesString(res, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq"));
        this_.projectsData = data;
        this_.footTopImg = data.houseType.img;
        this_.houseTypeName = data.houseType.houseTypeName;
        this_.psTextArr = data.houseType.houseTypeLv;
      }).catch(function (err) {
        console.log(err);
      });
    },
    methods: {
      vr_loaclStorga(){
        try {
          let headline = parent.document.getElementsByClassName('headline')[0];
          let img = parent.document.querySelector('img');
          let is = parent.parent.localStorage.is;
          headline.style.display = 'none';
          img.style.display = 'none';
          if (is == 'true') {
            let commit = this.$store.commit;
            commit('set_motai', '0');
            commit('set_school_class', 'animated bounceIn');
            commit('change_motai');
            this.$store.commit('close_show');
          } else {
            return;
          }
        }
        catch (e) {
          return;
        }
      }
    }
  }
</script>
<style>
  .clear {
    clear: both
  }

  .projectsGreener {
    background: #70CAA8
  }

  .projectsBluer {
    background: #5880F3
  }

  .projectsPu {
    background: #879EC4
  }

  .projectsRed {
    background: #FE6E6E
  }

  .projects {
    max-width: 15rem;
    background: #f2f3f7;
    border-top: 2px solid #E0E0E0;
    padding-top: 0.42rem;
    padding-bottom: 1rem;
  }

  .projectTop {
    width: 6.9rem;
    height: 8rem;
    margin: auto;
    box-shadow: 0 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    position: relative
  }

  .projectTop .projectTopImg {
    width: 6.9rem;
    height: 4.4rem;
    position: relative;
    border-radius: 6px
  }

  .projectTop i:nth-child(1) {
    width: 0;
    height: 0;
    border-top: 0.3rem solid transparent;
    border-left: 0.3rem solid #f2f3f7;
    border-bottom: 0.3rem solid transparent;
    position: absolute;
    z-index: 1;
    left: -0.05rem;
    top: 4.1rem
  }

  .projectTop i:nth-child(2) {
    width: 0;
    height: 0;
    border-top: 0.3rem solid transparent;
    border-right: 0.3rem solid #f2f3f7;
    border-bottom: 0.3rem solid transparent;
    position: absolute;
    z-index: 1;
    right: -0.05rem;
    top: 4.1rem
  }

  .projectTop .projectTopImg img {
    width: 100%;
    height: 4.4rem;
    border-radius: 0.06rem;
  }

  .projectTop .projectTopBar {
    width: 6.9rem;
    height: 4.4rem;
    background: rgba(0, 0, 0, 0.50);
    position: absolute;
    top: 0;
    border-radius: 0.06rem;
  }

  .projectTop .projectTopBar p:nth-child(1) {
    font-family: PingFangSC-Semibold;
    font-size: 0.6rem;
    color: #FFFFFF;
    text-align: center;
    margin-top: 1.4rem;
  }

  .projectTop .projectTopBar p:nth-child(2) {
    font-family: PingFangSC-Light;
    font-size: 0.36rem;
    color: #FFFFFF;
    line-height: 0.36rem;
    text-align: center;
    margin-top: 0.16rem;
  }

  .projectTop .projectTopBar p:nth-child(3) {
    font-family: PingFangSC-Light;
    font-size: 0.2rem;
    color: #FFFFFF;
    line-height: 0.2rem;
    text-align: center;
    margin-top: 0.32rem;
  }

  .projectTop .projectTopText {
    width: 6.9rem;
    height: 3.2rem;
    background: #fff;
    padding-top: 0.4rem;
    border-radius: 0.06rem;
  }

  .projectTop .projectTopText .projectTopLv {
    float: left;
    width: 2.45rem;
    height: 1.8rem;
    margin-left: 0.6rem;
    display: flex;
    flex-flow: column;
  }

  .projectTop .projectTopText .projectTopLv p:nth-child(1) {
    font-family: PingFangSC-Thin;
    font-size: 0.8rem;
    color: #5880F3;
    line-height: 0.8rem;
    text-align: center;
    margin-top: 0.2rem;
    font-weight: 200;
  }

  .projectTop .projectTopText .projectTopLv p:nth-child(2) {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #42464D;
    text-align: center;
    margin-top: 0.2rem;
  }

  .projectTop .projectTopText .projectTopLv2 {
    float: left;
    width: 3.64rem;
    height: 1.8rem;
    margin-left: 0.2rem;
  }

  .projectTop .projectTopText .projectTopLv2 p:nth-child(1) {
    font-family: PingFangSC-Light;
    font-size: 0.36rem;
    color: #5880F3;
    line-height: 0.36rem;
    text-align: center;
    margin-top: 0.4rem;
    font-weight: 200;
  }

  .projectTop .projectTopText .projectTopLv2 p:nth-child(2) {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #42464D;
    text-align: center;
    margin-top: 0.4rem;
  }

  .projectHr {
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

  .projectHr i {
    display: inline-block;
    width: 1.5rem;
    height: 0;
    border-top: 0.02rem solid #42464D;
    margin-top: 0.2rem
  }

  .projectRate {
    width: 6.9rem;
    height: 2.3rem;
    margin: auto
  }

  .projectRate div {
    width: 2.04rem;
    height: 2.3rem;
    background: #FFFFFF;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.08rem;
    text-align: center;
    float: left;
    margin: 0 0.12rem 0 0.12rem
  }

  .projectRate div span {
    display: inline-block;
    width: 0.78rem;
    height: 0.78rem;
    border-radius: 0.78rem;
    font-family: PingFangSC-Light;
    font-size: 0.36rem;
    color: #FFFFFF;
    text-align: center;
    line-height: 0.78rem;
    margin-top: 0.46rem
  }

  .projectRate div p {
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #4C4C4C;
    margin-top: 0.2rem
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
    margin-top: 0.46rem
  }

  .projectOverall {
    width: 6.3rem;
    margin: auto;
    text-align: center;
    background-image: linear-gradient(-180deg, #5880F3 0%, #5311FD 100%);
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.08rem;
    color: #fff;
    font-family: PingFangSC-Regular;
    font-size: 0.34rem;
    letter-spacing: 0;
    line-height: 0.6rem;
    text-align: left;
    padding: 0.3rem;
  }

  .allAppraisal {
    width: 6.9rem;
    margin: auto;
    background: #FFFFFF;
    box-shadow: 0 1px 0.12rem 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.08rem;
  }

  .allAppraisalTop {
    width: 6.9rem;
    position: relative;
  }

  .allAppraisal > div {
    border: 1px solid #f2f3f7
  }

  .elevatorDoor {
    width: 6.9rem;
    padding-bottom: 0.4rem
  }

  .allAppraisalTitle {
    display: flex;
    justify-content: space-around;
    width: 3.4rem;
    margin: 0.4rem auto;
    position: relative;
  }

  .allAppraisalTitle span:nth-child(1) {
    width: 0.7rem;
    height: 0.7rem;
    line-height: 0.592rem;
    margin-right: 0.2rem
  }

  .allAppraisalTitle span img {
    width: 0.7rem;
    height: 0.7rem;
  }

  .allAppraisalTitle span:nth-child(2) {
    display: inline-block;
    width: 3.48rem;
    line-height: 0.7rem;
    font-family: PingFangSC-Thin;
    font-size: 0.36rem;
    color: #42464D;
  }

  .allAppraisalTitleImg {
    margin: 0.19rem auto;
    width: 0.4rem;
    height: 0.36rem;
    background-image: linear-gradient(-180deg, #AB91FA 0%, #2A61FF 100%);
  }

  .allAppraisalIndex {
    width: 7.26rem;
    background: #5880F3;
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #FFFFFF;
    line-height: 0.38rem;
    position: relative;
    left: -0.2rem;
    text-align: left;
    margin-bottom: 0.4rem;
  }

  .allAppraisalIndex p {
    width: 5.98rem;
    margin: auto;
    padding: 0.4rem;
  }

  .allAppraisalIndex i:nth-child(1) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #2846c2;
    border-left: 0.16rem solid transparent;
    position: absolute;
    left: 0;
    top: -0.095rem
  }

  .allAppraisalIndex i:nth-child(2) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #2846c2;
    border-right: 0.16rem solid transparent;
    position: absolute;
    right: 0;
    top: -0.095rem
  }

  .elevatorDoor {
    display: flex;
    justify-content: space-around
  }

  .elevatorDoor div span {
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
    margin-top: 0.4rem;
    margin-left: 0.3rem
  }

  .elevatorDoor div:nth-child(1) p {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #4C4C4C;
    margin-top: 0.2rem;
    margin-left: 0.3rem;
    text-align: center
  }

  .elevatorDoor div:nth-child(2) p {
    width: 4.4rem;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #81899E;
    line-height: 0.38rem;
    margin-top: 0.4rem;
    text-align: left
  }

  .park {
    width: 6.9rem;
    margin: 0.6rem auto;
    background: #FFFFFF;
    box-shadow: 0 1px 0.12rem 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.08rem;
  }

  .parkTop {
    width: 6.9rem;
    position: relative;
  }

  .park > div {
    border: 1px solid #f2f3f7
  }

  .parkTitle {
    display: flex;
    justify-content: space-around;
    width: 3.4rem;
    margin: 0.4rem auto;
    position: relative;
  }

  .parkTitle span:nth-child(1) {
    width: 0.7rem;
    height: 0.7rem;
    line-height: 0.592rem;
    margin-right: 0.2rem
  }

  .parkTitle span img {
    width: 0.7rem;
    height: 0.7rem
  }

  .parkTitle span:nth-child(2) {
    display: inline-block;
    width: 3.18rem;
    line-height: 0.7rem;
    font-family: PingFangSC-Thin;
    font-size: 0.36rem;
    color: #42464D
  }

  .parkTitleImg {
    margin: 0.19rem auto;
    width: 0.4rem;
    height: 0.36rem;
    background-image: linear-gradient(-180deg, #AB91FA 0%, #2A61FF 100%);
  }

  .parkIndex {
    width: 7.26rem;
    background: #7AB88D;
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #FFFFFF;
    line-height: 0.38rem;
    position: relative;
    left: -0.2rem;
    text-align: left;
    margin-bottom: 0.4rem;
  }

  .parkIndex p {
    width: 5.98rem;
    margin: auto;
    padding: 0.4rem;
  }

  .parkIndex i:nth-child(1) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #397050;
    border-left: 0.16rem solid transparent;
    position: absolute;
    left: 0;
    top: -0.095rem;
  }

  .parkIndex i:nth-child(2) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #397050;
    border-right: 0.16rem solid transparent;
    position: absolute;
    right: 0;
    top: -0.095rem;
  }

  .parkDoor {
    width: 6.9rem;
    display: flex;
    justify-content: space-around;
    padding-bottom: 0.92rem;
  }

  .parkDoor div:nth-child(1) span {
    display: inline-block;
    width: 0.78rem;
    height: 0.78rem;
    border-radius: 0.78rem;
    font-family: PingFangSC-Light;
    font-size: 0.36rem;
    color: #FFFFFF;
    text-align: center;
    line-height: 0.78rem;
    margin-top: 0.4rem;
    margin-left: 0.2rem;
  }

  .parkDoor div:nth-child(1) p {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #4C4C4C;
    margin-top: 0.2rem;
    margin-left: 0.2rem;
  }

  .parkDoor div:nth-child(2) {
    width: 4.4rem;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #81899E;
    line-height: 0.38rem;
    margin-top: 0.4rem;
    margin-right: 0.25rem;
  }

  .parkDoorText span:nth-child(1) {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #4C4C4C;
    margin-top: 0.4rem;
    margin-left: 0.48rem;
    display: block;
  }

  .parkDoorText span:nth-child(2) {
    font-family: PingFangSC-Semibold;
    font-size: 0.36rem;
    color: #5880F3;
    margin-top: 0.2rem;
    margin-left: 0.48rem;
    display: block;
  }

  .parkDoorText p {
    width: 5.9rem;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #81899E;
    line-height: 0.38rem;
    margin: 0.2rem 0 0.4rem 0.24rem;
  }

  .foot {
    width: 6.9rem;
    margin: auto;
    background: #FFFFFF;
    box-shadow: 0 1px 0.12rem 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.08rem;
  }

  .footTop {
    width: 6.9rem;
    position: relative;
    margin-top: 0.6rem;
    background: #FFFFFF;
    box-shadow: 0 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.09), 0 1px 0.04rem 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.08rem;
  }

  .foot > div {
    border: 0.02rem solid #f2f3f7;
  }

  .footTitle span {
    display: inline-block;
    font-family: PingFangSC-Medium;
    font-size: 0.36rem;
    color: #4C4C4C;
    margin: 0.5rem 0 0.5rem 0.5rem;
  }

  .footIndex {
    width: 7.3rem;
    background: #4B5970;
    color: #FFFFFF;
    line-height: 0.38rem;
    position: absolute;
    bottpm: 0.4rem;
    left: -0.2rem;
  }

  .footIndex i:nth-child(1) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #232e42;
    border-left: 0.16rem solid transparent;
    position: absolute;
    left: 0;
    top: -0.095rem;
  }

  .footIndex i:nth-child(2) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #232e42;
    border-right: 0.16rem solid transparent;
    position: absolute;
    right: 0;
    top: -0.095rem;
  }

  .footDoor div:nth-child(2) {
    width: 4.4rem;
    heiight: 1.9rem;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #81899E;
    line-height: 0.38rem;
    margin-top: 0.4rem;
    margin-left: 0.48rem;
  }

  .footDoorText p:nth-child(1) {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #4C4C4C;
    margin-top: 0.4rem;
    margin-left: 0.48rem;
  }

  .footDoorText p:nth-child(2) {
    font-family: PingFangSC-Semibold;
    font-size: 0.36rem;
    color: #5880F3;
    margin-top: 0.2rem;
    margin-left: 0.48rem;
  }

  .footGet {
    width: 5.9rem;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #81899E;
    line-height: 0.38rem;
    margin: 0.2rem 0 0.4rem 0.48rem;
  }

  .footDoorText {
    width: 6.9rem;
    padding-bottom: 0.4rem;
    background: #FFFFFF;
    border: 0.02rem solid #E5E8F0;
    border-radius: 0.08rem;
  }

  .footTopImg {
    width: 6.9rem;
  }

  .footTopImg img {
    width: 6.9rem;
    height: 3.62rem;
  }

  .psText p {
    display: flex;
    justify-content: space-between;
    width: 6.05rem;
  }

  .footIndex p span:nth-child(1) {
    opacity: 0.6;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #FFFFFF;
    line-height: 0.5rem;
  }

  .footIndex p span:nth-child(2) {
    font-family: PingFangSC-Semibold;
    font-size: 0.24rem;
    color: #FFFFFF;
    line-height: 0.5rem;
  }

  .psText {
    width: 6.05rem;
    padding: 0.4rem 0.4rem 0.4rem 0.6rem;
  }

  .footInsexText p {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #4C4C4C;
    line-height: 0.38rem;
    margin-top: 0.4rem;
  }

  .footInsexText {
    width: 5.98rem;
    margin: 4.4rem auto 0.4rem;
  }
</style>
