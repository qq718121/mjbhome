<template>
  <!--咨询详情-->
  <div class="consultDate" v-if='isshow'>
    <div class="consultDateTop">
      <div class="consultDateText">
        <p>{{consultDate.maijiab.text}}</p>
        <p class="consultDateText_date">
          <span>{{consultDate.maijiab.left}}</span><span>{{consultDate.maijiab.right}}</span></p>
        <p class="consultDateText_type"><span v-for='value in consultDate.maijiab.labels' v-if='value ? true : false'>{{value}}</span>
        </p>
      </div>
    </div>
    <div class="consultDateTexts" v-html='consultDate.text'></div>

    <div class="recommend_" v-if="consultDate.statics.length!==0">
      <p class="recommend_title">其他推荐</p>
      <div class="inner_" @click="click_handler(value)" v-for="(value,key) in consultDate.statics">
        <div class="left_inner">
          <span class="text_inner">{{value.text}}</span>
          <span class="img_inner">
            <span>{{value.left}}</span>
            <span>{{value.right}}</span>
          </span>
        </div>
        <div class="right_inner"><img :src="value.img ? value.img : this.$url.error_img" alt=""></div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data(){
      return {
        imgs: '',
        isshow: false,
        consult_obj: {},
        consoleLoading: false,
        href_app_is: false,
        consultDate: {
          maijiab: {
            labels: [],
            left: '',
            rught: '',
            text: ''
          },
          statics: [
            {img: '', left: '', right: '', text: '', top: '', url: ''}
          ],
          text: ''
        },
        isrecommend: false,
        textFootArr: [],
        recommendArr: [],
        textArr: [],
      }
    },
    methods: {
      href_app(){
        function GetQueryString(name) {
          var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
          let hrefs = window.location.href;
          var num = hrefs.indexOf('?');
          var search = hrefs.slice(num, hrefs.length);
          var r = search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
          var context = "";
          if (r != null)
            context = r[2];
          reg = null;
          r = null;
          return context == null || context == "" || context == "undefined" ? "" : context;
        }

        let type = GetQueryString('type');
        if (type == 'app') {
          this.href_app_is = true;
        } else {
          this.href_app_is = false;
        }
      },
      handleRecommend () {
        let this_ = this;
        this.$Axios.get(this.$url.httpRequest + 'news/' + this.$route.params.city + '/' + this.$route.params.id).then(function (res) {
          window.scrollTo(0, 0);
          let getDateTeo = JSON.parse(this_.$getDAesString(res, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq"));
          this_.consultDate = getDateTeo;
          this_.isrecommend = true;
        }).catch(function (err) {
          console.log(err);
        });
      },
      click_handler(value){
        let id = value.url.slice(value.url.indexOf('news') + 4);
        let num = id.split('/')[id.split('/').length - 1];
        let ids = id.substring(1, id.length);
        this.consult_obj.title = value.text;
        this.consult_obj.describe = value.newsDes;
        this.consult_obj.url = this.$url.consult_url + ids;
        let bUrl = "jumpToH5;//?" + JSON.stringify(this.consult_obj);
        if (this.href_app_is) {
          call_app_function(bUrl);
        } else {
          this.$router.push({path: num});
        }

//        let baseDate = new Date().toLocaleTimeString();
//        let newDateBase = this.$setDAesString(baseDate.toString()).substring(0, 20);
//
//        //调用全局得加密方法先加密之后在切割重组
//        let base64Questions = this.$setDAesString(JSON.stringify(consult_obj)).splice(10, 0, newDateBase.toString());
//        let res = {};
//        res.data = base64Questions;
      }
    },
    mounted () {
      this.href_app();
      let this_ = this;
      this.$Axios.get(this.$url.httpRequest + 'news/' + this.$route.params.city + '/' + this.$route.params.id).then(function (res) {
        let getDate = JSON.parse(this_.$getDAesString(res, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq"));
        this_.consultDate = getDate;
        this_.isrecommend = true;
        this_.isshow = true;
      }).catch(function (err) {
        console.log(err);
      });
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      "$route": "handleRecommend"
    }
  }
</script>

<style>

  .consultDateTexts img {
    width: 100%;
    height: auto;
  }

  a:link {
    color: #fff;
    text-decoration: none;
  }

  a:visited {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    color: #fff;
    text-decoration: none;
  }

  a:active {
    color: #fff;
    text-decoration: none;
  }

  .consultDateTop {
    width: 6.7rem;
    background: #fff;
    border-radius: 0.1rem;
    position: relative;
    margin: 0.4rem auto;
  }

  .consultDateText {
    width: 100%;
    font-family: PingFangSC-Medium;
    font-size: 0.4rem;
    color: #212832;
    letter-spacing: 0;
    line-height: 0.6rem;
  }

  .consultDateText_date {
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #999999;
    line-height: 0.35rem;
    margin-top: 0.2rem;
    text-align: left;
  }

  .consultDateUrl {
    width: 6.94rem;
    height: 0.88rem;
    border-bottom: 1px solid #E0E0E0;
    line-height: 0.9rem;
    display: flex;
    justify-content: space-between;
    padding-left: 0.28rem;
    padding-right: 0.28rem;
  }

  .consultDateText_type span {
    display: inline-block;
    height: 0.52rem;
    background: #EEEEEE;
    border: 1px solid #E2E2E2;
    border-radius: 0.04rem;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #808080;
    line-height: 0.52rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    margin-right: 0.2rem;
  }

  .consultDateTexts {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #42464D;
    line-height: 0.58rem;
    width: 6.7rem;
    margin: auto;
  }

  .recommend_ {
    width: 7.5rem;
    margin: 0.4rem auto;
    position: relative;
    background: #f4f4f4;
  }

  .recommend_title {
    display: inline-block;
    padding: 0.3rem 0 0.3rem 0.3rem;
    font-family: PingFangSC-Medium, "微软雅黑";
    font-size: 0.32rem;
    color: #212832;
    line-height: 0.34rem;
    font-weight: 500;
    background: #fff;
    width: 7.2rem;
    margin-top: 0.2rem;
  }

  .inner_ {
    width: 7.5rem;
    background: #fff;
    margin-top: 0.025rem;
    display: flex;
    justify-content: space-around;
    padding: 0.2rem 0 0.2rem 0rem;
  }

  .right_inner {
    width: 2.7rem;
    height: 2.2rem;
  }

  .right_inner img {
    width: 100%;
    height: 100%;
  }

  .left_inner {
    width: 3.5rem;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
  }

  .img_inner {
    font-family: PingFangSC-Regular, "微软雅黑";
    font-size: 0.24rem;
    color: #999999;
    line-height: 0.34rem;
    margin-top: 0.3rem;
  }

  .img_inner span:nth-child(1) {
    display: inline-block;
    float: left;
    margin-right: 1rem;
  }

  .img_inner span:nth-child(2) {
    display: inline-block;
    float: left;
  }

  .text_inner {
    font-family: PingFangSC-Medium;
    font-size: 0.28rem;
    color: #4D535D;
    letter-spacing: 0;
    line-height: 0.48rem;
  }
</style>
