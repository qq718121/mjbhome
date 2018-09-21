<template>
     <div class="animateInputLogin">
          <div class="g-bg-big">
               <div class="g-num">完成测试</div>
               <div class="g-form">
                    <div class="g-form-bg">
                         <img src="http://oxrgdeqd8.bkt.clouddn.com/xxtx.png" alt="">
                    </div>

                    <div class="g-name">
                         <p>请输入您的名称</p>
                         <div class="g-form-inp">
                              <div class="g-inp">
                                   <el-input :maxlength="4" v-model="name" placeholder="最多输入四个汉字"></el-input>
                              </div>
                         </div>
                    </div>

                    <div class="g-text">
                         <p>点击即可生成属于您的超级英雄</p>
                         <p>看您的精明程度与哪位英雄相似</p>
                    </div>
                    <div class="g-btn" @click="submit">
                         <img style="width: 100%;" src="http://oxrgdeqd8.bkt.clouddn.com/%E7%94%9F%E6%88%90%E7%BB%93%E6%9E%9C%E6%8C%89%E9%92%AE.png" alt="">
                    </div>

               </div>
          </div>
     </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
     data() {
          return {
               name: '',
               phone: '',
               code: '',
               codeText: '请输入正确的手机号码',
               codeTextTimes: '59s',
               is_codeTextTime: true
          }
     },
     created() {
          this.preImg();
     },
     methods: {
          ...mapMutations({
               hint_is: 'set_hint'
          }),
          //预加载选项图片
          preImg() {
               let img = document.createElement('img');
               img.src = 'http://oxrgdeqd8.bkt.clouddn.com/xxtx.png';
               img.style.display = 'none';
               document.body.appendChild(img);
          },

          submit() {
               if (this.name == '') {
                    this.hint_is('请输入名称');
                    return;
               }

               var url = 'questionnaire';
               var options = {
                    urls: url,
                    methods: 'post',
                    data: {
                         result: JSON.parse(this.$route.query.arr).slice(',').join(',')
                    },
                    des: false,
                    types: 2
               };
               //你要传给后台的参数值 key/value
               this.$http(options).then((response) => {
                
                    if (response.data.code == '0') {
                         this.$router.push({
                              path: '/animateInputOver',
                              query: {
                                   id: response.data.response.result,
                                   name: this.name
                              }
                         });
                    } else {
                         this.hint_is(response.data.message);
                    }
               }).catch((error) => {
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
      background-image: url("http://oxrgdeqd8.bkt.clouddn.com/bg.png");
      background-size: cover;
      z-index: 0;
      overflow: hidden;
}

.g-num {
      position: absolute;
      top: 1.5rem;
      left: 2.5rem;
      width: 1.74rem;
      height: 0.62rem;
      border: 0.06rem #474747 solid;
      text-align: center;
      line-height: 0.62rem;
      font-size: 0.3rem;
      font-family: PingFangSC-Semibold;
      color: rgba(71, 71, 71, 1);
      background: #fff;
      font-weight: 600;
      z-index: 999999;
}

.g-form {
      position: relative;
      width: 100%;
      height: 100%;
}

.g-form-bg img {
      width: 100%;
}

.g-name {
      position: absolute;
      top: 5.05rem;
      left: 1.68rem;
}

.g-name p {
      padding-left: 0.85rem;
      padding-bottom: 0.25rem;
      font-size: 0.36rem;
      font-family: FZLTTHJW--GB1-0;
      color: rgba(71, 71, 71, 1);
      line-height: 0.5rem;
      font-weight: 900;
      text-shadow: #fff 2px 0 0, #fff 0 2px 0, #fff -2px 0 0, #fff 0 -2px 0;
      -webkit-text-shadow: #fff 2px 0 0, #fff 0 2px 0, #fff -2px 0 0,
            #fff 0 -2px 0;
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
      background: #ff9100;
      line-height: 0.84rem;
      z-index: 999;
}

.g-text {
      position: absolute;
      bottom: 3.25rem;
      left: 1.95rem;
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
      bottom: 1.72rem;
      left: 1.9rem;
      width: 3.42rem;
      height: 1.32rem;
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
      font-size: 0.24rem;
      height: 100%;
      font-family: FZLTTHJW--GB1-0;
      color: rgba(135, 134, 134, 1);
      line-height: 0.5rem;
      border-radius: 0.48rem;
      text-align: center;
}

.g-form-inp .el-input {
      height: 100%;
      border-radius: 0.48rem;
}
</style>
