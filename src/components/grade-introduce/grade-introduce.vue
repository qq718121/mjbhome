<template>
  <div class="grade-introduce">
    <!--评分介绍组件-->
    <!--
        <router-link to="" >
    <span @click="goBack()" class="el-icon-arrow-left grade-introduceBack"></span>
  </router-link>
     -->
    <div class="grade-introduceBody" v-for="gradeImages in gradeIntroduceBodyImg">
      <!--<transition appear appear-active-class="bounce-enter-active">-->
        <img :src="gradeImages" alt="" title="图片无法显示请检查网络设置">
      <!--</transition>-->
    </div>
    <!--
       <div  class="grade-introduceBtn">
    <el-button @click="OBhandler()" type="info">{{lookBtn}}</el-button>
  </div>
     -->
  </div>
</template>
<script>
  export default {
    name: 'grade-introduce',
    data () {
      return {
        lookBtn: '查看严选楼盘',
        gradeIntroduceBodyImg: [
          this.$url.gradeIntroduceBodyImgOne,
          this.$url.gradeIntroduceBodyImgTwo,
          this.$url.gradeIntroduceBodyImgThree,
          this.$url.gradeIntroduceBodyImgFore,
          this.$url.gradeIntroduceBodyImgFive
        ]
      }
    },
    methods: {
      // OBhandler(){
      //   call_app_function('1');

      // },
      // goBack(){
      //   window.history.go(-1);
      // }
    },
    created(){

    },
    mounted(){
      this.$nextTick(function () {
//         this.$store.commit('threeLading');
      });
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #000;
  }

  .grade-introduce {
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .grade-introduceBody {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
  }

  .grade-introduceBody img {
    width: 100%;
    height: 100%;
  }

  /*
  .grade-introduceBack{
      display: inline-block;
      position: fixed;
      color:#fff;
      top:0.7rem;
      left:0.28rem;
    /*font-size:2rem;
    }
  .grade-introduceBtn{
      position: absolute;
      bottom:2.6rem;
      height:1.719%;
      width:100%;
    }
  .grade-introduceBtn button{
    position:relative;
    width:84%;
    display: inline-block;
    height:100%;
    border-radius:0.9rem;
    margin-left: 8%;
    font-size:35px;
    line-height: 100%;
    background:#52cbf6;
    font-weight: 500;
  }
  */
  @media screen and (max-width: 750px) {
    .grade-introduceBtn button {
      font-size: 25px;
    }
  }

  @media screen and (max-width: 550px) {
    .grade-introduceBtn button {
      font-size: 18px;
    }
  }

  /*.bounce-enter-active {*/
    /*animation: bounce-in .5s;*/
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
