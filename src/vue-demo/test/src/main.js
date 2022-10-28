import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.component('anchored-heading', {
  render: function(createElement) {
    console.log(this);
    this.$watch('level', function(n, o) {
      console.log('wathch-lelvel', n, o);
    });
    return createElement(
      'h' + this.level, // 标签名称
      this.$slots.default // 子节点数组
    );
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
