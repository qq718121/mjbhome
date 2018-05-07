<template>
  <div class="animateInputLogin">
    <div class="hint animated bounceInDown" v-if="hintIs">{{codeText}}</div>
    <div class="g-bg-big">
      <div class="g-num">完成测试</div>
      <div class="g-form">
        <div class="g-form-bg"><img src="http://oxrgdeqd8.bkt.clouddn.com/%E6%89%8B.png" alt=""></div>
        <div class="g-pen">
          <img src="http://oxrgdeqd8.bkt.clouddn.com/qianbi.png" alt="">
        </div>
        <div class="g-name">
          <p>请输入您的名称</p>
          <div class="g-form-inp">
            <div class="g-inp">
              <el-input :maxlength="5" v-model="name" placeholder="输入不超出4个中文字符"></el-input>
            </div>
          </div>
        </div>

        <div class="g-name" style="top:2.9rem ;">
          <p>请输入您的手机号</p>
          <div class="g-form-inp">
            <div class="u-code" @click="loadHandler" v-if="is_codeTextTime">获取验证码</div>
            <div class="u-code" v-else>{{codeTextTimes}}</div>
            <div class="g-inp">
              <el-input v-model="phone" type="tel" placeholder="请输入有效手机号"></el-input>
            </div>
          </div>
        </div>
        <div class="g-name" style="top:4.8rem;">
          <p>请输入您的验证码</p>
          <div class="g-form-inp">
            <div class="g-inp">
              <el-input v-model="code" type="number" placeholder="请输入您的验证码"></el-input>
            </div>
          </div>
        </div>
        <div class="g-text">
          <p>点击即可生成属于您的超级英雄</p>
          <p>看您的精明程度与哪位英雄相似</p>
        </div>
        <div class="g-btn" @click="submit">
          <img style="width: 100%;"
               src="http://oxrgdeqd8.bkt.clouddn.com/%E7%94%9F%E6%88%90%E7%BB%93%E6%9E%9C%E6%8C%89%E9%92%AE.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import qs from 'qs'
  export default {
    data(){
      return {
        name: '',
        phone: '',
        code: '',
        hintIs: false,
        codeText: '请输入正确的手机号码',
        codeTextTimes: '59s',
        is_codeTextTime: true
      }
    },
    created(){
      this.preImg();
    },
    methods: {
      //预加载选项图片
      preImg(){
        let img = document.createElement('img');
        img.src = 'http://oxrgdeqd8.bkt.clouddn.com/%E6%89%8B.png';
        img.style.display = 'none';
        document.body.appendChild(img);
      },
      hint_is(text){
        this.codeText = text;
        this.hintIs = true;
        setTimeout(() => {
          this.hintIs = false;
        }, 2000)
      },
      //手机验证
      checkMobile(str) {
        var re = /^1\d{10}$/;
        if (!re.test(str)) {
          return false;
        }
      },
      //验证码倒计时
      codeTime(){
        this.is_codeTextTime = false;
        let num = 60;
        let id = setInterval(() => {
          num--;
          this.codeTextTimes = num + 's';
          if (num == 0) {
            this.is_codeTextTime = true;
            clearInterval(id);
          }
        }, 1000)
      },
      //数据加密
      des(str){
        var timestamp = this.$setDAesString(new Date().getTime().toString(), "yhgt!d%sd*aw%dSDSFSsa#mng~dsq").slice(0, 20);
        var data = this.$setDAesString(str, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq");
        var tata = data.slice(0, 10);
        var tata1 = data.slice(10, data.length);
        var data1 = tata + timestamp + tata1;
        return data1;
      },
      loadHandler(){
        if (this.phone == '' || this.checkMobile(this.phone) === false) {
          this.hint_is('请输入正确的手机号码');
          return;
        }
        var d = {body: {}}, datas = null,
          url = this.$url.httpRequestse + 'user/captcha';
        d.body.userPhone = this.phone;
        d.body.type = '1';
        var res = {
          data: this.des(JSON.stringify(d))
        };
        datas = qs.stringify({d: this.des(JSON.stringify(d))});
        this.$Axios.post(url, datas, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then((response) => {
          var res = {data: response.data};
          var data = this.$getDAesString(res, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq");
          var resp = JSON.parse(data);
          if (resp.response.message == 'success') {
            this.hint_is('已获取验证码');
            this.codeTime();
          } else {
            this.hint_is(resp.response.message);
          }
        }).catch((error) => {
          this.hint_is('获取验证码失败，请重试');
        });
      },
      submit(){
        if (this.name == '') {
          this.hint_is('请输入名称');
          return;
        }

        if (this.phone == '' || this.checkMobile(this.phone) === false) {
          this.hint_is('请输入正确的手机号码');
          return;
        }
        if (this.phone == '' || this.checkMobile(this.phone) === false) {
          this.hint_is('请输入正确的验证码');
          return;
        }
        var d = {body: {}}, datas = null,
          url = this.$url.httpRequestse + 'user/questionnaire';
        d.body.userPhone = this.phone;
        d.body.smsCode = this.code;
        d.body.userName = this.name;
        d.body.result = JSON.parse(this.$route.query.arr).slice(',').join(',');
        datas = qs.stringify({d: this.des(JSON.stringify(d))});
        //你要传给后台的参数值 key/value
        this.$Axios.post(url, datas, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then((response) => {
          var res = {data: response.data};
          var data = this.$getDAesString(res, "yhgt!d%sd*aw%dSDSFSsa#mng~dsq");
          var resp = JSON.parse(data);

          if (resp.response.status == '0') {
            this.$router.push({
              path: '/animateInputOver',
              query: {
                id: resp.response.data.result,
                name: this.name
              }
            });
          } else {
            this.hint_is(resp.response.message);
          }
        }).catch((error) => {
          console.log(error);
          this.hint_is('生成失败，请检查网络连接');
        });
      }
    }
  }
</script>
<style scoped>
  .animateInputLogin {
    position: relative;
    width: 7.5rem;
    margin: auto;
    overflow: hidden;
    background: #2c75e9;
  }

  .g-bg-big {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url('http://oxrgdeqd8.bkt.clouddn.com/bg.png');
    background-size: cover;
    z-index: 0;
    overflow: hidden;
  }

  .g-num {
    position: relative;
    margin: 0.3rem auto 0;
    width: 1.39rem;
    height: 0.62rem;
    border: 0.06rem #474747 solid;
    text-align: center;
    line-height: 0.62rem;
    font-size: 0.3rem;
    font-family: PingFangSC-Semibold;
    color: rgba(71, 71, 71, 1);
    background: #fff;
    font-weight: 600;
  }

  .g-form {
    position: relative;
    width: 100%;
    margin-top: 0.62rem;
    margin-bottom: 0.5rem;
  }

  .g-pen {
    width: 2.01rem;
    height: 2.46rem;
    position: absolute;
    top: -1.4rem;
    right: 0.47rem;
  }

  .g-form-bg img {
    width: 100%;
  }

  .g-name {
    position: absolute;
    top: 1.05rem;
    left: 1.68rem;
  }

  .g-name p {
    padding-left: 0.35rem;
    font-size: 0.26rem;
    font-family: FZLTTHJW--GB1-0;
    color: rgba(71, 71, 71, 1);
    line-height: 0.5rem;
    font-weight: 900;
    text-shadow: #fff 2px 0 0, #fff 0 2px 0, #fff -2px 0 0, #fff 0 -2px 0;
    -webkit-text-shadow: #fff 2px 0 0, #fff 0 2px 0, #fff -2px 0 0, #fff 0 -2px 0;
    -moz-text-shadow: #fff 2px 0 0, #fff 0 2px 0, #fff -2px 0 0, #fff 0 -2px 0;
    *filter: Glow(color=#fff, strength=1);
  }

  .g-form-inp {
    position: relative;
    width: 4.14rem;
    height: 0.84rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.48rem;
    border: 0.06rem solid #000;
  }

  .u-code {
    position: absolute;
    top: -0.06rem;
    right: -0.06rem;
    width: 1.93rem;
    height: 0.84rem;
    border-radius: 0.48rem;
    border: 0.06rem solid #000;
    font-size: 0.28rem;
    font-weight: 600;
    font-family: FZLTTHJW--GB1-0;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    background: #FF9100;
    line-height: 0.84rem;
    z-index: 999;
  }

  .g-text {
    position: absolute;
    bottom: 2.5rem;
    left: 2.09rem;
    font-weight: 900;
    width: 3.75rem;
    height: 0.53rem;
    font-size: 0.24rem;
    font-family: FZLTTHJW--GB1-0;
    color: rgba(71, 71, 71, 1);
    line-height: 0.3rem;
  }

  .g-btn {
    position: absolute;
    bottom: 0.82rem;
    left: 2.1rem;
    width: 3.42rem;
    height: 1.32rem;
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

  .g-inp {
    height: 100%;
    padding-left: 0.05rem;
  }
</style>
<style>
  .g-form-inp .el-input__inner {
    width: 3.7rem;
    border: none;
    font-size: 0.2rem;
    height: 100%;
    font-family: FZLTTHJW--GB1-0;
    color: rgba(135, 134, 134, 1);
    line-height: 0.5rem;
    border-radius: 0.48rem;
  }

  .g-form-inp .el-input {
    height: 100%;
    border-radius: 0.48rem;
  }
</style>
