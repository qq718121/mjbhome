<template>
  <div class='programme'>
    <div class='programmeTop'>
      <i></i>
      <i></i>
      <div class='programmeTopImg'>
        <img :src='programmeNewData.houseImg ? programmeNewData.houseImg : this.$url.error_img'>
        <div class='programmeTopBar'>
          <p>{{programmeNewData.houseName}}</p>
          <p>规划落实评测报告</p>
          <p>{{programmeNewData.date}}</p>
        </div>
      </div>

      <div class='programmeTopText'>
        <div class='programmeTopLv'>
          <p>{{programmeNewData.presentLv ? programmeNewData.presentLv : '无'}}</p>
          <p>当前阶段评级</p>
        </div>
        <div class='programmeTopLv2'>
          <p>{{programmeNewData.overallLv ? programmeNewData.overallLv : '无'}}</p>
          <p>楼盘总体落实评级</p>
        </div>

        <div class="programmeClear"></div>
        <p
          style='text-align:center;margin-top:0.4rem;font-family: PingFangSC-Regular;font-size: 0.22rem;color: #9E9E9E;'>
          * 评级是由鹰眼鉴房的评分数值综合评定<br/>最高评级为S+，共划分为7个等级</p>
      </div>
    </div>
  </div>
</template>

