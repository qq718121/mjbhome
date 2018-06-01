<template>
  <div class="testMethod">
    <div v-show="false">
      <img src="http://oxrgdeqd8.bkt.clouddn.com/gytd.jpg" alt="">
      <img src="http://oxrgdeqd8.bkt.clouddn.com/jsgc.jpg" alt="">
      <img src="http://oxrgdeqd8.bkt.clouddn.com/jsyd.jpg" alt="">
      <img src="http://oxrgdeqd8.bkt.clouddn.com/jzgc.jpg" alt="">
      <img src="http://oxrgdeqd8.bkt.clouddn.com/spf.jpg" alt="">
      <img src="http://oxrgdeqd8.bkt.clouddn.com/IMG_3152.JPG" alt="">
    </div>
    <TitBar2 titBarTits1="检验方法" titBarTits2="检验标准" v-on:checkIc="checkIne"/>

    <div class="g-testMethod" v-if="iconType==0">
      <div class="g-testMethod-tit">
        <span v-if="testId==0">房屋主体</span>
        <span v-if="testId==1">门</span>
        <span v-if="testId==2">窗</span>
        <span v-if="testId==3">地面</span>
        <span v-if="testId==4">墙面/顶棚</span>
        <span v-if="testId==5">开关/插座</span>
        <span v-if="testId==6">厨房</span>
        <span v-if="testId==7">卫生间</span>
        <span v-if="testId==8">阳台</span>
        <span v-if="testId==9">其他</span>
        <span v-if="testId==10">五证两书一表</span>

      </div>

      <div class="g-testMethod-ine0" v-if="testId==0">
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第一步 检查卧室层高</p>
          <p class="g-testMethod1-tex">卧室、起居室（厅）的室内高度不应低于2.40m，局部净高不应低于2.10m</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form0.radio1" @change="a">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-show="$store.state.form0.radio1 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form0.text1">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form0.text1.length>0">{{`${$store.state.form0.text1.length}/500`}}</span>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第二步 检查厨卫层高</p>
          <p class="g-testMethod1-tex">厨房、卫生间的室内净高度不应低于2.20m</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form0.radio2">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form0.radio2 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form0.text2">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form0.text2.length>0">{{`${$store.state.form0.text2.length}/500`}}</span>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第三步 门洞尺寸检查</p>
          <p class="g-testMethod1-tex">
            套内户门洞宽度不小于1.0m,卧室门洞宽度不应小于0.9m,厨房门洞宽度不小于0.8m,卫生间、阳台门洞宽度不小于0.70m;所有门洞高度均不应小于2.0m</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form0.radio3">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form0.radio3 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form0.text3">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form0.text3.length>0">{{`${$store.state.form0.text3.length}/500`}}</span>
          </div>
        </div>
      </div>
      <div class="g-testMethod-ine0" v-if="testId==1">
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第一步 推拉检查</p>
          <p class="g-testMethod1-tex">推拉检查门扇安装是否牢固，开启轻松，没有异响，推拉过程中合叶、轨道是否顺畅</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form1.radio1">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form1.radio1 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form1.text1">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form1.text1.length>0">{{`${$store.state.form1.text1.length}/500`}}</span>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第二步 检查密闭</p>
          <p class="g-testMethod1-tex">门关闭是否严密，锁具是否完好，门后是否有门吸</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form1.radio2">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form1.radio2 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form1.text2">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form1.text2.length>0">{{`${$store.state.form1.text2.length}/500`}}</span>
          </div>
          <div class="g-testMethod-help">
            <p class="g-testMethod-help-tit">TIPS小贴士</p>
            <p class="g-testMethod-help-tex">检查密封性，可以用一个长纸条放在密封点上，关门压住纸条用力抽出。</p>
            <p class="g-testMethod-help-tex">可以多做几次实验看密封条的压力是否平均。</p>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第三步 玻璃检查</p>
          <p class="g-testMethod1-tex">检查门扇玻璃是否有破损，门框是否有变形。</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form1.radio3">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form1.radio3 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form1.text3">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form1.text3.length>0">{{`${$store.state.form1.text3.length}/500`}}</span>
          </div>
        </div>
      </div>
      <div class="g-testMethod-ine0" v-if="testId==2">
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第一步   推拉检查</p>
          <p class="g-testMethod1-tex">推拉检查纱窗和窗扇安装是否牢固，开启轻松，没有异响，推拉过程中合叶、轨道是否顺畅</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form2.radio1">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form2.radio1 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form2.text1">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form2.text1.length>0">{{`${$store.state.form2.text1.length}/500`}}</span>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第二步   检查密闭</p>
          <p class="g-testMethod1-tex">窗扇的橡胶密封条或毛毡密封条是否完好，不得脱槽。密封条与玻璃、玻璃槽口的接触应紧密、平整</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form2.radio2">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form2.radio2 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form2.text2">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form2.text2.length>0">{{`${$store.state.form2.text2.length}/500`}}</span>
          </div>
          <div class="g-testMethod-help">
            <p class="g-testMethod-help-tit">TIPS小贴士</p>
            <p class="g-testMethod-help-tex">检查密封性，可以用一个长纸条放在密封点上，关门压住纸条用力抽出。</p>
            <p class="g-testMethod-help-tex">可以多做几次实验看密封条的压力是否平均。</p>
            <p class="g-testMethod-help-tex"> 在雨后或持续下雨24h以后，可以检查有没有渗漏点。</p>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第三步   玻璃完好度检查</p>
          <p class="g-testMethod1-tex">检查门扇玻璃是否有破损，窗框是否有变形。安装后的玻璃应牢固，不得有裂纹、损伤和松动</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form2.radio3">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form2.radio3 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form2.text3">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form2.text3.length>0">{{`${$store.state.form2.text3.length}/500`}}</span>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第四步   安全玻璃检查</p>
          <p class="g-testMethod1-tex">检查7层及7层以上建筑物外开窗是否使用安全玻璃，落地窗是否使用安全玻璃。</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form2.radio4">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form2.radio4 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form2.text4">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form2.text4.length>0">{{`${$store.state.form2.text4.length}/500`}}</span>
          </div>
          <div class="g-testMethod-help">
            <p class="g-testMethod-help-tit">TIPS小贴士</p>
            <p class="g-testMethod-help-tex">
              如何区分安全玻璃？首先用肉眼看，中空夹层玻璃有两层，家用的层数主要以2、3层为主，原片的厚度常用的有：2+3、3+3、3+5(mm)等。其次是看玻璃的产品报告，上面有产品的详细介绍和质检说明。</p>
          </div>
        </div>
      </div>
      <div class="g-testMethod-ine0" v-if="testId==3">
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第一步   检查空鼓</p>
          <p class="g-testMethod1-tex">用响鼓锤轻击地面检查，听声音判断，空鼓面积不应大于400c㎡，每间屋子(自然间)不多于2 处可忽略不计</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form3.radio1">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form3.radio1 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form3.text1">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form3.text1.length>0">{{`${$store.state.form3.text1.length}/500`}}</span>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第二步   检查面层</p>
          <p class="g-testMethod1-tex">观察地面，面层表面不应有裂纹、脱皮、麻面、起砂等质量缺陷</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form3.radio2">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form3.radio2 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form3.text2">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form3.text2.length>0">{{`${$store.state.form3.text2.length}/500`}}</span>
          </div>
          <div class="g-testMethod-help">
            <p class="g-testMethod-help-tit">TIPS小贴士</p>
            <p class="g-testMethod-help-tex">什么是起砂？</p>
            <p class="g-testMethod-help-tex">混凝土强度不够，用硬物（钥匙或镙丝刀）划地面，能轻易地划进地面则可算起砂</p>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第三步   坡度检查</p>
          <p class="g-testMethod1-tex">使用工具箱中的2米靠尺（垂直检测尺）对地面进行测量，检查地面坡度是否平整</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form3.radio3">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form3.radio3 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form3.text3">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form3.text3.length>0">{{`${$store.state.form3.text3.length}/500`}}</span>
          </div>
          <div class="g-testMethod-help">
            <p class="g-testMethod-help-tit">TIPS小贴士</p>
            <p class="g-testMethod-help-tex">
              如何使用垂直检测尺
            </p>
            <p class="g-testMethod-help-tex">
              检测垂直度时，活动销推键向上推，将检测尺左侧面靠紧被测面，待指针自行摆动停止时，直读指针所指刻度下行刻度数值，此数值即被测面1米垂直度偏差，每格为1毫米。若是水平度检测，则将检测尺侧面装有水准管，可检测水平度。使用时还要注意校正。
            </p>
          </div>
        </div>
      </div>
      <div class="g-testMethod-ine0" v-if="testId==4">
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第一步   检查墙面空鼓</p>
          <p class="g-testMethod1-tex">用响鼓锤轻击墙面检查，听声音判断，空鼓面积不超出整个空间的5%</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form4.radio1">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form4.radio1 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form4.text1">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form4.text1.length>0">{{`${$store.state.form4.text1.length}/500`}}</span>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第二步   检查墙面面层</p>
          <p class="g-testMethod1-tex">墙面不应有空鼓、裂缝、平整度，墙面不能出现大面积裂痕，抹灰层表面不能有出现鼓包并开裂脱落的现象</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form4.radio2">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form4.radio2 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form4.text2">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form4.text2.length>0">{{`${$store.state.form4.text2.length}/500`}}</span>
          </div>

        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第三步   墙面垂直度</p>
          <p class="g-testMethod1-tex">使用工具箱中的2米靠尺（垂直检测尺）对墙面进行测量，检查立面是否垂直（偏差允许范围为4mm）</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form4.radio3">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form4.radio3 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form4.text3">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form4.text3.length>0">{{`${$store.state.form4.text3.length}/500`}}</span>
          </div>
          <div class="g-testMethod-help">
            <p class="g-testMethod-help-tit">TIPS小贴士</p>
            <p class="g-testMethod-help-tex">
              如何使用垂直检测尺
            </p>
            <p class="g-testMethod-help-tex">
              检测垂直度时，活动销推键向上推，将检测尺左侧面靠紧被测面，待指针自行摆动停止时，直读指针所指刻度下行刻度数值，此数值即被测面1米垂直度偏差，每格为1毫米。若是水平度检测，则将检测尺侧面装有水准管，可检测水平度。使用时还要注意校正。
            </p>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第四步   墙面平整度</p>
          <p class="g-testMethod1-tex">使用工具箱中的2米靠尺（垂直检测尺）对墙面进行测量，检查表面是否凭证（偏差允许范围为4mm）</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form4.radio4">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form4.radio4 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form4.text4">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form4.text4.length>0">{{`${$store.state.form4.text4.length}/500`}}</span>
          </div>

        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第五步   墙面阴阳角方正度</p>
          <p class="g-testMethod1-tex">使用工具箱中的内外直角检测尺，对墙面进行测量，检查表面是否凭证（偏差允许范围为4mm）</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form4.radio5">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form4.radio5 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form4.text5">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form4.text5.length>0">{{`${$store.state.form4.text5.length}/500`}}</span>
          </div>
          <div class="g-testMethod-help">
            <p class="g-testMethod-help-tit">TIPS小贴士</p>
            <p class="g-testMethod-help-tex">
              如何使用内外直角检测尺
            </p>
            <p class="g-testMethod-help-tex">
              使用时，向下推打开角度指针盒，当指针在零的位置时，直角是90度，其偏差值直读，每格为1mm。
            </p>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第六步   检查顶棚</p>
          <p class="g-testMethod1-tex">用响鼓锤轻击顶棚检查，抹灰层应无脱层、空鼓，面层应无爆灰和裂缝；普通抹灰表面应光滑、 洁净、接槎平整。</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form4.radio6">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form4.radio6 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form4.text6">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form4.text6.length>0">{{`${$store.state.form4.text6.length}/500`}}</span>
          </div>

        </div>
      </div>
      <div class="g-testMethod-ine0" v-if="testId==5">
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第一步   检查基本功能</p>
          <p class="g-testMethod1-tex">开关检查所有的电源开关、插座和电闸是否能正常工作，有无松动或插不进的现象，线路是否畅通，开关插座安装是否牢固</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form5.radio1">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form5.radio1 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form5.text1">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form5.text1.length>0">{{`${$store.state.form5.text1.length}/500`}}</span>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第二步   检查面板及线盒</p>
          <p class="g-testMethod1-tex">开关、插座的面板及接线盒盒体完整、无碎裂、零件齐全</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form5.radio2">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form5.radio2 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form5.text2">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form5.text2.length>0">{{`${$store.state.form5.text2.length}/500`}}</span>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第三步   检查开关箱</p>
          <p class="g-testMethod1-tex">开关箱内的各分路开关是否有明显的标示，开关箱内开关是否安装牢固，总开关关闭后，室内各灯具、插座是否也断电。</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form5.radio3">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form5.radio3 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form5.text3">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form5.text3.length>0">{{`${$store.state.form5.text3.length}/500`}}</span>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第四步   检查电路</p>
          <p class="g-testMethod1-tex">为了您的人身安全</p>
          <p class="g-testMethod1-tex">暂不建议非专业人士进行电路检测</p>
          <p class="g-testMethod1-tex">请联系专业验房公司为您提供服务</p>
        </div>
      </div>
      <div class="g-testMethod-ine0" v-if="testId==6">
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第一步   检查供水</p>
          <p class="g-testMethod1-tex">打开进水开关、水龙头，查看各进水管的供水是否正常，龙头出水是否流畅</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form6.radio1">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form6.radio1 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form6.text1">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form6.text1.length>0">{{`${$store.state.form6.text1.length}/500`}}</span>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第二步   检查排水、溢水</p>
          <p class="g-testMethod1-tex">向厨房、浴室、阳台的排水管、地漏、蹲坑等排水口注水，若听到咕噜噜的声音说明管道通畅检查水盆溢水孔是否畅通</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form6.radio2">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form6.radio2 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form6.text2">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form6.text2.length>0">{{`${$store.state.form6.text2.length}/500`}}</span>
          </div>
          <div class="g-testMethod-help">
            <p class="g-testMethod-help-tit">TIPS小贴士</p>
            <p class="g-testMethod-help-tex">
              如何检测水盆溢水口
            </p>
            <p class="g-testMethod-help-tex">
              将水盆底部出水孔塞住，放水，观察水是否会满至溢出。
            </p>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第三步   检查排水横管</p>
          <p class="g-testMethod1-tex">厨卫排水横管与地面净距离不得低于1.90m，不得影响门、窗开启，各种管道表面镀层是否完好无破损</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form6.radio3">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form6.radio3 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form6.text3">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form6.text3.length>0">{{`${$store.state.form6.text3.length}/500`}}</span>
          </div>

        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第四步   煤气报警装置检测</p>
          <p class="g-testMethod1-tex">检测报警装置是否灵敏及时</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form6.radio4">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form6.radio4 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form6.text4">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form6.text4.length>0">{{`${$store.state.form6.text4.length}/500`}}</span>
          </div>
          <div class="g-testMethod-help">
            <p class="g-testMethod-help-tit">TIPS小贴士</p>
            <p class="g-testMethod-help-tex">
              如何检测报警装置
            </p>
            <p class="g-testMethod-help-tex">
              用冒烟的纸卷放到报警装置附近，看报警装置是否灵敏动作，报警声光提示同时关闭进气电磁阀。如果不能动作，需要及时修复。
            </p>
          </div>

        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第五步   检查烟道</p>
          <p class="g-testMethod1-tex">检测厨房烟道是否畅通</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form6.radio5">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form6.radio5 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form6.text5">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form6.text5.length>0">{{`${$store.state.form6.text5.length}/500`}}</span>
          </div>
          <div class="g-testMethod-help">
            <p class="g-testMethod-help-tit">TIPS小贴士</p>
            <p class="g-testMethod-help-tex">
              如何检测烟道
            </p>
            <p class="g-testMethod-help-tex">
              用纸卷点火后灭火冒烟，放在烟道口下方10cm左右，观察烟是否上升到烟道口立即被吸走
            </p>
          </div>
        </div>
      </div>
      <div class="g-testMethod-ine0" v-if="testId==7">
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第一步   检查供水</p>
          <p class="g-testMethod1-tex">打开进水开关、水龙头，查看各进水管的供水是否正常，龙头出水是否流畅</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form7.radio1">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form7.radio1 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form7.text1">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form7.text1.length>0">{{`${$store.state.form7.text1.length}/500`}}</span>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第二步   检查排水、溢水</p>
          <p class="g-testMethod1-tex">向厨房、浴室、阳台的排水管、地漏、蹲坑等排水口注水，若听到咕噜噜的声音说明管道通畅检查水盆溢水孔是否畅通</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form7.radio2">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form7.radio2 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form7.text2">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form7.text2.length>0">{{`${$store.state.form7.text2.length}/500`}}</span>
          </div>
          <div class="g-testMethod-help">
            <p class="g-testMethod-help-tit">TIPS小贴士</p>
            <p class="g-testMethod-help-tex">
              如何检测水盆溢水口
            </p>
            <p class="g-testMethod-help-tex">
              将水盆底部出水孔塞住，放水，观察水是否会满至溢出。
            </p>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第三步   检查排水横管</p>
          <p class="g-testMethod1-tex">厨卫排水横管与地面净距离不得低于1.90m，不得影响门、窗开启，各种管道表面镀层是否完好无破损</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form7.radio3">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form7.radio3 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form7.text3">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form7.text3.length>0">{{`${$store.state.form7.text3.length}/500`}}</span>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第四步   检查插座</p>
          <p class="g-testMethod1-tex">卫生间内插座应是防潮插座且防溅（含盖），照明灯座必须是磁口安全灯座</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form7.radio4">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form7.radio4 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form7.text4">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form7.text4.length>0">{{`${$store.state.form7.text4.length}/500`}}</span>
          </div>

        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第五步   防水检查</p>
          <p class="g-testMethod1-tex">通过闭水试验检查防水是否合格，是否有渗漏现象</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form7.radio5">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form7.radio5 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form7.text5">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form7.text5.length>0">{{`${$store.state.form7.text5.length}/500`}}</span>
          </div>
          <div class="g-testMethod-help">
            <p class="g-testMethod-help-tit">TIPS小贴士</p>
            <p class="g-testMethod-help-tex">
              如何做闭水实验
            </p>
            <p class="g-testMethod-help-tex">
              蓄水试验的蓄水深度应不小于20mm，蓄水高度一般为30-100mm，蓄水时间为24小时，水面无明显下降为合格。
            </p>
            <p class="g-testMethod-help-tex">
              蓄水试验的前期每1小时应到楼下检查一次，后期每2—3小时到楼下检查一次，是否有渗漏现象。若发现漏水情况，应立即停止蓄水试验。
            </p>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第六步   检查洁具及通风</p>
          <p class="g-testMethod1-tex">卫生洁具给水配件应完好无损伤，接口严密，启闭部分灵活</p>
          <p class="g-testMethod1-tex">无外窗的暗卫生间，应设置防止回流的机械通风设施或预留机械通风设置条件</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form7.radio6">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form7.radio6 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form7.text6">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form7.text6.length>0">{{`${$store.state.form7.text6.length}/500`}}</span>
          </div>

        </div>
      </div>
      <div class="g-testMethod-ine0" v-if="testId==8">
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第一步   检查供水</p>
          <p class="g-testMethod1-tex">打开阳台进水开关、水龙头，查看各进水管的供水是否正常，龙头出水是否流畅</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form8.radio1">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form8.radio1 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form8.text1">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form8.text1.length>0">{{`${$store.state.form8.text1.length}/500`}}</span>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第二步   检查排水、溢水</p>
          <p class="g-testMethod1-tex">向阳台的排水管、地漏等排水口注水，若听到咕噜噜的声音说明管道通畅</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form8.radio2">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form8.radio2 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form8.text2">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form8.text2.length>0">{{`${$store.state.form8.text2.length}/500`}}</span>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第三步   检查栏杆</p>
          <p class="g-testMethod1-tex">六层及六层以下住宅的阳台栏杆净高不应低于1.05m，七层及七层以上 住宅的阳台栏杆净高不应低于1.10m，防护栏杆的垂直杆件间净距不应大于0.11m。</p>
          <p class="g-testMethod1-tex">外窗窗台距楼面、地面的净高度低于0.90m时，应有防护设施（窗外有阳台或平台时不受此限制）。</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form8.radio3">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form8.radio3 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form8.text3">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form8.text3.length>0">{{`${$store.state.form8.text3.length}/500`}}</span>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第四步   安全玻璃检查</p>
          <p class="g-testMethod1-tex">检查7层及7层以上建筑物外开窗是否使用安全玻璃，落地窗是否使用安全玻璃，单块玻璃大于1.5㎡时是否使用安全玻璃。阳台栏板玻璃必须使用安全玻璃。</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form8.radio4">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form8.radio4 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form8.text4">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form8.text4.length>0">{{`${$store.state.form8.text4.length}/500`}}</span>
          </div>
          <div class="g-testMethod-help">
            <p class="g-testMethod-help-tit">TIPS小贴士</p>
            <p class="g-testMethod-help-tex">
              如何做闭水实验
            </p>
            <p class="g-testMethod-help-tex">
              如何区分安全玻璃？首先用肉眼看，中空夹层玻璃有两层，家用的层数主要以2、3层为主，原片的厚度常用的有：2+3、3+3、3+5(mm)等。其次是看玻璃的产品报告，上面有产品的详细介绍和质检说明。
            </p>
          </div>
        </div>
      </div>

      <div class="g-testMethod-ine0" v-if="testId==9">
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第一步   检查入户门基本要求</p>
          <p class="g-testMethod1-tex">检查入户门是否安装牢固、开关灵活、关闭严密，入户后视察猫眼，是否松动、不清楚、视线不全或因有异物无法看清楚等景象。</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form9.radio1">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form9.radio1 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form9.text1">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form9.text1.length>0">{{`${$store.state.form9.text1.length}/500`}}</span>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第二步   检查猫眼及其他配件</p>
          <p class="g-testMethod1-tex">
            入户后视察猫眼，是否松动、不清楚、视线不全或因有异物无法看清楚等景象，修复或改换。检查门铰链强度是否合格，橡胶或毛毡密封条是否安装完好、严密。门锁安装是否牢固、操作是否轻便。</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form9.radio2">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form9.radio2 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form9.text2">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form9.text2.length>0">{{`${$store.state.form9.text2.length}/500`}}</span>
          </div>
          <div class="g-testMethod-help">
            <p class="g-testMethod-help-tit">TIPS小贴士</p>
            <p class="g-testMethod-help-tex">如何检查门铰？</p>
            <p class="g-testMethod-help-tex">链将门扇分别打开30°、60°、90°，门扇应能分别稳定停住。门在开启过程中，不应产生倾斜、门铰轴线不应产生大于2mm的位移。</p>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">第三步   检查其他插座布置</p>
          <p class="g-testMethod1-tex">单人卧室需设置两插、三插组合插座2个、三插空调插座1个</p>
          <p class="g-testMethod1-tex">起居室、双人卧室和主卧室需各设置两插、三插组合插座3个，三插空调插座1个；</p>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form9.radio3">
              <el-radio :label="0">合格</el-radio>
              <el-radio :label="1">有问题</el-radio>
            </el-radio-group>
          </div>
          <div class="g-no-text" v-if="$store.state.form9.radio3 == 1">
            <el-input type="textarea" placeholder="请输入对问题的详细描述，例如不符的位置、不符的理由。" :maxlength="500"
                      v-model="$store.state.form9.text3">
            </el-input>
            <span class="lenghNum"
                  v-if="$store.state.form9.text3.length>0">{{`${$store.state.form9.text3.length}/500`}}</span>
          </div>
        </div>
      </div>
      <div class="g-testMethod-ine0" v-if="testId==10">
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">五证</p>
          <div class="g-fiveBook" style="margin-top: 0.2rem">
            <span>1、《国有土地使用证》</span>
            <span @click="dialogImg(0)">示例</span>
          </div>
          <div class="g-fiveBook">
            <span>2、《建设用地规划许可证》</span>
            <span @click="dialogImg(1)">示例</span>
          </div>
          <div class="g-fiveBook">
            <span>3、《建设工程规划许可证》</span>
            <span @click="dialogImg(2)">示例</span>
          </div>
          <div class="g-fiveBook">
            <span>4、《建筑工程施工许可证》</span>
            <span @click="dialogImg(3)">示例</span>
          </div>
          <div class="g-fiveBook">
            <span>5、《商品房预售许可证》</span>
            <span @click="dialogImg(4)">示例</span>
          </div>

          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form10.radio1">
              <el-radio :label="0">齐全</el-radio>
              <el-radio :label="1">不齐全</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">两书</p>
          <div class="g-fiveBook" style="margin-top: 0.2rem">
            <span>1、《住宅质量保证书》</span>
            <!--<span @click="dialogImg(5)">示例</span>-->
          </div>
          <div class="g-fiveBook">
            <span>2、《住宅使用说明书》</span>
            <!--<span @click="dialogImg(6)">示例</span>-->
          </div>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form10.radio2">
              <el-radio :label="0">齐全</el-radio>
              <el-radio :label="1">不齐全</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">一表</p>
          <div class="g-fiveBook" style="margin-top: 0.2rem">
            <span>1、《竣工验收备案表》</span>
            <span @click="dialogImg(7)">示例</span>
          </div>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form10.radio3">
              <el-radio :label="0">齐全</el-radio>
              <el-radio :label="1">不齐全</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="g-testMethod1">
          <p class="g-testMethod1-tit">其他</p>
          <div class="g-fiveBook" style="margin-top: 0.2rem">
            <span>1、《房屋建筑面积测算表》</span>
            <!--<span>示例</span>-->
          </div>
          <div class="g-testMethod1-check">
            <el-radio-group v-model="$store.state.form10.radio4">
              <el-radio :label="0">齐全</el-radio>
              <el-radio :label="1">不齐全</el-radio>
            </el-radio-group>
          </div>
        </div>
      </div>

    </div>
    <div class="testNorm" v-else>
      <div class="g-testNorm-ine0" v-if="testId==0">

        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>房屋净高要求</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、卧室、起居室（厅）的室内净高不应低于2.40m，局部净高不应低于2.10m，且其面积不应大于室内使用面积的1/3</p>
            <p class="g-testNorm-ine0-tex1">2、厨房、卫生间的室内净高不应低于2.20m</p>
            <p class="g-testNorm-ine0-tex2">《住宅设计规范》（GB 50096-2011）5.2.2</p>
            <p class="g-testNorm-ine0-tex2">《住宅设计规范》（GB 50096-2011）5.2.4</p>
          </div>
        </div>
        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>户内门洞要求</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、套内门洞口宽度应符合以下规定：分户门、卧室门不应小于0.95m</p>
            <p class="g-testNorm-ine0-tex1">2、套内门洞口高度，除贮藏室门洞口不应小于1.80m外，其余门洞口高 度不应小于2.10m，设有气窗的门洞口高度不应小于2.40m</p>
            <p class="g-testNorm-ine0-tex2">《住宅设计规范》（GB 50096-2011）5.8.7 </p>
          </div>
        </div>

      </div>
      <div class="g-testNorm-ine0" v-if="testId==1">

        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>户内门洞尺寸</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">套内门洞口宽度应符合以下规定</p>
            <p class="g-testNorm-ine0-tex1">1、套内户门洞宽度不小于1.0m；</p>
            <p class="g-testNorm-ine0-tex1">2、卧室门洞宽度不应小于0.9m；</p>
            <p class="g-testNorm-ine0-tex1">3、厨房门洞宽度不小于0.8m；</p>
            <p class="g-testNorm-ine0-tex1">4、卫生间、阳台门洞宽度不小于0.70m；</p>
            <p class="g-testNorm-ine0-tex1">5、所有门洞高度均不应小于2.0m</p>
            <p class="g-testNorm-ine0-tex2">《住宅设计规范》（GB 50096-2011）5.8.7</p>
          </div>
        </div>
        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>门窗框安装要求</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、窗框、扇安装必须牢固，门扇应开关灵活、关闭严密，无倒翘。推拉门扇 必须有防脱落措施</p>
            <p class="g-testNorm-ine0-tex1">2、窗框与墙体之间的缝隙应填嵌饱满，并采用密封胶密封；密封胶表面应光 滑、顺直，无裂纹</p>
            <p class="g-testNorm-ine0-tex2">《建筑装饰装修工程质量验收规范》（GB 50210－2001）5.3.4</p>
          </div>
        </div>
        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>门窗安全玻璃</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、7层及7层以上建筑物外开窗必须使用安全玻璃</p>
            <p class="g-testNorm-ine0-tex1">2、面积大于1.5㎡的窗玻璃或玻璃底边离最终装修面小于500mm的落地窗必须使用安全玻璃</p>
            <p class="g-testNorm-ine0-tex1">3、单块玻璃大于1.5㎡时应使用安全玻璃</p>
            <p class="g-testNorm-ine0-tex1">4、单面镀膜玻璃的镀膜层及磨砂玻璃的磨砂面应朝向室内。中空玻璃的 单面镀膜玻璃应在最外层，镀膜层应朝向室内</p>
            <p class="g-testNorm-ine0-tex1">5、安装后的玻璃应牢固，不得有裂纹、损伤和松</p>
            <p class="g-testNorm-ine0-tex1">6、密封条与玻璃、玻璃槽口的接触应紧密、平整；密封胶与玻璃、玻璃槽口的边缘应粘结牢固、接缝平齐</p>
            <p class="g-testNorm-ine0-tex1">7、玻璃表面应洁净，不得有腻子、密封胶、涂料等污渍；中空玻璃内外 表面均应洁净，玻璃中空层内不得有灰尘和水蒸气</p>
            <p class="g-testNorm-ine0-tex1">8、单面镀膜玻璃的镀膜层及磨砂玻璃的磨砂面应朝向室内。中空玻璃的 单面镀膜玻璃应在外层，镀膜层应朝向室内"；</p>
            <p class="g-testNorm-ine0-tex2">《建筑安全玻璃管理规定》（发改运行[2003]2116号） 第六条</p>
            <p class="g-testNorm-ine0-tex2">《建筑装饰装修工程质量验收规范》（GB 50210－2001）5.6.2</p>
            <p class="g-testNorm-ine0-tex2">《建筑装饰装修工程质量验收规范》（GB 50210－2001）5.6.9</p>
          </div>
        </div>

      </div>
      <div class="g-testNorm-ine0" v-if="testId==2">
        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>门窗玻璃基本要求</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、密封条与玻璃、玻璃槽口的接触应紧密、平整；密封胶与玻璃、玻璃 槽口的边缘应粘结牢固、接缝平齐</p>
            <p class="g-testNorm-ine0-tex1">2、玻璃表面应洁净，不得有腻子、密封胶、涂料等污渍；中空玻璃内外 表面均应洁净，玻璃中空层内不得有灰尘和水蒸气</p>
            <p class="g-testNorm-ine0-tex1">3、安装后的玻璃应牢固，不得有裂纹、损伤和松动</p>
            <p class="g-testNorm-ine0-tex2">《建筑装饰装修工程质量验收规范》（GB 50210－2001）5.3.8</p>
          </div>
        </div>
        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>窗户密闭及观感要求</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、外窗应无雨水渗漏</p>
            <p class="g-testNorm-ine0-tex1">2、窗框、扇配合间隙必须小于或等于2mm</p>
            <p class="g-testNorm-ine0-tex1">3、窗扇的橡胶密封条或毛毡密封条是否安装完好，不得脱槽</p>
            <p class="g-testNorm-ine0-tex1">4、窗扇表面应洁净、平整、光滑、色泽一致，无锈蚀；大面应无划痕、碰伤； 漆膜或保护层应连续</p>
            <p class="g-testNorm-ine0-tex2">《建筑装饰装修工程质量验收规范》（GB 50210－2001）5.3.11</p>
            <p class="g-testNorm-ine0-tex2">《建筑装饰装修工程质量验收规范》（GB 50210－2001）5.3.6</p>
            <p class="g-testNorm-ine0-tex2">《建筑装饰装修工程质量验收规范》（GB 50210－2001）5.3.9</p>
          </div>
        </div>
        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>门窗安全玻璃</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、7层及7层以上建筑物外开窗必须使用安全玻璃</p>
            <p class="g-testNorm-ine0-tex1">2、面积大于1.5㎡的窗玻璃或玻璃底边离最终装修面小于500mm的落地窗必须使用安全玻璃</p>
            <p class="g-testNorm-ine0-tex1">3、单块玻璃大于1.5㎡时应使用安全玻璃</p>
            <p class="g-testNorm-ine0-tex1">4、单面镀膜玻璃的镀膜层及磨砂玻璃的磨砂面应朝向室内。中空玻璃的 单面镀膜玻璃应在最外层，镀膜层应朝向室内</p>
            <p class="g-testNorm-ine0-tex1">5、安装后的玻璃应牢固，不得有裂纹、损伤和松</p>
            <p class="g-testNorm-ine0-tex1">6、密封条与玻璃、玻璃槽口的接触应紧密、平整；密封胶与玻璃、玻璃槽口的边缘应粘结牢固、接缝平齐</p>
            <p class="g-testNorm-ine0-tex1">7、玻璃表面应洁净，不得有腻子、密封胶、涂料等污渍；中空玻璃内外 表面均应洁净，玻璃中空层内不得有灰尘和水蒸气</p>
            <p class="g-testNorm-ine0-tex1">8、单面镀膜玻璃的镀膜层及磨砂玻璃的磨砂面应朝向室内。中空玻璃的 单面镀膜玻璃应在外层，镀膜层应朝向室内"</p>
            <p class="g-testNorm-ine0-tex2">《建筑安全玻璃管理规定》（发改运行[2003]2116号） 第六条</p>
            <p class="g-testNorm-ine0-tex2">《建筑装饰装修工程质量验收规范》（GB 50210－2001）5.6.2</p>
          </div>
        </div>

      </div>
      <div class="g-testNorm-ine0" v-if="testId==3">

        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>地面工程基本要求</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、面层与下一层应结合牢固，无空鼓、裂纹</p>
            <p class="g-testNorm-ine0-tex1">2、面层表面不应有裂纹、脱皮、麻面、起砂等缺陷</p>
            <p class="g-testNorm-ine0-tex1">3、面层表面的坡度应符合设计要求，不得有倒泛水和积水现象</p>
            <p class="g-testNorm-ine0-tex1">4、水泥砂浆踢脚线与墙面应紧密结合，高度一致，出墙厚度均匀</p>
            <p class="g-testNorm-ine0-tex2">《建筑地面工程施工质量验收规范》（GB 50209-2010）5.2.5</p>
            <p class="g-testNorm-ine0-tex2">《建筑地面工程施工质量验收规范》（GB 50209-2010）5.2.6</p>
            <p class="g-testNorm-ine0-tex2">《建筑地面工程施工质量验收规范》（GB 50209-2010）5.2.7</p>
            <p class="g-testNorm-ine0-tex2">《建筑地面工程施工质量验收规范》（GB 50209-2010）5.2.8</p>
          </div>
        </div>

      </div>
      <div class="g-testNorm-ine0" v-if="testId==4">

        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>墙面观感要求</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、抹灰层应无脱层、空鼓，面层应无爆灰和裂缝；普通抹灰表面应光滑、洁净、接槎平整</p>
            <p class="g-testNorm-ine0-tex1">2、护角、孔洞、槽、盒周围的抹灰表面应整齐、光滑；管道后面的抹灰 表面应平整</p>
            <p class="g-testNorm-ine0-tex2">《建筑装饰装修工程质量验收规范》（GB 50210－2001）4.2.5、4.2.6</p>
          </div>
        </div>
        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>墙面垂直度、平整度要求</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、立面垂直度的允许偏差为4mm</p>
            <p class="g-testNorm-ine0-tex1">2、表面平整度的允许偏差为4mm</p>
            <p class="g-testNorm-ine0-tex1">3、阴阳角方正的允许偏差为4mm</p>
            <p class="g-testNorm-ine0-tex2">《建筑装饰装修工程质量验收规范》（GB 50210－2001）4.2.11</p>
          </div>
        </div>
        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>顶棚观感要求</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、抹灰层应无脱层、空鼓，面层应无爆灰和裂缝</p>
            <p class="g-testNorm-ine0-tex1">2、普通抹灰表面应光滑、 洁净、接槎平整</p>
            <p class="g-testNorm-ine0-tex2">《建筑装饰装修工程质量验收规范》（GB 50210－2001）4.2.5、4.2.6</p>
          </div>
        </div>

      </div>
      <div class="g-testNorm-ine0" v-if="testId==5">

        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>开关插座基本功能</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、开关、插座的面板及接线盒盒体完整、无碎裂、零件齐全。</p>
            <p class="g-testNorm-ine0-tex2">《建筑电气工程施工质量验收规范》（GB 50303－2002）3.2.11</p>
          </div>
        </div>
        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>配电箱检验标准</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、每个空调电源回路不宜超过两只电源插座，但每只柜式空调电源插座应单独一个回路</p>
            <p class="g-testNorm-ine0-tex1">2、各配出回路保护断路器均应具有过载保护和短路保护功能，并应同时断开相线和中性线</p>
            <p class="g-testNorm-ine0-tex1">3、检查闸具及户表能否有效控制（总闸拉闸后完全断电，分闸拉闸后分路断电）</p>
            <p class="g-testNorm-ine0-tex2">《住宅设计标准》（DGJ 08－20－2001）12.3.2</p>
          </div>
        </div>
        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>室内安全插座布置规则</span>
          </div>

          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、住宅内的电源插座与照明，应分路配电</p>
            <p class="g-testNorm-ine0-tex1">2、安装在1.8m及以下的插座均应 采用安全型插座</p>
            <p class="g-testNorm-ine0-tex1">3、插座零相是否接反。</p>
            <p class="g-testNorm-ine0-tex1"> 4、除空调电源插座外，其它电源插座电路应设置漏电保护装置</p>
            <p class="g-testNorm-ine0-tex2">《住宅建筑规范》（GB 50368－2005）8.5.5</p>
            <p class="g-testNorm-ine0-tex2">《住宅设计规范》（GB 50096－2011）8.7</p>
          </div>
        </div>

      </div>
      <div class="g-testNorm-ine0" v-if="testId==6">

        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>厨卫水管要求</span>
          </div>

          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、厨房卫生间内排水横管下表面与楼面、地面净距不得低于1.90m，且不得影响门、窗扇开启</p>
            <p class="g-testNorm-ine0-tex1">2、厨卫冷热水管在上、下平行安装时，热水管应在冷水管上方</p>
            <p class="g-testNorm-ine0-tex1">3、厨卫冷热水管在垂直平行安装时，热水管应在冷水管左侧</p>
            <p class="g-testNorm-ine0-tex1">4、排水管道尤其是阳台排污口是否排水流畅</p>
            <p class="g-testNorm-ine0-tex1">5、给排水管材、管件、阀门、器具连接应安装牢固，位置正确，连接处无渗漏</p>
            <p class="g-testNorm-ine0-tex2">《住宅设计规范》（GB 50096－1999）5.5.5</p>
            <p class="g-testNorm-ine0-tex2"> 建筑给水排水及采暖工程施工质量验收规范（GB50242-2002）</p>
            <p class="g-testNorm-ine0-tex2">《住宅建筑规范》（GB 50368－2005）5.1.6</p>
            <p class="g-testNorm-ine0-tex2">《上海市住宅装饰装修验收标准》4.2</p>
          </div>
        </div>
        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>厨卫插座布置规则</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、厨房设单相两极和单相三极组合插座及单相三极带开关插座各1只，并在排油烟器高度附近处设单相三极插座1只</p>
            <p class="g-testNorm-ine0-tex1">2、每套住宅的空调电源插座、电源插座与照明，应分路设计；厨房电源插座和卫生间电源插座宜设置独立回路</p>
            <p class="g-testNorm-ine0-tex1"> 4、除空调电源插座外，其它电源插座电路应设置漏电保护装置</p>
            <p class="g-testNorm-ine0-tex2">《住宅设计标准》（DGJ 08－20－2001）12.2.2</p>
            <p class="g-testNorm-ine0-tex2">《住宅设计规范》（GB 50096－1999）8.7</p>
          </div>
        </div>

      </div>
      <div class="g-testNorm-ine0" v-if="testId==7">

        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>厨卫水管要求</span>
          </div>

          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、厨房卫生间内排水横管下表面与楼面、地面净距不得低于1.90m，且不得影响门、窗扇开启</p>
            <p class="g-testNorm-ine0-tex1">2、厨卫冷热水管在上、下平行安装时，热水管应在冷水管上方</p>
            <p class="g-testNorm-ine0-tex1">3、厨卫冷热水管在垂直平行安装时，热水管应在冷水管左侧</p>
            <p class="g-testNorm-ine0-tex1">4、排水管道尤其是阳台排污口是否排水流畅</p>
            <p class="g-testNorm-ine0-tex1">5、给排水管材、管件、阀门、器具连接应安装牢固，位置正确，连接处无渗漏</p>
            <p class="g-testNorm-ine0-tex2">《住宅设计规范》（GB 50096－1999）5.5.5</p>
            <p class="g-testNorm-ine0-tex2"> 建筑给水排水及采暖工程施工质量验收规范（GB50242-2002）</p>
            <p class="g-testNorm-ine0-tex2">《住宅建筑规范》（GB 50368－2005）5.1.6</p>
            <p class="g-testNorm-ine0-tex2">《上海市住宅装饰装修验收标准》4.2</p>
          </div>
        </div>
        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>厨卫插座布置规则</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、厨房设单相两极和单相三极组合插座及单相三极带开关插座各1只，并在排油烟器高度附近处设单相三极插座1只</p>
            <p class="g-testNorm-ine0-tex1">2、每套住宅的空调电源插座、电源插座与照明，应分路设计；厨房电源插座和卫生间电源插座宜设置独立回路</p>
            <p class="g-testNorm-ine0-tex1"> 4、除空调电源插座外，其它电源插座电路应设置漏电保护装置</p>
            <p class="g-testNorm-ine0-tex2">《住宅设计标准》（DGJ 08－20－2001）12.2.2</p>
            <p class="g-testNorm-ine0-tex2">《住宅设计规范》（GB 50096－1999）8.7</p>
          </div>
        </div>
        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>厨卫通风</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、无外窗的卫生间，应设置有防回流构造的排气通风道，并预留安装排气机械的位置和条件</p>
            <p class="g-testNorm-ine0-tex2">《住宅设计规范》（GB 50096－1999）8.5.3</p>
          </div>
        </div>

      </div>
      <div class="g-testNorm-ine0" v-if="testId==8">

        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>栏杆设置规则及尺寸要求</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、六层及六层以下住宅的阳台栏杆净高不应低于1.05m；</p>
            <p class="g-testNorm-ine0-tex1">2、七层及七层以上 住宅的阳台栏杆净高不应低于1.10m；</p>
            <p class="g-testNorm-ine0-tex1">3、防护栏杆的垂直杆件间净距不应大于0.11m</p>
            <p class="g-testNorm-ine0-tex1">4、外窗窗台距楼面、地面的净高度低于0.90m（从可踏面算起）时，应有防护设施（窗外有阳台或平台时不受此限制）；</p>
            <p class="g-testNorm-ine0-tex1">5、阳台栏板玻璃必须使用安全玻璃。</p>
            <p class="g-testNorm-ine0-tex2">《建筑安全玻璃管理规定》（发改运行[2003]2116号） 第六条《住宅建筑规范》（GB 50368－2005）5.1.5 </p>
          </div>
        </div>
        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>滴水线要求</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、有排水要求的部位应做滴水线（槽）；滴水线（槽）应整齐顺直、内高 外低，滴水槽的宽度和深度均不应小于10mm。</p>
            <p class="g-testNorm-ine0-tex2">《建筑装饰装修工程质量验收规范》（GB 50210－2001）4.2.10</p>
          </div>
        </div>

      </div>

      <div class="g-testNorm-ine0" v-if="testId==9">

        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>入户门基本要求</span>
          </div>

          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、门框、扇安装必须牢固，门扇应开关灵活、关闭严密，无倒翘。推拉门扇 必须有防脱落措施；</p>
            <p class="g-testNorm-ine0-tex1">2、门扇表面应洁净、平整、光滑、色泽一致，无锈蚀；大面应无划痕、碰伤； 漆膜或保护层应连续；</p>
            <p class="g-testNorm-ine0-tex1">3、外门应无雨水渗漏；</p>
            <p class="g-testNorm-ine0-tex1">
              4、将门扇分别打开30°、60°、90°，门扇应能分别稳定停住。分别从30°、60°、90°角将门扇关闭检查铰链部分是否有窜动。门铰链应能支撑住门体重量， 门在开启90º过程中，门体不应产生倾斜、门铰轴线不应产生大于2mm位移；</p>
            <p class="g-testNorm-ine0-tex1">5、门框、扇配合间隙必须小于或等于2mm；</p>
            <p class="g-testNorm-ine0-tex1">6、门框与墙体之间的缝隙应填嵌饱满，并采用密封胶密封；密封胶表面应光 滑、顺直，无裂纹；</p>
            <p class="g-testNorm-ine0-tex1">7、门扇与门框铰链边贴合面间隙不应大于2mm，门的开启边在关门状态与 门框贴合面间隙不应大于3mm。</p>
            <p class="g-testNorm-ine0-tex1">8、门扇的橡胶密封条或毛毡密封条应安装完好，不得脱槽。</p>
            <p class="g-testNorm-ine0-tex1">9、门锁应安装牢固、操作轻便；不上锁是否会自动关上或者打开。</p>
            <p class="g-testNorm-ine0-tex2">《建筑装饰装修工程质量验收规范》（GB 50210－2001）5.3.4</p>
            <p class="g-testNorm-ine0-tex2"> 《上海市住宅装饰装修验收标准》（DB 31/30－2003）9.1.1</p>
            <p class="g-testNorm-ine0-tex2">《防盗安全门通用技术条件》（GB17565-2007）</p>
            <p class="g-testNorm-ine0-tex2">
              《建筑装饰装修工程质量验收规范》（GB 50210－2001）5.3.11《建筑装饰装修工程质量验收规范》（GB 50210－2001）5.3.8</p>
            <p class="g-testNorm-ine0-tex2">《建筑装饰装修工程质量验收规范》（GB 50210－2001）5.3.9</p>
          </div>
        </div>

        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>室内插座布置规则</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex1">1、单人卧室设单相两极和单相三极组合插座2只，单相三极空调插座1 只；</p>
            <p class="g-testNorm-ine0-tex1">2、起居室、双人卧室和主卧室设单相两极和单相三极组合插座3只，单 相三极空调插座1只。</p>
            <p class="g-testNorm-ine0-tex2">《住宅设计标准》（DGJ 08－20－2001）12.2.2</p>
          </div>
        </div>

      </div>
      <div class="g-testNorm-ine0" v-if="testId==10">

        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>“五证”不全会带来哪些风险</span>
          </div>

          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex2">
              1、无法办理房产证，或房产证办理时间过长开发商如果缺少《国有土地使用证》和《商品房预售许可证》，就没有在土地上建房子的资格，属于违规；且开发商没有出售商品房的资格。购房者买此类房产无法到房管局进行备案，拿不到房产证。</p>
            <p class="g-testNorm-ine0-tex2">2、房产质量没有保障“五证”不全，说明开发商在没有任何监督的情况下进行施工，房屋安全质量有极大隐患。</p>
            <p class="g-testNorm-ine0-tex2">3、开发商骗取定金没有“五证”的不法开发商，并无相关土地开发资格，等购房者交完定金后，可能面临不法开发商跑路的窘境。</p>
            <p class="g-testNorm-ine0-tex2">4、房屋贷款困难部分银行在发放商业贷款时，对开发商的资质有相关要求。部分开发商故意隐瞒贷款限制条款，收取购房者的钱后，就不再管贷款是否能到位。</p>
            <p class="g-testNorm-ine0-tex2">
              5、混淆商用房和住宅用房“五证”决定了房子的性质，住宅和商用的产权年限不同。《中华人民共和国城镇国有土地使用权出让和转让暂行条例》第12条土地使用权出让高年限按下列用途确定：</p>
            <p class="g-testNorm-ine0-tex2">（1）居住用地70年；</p>
            <p class="g-testNorm-ine0-tex2">（2）商业、旅游、娱乐用地40年。</p>
          </div>
        </div>
        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>“两书”不全会带来哪些风险</span>
          </div>
          <div class="g-testNorm-ine0-tex">

            <p class="g-testNorm-ine0-tex2">
              1、房屋施工质量无保障住宅质量保证书说明开发商已经向政府用书面的形式说明，房屋的质量符合工程申请的标准，日后若有质量不合格的问题，开发商需要承担法律责任。《住宅质量保证书》中应当包括：</p>
            <p class="g-testNorm-ine0-tex2">ａ、工程质量监督部门核验的质量等级；</p>
            <p class="g-testNorm-ine0-tex2">ｂ、基础设施工程、房屋建筑的地基基础工程和主体结构工程：为设计文件规定的该工程的合理使用年限；</p>
            <p class="g-testNorm-ine0-tex2">
              ｃ、屋面防水工程、有防水要求的卫生间、房间和外墙面的防渗漏，保修期为５年；供热与供冷系统，保修期为２个采暖期、供冷期；电气管线、给排水管道、设备安装和装修工程，保修期为２年；</p>
            <p class="g-testNorm-ine0-tex2">ｄ、用户报修的单位答复和处理的时限。</p>
            <p class="g-testNorm-ine0-tex2">2、《住宅使用说明书》应当对住宅的结构、性能和各部位（部件）的类型、性能标准等做出说明，并提出使用注意事项，一般应包含如下内容：</p>
            <p class="g-testNorm-ine0-tex2">ａ、开发单位、设计单位、施工单位，委托监理的应注明监理单位；</p>
            <p class="g-testNorm-ine0-tex2">ｂ、结构类型；</p>
            <p class="g-testNorm-ine0-tex2">ｃ、装修、装饰注意事项；</p>
            <p class="g-testNorm-ine0-tex2">ｄ、上水、下水、电、燃气、热力、通讯、消防等设施配置的说明；</p>
            <p class="g-testNorm-ine0-tex2">ｅ、有关设备、设施安装预留位置的说明和安装注意事项；</p>
            <p class="g-testNorm-ine0-tex2">ｆ、门、窗类型，使用注意事项；</p>
            <p class="g-testNorm-ine0-tex2">ｇ、配电负荷；</p>
            <p class="g-testNorm-ine0-tex2">ｈ、承重墙、保留墙、防水层、阳台等部位注意事项的说明；</p>
            <p class="g-testNorm-ine0-tex2">ｉ、其他应说明的问题。</p>

          </div>
        </div>

        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>竣工验收备案表竣工验收备案表</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex2">
              根据《建设工程质量管理条例》第四十九条规定：建设单位应当自建设工程竣工验收合格之日起15日内，将建设工程竣工验收报告和规划、公安消防、环保等部门出具的认可文件或者准许使用文件报建设主管部门或者其他有关部门备案。</p>
          </div>
        </div>
        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>房屋建筑面积测算表</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex2">
              开发商应向购房者提供《房屋建筑面积测算表》，其中《房屋公用部位建筑面积说明》中必须将分摊的共有部位全部列明，并能与建筑平面布置图对照查核。非住宅交付则应根据约定提供竣工验收合格证明或者《上海市房地产权证》。</p>
          </div>
        </div>
        <div class="g-testNorm">
          <div class="g-testNorm-ine0-tit">
            <span>如果没有提供五证两书一表怎么办</span>
          </div>
          <div class="g-testNorm-ine0-tex">
            <p class="g-testNorm-ine0-tex2">开发商交房时若不能提供有效验收证件，则不符合交房条件视为违约，购房人有权拒绝收房，并且可以向当地建委投诉，或向当地房管局反映。</p>
          </div>
        </div>

      </div>
    </div>
    <div class="g-testMethod-btn" v-if="iconType == 0" @click="nextHandler">
      <span>下一步</span>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="7.5rem" :show-close="false">
      <div class="dialogImages">
        <img :src="diaImgs" alt="">
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import TitBar2 from "../common/titBar2.vue";
  export default {
    components: {TitBar2},
    data() {
      return {
        iconType: 0,
        testId: null,
        testTit: "",
        dialogVisible: false,
        diaImgs: "",
        dialogImgList: [
          "http://oxrgdeqd8.bkt.clouddn.com/gytd.jpg",
          "http://oxrgdeqd8.bkt.clouddn.com/jsyd.jpg",
          "http://oxrgdeqd8.bkt.clouddn.com/jsgc.jpg",
          "http://oxrgdeqd8.bkt.clouddn.com/jzgc.jpg",
          "http://oxrgdeqd8.bkt.clouddn.com/spf.jpg",
          "",
          "",
          "http://oxrgdeqd8.bkt.clouddn.com/IMG_3152.JPG"
        ]
      };
    },
    created() {
      let id = this.$route.query.id * 1;
      let name = this.$route.query.names;
      this.testId = id;
      this.testTit = name;
      this.prvImg();
    },
    methods: {
      a() {
        console.log(this.$store.state.a);
      },
      checkIne(type) {
        window.scrollTo(0, 0);
        this.iconType = type;
      },
      dialogImg(index) {
        if (!this.dialogImgList[index]) {
          return;
        }
        this.diaImgs = this.dialogImgList[index];
        this.dialogVisible = true;
      },
      f_toolBox() {
        this.$router.push({
          path: "/getToolBox"
        });
      },
      prvImg() {
        for (let i in this.dialogImgList) {
          if (this.dialogImgList[i] !== '') {
            let im = new Image();
            im.onload = function () {
              let img = document.createElement('img');
              img.style.display = 'none';
              img.src = im.src;
              document.body.appendChild(img);
            };
            im.src = this.dialogImgList[i];
          }
        }
      },
      nextHandler() {
        // window.scrollTo(0, 0);
        // this.testId++;
        let path = "/allList";
        if (this.testId > 5) {
          path = "/atOnceHome";
        }
        this.$router.push({
          path: path,
          isApp: this.$route.query.isApp
        });
      }
    }
  };
</script>
<style scoped>
  .testMethod {
    width: 7.5rem;
    margin: auto;
    padding-top: 0.88rem;
  }

  .g-testMethod,
  .testNorm {
    padding: 0.3rem;
  }

  .g-testMethod-tit {
    margin-bottom: 0.3rem;
    font-family: PingFangSC-Semibold;
    font-size: 0.32rem;
    color: #212832;
    line-height: 0.32rem;
    font-weight: 600;
  }

  .g-testMethod1 {
    padding: 0.3rem;
    margin-bottom: 0.2rem;
    width: 6.3rem;
    background: #ffffff;
    box-shadow: 0 0 0.15rem 0 rgba(169, 183, 197, 0.3);
  }

  .g-testMethod1-tit {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #212832;
    line-height: 0.28rem;
  }

  .g-testMethod1-tex {
    margin-top: 0.2rem;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #8b949e;
    line-height: 0.44rem;
    text-align: justify;
  }

  .g-testMethod-help {
    background: #f7f7f7;
    border-radius: 0.04rem;
    padding: 0.3rem;
    margin-top: 0.1rem;
  }

  .g-testMethod-help-tit {
    margin-bottom: 0.1rem;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #212832;
    line-height: 0.28rem;
  }

  .g-testMethod-help-tex {
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #8b949e;
    line-height: 0.4rem;
  }

  .g-testMethod1-check {
    margin-top: 0.3rem;
  }

  .g-no-text {
    margin-top: 0.3rem;
    position: relative;
    width: 6.3rem;
    height: 2.4rem;
    background: #f7f7f7;
    border: 1px solid #e7e7e7;
    border-radius: 0.04rem;
  }

  .lenghNum {
    position: absolute;
    bottom: 0.1rem;
    right: 0.2rem;
    font-family: PingFangSC-Regular;
    font-size: 0.2rem;
    color: #8b949e;
    line-height: 0.2rem;
  }

  .g-testMethod-btn {
    /*position: fixed;*/
    /*bottom: 0;*/
    /*z-index: 9999;*/
    width: 7.5rem;
    height: 0.88rem;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #ffffff;
    text-align: center;
    line-height: 0.88rem;
    background: #0080ff;
  }

  .g-testNorm {
    box-shadow: 0 0 0.15rem 0 rgba(169, 183, 197, 0.3);
    margin-bottom: 0.2rem;
  }

  .g-testNorm-ine0-tit {
    padding-left: 0.3rem;
    height: 0.78rem;
    line-height: 0.78rem;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #212832;
    border-bottom: 1px solid #eeeeee;
  }

  .g-testNorm-ine0-tex {
    padding: 0.22rem 0.3rem 0.4rem 0.3rem;
  }

  .g-testNorm-ine0-tex1 {
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #7f8893;
    letter-spacing: 1px;
    line-height: 0.4rem;
  }

  .g-testNorm-ine0-tex2 {
    margin-top: 0.2rem;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #b9c0c8;
    line-height: 0.4rem;
  }

  .g-fiveBook {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #8b949e;
    line-height: 0.52rem;
  }

  .dialogImages {
    width: 100%;
  }

  .dialogImages img {
    width: 100%;
  }
</style>
<style>
  .g-testMethod .el-radio__label {
    display: inline-block;
    height: 0.43rem;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #8b949e !important;
    line-height: 0.43rem;
  }

  .g-testMethod .el-radio__inner {
    width: 0.4rem;
    height: 0.4rem;
  }

  .g-testMethod .el-radio__input {
    line-height: 0.43rem;
    padding-top: 0.08rem;
  }

  .g-testMethod .el-radio__input.is-checked .el-radio__inner {
    border: none;
    background: none;
    background-image: url("/static/tool/me_icon_xuanze_s@3x.png");
    background-size: cover;
    background-repeat: no-repeat;
  }

  .g-testMethod .el-radio__inner::after {
    display: none;
  }

  .g-testMethod .el-radio__inner {
    border: 0.02rem solid #dcdfe6;
  }

  .g-testMethod .el-textarea__inner {
    width: 6.3rem;
    height: 2rem;
    background: #f7f7f7;
    border: none;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #212832;
    line-height: 0.44rem;
    padding-top: 0.22rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    text-align: justify;
  }

  .testMethod .el-dialog__body {
    padding: 0 !important;
  }

  .testMethod .el-dialog__header {
    padding: 0;
  }
</style>
