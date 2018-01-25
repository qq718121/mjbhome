<template>
  <div class="ifrem">

    <iframe :src="iframe_url" name="showHere" frameborder="0"></iframe>

    <div class="headline">
      <p class="shooting_time"><span>拍摄时间:</span><span>{{this.$route.query.url.vrDate}}</span></p>
      <p v-on:click.prevent="loadHandler('0','animated bounceIn')" class="housing_details">楼盘详情</p>
      <p v-on:click.prevent="loadHandler('0','animated bounceIn')" class="view_report">查看报告</p>
    </div>

    <div class="vr_open" @click="open_handler" v-if="open_show"><img :src="this.$url.vr_open" alt=""></div>

    <div class="vr_btn_all" v-if="vr_list_show">
      <div class="vr_btn_list">
        <div class="vr_change" v-for="(val,index) in this.$route.query.url.vrKindList"
             @click="change_handler(index,val)">
          <img :src="active_vr_num == index ? val.selectedIconUrl : val.unselectedIconUrl">
          <p :class="[{'active_vr':active_vr_num == index}]">{{val.kindName}}</p>
        </div>
      </div>
      <div class="vr_close" @click="close_handler"><img :src="this.$url.vr_close"></div>
    </div>

  </div>
</template>
<script>
  export default {
    data(){
      return {
        iframe_href: this.$url.vr_link_nk,
        vr_list_show: false,
        open_show: true,
        iframe_url: '',
        iframe_id: 0,
        active_vr_num: 0
      }
    },
    beforeDestroy(){
      window.localStorage.is = false;
    },
    created(){
      //拿到href里面的楼盘ID
      this.iframe_id = this.$route.params.id;

//      if (typeof this.$route.query.url == 'string' || !this.$route.query.url) {
//        window.location.href = 'http://192.168.1.247:8080/#/obShare/132';
//        return;
//      } else {

      //拼接firem地址链接
      this.iframe_url = this.$url.vr_iframe_url + 'ifream/' + this.iframe_id;
      //定时恢复被隐藏的DOM
      this.vr_list_icon_show();
//      }
    },
    mounted(){
      try {
        let index = this.$route.query.index;
        let url = this.$route.query.url;

        this.active_vr_num = index;
        window.url = url.vrKindList[index].vrUrl;
      }
      catch (e) {
        return;
      }
    },

    methods: {
      //下载提示框
      loadHandler(num, className){
        let commit = this.$store.commit;
        commit('set_motai', num);
        commit('set_school_class', className);
        commit('change_motai');
      },
      //icon框显示隐藏
      open_handler(){
        this.vr_list_show = true;
        this.open_show = false;
      },
      close_handler(){
        this.vr_list_show = false;
        this.open_show = true;
      },
      //如果点击的是历史全景
      change_handler(index, val){
        this.active_vr_num = index;
        if (val.kindType == '0') {
          this.loadHandler('0', 'animated bounceIn');
        } else {
          window.localStorage.url = val.vrUrl;
          this.iframe_id++;
          this.iframe_url = this.$url.vr_iframe_url + 'ifream/' + this.iframe_id;
        }
      },
      //定时恢复被隐藏的DOM
      vr_list_icon_show(){
        setInterval(function () {
          try {
            console.log(showHere.document);
          }
          catch (e) {
            try {
              let headline = document.getElementsByClassName('headline')[0];
              let img = document.querySelector('img');
              headline.style.display = '';
              img.style.display = '';
              return;
            }
            catch (e) {
              return;
            }

          }
        }, 2000)
      }

    }
  }
</script>
<style>
  iframe {
    width: 100vw;
    height: 100vh;
    margin: auto;
  }

  .ifrem {
    width: 100vw;
    margin: auto;
  }

  .headline {
    position: fixed;
    top: 1rem;
    color: #fff;
    left: 0.3rem;
  }

  .headline p {
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #FFFFFF;
    line-height: 0.48rem;
  }

  .vr_open {
    width: 0.77rem;
    height: 0.77rem;
    position: fixed;
    top: calc(50vh - 0.385rem);
    left: 0.23rem;
  }

  .vr_open img {
    width: 0.77rem;
    height: 0.77rem;
  }

  .vr_btn_list {
    width: 4.8rem;
    height: 2.84rem;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 0.12rem;
    display: flex;
    justify-content: flex-start;
    padding: 0.6rem 0.4rem 0.6rem 0.4rem;
    flex-flow: wrap;
  }

  .vr_change {
    width: 1.5rem;
    text-align: center;
  }

  .vr_change img {
    width: 0.35rem;
    height: 0.36rem;
  }

  .vr_change p {
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #212832;
    line-height: 0.5rem;
  }

  .vr_btn_all {
    position: absolute;
    top: calc(50vh - 2.02rem);
    left: calc(50vw - 2.8rem);
  }

  .vr_close {
    width: 0.4rem;
    height: 0.4rem;
    margin: 0.4rem auto;
  }

  .vr_close img {
    width: 0.4rem;
    height: 0.4rem;
  }

  .active_vr {
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #0080FF !important;
    line-height: 0.24rem;
  }
</style>
