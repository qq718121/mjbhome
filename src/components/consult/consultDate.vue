<template>
     <!--咨询详情-->
     <div class="consultDate" v-if='isshow'>
          <div class="consultDateTop">
               <div class="consultDateText">
                    <p>{{consultDate.maijiab.text}}</p>
                    <p class="consultDateText_date">
                         <span>{{consultDate.maijiab.left}}</span>
                         <span>{{consultDate.maijiab.right}}</span>
                    </p>
                    <p class="consultDateText_type">
                         <span v-for='(value,index) in consultDate.maijiab.labels' :key="index" v-if='value ? true : false'>{{value}}</span>
                    </p>
               </div>
          </div>
          <div class="consultDateTexts" v-html='consultDate.text'></div>
          <p class="readCount" v-if="consultDate.readNum">阅读{{consultDate.readNum || 0}}次</p>
          <div class="recommend_" v-if="consultDate.statics.length!==0">
               <p class="recommend_title">其他推荐</p>
               <div class="inner_" @click="click_handler(value)" v-for="(value,key) in consultDate.statics" :key="key">
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
          <a v-if="!this.href_app_is" :href="downLoadUrl" class="obshareBtn"></a>
     </div>

</template>

<script>
import Ob from '@/common/js/obshare';
import {
     mapMutations
} from "vuex";
export default {
     data() {
          return {
               imgs: '',
               isshow: false,
               consult_obj: {},
               consoleLoading: false,
               href_app_is: false,
               downLoadUrl: 'http://www.homehawkeye.com/appDown.html?ut=1&ui=466',
               consultDate: {
                    maijiab: {
                         labels: [],
                         left: '',
                         rught: '',
                         text: ''
                    },
                    statics: [
                         { img: '', left: '', right: '', text: '', top: '', url: '' }
                    ],
                    text: '',
                    readNum: 0
               },
               isrecommend: false,
               textFootArr: [],
               recommendArr: [],
               textArr: [],
          }
     },
     methods: {
          ...mapMutations({
               set_hint: "set_hint"
          }),
          href_app() {
               // alert(location.href);
               let type2 = window.location.href;
               let reg = /type=app/;
               if (reg.test(type2)) {
                    this.href_app_is = true;
               } else {
                    this.href_app_is = false;
               }

          },

          click_handler(value) {

               let id = value.url.slice(value.url.indexOf('news') + 4);
               let num = id.split('/')[id.split('/').length - 1];
               let ids = id.substring(1, id.length);
               if (this.href_app_is && Ob.is_iph()) {
                    ids = id.substring(1, id.length) + '%3Ftype=app';
               }
               this.consult_obj.title = value.text || '';
               this.consult_obj.describe = value.newsDes || '';
               this.consult_obj.url = this.$url.consult_url + ids || '';
               // this.consult_obj.imageUrl = value.img;
               if (this.href_app_is && this.consult_obj.describe) {
                    let reg = new RegExp("%", "g");
                    this.consult_obj.describe.replace(reg, "%25");
               }
               let bUrl = "jumpToH5;//?" + JSON.stringify(this.consult_obj);
               if (this.href_app_is) {
                    call_app_function(bUrl);
               } else {
                    window.scrollTo(0, 0);
                    this.$router.push({
                         path: num
                    });
               }
          },
          downLoadUrlIinit() {

               var p = Ob.is_Weixin() ? '3' : Ob.is_WeiBo() ? '2' : Ob.isQq() ? '1' : '0';
               this.downLoadUrl = `http://www.homehawkeye.com/appDown.html?ut=1&ui=466&p=${p}`
               // this.downLoadUrl = `http://tweb.homehawkeye.com/appDown.html?ut=1&ui=466&p=${p}`

          },
          // conut_http() {
          //      // let url = 'news/' + this.$route.params.city + '/' + this.$route.params.id;
          //      // let options = {
          //      //      urls: url,
          //      //      methods: 'post',
          //      //      des: true,
          //      //      types: 1
          //      // };
          //      // this.$http(options).then(res => {
          //      //      return;
          //      // }).catch(err => {
          //      //      this.set_hint('网络异常');
          //      // })
          // },
          getData() {

               let url = 'news/' + this.$route.params.city + '/' + this.$route.params.id;
               let options = {
                    urls: url,
                    methods: 'get',
                    des: true,
                    types: 1
               };
               this.$http(options).then(res => {

                    let len = Object.keys(res).length;
                    if (len === 0) {
                         this.set_hint('暂无数据');
                         return;
                    }
                    this.consultDate = res;
                    this.isrecommend = true;
                    this.isshow = true;

               }).catch(err => {
                    this.set_hint('网络异常');
               })

          }
     },
     created() {
          // this.conut_http();
          this.href_app();
          this.downLoadUrlIinit();
          this.getData();
     },
     watch: {
          // 如果路由有变化，会再次执行该方法
          "$route": "getData"
     }
}
</script>

<style scoped>
.consultDate {
      width: 7.5rem;
      margin: auto;
      overflow: hidden;
      padding-bottom: 1.5rem;
}

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
.readCount {
      margin: 0.5rem auto 0;
      width: 6.7rem;
      font-family: PingFangSC-Regular;
      font-size: 0.24rem;
      color: #8b949e;
      letter-spacing: 0.75px;
      line-height: 0.24rem;
}
.consultDateUrl {
      width: 6.94rem;
      height: 0.88rem;
      border-bottom: 1px solid #e0e0e0;
      line-height: 0.9rem;
      display: flex;
      justify-content: space-between;
      padding-left: 0.28rem;
      padding-right: 0.28rem;
}

.consultDateText_type span {
      display: inline-block;
      height: 0.52rem;
      background: #eeeeee;
      border: 1px solid #e2e2e2;
      border-radius: 0.04rem;
      font-family: PingFangSC-Regular;
      font-size: 0.24rem;
      color: #808080;
      line-height: 0.52rem;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      margin-right: 0.2rem;
}

.consultDateTexts p {
      text-align: justify;
}

.consultDateTexts {
      font-family: PingFangSC-Regular;
      font-size: 0.28rem;
      color: #42464d;
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
      color: #4d535d;
      letter-spacing: 0;
      line-height: 0.48rem;
}
.obshareBtn {
      width: 7.5rem;
      height: 1.18rem;
      position: fixed;
      bottom: 0;
      background: url("/static/obshareBtn.png") no-repeat center center;
      background-size: cover;
}
</style>
<style>
.consultDate iframe {
      width: 6.7rem;
      height: 5.02rem;
      overflow: hidden !important;
}
.consultDate iframe::-webkit-scrollbar {
      width: 0px;
      height: 0px;
}
.consultDate p {
      overflow: hidden;
}
.consultDate img {
      width: 100%;
}
</style>

