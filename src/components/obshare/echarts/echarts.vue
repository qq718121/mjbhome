<!--<template>-->
  <!--<div class="echarts">-->
    <!--<div id="myChart" style="width:100%;height:4rem"></div>-->
  <!--</div>-->
<!--</template>-->
<!--<script>-->
  <!--//   引入基本模板-->
  <!--let echarts = require('echarts/lib/echarts');-->
  <!--// 引入柱状图组件-->
  <!--require("echarts/lib/chart/radar");-->
  <!--// 引入提示框和title组件-->
  <!--require('echarts/lib/component/tooltip');-->
  <!--require('echarts/lib/component/title');-->
  <!--export default {-->
    <!--data(){-->
      <!--return {-->
        <!--e_arr: [],-->
        <!--echarts: []-->
      <!--}-->
    <!--},-->
    <!--props: {-->
      <!--echart: Array,-->
    <!--},-->
    <!--mounted(){-->
      <!--this.echarts = this.echart;-->
      <!--for (let i in this.echarts) {-->
        <!--this.echarts[i].text = this.echarts[i].gradeName;-->
        <!--this.echarts[i].max = 100;-->
        <!--this.echarts[i].max = 100;-->
        <!--this.e_arr.push(this.echarts[i].gradeNum);-->
      <!--}-->
      <!--this.echarts = this.echarts_reverse(this.echarts);-->
      <!--this.e_arr = this.echarts_reverse(this.e_arr);-->
      <!--this.drawLine();-->
    <!--},-->
    <!--methods: {-->
      <!--drawLine() {-->
        <!--// 基于准备好的dom，初始化echarts实例-->
        <!--let dom = document.getElementById('myChart')-->
        <!--let myChart = echarts.init(document.getElementById('myChart'));-->
        <!--let option = {-->
          <!--baseOption: {-->
            <!--//这里是原子option-->
            <!--legend: {-->
              <!--data: [],-->
              <!--left: '10%'-->
            <!--},-->
            <!--radar: [-->
              <!--{-->
                <!--indicator: this.echarts,-->
                <!--center: ['50%', '50%'],-->
                <!--radius: '65%',-->
                <!--startAngle: 90,-->
                <!--splitNumber: 3,-->
                <!--shape: 'circle',-->
                <!--name: {-->
                  <!--formatter: '{value}',-->
                  <!--textStyle: {-->
                    <!--color: 'rgba(0,0,0,0.43)'-->
                  <!--}-->
                <!--},-->
                <!--splitArea: {-->
                  <!--areaStyle: {-->
                    <!--color: [' #F8F8F8', '#F8F8F8', ' #F8F8F8']-->
                  <!--}-->
                <!--},-->
                <!--axisLine: {-->
                  <!--lineStyle: {-->
                    <!--color: '#EBEBEB'-->
                  <!--}-->
                <!--},-->
                <!--splitLine: {-->
                  <!--lineStyle: {-->
                    <!--color: '#EBEBEB'-->
                  <!--}-->
                <!--}-->
              <!--}-->
            <!--],-->
            <!--series: [-->
              <!--{-->
                <!--name: '雷达图',-->
                <!--type: 'radar',-->

                <!--itemStyle: {-->
                  <!--emphasis: {-->
                    <!--lineStyle: {-->
                      <!--width: 3-->
                    <!--}-->
                  <!--}-->
                <!--},-->
                <!--data: [-->
                  <!--{-->
                    <!--value: this.e_arr,-->
                    <!--name: '图一',-->
                    <!--symbol: 'circle',-->
                    <!--symbolSize: 3,-->
                    <!--areaStyle: {-->
                      <!--normal: {-->
                        <!--type: 'solid',-->
                        <!--color: 'rgba(6,167,107,0.60)'-->
                      <!--}-->
                    <!--},-->
                    <!--itemStyle: {-->
                      <!--normal: {-->
                        <!--color: "none",  // 会设置点和线的颜色，所以需要下面定制 line-->
                        <!--borderColor: "#484848"-->
                      <!--}-->
                    <!--}-->
                  <!--}-->
                <!--]-->
              <!--}-->
            <!--],-->
          <!--},-->
<!--//          media: [ // 这里定义了 media query 的逐条规则。-->
<!--//            {-->
<!--//              query: {minWidth: 400},   // 这里写规则。-->
<!--//              option: {       // 这里写此规则满足下的option。-->
<!--//                legend: {-->
<!--//                  right: 10,              // legend 放置在右侧中间。-->
<!--//                  top: '15%',-->
<!--//                  orient: 'vertical'      // 纵向布局。-->
<!--//                },-->
<!--//                radar: [-->
<!--//                  {-->
<!--//                    indicator: this.echart,-->
<!--//                    center: ['50%', '50%'],-->
<!--//                    radius: '65%',-->
<!--//                    startAngle: 90,-->
<!--//                    splitNumber: 3,-->
<!--//                    shape: 'circle',-->
<!--//                    name: {-->
<!--//                      formatter: '{value}',-->
<!--//                      textStyle: {-->
<!--//                        color: 'rgba(0,0,0,0.43)'-->
<!--//                      }-->
<!--//                    },-->
<!--//                    splitArea: {-->
<!--//                      areaStyle: {-->
<!--//                        color: [' #F8F8F8', '#F8F8F8', ' #F8F8F8']-->
<!--//                      }-->
<!--//                    },-->
<!--//                    axisLine: {-->
<!--//                      lineStyle: {-->
<!--//                        color: '#EBEBEB'-->
<!--//                      }-->
<!--//                    },-->
<!--//                    splitLine: {-->
<!--//                      lineStyle: {-->
<!--//                        color: '#EBEBEB'-->
<!--//                      }-->
<!--//                    }-->
<!--//                  }-->
<!--//                ],-->
<!--//              }-->
<!--//            }-->
<!--//          ]-->
        <!--}-->
        <!--myChart.setOption(option);-->
      <!--},-->
      <!--echarts_reverse(arr){-->
        <!--let arr_one = arr.slice(0, 1);-->
        <!--let len = arr.length;-->
        <!--let arr_two = arr.slice(1, len);-->
        <!--return [...arr_one, ...arr_two.reverse()];-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
