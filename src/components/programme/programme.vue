<template>
          <div class='programme' v-if="dataErr">
                    <div class='programmeTop'>
                              <i></i>
                              <i></i>
                              <div class='programmeTopImg'>
                                        <img :src='programmeData.img' alt='图片无法显示'>
                                        <div class='programmeTopBar'>
                                                  <p>{{programmeData.houseName}}</p>
                                                  <p>规划落实评级</p>
                                                  <p>{{programmeData.date}}</p>
                                        </div>
                              </div>
                              <div class='programmeTopText'>
                                        <div class='programmeTopLv'>
                                                  <p>{{programmeData.plan ? programmeData.plan + '%' : 0}}</p>
                                                  <p>落实统计进度</p>
                                        </div>
                                        <div class='programmeTopLv2'>
                                                  <p>{{programmeData.lv}}</p>
                                                  <p>规划落实评级</p>
                                        </div>
                                        <div class="programmeClear"></div>
                                        <p style='text-align:center;margin-top:0.4rem;font-family: PingFangSC-Regular;font-size: 11px;color: #9E9E9E;'>
                                                  * 评级是由鹰眼鉴房的评分数值综合评定<br/>最高评级为S+，共划分为7个等级</p>
                              </div>
                    </div>
                    <div class='programmeHr'>
                              <i></i><img src='../../../static/gray.svg'>
                              <span style='font-family: PingFangSC-Light;font-size: 16px;color: #42464D;'>规划落实评级</span><img src='../../../static/gray.svg'>
                              <i></i>
                    </div>
                    <div class='programmeRate'>
                              <div v-for="(value,index) in arr">
                                        <span :class="classNames(value.programmePlanData.planLv)">{{storeNam(value.programmePlanData.planLv)}}</span>
                                        <p>{{value.programmePlanData.title}}</p>
                              </div>
                    </div>
                    <div class='programmeHr'>
                              <i></i><img src='../../../static/gray.svg'>
                              <span style='font-family: PingFangSC-Light;font-size: 16px;color: #42464D;'>总体评价</span><img src='../../../static/gray.svg'>
                              <i></i>
                    </div>
                    <div class='programmeOveralls' v-html="programmeData.allEvaluate"></div>
                    <div class='programmeHr'>
                              <i></i><img src='../../../static/gray.svg'>
                              <span style='font-family: PingFangSC-Light;font-size: 16px;color: #42464D;'>规划落实评测</span><img src='../../../static/gray.svg'>
                              <i></i>
                    </div>
                    <div class='programmeOne' v-for='(key,index) in arr'>
                              <div class='programmeOneTop'>
                                        <div class='programmeOneTitle'>
                                                  <span><img :src='key.img'></span>
                                                  <span>{{key.programmePlanData.title}}</span>
                                        </div>
                                        <div :class="key.className">
                                                  <i></i>
                                                  <i></i>
                                                  <p>{{key.programmePlanData.text}}</p>
                                        </div>
                              </div>
                              <div class='programmeStage'>
                                        <Step :steptage='key'></Step>
                              </div>
                              <div class='programmeOnePlan' v-for="tex in key.programmePlanData.programmePlanText">
                                        <p>
                                                  <span>{{tex.title}}</span>
                                                  <span>{{(tex.sum + "%")}}</span>
                                        </p>
                                        <el-progress :text-inside="true" :stroke-width="18" :percentage="parseFloat(tex.sum)" status="success" style='width:6rem;margin:auto;'></el-progress>
                                        <p v-for="value in tex.part">
                                                  <span>{{value.name}}
                                                            <i :class='gbClass(value.bg)'>{{gbTitle(value.bg)}}</i>
                                                  </span>
                                                  <span :class="judgeClass(value.qualified)">{{gbJudge(value.qualified)}}</span>
                                        </p>
                              </div>
                              <div class='programmeOneText'>
                                        <p>{{key.programmePlanData.what}}</p>
                                        <div>
                                                  <p style='width:5.9rem'>{{key.programmePlanData.effect}}</p>
                                        </div>
                              </div>
                              <div>
                                        <el-carousel :interval="5000" arrow="always">
                                                  <el-carousel-item v-for="(item,index) in key.programmePlanData.lunImg" :key="index">
                                                            <div class="lunDiv"><img style="width: 100%;height: 100%;" :src="item.img" alt="">
                                                                      <div class="lunModule">
                                                                                <span>{{item.text}}</span>
                                                                                <span>{{index + 1}}/{{key.programmePlanData.lunImg.length}}</span>
                                                                      </div>
                                                            </div>
                                                  </el-carousel-item>
                                        </el-carousel>
                              </div>
                    </div>
          </div>
</template>
<script>
import Step from './step.vue';
import {
          mapMutations
} from "vuex";
export default {
          data() {
                    return {
                              dataErr: false,
                              programmeData: {
                                        programmeLv: []
                              },
                              topImg: '',
                              houseName: '',
                              data: '',
                              plan: 0,
                              lv: '无',
                              allEvaluate: '',
                              classs: 'default',
                              arr: [
                                        {
                                                  img: '../../../static/one.svg', className: 'programmeOneIndex',
                                                  tageNum: [
                                                            '阶段一', '阶段二', '阶段三', '阶段四', '阶段五', '阶段六', '阶段七',
                                                  ],
                                                  programmePlanData: {
                                                            programmePlanText: [],
                                                            lunImg: []
                                                  }
                                        },
                                        {
                                                  img: '../../../static/two.svg', className: 'programmeOneIndexTwo',
                                                  tageNum: [
                                                            '阶段一', '阶段二', '阶段三', '阶段四', '阶段五', '阶段六', '阶段七',
                                                  ],
                                                  programmePlanData: {
                                                            programmePlanText: []
                                                  }
                                        },
                                        {
                                                  img: '../../../static/three.svg', className: 'programmeOneIndexThree',
                                                  tageNum: [
                                                            '阶段一', '阶段二', '阶段三'
                                                  ],
                                                  programmePlanData: {
                                                            programmePlanText: []
                                                  }
                                        }
                              ],
                              a: ''
                    }
          },
          props: ['loading'],
          components: { Step },
          created() {
                    this.getData();
          },
          methods: {
                    ...mapMutations({
                              set_hint: "set_hint"
                    }),
                    storeNam(data) {
                              if (data == '1') {
                                        return '优+'
                              } else if (data == '2') {
                                        return '优'
                              } else if (data == '3') {
                                        return '良'
                              } else if (data == '4') {
                                        return '普'
                              } else if (data == '5') {
                                        return '差'
                              } else if (data == '6') {
                                        return '涂'
                              } else if (data == '7') {
                                        return '石'
                              } else if (data == '8') {
                                        return '有'
                              } else {
                                        return '无'
                              }
                    },
                    classNames(data) {
                              if (data == '1' || data == '2' || data == '优+' || data == '优') {
                                        return 'green'
                              } else if (data == '3' || data == '良') {
                                        return 'blue'
                              } else if (data == '4' || data == '普') {
                                        return '差'
                              }
                              if (data == '5' || data == '差') {
                                        return 'red'
                              } else {
                                        return 'defaults'
                              }
                    },
                    gbJudge(data) {
                              if (data == '1') {
                                        return '合格'
                              } else if (data == '2') {
                                        return '整改中'
                              } else if (data == '3') {
                                        return '未整改'
                              } else if (data == '0') {
                                        return '未检验'
                              }
                    },
                    judgeClass(data) {
                              if (data == '1') {
                                        return 'judgeSuccess'
                              } else if (data == '2' || data == '3') {
                                        return 'judgeError'
                              } else if (data == '0') {
                                        return 'judgeDefault'
                              }
                    },
                    gbClass(data) {
                              if (data == '1') {
                                        return 'gbDefulat'
                              } else if (data == '0') {
                                        return 'gbError'
                              }
                    },
                    gbTitle(data) {
                              if (data == '1') {
                                        return '符合国家标准'
                              } else if (data == '0') {
                                        return '不符合国家标准'
                              }
                    },
                    getData() {

                              /*START*/
                              let url = "planPracticable/" + this.$route.params.id;
                              let options = {
                                        urls: url,
                                        methods: 'get',
                                        des: true,
                                        types: 1
                              };

                              this.$http(options).then(res => {
                                        this.dataErr = true;
                                        this.programmeData = res.response.data;
                                        for (let i in this.programmeData.programmeLv) {
                                                  this.arr[i].programmePlanData = this.programmeData.programmeLv[i];
                                                  //          console.log(this_.arr[i].programmePlanData);
                                        }
                                        this.topImg = res.img ? res.img : '../../../static/pig_imageholder@3x.png';
                                        this.houseName = res.houseName;
                                        this.data = res.date;
                                        this.plan = res.plan;
                                        this.lv = res.lv;
                                        this.allEvaluate = res.allEvaluate;
                              }).catch(err => {
                                        this.set_hint('数据错误');
                                        console.log(err);
                              })
                              /*END*/

                    }
          }
}
</script>
<style>
.programmeClear {
        clear: both;
}

.programme {
        max-width: 15rem;
        background: #f2f3f7;
        border-top: 2px solid #e0e0e0;
        padding-top: 0.42rem;
        padding-bottom: 1rem;
}

.programmeTop {
        width: 6.9rem;
        height: 8rem;
        margin: auto;
        box-shadow: 0 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.09),
                0 1px 2px 0 rgba(0, 0, 0, 0.15);
        border-radius: 6px;
        position: relative;
}

.programmeTop .programmeTopImg {
        width: 6.9rem;
        height: 4.4rem;
        position: relative;
        border-radius: 6px;
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
        top: 4.1rem;
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
        top: 4.1rem;
}

.programmeTop .programmeTopImg img {
        width: 100%;
        height: 4.4rem;
        border-radius: 6px;
}

.programmeTop .programmeTopBar {
        width: 6.9rem;
        height: 4.4rem;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        border-radius: 6px;
}

.programmeTop .programmeTopBar p:nth-child(1) {
        font-family: PingFangSC-Semibold;
        font-size: 0.6rem;
        color: #ffffff;
        text-align: center;
        margin-top: 1.4rem;
}

.programmeTop .programmeTopBar p:nth-child(2) {
        font-family: PingFangSC-Light;
        font-size: 18px;
        color: #ffffff;
        line-height: 18px;
        text-align: center;
        margin-top: 0.16rem;
}

.programmeTop .programmeTopBar p:nth-child(3) {
        font-family: PingFangSC-Light;
        font-size: 10px;
        color: #ffffff;
        line-height: 10px;
        text-align: center;
        margin-top: 0.16rem;
}

.programmeTop .programmeTopText {
        width: 6.9rem;
        height: 3.2rem;
        background: #fff;
        padding-top: 0.4rem;
        border-radius: 6px;
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
        color: #5880f3;
        line-height: 0.8rem;
        text-align: center;
        margin-top: 0.2rem;
        font-weight: 200;
}

.programmeTop .programmeTopText .programmeTopLv p:nth-child(2) {
        font-family: PingFangSC-Regular;
        font-size: 0.26rem;
        color: #42464d;
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
        color: #5880f3;
        line-height: 0.8rem;
        text-align: center;
        margin-top: 0.2rem;
        font-weight: 200;
}

.programmeTop .programmeTopText .programmeTopLv2 p:nth-child(2) {
        font-family: PingFangSC-Regular;
        font-size: 0.26rem;
        color: #42464d;
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
        color: #42464d;
}

.programmeHr i {
        display: inline-block;
        width: 1.5rem;
        height: 0;
        border-top: 0.02rem solid #42464d;
        margin-top: 0.2rem;
}

.programmeRate {
        width: 6.9rem;
        height: 2.5rem;
        margin: auto;
}

.programmeRate div {
        width: 2.04rem;
        height: 2.3rem;
        background: #ffffff;
        box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09),
                0 1px 2px 0 rgba(0, 0, 0, 0.15);
        border-radius: 0.08rem;
        text-align: center;
        float: left;
        margin: 0.13rem 0.13rem 0.13rem;
}

.defaults {
        display: inline-block;
        width: 0.78rem;
        height: 0.78rem;
        border-radius: 0.78rem;
        background: #e0e0e0;
        font-family: PingFangSC-Light;
        font-size: 0.36rem;
        color: #ffffff;
        text-align: center;
        line-height: 0.78rem;
        margin-top: 0.46rem;
}

.green {
        display: inline-block;
        width: 0.78rem;
        height: 0.78rem;
        border-radius: 0.78rem;
        background: #70caa8;
        font-family: PingFangSC-Light;
        font-size: 0.36rem;
        color: #ffffff;
        text-align: center;
        line-height: 0.78rem;
        margin-top: 0.46rem;
}

.blue {
        display: inline-block;
        width: 0.78rem;
        height: 0.78rem;
        border-radius: 0.78rem;
        background: #5880f3;
        font-family: PingFangSC-Light;
        font-size: 0.36rem;
        color: #ffffff;
        text-align: center;
        line-height: 0.78rem;
        margin-top: 0.46rem;
}

.pu {
        display: inline-block;
        width: 0.78rem;
        height: 0.78rem;
        border-radius: 0.78rem;
        background: #879ec4;
        font-family: PingFangSC-Light;
        font-size: 0.36rem;
        color: #ffffff;
        text-align: center;
        line-height: 0.78rem;
        margin-top: 0.46rem;
}

.red {
        display: inline-block;
        width: 0.78rem;
        height: 0.78rem;
        border-radius: 0.78rem;
        background: #fe6e6e;
        font-family: PingFangSC-Light;
        font-size: 0.36rem;
        color: #ffffff;
        text-align: center;
        line-height: 0.78rem;
        margin-top: 0.46rem;
}

.programmeRate div p {
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 0.26rem;
        color: #4c4c4c;
        margin-top: 0.2rem;
}

.programmeOveralls {
        width: 6.9rem;
        margin: auto;
        text-align: center;
        background-image: linear-gradient(-180deg, #5880f3 0%, #5311fd 100%);
        box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09),
                0 1px 2px 0 rgba(0, 0, 0, 0.15);
        border-radius: 0.08rem;
}

.programmeOveralls p {
        width: 5.98rem;
        display: inline-block;
        margin: 0.25rem auto;
        font-family: PingFangSC-Regular;
        font-size: 0.34rem;
        color: #ffffff;
        letter-spacing: 0;
        line-height: 0.6rem;
        text-align: justify;
}

.programmeOne {
        width: 6.9rem;
        margin: auto;
        background: #ffffff;
        box-shadow: 0 1px 0.12rem 0 rgba(0, 0, 0, 0.09),
                0 1px 2px 0 rgba(0, 0, 0, 0.15);
        border-radius: 0.08rem;
        margin-top: 0.6rem;
}

.programmeOneTop {
        width: 6.9rem;
        position: relative;
}

.programmeOne > div {
        border: 1px solid #f2f3f7;
}

.programmeOneTitle {
        display: flex;
        justify-content: center;
        width: 3.4rem;
        margin: 0.4rem auto;
        position: relative;
}

.programmeOneTitle span:nth-child(1) {
        width: 0.7rem;
        height: 0.7rem;
        line-height: 0.592rem;
        margin-right: 0.2rem;
}

.programmeOneTitle span img {
        width: 0.7rem;
        height: 0.7rem;
}

.programmeOneTitle span:nth-child(2) {
        display: inline-block;
        line-height: 0.7rem;
        font-family: PingFangSC-Thin;
        font-size: 0.36rem;
        color: #42464d;
}

.programmeOneTitleImg {
        margin: 0.19rem auto;
        width: 0.4rem;
        height: 0.36rem;
        background-image: linear-gradient(-180deg, #ab91fa 0%, #2a61ff 100%);
}

.programmeOneIndex {
        width: 7.26rem;
        background: #5880f3;
        font-family: PingFangSC-Medium;
        font-size: 0.28rem;
        color: #ffffff;
        line-height: 0.38rem;
        position: relative;
        margin-bottom: 0.4rem;
        left: -0.2rem;
        text-align: left;
        padding: 0.5rem auto;
}

.programmeOneIndex p {
        width: 5.98rem;
        margin: auto;
        padding: 0.3rem 0;
}

.programmeOneIndex i:nth-child(1) {
        width: 0;
        height: 0;
        border-bottom: 0.1rem solid #2846c2;
        border-left: 0.16rem solid transparent;
        position: absolute;
        left: 0;
        top: -0.095rem;
}

.programmeOneIndex i:nth-child(2) {
        width: 0;
        height: 0;
        border-bottom: 0.1rem solid #2846c2;
        border-right: 0.16rem solid transparent;
        position: absolute;
        right: 0;
        top: -0.095rem;
}

.programmeOneDoor div:nth-child(2) {
        width: 4.4rem;
        heiight: 1.9rem;
        font-family: PingFangSC-Regular;
        font-size: 0.24rem;
        color: #81899e;
        line-height: 0.38rem;
        margin-top: 0.4rem;
        margin-left: 0.48rem;
}

.programmeOneText p:nth-child(1) {
        font-family: PingFangSC-Semibold;
        font-size: 0.36rem;
        color: #5880f3;
        margin-top: 0.2rem;
        margin-left: 0.48rem;
}

.programmeOneText div p:nth-child(1) {
        font-family: PingFangSC-Regular;
        font-size: 0.24rem;
        color: #81899e;
        line-height: 0.38rem;
        margin: 0.2rem 0 0.4rem 0.48rem;
        text-align: justify;
}

.programmeOneText {
        width: 6.9rem;
        padding-bottom: 0.4rem;
        background: #ffffff;
        border: 0.02rem solid #e5e8f0;
}

.programmeOnePlan {
        width: 6.9rem;
        background: #ffffff;
        border: 1px solid #e5e8f0;
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
}

.programmeOnePlan p {
        width: 6rem;
        margin: 0.1rem auto;
        display: flex;
        justify-content: space-between;
        line-height: 0.4rem;
}

.programmeOnePlan p:nth-child(1) span:nth-child(1) {
        font-family: PingFangSC-Regular;
        font-size: 0.26rem;
        color: #42464d;
}

.programmeOnePlan p:nth-child(1) span:nth-child(2) {
        font-family: PingFangSC-Light;
        font-size: 0.4rem;
        color: #42464d;
}

.programmeOnePlan p span:nth-child(1) {
        opacity: 0.4;
        font-family: PingFangSC-Regular;
        font-size: 0.22rem;
        color: #4c4c4c;
        width: 3rem;
}

.judgeDefault {
        opacity: 0.4;
        font-family: PingFangSC-Regular;
        font-size: 0.22rem;
        color: #4c4c4c;
}

.judgeSuccess {
        opacity: 0.4;
        font-family: PingFangSC-Regular;
        font-size: 0.22rem;
        color: #70caa8;
}

.judgeError {
        opacity: 0.4;
        font-family: PingFangSC-Regular;
        font-size: 0.22rem;
        color: #e64b4b;
}

.programmeOneIndexTwo {
        width: 7.26rem;
        background: #7bb88e;
        font-family: PingFangSC-Medium;
        font-size: 0.28rem;
        color: #ffffff;
        line-height: 0.38rem;
        position: relative;
        margin-bottom: 0.4rem;
        left: -0.2rem;
        text-align: left;
}

.programmeOneIndexTwo p {
        width: 5.98rem;
        margin: auto;
        padding: 0.3rem 0;
        text-align: justify;
}

.programmeOneIndexTwo i:nth-child(1) {
        width: 0;
        height: 0;
        border-bottom: 0.1rem solid #3d7454;
        border-left: 0.16rem solid transparent;
        position: absolute;
        left: 0;
        top: -0.095rem;
}

.programmeOneIndexTwo i:nth-child(2) {
        width: 0;
        height: 0;
        border-bottom: 0.1rem solid #3d7454;
        border-right: 0.16rem solid transparent;
        position: absolute;
        right: 0;
        top: -0.095rem;
}

.programmeOneIndexThree {
        width: 7.26rem;
        background: #f18585;
        font-family: PingFangSC-Medium;
        font-size: 0.28rem;
        color: #ffffff;
        line-height: 0.38rem;
        position: relative;
        margin-bottom: 0.4rem;
        left: -0.2rem;
        text-align: left;
}

.programmeOneIndexThree p {
        width: 5.98rem;
        margin: auto;
        padding: 0.3rem 0;
}

.programmeOneIndexThree i:nth-child(1) {
        width: 0;
        height: 0;
        border-bottom: 0.1rem solid #a74844;
        border-left: 0.16rem solid transparent;
        position: absolute;
        left: 0;
        top: -0.095rem;
}

.programmeOneIndexThree i:nth-child(2) {
        width: 0;
        height: 0;
        border-bottom: 0.1rem solid #a74844;
        border-right: 0.16rem solid transparent;
        position: absolute;
        right: 0;
        top: -0.095rem;
}

.programmeOneIndexFour {
        width: 7.26rem;
        background: #7c72b7;
        font-family: PingFangSC-Medium;
        font-size: 0.28rem;
        color: #ffffff;
        line-height: 0.38rem;
        position: relative;
        margin-bottom: 0.4rem;
        left: -0.2rem;
        text-align: left;
}

.programmeOneIndexFour p {
        margin: auto;
        padding: 0.3rem 0;
}

.programmeOneIndexFour i:nth-child(1) {
        width: 0;
        height: 0;
        border-bottom: 0.1rem solid #3d3469;
        border-left: 0.16rem solid transparent;
        position: absolute;
        left: 0;
        top: -0.095rem;
}

.programmeOneIndexFour i:nth-child(2) {
        width: 0;
        height: 0;
        border-bottom: 0.1rem solid #3d3469;
        border-right: 0.16rem solid transparent;
        position: absolute;
        right: 0;
        top: -0.095rem;
}

.programmeOneIndexFive {
        width: 7.26rem;
        background: #4a5970;
        font-family: PingFangSC-Medium;
        font-size: 0.28rem;
        color: #ffffff;
        line-height: 0.38rem;
        position: relative;
        margin-bottom: 0.4rem;
        left: -0.2rem;
        text-align: left;
}

.programmeOneIndexFive p {
        width: 5.98rem;
        margin: auto;
        padding: 0.3rem 0;
}

.programmeOneIndexFive i:nth-child(1) {
        width: 0;
        height: 0;
        border-bottom: 0.1rem solid #202f50;
        border-left: 0.16rem solid transparent;
        position: absolute;
        left: 0;
        top: -0.095rem;
}

.programmeOneIndexFive i:nth-child(2) {
        width: 0;
        height: 0;
        border-bottom: 0.1rem solid #202f50;
        border-right: 0.16rem solid transparent;
        position: absolute;
        right: 0;
        top: -0.095rem;
}

.programmeFoot {
        width: 6.9rem;
        background: #ffffff;
        box-shadow: 0 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.09),
                0 0.02rem 0.04rem 0 rgba(0, 0, 0, 0.15);
        border-radius: 0.08rem;
        margin: 0.4rem auto;
}

.programmeFootImg {
        width: 6.9rem;
        height: 3.78rem;
        border-radius: 0.08rem;
}

.programmeFootImg img {
        width: 6.9rem;
        height: 3.78rem;
        border-radius: 0.08rem;
}

.programmeFootTitle {
        padding-left: 0.4rem;
}

.programmeFootText {
        padding-left: 0.4rem;
        padding-bottom: 0.4rem;
        font-family: PingFangSC-Medium;
        font-size: 0.28rem;
        color: #4c4c4c;
}

.qualityFootText p {
        font-family: PingFangSC-Regular;
        font-size: 0.28rem;
        color: #4c4c4c;
        line-height: 0.38rem;
        margin: 0.4rem 0 0;
        width: 5.98rem;
}

.qualityFootTitle span {
        width: 5.9rem;
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #4c4c4c;
        margin: 0.3rem 0 0;
        display: inline-block;
}

.programmeFootHr {
        width: 6.3rem;
        margin: 0.6rem auto 0.6rem;
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 0.22rem;
        color: #9e9e9e;
}

.el-progress-bar__outer {
        height: 0.1rem !important;
}

.el-progress-bar__innerText {
        display: none !important;
}

.el-progress.is-success .el-progress-bar__inner {
        background: #70caa8;
        border-radius: 2rem;
}

/*.programmeStage .el-step__head.is-text {*/
/*width: 0.3rem;*/
/*height: 0.3rem;*/
/*line-height: 0.4rem;*/
/*font-family: PingFangSC-Semibold;*/
/*font-size: 0.2rem;*/
/*!*color: #FFFFFF;*!*/
/*!*background: #5880F3;*!*/
/*}*/

/*.programmeStage .el-step__head.is-text {*/
/*!*border-color: #5880F3;*!*/
/*margin-left: 0.06rem;*/
/*}*/

/*.programmeStage .el-step__line.is-horizontal {*/
/*top: 0.18rem;*/
/*height: 0.02rem;*/
/*left: 0.44rem;*/
/*right: 0;*/
/*width: 0.7rem !important;*/
/*}*/

/*.programmeStage .el-step__line-inner {*/
/*border-top: 0 !important;*/
/*width: 100% !important;*/
/*}*/

/*.programmeStage .el-step__icon {*/
/*line-height: 0.32rem;*/
/*}*/

/*.programmeStage .el-step__title {*/
/*font-size: 0.24rem;*/
/*}*/

/*.programmeStage .el-badge__content, .el-message__group p, .el-steps.is-horizontal, .el-tabs__nav, .el-tag, .el-time-spinner, .el-tree-node, .el-upload-list__item-name {*/
/*white-space: pre-wrap;*/
/*width: 5.4rem;*/
/*margin: 0.4rem auto;*/
/*}*/

/*.programmeStage .el-step.is-horizontal, .el-step.is-vertical .el-step__head, .el-step.is-vertical .el-step__main, .el-step__line {*/
/*width: 1.07rem !important;*/
/*}*/

.el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 4.48rem;
        margin: 0;
}

/*.el-carousel__item:nth-child(2n) {*/
/*background-color: #99a9bf;*/
/*}*/
/*.el-carousel__item:nth-child(2n+1) {*/
/*background-color: #d3dce6;*/
/*}*/
.el-carousel__container {
        height: 4.48rem;
}

.el-carousel__indicators {
        display: none;
}

.gbDefulat {
        display: inline-block;
        border: 1px solid #70caa8;
        border-radius: 2rem;
        font-family: PingFangSC-Regular;
        font-size: 0.2rem;
        color: #70caa8;
        text-align: center;
        float: right;
        padding: 0 0.2rem 0 0.2rem;
}

.gbError {
        display: inline-block;
        border: 1px solid #e64b4b;
        border-radius: 2rem;
        font-family: PingFangSC-Regular;
        font-size: 0.2rem;
        color: #e64b4b;
        text-align: center;
        float: right;
        padding: 0 0.2rem 0 0.2rem;
}

.lunDiv {
        width: 100%;
        height: 4.48rem;
        position: relative;
}

.lunModule {
        background: rgba(0, 0, 0, 0.7);
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
</style>


<!--<template>-->
<!--<div class='programme'>-->
<!--<header class='programmeTop'>-->
<!--<i></i>-->
<!--<i></i>-->
<!--<article class='programmeTopImg'>-->
<!--<img :src='programmeNewData.houseImg ? programmeNewData.houseImg : this.$url.error_img'>-->
<!--<div class='programmeTopBar'>-->
<!--<p>{{programmeNewData.houseName}}</p>-->
<!--<p>规划落实评测报告</p>-->
<!--<p>{{programmeNewData.date}}</p>-->
<!--</div>-->
<!--</article>-->
<!--<article class='programmeTopText'>-->
<!--<div class='programmeTopLv'>-->
<!--<p>{{programmeNewData.presentLv ? programmeNewData.presentLv : '无'}}</p>-->
<!--<p>当前阶段评级</p>-->
<!--</div>-->
<!--<div class='programmeTopLv2'>-->
<!--<p>{{programmeNewData.overallLv ? programmeNewData.overallLv : '无'}}</p>-->
<!--<p>楼盘总体落实评级</p>-->
<!--</div>-->
<!--<div class="programmeClear"></div>-->
<!--<p-->
<!--style='text-align:center;margin-top:0.4rem;font-family: PingFangSC-Regular;font-size: 0.22rem;color: #9E9E9E;'>-->
<!--* 评级是由鹰眼鉴房的评分数值综合评定<br/>最高评级为S+，共划分为7个等级</p>-->
<!--</article>-->
<!--</header>-->

<!--<article>-->
<!--<section>-->
<!--<div class='programmeHr'>-->
<!--<i></i>-->
<!--<img src='../../../static/gray.svg'>-->
<!--<span>规划落实进度</span>-->
<!--<img src='../../../static/gray.svg'>-->
<!--<i></i>-->
<!--</div>-->
<!--</section>-->
<!--<section>-->
<!--<div class="programmeStage">-->
<!--<div class="stageVessel">-->
<!--<div class="stageIcon">-->
<!--<span :class='["stageNum",{"stageActiveNum":this.programmeNewData.stage >= "1"}]'>1<i></i>-->
<!--</span>-->
<!--<span :class='["stageSum",{"stageActiveSum":this.programmeNewData.stage >= "1"}]'>阶段一</span>-->
<!--</div>-->
<!--<div class="stageIcon">-->
<!--<span :class='["stageNum",{"stageActiveNum":this.programmeNewData.stage >= "2"}]'>2<i></i>-->
<!--</span>-->
<!--<span :class='["stageSum",{"stageActiveSum":this.programmeNewData.stage >= "2"}]'>阶段二</span></div>-->
<!--<div class="stageIcon">-->
<!--<span :class='["stageNum",{"stageActiveNum":this.programmeNewData.stage >= "3"}]'>3<i></i>-->
<!--</span>-->
<!--<span :class='["stageSum",{"stageActiveSum":this.programmeNewData.stage >= "3"}]'>阶段三</span></div>-->
<!--<div class="stageIcon">-->
<!--<span :class='["stageNum",{"stageActiveNum":this.programmeNewData.stage >= "4"}]'>4<i v-if="false"></i>-->
<!--</span>-->
<!--<span :class='["stageSum",{"stageActiveSum":this.programmeNewData.stage >= "4"}]'>阶段四</span>-->
<!--</div>-->
<!--<div class="stageIcon">-->
<!--<span :class='["stageNum",{"stageActiveNum":this.programmeNewData.stage >= "5"}]'>5<i></i></span>-->
<!--<span :class='["stageSum",{"stageActiveSum":this.programmeNewData.stage >= "5"}]'>阶段五</span>-->
<!--</div>-->
<!--<div class="stageIcon">-->
<!--<span :class='["stageNum",{"stageActiveNum":this.programmeNewData.stage >= "6"}]'>6<i v-if="false"></i>-->
<!--</span>-->
<!--<span :class='["stageSum",{"stageActiveSum":this.programmeNewData.stage >= "6"}]'>阶段六</span>-->
<!--</div>-->
<!--</div>-->
<!--</div>-->
<!--</section>-->
<!--</article>-->

<!--<article v-if="programmeNewData.appraise">-->
<!--<div class='programmeHr'>-->
<!--<i></i><img src='../../../static/gray.svg'>-->
<!--<span>总体评价</span>-->
<!--<img src='../../../static/gray.svg'>-->
<!--<i></i>-->
<!--</div>-->
<!--<div class='programmeOveralls' v-html="programmeNewData.appraise"></div>-->
<!--</article>-->

<!--<article v-for="(val,index) in programmeNewData.evaluatingStage">-->
<!--<section>-->
<!--<div class='programmeHr'>-->
<!--<i></i>-->
<!--<img src='../../../static/gray.svg'>-->
<!--<span>规划落实评测</span>-->
<!--<img src='../../../static/gray.svg'>-->
<!--<i></i>-->
<!--</div>-->
<!--</section>-->
<!--<div class='programmeOne'>-->
<!--<div class='programmeOneTop'>-->
<!--<div class='programmeOneTitle'>-->
<!--<span>-->
<!--<p :class="[-->
<!--'programmeOneTitle_lv',-->
<!--$class_name_ftn.classNames(val.lv)-->
<!--]">{{$class_name_ftn.storeNam(val.lv)}}-->
<!--</p>-->
<!--<p class="programmeOneTitle_num">{{val.stage}}</p>-->
<!--</span>-->
<!--<span>{{val.evaluatingType}}</span>-->
<!--</div>-->
<!--<div class="programmeOneIndex">-->
<!--<i></i><i></i>-->
<!--<p>{{val.text}}</p>-->
<!--</div>-->
<!--</div>-->
<!--<section>-->
<!--<div v-for="(item,index) in val.stageData">-->
<!--<p class="sixStage" v-if="item.acceptance">{{item.acceptance}}</p>-->
<!--<div class='programmeOneText'-->
<!--v-for="(value,index) in item.stageList">-->
<!--<p class="firstStage_name">{{value.name}}</p>-->
<!--<div>-->
<!--<p class="firstStage_list" v-for="(val,key) in value.list">-->
<!--<span>{{val.type}}</span>-->
<!--<span :class="$class_name_ftn.judgeClass(val.accord)">{{$class_name_ftn.gbJudge(val.accord)}}</span>-->
<!--</p>-->
<!--</div>-->
<!--</div>-->
<!--</div>-->
<!--</section>-->
<!--<section>-->
<!--<div class='last-lunImg'>-->
<!--<el-carousel :interval="5000" arrow="always">-->
<!--<el-carousel-item v-for="(item,index) in val.lunNum" :key="index">-->
<!--<div class="lunDiv"><img :src="item.img" alt="">-->
<!--<div class="lunModule">-->
<!--<span>{{item.inner}}</span>-->
<!--<span>{{index + 1}}/{{val.lunNum.length}}</span>-->
<!--</div>-->
<!--</div>-->
<!--</el-carousel-item>-->
<!--</el-carousel>-->
<!--</div>-->
<!--</section>-->
<!--</div>-->
<!--</article>-->
<!--</div>-->
<!--</template>-->
<!--<script>-->

<!--export default {-->
<!--data(){-->
<!--return {-->
<!--programmeNewData: {-->
<!--evaluatingStage: {-->
<!--firstStage: {-->
<!--lv: ''-->
<!--}-->
<!--}-->
<!--},-->
<!--}-->
<!--},-->
<!--created(){-->
<!--try {-->
<!--parent.document.getElementsByClassName('headline')[0].style.display = 'none';-->
<!--parent.document.querySelector('img').style.display = 'none';-->
<!--if (parent.parent.localStorage.is == 'true') {-->
<!--let commit = this.$store.commit;-->
<!--commit('set_motai', '0');-->
<!--commit('set_school_class', 'animated bounceIn');-->
<!--commit('change_motai');-->
<!--this.$store.commit('close_show');-->
<!--} else {-->
<!--return;-->
<!--}-->
<!--}-->
<!--catch (e) {-->

<!--}-->
<!--},-->
<!--mounted(){-->
<!--this.get_data();-->
<!--},-->
<!--methods: {-->
<!--get_data(){-->
<!--let this_ = this;-->
<!--//        this.$url.httpRequest + 'planPracticable/' + this.$route.params.id-->
<!--this.$Axios.get(this.$url.httpRequest + 'planPracticable/' + this.$route.params.id).then(res => {-->
<!--let data = JSON.parse(this_.$getDAesString(res, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq"));-->
<!--this_.programmeNewData = data.response.data;-->
<!--console.log(this_.programmeNewData);-->
<!--}).catch(err => console.log(err));-->
<!--},-->
<!--}-->
<!--}-->
<!--</script>-->
<!--<style>-->
<!--.programmeClear {-->
<!--clear: both-->
<!--}-->

<!--.programme {-->
<!--max-width: 15rem;-->
<!--background: #f2f3f7;-->
<!--border-top: 2px solid #E0E0E0;-->
<!--padding-top: 0.42rem;-->
<!--padding-bottom: 1rem;-->
<!--}-->

<!--.programmeTop {-->
<!--width: 6.9rem;-->
<!--height: 8rem;-->
<!--margin: auto;-->
<!--box-shadow: 0 0.02rem 0.12rem 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);-->
<!--border-radius: 6px;-->
<!--position: relative-->
<!--}-->

<!--.programmeTop .programmeTopImg {-->
<!--width: 6.9rem;-->
<!--height: 4.4rem;-->
<!--position: relative;-->
<!--border-radius: 6px-->
<!--}-->

<!--.programmeTop i:nth-child(1) {-->
<!--width: 0;-->
<!--height: 0;-->
<!--border-top: 0.3rem solid transparent;-->
<!--border-left: 0.3rem solid #f2f3f7;-->
<!--border-bottom: 0.3rem solid transparent;-->
<!--position: absolute;-->
<!--z-index: 1;-->
<!--left: -0.05rem;-->
<!--top: 4.1rem-->
<!--}-->

<!--.programmeTop i:nth-child(2) {-->
<!--width: 0;-->
<!--height: 0;-->
<!--border-top: 0.3rem solid transparent;-->
<!--border-right: 0.3rem solid #f2f3f7;-->
<!--border-bottom: 0.3rem solid transparent;-->
<!--position: absolute;-->
<!--z-index: 1;-->
<!--right: -0.05rem;-->
<!--top: 4.1rem-->
<!--}-->

<!--.programmeTop .programmeTopImg img {-->
<!--width: 100%;-->
<!--height: 4.4rem;-->
<!--border-radius: 6px-->
<!--}-->

<!--.programmeTop .programmeTopBar {-->
<!--width: 6.9rem;-->
<!--height: 4.4rem;-->
<!--background: rgba(0, 0, 0, 0.50);-->
<!--position: absolute;-->
<!--top: 0;-->
<!--border-radius: 6px-->
<!--}-->

<!--.programmeTop .programmeTopBar p:nth-child(1) {-->
<!--font-family: PingFangSC-Semibold;-->
<!--font-size: 0.6rem;-->
<!--color: #FFFFFF;-->
<!--text-align: center;-->
<!--margin-top: 1.4rem;-->
<!--}-->

<!--.programmeTop .programmeTopBar p:nth-child(2) {-->
<!--font-family: PingFangSC-Light;-->
<!--font-size: 0.36rem;-->
<!--color: #FFFFFF;-->
<!--line-height: 0.36rem;-->
<!--text-align: center;-->
<!--margin-top: 0.16rem;-->
<!--}-->

<!--.programmeTop .programmeTopBar p:nth-child(3) {-->
<!--font-family: PingFangSC-Light;-->
<!--font-size: 0.2rem;-->
<!--color: #FFFFFF;-->
<!--line-height: 0.2rem;-->
<!--text-align: center;-->
<!--margin-top: 0.32rem;-->
<!--}-->

<!--.programmeTop .programmeTopText {-->
<!--width: 6.9rem;-->
<!--height: 3.2rem;-->
<!--background: #fff;-->
<!--padding-top: 0.4rem;-->
<!--border-radius: 6px-->
<!--}-->

<!--.programmeTop .programmeTopText .programmeTopLv {-->
<!--float: left;-->
<!--width: 2.4rem;-->
<!--height: 1.8rem;-->
<!--margin-left: 0.6rem;-->
<!--display: flex;-->
<!--flex-flow: column;-->
<!--}-->

<!--.programmeTop .programmeTopText .programmeTopLv p:nth-child(1) {-->
<!--font-family: PingFangSC-Thin;-->
<!--font-size: 0.8rem;-->
<!--color: #5880F3;-->
<!--line-height: 0.8rem;-->
<!--text-align: center;-->
<!--margin-top: 0.2rem;-->
<!--font-weight: 200;-->
<!--}-->

<!--.programmeTop .programmeTopText .programmeTopLv p:nth-child(2) {-->
<!--font-family: PingFangSC-Regular;-->
<!--font-size: 0.26rem;-->
<!--color: #42464D;-->
<!--text-align: center;-->
<!--margin-top: 0.2rem;-->
<!--}-->

<!--.programmeTop .programmeTopText .programmeTopLv2 {-->
<!--float: left;-->
<!--width: 3.64rem;-->
<!--height: 1.8rem;-->
<!--margin-left: 0.2rem;-->
<!--}-->

<!--.programmeTop .programmeTopText .programmeTopLv2 p:nth-child(1) {-->
<!--font-family: PingFangSC-Thin;-->
<!--font-size: 0.8rem;-->
<!--color: #5880F3;-->
<!--line-height: 0.8rem;-->
<!--text-align: center;-->
<!--margin-top: 0.2rem;-->
<!--font-weight: 200;-->
<!--}-->

<!--.programmeTop .programmeTopText .programmeTopLv2 p:nth-child(2) {-->
<!--font-family: PingFangSC-Regular;-->
<!--font-size: 0.26rem;-->
<!--color: #42464D;-->
<!--text-align: center;-->
<!--margin-top: 0.2rem;-->
<!--}-->

<!--.programmeHr {-->
<!--width: 6.9rem;-->
<!--height: 0.44rem;-->
<!--margin: auto;-->
<!--line-height: 0.44rem;-->
<!--text-align: center;-->
<!--display: flex;-->
<!--justify-content: space-between;-->
<!--margin-top: 0.8rem;-->
<!--margin-bottom: 0.4rem;-->
<!--font-family: PingFangSC-Light;-->
<!--font-size: 0.32rem;-->
<!--color: #42464D;-->
<!--}-->

<!--.programmeHr i {-->
<!--display: inline-block;-->
<!--width: 1.5rem;-->
<!--height: 0;-->
<!--border-top: 0.02rem solid #42464D;-->
<!--margin-top: 0.2rem-->
<!--}-->

<!--.programmeRate {-->
<!--width: 6.9rem;-->
<!--height: 2.5rem;-->
<!--margin: auto;-->
<!--}-->

<!--.programmeRate div {-->
<!--width: 2.04rem;-->
<!--height: 2.3rem;-->
<!--background: #FFFFFF;-->
<!--box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);-->
<!--border-radius: 0.08rem;-->
<!--text-align: center;-->
<!--float: left;-->
<!--margin: 0.13rem 0.13rem 0.13rem-->
<!--}-->

<!--.defaults {-->
<!--background: #E0E0E0 !important;-->
<!--}-->

<!--.green {-->
<!--background: #70CAA8 !important;-->
<!--}-->

<!--.blue {-->
<!--background: #5880F3 !important;-->
<!--}-->

<!--.pu {-->
<!--background: #879EC4 !important;-->
<!--}-->

<!--.red {-->
<!--background: #FE6E6E !important;-->
<!--}-->

<!--.programmeRate div p {-->
<!--text-align: center;-->
<!--font-family: PingFangSC-Regular;-->
<!--font-size: 0.26rem;-->
<!--color: #4C4C4C;-->
<!--margin-top: 0.2rem-->
<!--}-->

<!--.programmeOveralls {-->
<!--width: 6.9rem;-->
<!--margin: auto;-->
<!--padding-bottom: 0.4rem;-->
<!--text-align: center;-->
<!--background-image: linear-gradient(-180deg, #5880F3 0%, #5311FD 100%);-->
<!--box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);-->
<!--border-radius: 0.08rem;-->
<!--}-->

<!--.programmeOveralls p {-->
<!--width: 5.98rem;-->
<!--display: inline-block;-->
<!--margin: 0.25rem auto 0.1rem;-->
<!--font-family: PingFangSC-Regular;-->
<!--font-size: 0.34rem;-->
<!--color: #FFFFFF;-->
<!--letter-spacing: 0;-->
<!--line-height: 0.6rem;-->
<!--text-align: left-->
<!--}-->

<!--.programmeOne {-->
<!--width: 6.9rem;-->
<!--margin: auto;-->
<!--background: #FFFFFF;-->
<!--box-shadow: 0 1px 0.12rem 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);-->
<!--border-radius: 0.08rem;-->
<!--margin-top: 0.6rem-->
<!--}-->

<!--.programmeOneTop {-->
<!--width: 6.9rem;-->
<!--position: relative;-->
<!--}-->

<!--.programmeOne > div {-->
<!--border: 1px solid #f2f3f7-->
<!--}-->

<!--.programmeOneTitle {-->
<!--width: 2.9rem;-->
<!--margin: 0.4rem auto;-->
<!--position: relative;-->
<!--padding-left: 0.5rem;-->
<!--}-->

<!--.programmeOneTitle_lv {-->
<!--display: block;-->
<!--width: 0.6rem;-->
<!--height: 0.6rem;-->
<!--background: red;-->
<!--color: #fff;-->
<!--border-radius: 0.6rem;-->
<!--line-height: 0.6rem;-->
<!--text-align: center;-->
<!--margin: auto;-->
<!--}-->

<!--.programmeOneTitle_num {-->
<!--display: block;-->
<!--font-family: PingFangSC-Regular, '微软雅黑';-->
<!--font-size: 0.2rem;-->
<!--color: #4C4C4C;-->
<!--text-align: center;-->
<!--}-->

<!--.programmeOneTitle span:nth-child(1) {-->
<!--width: 1.64rem;-->
<!--height: 1.31rem;-->
<!--line-height: 0.592rem;-->
<!--margin-right: 0.2rem;-->
<!--position: absolute;-->
<!--top: -0.72rem;-->
<!--left: -1.45rem;-->
<!--background-image: url('http://oxrgdeqd8.bkt.clouddn.com/bg_guihuanluoshi_pingji@3x.png');-->
<!--background-size: cover;-->
<!--padding-top: 0.35rem;-->
<!--}-->

<!--.programmeOneTitle span img {-->
<!--width: 0.7rem;-->
<!--height: 0.7rem-->
<!--}-->

<!--.programmeOneTitle span:nth-child(2) {-->
<!--display: inline-block;-->
<!--line-height: 0.7rem;-->
<!--font-family: PingFangSC-Thin;-->
<!--font-size: 0.36rem;-->
<!--color: #42464D;-->
<!--}-->

<!--.programmeOneTitleImg {-->
<!--margin: 0.19rem auto;-->
<!--width: 0.4rem;-->
<!--height: 0.36rem;-->
<!--background-image: linear-gradient(-180deg, #AB91FA 0%, #2A61FF 100%);-->
<!--}-->

<!--.programmeOneIndex {-->
<!--width: 7.26rem;-->
<!--background: #5880F3;-->
<!--font-family: PingFangSC-Medium;-->
<!--font-size: 0.28rem;-->
<!--color: #FFFFFF;-->
<!--line-height: 0.38rem;-->
<!--position: relative;-->
<!--left: -0.2rem;-->
<!--text-align: left;-->
<!--margin-bottom: 0.4rem;-->
<!--}-->

<!--.programmeOneIndex p {-->
<!--width: 5.98rem;-->
<!--margin: auto;-->
<!--padding: 0.4rem;-->
<!--}-->

<!--.programmeOneIndex i:nth-child(1) {-->
<!--width: 0;-->
<!--height: 0;-->
<!--border-bottom: 0.1rem solid #2846c2;-->
<!--border-left: 0.16rem solid transparent;-->
<!--position: absolute;-->
<!--left: 0;-->
<!--top: -0.095rem-->
<!--}-->

<!--.programmeOneIndex i:nth-child(2) {-->
<!--width: 0;-->
<!--height: 0;-->
<!--border-bottom: 0.1rem solid #2846c2;-->
<!--border-right: 0.16rem solid transparent;-->
<!--position: absolute;-->
<!--right: 0;-->
<!--top: -0.095rem-->
<!--}-->

<!--.programmeOneDoor div:nth-child(2) {-->
<!--width: 4.4rem;-->
<!--heiight: 1.9rem;-->
<!--font-family: PingFangSC-Regular;-->
<!--font-size: 0.24rem;-->
<!--color: #81899E;-->
<!--line-height: 0.38rem;-->
<!--margin-top: 0.4rem;-->
<!--margin-left: 0.48rem-->
<!--}-->

<!--.sixStage {-->
<!--font-family: PingFangSC-Semibold, '微软雅黑';-->
<!--font-size: 0.36rem;-->
<!--color: #5880F3;-->
<!--margin: 0.2rem 0 0.2rem 0.48rem;-->
<!--}-->

<!--.programmeOneText .firstStage_name {-->
<!--font-family: PingFangSC-Regular;-->
<!--font-size: 0.26rem;-->
<!--color: #42464D;-->
<!--margin-top: 0.2rem;-->
<!--margin-left: 0.48rem-->
<!--}-->

<!--.programmeOneText .firstStage_list {-->
<!--font-family: PingFangSC-Regular;-->
<!--font-size: 0.24rem;-->
<!--color: #81899E;-->
<!--line-height: 0.38rem;-->
<!--margin: 0.2rem 0.48rem 0.2rem 0.48rem;-->
<!--display: flex;-->
<!--justify-content: space-between;-->
<!--}-->

<!--.programmeOneText {-->
<!--width: 6.9rem;-->
<!--padding-bottom: 0.4rem;-->
<!--background: #FFFFFF;-->
<!--border: 0.02rem solid #E5E8F0-->
<!--}-->

<!--.programmeOnePlan {-->
<!--width: 6.9rem;-->
<!--background: #FFFFFF;-->
<!--border: 1px solid #E5E8F0;-->
<!--padding-top: 0.4rem;-->
<!--padding-bottom: 0.4rem-->
<!--}-->

<!--.programmeOnePlan p {-->
<!--width: 6rem;-->
<!--margin: 0.1rem auto;-->
<!--display: flex;-->
<!--justify-content: space-between;-->
<!--line-height: 0.4rem-->
<!--}-->

<!--.programmeOnePlan p:nth-child(1) span:nth-child(1) {-->
<!--font-family: PingFangSC-Regular;-->
<!--font-size: 0.26rem;-->
<!--color: #42464D;-->
<!--}-->

<!--.programmeOnePlan p:nth-child(1) span:nth-child(2) {-->
<!--font-family: PingFangSC-Light;-->
<!--font-size: 0.4rem;-->
<!--color: #42464D;-->
<!--}-->

<!--.programmeOnePlan p span:nth-child(1) {-->

<!--font-family: PingFangSC-Regular;-->
<!--font-size: 0.22rem;-->
<!--color: #4C4C4C;-->
<!--width: 3.5rem;-->
<!--}-->

<!--.judgeDefault {-->
<!--font-family: PingFangSC-Regular;-->
<!--font-size: 0.22rem;-->
<!--color: #D7DBE0;-->
<!--}-->

<!--.judgeSuccess {-->
<!--font-family: PingFangSC-Regular;-->
<!--font-size: 0.22rem;-->
<!--color: #70CAA8;-->
<!--}-->

<!--.judgeError {-->
<!--font-family: PingFangSC-Regular;-->
<!--font-size: 0.22rem;-->
<!--color: #E64B4B;-->
<!--}-->

<!--.programmeOneIndexTwo {-->
<!--width: 7.26rem;-->
<!--background: #5880F3;-->
<!--font-family: PingFangSC-Medium;-->
<!--font-size: 0.28rem;-->
<!--color: #FFFFFF;-->
<!--line-height: 0.38rem;-->
<!--position: relative;-->
<!--left: -0.2rem;-->
<!--text-align: left;-->
<!--margin-bottom: 0.4rem;-->
<!--}-->

<!--.programmeOneIndexTwo p {-->
<!--width: 5.98rem;-->
<!--margin: auto;-->
<!--padding: 0.4rem;-->
<!--}-->

<!--.programmeOneIndexTwo i:nth-child(1) {-->
<!--width: 0;-->
<!--height: 0;-->
<!--border-bottom: 0.1rem solid #2846c2;-->
<!--border-left: 0.16rem solid transparent;-->
<!--position: absolute;-->
<!--left: 0;-->
<!--top: -0.095rem-->
<!--}-->

<!--.programmeOneIndexTwo i:nth-child(2) {-->
<!--width: 0;-->
<!--height: 0;-->
<!--border-bottom: 0.1rem solid #2846c2;-->
<!--border-right: 0.16rem solid transparent;-->
<!--position: absolute;-->
<!--right: 0;-->
<!--top: -0.095rem-->
<!--}-->

<!--.programmeOneIndexThree {-->
<!--width: 7.26rem;-->
<!--background: #5880F3;-->
<!--font-family: PingFangSC-Medium;-->
<!--font-size: 0.28rem;-->
<!--color: #FFFFFF;-->
<!--line-height: 0.38rem;-->
<!--position: relative;-->
<!--left: -0.2rem;-->
<!--text-align: left;-->
<!--margin-bottom: 0.4rem;-->
<!--}-->

<!--.programmeOneIndexThree p {-->
<!--width: 5.98rem;-->
<!--margin: auto;-->
<!--padding: 0.4rem;-->
<!--}-->

<!--.programmeOneIndexThree i:nth-child(1) {-->
<!--width: 0;-->
<!--height: 0;-->
<!--border-bottom: 0.1rem solid #2846c2;-->
<!--border-left: 0.16rem solid transparent;-->
<!--position: absolute;-->
<!--left: 0;-->
<!--top: -0.095rem-->
<!--}-->

<!--.programmeOneIndexThree i:nth-child(2) {-->
<!--width: 0;-->
<!--height: 0;-->
<!--border-bottom: 0.1rem solid #2846c2;-->
<!--border-right: 0.16rem solid transparent;-->
<!--position: absolute;-->
<!--right: 0;-->
<!--top: -0.095rem-->
<!--}-->

<!--.programmeOneIndexFour {-->
<!--width: 7.26rem;-->
<!--background: #5880F3;-->
<!--font-family: PingFangSC-Medium;-->
<!--font-size: 0.28rem;-->
<!--color: #FFFFFF;-->
<!--line-height: 0.38rem;-->
<!--position: relative;-->
<!--left: -0.2rem;-->
<!--text-align: left;-->
<!--margin-bottom: 0.4rem;-->
<!--}-->

<!--.programmeOneIndexFour p {-->
<!--width: 5.98rem;-->
<!--margin: auto;-->
<!--padding: 0.4rem;-->
<!--}-->

<!--.programmeOneIndexFour i:nth-child(1) {-->
<!--width: 0;-->
<!--height: 0;-->
<!--border-bottom: 0.1rem solid #2846c2;-->
<!--border-left: 0.16rem solid transparent;-->
<!--position: absolute;-->
<!--left: 0;-->
<!--top: -0.095rem-->
<!--}-->

<!--.programmeOneIndexFour i:nth-child(2) {-->
<!--width: 0;-->
<!--height: 0;-->
<!--border-bottom: 0.1rem solid #2846c2;-->
<!--border-right: 0.16rem solid transparent;-->
<!--position: absolute;-->
<!--right: 0;-->
<!--top: -0.095rem-->
<!--}-->

<!--.programmeOneIndexFive {-->
<!--width: 7.26rem;-->
<!--background: #5880F3;-->
<!--font-family: PingFangSC-Medium;-->
<!--font-size: 0.28rem;-->
<!--color: #FFFFFF;-->
<!--line-height: 0.38rem;-->
<!--position: relative;-->
<!--left: -0.2rem;-->
<!--text-align: left;-->
<!--margin-bottom: 0.4rem;-->
<!--}-->

<!--.programmeOneIndexFive p {-->
<!--width: 5.98rem;-->
<!--margin: auto;-->
<!--padding: 0.4rem;-->
<!--}-->

<!--.programmeOneIndexFive i:nth-child(1) {-->
<!--width: 0;-->
<!--height: 0;-->
<!--border-bottom: 0.1rem solid #2846c2;-->
<!--border-left: 0.16rem solid transparent;-->
<!--position: absolute;-->
<!--left: 0;-->
<!--top: -0.095rem-->
<!--}-->

<!--.programmeOneIndexFive i:nth-child(2) {-->
<!--width: 0;-->
<!--height: 0;-->
<!--border-bottom: 0.1rem solid #2846c2;-->
<!--border-right: 0.16rem solid transparent;-->
<!--position: absolute;-->
<!--right: 0;-->
<!--top: -0.095rem-->
<!--}-->

<!--.qualityFootText p {-->
<!--font-family: PingFangSC-Regular;-->
<!--font-size: 0.28rem;-->
<!--color: #4C4C4C;-->
<!--line-height: 0.38rem;-->
<!--margin: 0.4rem 0 0;-->
<!--width: 5.98rem-->
<!--}-->

<!--.programmeStage {-->
<!--width: 6.9rem;-->
<!--height: 2.54rem;-->
<!--text-align: center;-->
<!--margin: auto;-->
<!--background: #FFFFFF;-->
<!--box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.15);-->
<!--border-radius: 4px;-->
<!--display: flex;-->
<!--flex-flow: wrap;-->
<!--}-->

<!--.programmeStage .stageVessel {-->
<!--width: 6.5rem;-->
<!--text-align: center;-->
<!--margin: 0.3rem 0.4rem 0.3rem 0.4rem;-->
<!--display: flex;-->
<!--flex-flow: wrap;-->
<!--justify-content: flex-start;-->
<!--}-->

<!--.programmeStage .stageIcon {-->
<!--width: 1.25rem;-->
<!--display: flex;-->
<!--flex-flow: column;-->
<!--text-align: center;-->
<!--height: 0.8rem;-->
<!--margin-left: 0.23rem;-->
<!--}-->

<!--.programmeStage .stageNum {-->
<!--width: 0.4rem;-->
<!--height: 0.4rem;-->
<!--background: #E0E0E0;-->
<!--display: inline-block;-->
<!--border-radius: 0.4rem;-->
<!--line-height: 0.4rem;-->
<!--text-align: center;-->
<!--color: #fff;-->
<!--margin: auto;-->
<!--position: relative;-->
<!--}-->

<!--.programmeStage .stageActiveNum {-->
<!--background: #5880F3 !important;-->
<!--}-->

<!--.programmeStage .stageActiveNum i {-->
<!--background: #5880F3 !important;-->
<!--}-->

<!--.programmeStage .stageNum i {-->
<!--width: 1.12rem;-->
<!--background: #E0E0E0;-->
<!--display: block;-->
<!--position: absolute;-->
<!--height: 0.02rem;-->
<!--left: 0.4rem;-->
<!--top: 0.2rem;-->
<!--}-->

<!--.programmeStage .stageSum {-->
<!--font-family: PingFangSC-Regular, '微软雅黑';-->
<!--font-size: 0.2rem;-->
<!--color: #E0E0E0;-->
<!--line-height: 0.2rem;-->
<!--}-->

<!--.programmeStage .stageActiveSum {-->
<!--font-family: PingFangSC-Regular, '微软雅黑';-->
<!--font-size: 0.2rem;-->
<!--color: #4C4C4C;-->
<!--line-height: 0.2rem;-->
<!--}-->

<!--.gbDefulat {-->
<!--display: inline-block;-->
<!--border: 1px solid #70CAA8;-->
<!--border-radius: 2rem;-->
<!--font-family: PingFangSC-Regular;-->
<!--font-size: 0.2rem;-->
<!--color: #70CAA8;-->
<!--text-align: center;-->
<!--float: right;-->
<!--padding: 0 0.2rem 0 0.2rem;-->
<!--}-->

<!--.gbError {-->
<!--display: inline-block;-->
<!--border: 1px solid #E64B4B;-->
<!--border-radius: 2rem;-->
<!--font-family: PingFangSC-Regular;-->
<!--font-size: 0.2rem;-->
<!--color: #E64B4B;-->
<!--text-align: center;-->
<!--float: right;-->
<!--padding: 0 0.2rem 0 0.2rem;-->
<!--}-->

<!--.lunDiv {-->
<!--width: 100%;-->
<!--height: 4.48rem;-->
<!--position: relative;-->
<!--}-->

<!--.lunDiv img {-->
<!--width: 100%;-->
<!--height: 100%;-->
<!--}-->

<!--.lunModule {-->
<!--background: rgba(0, 0, 0, 0.70);-->
<!--width: 100%;-->
<!--color: #fff;-->
<!--position: absolute;-->
<!--bottom: 0;-->
<!--display: flex;-->
<!--justify-content: space-around;-->
<!--padding: 0.26rem 0 0.26rem 0;-->
<!--}-->

<!--.lunModule span:nth-child(2) {-->
<!--display: inline-block;-->
<!--line-height: 1rem;-->
<!--}-->

<!--.lunModule span:nth-child(1) {-->
<!--display: inline-block;-->
<!--width: 4.8rem;-->
<!--}-->

<!--.last-lunImg {-->
<!--width: 6.9rem;-->
<!--}-->

<!--.el-carousel__arrow {-->
<!--border: none;-->
<!--padding: 0;-->
<!--width: 36px;-->
<!--height: 36px;-->
<!--border-radius: 50%;-->
<!--background: rgba(200, 200, 200, 0.4);-->
<!--color: #fff;-->
<!--position: absolute;-->
<!--top: 50%;-->
<!--z-index: 10;-->
<!-- -ms-transform: translateY(-50%);-->
<!--transform: translateY(-50%);-->
<!--text-align: center;-->
<!--font-size: 0.24rem;-->
<!--}-->

<!--.el-carousel__container {-->
<!--height: 4.5rem !important;-->
<!--}-->
<!--</style>-->

