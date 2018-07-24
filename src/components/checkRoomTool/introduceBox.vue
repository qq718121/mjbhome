<template>
  <div class="introduceBox">
    <TitBar2
      titBarTits1="工具箱介绍"
      titBarTits2="自备工具"
      v-on:checkIc="checkIne"
    />
    <div v-if="iconType == 0">
      <div class="g-lineRuler">
        <p class="g-lineRuler-tit">垂直检测尺</p>
        <div class="g-lineRuler-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_chuizhijiancechi@3x.png" alt="">
        </div>
        <div class="g-lineRuler-text">
          <p>
            垂直测量尺的功能主要是垂直度、水平度和平整度检测，是家装监理中使用频率最高的一种检测工具。检测墙面、瓷砖是否平整、垂直。检测地板龙骨是否水平、平整。垂直检测尺的使用方法：检测垂直度时，活动销推键向上推，将检测尺左侧面靠紧被测面，待指针自行摆动停止时，直读指针所指刻度下行刻度数值，此数值即被测面1米垂直度偏差，每格为1毫米。若是水平度检测，则将检测尺侧面装有水准管，可检测水平度。使用时还要注意校正。</p>
        </div>
      </div>
      <div class="g-lineRuler">
        <p class="g-lineRuler-tit">对角检测尺</p>
        <div class="g-lineRuler-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_duijiaojiancechi@3x.png" alt="">
        </div>
        <div class="g-lineRuler-text">
          <p>
            对角检测尺的功能是检测方形物体两对角线长度对比偏差，主要将尺子放在方形物体的对角线上进行测量。对角检测尺使用方法：使用时将大节尺推键应锁定在中节尺上某档刻度线“0”位，将检测尺两端尖角顶紧被测对角顶点，固紧小节尺。检测另1对角线时，松开大节尺推键，检测后在固紧，目测推键在刻度线上所指的数值，此数值就是该物体上两对角线长度对比的偏差值(单位：毫米)。</p>
        </div>
      </div>
      <div class="g-lineRuler">
        <p class="g-lineRuler-tit">内外直角检测尺</p>
        <div class="g-lineRuler-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_neiwaizhijiaojiancechi@3x.png" alt="">
        </div>
        <div class="g-lineRuler-text">
          <p>内外直角检测尺的功能主要是检测物体上内外(阴阳)直角的偏差,及一般平面的垂直度与水平度。使用时，向下推打开角度指针盒，当指针在零的位置时，直角是90度，其偏差值直读，每格为1mm。</p>
        </div>
      </div>
      <div class="g-lineRuler">
        <p class="g-lineRuler-tit">楔形塞尺</p>
        <div class="g-lineRuler-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_saichi@3x.png" alt="">
        </div>
        <div class="g-lineRuler-text">
          <p>
            配合检测尺一起使用，侧面靠紧被测面，其缝隙大小用楔形塞尺检测（参照楔形塞尺使用方法），其数值即平整度偏差。使用时将塞尺测量表面擦拭干净，然后将塞尺插入被测间隙中，来回拉动塞尺，直到感觉稍有阻力时拧紧锁紧螺母，此时塞尺所标出的数值即为被测间隙值。
          </p>
        </div>
      </div>
      <div class="g-lineRuler">
        <p class="g-lineRuler-tit">百格网</p>
        <div class="g-lineRuler-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_baigewang@3x.png" alt="">
        </div>
        <div class="g-lineRuler-text">
          <p>
            百格网共分为100个格，是用来套比或检测砌体所用砖的大面规格尺寸为：115×240mm的饱满程度的。不仅仅是适用于被淘汰的粘土砖。也适用于免烧砖、空心砖等同规格的砖。检测时，要求在砌筑过程中，对每个操作者跟踪随机抽取三块砖，并将三块砖翻面朝上，用百格网分别套比或检测其饱满程度，且取其三块砖的平均值。。
          </p>
        </div>
      </div>
      <div class="g-lineRuler">
        <p class="g-lineRuler-tit">检测镜</p>
        <div class="g-lineRuler-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_jiancejing@3x.png" alt="">
        </div>
        <div class="g-lineRuler-text">
          <p>
            用于查看精装修房验房时房门上檐等高处人手够不着地方（门通气孔、门窗框上方缝隙)。检测镜自带LED灯可检查光线不足之处。
          </p>
        </div>
      </div>
      <div class="g-lineRuler">
        <p class="g-lineRuler-tit">卷线器</p>
        <div class="g-lineRuler-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_juanxianqi@3x.png" alt="">
        </div>
        <div class="g-lineRuler-text">
          <p>
            塑料盒式结构，内有尼龙丝线，拉出全长１５米，可检测建筑物体的平直，如砖墙砌体灰缝、踢脚线等（用其他检测工具不易检测物体的平直部位）。检测时，拉紧两端丝线，放在被测处，目测观察对比，检测完毕后，用卷线手柄顺时针旋转，将丝线收入盒内，然后锁上方扣。
          </p>
        </div>
      </div>
      <div class="g-lineRuler">
        <p class="g-lineRuler-tit">响鼓锤</p>
        <div class="g-lineRuler-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_xiangguchui@3x.png" alt="">
        </div>
        <div class="g-lineRuler-text">
          <p>
            一种由锤头和锤把组成的小工具，其特征在于锤头上部为楔状，下部为方形。一般分为10g，15g，25g，50g和伸缩式的响鼓锤。检查空鼓程度及粘合质量。敲击墙面、地面装饰层是否空鼓，玻璃，瓷砖等是否破裂。轻轻敲击前面，听声音辨别。主要用于房屋墙面是否空鼓，可以通过锤头与墙面撞击的声音来判断。
          </p>
        </div>
      </div>
      <div class="g-lineRuler">
        <p class="g-lineRuler-tit">钢针小锤</p>
        <div class="g-lineRuler-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_gangzhenxiaochui@3x.png" alt="">
        </div>
        <div class="g-lineRuler-text">
          <p>
            轻轻敲打抹灰后的墙面，可以判断墙面的空鼓程度及砂灰与砖、水泥冻结的粘合质量。使用时，用小锤轻轻敲打玻璃、马赛克、瓷砖，可以判断空鼓程度及粘合质量。拨出塑料手柄后，里面是尖头钢针，钢针向被检物上戳几下，可探查出多孔板缝隙、砖缝等砂浆是否饱满。
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="g-lineRuler">
        <p class="g-lineRuler-tit">手电</p>
        <div class="g-lineRuler-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_shoudian@3x.png" alt="">
        </div>
        <div class="g-lineRuler-text">
          <p>
            用途是勘察房屋主体结构方面，看墙壁是否平直，有没有凸出或者凹陷的部分。用手电抵住墙壁底部，往上照去，出现阴影的部分就是有问题的地方。同时还可以在烟道、通风口中用手电查看是否存有建筑垃圾。
          </p>
        </div>
      </div>
      <div class="g-lineRuler">
        <p class="g-lineRuler-tit">打火机</p>
        <div class="g-lineRuler-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_dahuoji@3x.png" alt="">
        </div>
        <div class="g-lineRuler-text">
          <p>
            验房时，一般在厨房、卫生间的排气通道上都已经有预留的孔洞，通过使用打火机可以检测排气通道是否正常。
          </p>
        </div>
      </div>
      <div class="g-lineRuler">
        <p class="g-lineRuler-tit">卷尺</p>
        <div class="g-lineRuler-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_juanchi@3x.png" alt="">
        </div>
        <div class="g-lineRuler-text">
          <p>
            可用来测量顶梁、窗框、卫生间高差、层高和房屋面积。
          </p>
        </div>
      </div>
      <div class="g-lineRuler">
        <p class="g-lineRuler-tit">笤帚</p>
        <div class="g-lineRuler-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_tiaosao@3x.png" alt="">
        </div>
        <div class="g-lineRuler-text">
          <p>
            未使用过的油漆刷，小的扫地笤帚，它们有何用途呢?主要是为了清扫地面与墙壁夹角处的建筑尘土，千万别小看这层尘土哦!清理完之后有可能会看到裂缝、坑洼，有甚者还能发现钢筋露在外面!在精装修的房子里，清扫地面的灰土之后，看看是否有地板破损、裂缝等问题。
          </p>
        </div>
      </div>
      <div class="g-lineRuler">
        <p class="g-lineRuler-tit">软管及容器</p>
        <div class="g-lineRuler-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_rongqijixiguan@3x.png" alt="">
        </div>
        <div class="g-lineRuler-text">
          <p>
            一般在验房时，水电都已经开通。业主可打开每个水龙头查看是否有水流出，用容器盛些水再倒入每个排水管口中，直观判断排水管是否通畅。
          </p>
        </div>
      </div>
      <div class="g-lineRuler">
        <p class="g-lineRuler-tit">乒乓球</p>
        <div class="g-lineRuler-img">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/pic_pingpangqiu@3x.png" alt="">
        </div>
        <div class="g-lineRuler-text">
          <p>
            可用乒乓球在卫生间测量地面的坡度。
          </p>
        </div>
      </div>
    </div>
    <div class="g-lineRuler-btn" @click="f_toolBox">
      <p>免费预约领取共享验房工具</p>
    </div>
  </div>
</template>
<script>
  import TitBar2 from '../common/titBar2.vue'
  export default {
    components: {TitBar2},
    data(){
      return {
        iconType: 0
      }
    },
    methods: {
      checkIne(type){
        window.scrollTo(0, 0);
        this.iconType = type;
      },
      f_toolBox(){
        this.$router.push({
          path: '/getToolBox'
        });
      },
    }
  }
</script>
<style scoped>
  .introduceBox {
    padding-top: 0.88rem;
    width: 7.5rem;
    margin: auto;
  }

  .g-lineRuler {
    width: 6.3rem;
    margin: 0.3rem auto 0;
    box-shadow: 0 0 0.1rem 0 rgba(225, 225, 225, 0.50);
    padding: 0 0.3rem 0.3rem 0.3rem;
  }

  .g-lineRuler-tit {
    height: 0.78rem;
    line-height: 0.78rem;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #212832;
  }

  .g-lineRuler-img {
    height: 3rem;
  }

  .g-lineRuler-img img {
    width: 100%;
  }

  .g-lineRuler-text {
    margin-top: 0.3rem;
  }

  .g-lineRuler-text p {
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #8B949E;
    line-height: 0.4rem;
    text-align: justify;
  }

  .g-lineRuler-btn {
    margin: 0.8rem auto 0.61rem;
    width: 6.5rem;
    height: 0.88rem;
    background: #0080FF;
    border-radius: 1rem;
    line-height: 0.88rem;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #FFFFFF;
  }
</style>
