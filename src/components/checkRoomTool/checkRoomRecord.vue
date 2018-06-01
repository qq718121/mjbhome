<template>
  <div class="checkRoomRecord">
    <!-- 提示框组件 -->
    <Hint :h="true" :t="ist" v-if="isHint"/>
    <TitBar titBarTits="我的验房记录"/>
    <span style="color:#000;display: inline-block;width: 100%;text-align: center;line-height: 0.5rem;margin-top: 0.8rem"
          v-if="testOverData.length <=0">暂无数据﹏</span>
    <div class="g-checkRoomRecord-list" v-for="(item, index) in testOverData" :key="index">
      <div class="g-checkRoomRecord-list-tit" @click="f_go_checkRoomOver(item)">
        <div class="g-checkRoomRecord-list-tit-text" style="margin-left:0">
          <p class="u-t1">验房结果：{{item.totalScore}}分</p>
          <p class="u-t2">{{item.createTime.split(' ')[0]}}</p>
        </div>
        <i style="margin-right:0" class="u-g-checkRoomRecord-icon"><img
          src="/static/tool/housingesta_icon_xiangqing@3x.png" alt=""></i>
      </div>
      <div class="g-checkRoomRecord-list-ine">
        <div class="g-testOver-over">
          <div class="g-testOver-li">
            <span>通用部分</span>
            <span v-if="item.count1 !=0">
                            <i style="color: #F56364;">{{item.count1}}</i>项不合格</span>
            <span v-else style="color: #0080FF;">合格</span>
          </div>
          <div class="g-testOver-li">
            <span>厨房</span>
            <span v-if="item.count2 !=0">
                            <i style="color: #F56364;">{{item.count2}}</i>项不合格</span>
            <span v-else style="color: #0080FF;">合格</span>
          </div>
          <div class="g-testOver-li">
            <span>卫生间</span>
            <span v-if="item.count3 !=0">
                            <i style="color: #F56364;">{{item.count3}}</i>项不合格</span>
            <span v-else style="color: #0080FF;">合格</span>
          </div>
          <div class="g-testOver-li">
            <span>阳台</span>
            <span v-if="item.count4 !=0">
                            <i style="color: #F56364;">{{item.count4}}</i>项不合格</span>
            <span v-else style="color: #0080FF;">合格</span>
          </div>
          <div class="g-testOver-li">
            <span>其他</span>
            <span v-if="item.count5 !=0">
                            <i style="color: #F56364;">{{item.count5}}</i>项不合格</span>
            <span v-else style="color: #0080FF;">合格</span>
          </div>
          <div class="g-testOver-li">
            <span>五证两书一表</span>
            <span v-if="item.count6 !=0">
                            <i style="color: #F56364;">{{item.count6}}</i>项不合格</span>
            <span v-else style="color: #0080FF;">合格</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Hint from "../common/hint.vue";
  import TitBar from "../common/titBar.vue";
  import qs from "qs";
  export default {
    components: {
      Hint,
      TitBar
    },
    data() {
      return {
        ist: "",
        isHint: false,
        testOverData: []
      };
    },
    created() {
      this.getOver();
    },
    methods: {
      //提示框方法
      hint_is(text) {
        this.ist = text;
        this.isHint = true;
        setTimeout(() => {
          this.isHint = false;
        }, 2000);
      },
      getOver() {
        let t = "";
        /*
         如果是APP打开
         或者分享页
         分别获取token
         */
        try {
          if (window.sessionStorage.getItem('isBar') == '') {
            t = window.sessionStorage.getItem("token") || "";
          } else {
            t = JSON.parse(window.localStorage.getItem("token")).val || "";
          }
        } catch (e) {
          this.$router.push({
            path: "/checkRoomTool",
          });
        }
        var d = {token: t, body: {}},
          datas = null,
          url = this.$url.httpRequests + "buildingCamera/roomCheckResultList";
        //        var res = {
        //          data: this.des(JSON.stringify(d))
        //        };
        datas = qs.stringify({d: JSON.stringify(d)});
        this.$Axios.post(url, datas, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
          }
        }).then(response => {
          //          var res = {data: response.data};
          //          var data = this.$getDAesString(res, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq");
          //          var resp = JSON.parse(data);
          if (response.data.code == "0") {
            this.testOverData = response.data.response.list;
            // let d = JSON.stringify(response.data.response);
          }
        })
          .catch(error => {
            this.hint_is("网络异常");
            console.log(error);
          });
      },
      //跳转验房结果页
      f_go_checkRoomOver(val) {
        let d = JSON.stringify(val);
        this.$router.push({
          path: "/testOver",
          query: {
            data: d,
            time: val.createTime,
            isList: true
          }
        });
      }
    }
  };
</script>
<style scoped>
  .checkRoomRecord {
    width: 7.5rem;
    background: rgba(225, 225, 225, 0.5);
    padding-top: 0.88rem;
    padding-bottom: 0.4rem;
    overflow: hidden;
    margin: auto;
  }

  .g-checkRoomRecord-list {
    margin-top: 0.2rem;
    padding: 0, 0.3rem 0 0.3rem;
    background: #fff;
  }

  .g-checkRoomRecord-list-tit {
    padding: 0.32rem 0.3rem 0.38rem 0.3rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    border-bottom: 1px solid #e7e7e7;
  }

  .g-checkRoomRecord-list-tit-text {
    margin: auto;
    width: 3.31rem;
  }

  .g-checkRoomRecord-list-tit-text .u-t1 {
    /* width: 2.31rem; */
    font-family: PingFangSC-Semibold;
    font-size: 0.32rem;
    color: #212832;
    line-height: 0.32rem;
  }

  .g-checkRoomRecord-list-tit-text .u-t2 {
    margin-top: 0.2rem;
    /* width: 2.31rem; */
    font-family: PingFangSC-Regular;
    font-size: 0.24rem;
    color: #212832;
    line-height: 0.24rem;
  }

  .u-g-checkRoomRecord-icon {
    margin: auto;
    display: inline-block;
    width: 0.12rem;
    height: 0.22rem;
    color: #8b949e;
  }

  .g-testOver-over {
    padding-left: 0.3rem;
    padding-bottom: 0.4rem;
    background: #fff;
  }

  .g-testOver-li {
    margin-top: 0.4rem;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #8b949e;
    line-height: 0.26rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    padding-right: 0.3rem;
  }
</style>


