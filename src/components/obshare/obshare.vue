<template>
      <div class='obShare' v-if='isShows'>

            <div>
                  <slider style="width:7.5rem;height:6.5rem" :pages="pages" :sliderinit="sliderinit"
                          v-if="this.abShareData.property.vrData.vrKindList.length == 0"></slider>
                  <div class="vr_back" :style="'background-image:url('+this.abShareData.property.vrData.imageUrl+')'"
                       v-if="this.abShareData.property.vrData.vrKindList.length > 0"></div>
                  <div class="vr" v-if="this.abShareData.property.vrData.vrKindList.length > 0">
                        <!--v-on:click.prevent="vr_href_all"-->
                        <div class="vr_btn" v-on:click.prevent="loadHandler('0','animated bounceIn')">
                              <div>
                                    <img style="width: 100%;height: 100%;"
                                         src="/static/obshare/housingesta_icon_quanjing@2x.png" alt=""></div>
                              <p>全景</p>
                        </div>
                        <div class="vr_list">
                              <div class="vr_overflow clearfix">
                                    <div class="vr_icon"
                                         v-for="(val,index) in this.abShareData.property.vrData.vrKindList"
                                         v-on:click.prevent="loadHandler('0','animated bounceIn')"
                                         v-if="val.kindType !== '0' ">
                                          <!--v-on:click.prevent="vr_list(index,val)"-->
                                          <span :style="'background-image:url('+(val.iconUrl)+')'"></span>
                                          <p>{{val.kindName}}</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>

            <div class='titleDiv'>
                  <p>
                        <span>{{abShareData.property.propertyName}}</span>
                  </p>
                  <p></p>
                  <p>
                        <span v-for='(key,index) in abShareData.property.propertyNatureList'
                              :key="index">{{key.propertyNature}}</span>
                  </p>
                  <p class='ps' v-on:click.prevent="loadHandler('0','animated bounceIn')">
                        <span>{{abShareData.property.developersName ? '预计交房时间：' + abShareData.property.developersName : '预计交房时间：' + '暂无'}}</span>
                  </p>
                  <p class='ps' v-on:click.prevent="loadHandler('0','animated bounceIn')">
                        <span>{{'地址信息：' + abShareData.property.propertyAddress}}</span>
                        <img :src='this.$url.right_icon'
                             style="float:right;width:0.12rem;height:0.22rem;margin-top: 0.054rem"></p>
            </div>
            <!--工程进度-->
            <div class="g-worksProgramme g-montoring" v-if="abShareData.qualityMonitor.status == '1'">
                  <p class="progress_title">工程进度</p>
                  <Steps :stepsList="abShareData.propertyProgressList"/>
            </div>
            <!--业主圈-->
            <div class="g-worksProgramme g-montoring" v-if="abShareData.qualityMonitor.status == '1'">
                  <p class="progress_title">业主圈</p>
                  <div class="authorCircle displayFlex flexJustifybetween flexAlignItemsCenter">
                        <p class="hotChat">
                              <code>{{abShareData.chatRoomData.chatCount}}</code>
                              名业主正在热聊楼盘质量
                        </p>
                        <div class="authorImg" style="height:0.48rem;margin-right:-1.12rem;"
                             v-on:click.prevent="loadHandler('0','animated bounceIn')">
                              <span v-for="(val,index) in abShareData.chatRoomData.avatarList" :key="index"
                                    :style="'background:url(' + val.avatarUrl + ');background-size:cover'"></span>
                        </div>
                        <div style="width:0.12rem" v-on:click.prevent="loadHandler('0','animated bounceIn')">
                              <img :src='this.$url.right_icon'>
                        </div>
                  </div>
            </div>
            <div class="g-montoring">
                  <p class="progress_title">质量监控</p>
                  <!-- <p class="g-montoring-num" v-if="abShareData.qualityMonitor.status == '1'">
                        <span>已服务业主
                              <span style="color:#FE751B">{{abShareData.qualityMonitor.propertyOwnerCount}}</span>名</span>
                        <span>已更新报告
                              <span style="color:#FE751B">{{abShareData.qualityMonitor.reportCount}}</span>期</span>
                  </p> -->
                  <div class="g-montoring-num2 clearfix" v-if="abShareData.qualityMonitor.status == '1'">
                        <p>
                              <i>{{abShareData.qualityMonitor.propertyOwnerCount}}</i> 名业主正在监控工程进度</p>
                        <div class="clearfix" @click="loadHandler('0','animated bounceIn')">
                              <span style="background:#0080FF;color:#fff">申请服务</span>
                        </div>
                  </div>
                  <div class="g-montoring-num2 clearfix" v-else>
                        <p>
                              <i>{{abShareData.qualityMonitor.appointmentCount}}</i>名业主预约开通质量监控</p>
                        <div class="clearfix" v-on:click.prevent="loadHandler('0','animated bounceIn')">
                              <span>免费预约</span>
                        </div>
                  </div>
                  <div class="g-montoring-num2-list" v-if="abShareData.qualityMonitor.status == '1'">
                        <ul class="displayFlex flexNoWrap">
                              <li class="displayFlex flexAlignJustifyCenter flexAlignItemsCenter"
                                  @click="loadHandler('0','animated bounceIn')"
                                  v-for="(val,index) in abShareData.qualityMonitor.publishList" :key="index">
                                    <span class="houseNumber">{{val.publishName}}</span>
                                    <div style="margin-left:0.3rem">
                                          <p>
                                                <code class="houseStage">{{val.stage}}</code>阶段
                                          </p>
                                          <p>
                                                已更新
                                                <code class="loadNumber">{{val.reportCount}}</code>期监控报告
                                          </p>
                                    </div>
                              </li>
                        </ul>
                  </div>
                  <div class="g-montoring-yes" v-else>
                        <div style="margin: auto;width: 100%">
                              <div class="g-montoring-span">
                                    <div>
                                          <span style="width: 0.3rem;">
                                                <img style="width: 100%;"
                                                     src="/static/obshare/housingesta_icon_duigou@2x.png" alt=""></span>
                                          <span>{{abShareData.qualityMonitor.tips1}}</span>
                                    </div>
                                    <div>
                                          <span style="width: 0.3rem;">
                                                <img style="width: 100%;"
                                                     src="/static/obshare/housingesta_icon_duigou@2x.png" alt=""></span>
                                          <span>{{abShareData.qualityMonitor.tips2}}</span>
                                    </div>
                              </div>
                              <div class="g-montoring-span">
                                    <div>
                                          <span style="width: 0.3rem;">
                                                <img style="width: 100%;"
                                                     src="/static/obshare/housingesta_icon_duigou@2x.png" alt=""></span>
                                          <span>{{abShareData.qualityMonitor.tips3}}</span>
                                    </div>
                                    <div>
                                          <span style="width: 0.3rem;">
                                                <img style="width: 100%;"
                                                     src="/static/obshare/housingesta_icon_duigou@2x.png" alt=""></span>
                                          <span>{{abShareData.qualityMonitor.tips4}}</span>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <p class='ps' style="padding-bottom: 0.3rem"
                     v-on:click.prevent="loadHandler('0','animated bounceIn')">
                        <span>使用楼盘质量监控服务享受更多特权</span>
                        <img :src='this.$url.right_icon'
                             style="float:right;width:0.12rem;height:0.22rem;margin-top: 0.054rem"></p>
            </div>
            <div class="g-light-seek clearfix">
                  <div class="g-light-seek-tit displayFlex flexJustifybetween" style="padding-left: 0">
                        <span>质量寻光</span>
                        <span class="displayFlex flexJustifybetween flexAlignItemsCenter">
                              <i class="lookAll" @click="loadHandler('0','animated bounceIn')">查看全部</i>
                              <i><img :src='this.$url.right_icon' style="float:right;width:0.12rem;height:0.22rem"></i>
                        </span>
                  </div>
                  <div class="g-light-seek-but clearfix " v-if="photos1.length==0">
                        <div class="g-light-seek-but-img" v-on:click.prevent="loadHandler('0','animated bounceIn')">
                              <img style="width: 100%;" src="/static/obshare/img_loupanxiangqing_taikongren.png" alt="">
                        </div>
                        <div class="g-light-seek-but-hr">
                              <p>发现了一块质量的荒原！</p>
                              <p>快来成为这个楼盘第一个贡献者</p>
                              <span v-on:click.prevent="loadHandler('0','animated bounceIn')">我要贡献</span>
                        </div>
                  </div>
                  <div v-else>
                        <div class="op clearfix">
                              <ul ref="op1" class="op1">
                                    <li v-for="(val,index) in photos1" :key="index">
                                          <p class="op1_time">{{val.publishDate}}</p>
                                          <div class="op1_div"
                                               v-on:click.prevent="loadHandler('0','animated bounceIn')">
                                                <div class="u-video-btn" v-if="val.isVideo == 1">
                                                      <img style="width: 100%;" src="/static/icon_zanting_n@3x.png"
                                                           alt=""></div>
                                                <img :src="val.src" alt=""></div>
                                          <div class="player_info">
                                                <p>{{val.title}}</p>
                                                <div class="g-light-seek-use">
                                                      <span class="g-light-seek-use-img">
                                                            <img :src="val.avatar ? val.avatar:de_use_img"
                                                                 alt=""></span>
                                                      <span class="g-light-seek-use-name">{{val.userName}}</span>
                                                      <span class="g-light-seek-use-num" style="margin-right: 0.15rem">
                                                            <span style="width:0.24rem;height: 0.22rem;display: inline-block;margin-right: 0.1rem">
                                                                  <img style="width: 100%;"
                                                                       src="/static/xunguang_icon_pinglun_n@3x.png"
                                                                       alt=""
                                                                       v-on:click.prevent="loadHandler('0','animated bounceIn')"></span>{{val.commentCount}}</span>
                                                </div>
                                          </div>
                                    </li>
                              </ul>
                              <ul ref="op2" class="op2">
                                    <li v-for="(val,index) in photos2" :key="index">
                                          <p class="op1_time">{{val.publishDate}}</p>
                                          <div class="op1_div"
                                               v-on:click.prevent="loadHandler('0','animated bounceIn')">
                                                <div class="u-video-btn" v-if="val.isVideo == 1">
                                                      <img style="width: 100%;" src="/static/icon_zanting_n@3x.png"
                                                           alt=""></div>
                                                <img :src="val.src" alt=""></div>
                                          <div class="player_info">
                                                <p>{{val.title}}</p>
                                                <div class="g-light-seek-use">
                                                      <span class="g-light-seek-use-img">
                                                            <img :src="val.avatar? val.avatar:de_use_img" alt=""></span>
                                                      <span class="g-light-seek-use-name">{{val.userName}}</span>
                                                      <span class="g-light-seek-use-num" style="margin-right: 0.15rem">
                                                            <span style="width:0.24rem;height: 0.22rem;display: inline-block;margin-right: 0.1rem">
                                                                  <img style="width: 100%;"
                                                                       src="/static/xunguang_icon_pinglun_n@3x.png"
                                                                       alt=""
                                                                       v-on:click.prevent="loadHandler('0','animated bounceIn')"></span>{{val.commentCount}}</span>
                                                </div>
                                          </div>
                                    </li>
                              </ul>

                        </div>
                  </div>
            </div>
            <div class='queryClass' v-if="this.abShareData.propertyReport.reportList.length !=0">
                  <p class="progress_title">楼盘质量简报</p>
                  <div class="query_cla">
                        <div class="sweiper_class">
                              <div class="swiper_icon" v-for="index in this.abShareData.propertyReport.reportList"
                                   @click="loadHandler('0','animated bounceIn')">
                                    <div>
                                          <img style="width: 100%;" :src="index.reportImageUrl" alt=""></div>
                                    <p>{{index.reportName}}</p>
                                    <span>查看报告</span>
                              </div>
                        </div>
                  </div>
            </div>
            <div class="g-mes">
                  <p style="display: flex;justify-content: space-between" class="progress_title">
                        <span>楼盘信息</span>
                        <span class="look-all" @click="loadHandler('0','animated bounceIn')">查看全部></span>
                  </p>
                  <p class="g-mes-li" v-for='val in abShareData.propertyInfo.propertyInfoList'>
                        <span>{{val.title}}</span>
                        <span>{{val.content}}</span>
                  </p>
            </div>
            <div class="g-dynamic">
                  <p style="display: flex;justify-content: space-between" class="progress_title">
                        <span>楼盘动态</span>
                        <span class="look-all" @click="loadHandler('0','animated bounceIn')">查看全部></span>
                  </p>
                  <div class="g-dynamic-lis">
                        <div :class="[li]" v-for="(val,index) in abShareData.propertyMotion.motionList">
                              <p>
                                    <i></i>{{val.date}}</p>
                              <p>
                                    <i></i>{{val.title}}</p>
                              <p>
                                    <i></i>{{val.content}}</p>
                        </div>
                  </div>
            </div>
            <div class="g-fot">
                  <p>
                        <i>!</i>免责声明：质量寻光计划的图片、视频或文字仅由作者本人提供，与鹰眼鉴房无关。用户仅作参考，并请自行核实相关内容。
                        <span @click="loadHandler('0','animated bounceIn')">查看详情</span>
                  </p>
            </div>
            <!-- <div class="g-fot-btn" @click="loadHandler('0','animated bounceIn')">申请楼盘质量监控服务</div> -->
            <div class='footDiv'>
                  <img :src='footImg'>
                  <span>下载APP 查看更多楼盘质量数据</span>
            </div>
            <div class='buttonClass'>
                  <el-button v-on:click.prevent="loadHandler('0','animated bounceIn')">立即下载鹰眼鉴房</el-button>
            </div>

      </div>
</template>
<script>
      import slider from "vue-concise-slider"; // 引入slider组件
      import {mapState, mapMutations} from "vuex";
      import Obshare from "../../common/js/obshare";
      import Steps from "../common/steps";
      import qs from "qs";
      //  import vueWaterfallEasy from 'vue-waterfall-easy'
      export default {
            data() {
                  return {
                        isShows: false,
                        de_use_img: "/static/comment/touxiang_mig@2x.png",
                        photos1: [],
                        photos2: [],
                        li: "g-dynamic-li",
                        footImg: this.$url.obShareOnloadLogoImg,
                        vr_arr: [],
                        img: [],
                        ampCenter: [],
                        abShareData: {
                              property: {
                                    propertyName: "",
                                    vrData: {}
                              },
                              qulity: {
                                    gradeList: [],
                                    buidProgress: "",
                                    rankList: []
                              },
                              houseType: {},
                              peoperty: {}
                        },
                        pages: [],
                        //滑动配置[obj]
                        sliderinit: {
                              currentPage: 0, //当前页码
                              thresholdDistance: 100, //滑动判定距离
                              thresholdTime: 1000, //滑动判定时间
                              autoplay: 3000, //自动滚动[ms]
                              loop: true, //循环滚动
                              infinite: 1, //无限滚动前后遍历数
                              slidesToScroll: 1 //每次滑动项数
                        }
                  };
            },

            components: {
                  slider,
                  Steps
            },
            computed: {
                  //      ...mapState({        apap_icon_num: 'apap_icon_num'      }),
            },
            methods: {
                  ...mapMutations({
                        set_motai: "set_motai",
                        set_school_class: "set_school_class",
                        change_motai: "change_motai",
                        set_dat_com: "set_dat_com",
                        set_data_comment: "set_data_comment"
                  }),

                  loadHandler(num, className) {
                        if (Obshare.locaGet("regis") === false) {
                              this.$router.push({
                                    path: "/register",
                                    query: {
                                          userId: this.$route.query.userId ? this.$route.query.userId : "",
                                          path: this.$router.currentRoute.path
                                    }
                              });
                        } else {
                              window.location = this.$url.appDown;
                              //          if (Obshare.is_Weixin() || Obshare.is_WeiBo()) {
                              // this.set_motai('1');            this.set_school_class(className);
                              // this.change_motai();          } else {            this.set_motai('0');
                              //     this.set_school_class(className);            this.change_motai();
                              //    this.set_dat_com('0');            this.set_data_comment({
                              // propertyId: this.$route.params.id,            });          }
                        }
                  },
                  des(str) {
                        var timestamp = this.$setDAesString(
                              new Date().getTime().toString(),
                              "yhgt!d%sd*aw%dSDSFSsa#mng~dsq"
                        ).slice(0, 20);
                        var data = this.$setDAesString(str, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq");
                        var tata = data.slice(0, 10);
                        var tata1 = data.slice(10, data.length);
                        var data1 = tata + timestamp + tata1;
                        return data1;
                  },
                  get_http() {
                        let this_ = this;
                        let buiding = "buiding/buidingSurver1_5_1";
                        let id = this.$route.params.id;
                        // let ids = this.$route.params.ids;
                        let base = "yhgt!d%sd*aw%dSDSFSsa#mng~dsq";
                        let op1_H = "";
                        let op2_H = "";
                        let url = this.$url.httpRequestse + buiding;
                        let d = {
                              platform: "1",
                              token: "",
                              uniqueId: "",
                              requestTime: "",
                              versionName: "",
                              systemVersion: "",
                              phoneBand: "",
                              body: {
                                    propertyId: id
                              }
                        };
                        let datas = null;
                        datas = qs.stringify({d: this.des(JSON.stringify(d))});
                        this.$Axios
                              .post(url, datas)
                              .then(res => {
                                    this_.abShareData = JSON.parse(
                                          this_.$getDAesString(res, base)
                                    ).response.data;
                                    let m = this_.abShareData.contribution.contributionWaterfallList;
                                    //配置轮播图数据
                                    if (this_.abShareData.property.bannerList) {
                                          let len = this_.abShareData.property.bannerList.length;
                                          for (let b = 0; b < len; b++) {
                                                let obj = new Object({
                                                      style: {
                                                            background: ""
                                                      }
                                                });
                                                obj.style.background =
                                                      "url(" +
                                                      this_.abShareData.property.bannerList[b].bannerImageUrl +
                                                      ")";
                                                this_.pages.push(obj);
                                                continue;
                                          }
                                    }
                                    //创建瀑布流效果
                                    if (m.length !== 0) {
                                          setTimeout(() => {
                                                let this_ = this;
                                                this.imgsArr = this.initImgsArr(m);
                                                let img = document.createElement("img");
                                                img.src = this.imgsArr[0].src;
                                                img.style.display = "none";
                                                img.onload = function () {
                                                      this_.photos1.push(this_.imgsArr[0]);
                                                      for (let i = 1; i < this_.imgsArr.length; i++) {
                                                            let img = document.createElement("img");
                                                            img.src = this_.imgsArr[i].src;
                                                            img.style.display = "none";
                                                            img.onload = () => {
                                                                  op1_H = this_.$refs.op1.offsetHeight;
                                                                  op2_H = this_.$refs.op2.offsetHeight;
                                                                  if (!op1_H || !op2_H) {
                                                                        op1_H = this_.$refs.op1.offsetHeight;
                                                                        op2_H = this_.$refs.op2.offsetHeight;
                                                                  }
                                                                  if (op1_H < op2_H) {
                                                                        this_.photos1.push(this_.imgsArr[i]);
                                                                  } else {
                                                                        this_.photos2.push(this_.imgsArr[i]);
                                                                  }
                                                            };
                                                      }
                                                };
                                          }, 0);
                                    }

                                    this_.isShows = true;
                              })
                              .catch(function (err) {
                                    console.log(err);
                              });
                  },
                  // 跳转全景      vr_href_all(){        let id = this.$route.params.id;
                  // this.$router.push({          path: '/ifrem/' + id,          query: {
                  //   url: this.vr_arr,            index: '0'          }        });      }, 跳转全景
                  //     vr_list(index, val){        let id = this.$route.params.id;
                  // this.$router.push({          path: '/ifrem/' + id,          query: {
                  //   url: this.vr_arr,            index          }        });      },
                  initImgsArr(m) {
                        //num 图片数量
                        let arr = [];
                        for (var i = 0; i < m.length; i++) {
                              arr.push({
                                    src: m[i].picUrl,
                                    link: "javascript:void(0);",
                                    info: m[i].title,
                                    avatar: m[i].avatar,
                                    userName: m[i].userName,
                                    commentCount: m[i].commentCount,
                                    height: m[i].height,
                                    isVideo: m[i].isVideo,
                                    publishDate: m[i].publishDate
                              });
                        }
                        return arr;
                  }
            },
            created() {
                  this.get_http();
                  //      window.localStorage.is = true; //      this.active_icon_num =
                  // this.apap_icon_num;
            }
      };
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
            color: #ffffff;
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
      }

      .vr_overflow {
            white-space: nowrap;
            height: 0.75rem;
      }

      .vr_icon {
            display: inline-block;
            text-align: center;
            font-family: PingFangSC-Regular;
            font-size: 0.2rem;
            color: #fff;
            line-height: 0.24rem;
            margin-top: 0.14rem;
            margin-left: 0.3rem;
            margin-right: 0.3rem;
      }

      .vr_icon span {
            width: 0.24rem;
            height: 0.24rem;
            background-size: cover;
            display: inline-block;
      }

      .titleDiv {
            width: 7.5rem;
            background: #ffffff;
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
            color: #42464d;
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
            background: #ff6e3a;
            line-height: 0.32rem;
            font-family: ".PingFangSC-Semibold";
            font-size: 0.2rem;
            color: #ffffff;
            text-align: center;
            display: inline-block;
      }

      .titleDiv p:nth-child(2) span {
            font-family: PingFangSC-Medium;
            font-size: 0.32rem;
            color: #ff6e3a;
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
            margin: 0.3rem 0;
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
            border: 2px solid #63b1ff;
            font-family: ".PingFangSC-Semibold";
            font-size: 0.2rem;
            color: #63b1ff;
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
            color: #42464d;
            line-height: 0.28rem;
      }

      .query_cla {
            overflow-x: scroll;
            -webkit-overflow-scrolling: touch;
            position: relative;
      }

      .queryClass {
            margin-top: 0.2rem;
            width: 7.5rem;
            background: #ffffff;
      }

      .query_cla::-webkit-scrollbar {
            display: none;
      }

      .sweiper_class {
            background: #ffffff;
            border-radius: 0.08rem;
            display: flex;
            display: -webkit-box;
            justify-content: center;
            /*position: absolute;*/
            padding-right: 0.15rem;
      }

      .swiper_icon {
            width: 3.3rem;
            /*height: 1.55rem;*/
            border-radius: 0.05rem;
            margin: 0.2rem 0 0 0.15rem;
            position: relative;
      }

      .swiper_icon p {
            position: absolute;
            top: 0.5rem;
            width: 100%;
            font-family: PingFangSC-Regular, "微软雅黑";
            font-size: 0.28rem;
            color: #ffffff;
            line-height: 0.28rem;
            text-align: center;
      }

      .swiper_icon span {
            position: absolute;
            top: 1rem;
            left: 50%;
            margin-left: -0.6rem;
            width: 1.2rem;
            height: 0.3rem;
            font-family: PingFangSC-Regular, "微软雅黑";
            font-size: 0.2rem;
            color: #ffffff;
            line-height: 0.3rem;
            text-align: center;
            border: 0.01rem solid rgba(255, 255, 255, 0.66);
            border-radius: 1rem;
            display: block;
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
            background: #ffffff;
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
            color: #42464d;
            line-height: 0.28rem;
            margin: 0.2rem auto;
      }

      .buttonClass {
            width: 7.1rem;
            text-align: center;
            margin: 0.4rem auto;
      }

      .buttonClass button {
            width: 6.3rem;
            height: 0.86rem;
            background: #575757;
            border-radius: 2rem;
            font-family: MicrosoftYaHei;
            font-size: 0.28rem;
            color: #ffffff;
      }

      .g-worksProgramme {
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

      .g-montoring-num2 {
            padding-left: 0.3rem;
            padding-right: 0.3rem;
      }

      .g-montoring-num2 p {
            float: left;
            font-family: PingFangSC-Medium;
            font-size: 0.28rem;
            line-height: 0.64rem;
            text-align: left;
      }

      .g-montoring-num2 p {
            color: #42464d;
      }

      .g-montoring-num2 i {
            color: #fe751b;
            text-align: center;
            font-family: PingFangSC-Medium;
            font-size: 0.28rem;
      }

      .g-montoring-num2 span {
            float: right;
            display: block;
            width: 2rem;
            height: 0.64rem;
            text-align: center;
            line-height: 0.62rem;
            border: 2px solid #0080ff;
            border-radius: 4px;
            font-family: PingFangSC-Regular;
            font-size: 0.28rem;
            color: #0080ff;
            box-sizing: border-box;
      }

      .g-montoring-num2-list {
            width: 100%;
            overflow-x: scroll;
            -webkit-overflow-scrolling: touch;
            position: relative;
            margin-top: 0.2rem;
            font-family: PingFangSC-Regular;
            font-size: 0.24rem;
            color: #212832;
            text-align: center;
            line-height: 0.24rem;
      }

      .g-montoring-num2-list p {
            text-align: left;
      }

      .g-montoring-num2-list p:nth-child(2) {
            margin-top: 0.2rem;
      }

      .houseNumber {
            font-size: 0.24rem;
            color: #212832;
            text-align: center;
            line-height: 0.28rem;
            font-weight: 500;
      }

      .houseStage {
            color: #0080ff;
      }

      .loadNumber {
            color: #fe751b;
      }

      .g-montoring-num2-list ul {
            padding-left: 0.3rem;
            padding-right: 0.3rem;
      }

      .g-montoring-num2-list ul li {
            margin: 0.3rem 0.1rem;
            width: 4.16rem;
            height: 1.28rem;
            background: red;
            box-flex: auto 0 0;
            -webkit-box-flex: auto 0 0;
            -moz-box-flex: auto 0 0;
            flex: auto 0 0;
            -webkit-flex: auto 0 0;
            background: #ffffff;
            box-shadow: 0 0 0.15rem 0 rgba(169, 183, 197, 0.35);
            border-radius: 4px;
      }

      .g-montoring-yes {
            display: flex;
            margin: 0.3rem auto;
            width: 6.9rem;
            height: 1.46rem;
            background: #ffffff;
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
            color: #8b949e;
      }

      .g-mes-li span:nth-child(2) {
            display: inline-block;
            width: 5.5rem;
            font-family: PingFangSC-Regular;
            font-size: 0.28rem;
            color: #212832;
            text-align: right;
      }

      .look-all {
            margin: auto 0 auto auto;
            font-family: PingFangSC-Regular;
            font-size: 0.24rem;
            color: #8b949e;
            line-height: 0.28rem;
      }

      .g-fot {
            padding: 0.2rem 0.3rem 0.3rem;
            font-family: PingFangSC-Regular;
            font-size: 0.2rem;
            color: #b9c0c8;
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
            background: #b9c0c8;
            color: #fff;
            text-align: center;
            line-height: 0.2rem;
            margin-right: 0.1rem;
      }

      .g-fot span {
            font-family: PingFangSC-Regular;
            font-size: 0.2rem;
            color: #0080ff;
            letter-spacing: 0.9px;
            line-height: 0.2rem;
      }

      .g-fot-btn {
            margin-bottom: 0.4rem;
            width: 7.5rem;
            height: 0.88rem;
            background: #0080ff;
            text-align: center;
            line-height: 0.88rem;
            font-family: PingFangSC-Regular;
            font-size: 0.32rem;
            color: #ffffff;
      }

      .g-dynamic {
            padding-bottom: 0.3rem;
            margin-top: 0.2rem;
            background: #fff;
      }

      .g-dynamic-lis {
            margin-left: 0.2rem;
            padding-left: 0.19rem;
            border-left: 2px solid #63b1ff;
      }

      .g-dynamic-li {
            padding-left: 0.3rem;
            position: relative;
            margin-bottom: 0.2rem;
            width: 6.58rem;
            background: #ffffff;
            box-shadow: 0 0 11px -1px rgba(99, 130, 172, 0.33);
            border-radius: 4px;
      }

      .g-dynamic-li p:nth-child(1) {
            font-family: PingFangSC-Regular;
            font-size: 0.24rem;
            color: #2e97ff;
            line-height: 0.4rem;
      }

      .g-dynamic-li p:nth-child(2) {
            font-family: PingFangSC-Regular;
            font-size: 0.28rem;
            color: #4d535d;
            line-height: 0.4rem;
      }

      .g-dynamic-li p:nth-child(3) {
            font-family: PingFangSC-Regular;
            font-size: 0.24rem;
            color: #8b949e;
            line-height: 0.4rem;
      }

      .g-dynamic-li p:nth-child(1) i {
            content: "";
            display: inline-block;
            width: 0.2rem;
            height: 0.2rem;
            background: #0c8cff;
            border-radius: 0.2rem;
            position: absolute;
            left: -0.305rem;
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
            left: -0.36rem;
      }

      .g-light-seek-tit span:nth-child(1) {
            font-family: PingFangSC-Medium, "微软雅黑";
            font-size: 0.32rem;
            color: #212832;
            line-height: 0.8rem;
            font-weight: 600;
      }

      .g-light-seek-tit span:nth-child(2) {
            font-family: PingFangSC-Regular;
            font-size: 0.24rem;
            color: #8b949e;
            text-align: right;
            line-height: 0.28rem;
      }

      .g-light-seek-tit .lookAll {
            display: inline-block;
            margin-right: 0.25rem;
      }

      .g-light-seek-but {
            width: 6rem;
            margin: auto;
            padding-bottom: 0.2rem;
            padding-top: 0.2rem;
      }

      .g-light-seek-but-hr {
            float: right;
      }

      .g-light-seek-but-img {
            float: left;
            width: 2.2rem;
            height: 1.67rem;
      }

      .g-light-seek-but-hr p:nth-child(1) {
            font-family: PingFangSC-Medium;
            font-size: 0.28rem;
            color: #4d535d;
            line-height: 0.28rem;
      }

      .g-light-seek-but-hr p:nth-child(2) {
            margin-top: 0.16rem;
            font-family: PingFangSC-Regular;
            font-size: 0.24rem;
            color: #7f8893;
            line-height: 0.28rem;
      }

      .g-light-seek-but-hr span {
            margin-top: 0.3rem;
            display: block;
            width: 2rem;
            height: 0.6rem;
            border: 2px solid #0080ff;
            border-radius: 4px;
            font-family: PingFangSC-Regular;
            font-size: 0.28rem;
            color: #0080ff;
            line-height: 0.6rem;
            text-align: center;
      }

      .g-light-seek {
            position: relative;
            padding-left: 0.3rem;
            padding-right: 0.3rem;
            background: #fff;
            margin: auto;
      }

      .g-light-seek-use-img {
            margin: auto 0.2rem auto 0;
            display: inline-block;
            width: 0.32rem;
            height: 0.32rem;
            border-radius: 0.32rem;
            overflow: hidden;
      }

      .g-light-seek-use-img img {
            width: 100%;
            height: 100%;
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
            margin: auto 0.72rem auto auto;
      }

      .g-light-seek-use-name,
      .g-light-seek-use-num {
            margin: auto auto auto 0;
            font-size: 0.24rem;
            color: #8b949e;
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
            border: 2px solid #0080ff;
            border-radius: 1rem;
            font-family: PingFangSC-Regular;
            font-size: 0.32rem;
            color: #0080ff;
      }

      .op1,
      .op2 {
            width: 3.3rem;
            float: left;
      }

      .op1 {
            margin-right: 0.15rem;
      }

      .op2 {
            margin-left: 0.15rem;
      }

      .op1_time {
            padding-bottom: 0.14rem;
            padding-left: 0.2rem;
            line-height: 0.24rem;
            font-family: PingFangSC-Regular;
            font-size: 0.24rem;
            color: #8b949e;
      }

      .op1 li,
      .op2 li {
            margin-top: 0.15rem;
      }

      .op1 img,
      .op2 img {
            width: 100%;
      }

      .op1_div {
            position: relative;
            box-shadow: 0 0 0.15rem 0 rgba(169, 183, 197, 0.35);
      }

      .u-video-btn {
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -0.2rem;
            margin-top: -0.2rem;
            width: 0.4rem;
            height: 0.4rem;
      }

      .authorCircle {
            padding: 0.3rem 0.3rem 0.4rem;
      }

      .authorImg span {
            display: inline-block;
            margin-left: 0.05rem;
            width: 0.48rem;
            height: 0.48rem;
            border-radius: 0.48rem;
            background-size: cover;
            background-repeat: no-repeat;
      }

      .hotChat {
            font-family: PingFangSC-Regular;
            font-size: 0.28rem;
            color: #212832;
            line-height: 0.28rem;
      }

      .hotChat code {
            color: #fe751b;
      }
</style>
<style>
      a:link {
            color: #42464d;
            text-decoration: none;
      }

      a:visited {
            color: #42464d;
            text-decoration: none;
      }

      a:hover {
            color: #42464d;
            text-decoration: none;
      }

      a:active {
            color: #42464d;
            text-decoration: none;
      }

      .img-wraper {
            width: 3.3rem !important;
            height: auto !important;
      }

      .img-wraper img {
            width: 100% !important;
      }
</style>
