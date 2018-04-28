<template>
  <div class="survey" style="overflow: hidden">
    <div id="amapDemo" v-show="false"></div>
    <div class="u-arc" style="position: absolute;top:10rem;right:-0.6rem;">
      <img style="width: 100%;" src="/static/suv/bg_xingqiu@3x.png" alt="">
    </div>
    <div class="u-arc" style="position: absolute;top:20.87rem;left:0;">
      <img style="width: 100%;" src="/static/suv/bg_xingqiu@3x.png" alt="">
    </div>
    <div class="u-arc" style="position: absolute;top:28.78rem;right:0;">
      <img style="width: 100%;" src="/static/suv/bg_xingqiu@3x.png" alt="">
    </div>
    <div class="u-arc" style="position: absolute;top:36.65rem;left:-0.4rem;">
      <img style="width: 100%;" src="/static/suv/bg_xingqiu@3x.png" alt="">
    </div>
    <div class="u-arc" style="position: absolute;bottom:4.54rem;right:-0.2rem;">
      <img style="width: 100%;" src="/static/suv/bg_xingqiu@3x.png" alt="">
    </div>
    <div class="g-top">
      <div class="u-top-img">
        <img style="width: 100%;" src="/static/suv/tu_biaoti@3x.png" alt="">
      </div>
      <div class="u-top-btn">
        <div class="u-top-btn1">
          <div class="u-top-btn2">
            <div class="u-top-btn3">
              <p>我们诚挚的邀请你，用1分钟时间参与质量寻光计划用户调查，每份用户投票都将成为改变工程现状的重要依据。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="g-house-nam">
      <div class="u-inp-tit">
        <span class="u-inp-tit-l"></span>
        <span class="u-inp-tit-t">请选择您所在的城市</span>
        <span class="u-inp-tit-r"></span>
        <div class="u-inp-city" @click="f_check_city">
          <el-input v-model="form.d_city" placeholder="请输入内容" disabled></el-input>
        </div>
      </div>

      <!--<img style="width: 100%;position: absolute" src="/static/suv/bg@3x1.png" alt="">-->
      <p>请输入您想要了解工程质量的楼盘名称</p>
      <div class="u-inp-city">
        <el-input v-model="form.d_house_nam" :maxlength=50 placeholder="非必填"></el-input>
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
          <p>您是否关心以下项目？</p>
        </div>
      </div>
      <div class="u-check-ine">
        <div class="u-check-ul">
          <el-checkbox-group v-model="form.checkList1">
            <ul>
              <li v-for="(city,index) in cities1">
                <el-checkbox :label="index" :key="index">{{city}}</el-checkbox>
              </li>
            </ul>
          </el-checkbox-group>
        </div>
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
      <div class="u-check-tit" style="width: 6.4rem;">
        <div class="u-check-tit1" style="width: 6.3rem;"></div>
        <div class="u-check-tit2" style="width: 6.3rem;"></div>
        <div style="margin: auto">
          <p>开发商是否应该完全开放工地供业主</p>
          <p>和第三方监管，而非固定浏览路线？</p>
        </div>
      </div>
      <div class="u-check-ine">
        <div class="u-check-ul">
          <el-checkbox-group v-model="form.checkList2">
            <ul>
              <li v-for="(city,index) in cities2">
                <el-checkbox :label="index" :key="index">{{city}}</el-checkbox>
              </li>
            </ul>
          </el-checkbox-group>
        </div>
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
      <div class="u-check-tit" style="width: 5.2rem;">
        <div class="u-check-tit1" style="width: 5.1rem;"></div>
        <div class="u-check-tit2" style="width: 5.1rem;"></div>
        <div style="margin: auto">
          <p>您希望通过哪种方式</p>
          <p>监控您所购房产的建筑过程？</p>
        </div>
      </div>
      <div class="u-check-ine">
        <div class="u-check-ul">
          <el-checkbox-group v-model="form.checkList3">
            <ul>
              <li v-for="(city,index) in cities3">
                <el-checkbox :label="index" :key="index">{{city}}</el-checkbox>
              </li>
            </ul>
          </el-checkbox-group>
        </div>
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
      <div class="u-check-tit" style="width: 3.2rem;height: 0.77rem;">
        <div class="u-check-tit1" style="width: 3.1rem;height: 0.67rem;"></div>
        <div class="u-check-tit2" style="width: 3.1rem;height: 0.67rem;"></div>
        <p style="width: 100%;height: 0.77rem;line-height: 0.77rem">您的其他建议</p>
      </div>
      <div class="u-check-ine" style="padding-bottom: 0;background: none">
        <el-input
          type="textarea"
          :autosize="{ minRows: 7, maxRows: 10}"
          v-model="form.d_area"
          :rows="7"
          :maxlength="150"
          resize
          placeholder="请输入内容"
        >
        </el-input>
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
      <div class="u-check-tit" style="width: 3.2rem;height: 0.77rem;">
        <div class="u-check-tit1" style="width: 3.1rem;height: 0.67rem;"></div>
        <div class="u-check-tit2" style="width: 3.1rem;height: 0.67rem;"></div>
        <p style="width: 100%;height: 0.77rem;line-height: 0.77rem">您的联系方式</p>
      </div>
      <div class="u-check-ine" style="background: none">
        <el-input type="tel" v-model="form.d_phone" placeholder="请输入手机号"></el-input>
      </div>
    </div>
    <div class="g-sub-btn" @click="submit">
      <p style="color: #fff;text-align: center">提交</p>
    </div>
    <div class="g-dislog">

      <transition name="el-fade-in-linear">
        <div class="transition-box sur_moban_" v-show="show" @touchmove.prevent @click="close"></div>
      </transition>
      <transition name="el-fade-in-linear">
        <div class=" g-mo-body" v-show="show">
          <div class="clearfix">
            <div class="g-dislog-tit" v-show="show">您所在的城市</div>
            <div class="g-city1-tit"
                 style="float: left;padding-left: 0.2rem;padding-right: 0.2rem;margin-left: 0.2rem;margin-right: 0.3rem"
                 @click="is_city_one=true"><span>{{one_val}}</span>
            </div>
            <div class="g-city1-tit"
                 style="float: left;padding-left: 0.2rem;padding-right: 0.2rem;margin-left: 0.2rem;margin-right: 0.3rem"
                 v-if="is_city_two"><span>{{two_val}}</span>
            </div>
            <div @click="show=false" v-if="btn_show" class="city-check">
              <span>确认选择</span>
            </div>
          </div>
          <div class="g-city clearfix">
            <div class="g-city1" v-if="is_city_one">
              <ul style="padding-bottom: 0.5rem">
                <li v-for="(val,key) in one_city" @click="f_check_one_city(key)">{{val}}</li>
              </ul>
            </div>
            <div class="g-city2" v-if="is_city_two">
              <ul>
                <li v-for="(val,key) in two_city" @click="f_check_two_city(key)">{{val}}</li>
              </ul>
            </div>
          </div>
        </div>
      </transition>

    </div>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  import Obshare from '../../common/js/obshare'
  import {Message, MessageBox} from 'element-ui';
  import Ciy from '../../common/js/city'
  import qs from 'qs'

  export default {
    data(){
      return {
        show: false,
        SHARE_TITLE: '买房，为什么成了压垮我们的最后一根稻草',
        SHARE_INNER: '房屋质量，使买房成了压垮我们的最后一根稻草。我们以为新房是迈向新生活的大门，却往往忽略了买房之后要面临的各种不可控因素。',
        btn_show: false,
        innerVisible: false,
        is_city_one: true,
        is_city_two: false,
        one_city: [],
        two_city: [],
        one_val: '请选择',
        two_val: '请选择',
        form: {
          d_city: '',
          d_house_nam: '',
          d_area: '',
          d_phone: null,
          checkList1: [],
          checkList2: [],
          checkList3: [],
        },
        input: '',
        cities1: [
          "能否按时交房；",
          "是否出现擅自变更规划，未按照规划图纸\n施工；",
          "是否出现重大建筑施工问题，如地基、楼体、\n楼面施工问题等；",
          "是否出现严重建筑质量问题，如屋面抹灰、\n墙体裂缝、防水问题等；",
          "是否希望了解隐蔽工程施工情况；",
          "是否出现质量未达标强制交房（如面积尺寸、\n公共设施、配件等与合同不符）",
          "不关心"
        ],
        cities2: [
          "应该完全开放工地给业主和第三方监管；",
          "应该完全开放给业主，经过业主授权后可以\n开放给第三方；",
          "只能完全开放给业主；",
          "不用开放，开发商可以做好自我监管；",
          "不关心"
        ],
        cities3: [
          "开发商开放工地，由专业机构与业主签署代\n理监控协议，代表业主对建筑过程进行严格\n监控；",
          "开发商开放工地，由业主自行监控",
          "由开发商自行监控，定期出具报告给业主；",
          "不关心；",
        ]
      }
    },
    created(){
      let CODE;
      const URL = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx18049c5f688a24ef&redirect_uri=http%3A%2F%2Fback.homehawkeye.com%2Fmaijiabangbackstate-1.0-SNAPSHOT%2Fauthorization&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect';
      document.body.id = 'survey';
      if (!this.$route.query.userId) {
//        CODE = this.f_getParam().userId;
        window.location = URL;
      } else {
        CODE = this.$route.query.userId;
        if (CODE) {
          window.sessionStorage.setItem('code', CODE);
        }
      }

      for (let i in Ciy) {
        this.one_city.push(Ciy[i].name);
      }
      let img = new Image();
      img.src = '/static/suv/icon_xuanzhong@3x.png';
      img.style.display = 'none';
      document.body.appendChild(img);
      setTimeout(() => {
        this.keyUpSearch();
      }, 200);
      this.$weixin(this.SHARE_TITLE, this.SHARE_INNER);
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
      f_get_dizhi(options){
        let url = `http://restapi.amap.com/v3/geocode/regeo?key=1e299bf9e95f5cb9f5787eb00e4ef4e3&location=${options}`;
        this.$Axios.get(url).then(res => {
          let re = res.data.regeocode.addressComponent;
          if (re.province == '北京市' || re.province == '上海市' || re.province == '天津市 ' || re.province == '重庆市') {
            this.form.d_city = re.province;
            this.one_val = re.province;
          } else {
            this.form.d_city = re.district;
            this.one_val = re.district;
          }
        }).catch((err) => {
//          alert('您的网络不佳，请手动选择')
        });
      },
      keyUpSearch () {
        let mapObj = new AMap.Map('amapDemo', {
            center: [0, 0],
            zoom: 6
          }),
          this_ = this;
        mapObj.plugin(['AMap.Geolocation'], function () {
          let geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, //  是否使用高精度定位，默认:true
            timeout: 10000, //  超过10秒后停止定位，默认：无穷大
            maximumAge: 0, // 定位结果缓存0毫秒，默认：0
            convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true, //  显示定位按钮，默认：true
            buttonPosition: 'LB',  // 定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20), //  定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true, //  定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true, //  定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true,  //  定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy: true  //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          });
          mapObj.addControl(geolocation);
          geolocation.getCurrentPosition();
          AMap.event.addListener(geolocation, 'complete', (result) => {
            let op = result.position.lng + ',' + result.position.lat;
            this_.f_get_dizhi(op);
          });  //  返回定位信息
          AMap.event.addListener(geolocation, 'error', (result) => {
            console.log('您的网络不佳，请手动选择')
          })  //  返回定位出错信息
        })
      },
      submit(){
        if (this.form.checkList1.length == 0 || this.form.checkList2.length == 0 || this.form.checkList3.length == 0 || !this.form.d_city) {
          Message({
            message: '有必填项未填写',
            type: 'error'
          });
        } else {
          MessageBox.confirm('确认提交吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            var d = {body: {}}, datas = null,
              url = this.$url.httpRequests + 'insertUserLightSeekInfo';
            d.body.cityName = this.form.d_city;
            d.body.buidingName = this.form.d_house_nam;
            d.body.otherSuggestion = this.form.d_area;
            d.body.userPhone = !this.form.d_phone ? '' : this.form.d_phone;
            d.body.beforeCareProjects = this.form.checkList1.join(',');
            d.body.isOpenSite = this.form.checkList2.join(',');
            d.body.afterCareProjects = this.form.checkList3.join(',');
            d.body.userId = window.sessionStorage.getItem('code');
            datas = qs.stringify({d: JSON.stringify(d)});
            //你要传给后台的参数值 key/value
            this.$Axios.post(url, datas, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
              }
            }).then((response) => {
              if (response.data.code == '0') {
                this.set_motai('2');
                this.set_school_class('0', 'animated bounceIn');
                this.change_motai();
              } else {
                Message({
                  message: '提交失败',
                  type: 'error'
                });
              }
            }).catch(function (error) {
              console.log(error);
            });
          }).catch(() => {

          });
        }
      },
      handleClose(done) {
        MessageBox.confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      f_check_city(){
        this.show = true;
      },
      close(){
        this.show = false;
      },
      f_check_one_city(key){
        this.two_city.length = 0;
        this.two_val = '请选择';
        for (let i in Ciy[key].city) {
          this.two_city.push(Ciy[key].city[i].name);
        }
        this.one_val = this.one_city[key];
        this.is_city_two = true;
        this.is_city_one = false;
      },
      f_check_two_city(key){
        this.two_val = this.two_city[key];
        this.form.d_city = this.two_val;
        this.btn_show = true;
      },
      f_getParam() {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
          var str = url.substr(1),
            strs = str.split("&");
          for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
          }
        }
        return theRequest;
      }
    },
  }
</script>
<style scoped>
  .sur_moban_ {
    width: 7.5rem;
    left: 50%;
    margin-left: -3.75rem;
    right: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    bottom: 0;
    top: 0;
    z-index: 999;
    display: -webkit-flex; /*设置父元素盒子的，这样内部盒子就会水平居中，上下居中。*/
    -webkit-justify-content: center; /*设置父元素盒子的，这样内部盒子就会水平居中，上下居中。*/
    -webkit-align-items: center; /*设置父元素盒子的，这样内部盒子就会水平居中，上下居中。*/
  }

  .g-dislog-tit {
    margin-bottom: 0.3rem;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #8B949E;
    line-height: 0.28rem;
    text-align: center;
  }

  body {
    overflow: hidden !important;
  }

  .survey {
    position: relative;
    z-index: 1;
    width: 7.5rem;
    background-image: linear-gradient(-269deg, #181B41 0%, #181B41 97%);
    overflow: hidden;
    margin: auto;
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
    background-image: url('/static/suv/bg_toutu@3x.png');
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    z-index: -1;
  }

  .u-top-img {
    margin: 0.74rem auto 0;
    width: 5.92rem;
    height: 1.88rem;
  }

  .u-top-btn {
    width: 100%;
    margin-top: 0.78rem;
  }

  .u-top-btn1 {
    margin-left: 0.255rem;
    position: relative;
    width: 6.79rem;
    height: 3rem;
    background: rgba(217, 221, 255, 0.2);
    border-radius: 0.1rem;
  }

  .u-top-btn2 {
    position: absolute;
    top: 0.18rem;
    right: 0.2rem;
    bottom: 0.2rem;
    left: 0.2rem;
    width: 6.79rem;
    height: 2.62rem;
    background: rgba(217, 221, 255, 0.2);
    border-radius: 0.08rem;
  }

  .u-top-btn3 {
    margin-top: 0.2rem;
    z-index: 99;
    width: 6.59rem;
    height: 2.22rem;
    background-image: linear-gradient(-180deg, #EEF0FF 0%, #D9DDFF 100%);
    border-radius: 0.06rem;
    overflow: hidden;
  }

  .u-top-btn3 p {
    margin: 0.4rem auto;
    width: 5.76rem;
    height: 1.42rem;
    text-align: justify;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #3C47A5;
    line-height: 0.48rem;
  }

  /*.u-top-btn span {*/
  /*display: block;*/
  /*margin: 0.563rem auto 0;*/
  /*width: 4.8rem;*/
  /*height: 0.59rem;*/
  /*border-radius: 0.59rem;*/
  /*background: linear-gradient(to bottom, #fff 10%, #949DD6);*/
  /*font-size: 0.28rem;*/
  /*line-height: 0.59rem;*/
  /*text-align: center;*/
  /*color: #181B41;*/
  /*}*/

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
    box-sizing: content-box;
    border-top: hidden;
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
    margin-bottom: 0.3rem;
    width: 6.5rem;
    background: #EEF0FF;
    border-radius: 4px;
    overflow: hidden;
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
    height: 0.98rem;
    background: #6B7DFF;
    line-height: 0.98rem;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #FFFFFF;
  }

  .g-mo-body {
    width: 7.5rem;
    height: 7.04rem;
    background: #fff;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    z-index: 9999;
    /*padding-bottom: 0.4rem;*/
    padding-top: 0.4rem;
  }

  .g-city {
    border-bottom: 1px solid #E7E7E7;
    height: 100%;
    padding-bottom: 0.5rem;
  }

  .g-city1, .g-city2 {
    float: left;
    height: 100%;
  }

  .g-city1 ul, .g-city2 ul {
    overflow-y: scroll; /* winphone8和android4+ */
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
    height: 6rem;
    padding-bottom: 0.3rem;
  }

  .g-city1 ul li, .g-city2 ul li {
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    text-align: center;
    margin-top: 0.2rem;
    margin-bottom: 0.4rem;
  }

  .g-city1-tit, .g-city2-tit {

    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #F56364;
    line-height: 0.6rem;
    border-bottom: 2px solid #F56364;
    text-align: center;

  }

  .city-check {
    border-radius: 0.04rem;
    border: 1px solid lightgray;
    padding: 0.1rem;
    float: right;
    color: #F56364;
    margin-top: 0.05rem;
    margin-right: 0.5rem;
  }
</style>
<style>
  .u-inp-city .el-input .el-input__inner, .u-check-ine .el-input .el-input__inner {
    height: 0.8rem !important;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #3C47A5;
    line-height: 0.88rem !important;
    border: none !important;
  }

  .u-inp-city .el-input.is-disabled .el-input__inner {
    background: #fff !important;
  }

  .u-check-ine .el-textarea .el-textarea__inner {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    line-height: 0.36rem;
    text-align: justify;
    border: none !important;
    color: #3C47A5;
  }

  .u-check-ul ul li .el-checkbox__label {
    display: inline-block;
    height: 100%;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #3C47A5;
    line-height: 0.36rem;
    text-align: justify;
  }

  .u-check-ul ul li .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #3C47A5;
  }

  .u-check-ul ul li .el-checkbox {
    display: flex;
    padding: 0;
    white-space: pre-wrap;
  }

  .u-check-ul ul li .el-checkbox__inner {
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

  .u-check-ul ul li .el-checkbox__input.is-checked .el-checkbox__inner {
    background-image: url('/static/suv/icon_xuanzhong@3x.png');
    background-size: cover;
    background-color: #EEF0FF;
  }

  .u-check-ul ul li .el-checkbox__inner::after {
    display: none;
  }

  /*.g-dislog .el-dialog {*/
  /*position: fixed;*/
  /*bottom: 0;*/
  /*margin: 0;*/
  /*left: 50%;*/
  /*margin-left: -3.75rem;*/
  /*width: 7.5rem !important;*/
  /*height: 7.05rem;*/
  /*}*/

  /*.g-dislog .el-dialog__title {*/
  /*font-family: PingFangSC-Regular;*/
  /*font-size: 0.24rem;*/
  /*color: #8B949E;*/
  /*line-height: 0.28rem;*/
  /*display: block;*/
  /*text-align: center;*/
  /*height: 0.3rem;*/
  /*}*/

  /*.g-dislog .el-dialog__body {*/
  /*padding: 0;*/
  /*height: 100%;*/
  /*}*/

  /*.g-dislog .el-message-box {*/
  /*width: 5.5rem;*/
  /*position: absolute;*/
  /*top: 50%;*/
  /*left: 50%;*/
  /*transform: translate(-50%, -50%);*/
  /*-webkit-transform: translate(-50%, -50%);*/
  /*-moz-transform: translate(-50%, -50%);*/
  /*-ms-transform: translate(-50%, -50%);*/
  /*}*/

  #survey .el-message {
    width: 6.5rem;
    min-width: 0;
  }

  #survey .el-message-box__header {
    margin-top: 0.6rem !important;
    padding: 0 !important;
  }

  #survey .el-message-box__content {
    padding: 0 !important;
    margin-top: 0.3rem !important;
  }

  #survey .el-message-box {
    width: 5.6rem;
    height: 2.79rem;
    position: relative;
  }

  #survey .el-message-box span {
    margin: auto 0;
    width: 100%;
    text-align: center;
    display: block;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    /*color: #212832;*/
    line-height: 0.32rem;
  }

  #survey .el-message-box__status.el-icon-warning {
    display: none;
  }

  #survey .el-message-box__message {
    padding: 0 !important;
  }

  #survey .el-message-box__message p {
    width: 100%;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #8B949E;
    letter-spacing: -0.68px;
    line-height: 0.28rem;
  }

  #survey .el-button--small, .el-button--small.is-round {
    width: 2.8rem;
    height: 0.88rem;
  }

  #survey .el-message-box__btns {
    display: flex;
    padding: 0;
    position: absolute;
    bottom: 0;
  }

  #survey .el-message-box__btns button:nth-child(2) {
    margin: 0;
  }

  #survey .el-button--primary {
    background: #fff !important;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #0080FF !important;
    border: 1px solid #dcdfe6 !important;
    line-height: 0.3rem;
    border-radius: 0 !important;
    border-bottom: hidden !important;
    border-right: hidden !important;
  }

  #survey .el-button--small, body .el-message-box__message p {
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #212832;
    line-height: 0.3rem;
    border-radius: 0 !important;
    border-bottom: hidden;
    border-left: hidden;
    border-right: hidden;
  }

  #survey .el-message-box__headerbtn {
    display: none;
  }
</style>
