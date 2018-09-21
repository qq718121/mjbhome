<template>
     <!--v-scroll="{a:this.scrollDisable,b:load}"-->
     <div class="landscape_all" v-if="dataErr">
          <div class="landscape_other">
               <header class="header">
                    <p class="landscape_other_title">{{houseName}}</p>
               </header>
               <article>
                    <dl v-for="(item,index) in other_list" :key="index">
                         <dt v-bind:style="{backgroundImage: 'url(' +item.img+ ')'}"></dt>
                         <dd>
                              <span>{{item.text}}</span>
                         </dd>
                    </dl>
               </article>
          </div>
     </div>
</template>

<script>
import {
     mapMutations
} from "vuex";
export default {
     data() {
          return {
               scrollDisable: false,
               dataErr: false,
               //        loading_if: false,
               over_if       : false,
               houseName     : '暂无',
               num           : 0,
               other_list    : [],
               landscape_data: {
                    landscape_other_title: "",
                    landscape_other_date : "",
                    landscape_other_list : [
                         {
                              img : "",
                              text: ""
                         }
                    ]
               }
          }
     },
     methods: {
          ...mapMutations({
               set_hint: "set_hint"
          }),
          get_http() {
               let url = 'buidingSceneryDetail/' + this.$route.params.id;
               let options = {
                    urls: url,
                    methods: 'get',
                    data: {},
                    des: true,
                    types: 1
               };
               this.$http(options).then(res => {
                    if (res.response.status == 0) {

                         this.landscape_data = res.response.data;
                         let arr = this.landscape_data.landscape_other_list;
                         if (typeof arr != 'object' || arr.length == 0) {
                              this.set_hint('无数据');
                              return;
                         }
                         this.dataErr    = true;
                         this.other_list = arr;
                         this.over_if    = true;
                         return;
                    }
                    this.set_hint(res.response.message);
               }).catch(err => {
                    console.log(err);
               });
          },
     },
     created() {
          this.houseName = this.$route.query.houseName;
          this.get_http();
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
      color: #262a33;
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
      color: #42464d;
      line-height: 0.48rem;
      display: grid;
      margin: 0.4rem 0;
}
dd span {
      margin: auto;
      display: block;
}
.loading {
      text-align: center;
      font-size: 0.34rem;
      padding-bottom: 1rem;
      color: #42464d;
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
