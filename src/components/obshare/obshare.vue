<template>
  <div class='obShare' v-if='isShows'>
    <div>
      <slider style="width:7.5rem;height:3.8rem" :pages="pages" :sliderinit="sliderinit"
              v-if="this.abShareData.peoperty.bannerList.length !== 0 "
      ></slider>
      <div class="vr_back" :style="'background-image:url('+this.abShareData.peoperty.vrData.imageUrl+')'"
           v-if="this.abShareData.peoperty.vrData"
      ></div>
      <div class="vr" v-if="this.abShareData.peoperty.vrData">
        <div class="vr_btn" v-on:click.prevent="vr_href_all">
          <span></span>
          <p>点击进入VR全景</p>
        </div>
        <div class="vr_list">
          <div class="vr_overflow">
            <div class="vr_icon" v-for="(val,index) in this.abShareData.peoperty.vrData.vrKindList"
                 v-on:click.prevent="vr_list(index,val)" v-if="val.kindType !== '0' ">
              <span :style="'background-image:url('+(val.iconUrl)+')'"></span>
              <p>{{val.kindName}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='titleDiv'>
      <p>
        <span>{{abShareData.peoperty.propertyName}}</span>
        <span>{{abShareData.peoperty.propertySoldStatus}}</span>
      </p>
      <p>
        <span>均价</span>
        <span>{{abShareData.peoperty.propertyPrice ? abShareData.peoperty.propertyPrice : '暂无'}}</span>
      </p>
      <p>
        <span v-for='key in abShareData.peoperty.propertyNatureList'>{{key.propertyNature}}</span>
      </p>
      <p class='ps' v-on:click.prevent="loadHandler('0','animated bounceIn')">
        <img :src='this.$url.icon_locale'>
        <span>{{abShareData.peoperty.propertyAddress}}</span>
        <img :src='this.$url.right_icon' style="float:right;width:0.12rem;height:0.22rem;margin-top: 0.054rem">
      </p>
      <p class='ps' v-on:click.prevent="loadHandler('0','animated bounceIn')">
        <img :src='this.$url.icon_property_right'>
        <span>{{abShareData.peoperty.developersName ? abShareData.peoperty.developersName : '暂无'}}</span>
        <img :src='this.$url.right_icon' style="float:right;width:0.12rem;height:0.22rem;margin-top: 0.054rem">
      </p>
      <p class='ps' v-on:click.prevent="loadHandler('0','animated bounceIn')">
        <img :src='this.$url.icon_apartment'>
        <span>预售证信息</span>
        <img :src='this.$url.right_icon' style="float:right;width:0.12rem;height:0.22rem;margin-top: 0.054rem">
      </p>
      <div class="see_all" v-on:click.prevent="loadHandler('0','animated bounceIn')"><span>查看全部</span></div>
    </div>

    <div class='mainDiv' v-if="this.abShareData.qulity.gradeList.length !== 0 "><span class='topSpan'>楼盘质量</span>
      <div class='mainClass'>
        <Echarts :echart="echartsArr"/>
        <div class='dateLvClass'>
          <div class='dateLvText' v-for='i in abShareData.qulity.gradeList'>
            <div class='lvTitle'>
              <p :class='$class_name_ftn.classLv(i.gradeLetter)'>{{i.gradeLetter}}</p>
              <p>{{i.gradeName}}</p>
            </div>
            <div class='lvText'>
              <p>{{i.gradeDes}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class='queryClass'>
      <div class="sweiper_class">
        <div class="swiper_icon" v-for="index in this.abShareData.qulity.gradeList"
             :style="'background-image:url('+$class_name_ftn.obShare_jb(index.gradeName)+')'"
             @click="loadHandler('0','animated bounceIn')">
          <p>{{index.gradeName}}</p>
          <span>查看报告</span>
        </div>
      </div>
    </div>

    <div class="construction_progress">
      <p class="progress_title">施工进度</p>
      <div class="progress_img">
        <span>{{this.abShareData.qulity.buidProgress}}</span>
        <span>{{this.abShareData.qulity.publicAreaProgress}}</span>
      </div>
      <p class="progress_foot">
        <span>当前阶段</span><span>{{this.abShareData.qulity.currentGeneration ? this.abShareData.qulity.currentGeneration : '暂无'}}</span>
      </p>
      <p class="progress_foot">
        <span>交房时间</span><span>{{this.abShareData.qulity.completionDate ? this.abShareData.qulity.completionDate : '暂无'}}</span>
      </p>
    </div>

    <div class="ranking_list">
      <p class="ranking_list_title">榜上有名</p>
      <span class="error_list" v-if="this.abShareData.qulity.rankList.length == 0 ">暂无数据</span>
      <div class="ranking_list_inner" v-for="val in this.abShareData.qulity.rankList">
        <p class="ranking_list_inner_top" v-on:click.prevent="loadHandler('0','animated bounceIn')">
          <span>{{val.rankName}}</span><span>查看全部</span></p>
        <p class="ranking_list_inner_date">{{val.rankDate}}</p>
        <p class="ranking_list_inner_text">{{val.propertyDes}}</p>
      </div>
      <div class="ranking_list_btn" v-on:click.prevent="loadHandler('0','animated bounceIn')">查看全部榜单</div>
    </div>

    <div class='mainDivs'><span class='topSpan'>主力户型&nbsp;&nbsp;&nbsp;({{abShareData.houseType.houseTypeNum}})</span>
      <hr/>
      <div class='mainClasss' v-for='value in abShareData.houseType.houseTypeList'>
        <div class="mImg"><span class='redt'>{{value.houseTypeSoldStatus}}</span><img :src='value.houseTypeImageUrl'>
        </div>
        <div class='mText'><p>{{value.houseTypeTitle}}</p>
          <p><span>建面&nbsp;</span>{{value.houseTypeArea}}</p>
          <p>{{value.houseTypePrice}}</p>
          <p><span v-for='tex in value.houseTypeNatureList'>{{tex.houseTypeNature}}</span></p></div>
      </div>
    </div>

    <div v-if="this.abShareData.peoperty.propertyLat !=='0.0' ">
      <div class="amap_top"><p>周边配套</p></div>
      <div id="container" class='mapTwo'></div>
      <div class="amap_icon">
        <div class="amap_list">
          <div :class="['amap_list_icon',{'active_icon':active_icon_num == index}]"
               v-for="(val,index) in this.amap_icon_list" @click="amap_click(index)">
            <span :style="'background-image:url('+(active_icon_num == index ? val.active_img : val.img)+')'"></span>
            <p>{{val.name}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class='photoDiv' v-if="abShareData.album.albumNum !== 0 ">
      <span>楼盘相册&nbsp;&nbsp;&nbsp;({{abShareData.album.albumNum}})</span>
      <div class="photo_list">
        <div class='photoNum' v-for='value in abShareData.album.albumList'><img :src='value.albumImageUrl'>
          <p>{{value.albumName}}</p></div>
      </div>
    </div>
    <div class='footDiv'>
      <img :src='footImg'>
      <span>下载APP  查看更多楼盘质量数据</span>
    </div>
    <div class='buttonClass'>
      <el-button v-on:click.prevent="loadHandler('0','animated bounceIn')">立即下载鹰眼鉴房</el-button>
    </div>
    <el-amap vid="container" :zoom="11" :center="ampCenter">
      <el-amap-marker v-for="marker in markers" :content="marker.content" :position="marker.position"></el-amap-marker>
    </el-amap>
  </div>
</template>
<script>
  import slider from 'vue-concise-slider'// 引入slider组件
  import Echarts from './echarts/echarts.vue'
  import {mapState, mapMutations} from 'vuex'
  export default {
    data(){
      return {
        isShows: false,
        footImg: this.$url.obShareOnloadLogoImg,
        echartsArr: [],
        vr_arr: [],
        img: [],
        active_icon_num: 0,
        ampCenter: [],
        markers: [
          {
            position: [113.52154, 34.80999],
            content: '<div><img style="width:1rem" src="http://oxrgdeqd8.bkt.clouddn.com/housingesta_icon_loupanS@3x.png?imageslim" alt=""></div>'
          }
        ],
        amap_icon_list: [
          {img: this.$url.dt, active_img: this.$url.active_dt, name: '地铁'},
          {img: this.$url.yy, active_img: this.$url.active_yy, name: '医院'},
          {img: this.$url.gj, active_img: this.$url.active_gj, name: '公交'},
          {img: this.$url.xx, active_img: this.$url.active_xx, name: '学校'},
          {img: this.$url.gw, active_img: this.$url.active_gw, name: '购物'},
          {img: this.$url.cs, active_img: this.$url.active_cs, name: '超市'},
          {img: this.$url.yh, active_img: this.$url.active_yh, name: '银行'},
          {img: this.$url.xiuxian, active_img: this.$url.active_xiuxian, name: '休闲'},
          {img: this.$url.js, active_img: this.$url.active_js, name: '健身'}
        ],
        vr_icon_list: [
          {img: this.$url.vr_nk, name: '鸟瞰图'},
          {img: this.$url.vr_lpsj, name: '楼盘实景'},
          {img: this.$url.vr_lpsp, name: '楼盘沙盘'},
          {img: this.$url.vr_zbpt, name: '周边配套'},
          {img: this.$url.vr_ybj, name: '样板间'}
        ],
        noabShareData: {
          album: {
            albumList: [],
            albumNum: '21'
          },
        },
        queryArr: [
          {img: this.$url.gczl, title: '工程质量报告'},
          {img: this.$url.ghsj, title: '规划设计报告'},
          {img: this.$url.zbpt, title: '周边配套报告'},
          {img: this.$url.jgcp, title: '景观评测报告'},
          {img: this.$url.wycp, title: '物业评测报告'},
          {img: this.$url.ghls, title: '规划落实报告'}
        ],
        abShareData: {
          peoperty: {
            propertyName: ''
          },
          qulity: {
            gradeList: [],
            buidProgress: '',
            rankList: []
          },
          houseType: {},
          peoperty: {}
        },
        pages: [],
        //滑动配置[obj]
        sliderinit: {
          currentPage: 0,//当前页码
          thresholdDistance: 100,//滑动判定距离
          thresholdTime: 1000,//滑动判定时间
          autoplay: 3000,//自动滚动[ms]
          loop: true,//循环滚动
          infinite: 1,//无限滚动前后遍历数
          slidesToScroll: 1,//每次滑动项数
        }
      }
    },

    components: {
      slider,
      Echarts
    },
    computed: {
      ...mapState({
        apap_icon_num: 'apap_icon_num'
      }),
    },
    methods: {
      ...mapMutations({
        set_motai:'set_motai',
        set_school_class:'set_school_class',
        change_motai:'change_motai'
      }),
      loadHandler(num, className){
        this.set_motai(num);
        this.set_school_class(className);
        this.change_motai();
      },

      map_init(){
        this.$map.initAMapApiLoader({
          // 高德的key
          key: 'f2c01c78d13068664acd4d50762898a0',
          // 插件集合
          plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
        });
      },

      amap_click(index){
        let propertyLat = this.abShareData.peoperty.propertyLat;
        let propertyLon = this.abShareData.peoperty.propertyLon;
        let id = this.$route.params.id;
        this.active_icon_num = index;
        this.$store.commit('set_amap_icon', index);
        this.$router.push({
          path: '/amap/' + id,
          query: {
            propertyLat: propertyLat,
            propertyLon: propertyLon,
            house_name: this.abShareData.peoperty.propertyName
          }
        });
      },

      get_http(){
        let this_ = this;
        let url = this.$url.httpRequest;
        let buiding = 'buidingSurver1_2/';
        let id = this.$route.params.id;
        let base = "yhgt!d%sd*aw%dSDSFSsa#mng~dsq";

        this.$Axios.get(url + buiding + id).then(function (res) {
          this_.abShareData = JSON.parse(this_.$getDAesString(res, base)).response.data;
          let len = this_.abShareData.peoperty.bannerList.length;
          let bannerList = this_.abShareData.peoperty.bannerList;
          let gradeList = this_.abShareData.qulity.gradeList;
          let vrList = this_.abShareData.peoperty.vrData;
          let propertyLat = this_.abShareData.peoperty.propertyLat;
          let propertyLon = this_.abShareData.peoperty.propertyLon;
          this_.vr_arr = vrList;
          this_.ampCenter = this_.markers[0].position = [propertyLon * 1, propertyLat * 1];
          for (let b = 0; b < len; b++) {
            let obj = new Object({
              style: {
                background: ''
              }
            });
            obj.style.background = 'url(' + bannerList[b].bannerImageUrl + ')';
            this_.pages.push(obj);
            continue;
          }

          for (let j in bannerList) {
            this_.img.push(bannerList[j].bannerImageUrl);
            continue;
          }

          for (let i in gradeList) {
            if (!gradeList[i].gradeNum) {
              gradeList[i].gradeNum = 0;
            }
            this_.echartsArr.push(gradeList[i]);
            continue;
          }

          this_.isShows = true;
          return;

        }).catch(function (err) {
          console.log(err);
        });
      },
      //跳转全景
      vr_href_all(){
        let id = this.$route.params.id;
        this.$router.push({
          path: '/ifrem/' + id,
          query: {
            url: this.vr_arr,
            index: '0'
          }
        });
      },
      //跳转全景
      vr_list(index, val){
        let id = this.$route.params.id;
        this.$router.push({
          path: '/ifrem/' + id,
          query: {
            url: this.vr_arr,
            index
          }
        });
      }
    },
    mounted(){
      window.localStorage.is = true;
      this.map_init();
      console.log(this.apap_icon_num);
      this.active_icon_num = this.apap_icon_num;
      this.get_http();
    },
  }
</script>

<style scoped>
  a:link {
    color: #42464D;
    text-decoration: none;
  }

  a:visited {
    color: #42464D;
    text-decoration: none;
  }

  a:hover {
    color: #42464D;
    text-decoration: none;
  }

  a:active {
    color: #42464D;
    text-decoration: none;
  }

  .greener {
    color: #70CAA8
  }

  .bluer {
    color: #5880F3
  }

  .pu {
    color: #879EC4
  }

  .reder {
    color: #FE6E6E
  }

  .greyer {
    color: #C2C2C2
  }

  .obShare {
    width: 7.5rem;
    background: #ebebeb;
    padding-bottom: 0.6rem;
    margin: auto;
    position: relative;
  }

  .vr_back {
    wdith: 7.5rem;
    height: 3.8rem;
    background-size: cover;
  }

  .vr {
    width: 7.5rem;
    height: 3.8rem;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .vr_btn {
    width: 7.5rem;
    height: 1.2rem;
    margin-top: 1.3rem;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #FFFFFF;
  }

  .vr_btn span {
    display: inline-block;
    width: 0.71rem;
    height: 0.71rem;
    background-image: url("http://oxrgdeqd8.bkt.clouddn.com/housingesta_icon_vr@3x.png?imageslim");
    background-size: cover;
  }

  .vr_list {
    width: 7.5rem;
    height: 0.65rem;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 0;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    padding-top: 0.1rem;
  }

  .vr_overflow {
    width: 7.5rem;
    height: 0.75rem;
    display: flex;
    justify-content: space-around;
  }

  .vr_icon {
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.2rem;
    color: rgba(255, 255, 255, 0.5);
    line-height: 0.24rem;
  }

  .vr_icon span {
    width: 0.24rem;
    height: 0.24rem;
    background-size: cover;
    display: inline-block;
  }

  .active_icon {
    color: #0080FF !important;
  }

  .titleDiv {
    width: 7.5rem;
    background: #FFFFFF;
    border-radius: 2px;
    position: relative;
  }

  .see_all {
    width: 7.5rem;
    height: 0.8rem;
    text-align: center;
    border-top: 1px solid #E7E7E7;
    margin-top: 0.2rem;
    border-opacity: 0.7;
  }

  .mapTwo {
    width: 7.5rem;
    height: 3.2rem;
    border-top: 0.037rem solid #E0E0E0;
    text-align: center;
    margin: auto
  }

  .amap_icon {
    width: 7.5rem;
    height: 1.22rem;
    background: #fff;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .amap_icon ::-webkit-scrollbar {
    display: none;
  }

  .amap_list {
    width: 12.21rem;
    display: flex;
    justify-content: space-around;
    height: 1rem;
  }

  .amap_list_icon {

    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #8B949E;
    line-height: 0.24rem;
    text-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

  }

  .amap_list .amap_list_icon span {
    width: 0.34rem;
    height: 0.33rem;
    background: #fff;
    display: inline-block;
    margin: auto;
    background-size: cover;
  }

  .see_all span {
    width: 7.1rem;
    font-family: PingFangSC-Regular, "微软雅黑";
    font-size: 0.28rem;
    color: #212832;
    line-height: 0.8rem;
  }

  .titleDiv p:nth-child(1) {
    display: flex;
    justify-content: left;
    line-height: 0.48rem;
    margin-bottom: 0.2rem;
    padding-top: 0.4rem;
  }

  .titleDiv p:nth-child(1) span:nth-child(1) {
    margin-left: 0.4rem;
    font-family: PingFangSC-Medium;
    font-size: 0.36rem;
    color: #42464D;
    line-height: 0.48rem;
    display: inline-block;
  }

  .titleDiv p:nth-child(1) span:nth-child(2) {
    margin-top: 0.06rem;
    margin-left: 0.2rem;
    width: 0.58rem;
    height: 0.32rem;
    background: #FF6E3A;
    line-height: 0.32rem;
    font-family: '.PingFangSC-Semibold';
    font-size: 0.2rem;
    color: #FFFFFF;
    text-align: center;
    display: inline-block;
  }

  .titleDiv p:nth-child(2) span {
    font-family: PingFangSC-Medium;
    font-size: 0.32rem;
    color: #FF6E3A;
    line-height: 0.32rem;
  }

  .titleDiv p:nth-child(2) span:nth-child(1) {
    margin-left: 0.4rem;
  }

  .titleDiv p:nth-child(2) span:nth-child(2) {
    margin-left: 0.1rem;
  }

  .titleDiv p:nth-child(2) span:nth-child(3) {
    margin-left: 0.1rem;
  }

  .titleDiv p:nth-child(3) {
    margin: 0.3rem 0 0.4rem 0.4rem
  }

  .ps {
    width: 6.8rem;
    display: flex;
    margin: 0.3rem auto;
    justify-content: space-around;
  }

  .titleDiv p:nth-child(3) span {
    background: #ffffff;
    border: 0.04rem solid #42464D;
    font-family: '.PingFangSC-Semibold';
    font-size: 0.2rem;
    line-height: 0.4rem;
    padding: 0.1rem 0.15rem;
    height: 0.4rem;
    margin-right: 0.1rem;
  }

  .ps img {
    width: 0.32rem;
    height: 0.32rem;
  }

  .ps span {
    display: inline-block;
    width: 5.7rem;
    margin-left: 0.2rem;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #42464D;
    line-height: 0.28rem;
  }

  .mainDiv {
    width: 7.5rem;
    margin: 0.2rem auto;
    background: #FFFFFF;
    border-radius: 2px;
    padding-bottom: 0.4rem
  }

  .topSpan {
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #42464D;
    line-height: 0.28rem;
    display: inline-block;
    margin: 0.22rem 0 0.22rem 0.42rem
  }

  .mainClass {
    margin-top: 0.4rem;
  }

  .queryClass {
    width: 7.5rem;
    height: 4.8rem;
    background: #FFFFFF;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    position: relative;
  }

  .queryClass ::-webkit-scrollbar {
    display: none;
  }

  .sweiper_class {
    height: 4.8rem;
    background: #FFFFFF;
    border-radius: 0.08rem;
    display: flex;
    display: -webkit-box;
    justify-content: center;
    position: absolute;
    padding-right: 0.15rem;
  }

  .swiper_icon {
    width: 3rem;
    height: 3.8rem;
    border-radius: 0.08rem;
    margin: 0.5rem 0 0.5rem 0.15rem;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .swiper_icon p {
    font-family: PingFangSC-Regular, "微软雅黑";
    font-size: 0.28rem;
    color: #FFFFFF;
    line-height: 0.28rem;
    text-align: center;
    margin: 1.5rem 0 0.2rem 0;
  }

  .swiper_icon span {
    width: 1.2rem;
    height: 0.3rem;
    font-family: PingFangSC-Regular, "微软雅黑";
    font-size: 0.2rem;
    color: #FFFFFF;
    line-height: 0.3rem;
    text-align: center;
    border: 0.01rem solid rgba(255, 255, 255, 0.66);
    border-radius: 1rem;
    display: block;
    margin: auto;
  }

  .construction_progress {
    width: 7.5rem;
    background: #fff;
    margin-top: 0.2rem;
    padding-bottom: 0.4rem;
  }

  .progress_title {
    width: 6.9rem;
    height: 0.8rem;
    padding-left: 0.3rem;
    font-family: PingFangSC-Medium, "微软雅黑";
    font-size: 0.28rem;
    color: #212832;
    line-height: 0.8rem;
    font-weight: 600;
  }

  .progress_img {
    width: 100%;
    height: 6rem;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/pic_shigongjindu@3x.png?imageslim');
    background-size: cover;
    position: relative;
  }

  .progress_img span {
    font-family: PingFangSC-Regular, '微软雅黑';
    font-size: 0.24rem;
    color: #FFFFFF;
    line-height: 0.28rem;
  }

  .progress_img span:nth-child(1) {
    width: 1.57rem;
    height: 0.28rem;
    position: absolute;
    display: block;
    top: 0.77rem;
    left: 3.01rem;
  }

  .progress_img span:nth-child(2) {
    position: absolute;
    display: block;
    top: 4.93rem;
    left: 2.83rem;
  }

  .progress_foot {
    width: 6.9rem;
    display: flex;
    justify-content: space-between;
    padding: 0.3rem 0.3rem 0rem 0.3rem;
  }

  .progress_foot span:nth-child(1) {
    font-family: PingFangSC-Regular, '微软雅黑';
    font-size: 0.26rem;
    color: #8B949E;
    line-height: 0.26rem;
  }

  .progress_foot span:nth-child(2) {
    font-family: PingFangSC-Regular, '微软雅黑';
    font-size: 0.26rem;
    color: #212832;
    line-height: 0.26rem;
  }

  .ranking_list {
    width: 7.5rem;
    background: #fff;
    margin-top: 0.2rem;
  }

  .ranking_list_title {
    width: 6.9rem;
    height: 0.8rem;
    padding-left: 0.3rem;
    font-family: PingFangSC-Medium, "微软雅黑";
    font-size: 0.28rem;
    color: #212832;
    line-height: 0.8rem;
    font-weight: 600;
  }

  .error_list {
    display: inline-block;
    margin: auto;
    width: 100%;
    text-align: center;
    line-height: 0.5rem;
  }

  .amap_top {
    width: 7.2rem;
    height: 0.8rem;
    padding-left: 0.3rem;
    font-family: PingFangSC-Medium, "微软雅黑";
    font-size: 0.28rem;
    color: #212832;
    line-height: 0.8rem;
    font-weight: 600;
    background: #fff;
  }

  .ranking_list_inner {
    width: 7.5rem;
    border-top: 0.01rem solid #E7E7E7;
  }

  .ranking_list_inner_top {
    widgth: 6.9rem;
    padding: 0.3rem 0.3rem 0 0.3rem;
    display: flex;
    justify-content: space-between;
  }

  .ranking_list_inner_top span:nth-child(1) {
    font-family: PingFangSC-Regular, '微软雅黑';
    font-size: 0.28rem;
    color: #212832;
    line-height: 0.32rem;
  }

  .ranking_list_inner_top span:nth-child(2) {
    font-family: PingFangSC-Regular, '微软雅黑';
    font-size: 0.24rem;
    color: #212832;
    line-height: 0.3rem;
  }

  .ranking_list_inner_date {
    width: 7.2rem;
    text-align: left;
    padding-left: 0.3rem;
    font-family: PingFangSC-Regular, '微软雅黑';
    font-size: 0.24rem;
    color: #8B949E;
    line-height: 0.24rem;
    margin-top: 0.2rem;
  }

  .ranking_list_inner_text {
    width: 6.9rem;
    padding: 0.3rem;
    font-family: PingFangSC-Regular, '微软雅黑';
    font-size: 0.24rem;
    color: #8B949E;
    line-height: 0.4rem;
  }

  .ranking_list_btn {
    width: 7.5rem;
    text-align: center;
    line-height: 0.8rem;
    border-top: 0.01rem solid #E7E7E7;
    font-family: PingFangSC-Regular, '微软雅黑';
    font-size: 0.28rem;
    color: #212832;
    line-height: 0.8rem;
  }

  .dateClass {
    width: 7.1rem;
    height: 4rem;
    background: red
  }

  .dateLvClass {
    width: 7.1rem;
    background: #fff;
    margin: 0.2rem auto;
    padding-bottom: 0.4rem
  }

  .dateLvText {
    width: 6.6rem;
    background: #fff;
    display: flex;
    justify-content: space-around;
    margin: 0.4rem auto;
    border-bottom: 1px solid #E7E7E7;
    border-top: 1px solid #E7E7E7;
    padding: 0.3rem 0 0.3rem 0;
  }

  .lvTitle {
    width: 1.4rem;
    height: 1rem;
    text-align: center;
    border-right: 1px solid #e0e0e0;
    margin-top: 0.16rem;
  }

  .lvText {
    width: 4.5rem;
    margin-top: 0.1rem
  }

  .lvTitle p:nth-child(1) {
    font-family: PingFangSC-Regular;
    font-size: 0.52rem;
    line-height: 0.52rem;
    margin-top: 0.1rem
  }

  .lvTitle p:nth-child(2) {
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #42464D;
    line-height: 0.24rem;
    margin-top: 0.1rem
  }

  .lvText p {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #42464D;
    line-height: 0.4rem
  }

  .footDiv {
    width: 7.5rem;
    height: 3.68rem;
    margin: 0.2rem auto;
    background: #FFFFFF;
    border-radius: 2px;
    text-align: center;
  }

  .footDiv img {
    width: 6.3rem;
    height: 2.4rem;
    margin: 0.4rem auto 0;
  }

  .footDiv span {
    display: inline-block;
    width: 4.08rem;
    height: 0.28rem;
    font-family: MicrosoftYaHei;
    font-size: 0.28rem;
    color: #42464D;
    line-height: 0.28rem;
    margin: 0.2rem auto;
  }

  .buttonClass {
    width: 7.1rem;
    text-align: center;
    margin: 0.4rem auto
  }

  .buttonClass button {
    width: 6.3rem;
    height: 0.86rem;
    background: #575757;
    border-radius: 2rem;
    font-family: MicrosoftYaHei;
    font-size: 0.28rem;
    color: #FFFFFF;
  }

  .photoDiv {
    width: 7.5rem;
    height: 6.98rem;
    margin: 0.18rem auto;
    background: #FFFFFF;
    border-radius: 2px;
  }

  .photoDiv span {
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #42464D;
    line-height: 0.28rem;
    display: inline-block;
    margin: 0.22rem 0 0.22rem 0.42rem;
  }

  .photoNum {
    margin-left: 0.42rem;
    margin-top: 0.4rem;
  }

  .photo_list {
    display: flex;
    flex-flow: wrap;
    justify-content: flex-start;
    background-color: white;
  }

  .photoNum img {
    width: 1.956rem;
    height: 1.956rem;
  }

  .photoNum p {
    text-align: center;
    margin-top: 0.1rem;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #000000;
    line-height: 0.28rem;
  }

  .mainDivs {
    width: 7.5rem;
    margin: 0.18rem auto;
    background: #FFFFFF;
    border-radius: 2px;
    padding-bottom: 0.4rem
  }

  .topSpan {
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #42464D;
    line-height: 0.28rem;
    display: inline-block;
    margin: 0.22rem 0 0.22rem 0.42rem
  }

  .mainClasss {
    height: 2.4rem;
    display: flex;
    justify-content: space-around;
    margin-top: 0.4rem;
    margin-left: 0.4rem
  }

  .mImg {
    width: 2.4rem;
    height: 2.4rem
  }

  .mImg img {
    width: 2.4rem;
    height: 2.4rem
  }

  .redt {
    display: inline-block;
    width: 0.74rem;
    height: 0.4rem;
    background: #E64B4B;
    position: absolute;
    margin: 0.2rem 0 0 0 !important;
    font-family: PingFangSC-Semibold;
    font-size: 0.2rem;
    color: #FFFFFF;
    line-height: 0.4rem;
    text-align: center
  }

  .mText {
    width: 3.4rem;
    height: 2.4rem
  }

  .mText p:nth-child(1) {
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #262A33;
    line-height: 0.32rem;
    margin-top: 0.1rem
  }

  .mText p:nth-child(2) {
    opacity: 0.4;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #000000;
    line-height: 0.24rem;
    margin-top: 0.1rem
  }

  .mText p:nth-child(3) {
    font-family: PingFangSC-Medium;
    font-size: 0.32rem;
    color: #F85E70;
    line-height: 0.32rem;
    margin-top: 0.3rem
  }

  .mText p:nth-child(4) {
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #262A33;
    line-height: 0.32rem;
    margin-top: 0.1rem;
    line-height: 0.4rem;
  }

  .mText p:nth-child(4) span {
    background: #E2E2E2;
    margin: 0;
    font-family: PingFangSC-Semibold;
    font-size: 0.2rem;
    line-height: 0.2rem;
    padding: 0.1rem 0.15rem;
    margin-right: 0.2rem;
    display: inline-block
  }
</style>
