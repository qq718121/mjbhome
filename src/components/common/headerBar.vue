<template>
    <div class="headerBar">
        <ul class="g-headerBar-list">
            <li :class="indexNum == index ?
              'g-headerBar-li-ac' :
               'g-headerBar-li-de'" v-for="(val,index) in barListL" :key="index" @click="f_headerBar_ac(index)">
                <span>{{val}}</span>
                <i class="g-headerBar-li-ac-ic" v-if="indexNum == index"></i>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      barListL: [],
      indexNum: 0
    };
  },
  props: {
    barList: {
      default: null
    }
  },
  methods: {
    //bar改变之后传值出去
    f_headerBar_ac(index = 0) {
      let num = this.indexNum;
      this.indexNum = index;
      if (this.indexNum !== num) {
        this.$emit("headerBarAc", this.indexNum, num);
      } else {
        return;
      }
    }
  },
  created() {
    this.barListL = this.barList;
  }
};
</script>

<style scoped>
.g-headerBar-list {
  padding: 0 0.35rem 0 0.35rem;
  overflow-x: scroll;
  background: #ffffff;
  box-shadow: 0 0 10px 0 rgba(225, 225, 225, 0.5);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.g-headerBar-li-de,
.g-headerBar-li-ac {
  position: relative;
  display: inline-block;
  height: 0.88rem;
  font-family: PingFangSC-Regular;
  font-size: 0.28rem;
  line-height: 0.88rem;
}
.g-headerBar-li-de {
  color: #8b949e;
}
.g-headerBar-li-ac {
  color: #0080ff;
}
.g-headerBar-li-ac-ic {
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -0.4rem;
  display: inline-block;
  width: 0.8rem;
  height: 0.04rem;
  background: #0080ff;
}
</style>

