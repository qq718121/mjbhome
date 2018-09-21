<template>
          <!--咨询详情-->
          <div class="consultDate">
                    <transition appear appear-active-class="bounce-enter-active">
                              <div class="consultDateText">{{recommendArr.title}}</div>
                    </transition>
                    <div class="consultDateTexts" v-html='recommendArr.content'></div>
          </div>
</template>
<script>
export default {
          data() {
                    return {
                              recommendArr: [],
                    }
          },
          methods: {},
          created() {
                    let this_ = this;
                    this.$Axios.get(this.$url.httpRequest + 'buidingRankReason/' + this.$route.params.id).then(function (res) {
                              //            console.log(JSON.parse(this_.$getDAesString(res,"yhgt!d%sd*aw%dSDSFSsa#mng~dsq")),1);
                              this_.recommendArr = JSON.parse(this_.$getDAesString(res, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq"));
                    }).catch(function (err) {
                              console.log(err);
                    });
          }
}
</script>

<style scoped>
.consultDateText {
        width: 6.7rem;
        height: 0.96rem;
        top: 0.5rem;
        left: 0.5rem;
        font-family: PingFangSC-Regular;
        font-size: 0.36rem;
        color: #42464d;
        line-height: 0.96rem;
        text-align: center;
        margin: 0.2rem auto;
}

.consultDate {
        padding: 0.4rem 0.3rem;
}

.consultDate p {
        margin-left: 0px !important;
        margin-right: 0px !important;
        margin-bottom: 0.2rem !important;
        font-size: 0.28rem !important;
}

.consultDate span {
        line-height: 0.5rem !important;
        font-size: 0.24rem !important;
        background: #fff !important;
}

.consultDateTexts div {
        margin: 0.54rem auto;
}

.consultDateTexts img {
        width: 6.7rem;
        height: 4.2rem;
}

.bounce-enter-active {
        animation: bounce-in 0.5s;
}

@keyframes bounce-in {
        0% {
                transform: scale(0);
        }
        50% {
                transform: scale(1.5);
        }
        100% {
                transform: scale(1);
        }
}

.el-message-box {
        /*position: absolute;*/
        /*bottom: 0;*/
        /*left: 0;*/
        text-align: left;
        display: inline-block;
        /* vertical-align: middle; */
        background-color: #fff;
        width: 100%;
        border-radius: 3px;
        font-size: 16px;
        overflow: hidden;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
}
</style>
