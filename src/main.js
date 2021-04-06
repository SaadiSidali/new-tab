import Vue from 'vue';
import App from './App.vue';
import './index.css';
import './file.css';

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  },
}).$mount('#app');
