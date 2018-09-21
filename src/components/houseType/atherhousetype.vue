<template>
        <div class="otherhousetype" v-if="data.length != 0">
                <h1>其他户型</h1>
                <ul class="g-otherhousetype-list ">
                        <li class="displayFlex" v-for="(item,index) in data" :key="index" @click="otherHandler(item.apartmentId)">
                                <div class="u-li-img" :style="`background-image:url(${item.imageUrl})`">
                                        <span :style="`background:${f_sell_type(item.apartmentState)}`">{{f_sell_name(item.apartmentState)}}</span>
                                </div>
                                <div class="u-li-message displayFlex flexColumn flexJustifybetween">
                                        <h2>{{item.title}}</h2>
                                        <p class="u-size">建筑面积：{{item.subtitle}}</p>
                                        <p class="u-pice">约{{item.price}}</p>
                                        <div class="u-rait-list">
                                                <span v-for="(item2,index) in item.tagList" :key="index">{{item2.tagName}}</span>
                                        </div>
                                </div>
                        </li>
                </ul>
        </div>
</template>
<script>
export default {
        props: {
                data: null
        },
        data() {
                return {
                        sell_: 0
                }
        },
        methods: {

                f_sell_type(state) {
                        switch (state) {

                                case "1":
                                        return '#0080FF'
                                        break;
                                case "2":
                                        return '#68cda1'
                                        break;
                                case "3":
                                        return '#B9C0C8'
                                        break;
                                default:
                                        break;

                        }
                },

                f_sell_name(state) {
                        switch (state) {

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
                },

                otherHandler(data) {
                        this.$emit('otherHandler', data);
                }
        }
}
</script>
<style scoped>
.otherhousetype {
  padding-top: 0.4rem;
  background: #fff;
}
.otherhousetype h1 {
  margin-left: 0.3rem;
  font-family: PingFangSC-Medium;
  color: #212832;
  font-size: 0.32rem;
  line-height: 0.32rem;
}

.g-otherhousetype-list li {
  padding-bottom: 0.4rem;
  padding-top: 0.4rem;
  border-bottom: 1px solid rgba(151, 151, 151, 0.2);
}
.g-otherhousetype-list .u-li-img {
  position: relative;
  margin-left: 0.3rem;
  width: 2.2rem;
  height: 1.6rem;
  background-size: cover;
}
.g-otherhousetype-list .u-li-img span {
  position: absolute;
  right: 0;
  top: 0;
  display: inline-block;
  width: 0.56rem;
  height: 0.3rem;
  font-family: PingFangSC-Medium;
  color: #fff;
  font-size: 0.2rem;
  line-height: 0.3rem;
  text-align: center;
}
.u-li-message {
  margin-left: 0.4rem;
  width: 4.3rem;
}
.u-li-message h2 {
  font-family: PingFangSC-Medium;
  color: #212832;
  font-size: 0.28rem;
  line-height: 0.28rem;
}
.u-li-message .u-size {
  margin: 0.1rem 0 0.1rem 0;
  font-family: PingFangSC-Medium;
  color: #8b949e;
  font-size: 0.22rem;
  line-height: 0.22rem;
}
.u-li-message .u-pice {
  font-family: PingFangSC-Medium;
  color: #f00;
  font-size: 0.28rem;
  line-height: 0.28rem;
}
.u-li-message .u-rait-list span {
  display: inline-block;
  margin-right: 0.05rem;
  margin-top: 0.05rem;
  padding: 0.08rem;
  border: 1px solid rgba(99, 177, 255, 1);
  border-radius: 2px;
  font-family: PingFangSC-Medium;
  color: #63b1ff;
  font-size: 0.2rem;
  line-height: 0.2rem;
}
</style>

