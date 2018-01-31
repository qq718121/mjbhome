<template>
  <section>
    <div class="programmeStage" v-if="this.titles !== '园区规划落实'">
      <div class="stageVessel">
        <div class="stageIcon">
  <span :class='["stageNum",{"stageActiveNum":this.stage >= "1"}]'>1<i></i>
  </span>
          <span :class='["stageSum",{"stageActiveSum":this.stage >= "1"}]'>阶段一</span>
        </div>
        <div class="stageIcon">
  <span :class='["stageNum",{"stageActiveNum":this.stage >= "2"}]'>2<i></i>
  </span>
          <span :class='["stageSum",{"stageActiveSum":this.stage >= "2"}]'>阶段二</span></div>
        <div class="stageIcon">
  <span :class='["stageNum",{"stageActiveNum":this.stage >= "3"}]'>3<i></i>
  </span>
          <span :class='["stageSum",{"stageActiveSum":this.stage >= "3"}]'>阶段三</span></div>
        <div class="stageIcon">
  <span :class='["stageNum",{"stageActiveNum":this.stage >= "4"}]'>4<i v-if="false"></i>
  </span>
          <span :class='["stageSum",{"stageActiveSum":this.stage >= "4"}]'>阶段四</span>
        </div>
        <div class="stageIcon">
          <span :class='["stageNum",{"stageActiveNum":this.stage >= "5"}]'>5<i></i></span>
          <span :class='["stageSum",{"stageActiveSum":this.stage >= "5"}]'>阶段五</span>
        </div>
        <div class="stageIcon">
  <span :class='["stageNum",{"stageActiveNum":this.stage >= "6"}]'>6<i></i><i v-if="false"></i>
  </span>
          <span :class='["stageSum",{"stageActiveSum":this.stage >= "6"}]'>阶段六</span>
        </div>
        <div class="stageIcon">
  <span :class='["stageNum",{"stageActiveNum":this.stage >= "7"}]'>7<i v-if="false"></i>
  </span>
          <span :class='["stageSum",{"stageActiveSum":this.stage >= "6"}]'>阶段七</span>
        </div>
      </div>
    </div>
    <div class="programmeStage" v-if="this.titles == '园区规划落实'">
      <div class="stageVessel_two">
        <div class="stageIcon">
  <span :class='["stageNum",{"stageActiveNum":this.stage >= "1"}]'>1<i></i>
  </span>
          <span :class='["stageSum",{"stageActiveSum":this.stage >= "1"}]'>阶段一</span>
        </div>
        <div class="stageIcon">
  <span :class='["stageNum",{"stageActiveNum":this.stage >= "2"}]'>2<i></i>
  </span>
          <span :class='["stageSum",{"stageActiveSum":this.stage >= "2"}]'>阶段二</span></div>
        <div class="stageIcon">
  <span :class='["stageNum",{"stageActiveNum":this.stage >= "3"}]'>3<i v-if="false"></i>
  </span>
          <span :class='["stageSum",{"stageActiveSum":this.stage >= "3"}]'>阶段三</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default{
    data(){
      return {
        stage: '',
        titles: ''
      }
    },
    props: ['steptage'],
    created(){
      let this_ = this;
      setTimeout(function () {
        this_.stage = this_.steptage.programmePlanData.stage;
        this_.titles = this_.steptage.programmePlanData.title;
      }, 500)
    }
  }
</script>
<style scoped>
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

  .stageVessel_two {
    width: 6.5rem;
    text-align: center;
    margin: 0.3rem 0;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
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
</style>
