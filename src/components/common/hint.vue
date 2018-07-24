<template>
  <div class="hint animated zoomIn" v-if="hintIs">{{codeText}}</div>
</template>
<script>
export default {
  props: {
    h: {
      default: false
    },
    t: {
      default: ""
    }
  },
  data() {
    return {
      codeText: "",
      hintIs: false
    };
  },
  created() {
    this.codeText = this.t;
    this.hintIs = this.h;
    this.hint_is(this.codeText);
  },
  //    watch:{
  //        hintIs:{}
  //    },
  methods: {
    hint_is(text) {
      this.codeText = text;
      this.hintIs = true;
      setTimeout(() => {
        this.hintIs = false;
      }, 2000);
    }
  }
};
</script>
<style scoped>
.animated {
  animation-duration: 0.3s;
  animation-fill-mode: both;
}
.hint {
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -1.52rem;
  margin-top: -0.47rem;
  width: 3.04rem;
  height: 0.94rem;
  background: rgba(0, 0, 0, 0.78);
  border-radius: 0.08rem;
  text-align: center;
  color: #fff;
  line-height: 0.94rem;
  z-index: 9999999;
}
</style>
