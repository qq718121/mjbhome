<template>
  <div class="maijiabang-questionnaire">
    <!--问卷调查-->
    <div class="questionnaireOne-content">
        <span>{{questionnaireTitle}}</span>
    </div>
    <div style="margin-bottom: 2rem">
      <a :class="[{'bs':obj.questionPagerList[questionnaireNum].answer.indexOf(questionnaireArr[index].name)!==-1}] "
         v-for="(key,index) in questionnaireArr" @click="checkedPlay(index,$event)">
        <i :class="[{'cs':obj.questionPagerList[questionnaireNum].answer.indexOf(questionnaireArr[index].name)!==-1}] "
           @click="a(index)" class="triangle"></i>
        <span class="selectsSpan">{{key.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{key.num}}</span>
      </a>
      <div class="questionnaireOne-top" style='margin:auto'>
        <el-button :disabled="isDisabledp" style="border:none;" @click="playPrevious()" v-show='isshow'>上一题</el-button>
      </div>
    </div>
    <el-button :disabled="isDisabled" :class='is_btn_className' type="primary" @click="playNext()">{{questionnairePl}}</el-button>
  </div>
</template>
<script>
  import {Message} from 'element-ui';
  export default {
    name: 'maijiabang-questionnaire',
    data () {
      return {
        isIndex: '',
        obj: {
          questionPagerList: [
            {
              questionId: '',
              answer: []
            },
            {
              questionId: '',
              answer: []
            },
            {
              questionId: '',
              answer: []
            },
            {
              questionId: '',
              answer: []
            },
            {
              questionId: '',
              answer: []
            },
            {
              questionId: '',
              answer: []
            },
            {
              questionId: '',
              answer: []
            },
            {
              questionId: '',
              answer: []
            },
            {
              questionId: '',
              answer: []
            },
            {
              questionId: '',
              answer: []
            }
          ]
        },
        isIndexObj: {},
        isDisabled: true,
        isDisabledp: true,
        questionnaireNum: 0,
        questionnaireArr: '',
        questionnaireTitle: '',
        questionnairePl: '',
        isshow: true,
        questionnaireArrOld: [
          {
            arr: [
              {name: 'A', num: '居住'},
              {name: 'B', num: '改善'},
              {name: 'C', num: '投资'},
              {name: 'D', num: '为父母/子女购买'}
            ],
            title: '您的购房目的？',
            pl: '下一步',
            rt: false
          },
          {
            arr: [
              {name: 'A', num: '新房'},
              {name: 'B', num: '二手房'},
              {name: 'C', num: '不限'}
            ],
            title: '您倾向于买那种类型得房子？',
            pl: '下一步',
            rt: false
          },
          {
            arr: [
              {name: 'A', num: '一居'},
              {name: 'B', num: '二居'},
              {name: 'C', num: '三居'},
              {name: 'D', num: '三居以上'}
            ],
            title: '您居住的意向户型是？(多选)',
            pl: '下一步',
            rt: true
          },
          {
            arr: [
              {name: 'A', num: '毛坯'},
              {name: 'B', num: '简单装修'},
              {name: 'C', num: '精装修'},
              {name: 'D', num: '不限'}
            ],
            title: '您希望买何种装修程度的房子？',
            pl: '下一步',
            rt: false
          },
          {
            arr: [
              {name: 'A', num: '15万以下'},
              {name: 'B', num: '15-30万'},
              {name: 'C', num: '30-60万'},
              {name: 'D', num: '60-150万'},
              {name: 'E', num: '150万以上'}
            ],
            title: '能承受的首付款范围?',
            pl: '下一步',
            rt: false
          },
          {
            arr: [
              {name: 'A', num: '房屋质量'},
              {name: 'B', num: '周边配套'},
              {name: 'C', num: '地理位置及交通'},
              {name: 'D', num: '价格'},
              {name: 'E', num: '升值空间'}
            ],
            title: '购房时以下因素哪一项是您最关心的？(多选)',
            pl: '下一步',
            rt: true
          },
          {
            arr: [
              {name: 'A', num: '是'},
              {name: 'B', num: '否'}
            ],
            title: '您是否希望有专业人员全程监控您的房屋质量，并对房屋建设过程中出现的质量问题，进行监督整改？',
            pl: '下一步',
            rt: false
          },
          {
            arr: [
              {name: 'A', num: '500-2000元'},
              {name: 'B', num: '2000-5000元'},
              {name: 'C', num: '5000-10000元'},
              {name: 'D', num: '不愿意付费'}
            ],
            title: '您愿意承担的房屋质量监督的费用的范围是？',
            pl: '下一步',
            rt: false
          },
          {
            arr: [
              {name: 'A', num: '是'},
              {name: 'B', num: '否'}
            ],
            title: '您是否愿意与他人共同合买房屋，分担房款，共同享有房屋的所有权以及共享房产升值带来的收益？',
            pl: '下一步',
            rt: false
          },
          {
            arr: [
              {name: 'A', num: '半年内'},
              {name: 'B', num: '1年内'},
              {name: 'C', num: '2年内'},
              {name: 'D', num: '观望中'}
            ],
            title: '您预计的买房时间是？',
            pl: '完成填写',
            rt: false
          },
        ],
        is: '',
        indexArr: []
      }
    },
    methods: {
      a(index){
        this.as = index;
      },
      playNext(){
        this.$store.commit('threeLading');
        this.ishow = true;
        this.isshow = true;
        this.isDisabledp = false;
        this.isDisabled = true;
        this.indexArr.length = 0;
        let pagelist = this.obj.questionPagerList;
        if (pagelist[this.questionnaireNum].answer.length > 0) {

          if (this.questionnaireNum == this.questionnaireArrOld.length - 1) {
            this.isDisabledp = true;
            // this.obj.questionPagerList[this.questionnaireNum].answer.push(this.questionnaireArr[this.isIndex].name);
            pagelist[this.questionnaireNum].questionId = this.questionnaireNum;

            let len = this.obj.questionPagerList.length;
            for (let i = 0; i < len; i++) {
              pagelist[i].answer = pagelist[i].answer.join(',');
            }

            let baseDate = new Date().toLocaleTimeString();
            let newDateBase = this.$setDAesString(baseDate.toString()).substring(0,20);
            //如果对象得原型里边没有这个方法，那么九手动添加一个方法
//            if (!String.prototype.splice) {
//              String.prototype.splice = function(start, delCount, newSubStr) {
//                return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
//              };
//            }
//            //对这个方法进行封装
//            String.prototype.splice = function(idx, rem, str) {
//              return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
//            };
            //调用全局得加密方法先加密之后在切割重组
            let base64Questions =this.$setDAesString(JSON.stringify(this.obj)).splice(10, 0, newDateBase.toString());

            let bUrl = "reportcommit;//?" + base64Questions;
            call_app_function(bUrl);

            return;

          } else {

            if (pagelist[this.questionnaireNum].answer[0] !== null) {
              this.questionnaireNum++;
              this.play();
              this.isChecked();

            } else {
              // this.obj.questionPagerList[this.questionnaireNum].answer.push(this.questionnaireArr[this.isIndex].name);
              pagelist[this.questionnaireNum].questionId = this.questionnaireNum;
              this.questionnaireNum++;
              this.play();
              this.isChecked();

            }
          }
        } else {
          Message.error('请选择选项噢亲！');

        }
      },
      playPrevious(){

        if (this.questionnaireNum - 1 == 0) {
          this.isshow = false;

        } else {

          this.isshow = true;
        }
        this.isDisabled = false;
        if (this.questionnaireNum == '0') {

          this.questionnaireNum = 0;
          return;

        } else {

          this.$store.commit('threeLading');
          this.questionnaireNum--;
          this.play();
          this.isChecked();

        }
      },
      play(){

        let oldData = this.questionnaireArrOld[this.questionnaireNum];
        this.questionnaireArr = oldData.arr;
        this.questionnaireTitle = oldData.title;
        this.questionnairePl = oldData.pl;
      },
      checkedPlay(index, e){

        this.isDisabled = false;
        this.isIndex = index;
        let oldDataTwo = this.questionnaireArrOld[this.questionnaireNum];
        let listData = this.obj.questionPagerList[this.questionnaireNum];
        if (oldDataTwo.rt == true) {

          if (listData.answer.indexOf(this.questionnaireArr[this.isIndex].name) == -1) {
            listData.answer.push(this.questionnaireArr[this.isIndex].name);
            listData.questionId = this.questionnaireNum;
            this.indexArr.push(this.isIndex);

          } else {
            listData.answer.splice(this.values(this.indexArr, this.isIndex), 1);

          }
        } else {
          // console.log(this.obj.questionPagerList[this.questionnaireNum].answer.slice(0,1).join(','));
          listData.answer.length = 0;
          listData.answer.push(this.questionnaireArr[this.isIndex].name);
          listData.questionId = this.questionnaireNum;

        }
      },
      values(arr, value){

        for (let i = 0, len = arr.length; i < len; i++) {
          if (arr[i] == value) {
            arr.splice(i, 1);
            return i;

          }
        }
      },
      isChecked(){

        if (this.obj.questionPagerList[this.questionnaireNum].answer[0] != undefined) {
          this.isDisabled = false;
        } else {
          return;
        }
      }
    },
    created(){

      Message.warning('请认真填写调查问卷噢亲！');
      if (this.questionnaireNum == 0) {
        this.isshow = false;
      } else {
        this.isshow = true;
      }
      this.play();
      this.isChecked();
    },
    computed:{
      is_btn_className(){
        if(this.isDisabled){
          return 'nextBtn'
        }else{
          return 'trueBtn'
        }
      },
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }

  .list-enter, .list-leave-to
    /* .list-leave-active for below version 2.1.8 */
  {
    opacity: 0;
    transform: translateY(30px);
  }

  a {
    color: #000;
    position: relative;
    text-decoration: none;
    display: block;
    width: 6.4rem;
    /*height:1.2rem;*/
    border: 1px solid rgba(224, 226, 230, 1);
    color: rgba(66, 70, 77, 1);
    font-size: 0.28rem;
    text-align: left;
    /*line-height: 1.2rem;*/
    height: 1.2rem;
    margin: auto;
    margin-bottom: 0.2rem;
    box-sizing: border-box;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .bs {
    border: 2px solid rgba(91, 91, 91, 1);
    width: 6.44rem;
  }

  .cs {
    display: block;
  }

  .maijiabang-questionnaire {
    width: 100%;
  }

  .questionnaireOne-top {
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }

  .questionnaireOne-top button {
    width: 2rem;
    height: 0.8rem;
    background: rgba(247, 247, 247, 1);
    font-size: 0.28rem;
    font-face: PingFangSC-Regular;
    character: 0px;
    color: rgba(66, 70, 77, 0.5);
    margin-top: 0.6rem;
  }

  .questionnaireOne-top i {
    font-size: 0.4rem;
    margin-left: 0.14rem;
    margin-top: 0.35rem;
    color: #42464D;
    font-weight: 100;
  }

  .questionnaireOne-content {
    text-align: center;
    margin-top: 0.9rem;
    margin-bottom: 0.9rem;
  }

  .questionnaireOne-content span {
    display: block;
    width: 70%;
    margin: auto;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.36rem;
    color: #42464D;
    line-height: 0.48rem;
  }

  .nextBtn {
    width: 100%;
    height: 0.98rem;
    border-radius: 0;
    position: fixed;
    bottom: 0;
    color: #fff;
    font-size: 0.32rem;
  }
  .trueBtn{
    width: 100%;
    height: 0.98rem;
    border-radius: 0;
    position: fixed;
    bottom: 0;
    color: #fff;
    font-size: 0.32rem;
    background: #5880f3;
  }

  /*.el-button--primary:focus, .el-button--primary:hover {*/
    /*background: rgba(88, 128, 243, 1);*/
    /*border-color: rgba(88, 128, 243, 1);*/
  /*}*/

  i {
    width: 0;
    height: 0;
    border-bottom: 0.24rem solid transparent;
    border-right: 0.24rem solid transparent;
    border-left: 0.24rem solid rgba(91, 91, 91, 1);
    position: absolute;
    top: 0;
    display: none;
  }

  .selectsSpan {
    display: inline-block;
    margin-left: 0.68rem;
  }

  /*.bounce-enter-active {*/
    /*animation: bounce-in .5s;*/
  /*}*/

  /*.bounce-leave-active {*/
  /*animation: bounce-in .5s reverse;*/
  /*}*/
  /*@keyframes bounce-in {*/
    /*0% {*/
      /*transform: scale(0);*/
    /*}*/
    /*50% {*/
      /*transform: scale(1.5);*/
    /*}*/
    /*100% {*/
      /*transform: scale(1);*/
    /*}*/
  /*}*/
</style>
