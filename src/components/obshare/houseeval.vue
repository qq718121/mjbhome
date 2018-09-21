<template>
          <div class="houseeval">
                    <div class="g-houseeval-header">
                              <h1>{{data.maijiab.text}}</h1>
                              <p>{{data.maijiab.right}}</p>
                              <div class="u-houseeval-icon">
                                        <span v-for="(item,index) in data.maijiab.labels" :key="index">{{item}}</span>
                              </div>
                    </div>
                    <div :class="houseeval" ref="houseevals">
                              <div class="inner_" v-html="data.text"></div>
                              <div class="g-crreltion-house" v-if=" !$route.query.type">
                                        <h1>相关楼盘</h1>
                                        <div class="u-crreltion-house-message displayFlex flexJustifybetween" v-for="(item,index) in data.propertyList" :key="index" @click="f_pathHandler(item.propertyId)">
                                                  <div class="u-crreltion-house-message-img" :style="`background-image:url(${item.picUrl})`">
                                                            <span>{{item.propertyType}}</span>
                                                  </div>
                                                  <div class="u-crreltion-house-message-text">
                                                            <h2>{{item.propertyName}}</h2>
                                                            <div class="u-crreltion-house-message-text-1 displayFlex">
                                                                      <span class="u-icon"></span>
                                                                      <span style="color: #FC7B3D">{{item.groupCount}}</span>
                                                                      <span>名业主正在热聊楼盘质量</span>
                                                            </div>
                                                            <div class="u-crreltion-house-message-text-2 displayFlex" v-if="item.buildingState == 1">
                                                                      <span style="color: #FC7B3D">{{item.appointCount}}</span>
                                                                      <span>名业主正在监控工程进度 </span>
                                                            </div>
                                                            <div class="u-crreltion-house-message-text-2 displayFlex" v-else>
                                                                      <span style="color: #FC7B3D">{{item.monitorCount}}</span>
                                                                      <span>名业主正在监控工程进度 </span>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                              <div class="unfold-field" v-if="isfiled">
                                        <div class="unflod-field_mask"></div>
                                        <div class="unfold-field_text" @click="f_see_all">
                                                  <span v-if="!token_">注册／登录后即可查看全文</span>
                                                  <span v-else>点击即可查看全文</span>
                                        </div>
                              </div>
                    </div>

                    <a :href="downLoadUrl" class="obshareBtn" v-if="!$route.query.type"></a>
          </div>
</template>
<script>
import Obshare from "../../common/js/obshare";
export default {
          data() {
                    return {
                              downLoadUrl: 'http://www.homehawkeye.com/appDown.html',
                              isfiled: false,
                              classArr: ['g-houseeval-context', 'g-houseeval-context-a'],
                              houseeval: 'g-houseeval-context-a',
                              token_: false,
                              data: {
                                        maijiab: {
                                                  text: '',
                                                  right: '',
                                                  labels: []
                                        },

                                        text: '',
                                        propertyList: []
                              }
                    }
          },
          created() {
                    this.token_ = Obshare.locaGet("regis");
                    this.f_getData();
          },

          methods: {
                    f_getData() {
                              let this_ = this;
                              let cid = this.$route.params.cid;
                              let uid = this.$route.params.uid;;
                              let buiding = `news5/${cid}/${uid}`;
                              let url = buiding;
                              let options = {
                                        urls: url,
                                        methods: 'get',
                                        des: true,
                                        types: 1
                              };
                              this.$http(options).then(res => {
                                        this.data = res;
                                        if (!this.$route.query.type) {
                                                  this.$nextTick(() => {
                                                            this.f_xrap_height();
                                                  });
                                        }
                              })
                    },

                    f_init(b_) {
                              if (b_) {
                                        this.houseeval = this.classArr[0];
                              } else {
                                        this.houseeval = this.classArr[1];
                              }
                              this.isfiled = b_;
                    },


                    f_xrap_height() {
                              let h_ = this.$refs.houseevals.clientHeight;
                              let v_ = 900;
                              let n_ = h_ >= v_;
                              this.f_init(n_);
                    },

                    f_see_all() {
                              if (Obshare.locaGet("regis") === false) {
                                        this.$router.push({
                                                  path: "/register",
                                                  query: {
                                                            userId: this.$route.query.userId ? this.$route.query.userId : "",
                                                            path: this.$router.currentRoute.path
                                                  }
                                        });
                              } else {
                                        this.f_init(false);
                              }
                    },

                    f_pathHandler(id) {
                              this.$router.push({
                                        path: `/obshare/${id}`
                              });
                    }

          }
}
</script>
<style scoped>
.houseeval {
        margin: auto;
        padding: 0.4rem 0.3rem 1.5rem 0.3rem;
        width: 6.9rem;
}
.g-houseeval-header h1 {
        font-family: PingFangSC-Medium;
        font-size: 0.36rem;
        color: #212832;
        letter-spacing: 0;
        line-height: 0.6rem;
        text-align: justify;
}
.g-houseeval-header p {
        margin-top: 0.3rem;
        font-family: PingFangSC-Regular;
        font-size: 0.24rem;
        color: #8b949e;
        letter-spacing: 0;
        line-height: 0.24rem;
}
.u-houseeval-icon {
        margin-top: 0.2rem;
}
.u-houseeval-icon span {
        display: inline-block;
        width: 1rem;
        height: 0.36rem;
        border: 1px solid #0080ff;
        border-radius: 2px;
        font-family: PingFangSC-Regular;
        font-size: 0.2rem;
        color: #0080ff;
        line-height: 0.36rem;
        text-align: center;
}
.g-houseeval-context {
        max-height: 900px; /*设置默认高度*/
        overflow: hidden;
        position: relative;
}
.g-houseeval-context-a {
        max-height: auto; /*设置默认高度*/
        overflow: hidden;
        position: relative;
}

.g-crreltion-house {
        margin-top: 0.6rem;
}
.g-crreltion-house h1 {
        margin: 0.2rem 0;
        font-family: PingFangSC-Medium;
        font-size: 0.36rem;
        color: #212832;
        letter-spacing: 1.12px;
        line-height: 0.36rem;
}
.u-crreltion-house-message {
        padding: 0.2rem 0;
        border-top: 1px solid #e7e7e7;
}
.u-crreltion-house-message-img {
        position: relative;
        width: 3.2rem;
        height: 1.8rem;
        background-size: cover;
}
.u-crreltion-house-message-img span {
        position: absolute;
        right: 0;
        top: 0;
        display: inline-block;
        width: 0.96rem;
        height: 0.3rem;
        background: red;
        font-family: PingFangSC-Regular;
        font-size: 0.2rem;
        color: #ffffff;
        line-height: 0.3rem;
        text-align: center;
        background: #0080ff;
}
.u-crreltion-house-message-text-1,
.u-crreltion-house-message-text-2 {
        margin-top: 0.3rem;
}
.u-crreltion-house-message-text h2 {
        font-family: PingFangSC-Regular;
        font-size: 0.28rem;
        color: #212832;
        line-height: 0.32rem;
}
.u-crreltion-house-message-text-1 .u-icon {
        display: inline-block;
        width: 0.24rem;
        height: 0.24rem;
        background-image: url("/static/obshare/me_icon_quanzi_n@3x.png");
        background-size: cover;
}
.u-crreltion-house-message-text-1 span,
.u-crreltion-house-message-text-2 span {
        margin-right: 0.05rem;
        font-family: PingFangSC-Regular;
        font-size: 0.24rem;
        color: #8b949e;
        line-height: 0.24rem;
}
.obshareBtn {
        width: 100%;
        max-width: 6.9rem;
        height: 1.18rem;
        position: fixed;
        bottom: 0;
        background: url("/static/obshareBtn.png") no-repeat center center;
        background-size: cover;
}
/*展开全文*/
.unfold-field {
        position: absolute;
        font-size: 0;
        bottom: 0;
        width: 100%;
        height: 1.24rem;
        z-index: 3;
}
.unfold-field .unflod-field_mask {
        height: 0.78rem;
        width: 100%;
        background-image: -webkit-gradient(
                linear,
                left top,
                left bottom,
                color-stop(0, hsla(0, 0%, 100%, 0)),
                to(#fff)
        );
        background-image: linear-gradient(-180deg, hsla(0, 0%, 100%, 0), #fff);
}
.unfold-field_text {
        cursor: pointer;
        width: 100%;
        color: #0080ff;
        height: 0.46rem;
        font-size: 0px;
        line-height: 0.46rem;
        text-align: center;
        background: #fff;
}
.unfold-field_text span {
        display: inline-block;
        font-size: 0.28rem;
        height: 0.46rem;
        line-height: 0.28rem;
}
.unfold-field_text span::after {
        content: "";
        background: url(/static/obshare/icon_xiala@3x.png);
        background-size: cover;
        background-repeat: no-repeat;
        width: 0.2rem;
        height: 0.2rem;
        display: inline-block;
        margin-left: 0.1rem;
}
</style>
<style>
.g-houseeval-context h1,
.g-houseeval-context-a h1 {
        margin-top: 0.6rem;
        font-family: PingFangSC-Regular;
        font-size: 0.36rem;
        color: #212832;
        letter-spacing: 0;
        line-height: 0.36rem;
}
.inner_ p {
        margin-top: 0.4rem;
        font-family: PingFangSC-Regular;
        font-size: 0.32rem;
        color: #212832;
        letter-spacing: 0;
        line-height: 0.43rem;
        text-align: justify;
}
.inner_ img {
        display: block;
        width: 100%;
        margin: 0.2rem auto;
}
.inner_ h2 {
        margin: 0.2rem auto;
}
</style>

