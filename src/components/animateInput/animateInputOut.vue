<template>
     <div class="animateInputOut">
          <div class="g-bg-big"></div>
          <div class="g-bg">
               <img src="http://oxrgdeqd8.bkt.clouddn.com/tuanbg.png" alt="">
          </div>
          <div class="g-tit">
               <div class="g-num">{{titNum[checkNum].tit}}</div>
               <div class="g-text">
                    <p>{{titNum[checkNum].text1}}</p>
                    <p>{{titNum[checkNum].text2}}</p>
               </div>
          </div>
          <div :class="val.check" @click="checkouts(index)" v-for="(val,index) in titNum[checkNum].ine">
               <i>{{val.ch}}</i>
               <p>{{val.te}}</p>
          </div>
          <div class="g-page">
               <span>{{`${checkNum + 1}/6`}}</span>
          </div>
     </div>
</template>
<script>
export default {
     data() {
          return {
               titNum: [
                    {
                         tit: '题目一',
                         text1: "选房时，",
                         text2: "下面哪项是对的？",
                         check: 'g-check',
                         ine: [
                              {
                                   te: '售房处现场非常火爆，楼盘一定非常好',
                                   check: 'g-check',
                                   ch: 'A'
                              },
                              {
                                   te: '沙盘都是等比例的，显示的绿化面积很可信',
                                   check: 'g-check',
                                   ch: 'B'
                              },
                              {
                                   te: '小区周边规划最好参考规划局网站的公示',
                                   check: 'g-check',
                                   ch: 'C'
                              }
                         ]
                    },
                    {
                         tit: '题目二',
                         text1: "购房签订合同前，",
                         text2: "哪项是错误的？",
                         ine: [
                              {
                                   te: '查“五证”，明确楼盘是否合法',
                                   check: 'g-check',
                                   ch: 'A'
                              },
                              {
                                   te: '交房日期依据建设进度等待开发商通知',
                                   check: 'g-check',
                                   ch: 'B'
                              },
                              {
                                   te: '公摊面积有明确说明',
                                   check: 'g-check',
                                   ch: 'C'
                              }
                         ]
                    },
                    {
                         tit: '题目三',
                         text1: "验房时候，",
                         text2: "下面哪项是错误的？",
                         ine: [
                              {
                                   te: '取1-2个点测量平整度确认是否存在倾斜',
                                   check: 'g-check',
                                   ch: 'A'
                              },
                              {
                                   te: '拿垂直检测尺靠近墙壁，检查墙面有无倾斜',
                                   check: 'g-check',
                                   ch: 'B'
                              },
                              {
                                   te: '检查墙面地面有没有外露铁丝网等',
                                   check: 'g-check',
                                   ch: 'C'
                              }
                         ]
                    },
                    {
                         tit: '题目四',
                         text1: "验房墙壁检查，",
                         text2: "下面哪项错误？",
                         ine: [
                              {
                                   te: '敲击墙壁，听到沉闷的碰击声，说明墙面无空鼓。',
                                   check: 'g-check',
                                   ch: 'A'
                              },
                              {
                                   te: '外墙体边缘有些水迹，是正常情况。',
                                   check: 'g-check',
                                   ch: 'B'
                              },
                              {
                                   te: '可向墙上泼水，确认是否为防水腻子。',
                                   check: 'g-check',
                                   ch: 'C'
                              }
                         ]
                    },
                    {
                         tit: '题目五',
                         text1: "关于水电门窗验收，",
                         text2: "下面哪项是错误的？",
                         ine: [
                              {
                                   te: '向各个下水管处灌水，查看下水道排水是否迅速畅通。',
                                   check: 'g-check',
                                   ch: 'A'
                              },
                              {
                                   te: '门窗开启灵活，门与门框各边平行，隔音效果良好，说明门窗不存在问题。',
                                   check: 'g-check',
                                   ch: 'B'
                              },
                              {
                                   te: '电路验收的时候要查看下电源插座是否都能正常可用，不必通电检查。',
                                   check: 'g-check',
                                   ch: 'C'
                              }
                         ]
                    },
                    {
                         tit: '题目六',
                         text1: "签字验收时，",
                         text2: "下面哪项错误？",
                         ine: [
                              {
                                   te: '开发商要求先签字再验收，那就先签字吧！',
                                   check: 'g-check',
                                   ch: 'A'
                              },
                              {
                                   te: '超出面积需补款，要求提供当地房地产管理局出具的【住宅面积测绘报告】',
                                   check: 'g-check',
                                   ch: 'B'
                              },
                              {
                                   te: '验收时候发现问题，要求开发商维修后，重新验收没有问题再签字。',
                                   check: 'g-check',
                                   ch: 'C'
                              }
                         ]
                    }
               ],
               checkNum: 0,
               overArr: []
          }
     },
     created() {
          this.preImg();
     },
     methods: {
          //点击选项切换
          checkouts(index) {
               if (this.titNum[this.checkNum].ine[index].check == 'g-check') {
                    this.titNum[this.checkNum].ine[index].check = 'g-checks';
                    this.recordOver(this.titNum[this.checkNum].ine[index].ch);
                    this.initCheck(index);
                    this.checkouTit();
               } else {
                    this.titNum[this.checkNum].ine[index].check = 'g-check';
                    this.recordOver(this.titNum[this.checkNum].ine[index].ch);
                    this.initCheck(index);
                    this.checkouTit();
               }
          },
          //初始化选项img
          initCheck(index) {
               let len = this.titNum[this.checkNum].ine.length;
               for (let i = 0; i < len; i++) {
                    if (i == index) {
                         continue;
                    } else {
                         this.titNum[this.checkNum].ine[i].check = 'g-check'
                    }
               }
          },
          //预加载选项图片
          preImg() {
               let img = document.createElement('img');
               img.src = 'http://oxrgdeqd8.bkt.clouddn.com/xiugai-xianzekuang.png';
               img.style.display = 'none';
               document.body.appendChild(img);
          },
          //点击切换题目
          checkouTit() {
               if (this.checkNum < 5) {
                    setTimeout(() => {
                         this.checkNum++;
                    }, 200);
               } else {
                    this.$router.push({
                         path: '/animateInputLogin',
                         query: {
                              arr: JSON.stringify(this.overArr)
                         }
                    });
               }
          },
          //记录答案
          recordOver(data) {
               this.overArr.push(data);
          }
     }
}
</script>
<style scoped>

.animateInputOut {
      position: relative;
      width: 7.5rem;
      margin: auto;
      overflow: hidden;
      background: #2c75e9;
      /* height: 100vh; */
}

.g-bg-big {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url("http://oxrgdeqd8.bkt.clouddn.com/bg.png");
      z-index: 0;
}

.g-bg {
      width: 100%;
      position: absolute;
      top: 0;
}

.g-bg img {
      width: 100%;
}

.g-tit {
      position: relative;
      margin: 0.85rem auto 0.25rem;
      width: 6.3rem;
      height: 3.74rem;
      background-image: url("http://oxrgdeqd8.bkt.clouddn.com/chuanghu.png");
      background-size: cover;
}

.g-num {
      position: relative;
      margin: auto;
      width: 1.39rem;
      height: 0.62rem;
      border: 0.06rem #474747 solid;
      text-align: center;
      line-height: 0.62rem;
      font-size: 0.3rem;
      font-family: PingFangSC-Semibold;
      color: rgba(71, 71, 71, 1);
      background: #fff;
      font-weight: 600;
}

.g-text {
      margin-top: 0.4rem;
      margin-left: 1.32rem;
      text-align: center;
      font-size: 0.4rem;
      font-family: PingFangSC-Medium;
      color: rgba(255, 255, 255, 1);
      width: 3.98rem;
}
.g-text p {
      width: 100%;
      text-align: center;
}
.g-check {
      position: relative;
      display: flex;
      margin: 0 auto 0.24rem;
      width: 5.85rem;
      height: 1.95rem;
      background: url("http://oxrgdeqd8.bkt.clouddn.com/xiugai-weixuanze.png");
      background-size: cover;
}

.g-checks {
      position: relative;
      margin: 0 auto 0.24rem;
      display: flex;
      width: 5.85rem;
      height: 1.95rem;
      background: url("http://oxrgdeqd8.bkt.clouddn.com/xiugai-xianzekuang.png");
      background-size: cover;
}

.g-check i,
.g-checks i {
      position: absolute;
      display: inline-block;
      top: 0.82rem;
      left: 0.23rem;
      font-size: 0.56rem;
      font-family: PingFangSC-Medium;
      color: rgba(255, 255, 255, 1);
      line-height: 0.42rem;
      font-weight: 900;
      -webkit-text-stroke: 2px #474747;
}

.g-check p,
.g-checks p {
      position: relative;
      margin: auto;
      margin-left: 1.08rem;
      width: 4.5rem;
      font-size: 0.33rem;
      font-family: PingFangSC-Medium;
      color: rgba(33, 33, 33, 1);
      line-height: 0.45rem;
}

.g-page {
      margin-bottom: 0.3rem;
      font-size: 0.3rem;
      font-weight: 600;
      font-family: FZLTTHJW--GB1-0;
      color: rgba(255, 255, 255, 1);
      line-height: 0.5rem;
      text-align: center;
}
</style>
