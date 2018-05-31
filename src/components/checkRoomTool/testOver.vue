<template>
  <div class="testOver">
    <TitBar titBarTits=""
            :isOver="true"
            :isBackHome="true"
            v-on:shareHandlerBtn='shareHandlerBtn'
    />
    <Dislog :shows="dislogShow"
            v-on:shareHandlerBtn='shareHandlerBtn'
    />

    <div class="g-testOver-tit"
         style="background-image: url('http://oxrgdeqd8.bkt.clouddn.com/bg_yanfangjieguo_l@3x.png')"
         v-if="stageNum >=40">
      <div class="g-stage">
        <WaterWave :stage="stageNum"/>
      </div>
      <p class="g-stage-tex">恭喜您获得称号</p>
      <p class="g-stage-designation" v-if="stageNum>=100">豪宅</p>
      <p class="g-stage-designation" v-else-if="stageNum<=99 && stageNum>=80">品质好屋</p>
      <p class="g-stage-designation" v-else-if="stageNum<=79 && stageNum>=60">质朴新居</p>
      <p class="g-stage-designation" v-else-if="stageNum<=59 && stageNum>=20">陋居</p>
      <p class="g-stage-designation" v-else>危房</p>
    </div>
    <div class="g-testOver-tit"
         style="background-image: url('http://oxrgdeqd8.bkt.clouddn.com/bg_yanfangjieguo_h@3x.png')" v-else>
      <div class="g-stage">
        <WaterWave :stage="stageNum"/>
      </div>
      <p class="g-stage-tex">恭喜您获得称号</p>
      <p class="g-stage-designation" v-if="stageNum>=100">豪宅</p>
      <p class="g-stage-designation" v-else-if="stageNum<=99 && stageNum>=80">品质好屋</p>
      <p class="g-stage-designation" v-else-if="stageNum<=79 && stageNum>=60">质朴新居</p>
      <p class="g-stage-designation" v-else-if="stageNum<=59 && stageNum>=20">陋居</p>
      <p class="g-stage-designation" v-else>危房</p>
    </div>
    <div class="g-testOver-over">
      <div class="g-testOver-head">
        <span>验房项结果统计</span>
        <span style="float:right;margin-right:0.3rem;font-size: 0.28rem;color: #0080FF;" @click="f_go_checkRoomOver"
              v-if="this.$route.query.share !=1">查看全部</span>
      </div>
      <div class="g-testOver-li">
        <span>通用部分</span>
        <span v-if="testOverData.count1 !=0">
          <i style="color: #F56364;">{{testOverData.count1}}</i>项不合格</span>
        <span v-else style="color: #0080FF;">合格</span>
      </div>
      <div class="g-testOver-li">
        <span>厨房</span>
        <span v-if="testOverData.count2 !=0">
          <i style="color: #F56364;">{{testOverData.count2}}</i>项不合格</span>
        <span v-else style="color: #0080FF;">合格</span>
      </div>
      <div class="g-testOver-li">
        <span>卫生间</span>
        <span v-if="testOverData.count3 !=0">
          <i style="color: #F56364;">{{testOverData.count3}}</i>项不合格</span>
        <span v-else style="color: #0080FF;">合格</span>
      </div>
      <div class="g-testOver-li">
        <span>阳台</span>
        <span v-if="testOverData.count4 !=0">
          <i style="color: #F56364;">{{testOverData.count4}}</i>项不合格</span>
        <span v-else style="color: #0080FF;">合格</span>
      </div>
      <div class="g-testOver-li">
        <span>其他</span>
        <span v-if="testOverData.count5 !=0">
          <i style="color: #F56364;">{{testOverData.count5}}</i>项不合格</span>
        <span v-else style="color: #0080FF;">合格</span>
      </div>
      <div class="g-testOver-li">
        <span>五证两书一表</span>
        <span v-if="testOverData.count6 !=0">
          <i style="color: #F56364;">{{testOverData.count6}}</i>项不合格</span>
        <span v-else style="color: #0080FF;">合格</span>
      </div>
    </div>
    <div class="g-testOver-over" style="margin-top: 0.2rem">
      <div class="g-testOver-head">
        <span>鹰眼小贴士</span>
      </div>
      <p class="u-eye" v-if="stageNum>=100">
        恭喜您的房屋经过验房评定，符合“豪宅”标准。房屋主体净高符合标准，门窗宽高尺寸符合国家标准，关闭紧密安装牢固无变形问题。墙地面垂直平整，无裂痕空鼓现象。厨卫阳台给排水正常无堵塞渗漏，阳台安全密闭无问题。各开关插座安装牢固完整，无裂痕，零件齐全，使用正常。入户各配件齐全，五证两表一书无遗漏。 </p>
      <p class="u-eye" v-else-if="stageNum<=99 && stageNum>=80">
        恭喜您的房屋经过验房评定，符合“品质好屋”标准。房屋主体净高基本符合标准，门窗宽高尺寸符合国家标准，关闭紧密安装牢固。墙地面垂直平整，无大裂痕空鼓现象。厨卫阳台给排水正常无堵塞渗漏。各开关插座安装牢固完整，无裂痕，零件齐全。入户各配件齐全，五证两表一书无遗漏。虽唯有瑕疵，但是品质仍属上乘。 </p>
      <p class="u-eye" v-else-if="stageNum<=79 && stageNum>=60">
        您的房屋经过验房评定，符合“质朴新居”标准。房屋主体净高大部分符合标准，门窗宽高密闭性唯有瑕疵。墙地面基本垂直平整，无大裂痕和严重空鼓现象。厨卫阳台给排水正常无堵塞渗漏。各开关插座安装牢固无过大问题。入户各配件齐全，五证两表一书无遗漏。质量中层，可通过装修的方式弥补。 </p>
      <p class="u-eye" v-else-if="stageNum<=59 && stageNum>=20">
        请注意，您的房屋经过验房评定，属于“陋居”标准。房屋主体净高可能存在低于标准情况，门窗宽高密闭性存在问题。墙地面存在一定裂痕和空鼓，严重会产生墙皮脱落等情况。厨卫阳台给排水需关注堵塞渗漏情况产生。各开关插座安装牢固无过大问题。入户各配件不齐全，五证两表一书未能全部提交。质量中下，建议与开发商协商整改。 </p>
      <p class="u-eye" v-else>
        请注意，您的房屋经过验房评定，属于“危房”标准。房屋主体净高门窗宽高密闭性等存在不符合标准问题。墙地面存在严重裂痕和空鼓，对房屋使用产生极大影响。厨卫阳台给排水堵塞渗漏情况有极大可能发生。各开关插座可能存在不牢固等问题。入户各配件不齐全，五证两表一书未能全部提交，质量极差，简易找专业验房公司进行检验，并与开发商进行协商整改。</p>
    </div>
    <div class="g-eye-btn" @click="backs">
      <span>重新验房</span>
    </div>
  </div>
</template>
<script>
  import TitBar from "../common/titBar.vue";
  import WaterWave from "../common/waterWave.vue";
  import Dislog from "@/components/common/dislog";
  export default {
    components: {TitBar, WaterWave, Dislog},
    data() {
      return {
        stageNum: 80,
        testOverData: {},
        dislogShow: false
      };
    },
    created() {
      if (!this.$route.query.isList) {
        this.noBack();
      }
      window.scrollTo(0, 0);
      this.init();
    },
    methods: {
      noBack() {
        let this_ = this;
        if (window.history && window.history.pushState) {
          $(window).on("popstate", function () {
            $(window).unbind();
            if (window.sessionStorage.getItem('isBar') == '') {
              this_.$router.push({
                path: "/checkRoomTool?type=app"
              });
            } else {
              this_.$router.push({
                path: "/checkRoomTool"
              });
            }
          });
        }
      },
      backs() {
        this.$store.commit("set_init_form");
        window.sessionStorage.removeItem("da");
        //        this.$store.commit('ATONCEOVR', null);
        if (window.sessionStorage.getItem('isBar') == '') {
          this.$router.push({
            path: "/checkRoomTool?type=app"
          });
        } else {
          this.$router.push({
            path: "/checkRoomTool"
          });
        }

      },
      f_go_checkRoomOver() {
        this.$router.push({
          path: "/checkRoomOver",
          query: {
            time: this.$route.query.time || this.testOverData.createTime
          }
        });
      },
      init() {
        let obj = JSON.parse(this.$route.query.data);
        this.stageNum = obj.totalScore;
        this.testOverData = obj;
      },
      shareHandlerBtn(par) {
        if (par) {
          this.dislogShow = par;
        } else {
          this.dislogShow = true;
        }
      }
    }
  };
</script>
<style scoped>
  .testOver {
    width: 7.5rem;
    margin: auto;
    background: #f7f7f7;
  }

  .g-testOver-over {
    padding-left: 0.3rem;
    padding-bottom: 0.4rem;
    background: #fff;
  }

  .g-testOver-tit {
    height: 6.73rem;
    /*background-image: url("http://oxrgdeqd8.bkt.clouddn.com/bg_yanfangjieguo_l@3x.png");*/
    background-size: cover;
    overflow: hidden;
  }

  .g-testOver-head {
    padding: 0.3rem 0 0.3rem 0;
    font-family: PingFangSC-Semibold;
    font-size: 0.32rem;
    color: #212832;
    line-height: 0.32rem;
    border-bottom: 1px solid #e7e7e7;
  }

  .g-testOver-li {
    margin-top: 0.4rem;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #8b949e;
    line-height: 0.26rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    padding-right: 0.3rem;
  }

  .u-eye {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #8b949e;
    line-height: 0.48rem;
    text-align: justify;
    padding-right: 0.3rem;
    margin-top: 0.3rem;
  }

  .g-eye-btn {
    margin-top: 0.3rem;
    width: 7.5rem;
    height: 0.88rem;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #ffffff;
    background: #0080ff;
    line-height: 0.88rem;
    text-align: center;
  }

  .g-stage {
    position: relative;
    width: 2.8rem;
    height: 2.8rem;
    margin: 1.65rem auto 0;
  }

  .g-stage-tex {
    margin-top: 0.4rem;
    text-align: center;
    opacity: 0.8;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #ffffff;
    line-height: 0.28rem;
  }

  .g-stage-designation {
    margin-top: 0.2rem;
    text-align: center;
    font-family: PingFangSC-Semibold;
    font-size: 0.4rem;
    color: #ffffff;
    line-height: 0.4rem;
  }

</style>
