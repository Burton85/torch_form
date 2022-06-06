import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueTouch from 'vue-directive-touch';
// import VueCarousel from 'vue-carousel';

Vue.use(VueTouch);
// Vue.use(VueCarousel);
Vue.config.productionTip = true;
Vue.prototype.noScroll = function() {
  // 禁止頁面滾動
  const mo = function(e) {
    e.preventDefault();
  };
  document.body.style.overflow = 'hidden';
  document.addEventListener('touchmove', mo, false, { passive: false });
};
Vue.prototype.canScroll = function() {
  // 允許滾動
  const mo = function(e) {
    e.preventDefault();
  };
  document.body.style.overflow = '';
  document.removeEventListener('touchmove', mo, false, { passive: false });
};
Vue.directive('focus', {
  inserted: function(el) {
    el.focus();
  }
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
