<template>
  <div class='landscape'>
    <div class='landscapeTop'>
      <i></i><i></i>
      <div class='landscapeTopImg'>
        <img :src='landscapesData.landscape_top.landscape_top_Img ?
        landscapesData.landscape_top.landscape_top_Img :
        this.$url.error_img'>
        <div class='landscapeTopBar'>
          <p class="landscape_top_housesName">{{landscapesData.landscape_top.housesName}}</p>
          <p class="landscape_top_title">景观规划图纸审核评测报告</p>
          <p class="landscape_top_date">{{landscapesData.landscape_top.date}}</p>
        </div>
      </div>

      <div class='landscapeTopText'>
        <div class='landscapeTopLv'>
          <p>{{landscapesData.landscape_top.houseLv}}</p>
          <p>规划设计评级</p>
        </div>
        <div class='landscapeTopLv2'>
          <p class="landscape_top_recommend">
            {{landscapesData.landscape_top.recommend ?
            landscapesData.landscape_top.recommend + "%" : ''}}
          </p>
          <p>绿化率</p>
        </div>
        <div class="clear"></div>
        <p
          style='text-align:center;margin-top:0.4rem;font-family: PingFangSC-Regular;font-size: 0.22rem;color: #9E9E9E;'>
          * 评级是由鹰眼鉴房的评分数值综合评定<br/>最高评级为S+，共划分为7个等级</p>
      </div>
    </div>

    <div v-if="landscapesData.landscape_top.landscape_rate &&
    landscapesData.landscape_top.landscape_rate.length!==0">
      <div class='landscapeHr'>
        <i></i>
        <img src='../../../static/gray.svg'>
        <span>本楼盘景观评级</span>
        <img src='../../../static/gray.svg'>
        <i></i>
      </div>
      <div class='landscapeRate'>
        <div v-for='val in landscapesData.landscape_top.landscape_rate'>
          <span :class="$class_name_ftn.projects_classNames(val.lv)">{{$class_name_ftn.storeNam(val.lv)}}</span>
          <p>{{val.name}}</p>
        </div>
      </div>
    </div>

    <div class='landscapeHr'>
      <i></i><img src='../../../static/gray.svg'><span
    >总体评价</span><img
      src='../../../static/gray.svg'><i></i>
    </div>
    <div class='landscapeOverall' v-html="landscapesData.landscape_top.designText"></div>
    <div class='landscapeHr'>
      <i></i><img src='../../../static/gray.svg'><span
    >主要功能区</span><img
      src='../../../static/gray.svg'><i></i>
    </div>
    <div class="function_area">
      <div class="function_all" v-for="item in landscapesData.landscape_top.function_rea">
        <p class="function_img"><img :src="item.img_icon" alt=""></p>
        <p class="function_name">{{item.name}}</p>
      </div>
    </div>
    <div class='landscapeHr'>
      <i></i><img src='../../../static/gray.svg'><span
    >本楼盘景观评测</span><img
      src='../../../static/gray.svg'><i></i>
    </div>

    <div class='park'
         v-if="landscapesData.landscape_top.scenery_type.type_list &&
         landscapesData.landscape_top.scenery_type.type_list.length !==0">
      <div class='parkTop'>
        <div class='parkTitle'><span><img :src='this.$url.icon_jgjb_Img'></span><span>小区景观效果评测</span></div>
        <div class="parkIndex">
          <i></i><i></i>
          <div class="type_list" v-for="item in landscapesData.landscape_top.scenery_type.type_list">
            <p>
              <span>{{item.type}}</span><span>{{$class_name_ftn.landscape(item.lv)}}</span>
            </p>
            <div v-if="item.text" class="type_text"><p v-html="item.text"></p></div>
          </div>
        </div>
      </div>
    </div>

    <div class='park'
         v-if="landscapesData.landscape_top.scenery_type.quality_list &&
         landscapesData.landscape_top.scenery_type.quality_list.length!==0">
      <div class='parkTop'>
        <div class='parkTitle'><span><img :src='this.$url.icon_jgjb_Img'></span><span>小区景观质量评测</span></div>
        <div class="parkIndex">
          <i></i><i></i>
          <div class="type_list" v-for="item in landscapesData.landscape_top.scenery_type.quality_list">
            <p>
              <span>{{item.type}}</span><span>{{$class_name_ftn.landscape(item.lv)}}</span>
            </p>
            <div v-if="item.text" class="type_text"><p v-html="item.text"></p></div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="landscapesData.previous_landscape_top.previous_housesName">
      <div class='otherTop'>
        <div class='otherTopImg'>
          <img
            :src='landscapesData.previous_landscape_top.previous_landscape_top_Img ?
            landscapesData.previous_landscape_top.previous_landscape_top_Img : this.$url.error_img'
            alt='图片无法显示'>
          <div class='otherTopBar'>
            <p class="other_top_housesName">{{landscapesData.previous_landscape_top.previous_housesName}}</p>
            <p class="other_top_title">同开发商往期楼盘景观评测报告</p>
          </div>
        </div>
      </div>
      <div
        v-if="landscapesData.previous_landscape_top.previous_landscape_rate &&
        landscapesData.previous_landscape_top.previous_landscape_rate.length !==0">
        <div class='landscapeHr'>
          <i></i><img src='../../../static/gray.svg'><span
        >同开发商往期楼盘景观评级</span><img
          src='../../../static/gray.svg'><i></i>
        </div>
        <div class='landscapeRate'>
          <div v-for='val in landscapesData.previous_landscape_top.previous_landscape_rate'>
            <span :class="$class_name_ftn.projects_classNames(val.lv)">{{$class_name_ftn.storeNam(val.lv)}}</span>
            <p>{{val.name}}</p>
          </div>
        </div>
      </div>

      <div class='landscapeHr'>
        <i></i><img src='../../../static/gray.svg'><span
      >同开发商往期楼盘景观评测</span><img
        src='../../../static/gray.svg'><i></i>
      </div>

      <div class='park'
           v-if="landscapesData.previous_landscape_top.previous_scenery_type.type_list &&
           landscapesData.previous_landscape_top.previous_scenery_type.type_list.length !== 0">
        <div class='parkTop'>
          <div class='parkTitle'><span><img :src='this.$url.icon_jgjb_Img'></span><span>小区景观效果评测</span></div>
          <div class="parkIndex">
            <i></i><i></i>
            <div class="type_list"
                 v-for="item in landscapesData.previous_landscape_top.previous_scenery_type.type_list">
              <p>
                <span>{{item.type}}</span><span>{{$class_name_ftn.landscape(item.lv)}}</span>
              </p>
              <div v-if="item.text" class="type_text"><p v-html="item.text"></p></div>
            </div>
          </div>
        </div>
      </div>
      <div class='park'
           v-if="landscapesData.previous_landscape_top.previous_scenery_type.quality_list &&
           landscapesData.previous_landscape_top.previous_scenery_type.quality_list.length !== 0">
        <div class='parkTop'>
          <div class='parkTitle'><span><img :src='this.$url.icon_jgjb_Img'></span><span>小区景观质量评测</span></div>
          <div class="parkIndex">
            <i></i><i></i>
            <div class="type_list"
                 v-for="item in landscapesData.previous_landscape_top.previous_scenery_type.quality_list">
              <p>
                <span>{{item.type}}</span><span>{{$class_name_ftn.landscape(item.lv)}}</span>
              </p>
              <div v-if="item.text" class="type_text"><p v-html="item.text"></p></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class='landscapeHr' style="margin-bottom:0.9rem">
      <i></i><img src='../../../static/gray.svg'>
      <span>
      <p>同开发商其他城市</p><p>已入住楼盘景观展示</p>
      </span>
      <img src='../../../static/gray.svg'>
      <i></i>
    </div>

    <div class="other_city" v-for="(val,index) in landscapesData.other_city" @click="other_path_handler(index,val)"
         v-if='val.img || val.title || val.city_name'>
      <div class="other_city_img">
        <img :src="val.img ? val.img : $url.error_img" alt="">
      </div>
      <div class="other_city_text">
        <span class="other_city_text_title">{{val.title ? val.title : err_text}}</span>
        <span class="other_city_text_name">{{val.city_name ? val.city_name : err_text}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        err_text: '暂无数据',
        landscapesData: {
          landscape_top: {
            landscape_top_Img: '',
            scenery_type: {
              type_list: [],
              type_text: {},
              quality_list: []
            },
          },
          previous_landscape_top: {
            previous_landscape_top_Img: '',
            previous_scenery_type: {
              type_list: [],
              quality_list: []
            },
          }
        },
        other_city: [],
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
      this.$Axios.get(this.$url.httpRequest + 'buidingScenery/' + this.$route.params.id).then(function (res) {
        let data = JSON.parse(this_.$getDAesString(res, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq"));
        this_.landscapesData = data.response.data;
      }).catch(function (err) {
        console.log(err);
      });
    },

    methods: {
      other_path_handler(index, val){
        this.$router.push({
          path: '/landscape_other/' + this.landscapesData.other_city[index].id,
          query: {houseName: val.title}
        });
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

  .defaults {
    background: #C2C2C2
  }

  .landscape {
    max-width: 15rem;
    background: #f2f3f7;
    border-top: 2px solid #E0E0E0;
    padding-top: 0.42rem;
    padding-bottom: 1rem;
  }

  .landscapeTop {
    width: 6.9rem;
    height: 8rem;
    margin: auto;
    box-shadow: 0 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    position: relative;
  }

  .landscapeTop .landscapeTopImg {
    width: 6.9rem;
    height: 4.4rem;
    position: relative;
    border-radius: 6px;
  }

  .landscapeTop i:nth-child(1) {
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

  .landscapeTop i:nth-child(2) {
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

  .landscapeTop .landscapeTopImg img {
    width: 100%;
    height: 4.4rem;
    border-radius: 6px
  }

  .landscapeTop .landscapeTopBar {
    width: 6.9rem;
    height: 4.4rem;
    background: rgba(0, 0, 0, 0.50);
    position: absolute;
    top: 0;
    border-radius: 6px
  }

  .landscapeTop .landscape_top_housesName {
    font-family: PingFangSC-Semibold;
    font-size: 0.6rem;
    color: #FFFFFF;
    text-align: center;
    margin-top: 1.4rem;
  }

  .landscapeTop .landscape_top_title {
    font-family: PingFangSC-Light;
    font-size: 0.36rem;
    color: #FFFFFF;
    line-height: 0.36rem;
    text-align: center;
    margin-top: 0.16rem;
  }

  .landscapeTop .landscape_top_date {
    font-family: PingFangSC-Light;
    font-size: 0.2rem;
    color: #FFFFFF;
    line-height: 0.2rem;
    text-align: center;
    margin-top: 0.16rem;
  }

  .landscapeTop .landscapeTopText {
    width: 6.9rem;
    height: 3.2rem;
    background: #fff;
    padding-top: 0.4rem;
    border-radius: 0.12rem
  }

  .landscapeTop .landscapeTopText .landscapeTopLv {
    float: left;
    width: 2.45rem;
    height: 1.8rem;
    margin-left: 0.6rem;
    display: flex;
    flex-flow: column;
  }

  .landscapeTop .landscapeTopText .landscapeTopLv p:nth-child(1) {
    font-family: PingFangSC-Thin;
    font-size: 0.8rem;
    color: #5880F3;
    line-height: 0.8rem;
    text-align: center;
    margin-top: 0.2rem;
    font-weight: 200;
  }

  .landscapeTop .landscapeTopText .landscapeTopLv p:nth-child(2) {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #42464D;
    text-align: center;
    margin-top: 0.2rem;
  }

  .landscapeTop .landscapeTopText .landscapeTopLv2 {
    float: left;
    width: 3.64rem;
    height: 1.8rem;
    margin-left: 0.2rem;
    display: flex;
    flex-flow: column;
  }

  .landscapeTop .landscapeTopText .landscape_top_recommend {
    font-family: PingFangSC-Thin;
    font-size: 0.8rem;
    color: #5880F3;
    line-height: 0.8rem;
    text-align: center;
    margin-top: 0.2rem;
    font-weight: 200;
  }

  .landscapeTop .landscapeTopText .landscapeTopLv2 p:nth-child(2) {
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #42464D;
    text-align: center;
    margin-top: 0.2rem;
  }

  .landscapeHr {
    width: 6.9rem;
    height: 0.44rem;
    margin: auto;
    line-height: 0.44rem;
    text-align: center;
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    font-family: PingFangSC-Light;
    font-size: 0.32rem;
    color: #42464D;
  }

  .landscapeHr i {
    display: inline-block;
    width: 1rem;
    height: 0;
    border-top: 0.02rem solid #42464D;
    margin-top: 0.2rem
  }

  .landscapeRate {
    width: 6.9rem;
    height: 2.3rem;
    margin: auto;
    display: flex;
    justify-content: center;
  }

  .landscapeRate div {
    width: 3.24rem;
    height: 2.3rem;
    background: #FFFFFF;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.08rem;
    text-align: center;
    margin: 0 0.1rem;
  }

  .landscapeRate div span {
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

  .landscapeRate div p {
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.26rem;
    color: #4C4C4C;
    margin-top: 0.2rem;
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

  .landscapeOverall {
    width: 6.9rem;
    margin: auto;
    text-align: center;
    background-image: linear-gradient(-180deg, #5880F3 0%, #5311FD 100%);
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.08rem;
  }

  .landscapeOverall p {
    width: 5.98rem;
    display: inline-block;
    margin: 0.65rem auto;
    font-family: PingFangSC-Regular;
    font-size: 0.34rem;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 0.6rem;
    text-align: left;
  }

  .function_area {
    width: 6.1rem;
    margin: auto;
    box-shadow: 0 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.12rem;
    background: #fff;
    display: flex;
    flex-flow: wrap;
    padding: 0 0.4rem 0.4rem 0.4rem;
  }

  .function_all {
    display: flex;
    flex-flow: column;
    width: 1.5rem;
    text-align: center;
    justify-content: center;
    margin-top: 0.4rem;
  }

  .function_img {
    width: 0.66rem;
    height: 0.66rem;
    margin: auto;
  }

  .function_name {
    margin-top: 0.1rem;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #4C4C4C;
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
    width: 3.78rem;
    margin: 0.4rem auto;
    position: relative;
  }

  .parkTitle span:nth-child(1) {
    width: 0.8905rem;
    height: 0.7rem;
    line-height: 0.59rem;
    margin-right: 0.2rem
  }

  .parkTitle span img {
    width: 100%;
    height: 0.7rem
  }

  .parkTitle span:nth-child(2) {
    display: inline-block;
    width: 3.18rem;
    line-height: 0.7rem;
    font-family: PingFangSC-Thin;
    font-size: 0.36rem;
    color: #42464D;
    white-space: nowrap;
  }

  .parkIndex {
    width: 7.26rem;
    background: #4B5970;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.22);
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #FFFFFF;
    line-height: 0.38rem;
    position: relative;
    left: -0.2rem;
    text-align: left;
    margin-bottom: 0.4rem;
    padding: 0.4rem 0 0.4rem 0;
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

  .type_list {
    width: 6.9rem;
    margin: auto;
    /*border-bottom: rgba(255,255,255,0.2) solid 0.03rem;*/
    /*padding: 0.4rem 0 0.3rem 0;*/
  }

  .type_list p {
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #FFFFFF;
    line-height: 0.4rem;
    padding: 0;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  .type_text {
    width: 6.9rem;
    margin: 0.1rem auto 0.2rem auto;
    border-bottom: rgba(255, 255, 255, 0.2) solid 0.03rem;
    border-top: rgba(255, 255, 255, 0.2) solid 0.03rem;
    opacity: 0.6;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #FFFFFF;
    line-height: 0.36rem;
    padding: 0.08rem 0 0.08rem 0;
  }

  .foot_type_list {
    width: 6.9rem;
    margin: auto;
    padding: 0 0 0.4rem 0;
  }

  .foot_type_list p {
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #FFFFFF;
    line-height: 0.4rem;
    padding: 0;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  .other_city {
    width: 6.9rem;
    background: #fff;
    border-radius: 0.08rem;
    margin: auto;
    display: flex;
    justify-content: space-around;
    margin-top: 0.02rem;
    padding: 0.4rem 0 0.4rem 0;
  }

  .other_city_img {
    width: 3.2rem;
    height: 1.8rem;
  }

  .other_city_text {
    width: 2.82rem;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
  }

  .other_city_text_title {
    font-family: PingFangSC-Regular;
    font-size: 0.36rem;
    color: #000000;
    line-height: 0.4rem;
    margin-top: 0.15rem;
  }

  .other_city_text_name {
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #777777;
    margin-top: 0.3rem;
  }

  .otherTop {
    width: 6.9rem;
    height: 2.76rem;
    margin: auto;
    box-shadow: 0 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    position: relative;
  }

  .otherTop .otherTopImg {
    width: 6.9rem;
    height: 2.76rem;
    position: relative;
    border-radius: 6px;
  }

  .otherTop .otherTopImg img {
    width: 100%;
    height: 2.76rem;
    border-radius: 6px
  }

  .otherTop .otherTopBar {
    width: 6.9rem;
    height: 2.76rem;
    background: rgba(0, 0, 0, 0.50);
    position: absolute;
    top: 0;
    border-radius: 6px
  }

  .otherTop .other_top_housesName {
    font-family: PingFangSC-Semibold;
    font-size: 0.6rem;
    color: #FFFFFF;
    text-align: center;
    margin-top: 0.5rem;
  }

  .otherTop .other_top_title {
    font-family: PingFangSC-Light;
    font-size: 0.36rem;
    color: #FFFFFF;
    line-height: 0.36rem;
    text-align: center;
    margin-top: 0.16rem;
  }

  .otherTop .other_top_date {
    font-family: PingFangSC-Light;
    font-size: 0.2rem;
    color: #FFFFFF;
    line-height: 0.2rem;
    text-align: center;
    margin-top: 0.16rem;
  }

</style>
