import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    //全局Loding状态开关
    loading: false,
    //遮罩框内容状态
    motai_num: '',
    //遮罩框动态性格
    school_class: '',
    share_: false,
    //遮罩框显示开关
    is_motai: false,
    //map_icon激活码
    apap_icon_num: 0,
    //遮罩框关闭状态
    is_close: true,
    //储存vr数据
    vr_obj: {},
    //质量寻光分享类别
    dat_com: {},
    //  质量寻光分享类别
    data_comment: {}
  },
  mutations: {
    //3秒真男人
    threeLading(state){
      state.loading = true;
      setTimeout(() => {
        state.loading = false
      }, 300);
    },
    //确认渲染哪一个遮罩框组件
    set_motai(state, data){
      state.motai_num = data;
    },
    //遮罩框显示的样式
    set_school_class(state, data){
      state.school_class = data;
    },
    //遮罩框显示状态
    change_motai(state){
      state.is_motai = !state.is_motai;
    },
    //储存map激活码
    set_amap_icon(state, data){
      state.apap_icon_num = data;
    },
    //遮罩框关闭
    close_show(state){
      state.is_close = !state.is_close;
    },
    //储存vr数据
    set_vr_obj(state, data){
      state.vr_obj = data;
    },
    set_dat_com(state, data){
      state.dat_com = data;
    },
    set_data_comment(state,data){
      state.data_comment = data;
    }
  },

});
export default store;
