<template>
  <div class="atOnceHome">
    <div class="hint animated bounceInDown" v-if="hintIs">{{codeText}}</div>
    <TitBar titBarTits="立即验房"/>
    <div class="g-atOnceHome" v-show="prvLoad">
      <div class="g-atOnceHome-list" v-for="(val,index) in atOnceHome_list" :key="index"
           @click="f_atOnceHome_listHandler(val.path,val.id,val.name)">
        <div class="g-atOnceHome-list-img" style="margin-left: 0.2rem;margin-right: 0.2rem">
          <img :src="val.src" alt="">
        </div>
        <div class="g-atOnceHome-list-tex" style="margin-left: 0">
          <span>{{val.name}}</span>
        </div>
        <i class="u-trueIcon" v-if="val.isAll">
          <img src="/static/tool/icon_jiaobiao_n@3x.png" alt="">
        </i>
      </div>
    </div>
    <div class="g-atOnceHome-btn" v-if="!isBtn">
      <span>提交验房结果</span>
    </div>
    <div class="g-atOnceHome-btn2" v-else @click="submit">
      <span>提交验房结果</span>
    </div>
  </div>
</template>
<script>
  import TitBar from "../common/titBar.vue";
  import qs from "qs";
  import Ob from "../../common/js/obshare";
  export default {
    data() {
      return {
        atOnceHome_list: [
          {
            name: "通用部分",
            path: "/allList",
            isAll: false,
            id: null,
            src: "http://oxrgdeqd8.bkt.clouddn.com/icon_tongyong_n@3x.png"
          },
          {
            name: "厨房",
            path: "/testMethod",
            id: 6,
            isAll: false,
            src: "http://oxrgdeqd8.bkt.clouddn.com/icon_chufang_n@3x.png"
          },
          {
            name: "卫生间",
            path: "/testMethod",
            id: 7,
            isAll: false,
            src: "http://oxrgdeqd8.bkt.clouddn.com/icon_weishengjian_n@3x.png"
          },
          {
            name: "阳台",
            path: "/testMethod",
            id: 8,
            isAll: false,
            src: "http://oxrgdeqd8.bkt.clouddn.com/icon_yangtai_n@3x.png"
          },
          {
            name: "其他",
            path: "/testMethod",
            id: 9,
            isAll: false,
            src: "http://oxrgdeqd8.bkt.clouddn.com/icon_qita_n@3x.png"
          },
          {
            name: "五证两书一表",
            path: "/testMethod",
            id: 10,
            isAll: false,
            src: "http://oxrgdeqd8.bkt.clouddn.com/icon_wuzhengliangshu_n@3x.png"
          }
        ],
        imgArr: [
          'http://oxrgdeqd8.bkt.clouddn.com/icon_tongyong_n@3x.png',
          'http://oxrgdeqd8.bkt.clouddn.com/icon_chufang_n@3x.png',
          'http://oxrgdeqd8.bkt.clouddn.com/icon_weishengjian_n@3x.png',
          'http://oxrgdeqd8.bkt.clouddn.com/icon_yangtai_n@3x.png',
          "http://oxrgdeqd8.bkt.clouddn.com/icon_qita_n@3x.png",
          "http://oxrgdeqd8.bkt.clouddn.com/icon_wuzhengliangshu_n@3x.png"
        ],
        isBtn: false,
        hintIs: false,
        prvLoad: false,
        codeText: "有选项未选"
      };
    },
    components: {TitBar},
      created()
  {
    window.scrollTo(0, 0);
    this.f_prvLoad(this.imgArr);
    this.isCheckInit();
    this.isCheckInit2();
    this.isSubmit();
  }
  ,
  methods: {
    f_atOnceHome_listHandler(url, id, name)
    {
      this.$router.push({
        path: url,
        query: {
          names: name,
          id: id,
          isApp: this.$route.query.isApp
        }
      });
    }
  ,
    isSubmit()
    {
      let ar = this.atOnceHome_list;
      let len = ar.length;
      for (let i = 0; i < len; i++) {
        if (!ar[i].isAll) {
          return;
        }
        if (i == len - 1) {
          this.isBtn = true;
        }
      }
    }
  ,
    hint_is(text)
    {
      if (text) {
        this.codeText = text;
      }
      this.hintIs = true;
      setTimeout(() => {
        this.hintIs = false;
      }, 2000);
    }
  ,
    isAllCheck()
    {
      this.handler();
    }
  ,
    handler()
    {
      let t = "";
      if (window.sessionStorage.getItem('isBar') == '') {
        t = window.sessionStorage.getItem("token") || "";
      } else {
        t = JSON.parse(window.localStorage.getItem("token")).val || "";
      }
      var d = {token: t, body: {arr: [{commonUse: []}]}},
        datas = null,
        url = this.$url.httpRequests + "buildingCamera/roomCheckingTool";
      for (let i = 0; i < 6; i++) {
        let obj = {id: i + 7};
        Object.assign(obj, this.$store.state[`form${i}`]);
        d.body.arr[0].commonUse.push(obj);
      }

      for (let i = 6; i < 11; i++) {
        let obj = {id: i - 4};
        Object.assign(obj, this.$store.state[`form${i}`]);
        d.body.arr.push(obj);
      }

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
          let d = JSON.stringify(response.data.response);
          window.sessionStorage.setItem("da", d);
          this.$router.push({
            path: "/testOver",
            query: {
              data: d
            }
          });
          return;
        }
        this.isBtn = true;
      }).catch(error => {
        this.isBtn = true;
        this.hint_is("网络异常");
      });
    }
  ,
    isCheckInit()
    {
      let obj = null;
      let num = null;
      let at = this.atOnceHome_list;
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
            return;
          }
          if (j == 5) {
            if (i == `radio${num}`) {
              at[0].isAll = true;
            }
          }
        }
      }
    }
  ,
    isCheckInit2()
    {
      let obj = null;
      let num = null;
      let at = this.atOnceHome_list;
      for (let j = 6; j < 11; j++) {
        obj = this.$store.state[`form${j}`];
        num = Object.keys(obj).length;
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

          if (j == 10) {
            if (i == `radio${num}`) {
              at[j - 5].isAll = true;
            }
            continue;
          }
          if (i == `radio${num / 2}`) {
            at[j - 5].isAll = true;
          }
        }
      }
    }
  ,
    f_prvLoad(arrImg)
    {
      if (!arrImg) {
        throw 'arrImg不存在';
        return;
      }
      let this_ = this;
      let len = arrImg.length;
      let count = 0;
      for (let i = 0; i < len; i++) {
        let img = new Image();
        img.onload = function () {
          count++;
          if (count == len) {
            this_.prvLoad = true;
          }
        };
        img.src = arrImg[i];
      }
    }
  ,
    submit()
    {
      this.isBtn = false;
      this.isAllCheck();
    }
  }
  }
  ;
</script>
<style scoped>
  .atOnceHome {
    width: 7.5rem;
    margin: auto;
    padding-top: 0.88rem;
  }

  .g-atOnceHome {
    padding: 0.4rem 0.3rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .g-atOnceHome-list {
    position: relative;
    margin-bottom: 0.3rem;
    width: 3.3rem;
    height: 1.6rem;
    background: #f7f7f7;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-family: PingFangSC-Regular;
    font-size: 0.28rem;
    color: #212832;
    line-height: 0.28rem;
  }

  .g-atOnceHome-list-img {
    width: 1rem;
    height: 1rem;
  }

  .g-atOnceHome-list-img img {
    width: 100%;
  }

  .g-atOnceHome-list-tex,
  .g-atOnceHome-list-img {
    margin: auto;
  }

  .g-atOnceHome-btn,
  .g-atOnceHome-btn2 {
    margin: 1.7rem auto 3.38rem;
    width: 5.2rem;
    height: 0.88rem;
    text-align: center;
    line-height: 0.88rem;
    font-family: PingFangSC-Regular;
    font-size: 0.32rem;
    color: #ffffff;
    border-radius: 1rem;
  }

  .g-atOnceHome-btn {
    background: #b9c0c8;
  }

  .g-atOnceHome-btn2 {
    background: #0080ff;
  }

  .u-trueIcon {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0.36rem;
    height: 0.36rem;
  }

  .u-trueIcon img {
    width: 100%;
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
    z-index: 99999999999999;
  }
</style>
