/**
 * Created by lenovo on 2017/11/20.
 */
import Vue from 'vue';

export default Vue.directive('scroll', {
          inserted: function (el, binding) {
                    binding.value();
                    if (window.addEventListener) {
                              window.addEventListener('scroll', binding.value);
                    } else if (window.attachEvent) {
                              window.attachEvent('on' + 'scroll', binding.value);
                    } else {
                              window['on' + scroll] = binding.value;
                    }
          }
});
