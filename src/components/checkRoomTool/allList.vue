<template>
  <div class="allList">
    <TitBar titBarTits="通用主体"/>
    <div class="g-allList">
      <div class="u-g-allList-li" v-for="(val,index) in allList" :key="index" @click="allListHandler(index,val.name)">
        <span>{{val.name}}</span>
        <i class="u-trueIcon" v-if="val.isAll">
          <!-- <img src="/static/tool/icon_jiaobiao_n@3x.png" alt=""> -->
        </i>
      </div>
      <div class="g-eye-btn" @click="backs">
        <span>下一步</span>
      </div>
    </div>
  </div>
</template>
<script>
  import TitBar from "../common/titBar.vue";
  export default {
    components: {TitBar},
    data() {
      return {
        allList: [
          {name: "房屋主体", isAll: false},
          {name: "门", isAll: false},
          {name: "窗", isAll: false},
          {name: "地面", isAll: false},
          {name: "墙面/顶棚", isAll: false},
          {name: "开关/插座", isAll: false}
        ]
      };
    },
    created() {
      this.isCheckInit();
    },
    methods: {
      isCheckInit() {
        let obj = null;
        let num = null;
        let at = this.allList;
        for (let j = 0; j < 6; j++) {
          obj = this.$store.state[`form${j}`];
          num = Object.keys(obj).length / 2;
          for (let i in obj) {
            if (
              i == "text1" ||
              i == "text2" ||
              i == "text3" ||
              i == "text4" ||
              i == "text5" ||
              i == "text6" ||
              i == "id"
            ) {
              continue;
            }
            if (typeof obj[i] != "number") {
              break;
            }
            if (i == `radio${num}`) {
              at[j].isAll = true;
            }
          }
        }
      },
      allListHandler(index, name) {
        this.$router.push({
          path: "/testMethod",
          query: {
            names: name,
            id: index,
            isApp:this.$route.query.isApp
          }
        });
      },
      backs(){
        let path = "/atOnceHome";
        this.$router.push({
          path: path,
          isApp:this.$route.query.isApp
        });
      }
    }
  };
</script>
<style scoped>
  .allList {
    width: 7.5rem;
    padding-top: 0.88rem;
    margin: auto;
  }

  .g-allList {
    padding: 0.4rem 0.5rem;
  }

  .u-g-allList-li {
    position: relative;
    margin: 0 auto 0.3rem;
    width: 6.5rem;
    height: 1.2rem;
    box-shadow: 0 0 0.1rem 0 rgba(225, 225, 225, 0.5);
    text-align: center;
    line-height: 1.2rem;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #212832;
  }

  .u-trueIcon {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0.36rem;
    height: 0.36rem;
    background-image: url("/static/tool/icon_jiaobiao_n@3x.png");
    background-size: cover;
  }

  .g-eye-btn {
    margin-top: 0.5rem;
    width: 6.5rem;
    height: 0.88rem;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #ffffff;
    background: #0080ff;
    line-height: 0.88rem;
    text-align: center;
  }
</style>
