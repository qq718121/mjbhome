<template>
        <div class="houstype">
                <div class="housetype_title_img" :style="`background-image:url(${housetypedata.titImg})`" @click="hrefLoad">
                        <span class="u-housetype_title_img_num">共{{housetypedata.num}}张</span>
                </div>
                <div class="g-housetype-header-content">
                        <div class="g-housetype-heade-top displayFlex">
                                <span class="u-housetype-h1">{{housetypedata.title}}</span>
                                <span class="u-housetype-icon" :style="`background:${f_sell_type}`">{{f_sell_name}}</span>
                        </div>
                        <p class="u-housetype-market-pice">市场价 {{housetypedata.price}}</p>
                        <div class="u-housetype-trait-list">
                                <span v-for="(item,index) in housetypedata.tagList" :key="index">{{item.tagName}}</span>
                        </div>
                        <div class="u-housetype-header-message">
                                <span>建筑面积：{{housetypedata.square}}</span>
                                <span>物业类型：{{housetypedata.wyType}}</span>
                        </div>
                        <div class="u-housetype-header-message">
                                <span>户型朝向：{{housetypedata.direction}}</span>
                                <span>户型结构：{{housetypedata.form}}</span>
                        </div>
                </div>
                <div class="g-housetype-this-house">
                        <h1>所在楼栋</h1>
                        <p>{{housetypedata.belonging || '暂无'}}</p>
                </div>
                <Otherhousetype :data="housetypedata.apartmentTypeList" v-on:otherHandler="otherHandler" />
                <MessageBtn :ph_="housetypedata.phoneNumber" :uid="$route.params.id" v-if="housetypedata.showReminder == '1'" />
        </div>
</template>
<script>
import MessageBtn from '../obshare/messageBtn'
import Otherhousetype from './atherhousetype'
export default {
        components: {
                MessageBtn,
                Otherhousetype
        },
        data() {
                return {
                        sell_: 1,
                        path_: "",
                        housetypedata: {
                                titImg: '',
                                num: 0
                        }
                }
        },
        computed: {

                f_sell_type() {
                        switch (this.housetypedata.apartmentState) {

                                case "1":
                                        return '#0080FF';
                                        break;
                                case "2":
                                        return '#68cda1';
                                        break;
                                case "3":
                                        return '#B9C0C8';
                                        break;
                                default:
                                        break;

                        }
                },
                f_sell_name() {
                        switch (this.housetypedata.apartmentState) {

                                case "1":
                                        return '在售'
                                        break;
                                case "2":
                                        return '待售'
                                        break;
                                case "3":
                                        return '售罄'
                                        break;
                                default:
                                        break;

                        }
                }
        },
        methods: {
                hrefLoad() {
                        window.location = this.$url.appDown;
                },
                get_http() {
                        let this_ = this;
                        let buiding = "buiding/getApartmentTypeInfo";
                        let id = this.$route.params.id;
                        let arid = this.$route.params.arid;
                        let url = this.$url.httpRequestse + buiding;
                        let body = {
                                propertyId: id,
                                apartmentId: arid
                        }
                        let options = {
                                urls: url,
                                methods: 'post',
                                data: body,
                                des: true,
                                types: 1
                        };
                        this.$http(options).then(res => {
                                this_.housetypedata = res.response.data;

                                this_.housetypedata.titImg = this_.housetypedata.picList[0].imageUrl;
                                this_.housetypedata.num = this_.housetypedata.picList.length;
                        }).catch(err => { });
                },
                otherHandler(data) {
                        this.$router.push({
                                path: `/housetype/${this.$route.params.id}/${data}`
                        });
                        this.get_http();
                        window.scrollTo(0, 0);
                }
        },
        created() {
                this.get_http();
        }
}
</script>
<style scoped>
.houstype {
  margin: auto;
  background: rgba(151, 151, 151, 0.2);
  width: 7.5rem;
  padding-bottom: 1.5rem;
}
.housetype_title_img {
  position: relative;
  width: 100%;
  height: 6.55rem;
  background-size: cover;
}
.u-housetype_title_img_num {
  position: absolute;
  bottom: 0.24rem;
  right: 0.3rem;
  display: inline-block;
  width: 1.32rem;
  height: 0.44rem;
  background: #000000;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 100px;
  color: #fff;
  font-family: PingFangSC-Regular;
  font-size: 0.24rem;
  line-height: 0.44rem;
  text-align: center;
}
.g-housetype-header-content {
  padding: 0.4rem 0 0.4rem 0.3rem;
  background: #fff;
}
.g-housetype-heade-top {
}
.g-housetype-heade-top .u-housetype-h1 {
  font-family: PingFangSC-Medium;
  color: #212832;
  font-size: 0.4rem;
  line-height: 0.4rem;
}
.g-housetype-heade-top .u-housetype-icon {
  display: inline-block;
  margin-left: 0.1rem;
  font-family: PingFangSC-Medium;
  color: #fff;
  font-size: 0.2rem;
  background: #68cda1;
  border-radius: 2px;
  width: 0.72rem;
  height: 0.4rem;
  text-align: center;
  line-height: 0.4rem;
}
.g-housetype-header-content .u-housetype-market-pice {
  margin-top: 0.2rem;
  font-family: PingFangSC-Medium;
  color: #f00;
  font-size: 0.3rem;
  line-height: 0.3rem;
}
.g-housetype-header-content .u-housetype-trait-list {
  margin-top: 0.2rem;
  font-family: PingFangSC-Medium;
  color: #63b1ff;
  font-size: 0.2rem;
  line-height: 0.2rem;
}
.g-housetype-header-content .u-housetype-trait-list span {
  display: inline-block;
  margin-right: 0.1rem;
  padding: 0.08rem;
  border: 1px solid rgba(99, 177, 255, 1);
  border-radius: 2px;
}
.g-housetype-header-content .u-housetype-header-message {
  margin-top: 0.2rem;
  font-family: PingFangSC-Regular;
  color: #212832;
  font-size: 0.24rem;
  line-height: 0.24rem;
}
.g-housetype-header-content .u-housetype-header-message span {
  display: inline-block;
  width: 48%;
}
.g-housetype-this-house {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  padding: 0.3rem 0 0.4rem 0.3rem;
  background: #fff;
}
.g-housetype-this-house h1 {
  font-family: PingFangSC-Medium;
  color: #212832;
  font-size: 0.28rem;
  line-height: 0.24rem;
}
.g-housetype-this-house p {
  margin-top: 0.3rem;
  font-family: PingFangSC-Regular;
  color: #212832;
  font-size: 0.24rem;
  line-height: 0.24rem;
}
</style>
