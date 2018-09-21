<template>
          <div class="artifact">
                    <div class="g-dislog">
                              <transition name="el-fade-in-linear">
                                        <div class="transition-box sur_moban_" v-show="show" @touchmove.prevent @click="close"></div>
                              </transition>
                              <transition-group name="el-fade-in-linear">
                                        <div class="g-mo-body" v-show="show" key="0" v-if="cityMoban == '0'">
                                                  <div class="clearfix" style="border-bottom:1px solid #e7e7e7">
                                                            <div class="g-dislog-tit" v-show="show">您所在的城市</div>
                                                            <div class="g-city1-tit" @click="is_city_one=true;is_city_two=false" v-if="isCheckCity1">
                                                                      <span>{{one_val}}</span>
                                                            </div>
                                                            <div class="g-city1-tits" @click="is_city_one=true;is_city_two=false" v-else>
                                                                      <span>{{one_val}}</span>
                                                            </div>
                                                            <div class="g-city2-tit" v-if="isCheckCity2">
                                                                      <span>{{two_val}}</span>
                                                            </div>
                                                            <div class="g-city2-tits" v-else>
                                                                      <span>{{two_val}}</span>
                                                            </div>
                                                            <!-- <div @click="show=false" v-if="btn_show" class="city-check">
              <span>确认选择</span>
            </div> -->
                                                  </div>
                                                  <div class="g-city clearfix">
                                                            <div class="g-city1" v-if="is_city_one">
                                                                      <ul style="padding-bottom: 0.5rem">
                                                                                <li v-for="(val,key) in one_city" :key="key" @click="f_check_one_city(key)">{{val}}</li>
                                                                      </ul>
                                                            </div>
                                                            <div class="g-city2" v-if="is_city_two">
                                                                      <ul>
                                                                                <li v-for="(val,key) in two_city" :key="key" @click="f_check_two_city(key)">{{val}}</li>
                                                                      </ul>
                                                            </div>
                                                  </div>
                                        </div>
                                        <div key="1" v-show="show" v-if="cityMoban == '1'" class="g-mo-sub">
                                                  <div style="width: 100%;position: relative" @touchmove.prevent>
                                                            <div class="g-mo-sub-close" @click="close">
                                                                      <img style="width: 100%" src="/static/icon_close@2x.png" alt="">
                                                            </div>
                                                            <div class="g-mo-sub-img" v-if="repet">
                                                                      <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_tupian@2x.png" alt="">
                                                            </div>
                                                            <div class="g-mo-sub-img" v-else>
                                                                      <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_yijingyuyuechenggong@2x.png" alt="">
                                                            </div>
                                                            <p class="g-mo-sub-repet" v-if="!repet">请勿重复预约</p>
                                                            <p class="g-mo-sub-repet" v-if="!repet">立即下载鹰眼鉴房查看新家动态吧</p>
                                                            <div class="g-mo-sub-btn" style="margin-top: 1.1rem" @click="locDown" v-if="repet">
                                                                      <span>立即下载</span>
                                                            </div>
                                                            <div class="g-mo-sub-btn" @click="locDown" v-else>
                                                                      <span>立即下载</span>
                                                            </div>
                                                  </div>
                                        </div>
                              </transition-group>
                    </div>
                    <div class="artifact-bg">
                              <div class="g-head">
                                        <div class="u-head-logo"></div>
                                        <div class="u-head-side">
                                                  <p>建设进度不了解，施工质量看不到</p>
                                                  <p>预约房屋质量监控，一切皆可掌握</p>
                                        </div>
                              </div>
                              <div class="g-input">
                                        <div class="u-inp-city" @click="f_check_city('0')">
                                                  <el-input @input="isSubMit" v-model="form.d_city" placeholder="请输入您所在城市"></el-input>
                                                  <div class="input-moban"></div>
                                        </div>
                                        <div class="u-inp-city">
                                                  <el-input :maxlength="15" type="text" v-model="form.d_house" placeholder="请输入您关注的楼盘名称（非必填）"></el-input>
                                        </div>
                                        <div class="u-inp-city">
                                                  <el-input @input="isSubMit" :maxlength="15" type="text" pattern="[0-9]*" v-model="form.d_phone" placeholder="请输入手机号"></el-input>
                                        </div>
                                        <div id="a">
                                                  <div class="u-inp-submit" v-if="isSubmit" @click="submit">
                                                            <span>预约看新家</span>
                                                  </div>
                                                  <div class="u-inp-submits" v-else>
                                                            <span>预约看新家</span>
                                                  </div>
                                        </div>
                              </div>
                              <div class="g-three-play">
                                        <div class="g-three-play-tit"></div>
                                        <div class="g-three-play-ul">
                                                  <div class="g-three-play-li">
                                                            <div class="g-three-play-li-img">
                                                                      <img src="http://oxrgdeqd8.bkt.clouddn.com/icon_xinfangjindu@2x.png" alt="">
                                                            </div>
                                                            <span>新房进度</span>
                                                            <p>VR多维度呈现新房建筑进度，不再人肉探盘</p>
                                                  </div>
                                                  <div class="g-three-play-li">
                                                            <div class="g-three-play-li-img">
                                                                      <img src="http://oxrgdeqd8.bkt.clouddn.com/icon_zhiliangtouming@2x.png" alt="">
                                                            </div>
                                                            <span>质量透明</span>
                                                            <p>建筑全过程评测，不担心开发商私自变更规划</p>
                                                  </div>
                                                  <div class="g-three-play-li">
                                                            <div class="g-three-play-li-img">
                                                                      <img src="http://oxrgdeqd8.bkt.clouddn.com/icon_bikanganhuo@2x.png" alt="">
                                                            </div>
                                                            <span>必看干货</span>
                                                            <p>买房收房猫腻多，鹰眼鉴房总结避坑指南</p>
                                                  </div>
                                        </div>
                              </div>
                              <div class="g-safeguard">
                                        <div class="g-safeguard-tit"></div>
                                        <div class="g-safeguard-img"></div>
                                        <div class="g-safeguard-text">
                                                  <p>买了房不能随时查看进度？</p>
                                                  <p>建筑公司有没有偷工减料？</p>
                                                  <p>实物比承诺缩水太多？</p>
                                                  <p>稀里糊涂“被”交房？</p>
                                        </div>
                              </div>
                              <div class="m-yyjf-what">
                                        <div class="m-yyjf-what-imgText">
                                                  <div class="m-yyjf-what-imgText-tit"></div>
                                                  <div class="m-yyjf-what-imgText-ine">
                                                            <div class="m-yyjf-what-imgText-ine-img">
                                                                      <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_vrquanjing@2x.png" alt="">
                                                            </div>
                                                            <p class="m-yyjf-what-imgText-ine-tit">720°航拍VR全景呈现</p>
                                                            <p class="m-yyjf-what-imgText-ine-text">室外无人机航拍全景楼盘进度</p>
                                                            <p class="m-yyjf-what-imgText-ine-text">实景视频展示建筑实况</p>
                                                  </div>

                                                  <div class="m-yyjf-what-imgText-ine">
                                                            <div class="m-yyjf-what-imgText-ine-img">
                                                                      <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_shileishijing@2x.png" alt="">
                                                            </div>
                                                            <p class="m-yyjf-what-imgText-ine-tit">1:1 真实还原室内实景</p>
                                                            <p class="m-yyjf-what-imgText-ine-text">实景跟进楼盘整改进度</p>
                                                            <p class="m-yyjf-what-imgText-ine-text">厘米级精准还原室内空间</p>
                                                  </div>

                                                  <div class="m-yyjf-what-imgText-ine">
                                                            <div class="m-yyjf-what-imgText-ine-img">
                                                                      <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_shigongzhiliang@2x.png" alt="">
                                                            </div>
                                                            <p class="m-yyjf-what-imgText-ine-tit">施工质量全透明</p>
                                                            <p class="m-yyjf-what-imgText-ine-text">定期更新实际建筑进度</p>
                                                            <p class="m-yyjf-what-imgText-ine-text">可追踪千余项工程质量监控点</p>
                                                  </div>

                                                  <div class="m-yyjf-what-imgText-ine">
                                                            <div class="m-yyjf-what-imgText-ine-img">
                                                                      <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_maifang@2x.png" alt="">
                                                            </div>
                                                            <p class="m-yyjf-what-imgText-ine-tit">买房必看干货</p>
                                                            <p class="m-yyjf-what-imgText-ine-text">手把手教你如何避坑</p>
                                                            <p class="m-yyjf-what-imgText-ine-text">告诉你开发商不敢说的那点事儿</p>
                                                  </div>
                                        </div>
                                        <div class="m-yyjf-what-answers">
                                                  <div class="m-yyjf-what-answers-tit"></div>
                                                  <p class="m-yyjf-what-answers-head">工程质量不合格可能会出现什么问题？</p>
                                                  <div class="m-yyjf-what-answers-problem">
                                                            <div class="m-yyjf-what-answers-problem-li">
                                                                      <div class="m-yyjf-what-answers-problem-li-img">
                                                                                <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_konggukailie@2x.png" alt="">
                                                                      </div>
                                                                      <p>墙面出现空鼓、开裂</p>
                                                            </div>
                                                            <div class="m-yyjf-what-answers-problem-li">
                                                                      <div class="m-yyjf-what-answers-problem-li-img">
                                                                                <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_qingxie@2x.png" alt="">
                                                                      </div>
                                                                      <p>房屋倾斜、坍塌</p>
                                                            </div>
                                                            <div class="m-yyjf-what-answers-problem-li">
                                                                      <div class="m-yyjf-what-answers-problem-li-img">
                                                                                <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_qiangmianshenshui@2x.png" alt="">
                                                                      </div>
                                                                      <p>墙面渗水、发霉</p>
                                                            </div>
                                                            <div class="m-yyjf-what-answers-problem-li">
                                                                      <div class="m-yyjf-what-answers-problem-li-img">
                                                                                <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_bugeyin@2x.png" alt="">
                                                                      </div>
                                                                      <p>房屋隔音不达标</p>
                                                            </div>
                                                  </div>
                                                  <div class="g-m-yyjf-what-text">
                                                            <p class="g-m-yyjf-what-text-tit">知名开发商楼盘也可能出现质量问题吗</p>
                                                            <p class="g-m-yyjf-what-text-ti">知名开发商并不意味着可以高枕无忧，近年来房地产巨头频频爆出各类质量问题。买房是人生中的头等大事，质量问题早发现，入住更安心。</p>
                                                            <p class="g-m-yyjf-what-text-tit">除了房屋质量还可能有哪些隐患</p>
                                                            <p class="g-m-yyjf-what-text-ti">涵盖交房时间延期、开发商擅自变更规划、套内面积误差过大、未经允许变更房屋设计、楼盘景观设计缩水等诸多常见隐患。</p>
                                                  </div>
                                        </div>
                              </div>
                    </div>
                    <div id="b" class="g-foot" v-scroll="scroolHand">
                              <div class="u-foot-down-bg" style="margin-left: 0.4rem;margin-right: 0.2rem">
                                        <div class="u-foot-down" @click="locDown">
                                                  <span>立即下载</span>
                                        </div>
                              </div>
                              <div class="u-foot-sub" style="margin-left: 0" @click="scrollT">
                                        <span>预约看新家</span>
                              </div>
                    </div>
          </div>
</template>
<script>

import Ciy from "../../common/js/city";
import Screen from "../../common/js/scroll";
import { keyUpSearch, f_get_dizhi } from '../../common/js/geolocation'
import { mapMutations } from "vuex";

export default {
          data() {
                    return {
                              form: {
                                        d_city: "",
                                        d_phone: "",
                                        d_house: ""
                              },
                              repet: false,
                              isSubmit: false,
                              isCheckCity1: true,
                              isCheckCity2: true,
                              cityMoban: "",
                              show: false,
                              btn_show: false,
                              innerVisible: false,
                              is_city_one: true,
                              is_city_two: false,
                              one_city: [],
                              two_city: [],
                              one_val: "请选择",
                              two_val: "请选择"
                    };
          },

          beforeDestroy() {
                    this.removeHander(window, "scroll", this.scroolHand);
          },
          created() {
                    this.cityInit();
                    this.getLocation();
          },
          watch: {
                    is_city_one: "checkCity",
                    is_city_two: "checkCity"
          },
          methods: {

                    ...mapMutations({
                              hint_is: "set_hint"
                    }),

                    cityInit() {
                              for (let i in Ciy) {
                                        this.one_city.push(Ciy[i].name);
                              }
                    },

                    getLocation() {
                              keyUpSearch().then((op) => {
                                        f_get_dizhi(op).then(res => {
                                                  this.form.d_city = res.d_city;
                                                  this.one_val = res.one_val;
                                        })
                              }).catch(err => {
                                        this.hint_is('城市：网络错误');
                              });
                    },

                    scrollT() {
                              window.scrollTo(0, 0);
                    },

                    removeHander(el, type, callback) {
                              if (el.removeEventListener) {
                                        el.removeEventListener(type, callback, false);
                              } else if (el.detachEvent) {
                                        el.detachEvent("on" + type, callback);
                              } else {
                                        el["on" + type] = null;
                              }
                    },

                    scroolHand() {
                              let el = document.getElementById("b");
                              let _ss = document.body;
                              let scr_top = parseInt(document.body.scrollTop) || parseInt(document.documentElement.scrollTop);
                              let inner_height = parseInt(window.innerHeight);
                              let cl_height = parseInt(_ss.clientHeight);
                              let tar = document.getElementById("a");
                              let _bottomFaVal = _ss.scrollHeight - _ss.offsetHeight;
                              let tarSp = tar.parentNode.offsetTop + tar.parentNode.clientHeight;

                              if (scr_top >= tarSp) {
                                        el.classList.remove("fadeOutDownBig");
                                        el.classList.add("animated");
                                        el.classList.add("fadeInUp");
                                        el.style.bottom = 0;
                              } else {
                                        if (el.classList.contains("fadeInUp")) {
                                                  el.classList.remove("fadeInUp");
                                                  el.classList.add("animated");
                                                  el.classList.add("fadeOutDownBig");
                                        }
                              }
                    },

                    f_check_city(type) {
                              this.show = true;
                              this.cityMoban = type;
                              this.checkCity();
                    },

                    close() {
                              this.show = false;
                              this.cityMoban = "";
                    },

                    f_check_one_city(key) {
                              this.two_city.length = 0;
                              this.two_val = "请选择";
                              for (let i in Ciy[key].city) {
                                        this.two_city.push(Ciy[key].city[i].name);
                              }
                              this.one_val = this.one_city[key];
                              this.is_city_two = true;
                              this.is_city_one = false;
                    },

                    f_check_two_city(key) {
                              this.two_val = this.two_city[key];
                              this.form.d_city = this.two_val;
                              this.isSubMit();
                              this.close();
                    },

                    checkCity() {
                              if (this.is_city_one) {
                                        this.isCheckCity1 = true;
                                        this.isCheckCity2 = false;
                              } else {
                                        this.isCheckCity1 = false;
                                        this.isCheckCity2 = true;
                              }
                              if (this.is_city_two) {
                                        this.isCheckCity2 = true;
                                        this.isCheckCity1 = false;
                              } else {
                                        this.isCheckCity2 = false;
                                        this.isCheckCity1 = true;
                              }
                    },

                    isSubMit() {

                              if (this.form.d_city && this.form.d_phone) {
                                        this.isSubmit = true;
                              } else {
                                        this.isSubmit = false;
                              }
                    },

                    locDown() {
                              window.location = this.$url.appDown;
                    },

                    submit() {
                              if (!/^1\d{10}$/.test(this.form.d_phone)) {
                                        this.hint_is("请填写正确的手机号");
                                        return;
                              }
                              let url = "/user/reservationArtifact";
                              let body = {
                                        cityName: this.form.d_city,
                                        userPhone: !this.form.d_phone ? "" : this.form.d_phone,
                                        houseName: !this.form.d_house ? "" : this.form.d_house
                              }
                              let option = {
                                        urls: url,
                                        methods: 'post',
                                        data: {
                                                  cityName: this.form.d_city,
                                                  userPhone: !this.form.d_phone ? "" : this.form.d_phone,
                                                  houseName: !this.form.d_house ? "" : this.form.d_house
                                        },
                                        des: true,
                                        types: 3
                              };

                              this.$http(option).then(res => {
                                        if (res.code == "0") {
                                                  if (res.response.data.status == "0") {
                                                            this.repet = true;
                                                            this.f_check_city(1);
                                                  } else if (res.response.data.status == "1") {
                                                            this.hint_is(resp.response.message);
                                                  } else if (res.response.data.status == "2") {
                                                            this.repet = false;
                                                            this.f_check_city(1);
                                                  }
                                        }

                              }).catch(err => {
                                        this.hint_is("网络错误");
                              });

                    }
          }
};
</script>
<style scoped>
.animated {
        animation-duration: 1s;
        animation-fill-mode: both;
}

.artifact {
        width: 7.5rem;
        margin: auto;
        overflow: hidden;
        padding-bottom: 1.1rem;
}

.artifact-bg {
        position: relative;
        width: 7.5rem;
        margin: auto;
        overflow: hidden;
        height: 59.88rem;
        background-image: url("http://oxrgdeqd8.bkt.clouddn.com/bg_n%20copy@2x.png");
        background-size: cover;
        background-repeat: no-repeat;
}

.g-three-play-li-img img {
        width: 100%;
}

.g-head {
        position: absolute;
        top: 0;
        z-index: 1;
        overflow: hidden;
        width: 100%;
        height: 10.29rem;
        background-image: url("http://oxrgdeqd8.bkt.clouddn.com/pic_toutu@2x.png");
        background-size: cover;
        background-repeat: no-repeat;
}

.u-head-logo {
        margin-left: 0.36rem;
        margin-top: 0.316rem;
        width: 1.44rem;
        height: 0.326rem;
        background-image: url("http://oxrgdeqd8.bkt.clouddn.com/pic_logo@2x.png");
        background-size: cover;
        background-repeat: no-repeat;
}

.u-head-side {
        margin: 4.078rem auto;
        padding: 0.276rem 1.47rem 0.405rem 1.52rem;
        width: 4.21rem;
        height: 0.731rem;
        background-image: url("http://oxrgdeqd8.bkt.clouddn.com/pic_biaotimiaoshu@2x.png");
        background-size: cover;
        background-repeat: no-repeat;
}

.u-head-side p {
        width: 4.3rem;
        font-family: PingFangSC-Semibold;
        font-size: 0.28rem;
        color: #ffffff;
        text-align: justify;
}

.g-input {
        position: relative;
        z-index: 99;
        margin: 7.237rem auto 0;
        padding-right: 0.4rem;
        padding-left: 0.4rem;
}

.u-inp-city {
        position: relative;
        margin-bottom: 0.356rem;
        height: 0.81rem;
        border-radius: 1rem;
        background: -webkit-linear-gradient(right, #df97fb, #3f55ea);
        background-color: #df97fb;
        padding: 0.04rem;
}

.input-moban {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
}

.u-code-btn,
.u-code-btns {
        position: absolute;
        top: 50%;
        margin-top: -0.35rem;
        right: 0.164rem;
        width: 2.12rem;
        height: 0.691rem;
        z-index: 999;
        text-align: center;
        line-height: 0.691rem;
        border-radius: 2rem;
        font-family: PingFangSC-Regular;
        font-size: 0.28rem;
        color: #ffffff;
}

.u-code-btn {
        background: -webkit-linear-gradient(left, #df97fb, #3f55ea);
        background-color: #df97fb;
        /*background: -moz-linear-gradient(left, #DF97FB, #3F55EA);*/
        /*background: -o-linear-gradient(left, #DF97FB, #3F55EA);*/
        /*background: linear-gradient(left, #DF97FB, #3F55EA);*/
}

.u-code-btns {
        background: #b9c0c8;
}

.u-inp-submit,
.u-inp-submits {
        font-family: PingFangSC-Regular;
        font-size: 0.32rem;
        color: #ffffff;
        text-align: center;
        width: 4.4rem;
        height: 0.79rem;
        margin: auto;
        line-height: 0.79rem;
        border-radius: 2rem;
}

.u-inp-submit {
        background: -webkit-linear-gradient(left, #df97fb, #3f55ea);
        background-color: #df97fb;
}

.u-inp-submits {
        background: #b9c0c8;
}

.g-three-play {
        margin: 1.187rem auto 0.88rem;
        padding-left: 0.39rem;
        padding-right: 0.3rem;
}

.g-three-play-tit {
        margin: auto;
        width: 4.97rem;
        height: 0.75rem;
        background-image: url("http://oxrgdeqd8.bkt.clouddn.com/pic_one@2x.png");
        background-size: cover;
        background-repeat: no-repeat;
}

.g-three-play-ul {
        margin: 0.6rem auto 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
}

.g-three-play-li {
        width: 1.7rem;
}

.g-three-play-li span {
        display: inline-block;
        width: 100%;
        height: 0.45rem;
        font-family: PingFangSC-Semibold;
        font-size: 0.32rem;
        color: #ffffff;
        letter-spacing: 0.064rem;
        text-align: center;
        margin: 0.25rem auto 0.195rem;
}

.g-three-play-li p {
        width: 100%;
        font-family: PingFangSC-Regular;
        font-size: 0.28rem;
        color: #ffffff;
        letter-spacing: 0.056rem;
        text-align: justify;
}

.g-three-play-li-img {
        width: 1.6rem;
        height: 1.58rem;
        margin: auto;
}

.g-safeguard-tit {
        width: 3.61rem;
        height: 0.819rem;
        margin: auto;
        background-image: url("http://oxrgdeqd8.bkt.clouddn.com/pic_two@2x.png");
        background-size: cover;
        background-repeat: no-repeat;
}

.g-safeguard-img {
        margin: 0.593rem auto 0.184rem;
        width: 6.7rem;
        height: 2.429rem;
        background-image: url("http://oxrgdeqd8.bkt.clouddn.com/pic_xiangxiangduibi@2x.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
}

.g-safeguard-text {
        width: 3.4rem;
        height: 1.92rem;
        margin: auto;
}

.g-safeguard-text p {
        font-family: PingFangSC-Regular;
        font-size: 0.28rem;
        color: #ffffff;
        line-height: 0.48rem;
        text-align: center;
}

.m-yyjf-what {
        width: 6.7rem;
        height: 33.48rem;
        background: #ffffff;
        border-radius: 0.1rem;
        margin: 0.586rem auto;
        overflow: hidden;
}

.m-yyjf-what-imgText-tit {
        width: 5.34rem;
        height: 0.77rem;
        margin: 0.552rem auto 0;
        background-image: url("http://oxrgdeqd8.bkt.clouddn.com/pic_three@2x.png");
        background-size: cover;
        background-repeat: no-repeat;
}

.m-yyjf-what-imgText-ine-img {
        width: 5.82rem;
        height: 2.29rem;
        margin: 0.513rem auto 0.194rem;
}

.m-yyjf-what-imgText-ine-img img {
        width: 100%;
}

.m-yyjf-what-imgText-ine-tit {
        text-align: center;
        font-family: PingFangSC-Medium;
        font-size: 0.3rem;
        color: #3f55ea;
        line-height: 0.6rem;
        font-weight: 600;
}

.m-yyjf-what-imgText-ine-text {
        text-align: center;
        font-family: PingFangSC-Medium;
        font-size: 0.28rem;
        color: #4d535d;
        line-height: 0.42rem;
}

.m-yyjf-what-answers {
        margin: 0.582rem auto 0;
}

.m-yyjf-what-answers-tit {
        width: 3.4rem;
        height: 1.135rem;
        margin: auto;
        background-image: url("http://oxrgdeqd8.bkt.clouddn.com/pic_four@2x.png");
        background-size: cover;
        background-repeat: no-repeat;
}

.m-yyjf-what-answers-head {
        font-family: PingFangSC-Medium;
        font-size: 0.28rem;
        color: #4d535d;
        text-align: center;
        margin-top: 0.247rem;
}

.m-yyjf-what-answers-problem {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        flex-flow: wrap;
        padding-left: 0.16rem;
        padding-right: 0.16rem;
}

.m-yyjf-what-answers-problem-li {
        width: 3.08rem;
        margin-top: 0.252rem;
}

.m-yyjf-what-answers-problem-li p {
        font-family: PingFangSC-Regular;
        font-size: 0.26rem;
        color: #8b949e;
        text-align: center;
        margin-top: 0.214rem;
}

.g-m-yyjf-what-text-tit {
        margin-top: 0.59rem;
        text-align: center;
        font-family: PingFangSC-Semibold;
        font-size: 0.28rem;
        color: #3f55ea;
        letter-spacing: 0.02rem;
}

.g-m-yyjf-what-text-ti {
        padding-right: 0.4rem;
        padding-left: 0.4rem;
        margin-top: 0.251rem;
        text-align: justify;
        font-family: PingFangSC-Regular;
        font-size: 0.28rem;
        color: #4d535d;
        line-height: 0.48rem;
}

.g-foot {
        position: fixed;
        bottom: -1.1rem;
        z-index: 999;
        width: 7.5rem;
        height: 1.1rem;
        box-shadow: 0 0 0.1rem 0 rgba(18, 58, 218, 0.38);
        background: #fff;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        /*-webkit-box-pack: justify;*/
        /*-webkit-justify-content: space-between;*/
        /*-ms-flex-pack: justify;*/
        /*justify-content: space-between;*/
}

.u-foot-down-bg {
        margin: auto;
        padding: 0.04rem;
        width: 2.38rem;
        height: 0.82rem;
        border-radius: 1rem;
        background: -webkit-linear-gradient(left, #df97fb, #3f55ea);
        background-color: #df97fb;
}

.u-foot-down {
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 1rem;
        font-family: PingFangSC-Regular;
        font-size: 0.28rem;
        color: #323232;
        text-align: center;
        line-height: 0.84rem;
}

.u-foot-sub {
        border-radius: 1rem;
        background: -webkit-linear-gradient(left, #df97fb, #3f55ea);
        background-color: #df97fb;
        width: 4.12rem;
        height: 0.9rem;
        font-family: PingFangSC-Light;
        font-size: 0.28rem;
        color: #ffffff;
        line-height: 0.9rem;
        text-align: center;
        margin: auto;
}

.u-foot-sub {
        background: -webkit-linear-gradient(left, #df97fb, #3f55ea);
        background-color: #df97fb;
}

.g-mo-sub-img {
        width: 5.724rem;
        height: 4.69rem;
        margin: 0.5rem auto 0.4rem;
}

.g-mo-sub-img img {
        width: 100%;
}

.g-mo-sub-repet {
        width: 100%;
        font-family: PingFangSC-Medium;
        font-size: 0.28rem;
        color: #ffffff;
        margin: 0 auto 0.2rem;
        text-align: center;
}

.g-mo-sub-btn {
        background: -webkit-linear-gradient(left, #df97fb, #3f55ea);
        background-color: #df97fb;
        width: 3.3rem;
        height: 0.82rem;
        font-family: PingFangSC-Regular;
        font-size: 0.28rem;
        border-radius: 1rem;
        color: #ffffff;
        margin: 0.3rem auto 0;
        text-align: center;
        line-height: 0.82rem;
}

.sur_moban_ {
        width: 7.5rem;
        left: 50%;
        margin-left: -3.75rem;
        right: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.7);
        bottom: 0;
        top: 0;
        z-index: 9999;
        display: -webkit-flex; /*设置父元素盒子的，这样内部盒子就会水平居中，上下居中。*/
        -webkit-justify-content: center; /*设置父元素盒子的，这样内部盒子就会水平居中，上下居中。*/
        -webkit-align-items: center; /*设置父元素盒子的，这样内部盒子就会水平居中，上下居中。*/
}

.g-dislog-tit {
        margin-bottom: 0.3rem;
        font-family: PingFangSC-Regular;
        font-size: 0.24rem;
        color: #8b949e;
        line-height: 0.28rem;
        text-align: center;
}

.g-mo-body {
        width: 7.5rem;
        height: 7.04rem;
        background: #fff;
        overflow: hidden;
        position: fixed;
        bottom: 0;
        z-index: 9999;
        /*padding-bottom: 0.4rem;*/
        padding-top: 0.4rem;
}

.g-mo-sub {
        width: 5.74rem;
        height: 8.25rem;
        overflow: hidden;
        position: fixed;
        top: 50%;
        margin-top: -4.725rem;
        z-index: 9999;
        left: 50%;
        margin-left: -2.87rem;
}

.g-mo-sub-close {
        position: absolute;
        right: 0;
        top: 0;
        width: 0.54rem;
        height: 0.46rem;
}

.g-city {
        border-bottom: 1px solid #e7e7e7;
        height: 100%;
        padding-bottom: 0.5rem;
}

.g-city1,
.g-city2 {
        float: left;
        height: 100%;
        width: 100%;
}

.g-city1 ul,
.g-city2 ul {
        widows: 100%;
        overflow-y: scroll; /* winphone8和android4+ */
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
        height: 6rem;
        padding-bottom: 0.3rem;
}

.g-city1 ul li,
.g-city2 ul li {
        padding-left: 0.2rem;
        padding-right: 0.2rem;
        text-align: center;
        margin-top: 0.2rem;
        margin-bottom: 0.4rem;
        text-align: left;
}

.g-city1-tit,
.g-city2-tit,
.g-city1-tits,
.g-city2-tits {
        font-family: PingFangSC-Regular;
        font-size: 0.24rem;
        color: #3c25e7;
        line-height: 0.6rem;
        border-bottom: 2px solid #3c25e7;
        text-align: center;
        float: left;
        padding-left: 0.2rem;
        padding-right: 0.2rem;
        margin-left: 0.2rem;
        margin-right: 0.3rem;
}

.g-city1-tits,
.g-city2-tits {
        color: #8b949e;
        border-bottom: 2px solid #fff;
}

.city-check {
        border-radius: 0.04rem;
        border: 1px solid lightgray;
        padding: 0.1rem;
        float: right;
        color: #3c25e7;
        margin-top: 0.05rem;
        margin-right: 0.5rem;
}
</style>
<style>
.g-input .el-input__inner,
.g-input .el-input.is-disabled .el-input__inner {
        font-family: PingFangSC-Regular;
        font-size: 0.28rem;
        color: #323232;
        line-height: 0.81rem;
        height: 0.81rem;
        background: #ffffff !important;
        border-radius: 1rem;
        padding-left: 0.4rem;
        z-index: 9999999999;
}

.g-input .el-input {
        height: 0.81rem;
}
</style>
