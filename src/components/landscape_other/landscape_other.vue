<template>
  <!--v-scroll="{a:this.scrollDisable,b:load}"-->
  <div class="landscape_all">
    <div class="landscape_other">
      <header class="header">
        <p class="landscape_other_title">{{houseName}}</p>
      </header>
      <article>
        <dl v-for="item in other_list">
          <dt v-bind:style="{backgroundImage: 'url(' +item.img+ ')'}"></dt>
          <dd><span>{{item.text}}</span></dd>
        </dl>
      </article>
    </div>
  </div>
</template>

<script>
  //  import '../../common/js/scroll';
  export default {
    data(){
      return {
        scrollDisable: false,
//        loading_if: false,
        over_if: false,
        houseName: '暂无',
        num: 0,
        other_list: [],
        landscape_data: {
          landscape_other_title: "",
          landscape_other_date: "",
          landscape_other_list: [
            {
              img: "",
              text: ""
            }
          ]
        }
      }
    },
    methods: {
//      load(){
//        this.scrollDisable = true;
//        this.loading_if = true;
//        let arr = this.landscape_data.landscape_other_list;
//        let slice_arr = arr.slice(2, arr.length);
//        if (this.other_list.length == arr.length || this.num >= arr.length) {
//          this.loading_if = false;
//          this.over_if = true;
//          return;
//        }
//        this.num++;
//        this.other_list.push(slice_arr[this.num]);
//        this.scrollDisable = false;
//        return;
//      }
    },
    mounted(){
      let this_ = this;
      this.houseName = this.$route.query.houseName;
      this.$Axios.get(this.$url.httpRequest + 'buidingSceneryDetail/' + this.$route.params.id).then((res) => {
        let data = JSON.parse(this_.$getDAesString(res, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq"));
        this.landscape_data = data.response.data;
        let arr = this.landscape_data.landscape_other_list;
        this.other_list = arr;
        this.over_if = true;
      }).catch((err) => {
        console.log(err);
      });
    }
  }
</script>

<style scoped>
  .landscape_all {
    width: 7.5rem;

  }

  .landscape_other {
    width: 7.5rem;
  }

  .header {
    width: 6.7rem;
    padding: 0.4rem;
  }

  .landscape_other_title {
    font-family: PingFangSC-Regular, "微软雅黑";
    font-size: 0.44rem;
    color: #262A33;
    line-height: 0.64rem;
  }

  .landscape_other_date {
    font-family: PingFangSC-Regular, "微软雅黑";
    font-size: 0.24rem;
    color: #999999;
    line-height: 0.34rem;
  }

  article {
    width: 6.7rem;
    padding: 0.4rem;
    display: inline-block;
  }

  dl {
    margin-top: 0.2rem;
    wdith: 7.5rem;
  }

  dd {
    font-family: PingFangSC-Regular, "微软雅黑";
    font-size: 0.32rem;
    color: #42464D;
    line-height: 0.48rem;
    display: grid;
    margin: 0.4rem 0;
  }
  dd span{
    margin: auto;
    display: block;
  }
  .loading {
    text-align: center;
    font-size: 0.34rem;
    padding-bottom: 1rem;
    color: #42464D;
  }

  .loading span {
    margin: 0.1rem;
  }

  dt {
    width: 6.7rem;
    position: relative;
    height: 5.025rem;
    overflow: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
  }
</style>
