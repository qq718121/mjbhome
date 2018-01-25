<template>
  <div class='programme'>
    <header class='programmeTop'>
      <i></i>
      <i></i>
      <article class='programmeTopImg'>
        <img :src='programmeNewData.houseImg ? programmeNewData.houseImg : this.$url.error_img'>
        <div class='programmeTopBar'>
          <p>{{programmeNewData.houseName}}</p>
          <p>规划落实评测报告</p>
          <p>{{programmeNewData.date}}</p>
        </div>
      </article>
      <article class='programmeTopText'>
        <div class='programmeTopLv'>
          <p>{{programmeNewData.presentLv ? programmeNewData.presentLv : '无'}}</p>
          <p>当前阶段评级</p>
        </div>
        <div class='programmeTopLv2'>
          <p>{{programmeNewData.overallLv ? programmeNewData.overallLv : '无'}}</p>
          <p>楼盘总体落实评级</p>
        </div>
        <div class="programmeClear"></div>
        <p
          style='text-align:center;margin-top:0.4rem;font-family: PingFangSC-Regular;font-size: 0.22rem;color: #9E9E9E;'>
          * 评级是由鹰眼鉴房的评分数值综合评定<br/>最高评级为S+，共划分为7个等级</p>
      </article>
    </header>

    <article>
      <section>
        <div class='programmeHr'>
          <i></i>
          <img src='../../../static/gray.svg'>
          <span>规划落实进度</span>
          <img src='../../../static/gray.svg'>
          <i></i>
        </div>
      </section>
      <section>
        <div class="programmeStage">
          <div class="stageVessel">
            <div class="stageIcon">
              <span :class='["stageNum",{"stageActiveNum":this.programmeNewData.stage >= "1"}]'>1<i></i>
              </span>
              <span :class='["stageSum",{"stageActiveSum":this.programmeNewData.stage >= "1"}]'>阶段一</span>
            </div>
            <div class="stageIcon">
              <span :class='["stageNum",{"stageActiveNum":this.programmeNewData.stage >= "2"}]'>2<i></i>
              </span>
              <span :class='["stageSum",{"stageActiveSum":this.programmeNewData.stage >= "2"}]'>阶段二</span></div>
            <div class="stageIcon">
              <span :class='["stageNum",{"stageActiveNum":this.programmeNewData.stage >= "3"}]'>3<i></i>
              </span>
              <span :class='["stageSum",{"stageActiveSum":this.programmeNewData.stage >= "3"}]'>阶段三</span></div>
            <div class="stageIcon">
              <span :class='["stageNum",{"stageActiveNum":this.programmeNewData.stage >= "4"}]'>4<i v-if="false"></i>
              </span>
              <span :class='["stageSum",{"stageActiveSum":this.programmeNewData.stage >= "4"}]'>阶段四</span>
            </div>
            <div class="stageIcon">
              <span :class='["stageNum",{"stageActiveNum":this.programmeNewData.stage >= "5"}]'>5<i></i></span>
              <span :class='["stageSum",{"stageActiveSum":this.programmeNewData.stage >= "5"}]'>阶段五</span>
            </div>
            <div class="stageIcon">
              <span :class='["stageNum",{"stageActiveNum":this.programmeNewData.stage >= "6"}]'>6<i v-if="false"></i>
              </span>
              <span :class='["stageSum",{"stageActiveSum":this.programmeNewData.stage >= "6"}]'>阶段六</span>
            </div>
          </div>
        </div>
      </section>
    </article>

    <article v-if="programmeNewData.appraise">
      <div class='programmeHr'>
        <i></i><img src='../../../static/gray.svg'>
        <span>总体评价</span>
        <img src='../../../static/gray.svg'>
        <i></i>
      </div>
      <div class='programmeOveralls' v-html="programmeNewData.appraise"></div>
    </article>

    <article v-for="(val,index) in programmeNewData.evaluatingStage">
      <section>
        <div class='programmeHr'>
          <i></i>
          <img src='../../../static/gray.svg'>
          <span>规划落实评测</span>
          <img src='../../../static/gray.svg'>
          <i></i>
        </div>
      </section>
      <div class='programmeOne'>
        <div class='programmeOneTop'>
          <div class='programmeOneTitle'>
                <span>
                  <p :class="[
                        'programmeOneTitle_lv',
                        $class_name_ftn.classNames(val.lv)
                        ]">{{$class_name_ftn.storeNam(val.lv)}}
                   </p>
                  <p class="programmeOneTitle_num">{{val.stage}}</p>
                </span>
            <span>{{val.evaluatingType}}</span>
          </div>
          <div class="programmeOneIndex">
            <i></i><i></i>
            <p>{{val.text}}</p>
          </div>
        </div>
        <section>
          <div v-for="(item,index) in val.stageData">
            <p class="sixStage" v-if="item.acceptance">{{item.acceptance}}</p>
            <div class='programmeOneText'
                 v-for="(value,index) in item.stageList">
              <p class="firstStage_name">{{value.name}}</p>
              <div>
                <p class="firstStage_list" v-for="(val,key) in value.list">
                  <span>{{val.type}}</span>
                  <span :class="$class_name_ftn.judgeClass(val.accord)">{{$class_name_ftn.gbJudge(val.accord)}}</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class='last-lunImg'>
            <el-carousel :interval="5000" arrow="always">
              <el-carousel-item v-for="(item,index) in val.lunNum" :key="index">
                <div class="lunDiv"><img :src="item.img" alt="">
                  <div class="lunModule">
                    <span>{{item.inner}}</span>
                    <span>{{index + 1}}/{{val.lunNum.length}}</span>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </section>
      </div>
    </article>

  </div>
</template>
<script>

  export default {
    data(){
      return {
        programmeNewData: {
          evaluatingStage: {
            firstStage: {
              lv: ''
            }
          }
        },
      }
    },
    created(){
      try {
        parent.document.getElementsByClassName('headline')[0].style.display = 'none';
        parent.document.querySelector('img').style.display = 'none';
        if (parent.parent.localStorage.is == 'true') {
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

      }
    },
    mounted(){
      this.get_data();
    },
    methods: {
      get_data(){
//        this.$url.httpRequest + 'planPracticable/' + this.$route.params.id
        this.$Axios.get('/static/tenement.json').then(res => {
//          let data = JSON.parse(this_.$getDAesString(res, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq"));
//          this.programmeNewData =  res.data;
          this.programmeNewData = res.data;
          console.log(this.programmeNewData);
        }).catch(err => console.log(err));
      },
    }
  }
</script>
<style>
  .programmeClear {
    clear: both
  }

  .programme {
    max-width: 15rem;
    background: #f2f3f7;
    border-top: 2px solid #E0E0E0;
    padding-top: 0.42rem;
    padding-bottom: 1rem;
  }

  .programmeTop {
    width: 6.9rem;
    height: 8rem;
    margin: auto;
    box-shadow: 0 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    position: relative
  }

  .programmeTop .programmeTopImg {
    width: 6.9rem;
    height: 4.4rem;
    position: relative;
    border-radius: 6px
  }

  .programmeTop i:nth-child(1) {
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

  .programmeTop i:nth-child(2) {
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

  .programmeTop .programmeTopImg img {
    width: 100%;
    height: 4.4rem;
    border-radius: 6px
  }

  .programmeTop .programmeTopBar {
    width: 6.9rem;
    height: 4.4rem;
    background: rgba(0, 0, 0, 0.50);
    position: absolute;
    top: 0;
    border-radius: 6px
  }

  .programmeTop .programmeTopBar p:nth-child(1) {
    font-family: PingFangSC-Semibold;
    font-size: 0.6rem;
    color: #FFFFFF;
    text-align: center;
    margin-top: 1.4rem;
  }

  .programmeTop .programmeTopBar p:nth-child(2) {
    font-family: PingFangSC-Light;
    font-size: 0.36rem;
    color: #FFFFFF;
    line-height: 0.36rem;
    text-align: center;
    margin-top: 0.16rem;
  }

  .programmeTop .programmeTopBar p:nth-child(3) {
    font-family: PingFangSC-Light;
    font-size: 0.2rem;
    color: #FFFFFF;
    line-height: 0.2rem;
    text-align: center;
    margin-top: 0.32rem;
  }

  .programmeTop .programmeTopText {
    width: 6.9rem;
    height: 3.2rem;
    background: #fff;
    padding-top: 0.4rem;
    border-radius: 6px
  }

  .programmeTop .programmeTopText .programmeTopLv {
    float: left;
    width: 2.4rem;
    height: 1.8rem;
    margin-left: 0.6rem;
    display: flex;
    flex-flow: column;
  }

  .programmeTop .programmeTopText .programmeTopLv p:nth-child(1) {
    font-family: PingFangSC-Thin;
    font-size: 0.8rem;
    color: #5880F3;
    line-height: 0.8rem;
    text-align: center;
    margin-top: 0.2rem;
    font-weight: 200;
  }

  .programmeTop .programmeTopText .programmeTopLv p:nth-child(2) {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #42464D;
    text-align: center;
    margin-top: 0.2rem;
  }

  .programmeTop .programmeTopText .programmeTopLv2 {
    float: left;
    width: 3.64rem;
    height: 1.8rem;
    margin-left: 0.2rem;
  }

  .programmeTop .programmeTopText .programmeTopLv2 p:nth-child(1) {
    font-family: PingFangSC-Thin;
    font-size: 0.8rem;
    color: #5880F3;
    line-height: 0.8rem;
    text-align: center;
    margin-top: 0.2rem;
    font-weight: 200;
  }

  .programmeTop .programmeTopText .programmeTopLv2 p:nth-child(2) {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #42464D;
    text-align: center;
    margin-top: 0.2rem;
  }

  .programmeHr {
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

  .programmeHr i {
    display: inline-block;
    width: 1.5rem;
    height: 0;
    border-top: 0.02rem solid #42464D;
    margin-top: 0.2rem
  }

  .programmeRate {
    width: 6.9rem;
    height: 2.5rem;
    margin: auto;
  }

  .programmeRate div {
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
    background: #E0E0E0 !important;
  }

  .green {
    background: #70CAA8 !important;
  }

  .blue {
    background: #5880F3 !important;
  }

  .pu {
    background: #879EC4 !important;
  }

  .red {
    background: #FE6E6E !important;
  }

  .programmeRate div p {
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #4C4C4C;
    margin-top: 0.2rem
  }

  .programmeOveralls {
    width: 6.9rem;
    margin: auto;
    padding-bottom: 0.4rem;
    text-align: center;
    background-image: linear-gradient(-180deg, #5880F3 0%, #5311FD 100%);
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.08rem;
  }

  .programmeOveralls p {
    width: 5.98rem;
    display: inline-block;
    margin: 0.25rem auto 0.1rem;
    font-family: PingFangSC-Regular;
    font-size: 0.34rem;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 0.6rem;
    text-align: left
  }

  .programmeOne {
    width: 6.9rem;
    margin: auto;
    background: #FFFFFF;
    box-shadow: 0 1px 0.12rem 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.08rem;
    margin-top: 0.6rem
  }

  .programmeOneTop {
    width: 6.9rem;
    position: relative;
  }

  .programmeOne > div {
    border: 1px solid #f2f3f7
  }

  .programmeOneTitle {
    width: 2.9rem;
    margin: 0.4rem auto;
    position: relative;
    padding-left: 0.5rem;
  }

  .programmeOneTitle_lv {
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    background: red;
    color: #fff;
    border-radius: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    margin: auto;
  }

  .programmeOneTitle_num {
    display: block;
    font-family: PingFangSC-Regular, '微软雅黑';
    font-size: 0.2rem;
    color: #4C4C4C;
    text-align: center;
  }

  .programmeOneTitle span:nth-child(1) {
    width: 1.64rem;
    height: 1.31rem;
    line-height: 0.592rem;
    margin-right: 0.2rem;
    position: absolute;
    top: -0.72rem;
    left: -1.45rem;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/bg_guihuanluoshi_pingji@3x.png');
    background-size: cover;
    padding-top: 0.35rem;
  }

  .programmeOneTitle span img {
    width: 0.7rem;
    height: 0.7rem
  }

  .programmeOneTitle span:nth-child(2) {
    display: inline-block;
    line-height: 0.7rem;
    font-family: PingFangSC-Thin;
    font-size: 0.36rem;
    color: #42464D;
  }

  .programmeOneTitleImg {
    margin: 0.19rem auto;
    width: 0.4rem;
    height: 0.36rem;
    background-image: linear-gradient(-180deg, #AB91FA 0%, #2A61FF 100%);
  }

  .programmeOneIndex {
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

  .programmeOneIndex p {
    width: 5.98rem;
    margin: auto;
    padding: 0.4rem;
  }

  .programmeOneIndex i:nth-child(1) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #2846c2;
    border-left: 0.16rem solid transparent;
    position: absolute;
    left: 0;
    top: -0.095rem
  }

  .programmeOneIndex i:nth-child(2) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #2846c2;
    border-right: 0.16rem solid transparent;
    position: absolute;
    right: 0;
    top: -0.095rem
  }

  .programmeOneDoor div:nth-child(2) {
    width: 4.4rem;
    heiight: 1.9rem;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #81899E;
    line-height: 0.38rem;
    margin-top: 0.4rem;
    margin-left: 0.48rem
  }

  .sixStage {
    font-family: PingFangSC-Semibold, '微软雅黑';
    font-size: 0.36rem;
    color: #5880F3;
    margin: 0.2rem 0 0.2rem 0.48rem;
  }

  .programmeOneText .firstStage_name {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #42464D;
    margin-top: 0.2rem;
    margin-left: 0.48rem
  }

  .programmeOneText .firstStage_list {
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #81899E;
    line-height: 0.38rem;
    margin: 0.2rem 0.48rem 0.2rem 0.48rem;
    display: flex;
    justify-content: space-between;
  }

  .programmeOneText {
    width: 6.9rem;
    padding-bottom: 0.4rem;
    background: #FFFFFF;
    border: 0.02rem solid #E5E8F0
  }

  .programmeOnePlan {
    width: 6.9rem;
    background: #FFFFFF;
    border: 1px solid #E5E8F0;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem
  }

  .programmeOnePlan p {
    width: 6rem;
    margin: 0.1rem auto;
    display: flex;
    justify-content: space-between;
    line-height: 0.4rem
  }

  .programmeOnePlan p:nth-child(1) span:nth-child(1) {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #42464D;
  }

  .programmeOnePlan p:nth-child(1) span:nth-child(2) {
    font-family: PingFangSC-Light;
    font-size: 0.4rem;
    color: #42464D;
  }

  .programmeOnePlan p span:nth-child(1) {

    font-family: PingFangSC-Regular;
    font-size: 0.22rem;
    color: #4C4C4C;
    width: 3.5rem;
  }

  .judgeDefault {
    font-family: PingFangSC-Regular;
    font-size: 0.22rem;
    color: #D7DBE0;
  }

  .judgeSuccess {
    font-family: PingFangSC-Regular;
    font-size: 0.22rem;
    color: #70CAA8;
  }

  .judgeError {
    font-family: PingFangSC-Regular;
    font-size: 0.22rem;
    color: #E64B4B;
  }

  .programmeOneIndexTwo {
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

  .programmeOneIndexTwo p {
    width: 5.98rem;
    margin: auto;
    padding: 0.4rem;
  }

  .programmeOneIndexTwo i:nth-child(1) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #2846c2;
    border-left: 0.16rem solid transparent;
    position: absolute;
    left: 0;
    top: -0.095rem
  }

  .programmeOneIndexTwo i:nth-child(2) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #2846c2;
    border-right: 0.16rem solid transparent;
    position: absolute;
    right: 0;
    top: -0.095rem
  }

  .programmeOneIndexThree {
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

  .programmeOneIndexThree p {
    width: 5.98rem;
    margin: auto;
    padding: 0.4rem;
  }

  .programmeOneIndexThree i:nth-child(1) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #2846c2;
    border-left: 0.16rem solid transparent;
    position: absolute;
    left: 0;
    top: -0.095rem
  }

  .programmeOneIndexThree i:nth-child(2) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #2846c2;
    border-right: 0.16rem solid transparent;
    position: absolute;
    right: 0;
    top: -0.095rem
  }

  .programmeOneIndexFour {
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

  .programmeOneIndexFour p {
    width: 5.98rem;
    margin: auto;
    padding: 0.4rem;
  }

  .programmeOneIndexFour i:nth-child(1) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #2846c2;
    border-left: 0.16rem solid transparent;
    position: absolute;
    left: 0;
    top: -0.095rem
  }

  .programmeOneIndexFour i:nth-child(2) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #2846c2;
    border-right: 0.16rem solid transparent;
    position: absolute;
    right: 0;
    top: -0.095rem
  }

  .programmeOneIndexFive {
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

  .programmeOneIndexFive p {
    width: 5.98rem;
    margin: auto;
    padding: 0.4rem;
  }

  .programmeOneIndexFive i:nth-child(1) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #2846c2;
    border-left: 0.16rem solid transparent;
    position: absolute;
    left: 0;
    top: -0.095rem
  }

  .programmeOneIndexFive i:nth-child(2) {
    width: 0;
    height: 0;
    border-bottom: 0.1rem solid #2846c2;
    border-right: 0.16rem solid transparent;
    position: absolute;
    right: 0;
    top: -0.095rem
  }

  .qualityFootText p {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #4C4C4C;
    line-height: 0.38rem;
    margin: 0.4rem 0 0;
    width: 5.98rem
  }

  .programmeStage {
    width: 6.9rem;
    height: 2.54rem;
    text-align: center;
    margin: auto;
    background: #FFFFFF;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    display: flex;
    flex-flow: wrap;
  }

  .programmeStage .stageVessel {
    width: 6.5rem;
    text-align: center;
    margin: 0.3rem 0.4rem 0.3rem 0.4rem;
    display: flex;
    flex-flow: wrap;
    justify-content: flex-start;
  }

  .programmeStage .stageIcon {
    width: 1.25rem;
    display: flex;
    flex-flow: column;
    text-align: center;
    height: 0.8rem;
    margin-left: 0.23rem;
  }

  .programmeStage .stageNum {
    width: 0.4rem;
    height: 0.4rem;
    background: #E0E0E0;
    display: inline-block;
    border-radius: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    color: #fff;
    margin: auto;
    position: relative;
  }

  .programmeStage .stageActiveNum {
    background: #5880F3 !important;
  }

  .programmeStage .stageActiveNum i {
    background: #5880F3 !important;
  }

  .programmeStage .stageNum i {
    width: 1.12rem;
    background: #E0E0E0;
    display: block;
    position: absolute;
    height: 0.02rem;
    left: 0.4rem;
    top: 0.2rem;
  }

  .programmeStage .stageSum {
    font-family: PingFangSC-Regular, '微软雅黑';
    font-size: 0.2rem;
    color: #E0E0E0;
    line-height: 0.2rem;
  }

  .programmeStage .stageActiveSum {
    font-family: PingFangSC-Regular, '微软雅黑';
    font-size: 0.2rem;
    color: #4C4C4C;
    line-height: 0.2rem;
  }

  .gbDefulat {
    display: inline-block;
    border: 1px solid #70CAA8;
    border-radius: 2rem;
    font-family: PingFangSC-Regular;
    font-size: 0.2rem;
    color: #70CAA8;
    text-align: center;
    float: right;
    padding: 0 0.2rem 0 0.2rem;
  }

  .gbError {
    display: inline-block;
    border: 1px solid #E64B4B;
    border-radius: 2rem;
    font-family: PingFangSC-Regular;
    font-size: 0.2rem;
    color: #E64B4B;
    text-align: center;
    float: right;
    padding: 0 0.2rem 0 0.2rem;
  }

  .lunDiv {
    width: 100%;
    height: 4.48rem;
    position: relative;
  }

  .lunDiv img {
    width: 100%;
    height: 100%;
  }

  .lunModule {
    background: rgba(0, 0, 0, 0.70);
    width: 100%;
    color: #fff;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    padding: 0.26rem 0 0.26rem 0;
  }

  .lunModule span:nth-child(2) {
    display: inline-block;
    line-height: 1rem;
  }

  .lunModule span:nth-child(1) {
    display: inline-block;
    width: 4.8rem;
  }

  .last-lunImg {
    width: 6.9rem;
  }

  .el-carousel__arrow {
    border: none;
    padding: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(200,200,200,0.4);
    color: #fff;
    position: absolute;
    top: 50%;
    z-index: 10;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
    font-size: 0.24rem;
  }

  .el-carousel__container {
    height: 4.5rem !important;
  }
</style>

