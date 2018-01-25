/**
 * Created by lenovo on 2017/11/20.
 */
import Vue from 'vue';

export default Vue.directive('scroll', {

  bind: function (el, binding) {

    window.addEventListener('scroll', () => {
      let scr_top = parseInt(document.body.scrollTop) || parseInt(document.documentElement.scrollTop);
      let inner_height = parseInt(window.innerHeight);
      let cl_height = parseInt(el.clientHeight);
      if (scr_top + inner_height+1 >= cl_height) {
        let fnc = binding.value;
        if (!fnc.a) {
          setTimeout(function () {
             fnc.b();
          },1000);

        } else {
          console.log(scr_top + inner_height > cl_height);
        }
      }
    })
  }
});

