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
          <div>
            <img style="width: 100%;height: 100%;" src="/static/obshare/housingesta_icon_quanjing@2x.png" alt="">
          </div>
          <p>全景</p>
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
      </p>
      <p></p>
      <p>
        <span v-for='key in abShareData.peoperty.propertyNatureList'>{{key.propertyNature}}</span>
      </p>
      <p class='ps' v-on:click.prevent="loadHandler('0','animated bounceIn')">
        <span>{{abShareData.peoperty.developersName ? '预计交房时间：' + abShareData.peoperty.developersName : '预计交房时间：' + '暂无'}}</span>
      </p>
      <p class='ps' v-on:click.prevent="loadHandler('0','animated bounceIn')">
        <span>{{'地址信息：' + abShareData.peoperty.propertyAddress}}</span>
        <img :src='this.$url.right_icon' style="float:right;width:0.12rem;height:0.22rem;margin-top: 0.054rem">
      </p>
    </div>
    <div class="g-montoring">
      <p class="progress_title">质量监控</p>
      <p class="g-montoring-num"><span>已服务业主23000名</span><span>已更新报告11期</span></p>
      <div class="g-montoring-yes">
        <div style="margin: auto;width: 100%">
          <div class="g-montoring-span">
            <div>
              <span>
                <img src="/static/obshare/housingesta_icon_duigou@2x.png" alt="">
              </span>
              <span>定期更新楼盘报告</span>
            </div>
            <div>
              <span>
                <img src="/static/obshare/housingesta_icon_duigou@2x.png" alt="">
              </span>
              <span>深度质量监控报告</span>
            </div>
          </div>
          <div class="g-montoring-span">
            <div>
              <span>
                <img src="/static/obshare/housingesta_icon_duigou@2x.png" alt="">
              </span>
              <span>最完整的整改记录</span>
            </div>
            <div>
              <span>
                <img src="/static/obshare/housingesta_icon_duigou@2x.png" alt="">
              </span>
              <span>可视化的全景监控</span>
            </div>
          </div>
        </div>
      </div>
      <p class='ps' style="padding-bottom: 0.3rem" v-on:click.prevent="loadHandler('0','animated bounceIn')">
        <span>使用楼盘质量监控服务享受更多特权</span>
        <img :src='this.$url.right_icon' style="float:right;width:0.12rem;height:0.22rem;margin-top: 0.054rem">
      </p>
    </div>
    <div class="g-light-seek clearfix">
      <p class="progress_title" style="padding-left: 0">质量寻光</p>
      <vueWaterfallEasy :imgsArr="imgsArr" @scrollLoadImg="fetchImgsData">
        <template slot-scope="props">
          <div class="player_info">
            <p>{{props.value.info}}</p>
            <div class="g-light-seek-use">
              <span class="g-light-seek-use-img"></span>
              <span class="g-light-seek-use-name">大鱼吃小鱼</span>
              <span class="g-light-seek-use-num" style="margin-right: 0.15rem">
              <span style="width:0.24rem;height: 0.22rem;display: inline-block;margin-right: 0.1rem">
              <img style="width: 100%;" src="/static/xunguang_icon_pinglun_n@3x.png" alt=""
                   v-on:click.prevent="loadHandler('0','animated bounceIn')"></span>12</span>
            </div>
          </div>
        </template>
      </vueWaterfallEasy>
      <div class="g-light-seek-fot">
        <div class="g-light-seek-fot-btn" @click="loadHandler('0','animated bounceIn')">查看全部现场图片</div>
      </div>
    </div>
    <div class='queryClass' v-if="this.abShareData.qulity">
      <p class="progress_title">楼盘质量简报</p>
      <div class="sweiper_class">
        <div class="swiper_icon" v-for="index in this.abShareData.qulity.gradeList"
             :style="'background-image:url('+$class_name_ftn.obShare_jb(index.gradeName)+')'"
             @click="loadHandler('0','animated bounceIn')">
          <p>{{index.gradeName}}</p>
          <span>查看报告</span>
        </div>
      </div>
    </div>
    <div class="g-mes">
      <p style="display: flex;justify-content: space-between" class="progress_title">
        <span>楼盘信息</span>
        <span class="look-all" @click="loadHandler('0','animated bounceIn')">查看全部></span>
      </p>
      <p class="g-mes-li">
        <span>开盘均价</span>
        <span>328300元／m²</span>
      </p>
      <p class="g-mes-li">
        <span>开发商</span>
        <span>北京中原地产</span>
      </p>
      <p class="g-mes-li">
        <span>开盘时间</span>
        <span>2017.12.30</span>
      </p>
      <p class="g-mes-li">
        <span>交房时间</span>
        <span>2017.12.30</span>
      </p>
      <p class="g-mes-li">
        <span>产权年限</span>
        <span>70年</span>
      </p>
      <p class="g-mes-li">
        <span>许可证</span>
        <span>许可证信息</span>
      </p>
    </div>
    <div class="g-dynamic">
      <p style="display: flex;justify-content: space-between" class="progress_title">
        <span>楼盘动态</span>
        <span class="look-all" @click="loadHandler('0','animated bounceIn')">查看全部></span>
      </p>
      <div class="g-dynamic-lis">
        <div class="g-dynamic-li">
          <p>2017-09-30</p>
          <p>预计2017年9月三期22-25＃、32#、33#入住</p>
          <p>22#</p>
        </div>
        <div class="g-dynamic-li">
          <p>2017-09-30</p>
          <p>预计2017年9月三期22-25＃、32#、33#入住</p>
          <p>22#</p>
        </div>
        <div class="g-dynamic-li g-dynamic-li-be">
          <p>2017-09-30</p>
          <p>预计2017年9月三期22-25＃、32#、33#入住</p>
          <p>22#</p>
        </div>
      </div>
    </div>
    <div class="g-fot">
      <p><i>!</i>免责声明：质量寻光计划的图片、视频或文字仅由作者本人提供，与鹰眼鉴房无关。用户仅作参考，并请自行核实相关内容。<span
        @click="loadHandler('0','animated bounceIn')">查看详情</span></p>
    </div>
    <div class="g-fot-btn" @click="loadHandler('0','animated bounceIn')">申请楼盘质量监控服务</div>
    <div class='footDiv'>
      <img :src='footImg'>
      <span>下载APP  查看更多楼盘质量数据</span>
    </div>
    <div class='buttonClass'>
      <el-button v-on:click.prevent="loadHandler('0','animated bounceIn')">立即下载鹰眼鉴房</el-button>
    </div>

  </div>
</template>
<script>
  import slider from 'vue-concise-slider'// 引入slider组件
  import {mapState, mapMutations} from 'vuex'
  import Obshare from '../../common/js/obshare'
  import vueWaterfallEasy from 'vue-waterfall-easy'
  export default {
    data(){
      return {
        imgsArr: [],
        fetchImgsArr: [],
        isShows: false,
        footImg: this.$url.obShareOnloadLogoImg,
        vr_arr: [],
        img: [],
        ampCenter: [],
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
      vueWaterfallEasy
    },
    computed: {
//      ...mapState({
//        apap_icon_num: 'apap_icon_num'
//      }),
    },
    methods: {
      ...mapMutations({
        set_motai: 'set_motai',
        set_school_class: 'set_school_class',
        change_motai: 'change_motai',
        set_dat_com: 'set_dat_com',
        set_data_comment: 'set_data_comment'
      }),
      loadHandler(num, className){
        if (Obshare.is_Weixin() || Obshare.is_WeiBo()) {
          this.set_motai('1');
          this.set_school_class(className);
          this.change_motai();
        } else {
          if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i) && navigator.userAgent.toLowerCase().match(/QQ/i) == "qq") {
            this.set_motai('1');
            this.set_school_class(className);
            this.change_motai();
          } else {
            this.set_motai('0');
            this.set_school_class(className);
            this.change_motai();
            this.set_dat_com('0');
            this.set_data_comment({
              propertyId: this.$route.params.id,
            });
          }
        }
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
          let vrList = this_.abShareData.peoperty.vrData;
          this_.vr_arr = vrList;
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
          this_.isShows = true;
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
      },
      initImgsArr(n, m) { //num 图片数量
        var arr = [];
        for (var i = n; i < m; i++) {
          arr.push({
            src: 'http://img2.imgtn.bdimg.com/it/u=2239146502,165013516&fm=27&gp=0.jpg',
            link: 'javascript:void(0);',
            info: '一些图片描述文字'
          })
        }
        return arr
      },
      fetchImgsData() {
        this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)
      }
    },
    created(){
      this.imgsArr = this.initImgsArr(0, 10);
      this.fetchImgsArr = this.initImgsArr(10, 20) // 模拟每次请求的新的图片的数据数据
    },
    mounted(){
      window.localStorage.is = true;
//      this.active_icon_num = this.apap_icon_num;
      this.get_http();
    },
  }
</script>

<style scoped>

  .obShare {
    width: 7.5rem;
    background: #ebebeb;
    padding-bottom: 0.6rem;
    margin: auto;
    position: relative;
  }

  .vr_back {
    width: 7.5rem;
    height: 6.5rem;
    background-size: cover;
  }

  .vr {
    width: 7.5rem;
    height: 6.5rem;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .vr_btn {
    position: absolute;
    bottom: 0.95rem;
    display: flex;
    right: 0;
    width: 1.46rem;
    height: 0.6rem;
    text-align: center;
    font-size: 0.28rem;
    color: #FFFFFF;
    background: rgba(0, 0, 0, 0.6);
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
  }

  .vr_btn div {
    margin: auto;
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
  }

  .vr_btn p {
    margin: auto;
  }

  .vr_list {
    width: 7.5rem;
    height: 0.75rem;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 0;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    /*padding-top: 0.1rem;*/
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
    color: #fff;
    line-height: 0.24rem;
    margin: auto;
  }

  .vr_icon span {
    width: 0.24rem;
    height: 0.24rem;
    background-size: cover;
    display: inline-block;
  }

  .titleDiv {
    width: 7.5rem;
    background: #FFFFFF;
    border-radius: 2px;
    position: relative;
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

  .titleDiv {
    padding-bottom: 0.2rem;
    margin-bottom: 0.2rem;
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
    margin: 0.3rem 0 0.3rem 0;
    padding-left: 0.4rem;
  }

  .ps {
    padding-left: 0.4rem;
    padding-right: 0.3rem;
    margin: 0.3rem auto 0.2rem;
  }

  .titleDiv p:nth-child(3) span {
    display: inline-block;
    background: #ffffff;
    border: 2px solid #63B1FF;
    font-family: '.PingFangSC-Semibold';
    font-size: 0.2rem;
    color: #63B1FF;
    line-height: 0.4rem;
    width: 1.12rem;
    height: 0.4rem;
    margin-right: 0.1rem;
    text-align: center;
  }

  .ps img {
    width: 0.32rem;
    height: 0.32rem;
  }

  .ps span {
    display: inline-block;
    width: 5.7rem;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #42464D;
    line-height: 0.28rem;
  }

  .queryClass {
    margin-top: 0.2rem;
    width: 7.5rem;
    height: 2.97rem;
    background: #FFFFFF;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    position: relative;
  }

  .queryClass ::-webkit-scrollbar {
    display: none;
  }

  .sweiper_class {
    background: #FFFFFF;
    border-radius: 0.08rem;
    display: flex;
    display: -webkit-box;
    justify-content: center;
    position: absolute;
    padding-right: 0.15rem;
  }

  .swiper_icon {
    width: 3.3rem;
    height: 1.55rem;
    border-radius: 0.05rem;
    margin: 0.2rem 0 0 0.15rem;
    position: relative;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position-y: -1.44rem;
  }

  .swiper_icon p {
    font-family: PingFangSC-Regular, "微软雅黑";
    font-size: 0.28rem;
    color: #FFFFFF;
    line-height: 0.28rem;
    text-align: center;
    margin: 0.5rem 0 0.2rem 0;
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

  .progress_title {
    width: 6.9rem;
    height: 0.8rem;
    padding-left: 0.3rem;
    font-family: PingFangSC-Medium, "微软雅黑";
    font-size: 0.32rem;
    color: #212832;
    line-height: 0.8rem;
    font-weight: 600;
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

  .g-montoring {
    margin-bottom: 0.2rem;
    background: #fff;
  }

  .g-montoring-num {
    padding-left: 0.3rem;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #212832;
    line-height: 0.28rem;
  }

  .g-montoring-yes {
    display: flex;
    margin: 0.3rem auto;
    width: 6.9rem;
    height: 1.46rem;
    background: #FFFFFF;
    box-shadow: 0 0 15px 0 rgba(169, 183, 197, 0.35);
  }

  .g-montoring-span {
    width: 100%;
    line-height: 0.6rem;
    display: flex;
    justify-content: space-around;
  }

  .g-montoring-span div {
    width: 2.6rem;
    display: flex;
    justify-content: center;
  }

  .g-montoring-span span {
    margin: auto;
  }

  .g-mes {
    margin-top: 0.2rem;
    padding: 0 0.3rem 0.4rem 0;
    background: #fff;
  }

  .g-mes-li {
    display: flex;
    justify-content: space-between;
    padding-left: 0.3rem;
    line-height: 0.5rem;
  }

  .g-mes-li span:nth-child(1) {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #8B949E;
  }

  .g-mes-li span:nth-child(2) {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #212832;
  }

  .look-all {
    margin: auto;
    margin-right: 0;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #8B949E;
    line-height: 0.28rem;
  }

  .g-fot {
    padding: 0.2rem 0.3rem 0.3rem 0.3rem;
    font-family: PingFangSC-Regular;
    font-size: 0.2rem;
    color: #B9C0C8;
    letter-spacing: 0.9px;
    line-height: 0.2rem;
  }

  .g-fot p {
    line-height: 0.3rem;
  }

  .g-fot i {
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 0.2rem;
    background: #B9C0C8;
    color: #fff;
    text-align: center;
    line-height: 0.2rem;
    margin-right: 0.1rem;
  }

  .g-fot span {
    font-family: PingFangSC-Regular;
    font-size: 0.2rem;
    color: #0080FF;
    letter-spacing: 0.9px;
    line-height: 0.2rem;
  }

  .g-fot-btn {
    margin-bottom: 0.4rem;
    width: 7.5rem;
    height: 0.88rem;
    background: #0080FF;
    text-align: center;
    line-height: 0.88rem;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #FFFFFF;
  }

  .g-dynamic {
    padding-bottom: 0.3rem;
    margin-top: 0.2rem;
    background: #fff;
  }

  .g-dynamic-lis {
    margin-left: 0.3rem;
    padding-left: 0.3rem;
    border-left: 2px solid #63B1FF;
  }

  .g-dynamic-li {
    padding-left: 0.3rem;
    position: relative;
    margin-bottom: 0.2rem;
    width: 6.58rem;
    background: #FFFFFF;
    box-shadow: 0 0 11px -1px rgba(99, 130, 172, 0.33);
    border-radius: 4px;
  }

  .g-dynamic-li p:nth-child(1) {
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #2E97FF;
    line-height: 0.4rem;
  }

  .g-dynamic-li p:nth-child(2) {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #4D535D;
    line-height: 0.4rem;
  }

  .g-dynamic-li p:nth-child(3) {
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #8B949E;
    line-height: 0.4rem;
  }

  .g-dynamic-li p:nth-child(1):before {
    content: "";
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    background: #0C8CFF;
    border-radius: 0.2rem;
    position: absolute;
    left: -0.41rem;
    top: 0.05rem;
    z-index: 99;
  }

  .g-dynamic-li p:nth-child(1):after {
    content: "";
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    background: #fff;
    border-radius: 0.3rem;
    position: absolute;
    left: -0.46rem;
  }

  .g-dynamic-li-be:before {
    content: "";
    display: inline-block;
    width: 0.05rem;
    height: 100%;
    background: #fff;
    border-radius: 0.3rem;
    position: absolute;
    left: -0.34rem;
    bottom: 0;
  }

  .g-light-seek {
    position: relative;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    background: #fff;
  }

  .g-light-seek-use-img {
    margin: auto;
    margin-left: 0;
    margin-right: 0.2rem;
    display: inline-block;
    width: 0.32rem;
    height: 0.32rem;
    background: red;
    border-radius: 0.32rem;
    overflow: hidden;
  }

  .g-light-seek-use-img img {
    width: 100%;
  }

  .g-light-seek-use {
    display: flex;
    margin-top: 0.24rem;
    padding-bottom: 0.3rem;
  }

  .g-light-seek-lis p {
    margin-top: 0.2rem;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #212832;
    line-height: 0.28rem;
  }

  .g-light-seek-use-name {
    margin: auto;
    margin-right: 0.72rem;
  }

  .g-light-seek-use-num, .g-light-seek-use-name {
    margin: auto;
    margin-left: 0;
    font-size: 0.24rem;
    color: #8B949E;
    line-height: 0.24rem;
  }

  .g-light-seek-fot {
    width: 100%;
    float: left;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
  }

  .g-light-seek-fot-btn {
    margin: auto;
    width: 4.8rem;
    height: 0.88rem;
    text-align: center;
    line-height: 0.88rem;
    border: 2px solid #0080FF;
    border-radius: 1rem;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #0080FF;
  }
</style>
<style>
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

  .img-box {
    position: static !important;
  }

  .img-wraper {
    width: 3.3rem !important;
    background: #fff !important;
  }

  .vue-waterfall-easy {
    clear: both;
    float: left;
  }

  .img-inner-box {
    box-shadow: none !important;
  }
</style>
