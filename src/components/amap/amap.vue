<!--<template>-->
  <!--<div class="amap">-->
    <!--<div>-->
      <!--<div id="container" class='mapTwo'></div>-->
      <!--<div class="amap_icon">-->
        <!--<div class="amap_list">-->
          <!--<div :class="['amap_list_icon',{'active_icon':active_icon_num == index}]"-->
               <!--v-for="(val,index) in this.amap_icon_list" @click="amap_click(index)">-->
            <!--<span-->
              <!--:style="'background-image:url('+(active_icon_num == index ? val.active_img : val.img)+')'">-->
            <!--</span>-->
            <!--<p>{{val.name}}</p>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->
<!--<script>-->
  <!--import {mapState} from 'vuex';-->
  <!--export default {-->
    <!--data(){-->
      <!--return {-->
        <!--active_icon_num: 0,-->
        <!--target_amap: '',-->
        <!--placeSearch: '',-->
        <!--map: '',-->
        <!--formattedAddress: '',-->
        <!--infoWindow: '',-->
        <!--property: [],-->
        <!--searchOption: {-->
          <!--city: '北京',-->
          <!--citylimit: true-->
        <!--},-->
        <!--amap_icon_list: [-->
          <!--{img: this.$url.dt, active_img: this.$url.active_dt, name: '地铁'},-->
          <!--{img: this.$url.yy, active_img: this.$url.active_yy, name: '医院'},-->
          <!--{img: this.$url.gj, active_img: this.$url.active_gj, name: '公交'},-->
          <!--{img: this.$url.xx, active_img: this.$url.active_xx, name: '学校'},-->
          <!--{img: this.$url.gw, active_img: this.$url.active_gw, name: '购物'},-->
          <!--{img: this.$url.cs, active_img: this.$url.active_cs, name: '超市'},-->
          <!--{img: this.$url.yh, active_img: this.$url.active_yh, name: '银行'},-->
          <!--{img: this.$url.xiuxian, active_img: this.$url.active_xiuxian, name: '休闲'},-->
          <!--{img: this.$url.js, active_img: this.$url.active_js, name: '健身'}-->
        <!--],-->
      <!--}-->
    <!--},-->
    <!--mounted(){-->
      <!--let propertyLon = this.$route.query.propertyLon;-->
      <!--let propertyLat = this.$route.query.propertyLat;-->
      <!--this.property = [propertyLon * 1, propertyLat * 1];-->
      <!--this.map_init();-->
      <!--this.serch();-->
      <!--this.active_icon_num = this.$store.state.apap_icon_num;-->
    <!--},-->
    <!--computed: {-->
      <!--...mapState({-->
        <!--apap_icon_num: 'apap_icon_num'-->
      <!--}),-->
    <!--},-->
    <!--methods: {-->
      <!--//初始化地图-->
      <!--map_init(){-->
        <!--let this_ = this;-->
        <!--this.map = new AMap.Map("container", {-->
          <!--resizeEnable: true,-->
          <!--zoom: 11,-->
          <!--center: this_.property-->
        <!--});-->
        <!--this_.maker();-->
        <!--this_.address();-->
      <!--},-->

      <!--serch(){-->
        <!--let this_ = this;-->

        <!--AMap.service(["AMap.PlaceSearch"], function () {-->
          <!--let placeSearch = new AMap.PlaceSearch({ //构造地点查询类-->
            <!--pageSize: 5,-->
            <!--typ: '餐饮服务',-->
            <!--pageIndex: 1,-->
            <!--map: this_.map-->
          <!--});-->
          <!--placeSearch.clear();-->
          <!--this_.map.clearMap();-->
          <!--//中心点坐标-->
          <!--let cpoint = this_.property;-->
          <!--placeSearch.searchNearBy(this_.amap_type(this_.apap_icon_num.toString()), cpoint, 5000, function (status, result) {-->

          <!--});-->
        <!--});-->
        <!--function* timer() {-->
          <!--yield setTimeout(function () {-->
            <!--this_.maker();-->
          <!--}, 500);-->
          <!--yield clearTimeout();-->
        <!--}-->

        <!--timer().next();-->
        <!--timer().next();-->
      <!--},-->
      <!--//创建标记点-->
      <!--maker(){-->
        <!--let this_ = this;-->
        <!--let content = document.createElement('div');-->
        <!--content.style.backgroundImage = "url(" + this_.$url.lp + ")";-->
        <!--content.style.backgroundSize = '100%';-->
        <!--content.style.height = '1rem';-->
        <!--content.style.width = '1rem';-->
        <!--let marker = new AMap.Marker({-->
          <!--content: content,-->
          <!--position: this_.property,-->
          <!--offset: new AMap.Pixel(-12, -12),-->
          <!--map: this_.map-->
        <!--});-->
        <!--marker.setMap(this_.map);-->
        <!--marker.on('click', (e) => {-->
          <!--this_.openInfo();-->
        <!--});-->
      <!--},-->
      <!--//打开信息窗体-->
      <!--openInfo(){-->
        <!--let this_ = this;-->
        <!--//在指定位置打开信息窗体-->
        <!--let house_name = this_.$route.query.house_name;-->
        <!--//构建信息窗体中显示的内容-->
        <!--let info = [];-->
        <!--info.push("<div style=\"padding:0px 0px 0px 4px\"><b>" + house_name + "</b>");-->
        <!--info.push(`${this_.formattedAddress}</div></div>`);-->
        <!--this_.infoWindow = new AMap.InfoWindow({-->
          <!--content: info.join("<br/>"),  //使用默认信息窗体框样式，显示信息内容-->
          <!--offset: new AMap.Pixel(10, -10)-->
        <!--});-->
        <!--this_.infoWindow.open(this_.map, this_.property);-->
      <!--},-->
      <!--//获取地址信息-->
      <!--address(){-->
        <!--let this_ = this;-->
        <!--let geocoder = new AMap.Geocoder({-->
          <!--radius: 1000,-->
          <!--extensions: "all"-->
        <!--});-->
        <!--geocoder.getAddress(this_.property, function (status, result) {-->
          <!--if (status === 'complete' && result.info === 'OK') {-->
            <!--let formattedAddress = result.regeocode.formattedAddress;-->
            <!--this_.formattedAddress = formattedAddress;-->
          <!--}-->
        <!--});-->
      <!--},-->
      <!--amap_click(index)-->
      <!--{-->
        <!--this.active_icon_num = index;-->
        <!--this.$store.commit('set_amap_icon', index);-->
        <!--//中心点坐标-->
        <!--this.map.clearMap();-->
        <!--this.serch();-->
      <!--}-->
      <!--,-->
      <!--amap_type(data)-->
      <!--{-->
        <!--switch (data) {-->
          <!--case '0':-->
            <!--return '地铁';-->
            <!--break;-->
          <!--case '1':-->
            <!--return '医院';-->
            <!--break;-->
          <!--case '2':-->
            <!--return '公交';-->
            <!--break;-->
          <!--case '3':-->
            <!--return '学校';-->
            <!--break;-->
          <!--case '4':-->
            <!--return '购物';-->
            <!--break;-->
          <!--case '5':-->
            <!--return '超市';-->
            <!--break;-->
          <!--case '6':-->
            <!--return '银行';-->
            <!--break;-->
          <!--case '7':-->
            <!--return '休闲';-->
            <!--break;-->
          <!--case '8':-->
            <!--return '健身';-->
            <!--break;-->
        <!--}-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->
<!--<style scoped>-->
  <!--.amap_top {-->
    <!--width: 7.2rem;-->
    <!--height: 0.8rem;-->
    <!--padding-left: 0.3rem;-->
    <!--font-family: PingFangSC-Medium, "微软雅黑";-->
    <!--font-size: 0.28rem;-->
    <!--color: #212832;-->
    <!--line-height: 0.8rem;-->
    <!--font-weight: 600;-->
    <!--background: #fff;-->
  <!--}-->

  <!--.active_icon {-->
    <!--color: #0080FF !important;-->
  <!--}-->

  <!--.mapTwo {-->
    <!--width: 7.5rem;-->
    <!--height: 86.8vh;-->
    <!--border-top: 0.037rem solid #E0E0E0;-->
    <!--text-align: center;-->
    <!--margin: auto-->
  <!--}-->

  <!--.amap_icon {-->
    <!--width: 7.5rem;-->
    <!--height: 1.22rem;-->
    <!--background: #fff;-->
    <!--overflow-x: scroll;-->
    <!--overflow-y: hidden;-->
    <!-- -webkit-overflow-scrolling: touch;-->
  <!--}-->

  <!--.amap_list {-->
    <!--width: 12.21rem;-->
    <!--display: flex;-->
    <!--justify-content: space-around;-->
    <!--height: 1rem;-->
  <!--}-->

  <!--.amap_list_icon {-->

    <!--font-family: PingFangSC-Regular;-->
    <!--font-size: 0.24rem;-->
    <!--color: #8B949E;-->
    <!--line-height: 0.24rem;-->
    <!--text-align: center;-->
    <!--display: flex;-->
    <!--flex-flow: column;-->
    <!--align-items: center;-->
    <!--justify-content: center;-->
  <!--}-->

  <!--.amap_list .amap_list_icon span {-->
    <!--width: 0.34rem;-->
    <!--height: 0.33rem;-->
    <!--background: #fff;-->
    <!--display: inline-block;-->
    <!--margin: auto;-->
    <!--background-size: cover;-->
  <!--}-->

  <!--#panel {-->
    <!--position: fixed;-->
    <!--background-color: white;-->
    <!--max-height: 90%;-->
    <!--overflow-y: auto;-->
    <!--top: 0.1rem;-->
    <!--right: 0.1rem;-->
    <!--width: 2.8rem;-->
    <!--border-bottom: solid 0.01rem silver;-->
  <!--}-->
<!--</style>-->
