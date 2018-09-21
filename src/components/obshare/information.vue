<template>
        <div class="information">
                <div class="information_title_img" v-if="!isSubmit"></div>
                <div class="name_inp" v-if="!isSubmit">
                        <h1>姓名</h1>
                        <el-input type="text" @input="f_isBtn" @focus="focusHandler($event)" placeholder="请输入您的真实姓名" v-model="name_" clearable></el-input>
                </div>
                <div class="phone_inp" v-if="!isSubmit">
                        <h1>手机号</h1>
                        <el-input type="tel" @input="f_isBtn" placeholder="请输入您的联系方式" v-model="phone_" clearable></el-input>
                </div>
                <div class="submit_" v-if="!isBtn && !isSubmit">
                        <span>提交</span>
                </div>
                <div class="submit_action" v-if="isBtn && !isSubmit" @click="submit_">
                        <span>提交</span>
                </div>
                <div class="success_" v-if="isSubmit">
                        <div class="successImg"></div>
                        <h2>提交成功</h2>
                        <p>销售顾问正在为您确认优惠信息</p>
                        <p>请保持电话畅通</p>
                </div>
        </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import OB from '../../common/js/obshare.js';
export default {
        data() {
                return {
                        name_: '',
                        phone_: '',
                        isBtn: false,
                        isSubmit: false
                }
        },
        computed: {
                ...mapState({
                        // apap_icon_num: 'apap_icon_num'
                        ph_: state => state.phone_
                }),
        },
        methods: {
                ...mapMutations({
                        set_hint: "set_hint",
                        set_phone_: "set_phone_"
                }),

                f_isBtn() {
                        if (this.name_ && this.phone_) {
                                this.isBtn = true;
                                return;
                        }
                        this.isBtn = false;
                },
                initPhone() {
                        if (this.ph_) {
                                this.phone_ = this.ph_;
                        }
                },
                focusHandler(e) {

                },
                submit_() {
                        if (!OB.checkMobile(this.phone_)) {
                                this.set_hint("请输入正确的手机号");
                                return;
                        }

                        let buiding = "buiding/remindMe";
                        let id = this.$route.params.id;
                        let url = this.$url.httpRequestse + buiding;
                        let body = {
                                propertyId: id,
                                typeId: '2',
                                userName: this.name_,
                                userPhone: this.phone_
                        }

                        let options = {
                                urls: url,
                                methods: 'post',
                                data: body,
                                des: true,
                                types: 3
                        };

                        this.$http(options).then(res => {

                                if (this.$route.query.path) {
                                        this.set_phone_(this.phone_);
                                        this.set_hint("提交成功");
                                        let itimer = setTimeout(() => {
                                                this.$router.push({
                                                        path: this.$route.query.path,
                                                });
                                        }, 2000);
                                        return;
                                }

                                this.isSubmit = true;
                                this.isBtn = false;

                        }).catch(err => {
                                this.set_hint("网络错误");
                                this.isSubmit = false;
                        });
                }
        },
        created() {
                this.initPhone();
        }
}
</script>
<style scoped>
.information {
  position: relative;
  width: 7.5rem;
  height: 100vh;
  margin: auto;
}
.information_title_img {
  margin: 0.3rem auto;
  width: 6.9rem;
  height: 2.6rem;
  background-image: url("/static/obshare/pic_banner@3x.png");
  background-size: cover;
}
.name_inp {
  margin: 0.4rem auto;
  width: 6.9rem;
}
.phone_inp {
  margin: 0.4rem auto;
  width: 6.9rem;
}
.submit_,
.submit_action {
  margin: 1rem auto;
  width: 6.9rem;
  height: 0.98rem;
  text-align: center;
  line-height: 0.98rem;
  font-family: PingFangSC-Regular;
  color: #ffffff;
  font-size: 0.32rem;
}
.submit_ {
  background: #b9c0c8;
}
.submit_action {
  background: #0080ff;
}
.successImg {
  margin: 1.86rem auto 0;
  width: 3rem;
  height: 3rem;
  background: url(/static/obshare/pic_fabuchenggong@3x.png) no-repeat;
  background-size: cover;
}
.success_ h2 {
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-size: 0.32rem;
  color: #212832;
  line-height: 0.28rem;
}
.success_ p {
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 0.28rem;
  color: #8b949e;
  letter-spacing: 2.57px;
  line-height: 0.44rem;
}
</style>
<style>
.information .el-input {
  width: 100%;
  font-family: PingFangSC-Regular;
  color: #8b949e;
  font-size: 0.28rem;
  text-align: center;
  border: none;
}
.information .el-input__inner {
  padding: 0;
  height: 0.8rem;
  line-height: 0.8rem;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  border-bottom: 1px solid rgba(231, 231, 231, 1);
}
</style>


