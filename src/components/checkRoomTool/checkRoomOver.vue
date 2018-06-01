<template>
  <div class="f_go_checkRoomOver">
    <TitBar titBarTits="验房记录详情"/>
    <HeaderBar
      :barList="['通用部分','厨房/卫生间','阳台/其他','五证两书一表']"
      v-on:headerBarAc="headerBarAc"
    />
    <div v-if='headerBarAcNum === 1'>
      <div class="f_go_checkRoomOver_ul">
        <span class="u-tit">房屋主体</span>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查卧室层高</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[0].radio1 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[0].radio1 == 1">
          {{data[0].commonUse[0].text1 ? data[0].commonUse[0].text1 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查厨卫层高</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[0].radio2 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[0].radio2 == 1">
          {{data[0].commonUse[0].text2 ? data[0].commonUse[0].text2 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">门洞尺寸检查</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[0].radio3 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[0].radio3 == 1">
          {{data[0].commonUse[0].text3 ? data[0].commonUse[0].text3 : '无'}}</div>
      </div>

      <div class="f_go_checkRoomOver_ul">
        <span class="u-tit">门</span>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">推拉检查</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[1].radio1 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[1].radio1 == 1">
          {{ data[0].commonUse[1].text1 ? data[0].commonUse[1].text1 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查密闭</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[1].radio2 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[1].radio2 == 1">
          {{ data[0].commonUse[1].text2 ? data[0].commonUse[1].text2 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">玻璃检查</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[1].radio3 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[1].radio3 == 1">
          {{ data[0].commonUse[1].text3 ? data[0].commonUse[1].text3 : '无'}}</div>
      </div>

      <div class="f_go_checkRoomOver_ul">
        <span class="u-tit">窗</span>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">推拉检查</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[2].radio1 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[2].radio1 == 1">
          {{ data[0].commonUse[2].text1 ? data[0].commonUse[2].text1 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查密闭</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[2].radio2 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[2].radio2 == 1">
          {{ data[0].commonUse[2].text2 ? data[0].commonUse[2].text2 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">玻璃完好度检查</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[2].radio3 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[2].radio3 == 1">
          {{ data[0].commonUse[2].text3 ? data[0].commonUse[2].text3 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">安全玻璃检查</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[2].radio4 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[2].radio4 == 1">
          {{ data[0].commonUse[2].text4 ? data[0].commonUse[2].text4 : '无'}}</div>
      </div>

      <div class="f_go_checkRoomOver_ul">
        <span class="u-tit">地面</span>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查空鼓</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[3].radio1 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[3].radio1 ==1">
          {{ data[0].commonUse[3].text1 ? data[0].commonUse[3].text1 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查面层</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[3].radio2 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[3].radio2 == 1">
          {{ data[0].commonUse[3].text2 ? data[0].commonUse[3].text2 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">坡度检查</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[3].radio3 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[3].radio3 == 1">
          {{ data[0].commonUse[3].text3 ? data[0].commonUse[3].text3 : '无'}}</div>
      </div>

      <div class="f_go_checkRoomOver_ul">
        <span class="u-tit">墙面/顶棚</span>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查墙面空鼓</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[4].radio1 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[4].radio1 == 1">
          {{ data[0].commonUse[4].text1 ? data[0].commonUse[4].text1 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查墙面面层</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[4].radio2 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[4].radio2 == 1">
          {{ data[0].commonUse[4].text2 ? data[0].commonUse[4].text2 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">墙面垂直度</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[4].radio3 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[4].radio3 == 1">
          {{ data[0].commonUse[4].text3 ? data[0].commonUse[4].text3 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">墙面平整度</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[4].radio4 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[4].radio4 == 1">
          {{ data[0].commonUse[4].text4 ? data[0].commonUse[4].text4 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">墙面阴阳角方正度</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[4].radio5 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[4].radio5 == 1">
          {{ data[0].commonUse[4].text5 ? data[0].commonUse[4].text5 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查顶棚</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[4].radio6 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[4].radio6 == 1">
          {{ data[0].commonUse[4].text6 ? data[0].commonUse[4].text6 : '无'}}</div>
      </div>

      <div class="f_go_checkRoomOver_ul">
        <span class="u-tit">开关/插座</span>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查基本功能</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[5].radio1 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[5].radio1 == 1">
          {{ data[0].commonUse[5].text1 ? data[0].commonUse[5].text1 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查面板及线盒</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[5].radio2 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[5].radio2 == 1">
          {{ data[0].commonUse[5].text2 ? data[0].commonUse[5].text2 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查开关箱</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[0].commonUse[5].radio3 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[0].commonUse[5].radio3 == 1">{{ data[0].commonUse[5].text3 ? data[0].commonUse[5].text3 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查电路</p>
          <span class="u-t2" style=" color: #0080ff;">合格</span>
        </div>
      </div>

    </div>
    <div v-else-if="headerBarAcNum === 2">
      <div class="f_go_checkRoomOver_ul">
        <span class="u-tit">厨房</span>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查供水</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[1].radio1 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[1].radio1 == 1">{{data[1].text1 ? data[1].text1 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查排水、溢水</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[1].radio2 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[1].radio2 == 1">{{data[1].text2 ? data[1].text2 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查排水横管</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[1].radio3 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[1].radio3 == 1">{{data[1].text3 ? data[1].text3 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">煤气报警装置检测</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[1].radio4 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[1].radio4 == 1">{{data[1].text4 ? data[1].text4 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查烟道</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[1].radio5 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[1].radio5 == 1">{{data[1].text5 ? data[1].text5 : '无'}}</div>
      </div>
      <div class="f_go_checkRoomOver_ul">
        <span class="u-tit">卫生间</span>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查供水</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[2].radio1 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[2].radio1 == 1">{{data[2].text1 ? data[2].text1 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查排水、溢水</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[2].radio2 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[2].radio2 == 1">{{data[2].text2 ? data[2].text2 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查排水横管</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[2].radio3 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[2].radio3 == 1">{{data[2].text3 ? data[2].text3 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查插座</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[2].radio4 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[2].radio4 == 1">{{data[2].text4 ? data[2].text4 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">防水检查</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[2].radio5 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[2].radio5 == 1">{{data[2].text5 ? data[2].text5 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查洁具及通风</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[2].radio6 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[2].radio6 == 1">{{data[2].text6 ? data[2].text6 : '无'}}</div>
      </div>
    </div>
    <div v-else-if="headerBarAcNum === 3">
      <div class="f_go_checkRoomOver_ul">
        <span class="u-tit">阳台</span>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查供水</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[3].radio1 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[3].radio1 == 1">{{data[3].text1 ? data[3].text1 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查排水、溢水</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[3].radio2 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[3].radio2 == 1">{{data[3].text2 ? data[3].text2 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查栏杆</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[3].radio3 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[3].radio3 == 1">{{data[3].text3 ? data[3].text3 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">安全玻璃检查</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[3].radio4 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[3].radio4 == 1">{{data[3].text4 ? data[3].text4 : '无'}}</div>
      </div>
      <div class="f_go_checkRoomOver_ul">
        <span class="u-tit">其他</span>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查入户门基本要求</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[4].radio1 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[4].radio1 == 1">{{data[4].text1 ? data[4].text1 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查猫眼及其他配件</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[4].radio2 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[4].radio2 == 1">{{data[4].text2 ? data[4].text2 : '无'}}</div>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">检查其他插座布置</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[4].radio3 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <div class="errorText" v-if="data[4].radio3 == 1">{{data[4].text3 ? data[4].text3 : '无'}}</div>
      </div>
    </div>
    <div v-else>
      <div class="f_go_checkRoomOver_ul">
        <span class="u-tit">五证</span>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">《国有土地使用证》、《建筑用地规划许可证》、 《建筑工程规划许可证 》、《建筑工程施工许可 证》、 《商品房预售许可证》
                    </p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[5].radio1 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <!--<div class="errorText" v-if="data[5].radio1 == 1">{{data[5].text1}}</div>-->
      </div>
      <div class="f_go_checkRoomOver_ul">
        <span class="u-tit">两书</span>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">《住宅质量保证书》、《住宅使用说明书》</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[5].radio2 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <!--<div class="errorText" v-if="data[5].radio2 == 1">{{data[5].text2}}</div>-->
      </div>
      <div class="f_go_checkRoomOver_ul">
        <span class="u-tit">一表</span>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">《竣工验收备案表》</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[5].radio3 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <!--<div class="errorText" v-if="data[5].radio3 == 1">{{data[5].text3}}</div>-->
      </div>
      <div class="f_go_checkRoomOver_ul">
        <span class="u-tit">其他</span>
        <div class="f_go_checkRoomOver_li">
          <p class="u-t1">《房屋建筑面积测算表》</p>
          <span class="u-t2" style=" color: #0080ff;" v-if="data[5].radio4 == 0">合格</span>
          <span class="u-t2" style=" color:  #F56364;" v-else>不合格</span>
        </div>
        <!--<div class="errorText" v-if="data[5].radio4 == 1">{{data[5].text4}}</div>-->
      </div>
    </div>
  </div>
</template>
<script>
  import HeaderBar from "@/components/common/headerBar";
  import TitBar from "../common/titBar.vue";
  import qs from "qs";
  export default {
    components: {
      HeaderBar,
      TitBar
    },
    data() {
      return {
        headerBarAcNum: 1,
        data: [
          {
            commonUse: [
              {radio1: '', text1: '', radio2: '', text2: '', radio3: '', text3: ''},
              {radio1: '', text1: '', radio2: '', text2: '', radio3: '', text3: ''},
              {radio1: '', text1: '', radio2: '', text2: '', radio3: '', text3: '', radio4: '', text4: ''},
              {radio1: '', text1: '', radio2: '', text2: '', radio3: '', text3: ''},
              {
                radio1: '',
                text1: '',
                radio2: '',
                text2: '',
                radio3: '',
                text3: '',
                radio4: '',
                text4: '',
                radio5: '',
                text5: '',
                radio6: '',
                text6: ''
              },
              {radio1: '', text1: '', radio2: '', text2: '', radio3: '', text3: '', radio4: '', text4: ''},
            ]
          }, {
            radio1: '',
            text1: '',
            radio2: '',
            text2: '',
            radio3: '',
            text3: '',
            radio4: '',
            text4: '',
            radio5: '',
            text5: '',
            radio6: '',
            text6: ''
          },
          {
            radio1: '',
            text1: '',
            radio2: '',
            text2: '',
            radio3: '',
            text3: '',
            radio4: '',
            text4: '',
            radio5: '',
            text5: '',
            radio6: '',
            text6: ''
          },
          {
            radio1: '',
            text1: '',
            radio2: '',
            text2: '',
            radio3: '',
            text3: '',
            radio4: '',
            text4: ''
          },
          {
            radio1: '',
            text1: '',
            radio2: '',
            text2: '',
            radio3: '',
            text3: ''
          },
          {
            radio1: '',
            text1: '',
            radio2: '',
            text2: '',
            radio3: '',
            text3: '',
            radio4: '',
            text4: ''
          },
        ]
      };
    },
    created() {
      try {
        this.getOver();
      } catch (e) {
        this.$router.push({
          path: "/checkRoomTool",
        });
      }

    },
    methods: {
      headerBarAc(newVal, oldVal) {
        this.headerBarAcNum = newVal + 1;
      },
      getOver() {
        let t = "";
        /*
         如果是APP打开
         或者分享页
         分别获取token
         */

        if (window.sessionStorage.getItem('isBar') == '') {
          t = window.sessionStorage.getItem("token") || "";
        } else {
          t = JSON.parse(window.localStorage.getItem("token")).val || "";
        }

        var d = {token: t, body: {createTime: this.$route.query.time}},
          datas = null,
          url = this.$url.httpRequests + "buildingCamera/roomCheckResultDetail";
        //        var res = {
        //          data: this.des(JSON.stringify(d))
        //        };
        datas = qs.stringify({d: JSON.stringify(d)});
        this.$Axios.post(url, datas, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
          }
        }).then(response => {
          //          var res = {data: response.data};
          //          var data = this.$getDAesString(res, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq");
          //          var resp = JSON.parse(data);
          if (response.data.code == "0") {
            this.data = response.data.response.arr;
            // this.data = response.data.response.list;
            // let d = JSON.stringify(response.data.response);
          }
        })
          .catch(error => {
            this.hint_is("网络异常");
            console.log(error);
          });
      }
    }
  };
</script>
<style scoped>
  .f_go_checkRoomOver {
    padding-top: 0.88rem;
    width: 7.5rem;
    margin: auto;
  }

  .f_go_checkRoomOver_ul {
    padding: 0.4rem 0.3rem;
    margin: 0.3rem auto;
    width: 6.3rem;
    background: #ffffff;
    box-shadow: 0 0 15px 0 rgba(169, 183, 197, 0.3);
  }

  .f_go_checkRoomOver_li {
    width: 100%;
    margin: 0.3rem auto 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .f_go_checkRoomOver_li .u-t1 {
    width: 5.42rem;
    text-align: justify;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #8b949e;
    line-height: 0.4rem;
  }

  .f_go_checkRoomOver_li .u-t2 {
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    line-height: 0.24rem;
  }

  .f_go_checkRoomOver_ul .u-tit {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #212832;
    line-height: 0.28rem;
  }

  .errorText {
    width: 5.7rem;
    padding: 0.2rem 0.3rem 0.3rem 0.3rem;
    background: #f7f7f7;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #8b949e;
    line-height: 0.4rem;
    margin: 0.3rem auto;
  }
</style>


