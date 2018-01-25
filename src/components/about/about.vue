<template>
  <div class="about">
    <div class="logoImagae">
      <span><img :src=this.$url.logo_img></span>
    </div>
    <div class="aboutText">
      鹰眼鉴房是一家地产行业房屋价值大数据技术服务商，通过自建的房产数据采集、挖掘处理系统、评分模型系统和数据可视化解决方案为客户提供多维量化评测结果，辅助房产交易决策。鹰眼鉴房目前已经与国内多个知名地产开发商合作，全面量化地产行业大数据。
    </div>
  </div>
</template>

<style scoped>
  .logoImagae {
    width: 1.9rem;
    height: 2.5rem;
    background: #fff;
    margin: 0.8rem auto 0;
    text-align: center;
    line-height: 2.44rem;
  }

  .logoImagae img {
    width: 100%;
  }

  .aboutText {
    width: 5.9rem;
    height: 2.88rem;
    margin: 1rem auto;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #42464D;
    letter-spacing: 0.3px;
    line-height: 0.48rem;
  }
</style>
