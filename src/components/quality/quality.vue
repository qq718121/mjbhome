<template>
  <div class='quality'>
    <div class='qualityTop'>
      <i></i><i></i>
      <div class='qualityTopImg'>
        <img :src='topImg ? topImg : this.$url.error_img'>
        <div class='qualityTopBar'>
          <p>{{houseName}}</p>
          <p>施工质量评测报告</p>
          <p>{{data}}</p>
        </div>
      </div>

      <div class='qualityTopText'>
        <div class='qualityTopLv'>
          <p>{{plan ? plan + '%' : 0}}</p>
          <p>当前施工进度</p>
        </div>
        <div class='qualityTopLv2'>
          <p>{{lv}}</p>
          <p>施工质量评级</p>
        </div>
        <div class="clear"></div>
        <p style='text-align:center;margin-top:0.4rem;font-family: PingFangSC-Regular;font-size: 0.22rem;color: #9E9E9E;'>
          * 评级是由鹰眼鉴房的评分数值综合评定<br/>最高评级为S+，共划分为7个等级</p>
      </div>
    </div>

    <div class='qualityHr'>
      <i></i>
      <img src='../../../static/gray.svg'>
      <span>施工质量评级</span><img
      src='../../../static/gray.svg'>
      <i></i>
    </div>

    <div class='qualityRate'>
      <div v-for="(value,index) in qualityLvArr">
        <span :class="$class_name_ftn.classNames(value.lv)">{{$class_name_ftn.storeNam(value.lv)}}</span>
        <p>{{value.name}}</p>
      </div>
    </div>

    <div class='qualityHr'>
      <i></i>
      <img src='../../../static/gray.svg'>
      <span>总体评价</span><img
      src='../../../static/gray.svg'>
      <i></i>
    </div>

    <div class='qualityoveralls' v-html="allEvaluate"></div>
    <div class='qualityHr'>
      <i></i>
      <img src='../../../static/gray.svg'>
      <span>质量评测及进度</span>
      <img src='../../../static/gray.svg'>
      <i></i>
    </div>

    <div class='qualityOne' v-for='(key,index) in this.arr'>
      <div class='qualityOneTop'>
        <div class='qualityOneTitle'>
          <span>
            <img :src='key.img'></span>
          <span>{{key.title}}</span>
        </div>
        <div :class="key.className">
          <i></i><i></i>
          <p>{{key.text}}</p>
        </div>
      </div>

      <div class='qualityOneText' v-if="key.what || key.effect ">
        <p>{{key.what}}</p>
        <div>
          <p style='width:5.9rem'>{{key.effect}}</p>
        </div>
      </div>

      <div class='qualityOnePlan'>
        <p>
          <span>{{key.plan}}</span>
          <span>{{(key.sum + "%")}}</span>
        </p>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="parseFloat(key.sum)" status="success"
                     style='width:6rem;margin:auto;'></el-progress>
        <p v-for="value in qualityPlanArr[index].list">
          <span>{{value.name}}</span>
          <span v-if='value.plan !== 100'>{{value.plan + "%"}}</span>
          <span v-if='value.plan == 100'>
            <img src='../../../static/ok.svg'>
          </span>
        </p>
      </div>

    </div>
    <div class='footHr'>* 报告中体现的施工进度，截止于发布简报日期前一天</div>
    <div v-if='qualityFootArr.length === 0 ? false : true'>
      <div class='qualityHr'>
        <i></i>
        <img src='../../../static/gray.svg'>
        <span>部分现场实照</span>
        <img src='../../../static/gray.svg'>
        <i></i>
      </div>

      <div class='qualityFoot' v-for='key in qualityFootArr'>
        <div class='qualityFootImg'><img :src='key.img ? key.img : this.$url.error_img ' >
        </div>
        <div class='qualityFootTitle'>
          <span>{{key.title}}</span>
        </div>
        <div class='qualityFootText'>
          <p>{{key.text}}</p>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

  export default {
    data(){
      return {
        qualityDate: {},
        topImg: '',
        houseName: '',
        data: '',
        plan: 0,
        lv: '无',
        qualityFootArr: [],
        allEvaluate: '',
        classs: 'default',
        qualityLvArr: [
          {name: "地基基础工程", lv: "无"},
          {name: "主体结构工程", lv: "无"},
          {name: "屋面工程", lv: "无"},
          {name: "安装工程", lv: "无"},
          {name: "装饰装修工程", lv: "无"}
        ],
        qualityPlanArr: [
          {
            num: 1,
            plan: 1,
            sum: 0,
            list: [
              {name: "土方开挖", plan: 0}, {name: "桩基施工", "plan": 0}, {name: "基础防水施工", plan: 0}, {name: "筏板施工", plan: 0}
            ]
          },
          {
            num: 2,
            plan: 1,
            sum: 0,
            list: [
              {name: "现浇结构", plan: 0}, {name: "砌体工程", plan: 0}, {name: "二次结构工程", plan: 0}
            ]
          },
          {
            num: 3,
            plan: 1,
            sum: 0,
            list: [
              {name: "屋面防水施工", plan: 0}, {name: "屋面保暖层施工", plan: 0}
            ]
          },
          {
            num: 4,
            plan: "onder",
            sum: 0,
            list: [
              {name: "内外墙面装饰工程", plan: 0}, {name: "地面工程", plan: 0}, {name: "门窗工程", plan: 0}, {name: "吊顶", plan: 0}
            ]
          },
          {
            num: 5,
            plan: 1,
            sum: 0,
            list: [
              {name: "水电安装", plan: 0}, {name: "暖通设备安装", plan: 0}, {name: "卫生器具安装", plan: 0}
            ]
          }
        ],
        arr: [
          {
            img: this.$url.icon_scg_oneImg, className: 'qualityOneIndex',
            title: "地基基础工程",
            text: "地基与基础承载着建筑的全部荷载，是建筑结构安全的关键。",
            what: "什么是地基基础工程？",
            effect: "地基与基础承载着建筑的全部荷载，是建筑结构安全的关键。",
            plan: "地基基础工程施工进度",
            types: ["土方开挖", "桩基施工", "基础防水施工", "筏板施工"],
            sum: '0'
          },
          {
            img: this.$url.icon_scg_twoImg, className: 'qualityOneIndexTwo',
            title: "主体结构工程",
            text: "主体结构工程采用较为先进的铝模施工工艺，施工过程管理严格，工程实体质量良好，但在砌体工程出现少量质量缺陷。",
            what: "什么是主体结构工程？",
            effect: "主体结构是建筑的骨架，由梁，板，墙，柱构成。它承担和传递了所有建筑上部的荷载。同时还对建筑物内的空间进行分割规划。",
            plan: "主体结构工程施工进度",
            sum: '0',
            types: ["现浇结构", "砌体工程", "二次结构工程"]
          },
          {
            img: this.$url.icon_scg_threeImg, className: 'qualityOneIndexThree',
            title: "屋面工程",
            text: "屋面工程施工中",
            what: "什么是屋面工程？",
            effect: "屋面工程是对建筑顶部进行防水、保温、加强处理，使其能够抵御雨水、低温并可以承受一定荷载。",
            plan: "屋面工程施工进度",
            sum: '0',
            types: ["屋面防水施工", "屋面保暖层施工"]
          },
          {
            img: this.$url.icon_scg_foreImg, className: 'qualityOneIndexFour',
            title: "装饰装修工程",
            text: "装饰装修工程施工中，施工过程管理较为严格，工程实体质量较好。",
            what: "什么是装饰装修工程？",
            effect: "装饰装修工程是对建筑构件进行美化、保护的措施，可提高建筑物的耐久性，延长建筑物的使用寿命，同时还可改善建筑隔热、隔声、防潮的性能，改善居住环境。",
            plan: "屋面工程施工进度",
            sum: '0',
            types: ["内外墙面装饰工程", "地面工程", "门窗工程", "吊顶"]
          },
          {
            img: this.$url.icon_scg_fiveImg, className: 'qualityOneIndexFive',
            title: "安装工程",
            text: "装饰装修工程施工中，施工过程管理较为严格，工程实体质量较好。",
            what: "什么是安装工程？",
            effect: "安装工程指室内一般设备的安装，它大致包含电气安装、给排水安装、暖通安装三方面。在实现建筑功能方面发挥着重要作用。",
            plan: "安装工程施工进度",
            sum: '0',
            types: ["水电安装", "暖通设备安装", "卫生器具安装"]
          }
        ],
        a: ''
      }
    },
    created(){
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
    },
    mounted(){
      let this_ = this;
      this.$Axios.get(this.$url.httpRequest + 'quality/' + this.$route.params.id).then(function (res) {
        let data = JSON.parse(this_.$getDAesString(res, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq"));
        this_.topImg = data.img ? data.img : this.$url.error_img;
        this_.houseName = data.houseName;
        this_.data = data.date;
        this_.plan = data.plan;
        this_.lv = data.lv;
        this_.qualityFootArr = data.siteImg;
        this_.allEvaluate = data.allEvaluate;
        for (let i in data.qualityLvArr) {
          this_.qualityLvArr[i].lv = data.qualityLvArr[i].lv;
          continue;
        }
        for (let i in data.qualityPlanArr) {
          for (let j in data.qualityPlanArr[i].list) {
            this_.qualityPlanArr[i].list[j].plan = data.qualityPlanArr[i].list[j].plan * 1;
          }
          this_.arr[i].sum = data.qualityPlanArr[i].sum;
          this_.arr[i].text = data.qualityPlanArr[i].desc ? data.qualityPlanArr[i].desc : '暂无数据！';
          continue;
        }

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

  .quality {
    max-width: 15rem;
    background: #f2f3f7;
    border-top: 2px solid #E0E0E0;
    padding-top: 0.42rem;
    padding-bottom: 1rem;
  }

  .qualityTop {
    width: 6.9rem;
    height: 8rem;
    margin: auto;
    box-shadow: 0 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    position: relative
  }

  .qualityTop .projectTopImg {
    width: 6.9rem;
    height: 4.4rem;
    position: relative;
    border-radius: 6px
  }

  .qualityTop i:nth-child(1) {
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

  .qualityTop i:nth-child(2) {
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

  .qualityTop .qualityTopImg img {
    width: 100%;
    height: 4.4rem;
    border-radius: 6px
  }

  .qualityTop .qualityTopBar {
    width: 6.9rem;
    height: 4.4rem;
    background: rgba(0, 0, 0, 0.50);
    position: absolute;
    top: 0;
    border-radius: 6px
  }

  .qualityTop .qualityTopBar p:nth-child(1) {
    font-family: PingFangSC-Semibold;
    font-size: 0.6rem;
    color: #FFFFFF;
    text-align: center;
    margin-top: 1.4rem;
  }

  .qualityTop .qualityTopBar p:nth-child(2) {
    font-family: PingFangSC-Light;
    font-size: 0.36rem;
    color: #FFFFFF;
    line-height: 0.36rem;
    text-align: center;
    margin-top: 0.16rem;
  }

  .qualityTop .qualityTopBar p:nth-child(3) {
    font-family: PingFangSC-Light;
    font-size: 0.2rem;
    color: #FFFFFF;
    line-height: 0.2rem;
    text-align: center;
    margin-top: 0.32rem;
  }

  .qualityTop .qualityTopText {
    width: 6.9rem;
    height: 3.2rem;
    background: #fff;
    padding-top: 0.4rem;
    border-radius: 6px
  }

  .qualityTop .qualityTopText .qualityTopLv {
    float: left;
    width: 2.4rem;
    height: 1.8rem;
    margin-left: 0.6rem;
    display: flex;
    flex-flow: column;
  }

  .qualityTop .qualityTopText .qualityTopLv p:nth-child(1) {
    font-family: PingFangSC-Thin;
    font-size: 0.8rem;
    color: #5880F3;
    line-height: 0.8rem;
    text-align: center;
    margin-top: 0.2rem;
    font-weight: 200;
  }

  .qualityTop .qualityTopText .qualityTopLv p:nth-child(2) {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #42464D;
    text-align: center;
    margin-top: 0.2rem;
  }

  .qualityTop .qualityTopText .qualityTopLv2 {
    float: left;
    width: 3.64rem;
    height: 1.8rem;
    margin-left: 0.2rem;
  }

  .qualityTop .qualityTopText .qualityTopLv2 p:nth-child(1) {
    font-family: PingFangSC-Thin;
    font-size: 0.8rem;
    color: #5880F3;
    line-height: 0.8rem;
    text-align: center;
    margin-top: 0.2rem;
    font-weight: 200;
  }

  .qualityTop .qualityTopText .qualityTopLv2 p:nth-child(2) {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #42464D;
    text-align: center;
    margin-top: 0.2rem;
  }

  .qualityHr {
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

  .qualityHr i {
    display: inline-block;
    width: 1.5rem;
    height: 0;
    border-top: 0.02rem solid #42464D;
    margin-top: 0.2rem
  }

  .qualityRate {
    width: 6.9rem;
    height: 5rem;
    margin: auto;
    text-align: center
  }

  .qualityRate div {
    width: 2.04rem;
    height: 2.3rem;
    background: #FFFFFF;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.08rem;
    text-align: center;
    float: left;
    margin: 0.13rem 0.13rem 0.13rem
  }

  .qualityRate div:nth-child(4) {
    margin-left: 1.25rem
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
    margin-top: 0.46rem
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
    margin-top: 0.46rem
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
    margin-top: 0.46rem
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
    margin-top: 0.46rem
  }

  .qualityRate div p {
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #4C4C4C;
    margin-top: 0.2rem
  }

  .qualityoveralls {
    width: 6.9rem;
    margin: auto;
    padding-bottom: 0.4rem;
    text-align: center;
    background-image: linear-gradient(-180deg, #5880F3 0%, #5311FD 100%);
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.08rem;
    color: #fff;
  }

  .qualityoveralls p {
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

  .qualityOne {
    width: 6.9rem;
    margin: auto;
    background: #FFFFFF;
    box-shadow: 0 1px 0.12rem 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.08rem;
    margin-top: 0.6rem
  }

  .qualityOneTop {
    width: 6.9rem;
    position: relative;
  }

  .qualityOne > div {
    border: 1px solid #f2f3f7
  }

  .qualityOneTitle {
    display: flex;
    justify-content: center;
    width: 3.4rem;
    margin: 0.4rem auto;
    position: relative
  }

  .qualityOneTitle span:nth-child(1) {
    width: 0.7rem;
    height: 0.7rem;
    line-height: 0.592rem;
    margin-right: 0.2rem
  }

  .qualityOneTitle span img {
    width: 0.7rem;
    height: 0.7rem
  }

  .qualityOneTitle span:nth-child(2) {
    display: inline-block;
    line-height: 0.7rem;
    font-family: PingFangSC-Thin;
    font-size: 0.36rem;
    color: #42464D;
  }

  .qualityOneTitleImg {
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

  .qualityOneDoor div:nth-child(2) {
    width: 4.4rem;
    heiight: 1.9rem;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #81899E;
    line-height: 0.38rem;
    margin-top: 0.4rem;
    margin-left: 0.48rem
  }

  .qualityOneText p:nth-child(1) {
    font-family: PingFangSC-Semibold;
    font-size: 0.36rem;
    color: #5880F3;
    margin-top: 0.2rem;
    margin-left: 0.48rem
  }

  .qualityOneText div p:nth-child(1) {
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #81899E;
    line-height: 0.38rem;
    margin: 0.2rem 0 0.4rem 0.48rem;
  }

  .qualityOneText {
    width: 6.9rem;
    padding-bottom: 0.4rem;
    background: #FFFFFF;
    border: 0.02rem solid #E5E8F0
  }

  .qualityOnePlan {
    width: 6.9rem;
    background: #FFFFFF;
    border: 1px solid #E5E8F0;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem
  }

  .qualityOnePlan p {
    width: 6rem;
    margin: 0.1rem auto;
    display: flex;
    justify-content: space-between;
    line-height: 0.4rem
  }

  .qualityOnePlan p:nth-child(1) span:nth-child(1) {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #42464D;
  }

  .qualityOnePlan p:nth-child(1) span:nth-child(2) {
    font-family: PingFangSC-Light;
    font-size: 0.4rem;
    color: #42464D;
  }

  .qualityOnePlan p span:nth-child(1) {
    opacity: 0.4;
    font-family: PingFangSC-Regular;
    font-size: 0.22rem;
    color: #4C4C4C;
  }

  .qualityOnePlan p span:nth-child(2) {
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

  .qualityFoot {
    width: 6.9rem;
    background: #FFFFFF;
    box-shadow: 0 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.09), 0 0.02rem 0.04rem 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.08rem;
    margin: 0.4rem auto
  }

  .qualityFootImg {
    width: 6.9rem;
    height: 3.78rem;
    border-radius: 0.08rem;
  }

  .qualityFootImg img {
    width: 6.9rem;
    height: 3.78rem;
    border-radius: 0.08rem;
  }

  .qualityFootTitle {
    padding-left: 0.4rem
  }

  .qualityFootText {
    padding-left: 0.4rem;
    padding-bottom: 0.4rem;
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #4C4C4C
  }

  .qualityFootText p {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #4C4C4C;
    line-height: 0.38rem;
    margin: 0.4rem 0 0;
    width: 5.98rem
  }

  .qualityFootTitle span {
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
