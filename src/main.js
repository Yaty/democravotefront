import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import Web3 from 'web3'
import router from './router'
import truffle from '../truffle';
import web3Contract from './web3/web3';

Vue.config.productionTip = false;

window.web3 = new Web3(new Web3.providers.HttpProvider(truffle.networks.kovan.uri));
web3Contract.init().then(() => web3Contract.vote()).then((res) => {
  // eslint-disable-next-line
  console.log(res);
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
