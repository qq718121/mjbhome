<template>
          <div class="configure">
                    <div class="bannerWap">
                              <img v-if="data.bannerImgSrc" :src="data.bannerImgSrc" alt="">
                              <img v-if="!data.bannerImgSrc" :src=this.$url.error_img alt="">
                              <div class="Wap">
                                        <p>{{data.buildName}}</p>
                                        <p>周边配套评测报告</p>
                                        <p>{{data.repeatTime}}</p>
                              </div>
                              <div class="repeatWap">
                                        <div>
                                                  <p>
                                                            <span style="font-family: PingFangSC-Thin;font-size: 0.8rem;color: #5880F3;line-height: 0.8rem;text-align:center;margin-top:0.2rem;font-weight:200">{{data.buildScore}}</span>
                                                            <span>周边配套评级</span>
                                                  </p>
                                                  <p>
                                                            <span style="font-size:.3rem;display:flex;align-items:center;flex:1">{{data.buildRecommend}}</span>
                                                            <span>推荐点</span>
                                                  </p>
                                        </div>

                                        <p class="p2">* 评级是由鹰眼鉴房的评分数值综合评定</p>
                                        <p class="p3">最高评级为S+，共划分为7个等级</p>
                              </div>
                    </div>
                    <p class="titleWap">
                              <span class="line"></span>
                              <embed src="static/img/gray.svg" type="image/svg+xml"></embed>
                              <span style="font-size: 16px;color: #42464D;">周边配套评级</span>
                              <embed src="static/img/gray.svg" type="image/svg+xml"></embed>
                              <span class="line"></span>
                    </p>
                    <div class="scoreWap">
                              <div class="item" v-if="index<3" v-for="(item,index) in data.buildScoreDetailList" :key="index">
                                        <span class="span1" :class="{'activeiconbac1':item.ratio==1,'activeiconbac7':item.ratio==6}" v-if="item.ratio==1">优+</span>
                                        <span class="span1" :class="{'activeiconbac1':item.ratio==2,'activeiconbac7':item.ratio==6}" v-if="item.ratio==2">优</span>
                                        <span class="span1" :class="{'activeiconbac2':item.ratio==3,'activeiconbac7':item.ratio==6}" v-if="item.ratio==3">良</span>
                                        <span class="span1" :class="{'activeiconbac3':item.ratio==4,'activeiconbac7':item.ratio==6}" v-if="item.ratio==4">中</span>
                                        <span class="span1" :class="{'activeiconbac4':item.ratio==5,'activeiconbac7':item.ratio==6}" v-if="item.ratio==5">差</span>
                                        <span class="span1" :class="{'activeiconbac5':item.ratio==6,'activeiconbac7':item.ratio==6}" v-if="item.ratio==6">无</span>
                                        <span class="span1" :class="{'activeiconbac6':item.ratio==7,'activeiconbac7':item.ratio==6}" v-if="item.ratio==7">轻微</span>
                                        <span class="span1" :class="{'activeiconbac6':item.ratio==8,'activeiconbac7':item.ratio==6}" v-if="item.ratio==8">一般</span>
                                        <span class="span1" :class="{'activeiconbac6':item.ratio==9,'activeiconbac7':item.ratio==6}" v-if="item.ratio==9">较严重</span>
                                        <span class="span1" :class="{'activeiconbac6':item.ratio==10,'activeiconbac7':item.ratio==6}" v-if="item.ratio==10">严重</span>

                                        <span class="span2" v-if="item.id==1">交通便利</span>
                                        <span class="span2" v-if="item.id==2">周边环境</span>
                                        <span class="span2" v-if="item.id==3">教育配套</span>
                                        <span class="span2" v-if="item.id==4">医疗配套</span>
                                        <span class="span2" v-if="item.id==5">商业配套</span>
                                        <span class="span2" v-if="item.id==6">不利因素</span>
                              </div>
                    </div>
                    <div class="scoreWap" style="margin-top:.2rem">
                              <div class="item" v-if="index>=3" v-for="(item,index) in data.buildScoreDetailList" :key="index">
                                        <span class="span1" :class="{'activeiconbac1':item.ratio==1,'activeiconbac7':item.ratio==6}" v-if="item.ratio==1">优+</span>
                                        <span class="span1" :class="{'activeiconbac1':item.ratio==2,'activeiconbac7':item.ratio==6}" v-if="item.ratio==2">优</span>
                                        <span class="span1" :class="{'activeiconbac2':item.ratio==3,'activeiconbac7':item.ratio==6}" v-if="item.ratio==3">良</span>
                                        <span class="span1" :class="{'activeiconbac3':item.ratio==4,'activeiconbac7':item.ratio==6}" v-if="item.ratio==4">中</span>
                                        <span class="span1" :class="{'activeiconbac4':item.ratio==5,'activeiconbac7':item.ratio==6}" v-if="item.ratio==5">差</span>
                                        <span class="span1" :class="{'activeiconbac5':item.ratio==6,'activeiconbac7':item.ratio==6}" v-if="item.ratio==6">无</span>
                                        <span class="span1" :class="{'activeiconbac6':item.ratio==7,'activeiconbac7':item.ratio==6}" v-if="item.ratio==7">轻微</span>
                                        <span class="span1" :class="{'activeiconbac6':item.ratio==8,'activeiconbac7':item.ratio==6}" v-if="item.ratio==8">一般</span>
                                        <span class="span1" :class="{'activeiconbac6':item.ratio==9,'activeiconbac7':item.ratio==6}" v-if="item.ratio==9">较严重</span>
                                        <span class="span1" :class="{'activeiconbac6':item.ratio==10,'activeiconbac7':item.ratio==6}" v-if="item.ratio==10">严重</span>

                                        <span class="span2" v-if="item.id==1">交通便利</span>
                                        <span class="span2" v-if="item.id==2">周边环境</span>
                                        <span class="span2" v-if="item.id==3">教育配套</span>
                                        <span class="span2" v-if="item.id==4">医疗配套</span>
                                        <span class="span2" v-if="item.id==5">商业配套</span>
                                        <span class="span2" v-if="item.id==6">不利因素</span>
                              </div>
                    </div>
                    <p class="titleWap">
                              <span class="line"></span>
                              <embed src="static/img/gray.svg" type="image/svg+xml"></embed>
                              <span style="font-size: 16px;color: #42464D;">总体评价</span>
                              <embed src="static/img/gray.svg" type="image/svg+xml"></embed>
                              <span class="line"></span>
                    </p>
                    <div class="totalWap" v-html="data.buildOverallEvaluation"></div>
                    <p class="titleWap">
                              <span class="line"></span>
                              <embed src="static/img/gray.svg" type="image/svg+xml"></embed>
                              <span style="font-size: 16px;color: #42464D;">详细评测</span>
                              <embed src="static/img/gray.svg" type="image/svg+xml"></embed>
                              <span class="line"></span>
                    </p>

                    <div class="itemWap1" v-for="(item,index) in data.buildScoreDetailList" :key="index">
                              <p class="itemTit">
                                        <embed src="static/img/item0.svg" v-if="item.id==1" type="image/svg+xml"></embed>
                                        <embed src="static/img/item1.svg" v-if="item.id==2" type="image/svg+xml"></embed>
                                        <embed src="static/img/item2.svg" v-if="item.id==3" type="image/svg+xml"></embed>
                                        <embed src="static/img/item3.svg" v-if="item.id==4" type="image/svg+xml"></embed>
                                        <embed src="static/img/item4.svg" v-if="item.id==5" type="image/svg+xml"></embed>
                                        <embed src="static/img/item5.svg" v-if="item.id==6" type="image/svg+xml"></embed>
                                        <span style="fontfont-size: 18px;color: #42464D;margin-left:10px">{{item.type}}</span>
                              </p>
                              <div class="bigWap" v-if="item.id==1" :class="{'activebac1':item.id==1}">
                                        <embed style="position:absolute;left:0;top:-4px;width:.15rem" src="static/img/san1.svg" type="image/svg+xml"></embed>
                                        <p>{{item.simpleEvaluation}}</p>
                                        <embed style="position:absolute;right:0;top:-4px;width:.15rem;transform:rotateY(180deg)" src="static/img/san1.svg" type="image/svg+xml"></embed>
                              </div>
                              <div class="bigWap" v-if="item.id==2" :class="{'activebac2':item.id==2}">
                                        <embed style="position:absolute;left:0;top:-4px;width:.15rem" src="static/img/san2.svg" type="image/svg+xml"></embed>
                                        <p>{{item.simpleEvaluation}}</p>
                                        <embed style="position:absolute;right:0;top:-4px;width:.15rem;transform:rotateY(180deg)" src="static/img/san2.svg" type="image/svg+xml"></embed>
                              </div>
                              <div class="bigWap" v-if="item.id==3" :class="{'activebac3':item.id==3}">
                                        <embed style="position:absolute;left:0;top:-4px;width:.15rem" src="static/img/san3.svg" type="image/svg+xml"></embed>
                                        <p>{{item.simpleEvaluation}}</p>
                                        <embed style="position:absolute;right:0;top:-4px;width:.15rem;transform:rotateY(180deg)" src="static/img/san3.svg" type="image/svg+xml"></embed>
                              </div>
                              <div class="bigWap" v-if="item.id==4" :class="{'activebac4':item.id==4}">
                                        <embed style="position:absolute;left:0;top:-4px;width:.15rem" src="static/img/san4.svg" type="image/svg+xml"></embed>
                                        <p>{{item.simpleEvaluation}}</p>
                                        <embed style="position:absolute;right:0;top:-4px;width:.15rem;transform:rotateY(180deg)" src="static/img/san4.svg" type="image/svg+xml"></embed>
                              </div>
                              <div class="bigWap" v-if="item.id==5" :class="{'activebac5':item.id==5}">
                                        <embed style="position:absolute;left:0;top:-4px;width:.15rem" src="static/img/san5.svg" type="image/svg+xml"></embed>
                                        <p>{{item.simpleEvaluation}}</p>
                                        <embed style="position:absolute;right:0;top:-4px;width:.15rem;transform:rotateY(180deg)" src="static/img/san5.svg" type="image/svg+xml"></embed>
                              </div>
                              <div class="bigWap" v-if="item.id==6" :class="{'activebac6':item.id==6}">
                                        <embed style="position:absolute;left:0;top:-4px;width:.15rem" src="static/img/san6.svg" type="image/svg+xml"></embed>
                                        <p>{{item.simpleEvaluation}}</p>
                                        <embed style="position:absolute;right:0;top:-4px;width:.15rem;transform:rotateY(180deg)" src="static/img/san6.svg" type="image/svg+xml"></embed>
                              </div>

                              <div class="itemP" v-html="item.detailEvaluation"></div>

                              <img style="width:100%;margin-bottom:-1px" v-if="item.bannerImgSrc" :src="item.bannerImgSrc" alt="">
                    </div>
          </div>
</template>

<script>
export default {
          data() {
                    return {
                              data: {
                                        bannerImgSrc: "",
                                        buildName: "",
                                        buildOverallEvaluation: "",
                                        buildRecommend: "",
                                        buildScore: "",
                                        buildScoreDetailList: [],
                                        repeatTime: ""
                              }
                    }
          },


          //    created(){
          //      try {
          //        parent.document.getElementsByClassName('headline')[0].style.display = 'none';
          //        parent.document.querySelector('img').style.display = 'none';
          //        if (parent.parent.localStorage.is == 'true') {
          //          let commit = this.$store.commit;
          //          commit('set_motai', '0');
          //          commit('set_school_class', 'animated bounceIn');
          //          commit('change_motai');
          //          this.$store.commit('close_show');
          //        } else {
          //          return;
          //        }
          //      }
          //      catch (e) {
          //
          //      }
          //    },
          created() {
                    this.getData()
          },

          methods: {
                    getData() {

                              /*START*/
                              let url = "peripheralSupporting/" + this.$route.params.id;
                              let options = {
                                        urls: url,
                                        methods: 'get',
                                        des: true,
                                        types: 1
                              };

                              this.$http(options).then(res => {
                                        this.data = res;
                              }).catch(err => {
                                        this.set_hint('数据错误');
                              })
                              /*END*/

                    }
          }
}
</script>

<style scoped>
.configure {
        background: #f1f2f6;
        padding: 0.4rem 0.3rem;
}

.configure .bannerWap {
        position: relative;
}

.configure .bannerWap img {
        width: 100%;
        height: 4.4rem;
        border-radius: 0.1rem;
        display: block;
}

.configure .bannerWap .Wap {
        position: absolute;
        width: 100%;
        height: 4.4rem;
        background: rgba(0, 0, 0, 0.5);
        left: 0;
        top: 0;
        border-radius: 0.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
}

.configure .bannerWap .Wap p:nth-child(1) {
        font-size: 0.6rem;
        color: #ffffff;
}

.configure .bannerWap .Wap p:nth-child(2) {
        font-size: 0.3rem;
        color: #ffffff;
        margin-top: 0.2rem;
        opacity: 0.9;
        letter-spacing: 4px;
}

.configure .bannerWap .Wap p:nth-child(3) {
        font-size: 0.2rem;
        color: #ffffff;
        margin-top: 0.25rem;
        opacity: 0.9;
}

.configure .bannerWap .repeatWap {
        height: 3.6rem;
        border-radius: 0.1rem;
        background: #ffffff;
        box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09),
                0 1px 2px 0 rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
}

.configure .bannerWap .repeatWap div:nth-child(1) {
        margin-bottom: 0.1rem;
        display: flex;
        margin-bottom: 0.4rem;
        display: flex;
        flex-direction: row;
}

.configure .bannerWap .repeatWap div:nth-child(1) p {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
}

.configure .bannerWap .repeatWap div:nth-child(1) p:nth-child(1) {
        margin-right: 1rem;
}

.configure .bannerWap .repeatWap div:nth-child(1) p span:nth-child(1) {
        color: #5880f3;
}

.configure .bannerWap .repeatWap div:nth-child(1) p span:nth-child(2) {
        color: #42464d;
}

.configure .bannerWap .repeatWap .p2,
.configure .bannerWap .repeatWap .p3 {
        font-size: 12px;
        color: #9e9e9e;
}

.configure .titleWap {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.8rem;
        margin-bottom: 0.4rem;
}

.configure .line {
        display: inline-block;
        width: 1.7rem;
        height: 1px;
        background: #42464d;
}

.configure .scoreWap {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
}

.configure .scoreWap .item {
        width: 2.04rem;
        height: 2.3rem;
        background: #ffffff;
        box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09),
                0 1px 2px 0 rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
}

.configure .scoreWap .item .span1 {
        display: inline-block;
        width: 0.78rem;
        height: 0.78rem;
        border-radius: 100%;
        font-size: 0.3rem;
        text-align: center;
        line-height: 0.78rem;
        color: #f1f1f1;
}

.configure .scoreWap .item .span2 {
        font-size: 13px;
        color: #4c4c4c;
        margin-top: 0.2rem;
}

.configure .totalWap {
        background-image: linear-gradient(-180deg, #5880f3 0%, #5311fd 100%);
        box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09),
                0 1px 2px 0 rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        padding: 0.5rem;
        font-size: 17px;
        color: #ffffff;
        letter-spacing: 0;
        line-height: 30px;
}

.configure .itemWap1 {
        background: #ffffff;
        box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.09),
                0 1px 2px 0 rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        border-top: 1px solid transparent;
        position: relative;
        margin-bottom: 0.6rem;
}

.configure .itemWap1 .itemTit {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0.4rem 0rem;
}

.configure .itemWap1 .bigWap {
        background: #5880f3;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.22);
        min-height: 1.6rem;
        width: 7.2rem;
        position: relative;
        left: -0.15rem;
        padding: 0.4rem 0.6rem;
        display: flex;
        align-items: center;
        flex-direction: row;
        font-size: 14px;
        color: #ffffff;
        box-sizing: border-box;
        line-height: 22px;
        margin-bottom: 0.6rem;
}

.activebac1 {
        background: #5880f3 !important;
}

.activebac2 {
        background: #7ab88d !important;
}

.activebac3 {
        background: #f08585 !important;
}

.activebac4 {
        background: #e4b68e !important;
}

.activebac5 {
        background: #7c72b8 !important;
}

.activebac6 {
        background: #4b5970 !important;
}

.activeiconbac1 {
        background: #70caa8 !important;
}

.activeiconbac2 {
        background: #5880f3 !important;
}

.activeiconbac3 {
        background: #879ec4 !important;
}

.activeiconbac4 {
        background: #fe6e6e !important;
}

.activeiconbac5 {
        background: #e0e0e0 !important;
}

.activeiconbac6 {
        background: transparent !important;
        color: #5880f3 !important;
}

.activeiconbac7 {
        color: #999 !important;
}
</style>

<style>
.configure .itemP {
        padding-bottom: 0.2rem;
}

.configure .itemP p {
        font-size: 14px;
        color: #4c4c4c;
        line-height: 19px;
        padding: 0 0.4rem;
        margin-bottom: 0.5rem;
}
</style>
