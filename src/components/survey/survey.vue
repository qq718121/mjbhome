<template>
  <div class="survey">
    <div class="u-arc" style="position: absolute;top:7rem;right:-0.6rem;">
      <img style="width: 100%;" src="/static/suv/bg_xingqiu@3x.png" alt="">
    </div>
    <div class="u-arc" style="position: absolute;top:17.87rem;left:0;">
      <img style="width: 100%;" src="/static/suv/bg_xingqiu@3x.png" alt="">
    </div>
    <div class="u-arc" style="position: absolute;top:24.48rem;right:0;">
      <img style="width: 100%;" src="/static/suv/bg_xingqiu@3x.png" alt="">
    </div>
    <div class="u-arc" style="position: absolute;top:32.35rem;left:-0.4rem;">
      <img style="width: 100%;" src="/static/suv/bg_xingqiu@3x.png" alt="">
    </div>
    <div class="u-arc" style="position: absolute;bottom:3.14rem;right:-0.2rem;">
      <img style="width: 100%;" src="/static/suv/bg_xingqiu@3x.png" alt="">
    </div>
    <div class="u-arc" style="position: absolute;bottom:0.4rem;right:-0.3rem;">
      <img style="width: 100%;" src="/static/suv/bg_xingqiu@3x.png" alt="">
    </div>
    <div class="g-top">
      <div class="u-top-img">
        <img style="width: 100%;" src="/static/suv/tu_biaoti@3x.png" alt="">
      </div>
      <div class="u-top-btn">
        <span>买房之后，业主到底应该知道什么</span>
      </div>
      <div class="u-inp-tit">
        <span class="u-inp-tit-l"></span>
        <span class="u-inp-tit-t">请选择您所在的城市</span>
        <span class="u-inp-tit-r"></span>
      </div>
      <div class="u-inp-city">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="g-house-nam">
      <!--<img style="width: 100%;position: absolute" src="/static/suv/bg@3x1.png" alt="">-->
      <p>请输入您想要了解工程质量的楼盘名称</p>
      <div class="u-inp-city">
        <el-input v-model="input" placeholder="非必填"></el-input>
      </div>
    </div>
    <div class="g-check">
      <div class="u-check-icon clearfix">
        <span class="u-check-icon-l"><img src="/static/suv/tu_huan@3x.png" alt=""></span>
        <span class="u-check-icon-r"><img src="/static/suv/tu_huan@3x.png" alt=""></span>
      </div>
      <div class="u-check-cma clearfix">
        <span class="u-check-cma-l"><img src="/static/suv/icon_yinhao_l@3x.png" alt=""></span>
        <span class="u-check-cma-r"><img src="/static/suv/icon_yinhao_s@3x.png" alt=""></span>
      </div>
      <div class="u-check-tit">
        <div class="u-check-tit1"></div>
        <div class="u-check-tit2"></div>
        <div style="margin: auto">
          <p style="text-align: justify">对于购买了房产后，</p>
          <p>您是否关心一下项目？</p>
        </div>
      </div>
      <div class="u-check-ine">
        <div class="u-check-ine-img"></div>
        <div class="u-check-ul">
          <el-checkbox-group v-model="checkList1" @change="aa">
            <ul>
              <li v-for="(city,index) in cities1">
                <el-checkbox :label="index" :key="index">{{city}}</el-checkbox>
              </li>
            </ul>
          </el-checkbox-group>
        </div>
      </div>

      <div class="u-check-fot">多选，最多选5项 (必填项)</div>
    </div>
    <div class="g-check">
      <div class="u-check-icon clearfix">
        <span class="u-check-icon-l"><img src="/static/suv/tu_huan@3x.png" alt=""></span>
        <span class="u-check-icon-r"><img src="/static/suv/tu_huan@3x.png" alt=""></span>
      </div>
      <div class="u-check-cma clearfix">
        <span class="u-check-cma-l"><img src="/static/suv/icon_yinhao_l@3x.png" alt=""></span>
        <span class="u-check-cma-r"><img src="/static/suv/icon_yinhao_s@3x.png" alt=""></span>
      </div>
      <div class="u-check-tit" style="width: 5.5rem;">
        <div class="u-check-tit1" style="width: 5.4rem;"></div>
        <div class="u-check-tit2" style="width: 5.4rem;"></div>
        <div style="margin: auto">
          <p>开发商是否应该完全开放工地，</p>
          <p>而非规定固定路线浏览？</p>
        </div>
      </div>
      <div class="u-check-ine">
        <div class="u-check-ine-img"></div>
        <div class="u-check-ul">
          <el-checkbox-group v-model="checkList2" @change="aa">
            <ul>
              <li v-for="(city,index) in cities2">
                <el-checkbox :label="index" :key="index">{{city}}</el-checkbox>
              </li>
            </ul>
          </el-checkbox-group>
        </div>
      </div>
      <div class="u-check-fot">单选 (必填项)</div>
    </div>
    <div class="g-check">
      <div class="u-check-icon clearfix">
        <span class="u-check-icon-l"><img src="/static/suv/tu_huan@3x.png" alt=""></span>
        <span class="u-check-icon-r"><img src="/static/suv/tu_huan@3x.png" alt=""></span>
      </div>
      <div class="u-check-cma clearfix">
        <span class="u-check-cma-l"><img src="/static/suv/icon_yinhao_l@3x.png" alt=""></span>
        <span class="u-check-cma-r"><img src="/static/suv/icon_yinhao_s@3x.png" alt=""></span>
      </div>
      <div class="u-check-tit">
        <div class="u-check-tit1"></div>
        <div class="u-check-tit2"></div>
        <div style="margin: auto">
          <p>对于购买了房产后，</p>
          <p>您是否关心一下项目？</p>
        </div>
      </div>
      <div class="u-check-ine">
        <div class="u-check-ine-img"></div>
        <div class="u-check-ul">
          <el-checkbox-group v-model="checkList3" @change="aa">
            <ul>
              <li v-for="(city,index) in cities3">
                <el-checkbox :label="index" :key="index">{{city}}</el-checkbox>
              </li>
            </ul>
          </el-checkbox-group>
        </div>
      </div>

      <div class="u-check-fot">多选，最多选2项 (必填项)</div>
    </div>
    <div class="g-check">
      <div class="u-check-icon clearfix">
        <span class="u-check-icon-l"><img src="/static/suv/tu_huan@3x.png" alt=""></span>
        <span class="u-check-icon-r"><img src="/static/suv/tu_huan@3x.png" alt=""></span>
      </div>
      <div class="u-check-cma clearfix">
        <span class="u-check-cma-l"><img src="/static/suv/icon_yinhao_l@3x.png" alt=""></span>
        <span class="u-check-cma-r"><img src="/static/suv/icon_yinhao_s@3x.png" alt=""></span>
      </div>
      <div class="u-check-tit" style="width: 3.2rem;height: 0.77rem;">
        <div class="u-check-tit1" style="width: 3.1rem;height: 0.67rem;"></div>
        <div class="u-check-tit2" style="width: 3.1rem;height: 0.67rem;"></div>
        <p style="width: 100%;height: 0.77rem;line-height: 0.77rem">您的其他建议</p>
      </div>
      <div class="u-check-ine" style="padding-bottom: 0;background: none">
        <el-input
          type="textarea"
          :autosize="{ minRows: 7, maxRows: 10}"
          :rows="7"
          resize
          placeholder="请输入内容"
        >
        </el-input>
      </div>
      <div class="u-check-fot">(非填项)</div>
    </div>
    <div class="g-check">
      <div class="u-check-icon clearfix">
        <span class="u-check-icon-l"><img src="/static/suv/tu_huan@3x.png" alt=""></span>
        <span class="u-check-icon-r"><img src="/static/suv/tu_huan@3x.png" alt=""></span>
      </div>
      <div class="u-check-cma clearfix">
        <span class="u-check-cma-l"><img src="/static/suv/icon_yinhao_l@3x.png" alt=""></span>
        <span class="u-check-cma-r"><img src="/static/suv/icon_yinhao_s@3x.png" alt=""></span>
      </div>
      <div class="u-check-tit" style="width: 3.2rem;height: 0.77rem;">
        <div class="u-check-tit1" style="width: 3.1rem;height: 0.67rem;"></div>
        <div class="u-check-tit2" style="width: 3.1rem;height: 0.67rem;"></div>
        <p style="width: 100%;height: 0.77rem;line-height: 0.77rem">您的联系方式</p>
      </div>
      <div class="u-check-ine" style="background: none">
        <el-input type="number" placeholder="非必填"></el-input>
      </div>
    </div>
    <div class="g-sub-btn" @click="submit">
      <p style="color: #fff;text-align: center">提交</p>
    </div>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  import Obshare from '../../common/js/obshare'
  export default {
    data(){
      return {
        form: {},
        input: '',
        checkList1: [],
        checkList2: [],
        checkList3: [],
        cities1: [
          "能否按时交房；",
          "出现擅自变更规划，未按照规划图纸施工;",
          "出现重大建筑施工问题，如地基、楼体、\n楼面施工问题等；",
          "出现严重建筑质量问题，如屋面抹灰、\n墙体裂缝、防水问题等；",
          "隐蔽工程施工情况；",
          "交房时面积、尺寸误差过大",
          "质量未达标强制交房"
        ],
        cities2: [
          "是，应该完全开放工地",
          "不用，开发商规定的浏览路线即可",
          "不关心"
        ],
        cities3: [
          "开放工地，业主自行监控；",
          "开放工地，第三方平台或专家代表业主监控；",
          "开发商自主监控，定期出具报告；",
          "传统方式，开发商委托监理公司,\n由监理公司开放监控数据",
        ]
      }
    },
    created(){

    },
    methods: {
      ...mapMutations({
        set_motai: 'set_motai',
        set_school_class: 'set_school_class',
        change_motai: 'change_motai',
        set_dat_com: 'set_dat_com',
        set_data_comment: 'set_data_comment'
      }),
      f_op_moban(){
        let img = new Image();
        let this_ = this;
        img.src = '/static/suv/bg_tankuang_n@3x.png';
        img.onload = function () {
          this_.set_motai('2');
          this_.set_school_class('animated bounceIn');
          this_.change_motai();
        }
      },
      aa(){
        console.log(this.checkList1);
      },
      submit(){

      }
    },
  }
</script>
<style scoped>

  .survey {
    position: relative;
    z-index: 1;
    width: 7.5rem;
    background-image: linear-gradient(-269deg, #181B41 0%, #181B41 97%);
    overflow: hidden;
  }

  .u-arc {
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 2.6rem;
    position: absolute;
    z-index: -1;
    /*background-image: url('/static/suv/bg_xingqiu@3x.png');*/
  }

  .g-top {
    position: relative;
    width: 100%;
    height: 5.98rem;
    background-image: url('/static/suv/bg_toutu@3x.png');
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    z-index: -1;
  }

  .u-top-img {
    margin: 0.74rem auto 0;
    width: 4.72rem;
    height: 1.88rem;
  }

  .u-top-btn {
    width: 100%;
  }

  .u-top-btn span {
    display: block;
    margin: 0.563rem auto 0;
    width: 4.8rem;
    height: 0.59rem;
    border-radius: 0.59rem;
    background: linear-gradient(to bottom, #fff 10%, #949DD6);
    font-size: 0.28rem;
    line-height: 0.59rem;
    text-align: center;
    color: #181B41;
  }

  .u-inp-tit {
    text-align: center;
    margin-top: 0.7rem;
  }

  .u-inp-tit-l {
    display: inline-block;
    width: 0.78rem;
    height: 0.22rem;
    background-image: url('/static/suv/bg_guangxiao_y@3x.png');
    background-size: cover;
  }

  .u-inp-tit-t {
    font-family: PingFangSC-Medium;
    font-size: 0.32rem;
    color: #FFFFFF;
    line-height: 0.32rem;
  }

  .u-inp-tit-r {
    display: inline-block;
    width: 0.78rem;
    height: 0.22rem;
    background-image: url('/static/suv/bg_guangxiao_z@3x.png');
    background-size: cover;
  }

  .u-inp-city {
    width: 5.2rem;
    height: 0.8rem;
    margin: 0.3rem auto;
  }

  .g-house-nam p {
    margin-top: 0.6rem;
    font-family: PingFangSC-Semibold;
    font-size: 0.32rem;
    color: #FFFFFF;
    line-height: 0.32rem;
    text-align: center;
  }

  .g-house-nam {
    margin-top: 0.6rem;
  }

  .g-check {
    position: relative;
    margin: 0.96rem auto;
    width: 7rem;
    background: #D9DDFF;
    border-top-left-radius: 0.15rem;
    border-bottom-left-radius: 0.1rem;
    border-bottom-right-radius: 0.1rem;
    border: 1px solid rgba(0, 0, 0, 0);
  }

  .g-check:after {
    content: '';
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    background: #D9DDFF;
    position: absolute;
    right: -0.2rem;
    top: 0;
    border-top-right-radius: 0.1rem;
    border-bottom-right-radius: 0.1rem;
  }

  .u-check-icon {
    width: 100%;
    position: absolute;
    top: -0.4rem;
  }

  .u-check-icon-l {
    float: left;
    margin-left: 1.25rem;
    display: inline-block;
    width: 0.25rem;
  }

  .u-check-icon-r {
    float: right;
    margin-right: 1.25rem;
    display: inline-block;
    width: 0.25rem;
  }

  .u-check-cma {
    width: 100%;
  }

  .u-check-cma-l {
    float: left;
    margin-left: 0.2rem;
    margin-top: 0.1rem;
    display: inline-block;
    width: 0.6rem;
    height: 0.56rem;
  }

  .u-check-cma-r {
    float: right;
    margin-right: 0.2rem;
    margin-top: 0.1rem;
    display: inline-block;
    width: 0.6rem;
    height: 0.56rem;
  }

  .u-check-tit {
    position: relative;
    margin: 0.2rem auto;
    width: 4.3rem;
    height: 1.3rem;
    opacity: 0.8;
    font-size: 0.36rem;
    color: #fff;
    display: flex;
    /*line-height: 0.6rem;*/
  }

  .u-check-tit1, .u-check-tit2 {
    position: absolute;
    z-index: -1;
    width: 4.2rem;
    height: 1.2rem;
    opacity: 0.8;
    background: #3C47A5;
  }

  .u-check-tit1 {
    top: 0;
    left: 0;
  }

  .u-check-tit2 {
    bottom: 0;
    right: 0;
  }

  .u-check-tit p {
    text-align: center;
  }

  .u-check-ine {
    position: relative;
    margin: auto;
    padding-bottom: 0.4rem;
    width: 6.5rem;
    background: #EEF0FF;
    border-radius: 8px;
    overflow: hidden;
  }

  .u-check-ine-img {
    position: absolute;
    bottom: 0.2rem;
    right: 0.2rem;
    width: 0.8rem;
    height: 1.19rem;
    background-image: url('/static/suv/tu_chahua_n@3x.png');
    background-size: cover;
  }

  .u-check-fot {
    margin: 0.3rem auto;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #9298C6;
    line-height: 0.24rem;
    text-align: center;
  }

  .u-check-ul li {
    display: flex;
    padding: 0 0 0 0.3rem;
    margin-top: 0.4rem;
  }

  .u-check-ul li span {
    /*margin: auto;*/
    /*margin-left: 0;*/
    margin-right: 0.2rem;
    display: inline-block;
    width: 0.36rem;
    height: 0.36rem;
    /*vertical-align: middle;*/
  }

  .u-check-ul p {
    /*margin: auto;*/
    /*margin-left: 0;*/
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #3C47A5;
    line-height: 0.35rem;
    text-align: left;
  }

  .g-sub-btn {
    width: 100%;
    height: 0.8rem;
    background: #6B7DFF;
    line-height: 0.8rem;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #FFFFFF;
  }
</style>
<style>
  .el-input__inner {
    height: 0.8rem !important;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #ACB2E4;
    line-height: 0.28rem;
  }

  .el-input__inner::-webkit-input-placeholder {
    line-height: 0.4rem;
  }

  .el-input__inner:-moz-placeholder {
    line-height: 0.4rem;
  }

  /* Firefox版本4-18 */
  .el-input__inner::-moz-placeholder {
    line-height: 0.4rem;
  }

  /* Firefox版本19+ */
  .el-input__inner:-ms-input-placeholder {
    line-height: 0.4rem;
  }

  /* IE浏览器 */

  .el-textarea__inner {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #ACB2E4;
    line-height: 0.36rem;
    text-align: justify;
  }

  .el-checkbox__label {
    display: inline-block;
    height: 100%;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #3C47A5;
    line-height: 0.36rem;
    text-align: justify;
  }

  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #3C47A5;
  }

  .el-checkbox {
    display: flex;
    padding: 0;
    white-space: pre-wrap;
  }

  .el-checkbox__inner {
    border: none !important;
    margin: auto;
    display: inline-block;
    width: 0.36rem;
    height: 0.36rem;
    border-radius: 0.36rem;
    background-image: url('/static/suv/icon_weixuanze@3x.png');
    background-size: cover;
    background-color: #EEF0FF;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-image: url('/static/suv/icon_xuanzhong@3x.png');
    background-size: cover;
    background-color: #EEF0FF;
  }

  .el-checkbox__inner::after {
    display: none;
  }
</style>
