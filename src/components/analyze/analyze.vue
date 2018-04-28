<!--<template>-->
  <!--<div id = 'analyze'>-->
    <!--<div class = 'analyzeTitle'>-->
      <!--<p class = 'analyzeTitleName'>{{analyzeData.title}}</p>-->
      <!--<p class = 'analyzeTitleDate'>{{analyzeData.date}}</p>-->
    <!--</div>-->
    <!--<div class = 'textDataModule' v-for = 'classT in analyzeData.classText'>-->
      <!--<div class='analyzeHr'>-->
        <!--<i></i><img src='../../../static/gray.svg'><span>{{classT.textTitle}}</span><img src='../../../static/gray.svg'><i></i>-->
      <!--</div>-->
      <!--<div class = 'moduleText' v-for = 'tex in classT.textArr'><div v-html = 'tex'></div></div>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--export default {-->
    <!--name:'analyze',-->
    <!--data(){-->
      <!--return {-->
        <!--analyzeData:{-->
          <!--title:'',-->
          <!--date:'',-->
          <!--classText:[{textTitle:'',textArr:[]}]-->
        <!--}-->
      <!--}-->
    <!--},-->
    <!--mounted(){-->
        <!--let this_ = this;-->
      <!--this.$Axios.get('/static/anal.json').then(function (res) {-->
        <!--if(res){-->
          <!--this_.analyzeData = res.data;-->
        <!--}-->
      <!--}).catch(function (err) {-->
        <!--console.log(err);-->
      <!--})-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style>-->
  <!--#analyze{-->
    <!--width:6.7rem;-->
    <!--padding:0 0.4rem 0.6rem 0.4rem;-->
  <!--}-->
  <!--.analyzeTitle{-->
    <!--padding:0.4rem 0 0.5rem 0;-->
  <!--}-->
  <!--.analyzeTitleName{-->
    <!--font-family: PingFangSC-Regular;-->
    <!--font-size:0.44rem;-->
    <!--color: #262A33;-->
    <!--line-height:0.64rem;-->
  <!--}-->
  <!--.analyzeTitleDate{-->
    <!--font-family: PingFangSC-Regular;-->
    <!--font-size:0.24rem;-->
    <!--color: #999999;-->
    <!--line-height:0.34rem;-->
  <!--}-->
  <!--.analyzeHr{-->
    <!--height:0.44rem;-->
    <!--margin:auto;-->
    <!--line-height:0.44rem;-->
    <!--text-align:center;-->
    <!--display:flex;-->
    <!--justify-content: space-between;-->
    <!--margin-top:0.2rem;-->
    <!--margin-bottom:0.4rem;-->
    <!--font-family: PingFangSC-Light;-->
    <!--font-size:0.32rem;-->
    <!--color: #42464D;-->
  <!--}-->
  <!--.analyzeHr i{-->
    <!--display:inline-block;-->
    <!--width:1.5rem;-->
    <!--height:0;-->
    <!--border-top: 0.02rem solid #42464D;-->
    <!--margin-top:0.2rem-->
  <!--}-->
  <!--.moduleText{-->
    <!--margin-bottom: 0.6rem;-->
  <!--}-->
  <!--.moduleText div{-->
    <!--margin-top: 0.4rem;-->
  <!--}-->
  <!--.moduleText div span{-->
    <!--font-family: PingFangSC-Medium;-->
    <!--font-size:0.28rem;-->
    <!--color: #42464D;-->
    <!--line-height:0.48rem;-->
  <!--}-->
  <!--.moduleText div p{-->
    <!--font-family: PingFangSC-Regular;-->
    <!--font-size:0.32rem;-->
    <!--color: #42464D;-->
    <!--line-height:0.56rem;-->
    <!--margin-top: 0.2rem;-->
  <!--}-->
<!--</style>-->
