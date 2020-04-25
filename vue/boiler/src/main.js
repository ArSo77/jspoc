import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from "vuelidate/src";


Vue.config.productionTip = false

Vue.directive('click-outside', {
  bind (el, binding) {
    el.__ClickOutsideHandler__ = evt => {
      if (!(el === evt.target || el.contains(evt.target))) {
        binding.value(evt);
      }
    };
    document.body.addEventListener('click', el.__ClickOutsideHandler__)
  },
  unbind (el) {
    document.body.removeEventListener('click', el.__ClickOutsideHandler__)
  }
});

Vue.use(Vuelidate);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
