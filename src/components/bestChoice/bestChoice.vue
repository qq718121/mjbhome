<template>
          <div class="bestChoice">
                    <div class="bestChoiceBg">
                              <div class="bestChoiceTop">
                                        <img :src="this.$url.best" alt="">
                              </div>
                              <div class="bestChoiceDiv">
                                        <i><img src="../../../static/OB/pic_1number_yxlp.png" alt=""></i>
                                        <div class="whatBestChoice">
                                                  <span>什么是关注楼盘</span>
                                        </div>
                                        <div class="whatImgOne">
                                                  <img :src="this.$url.pic_1" alt="">
                                        </div>
                                        <div class="whatText">
                                                  关注楼盘：由鹰眼鉴房专业的规划设计、质量监测人员以及数据挖掘工程师从规划到施工进行全流程质量监督追踪的楼盘。此部分楼盘经由工程质量、规划设计、周边配套、景观物业等多个维度的详实数据建模分析，楼盘及房屋的真实价值透明可见

                                        </div>
                              </div>
                              <div class="bestChoiceDiv">
                                        <i><img src="../../../static/OB/pic_2number_yxlp.png" alt=""></i>
                                        <div class="whatBestChoice">
                                                  <span>关注楼盘有哪些特点</span>
                                        </div>
                                        <div class="whatImgTwo">
                                                  <img :src="this.$url.pic_2" alt="">
                                        </div>
                                        <div class="whatText">
                                                  关注楼盘由鹰眼鉴房凭借独有的房产质量数据采集系统、通过数据挖掘和独有的数据建模技术，可提供多维度、可量化的公正透明的评测结果，楼盘信息的一切细节皆清晰可见。

                                        </div>
                              </div>
                              <div class="bestChoiceDiv">
                                        <i><img src="../../../static/OB/pic_3number_yxlp.png" alt=""></i>
                                        <div class="whatBestChoice">
                                                  <span>关注楼盘需达到哪些标准</span>
                                        </div>
                                        <div class="whatImgThree">
                                                  <img :src="this.$url.bestChoiceImgThree" alt="">
                                        </div>
                                        <div class="whatText">
                                                  关注楼盘由正规开发商开发，其房屋规划、周边设施、建筑材料以及建设施工是否严格遵照建筑标准进行皆受到严格监控。关注楼盘拥有多个维度进行的数据建模分析结果，楼盘评价和分析及时准确，可为购房人提供详尽的信息。

                                        </div>
                              </div>
                    </div>
          </div>
</template>

<style scoped>
.bestChoice {
        max-width: 7.5rem;
        margin: auto;
}

.bestChoiceBg {
        background-image: url("../../../static/OB/bg_yxlp.gif");
        max-width: 7.5rem;
        background-size: 7.5rem 38.84rem;
        background-repeat: repeat-y;
        height: 38.84rem;
        margin: 0;
}

.bestChoiceTop {
        width: 5.9rem;
        height: 2.5rem;
        padding-top: 1.15rem;
        margin: auto;
        text-align: center;
}

.bestChoiceDiv {
        width: 6.3rem;
        height: 8.44rem;
        background: #ffffff;
        -moz-box-shadow: 5px 6px 10px 1px rgba(13, 127, 247, 0.24); /*firefox*/
        -webkit-box-shadow: 5px 6px 10px 1px rgba(13, 127, 247, 0.24); /*webkit*/
        box-shadow: 5px 6px 10px 1px rgba(13, 127, 247, 0.24); /*opera或ie9*/
        border-radius: 0.3rem;
        margin: 1.7rem auto;
        position: relative;
}

.bestChoiceDiv i {
        display: inline-block;
        width: 0.84rem;
        height: 0.84rem;
        position: absolute;
        left: 0.44rem;
        top: -0.3rem;
        text-align: center;
}

.bestChoiceDiv i img {
        width: 0.79rem;
        height: 0.6rem;
}

.whatBestChoice {
        font-family: PingFangSC-Regular;
        font-size: 0.36rem;
        color: #5080be;
        letter-spacing: 0;
        line-height: 0.36rem;
        text-align: center;
        padding-top: 0.6rem;
}

.whatImgOne,
.whatImgTwo,
.whatImgThree {
        width: 5.1rem;
        height: 3.4rem;
        margin: 0.55rem auto 0 auto;
        text-align: center;
}

.whatImgThree img {
        width: 3.59rem;
        height: 3.27rem;
}

.whatImgTwo img {
        width: 3.71rem;
        height: 3.29rem;
}

.whatImgOne img {
        width: 4.1rem;
        height: 2.4rem;
        margin-top: 0.6rem;
}

.whatText {
        width: 5.34rem;
        font-family: PingFangSC-Regular;
        font-size: 0.28rem;
        color: #262a33;
        letter-spacing: 0;
        line-height: 0.46rem;
        margin: auto;
        padding-top: 0.4rem;
}
</style>
